import { PrismaClient } from '@prisma/client';
import { generateToken } from '../utils/jwt.utils.js';

const prisma = new PrismaClient();

export const syncUser = async (req, res) => {
  try {
    // 1. Obtenemos el token de los headers
    const authHeader = req.headers['authorization'];
    const supabaseToken = authHeader && authHeader.split(' ')[1];

    if (!supabaseToken) {
      return res.status(401).json({ error: 'Acceso denegado: Token requerido.' });
    }

    // 2. SOLUCIÓN: Le preguntamos a los servidores de Supabase si este token es real
    // Esto evita cualquier problema de "invalid algorithm"
    const supabaseRes = await fetch(`${process.env.SUPABASE_URL}/auth/v1/user`, {
      headers: {
        Authorization: `Bearer ${supabaseToken}`,
        apikey: process.env.SUPABASE_ANON_KEY
      }
    });

    // Si Supabase dice que el token es falso o expiró, bloqueamos el acceso
    if (!supabaseRes.ok) {
      return res.status(403).json({ error: 'Token de autenticación inválido o expirado.' });
    }

    // 3. Extraemos los datos seguros directamente de la respuesta oficial de Supabase
    const supabaseUser = await supabaseRes.json();
    const email = supabaseUser.email;
    const nombre = req.body.nombre || email.split('@')[0];

    // 4. Sincronizamos con nuestra base de datos (Prisma)
    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          nombre,
          isVerified: true, 
          role: 'user'
        }
      });
    }

    // 5. Generamos el token interno y damos la bienvenida
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

export const checkEmail = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { email: req.body.email } });
    res.status(200).json({ exists: !!user }); 
  } catch (error) {
    res.status(500).json({ error: 'Error verificando correo' });
  }
};