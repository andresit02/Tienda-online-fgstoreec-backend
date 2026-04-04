import { registerUser, loginUser, verifyEmail, forgotPassword, resetPassword } from './auth.service.js';

const register = async (req, res) => {
  try {
    const { email, password, nombre } = req.body;
    const user = await registerUser(email, password, nombre);
    res.status(201).json({ message: 'Usuario registrado exitosamente. Por favor, verifica tu correo electrónico.', user: { id: user.id, email: user.email, nombre: user.nombre } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser(email, password);
    res.status(200).json({ message: 'Inicio de sesión exitoso', user: { id: user.id, email: user.email, nombre: user.nombre, role: user.role }, token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const verify = async (req, res) => {
  try {
    const { token } = req.query;
    await verifyEmail(token);
    res.status(200).json({ message: 'Correo electrónico verificado exitosamente.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const forgot = async (req, res) => {
  try {
    const { email } = req.body;
    await forgotPassword(email);
    res.status(200).json({ message: 'Se ha enviado un correo de recuperación.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const reset = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    await resetPassword(token, newPassword);
    res.status(200).json({ message: 'Contraseña actualizada exitosamente.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { register, login, verify, forgot, reset };
