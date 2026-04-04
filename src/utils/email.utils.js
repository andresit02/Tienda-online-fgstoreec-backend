import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVICE_HOST,
  port: process.env.EMAIL_SERVICE_PORT,
  secure: process.env.EMAIL_SERVICE_PORT == 465, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_SERVICE_USER,
    pass: process.env.EMAIL_SERVICE_PASS,
  },
});

const sendVerificationEmail = async (to, token) => {
  const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_SERVICE_USER,
    to: to,
    subject: 'Verifica tu cuenta en FG Store Online',
    html: `
      <p>Hola,</p>
      <p>Gracias por registrarte en FG Store Online. Por favor, verifica tu dirección de correo electrónico haciendo clic en el siguiente enlace:</p>
      <p><a href="${verificationLink}">Verificar mi cuenta</a></p>
      <p>Si no te registraste en FG Store Online, por favor ignora este correo.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

const sendResetPasswordEmail = async (to, token) => {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_SERVICE_USER,
    to,
    subject: 'Recuperación de Contraseña - FGSTOREEC',
    html: `
      <h1>Recuperación de Contraseña</h1>
      <p>Has solicitado restablecer tu contraseña. Haz clic en el siguiente enlace para continuar:</p>
      <a href="${resetUrl}">Restablecer Contraseña</a>
      <p>Este enlace expirará en 1 hora.</p>
      <p>Si no solicitaste este cambio, puedes ignorar este correo.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export { sendVerificationEmail, sendResetPasswordEmail };
