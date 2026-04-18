import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../auth/auth.middleware.js'; 

const router = express.Router();
const prisma = new PrismaClient();

// 1. OBTENER LOS FAVORITOS DEL USUARIO LOGUEADO
router.get('/', authenticateToken, async (req, res) => {
  try {
    // SOLUCIÓN: Buscamos el ID en ambas posibles variables del Token
    const userId = req.user.id || req.user.userId; 

    // Validación de seguridad para que Prisma nunca reciba datos nulos
    if (!userId) {
      console.error("No se encontró el ID en el token. Contenido de req.user:", req.user);
      return res.status(400).json({ error: 'Falta el ID de usuario en el token' });
    }

    const favoritos = await prisma.favorito.findMany({
      where: { userId: Number(userId) },
      include: {
        product: true 
      },
      orderBy: { createdAt: 'desc' }
    });

    const productosFavoritos = favoritos.map(fav => fav.product);
    res.json(productosFavoritos);
  } catch (error) {
    console.error('Error obteniendo favoritos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 2. AGREGAR O QUITAR UN FAVORITO (TOGGLE)
router.post('/toggle', authenticateToken, async (req, res) => {
  try {
    // SOLUCIÓN: Buscamos el ID en ambas posibles variables
    const userId = req.user.id || req.user.userId;
    const productId = req.body.productId;

    // Protegemos a Prisma bloqueando peticiones incompletas
    if (!userId) {
      return res.status(400).json({ error: 'Falta el ID de usuario en el token' });
    }
    if (!productId) {
      return res.status(400).json({ error: 'Se requiere el ID del producto' });
    }

    const parsedUserId = Number(userId);
    const parsedProductId = Number(productId);

    const existe = await prisma.favorito.findUnique({
      where: {
        userId_productId: { userId: parsedUserId, productId: parsedProductId }
      }
    });

    if (existe) {
      await prisma.favorito.delete({
        where: { id: existe.id }
      });
      return res.json({ message: 'Eliminado de favoritos', isFav: false });
    } else {
      await prisma.favorito.create({
        data: { userId: parsedUserId, productId: parsedProductId }
      });
      return res.json({ message: 'Agregado a favoritos', isFav: true });
    }
  } catch (error) {
    console.error('Error al hacer toggle en favorito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;