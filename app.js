// Acceso a las variables de entorno/configuración
require('dotenv/config');

// Conecta con la Base de datos
require('./database');

// Controla las peticiones HTTP
const express = require('express');

const app = express();

// Ejecuta la mayor parte de los middlewares.
require('./config')(app);

// Manejo de rutas
const allRoutes = require('./routes/index.routes');
app.use('/api', allRoutes);

// Manejo de errores.
require('./error-handling')(app);

module.exports = app;
