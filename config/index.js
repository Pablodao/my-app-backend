// Acceso a propiedades del cuerpo (body) en las peticiones
const express = require('express');

// Muestra en la terminal mensajes de quien está tratando de acceder a mi servidor
const logger = require('morgan');

const cookieParser = require('cookie-parser');

// Control de acceso HTTP
const cors = require('cors');

// Configuración de Middlewares
module.exports = app => {
    // Indicamos a "express" que debe confiar en el proxy de nuestro servidor
    app.set('trust proxy', 1);

    // Permite pasar headers desde el frontend
    app.use(
        cors({
            credentials: true,
            origin: process.env.ORIGIN || 'http://localhost:3000',
        })
    );

    // Configuramos un logger para el entorno de desarrollo
    app.use(logger('dev'));

    // Acceso a la propiedad "body" en la peticion
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser())
};
