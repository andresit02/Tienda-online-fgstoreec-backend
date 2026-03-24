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

export { sendVerificationEmail };
