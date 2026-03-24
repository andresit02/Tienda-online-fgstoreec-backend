import request from 'supertest';
import express from 'express';
import authRoutes from './auth.routes.js';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

const prisma = new PrismaClient();

// Mock de nodemailer para evitar enviar correos reales durante las pruebas
jest.mock('../utils/email.utils.js', () => ({
  sendVerificationEmail: jest.fn(() => Promise.resolve(true)),
}));

describe('Auth API', () => {
  let testUser;
  const testPassword = 'password123';

  beforeAll(async () => {
    // Limpiar la base de datos antes de todas las pruebas
    await prisma.user.deleteMany({});
  });

  afterEach(async () => {
    // Limpiar usuarios creados en cada prueba para evitar conflictos
    await prisma.user.deleteMany({});
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        email: 'test@example.com',
        password: testPassword,
        nombre: 'Test User',
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'Usuario registrado exitosamente. Por favor, verifica tu correo electrónico.');
    expect(res.body.user).toHaveProperty('email', 'test@example.com');

    testUser = await prisma.user.findUnique({ where: { email: 'test@example.com' } });
    expect(testUser).toBeDefined();
    expect(testUser.isVerified).toBe(false);
    expect(testUser.verificationToken).toBeDefined();
  });

  it('should not register a user with an existing email', async () => {
    await request(app)
      .post('/api/auth/register')
      .send({
        email: 'duplicate@example.com',
        password: testPassword,
        nombre: 'Duplicate User',
      });

    const res = await request(app)
      .post('/api/auth/register')
      .send({
        email: 'duplicate@example.com',
        password: testPassword,
        nombre: 'Another Duplicate User',
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should verify user email', async () => {
    const registerRes = await request(app)
      .post('/api/auth/register')
      .send({
        email: 'verify@example.com',
        password: testPassword,
        nombre: 'Verify User',
      });

    const userBeforeVerification = await prisma.user.findUnique({ where: { email: 'verify@example.com' } });
    const verificationToken = userBeforeVerification.verificationToken;

    const res = await request(app)
      .get(`/api/auth/verify-email?token=${verificationToken}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Correo electrónico verificado exitosamente.');

    const userAfterVerification = await prisma.user.findUnique({ where: { email: 'verify@example.com' } });
    expect(userAfterVerification.isVerified).toBe(true);
    expect(userAfterVerification.verificationToken).toBeNull();
  });

  it('should not verify with an invalid token', async () => {
    const res = await request(app)
      .get('/api/auth/verify-email?token=invalidtoken');

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'Token de verificación inválido o expirado.');
  });

  it('should login a verified user', async () => {
    // Registrar y verificar un usuario primero
    await request(app)
      .post('/api/auth/register')
      .send({
        email: 'login@example.com',
        password: testPassword,
        nombre: 'Login User',
      });
    const userToVerify = await prisma.user.findUnique({ where: { email: 'login@example.com' } });
    await request(app)
      .get(`/api/auth/verify-email?token=${userToVerify.verificationToken}`);

    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'login@example.com',
        password: testPassword,
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Inicio de sesión exitoso');
    expect(res.body).toHaveProperty('token');
    expect(res.body.user).toHaveProperty('email', 'login@example.com');
    expect(res.body.user).toHaveProperty('role', 'user');
  });

  it('should not login an unverified user', async () => {
    await request(app)
      .post('/api/auth/register')
      .send({
        email: 'unverified@example.com',
        password: testPassword,
        nombre: 'Unverified User',
      });

    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'unverified@example.com',
        password: testPassword,
      });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('error', 'Cuenta no verificada. Por favor, revisa tu correo electrónico.');
  });

  it('should not login with incorrect password', async () => {
    // Registrar y verificar un usuario primero
    await request(app)
      .post('/api/auth/register')
      .send({
        email: 'wrongpass@example.com',
        password: testPassword,
        nombre: 'Wrong Pass User',
      });
    const userToVerify = await prisma.user.findUnique({ where: { email: 'wrongpass@example.com' } });
    await request(app)
      .get(`/api/auth/verify-email?token=${userToVerify.verificationToken}`);

    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'wrongpass@example.com',
        password: 'wrongpassword',
      });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('error', 'Credenciales inválidas');
  });

  it('should not login with non-existent email', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'nonexistent@example.com',
        password: testPassword,
      });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('error', 'Credenciales inválidas');
  });
});
