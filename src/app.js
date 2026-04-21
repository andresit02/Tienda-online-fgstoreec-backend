import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import authRoutes from './auth/auth.routes.js';
import { authenticateToken, authorizeRoles } from './auth/auth.middleware.js';
import cartRoutes from './cart/cart.routes.js';
import rateLimit from 'express-rate-limit'; 
import favoritosRoutes from './favoritos/favoritos.routes.js';

// Importaciones de los módulos Admin
import importacionesRoutes from './admin/importaciones.routes.js';
import ventasRoutes from './admin/ventas.routes.js';
import finanzasRoutes from './admin/finanzas.routes.js'; // <--- 1. ESTO FALTABA

dotenv.config();

const app = express();
const prisma = new PrismaClient(); 

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Demasiados intentos desde esta IP. Por favor, intenta de nuevo en 15 minutos.' }
});

app.use('/api/auth', authLimiter, authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/favoritos', favoritosRoutes);

// Conectamos las rutas
app.use('/api/importaciones', importacionesRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/api/finanzas', finanzasRoutes); // <--- 2. Y ESTO TAMBIÉN FALTABA

app.get('/', (req, res) => {
  res.send('✅ API FG Store Online funcionando correctamente');
});

app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: `Bienvenido, ${req.user.nombre}! Tienes acceso a esta ruta protegida.` });
});

app.get('/api/admin', authenticateToken, authorizeRoles(['admin']), (req, res) => {
  res.json({ message: `Bienvenido, administrador ${req.user.nombre}! Tienes acceso a la ruta de administración.` });
});

app.get('/api/productos', async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const search = req.query.search || '';

    const where = {
      activo: true, 
      ...(search ? { nombre: { contains: search, mode: 'insensitive' } } : {})
    };

    if (page && limit) {
      const skip = (page - 1) * limit;
      const [productos, total] = await Promise.all([
        prisma.product.findMany({ where, skip, take: limit, orderBy: { id: 'desc' } }),
        prisma.product.count({ where })
      ]);
      res.json({ productos, total, totalPages: Math.ceil(total / limit), currentPage: page });
    } else {
      const productos = await prisma.product.findMany({ where, orderBy: { id: 'desc' } });
      res.json(productos);
    }
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

app.post('/api/productos', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  try {
    const data = {
      ...req.body,
      costoUnitario: req.body.costoUnitario ? parseFloat(req.body.costoUnitario) : 0,
      importationId: req.body.importationId ? parseInt(req.body.importationId) : null
    };
    const nuevoProducto = await prisma.product.create({ data });
    res.json(nuevoProducto);
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ error: 'Error al crear producto' });
  }
});

app.put('/api/productos/:id', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  const { id } = req.params;
  try {
    const data = {
      ...req.body,
      costoUnitario: req.body.costoUnitario ? parseFloat(req.body.costoUnitario) : 0,
      importationId: req.body.importationId ? parseInt(req.body.importationId) : null
    };
    const productoActualizado = await prisma.product.update({ where: { id: parseInt(id) }, data });
    res.json(productoActualizado);
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
});

app.delete('/api/productos/:id', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.product.update({
      where: { id: parseInt(id) },
      data: { activo: false } 
    });
    res.json({ message: 'Producto ocultado correctamente' });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
});