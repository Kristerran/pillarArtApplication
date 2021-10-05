const router = require('express').Router();
const artistRoutes = require('./artistRoutes')
const artworkRoutes = require('./artworkRoutes')
const upload = require("../../middleware/upload");
const uploadController = require("./upload");
router.use('/artist', artistRoutes)
router.use('/artwork', artworkRoutes)
router.use('/upload', upload.single("file"), uploadController.uploadFiles);
module.exports = router