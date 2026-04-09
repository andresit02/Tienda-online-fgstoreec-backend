import { PrismaClient } from '@prisma/client';
import { generateToken } from '../utils/jwt.utils.js';
const prisma = new PrismaClient();

export const syncUser = async (req, res) => {
  const { email, nombre, supabase_id } = req.body;

  try {
    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          nombre,
          password: 'oauth-or-otp-dummy-pass', // SOLUCIÓN: Evita que Prisma colapse con usuarios de Google
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
    res.status(500).json({ error: 'Error al sincronizar el perfil del usuario' });
  }
};

// NUEVA FUNCIÓN: Verifica si el correo ya existe en tu BD
export const checkEmail = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { email: req.body.email } });
    res.status(200).json({ exists: !!user }); // Devuelve true si existe, false si no
  } catch (error) {
    res.status(500).json({ error: 'Error verificando correo' });
  }
};