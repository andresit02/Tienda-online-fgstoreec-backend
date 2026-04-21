import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken, authorizeRoles } from '../auth/auth.middleware.js';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  try {
    const importaciones = await prisma.importation.findMany({
      include: {
        productos: {
          include: { sales: true }
        }
      },
      orderBy: { fecha: 'desc' }
    });

    const data = importaciones.map(imp => {
      let cantidadUnidades = 0;
      let costoTotalLote = 0;

      imp.productos.forEach(p => {
         const unidadesVendidas = p.sales.reduce((sum, s) => sum + s.cantidad, 0);
         const unidadesOriginales = p.stock + unidadesVendidas;

         cantidadUnidades += unidadesOriginales;
         costoTotalLote += (p.costoUnitario * unidadesOriginales);
      });

      return {
        ...imp,
        cantidadModelos: imp.productos.length,
        cantidadUnidades, 
        costoTotalLote
      };
    });

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al cargar importaciones' });
  }
});

router.post('/', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  try {
    const nuevaImportacion = await prisma.importation.create({
      data: { nombre: req.body.nombre }
    });
    res.json(nuevaImportacion);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear importación' });
  }
});

// --- CORRECCIÓN: AHORA SÍ GUARDAMOS EL NOMBRE DEL SOCIO EN LA BASE DE DATOS ---
router.put('/:id/inversion', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  try {
    const actualizado = await prisma.importation.update({
      where: { id: Number(req.params.id) },
      data: { 
        inversionSocio: Number(req.body.inversionSocio),
        nombreSocio: req.body.nombreSocio // <--- Esta es la línea mágica que faltaba
      }
    });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar inversión' });
  }
});

export default router;