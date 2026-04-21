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
      let unidadesDisponibles = 0; // <--- NUEVO CÁLCULO

      imp.productos.forEach(p => {
         const unidadesVendidas = p.sales.reduce((sum, s) => sum + s.cantidad, 0);
         const unidadesOriginales = p.stock + unidadesVendidas;

         cantidadUnidades += unidadesOriginales;
         unidadesDisponibles += p.stock; // Sumamos lo que queda en bodega
         costoTotalLote += (p.costoUnitario * unidadesOriginales);
      });

      return {
        ...imp,
        cantidadModelos: imp.productos.length,
        cantidadUnidades,
        unidadesDisponibles, // <--- LO ENVIAMOS AL FRONTEND
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

router.put('/:id/inversion', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  try {
    const actualizado = await prisma.importation.update({
      where: { id: Number(req.params.id) },
      data: { 
        inversionSocio: Number(req.body.inversionSocio),
        nombreSocio: req.body.nombreSocio 
      }
    });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar inversión' });
  }
});

// --- NUEVO: EDITAR FECHA DEL LOTE ---
router.put('/:id/fecha', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  try {
    const actualizado = await prisma.importation.update({
      where: { id: Number(req.params.id) },
      // Le agregamos 'T12:00:00Z' para que la zona horaria de Ecuador no te reste un día por accidente
      data: { fecha: new Date(`${req.body.fecha}T12:00:00Z`) } 
    });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la fecha' });
  }
});

export default router;