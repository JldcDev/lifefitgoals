import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'; // Importación corregida
import jwt from 'jsonwebtoken'; // Importación corregida
const { sign, verify } = jwt;

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Uso de bodyParser.json() en lugar de json()

const users = []; // Memoria temporal
const SECRET = 'lifeFitSuperSecret';

// Ruta para registrar un nuevo usuario
app.post('/api/auth/register', (req, res) => {
  const { email, password } = req.body;

  // Verificar si el usuario ya existe
  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'Usuario ya existe' });
  }

  // Registrar al usuario
  users.push({ email, password });
  res.status(201).json({ message: 'Registrado correctamente' });
});

// Ruta para iniciar sesión
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  // Verificar las credenciales del usuario
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Credenciales incorrectas' });
  }

  // Generar un token JWT
  const token = sign({ email }, SECRET, { expiresIn: '2h' });
  res.json({ token });
});

// Ruta para obtener información del usuario autenticado
app.get('/api/auth/me', (req, res) => {
  const authHeader = req.headers.authorization;

  // Verificar si el encabezado de autorización es válido
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No autorizado' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verificar y decodificar el token
    const decoded = verify(token, SECRET);
    res.json({ email: decoded.email });
  } catch (err) {
    res.status(401).json({ message: 'Token inválido' });
  }
});

// Iniciar el servidor
app.listen(5000, () => {
  console.log('🔐 Auth server corriendo en http://localhost:5000');
});
