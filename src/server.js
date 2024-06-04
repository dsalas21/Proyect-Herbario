const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./DataBase/conexion_mysql');

const app = express();
const port = 3000;

// Middleware para parsear los cuerpos de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para manejar el registro de usuarios
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

  const query = 'INSERT INTO Usuarios (name, email, password) VALUES (?, ?, ?)';

  connection.query(query, [name, email, password], (err, results) => {
    if (err) {
      console.error('Error al insertar datos:', err);
      return res.status(500).send('Error al registrar el usuario');
    }
    res.status(201).send('Usuario registrado exitosamente');
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
