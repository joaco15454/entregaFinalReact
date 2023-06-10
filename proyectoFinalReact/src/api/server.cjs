const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(express.json());





// Array con la lista de productos
const products = [
  {
    nombre: 'Reloj3',
    descripcion: 'Reloj ultima generacion',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bUt0HcVSIJBGtl4H0x6y4lwxcjpFq7-_GbX-ZL4s&s',
    brand: 'apple',
    price: '$100000',
    valoration: 4
  },
  {
    nombre: 'Altavoz',
    descripcion: 'Altavoz goood',
    imagen: 'https://images.philips.com/is/image/PhilipsConsumer/SPA1260_12-IMS-es_ES?$jpglarge$&wid=960',
    brand: 'philips',
    price: '$ 20000',valoration: 3
  },
  // Agrega más objetos de productos si es necesario
];

app.get('/api/productos', (req, res) => {
  res.json(products);
});

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
  const { email, password,firstname } = req.body;

  // Guardar los datos del usuario registrado
  lastRegisteredUser = { email, password,firstname };

  // Enviar una respuesta exitosa
  res.json({ message: 'Usuario registrado correctamente', email: email, password: password, firstname:firstname });
});


app.put('/api/wishlist', (req, res) => {
  const { prodId } = req.body;
  
  // Buscar el producto en base a su ID de valoración
  const wishlist = products.find((p) => p.valoration === prodId);
  
  if (wishlist) {
    // Si se encuentra el producto, devolverlo como respuesta
    res.json(wishlist);
  } else {
    // Si no se encuentra el producto, devolver un error
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});




// Puerto de escucha
const port = 5008;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});