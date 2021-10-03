const router = require('express').Router();
const apiRoutes = require('./apiRoutes')
const uploadController = require("../controllers/upload");
const upload = require("../middleware/upload");
router.use('/home', (req,res) => {
    console.log(__dirname)
    res.sendFile('C:/Users/krist/pillarArtApplication/views/index.html')
})
router.use('/api', apiRoutes)

router.post('/upload', upload.single("file"), uploadController.uploadFiles);

module.exports = router