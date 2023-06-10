const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(express.json());

// Datos del último usuario registrado (simulado)
let lastRegisteredUser = null;

// Ruta para el inicio de sesión
app.post('/api/user/login', (req, res) => {
  const { email, password } = req.body;

  // Verificar si los datos de inicio de sesión son correctos
  if (lastRegisteredUser && lastRegisteredUser.email === email && lastRegisteredUser.password === password) {
    // Generar un token de sesión
    const token = jwt.sign({ email: lastRegisteredUser.email }, 'secret_key');

    // Enviar el token como respuesta
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
});

// Ruta para el registro de usuarios
app.post('/api/user/register', (req, res) => {
  const { email, password } = req.body;

  // Guardar los datos del usuario registrado
  lastRegisteredUser = { email, password };

  // Enviar una respuesta exitosa
  res.json({ message: 'Usuario registrado correctamente' });
});

// Puerto de escucha
const port = 5005;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});