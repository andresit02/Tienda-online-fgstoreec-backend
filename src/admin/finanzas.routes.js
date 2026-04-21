import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken, authorizeRoles } from '../auth/auth.middleware.js';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/arriendo', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  try {
    const pagos = await prisma.rentPayment.findMany({ orderBy: { fechaProgramada: 'asc' } });
    res.json(pagos);
  } catch (error) { res.status(500).json({ error: 'Error al cargar arriendos' }); }
});

router.post('/arriendo/iniciar', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  try {
    const { fechaInicio, monto } = req.body;
    const pagos = [];
    const startDate = new Date(fechaInicio);
    
    for (let i = 0; i < 12; i++) {
      const fecha = new Date(startDate);
      fecha.setMonth(startDate.getMonth() + i);
      pagos.push({ fechaProgramada: fecha, monto: Number(monto) || 25, estado: 'Pendiente' });
    }
    
    await prisma.rentPayment.createMany({ data: pagos });
    res.json({ message: 'Cronograma generado' });
  } catch (error) { res.status(500).json({ error: 'Error al generar arriendo' }); }
});

router.put('/arriendo/:id/pagar', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  try {
    const pago = await prisma.rentPayment.update({
      where: { id: Number(req.params.id) },
      data: { estado: 'Pagado', fechaPagado: new Date() }
    });
    res.json(pago);
  } catch (error) { res.status(500).json({ error: 'Error al registrar pago' }); }
});

router.delete('/arriendo/reiniciar', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  try {
    await prisma.rentPayment.deleteMany({});
    res.json({ message: 'Contrato reiniciado' });
  } catch (error) { res.status(500).json({ error: 'Error al reiniciar contrato' }); }
});

export default router;