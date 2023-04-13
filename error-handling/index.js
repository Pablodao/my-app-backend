module.exports = app => {
    // Middleware que se ejecuta siempre que la página solicitada no esté disponible
    app.use((req, res, next) => {
        res.status(404).json({ errorMessage: 'Esta ruta no existe' });
    });

    app.use((err, req, res, next) => {
        // Cada vez que se llame a next(err), este middleware se ocupará del error
        // Siempre muestra el error en consola.
        console.error('ERROR', req.method, req.path, err);

        // Solo se renderiza si el error ocurre antes de mandar la respuesta
        if (!res.headersSent) {
            res.status(500).json({
                errorMessage:
                    'Error interno de servidor. Comprueba la consola del servidor',
            });
        }
    });
};
