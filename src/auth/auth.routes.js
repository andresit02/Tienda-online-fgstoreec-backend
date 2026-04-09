import { Router } from 'express';
import { syncUser, checkEmail } from './auth.controller.js';

const router = Router();

router.post('/sync', syncUser);
router.post('/check-email', checkEmail); // Conectamos la nueva ruta

export default router;