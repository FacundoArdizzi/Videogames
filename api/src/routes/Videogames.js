const { Router } = require('express');
const { getVideogames, addVideogame, getGameDetails } = require('../handlers/videogames')

const router = Router()

router.get('/', getVideogames)
router.get('/:id', getGameDetails)
router.post('/', addVideogame)

module.exports = router;