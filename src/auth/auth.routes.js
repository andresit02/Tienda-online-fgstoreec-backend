import { Router } from 'express';
import { register, login, verify } from './auth.controller.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/verify-email', verify);

export default router;
