import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import authRoutes from './auth/auth.routes.js';
import { authenticateToken, authorizeRoles } from './auth/auth.middleware.js';
import cartRoutes from './cart/cart.routes.js';
import rateLimit from 'express-rate-limit'; 

// NUEVO: Importación moderna de las rutas de favoritos
import favoritosRoutes from './favoritos/favoritos.routes.js';

dotenv.config();

const app = express();
const prisma = new PrismaClient(); 

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// --- 2. CONFIGURAMOS EL ESCUDO CONTRA BOTS ---
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos de bloqueo
  max: 10, // Máximo 10 intentos por IP en esos 15 minutos
  message: { error: 'Demasiados intentos desde esta IP. Por favor, intenta de nuevo en 15 minutos.' }
});

// --- 3. APLICAMOS EL ESCUDO SOLO A LAS RUTAS SENSIBLES ---
app.use('/api/auth', authLimiter, authRoutes);

// Rutas del carrito
app.use('/api/cart', cartRoutes);

// Rutas de favoritos
app.use('/api/favoritos', favoritosRoutes);

// --- RUTA DE PRUEBA ---
app.get('/', (req, res) => {
  res.send('✅ API FG Store Online funcionando correctamente');
});

// Ejemplo de ruta protegida (solo para usuarios autenticados)
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: `Bienvenido, ${req.user.nombre}! Tienes acceso a esta ruta protegida.` });
});

// Ejemplo de ruta protegida con rol (solo para administradores)
app.get('/api/admin', authenticateToken, authorizeRoles(['admin']), (req, res) => {
  res.json({ message: `Bienvenido, administrador ${req.user.nombre}! Tienes acceso a la ruta de administración.` });
});

// --- 1. OBTENER TODOS O PAGINADOS (LEER) ---
app.get('/api/productos', async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const search = req.query.search || '';

    // Filtro de búsqueda insensible a mayúsculas
    const where = search ? {
      nombre: { contains: search, mode: 'insensitive' }
    } : {};

    // Si el Frontend envía "page" y "limit", hacemos paginación real en la Base de Datos
    if (page && limit) {
      const skip = (page - 1) * limit;
      
      const [productos, total] = await Promise.all([
        prisma.product.findMany({
          where,
          skip,
          take: limit,
          orderBy: { id: 'desc' } // Los más nuevos primero
        }),
        prisma.product.count({ where })
      ]);

      res.json({
        productos,
        total,
        totalPages: Math.ceil(total / limit),
        currentPage: page
      });
    } else {
      // Retrocompatibilidad: Si no envían paginación, mandamos todos (para tu App.jsx)
      const productos = await prisma.product.findMany({
        where,
        orderBy: { id: 'desc' }
      });
      res.json(productos);
    }
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

// --- 2. CREAR PRODUCTO (AGREGAR) ---
// Protegida: solo administradores pueden crear productos
app.post('/api/productos', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  try {
    const nuevoProducto = await prisma.product.create({
      data: req.body
    });
    res.json(nuevoProducto);
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ error: 'Error al crear producto' });
  }
});

// --- 3. ACTUALIZAR PRODUCTO (EDITAR) ---
// Protegida: solo administradores pueden actualizar productos
app.put('/api/productos/:id', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  const { id } = req.params;
  try {
    const productoActualizado = await prisma.product.update({
      where: { id: parseInt(id) }, 
      data: req.body 
    });
    res.json(productoActualizado);
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
});

// --- 4. ELIMINAR PRODUCTO (BORRAR) ---
// Protegida: solo administradores pueden eliminar productos
app.delete('/api/productos/:id', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.product.delete({
      where: { id: parseInt(id) }
    });
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
});