import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { generateToken } from '../utils/jwt.utils.js';
import { sendVerificationEmail } from '../utils/email.utils.js';
import crypto from 'crypto';

const prisma = new PrismaClient();

const registerUser = async (email, password, nombre) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const verificationToken = crypto.randomBytes(32).toString('hex');

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      nombre,
      verificationToken,
    },
  });

  await sendVerificationEmail(user.email, verificationToken);

  return user;
};

const loginUser = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error('Credenciales inválidas');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Credenciales inválidas');
  }

  if (!user.isVerified) {
    throw new Error('Cuenta no verificada. Por favor, revisa tu correo electrónico.');
  }

  const token = generateToken({ userId: user.id, role: user.role });
  return { user, token };
};

const verifyEmail = async (token) => {
  const user = await prisma.user.findFirst({ where: { verificationToken: token } });

  if (!user) {
    throw new Error('Token de verificación inválido o expirado.');
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      isVerified: true,
      verificationToken: null, // Eliminar el token después de la verificación
    },
  });

  return true;
};

const forgotPassword = async (email) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error('No existe un usuario con ese correo electrónico.');
  }

  const resetToken = crypto.randomBytes(32).toString('hex');
  const resetExpires = new Date(Date.now() + 3600000); // 1 hora de validez

  await prisma.user.update({
    where: { id: user.id },
    data: {
      resetPasswordToken: resetToken,
      resetPasswordExpires: resetExpires,
    },
  });

  await sendResetPasswordEmail(user.email, resetToken);
  return true;
};

const resetPassword = async (token, newPassword) => {
  const user = await prisma.user.findFirst({
    where: {
      resetPasswordToken: token,
      resetPasswordExpires: { gt: new Date() },
    },
  });

  if (!user) {
    throw new Error('Token de recuperación inválido o expirado.');
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: hashedPassword,
      resetPasswordToken: null,
      resetPasswordExpires: null,
    },
  });

  return true;
};

export { registerUser, loginUser, verifyEmail, forgotPassword, resetPassword };
