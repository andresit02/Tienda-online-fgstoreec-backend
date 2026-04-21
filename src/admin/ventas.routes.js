import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken, authorizeRoles } from '../auth/auth.middleware.js';

const router = express.Router();
const prisma = new PrismaClient();

// Registrar una venta
router.post('/', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  try {
    const { productId, cantidad, precioVentaTotal, tipoEntrega, gastosDetalle, totalGastos } = req.body;
    const producto = await prisma.product.findUnique({ where: { id: Number(productId) } });
    
    if (!producto || producto.stock < cantidad) {
      return res.status(400).json({ error: 'Stock insuficiente o producto no encontrado' });
    }

    const costoProductoEnVenta = producto.costoUnitario;
    const costoTotalProducto = costoProductoEnVenta * cantidad;
    const gananciaNeta = precioVentaTotal - totalGastos - costoTotalProducto;

    const [nuevaVenta] = await prisma.$transaction([
      prisma.sale.create({
        data: {
          productId: Number(productId), cantidad: Number(cantidad), precioVentaTotal: Number(precioVentaTotal),
          tipoEntrega, gastosDetalle, totalGastos: Number(totalGastos), costoProductoEnVenta, gananciaNeta
        }
      }),
      prisma.product.update({
        where: { id: Number(productId) },
        data: { stock: producto.stock - cantidad } 
      })
    ]);

    res.json(nuevaVenta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al registrar la venta' });
  }
});

// Obtener reporte de ventas
router.get('/', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  try {
    const ventas = await prisma.sale.findMany({ include: { product: true }, orderBy: { fecha: 'desc' } });
    res.json(ventas);
  } catch (error) { res.status(500).json({ error: 'Error al obtener ventas' }); }
});

// --- NUEVO: EDITAR VENTA Y RECALCULAR STOCK ---
router.put('/:id', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  try {
    const { id } = req.params;
    const { cantidad, precioVentaTotal, tipoEntrega, gastosDetalle, totalGastos } = req.body;
    
    const ventaActual = await prisma.sale.findUnique({ where: { id: Number(id) } });
    if (!ventaActual) return res.status(404).json({ error: 'Venta no encontrada' });

    const diferenciaCantidad = Number(cantidad) - ventaActual.cantidad;
    const producto = await prisma.product.findUnique({ where: { id: ventaActual.productId } });
    
    if (producto.stock < diferenciaCantidad) return res.status(400).json({ error: 'Stock insuficiente para esta modificación' });

    const costoTotalProducto = ventaActual.costoProductoEnVenta * Number(cantidad);
    const gananciaNeta = Number(precioVentaTotal) - Number(totalGastos) - costoTotalProducto;

    await prisma.$transaction([
      prisma.sale.update({
        where: { id: Number(id) },
        data: { cantidad: Number(cantidad), precioVentaTotal: Number(precioVentaTotal), tipoEntrega, gastosDetalle, totalGastos: Number(totalGastos), gananciaNeta }
      }),
      prisma.product.update({
         where: { id: ventaActual.productId },
         data: { stock: producto.stock - diferenciaCantidad }
      })
    ]);
    res.json({ message: 'Venta actualizada correctamente' });
  } catch (error) { res.status(500).json({ error: 'Error al actualizar venta' }); }
});

// Deshacer venta y restaurar stock
router.delete('/:id', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  try {
    const { id } = req.params;
    const venta = await prisma.sale.findUnique({ where: { id: Number(id) } });
    
    if (!venta) return res.status(404).json({ error: 'Venta no encontrada' });

    await prisma.$transaction([
      prisma.sale.delete({ where: { id: Number(id) } }),
      prisma.product.update({
        where: { id: venta.productId },
        data: { stock: { increment: venta.cantidad } }
      })
    ]);

    res.json({ message: 'Venta anulada y stock restaurado' });
  } catch (error) { res.status(500).json({ error: 'Error al anular la venta' }); }
});

export default router;