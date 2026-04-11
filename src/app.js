import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import authRoutes from './auth/auth.routes.js';
import { authenticateToken, authorizeRoles } from './auth/auth.middleware.js';
import cartRoutes from './cart/cart.routes.js';

dotenv.config();

const app = express();
const prisma = new PrismaClient(); 

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas de autenticación
app.use('/api/auth', authRoutes);

app.use('/api/cart', cartRoutes);

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

// --- 1. OBTENER TODOS (LEER) ---
app.get('/api/productos', async (req, res) => {
  try {
    const productos = await prisma.product.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    res.json(productos);
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
