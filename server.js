// server.js

const express = require('express');

// Crear una aplicación
const app = express();

// Ruta para la página de inicio
app.get('/', (req, res) => {
  const html = `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <h1>Bienvenido a mi sitio web para el lab04</h1>
    <a href="/clientes">Ver lista de clientes</a>
  `;
  res.send(html);
});

// Ruta para la página de clientes
app.get('/clientes', (req, res) => {
  const clientes = [
    { nombre: 'Velarde Hernández Enzo Francesco', email: 'cliente1@tecsup.edu.pe' },
    { nombre: 'Vidal Conde Gerardo', email: 'cliente2@tecsup.edu.pe' },
    { nombre: 'Suclla Collazos Julio', email: 'cliente3@tecsup.edu.pe' },
  ];
  const html = `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <h1>Lista de clientes</h1>
    <ul>
      ${clientes.map(cliente => `<li>${cliente.nombre} - ${cliente.email}</li>`).join('')}
    </ul>
    <a href="/productos">Ver lista de productos</a>
  `;
  res.send(html);
});

// Ruta para la página de productos
app.get('/productos', (req, res) => {
  const productos = [
    { nombre: 'Producto 1', precio: 16.99 },
    { nombre: 'Producto 2', precio: 90.19 },
    { nombre: 'Producto 3', precio: 12.44 },
  ];
  const html = `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <h1>Lista de productos</h1>
    <ul>
      ${productos.map(producto => `<li>${producto.nombre} - $${producto.precio}</li>`).join('')}
    </ul>
    <a href="/">Volver a la página de inicio</a>
  `;
  res.send(html);
});

// Escuchar en el puerto
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Ejecutando en el puerto ${PORT}`);
});
