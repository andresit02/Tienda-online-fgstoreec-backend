import { PrismaClient } from '@prisma/client';
import { generateToken } from '../utils/jwt.utils.js';
import jwt from 'jsonwebtoken'; // <--- IMPORTANTE: Necesitamos esto para verificar a Supabase

const prisma = new PrismaClient();

export const syncUser = async (req, res) => {
  try {
    // 1. Buscamos el token en las cabeceras (headers)
    const authHeader = req.headers['authorization'];
    const supabaseToken = authHeader && authHeader.split(' ')[1];

    if (!supabaseToken) {
      return res.status(401).json({ error: 'Acceso denegado: Token de Supabase requerido.' });
    }

    // 2. Verificamos matemáticamente que el token fue emitido por tu proyecto Supabase
    const decoded = jwt.verify(supabaseToken, process.env.SUPABASE_JWT_SECRET);

    // 3. Extraemos el email real y verificado desde adentro del token
    const email = decoded.email;
    const nombre = req.body.nombre || email.split('@')[0];

    // 4. Sincronizamos con Prisma
    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          nombre,
          // Ya no ponemos password dummy, Prisma lo acepta vacío ahora
          isVerified: true, 
          role: 'user'
        }
      });
    }

    const token = generateToken({ userId: user.id, role: user.role });

    res.status(200).json({
      user: { id: user.id, email: user.email, nombre: user.nombre, role: user.role },
      token
    });
  } catch (error) {
    console.error('Error en syncUser:', error);
    // Si la verificación de JWT falla, lanza un error específico
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
        return res.status(403).json({ error: 'Token de autenticación inválido o expirado.' });
    }
    res.status(500).json({ error: 'Error al sincronizar el perfil del usuario' });
  }
};

export const checkEmail = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { email: req.body.email } });
    res.status(200).json({ exists: !!user }); 
  } catch (error) {
    res.status(500).json({ error: 'Error verificando correo' });
  }
};