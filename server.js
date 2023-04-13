const app = require('./app');
// Establece el puerto para que nuestra aplicación tenga acceso a el.
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});
