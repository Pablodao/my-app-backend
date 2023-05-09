const router = require('express').Router();

// GET "api"
router.get('/', (req, res, next) => {
    res.json('Funcionando correctamente');
});

const userRoutes = require('./user.routes.js')
router.use("/user", userRoutes)

const petRoutes = require('./pet.routes.js')
router.use("/pet", petRoutes)

module.exports = router;
