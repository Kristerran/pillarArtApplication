const router = require('express').Router();
const artistRoutes = require('./artistRoutes')
const artworkRoutes = require('./artworkRoutes')
router.use('/artist', artistRoutes)
router.use('/artwork', artworkRoutes)
module.exports = router