// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// 1. IMPORTAMOS PRISMA
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
// 2. INICIALIZAMOS LA CONEXIÓN
const prisma = new PrismaClient(); 

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// --- RUTA DE PRUEBA ---
app.get('/', (req, res) => {
  res.send('✅ API FG Store Online funcionando correctamente');
});

// --- 1. OBTENER TODOS (LEER) ---
app.get('/api/productos', async (req, res) => {
  try {
    // MEJORA: Agregamos { orderBy: { id: 'asc' } }
    // Esto hace que los productos siempre salgan en orden (1, 2, 3...)
    // y no salten de lugar cuando los edites.
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
app.post('/api/productos', async (req, res) => {
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
// Esta ruta recibe el ID (ej: /api/productos/5) y los datos nuevos
app.put('/api/productos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const productoActualizado = await prisma.product.update({
      where: { id: parseInt(id) }, // Buscamos por ID
      data: req.body // Actualizamos con lo que nos envíe el Dashboard
    });
    res.json(productoActualizado);
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
});

// --- 4. ELIMINAR PRODUCTO (BORRAR) ---
// Esta ruta recibe el ID y lo borra de Supabase
app.delete('/api/productos/:id', async (req, res) => {
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