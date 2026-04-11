import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// 1. Obtener el carrito del usuario logueado
export const getCart = async (req, res) => {
  try {
    const userId = req.user.userId; // Esto viene de tu middleware de autenticación

    let cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: { product: true }, // Traemos los detalles del producto (nombre, precio, etc)
        },
      },
    });

    // Si el usuario no tiene carrito aún, le creamos uno vacío silenciosamente
    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId },
        include: { items: { include: { product: true } } },
      });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error('Error en getCart:', error);
    res.status(500).json({ error: 'Error al obtener el carrito' });
  }
};

// 2. Agregar un producto al carrito
export const addToCart = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { productId, cantidad = 1 } = req.body;

    // Buscamos o creamos el carrito
    let cart = await prisma.cart.findUnique({ where: { userId } });
    if (!cart) {
      cart = await prisma.cart.create({ data: { userId } });
    }

    // Verificamos si el producto ya está en el carrito
    const existingItem = await prisma.cartItem.findFirst({
      where: { cartId: cart.id, productId },
    });

    if (existingItem) {
      // Si ya existe, le sumamos la cantidad
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { cantidad: existingItem.cantidad + cantidad },
      });
    } else {
      // Si no existe, lo creamos
      await prisma.cartItem.create({
        data: { cartId: cart.id, productId, cantidad },
      });
    }

    // Devolvemos el carrito actualizado
    const updatedCart = await prisma.cart.findUnique({
      where: { userId },
      include: { items: { include: { product: true } } },
    });
    
    res.status(200).json(updatedCart);
  } catch (error) {
    console.error('Error en addToCart:', error);
    res.status(500).json({ error: 'Error al agregar producto al carrito' });
  }
};

// 3. Actualizar la cantidad exacta de un producto
export const updateCartItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { cantidad } = req.body;

    if (cantidad <= 0) {
      return res.status(400).json({ error: 'La cantidad debe ser mayor a 0' });
    }

    await prisma.cartItem.update({
      where: { id: parseInt(itemId) },
      data: { cantidad },
    });

    res.status(200).json({ message: 'Cantidad actualizada' });
  } catch (error) {
    console.error('Error en updateCartItem:', error);
    res.status(500).json({ error: 'Error al actualizar el carrito' });
  }
};

// 4. Eliminar un producto del carrito
export const removeFromCart = async (req, res) => {
  try {
    const { itemId } = req.params;

    await prisma.cartItem.delete({
      where: { id: parseInt(itemId) },
    });

    res.status(200).json({ message: 'Producto eliminado del carrito' });
  } catch (error) {
    console.error('Error en removeFromCart:', error);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};