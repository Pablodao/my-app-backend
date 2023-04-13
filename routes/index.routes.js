const router = require('express').Router();

// GET "api"
router.get('/', (req, res, next) => {
    res.json('Funcionando correctamente');
});

module.exports = router;
