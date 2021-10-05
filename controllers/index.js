const router = require('express').Router();
const apiRoutes = require('./apiRoutes')
router.use('/home', (req,res) => {
    console.log(__dirname)
    res.sendFile('C:/Users/krist/pillarArtApplication/views/index.html')
})
router.use('/api', apiRoutes)

module.exports = router