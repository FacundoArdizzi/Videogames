const { Router } = require('express');
const VideogamesRoute = require('./Videogames')

const router = Router();

router.use('/videogames', VideogamesRoute)

module.exports = router;
