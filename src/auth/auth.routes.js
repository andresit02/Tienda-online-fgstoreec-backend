import { Router } from 'express';
import { register, login, verify, forgot, reset } from './auth.controller.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/verify-email', verify);
router.post('/forgot-password', forgot);
router.post('/reset-password', reset);

export default router;
