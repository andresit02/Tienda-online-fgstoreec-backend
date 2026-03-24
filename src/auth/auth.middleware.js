import { verifyToken } from '../utils/jwt.utils.js';

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); // Si no hay token, acceso no autorizado

  const user = verifyToken(token);

  if (!user) return res.sendStatus(403); // Si el token no es válido, acceso prohibido

  req.user = user; // Adjuntar el usuario al objeto de solicitud
  next();
};

const authorizeRoles = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Acceso denegado: No tienes los permisos necesarios.' });
    }
    next();
  };
};

export { authenticateToken, authorizeRoles };
