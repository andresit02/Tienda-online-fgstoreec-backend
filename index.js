// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// 1. IMPORTAMOS PRISMA PARA PODER HABLAR CON LA BASE DE DATOS
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

// --- RUTA PRINCIPAL: OBTENER TODOS LOS PRODUCTOS ---
// Esta es la URL que llamará tu Frontend: http://localhost:3000/api/productos
app.get('/api/productos', async (req, res) => {
  try {
    // Le pedimos a Prisma que busque TODOS los productos en Supabase
    const productos = await prisma.product.findMany();
    res.json(productos);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ error: 'Error al obtener productos de la base de datos' });
  }
});

// --- RUTA PARA CREAR PRODUCTOS (Para tu futuro Dashboard Admin) ---
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

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
});