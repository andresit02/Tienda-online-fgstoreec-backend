import { Router } from 'express';
import { getCart, addToCart, updateCartItem, removeFromCart } from './cart.controller.js';

// IMPORTACIÓN CORREGIDA: Tu middleware se llama authenticateToken
import { authenticateToken } from '../auth/auth.middleware.js'; 

const router = Router();

// Protegemos todas las rutas del carrito con tu middleware real
router.use(authenticateToken);

router.get('/', getCart);
router.post('/add', addToCart);
router.put('/update/:itemId', updateCartItem);
router.delete('/remove/:itemId', removeFromCart);

export default router;
