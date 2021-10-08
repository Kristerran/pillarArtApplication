const router = require('express').Router();
const { Artist, Artwork } = require('../models');

// GET Pillar
router.get('/', async (req, res) => {
  try {
    const artworkNames = await Artwork.findAll({
      attributes: ['name'],
      raw: true
    });
    let imageUrls = {}
    for (let i = 0; i < artworkNames.length; i++) {
      let imageName = artworkNames[i].name;
      let filePath = 'http://localhost:3001/tmp/'
      imageUrls[i] = filePath += imageName
    }
    let imageJson = JSON.stringify(imageUrls) 
    res.render('homeOfThePillar', {
      imageJson
      // loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Get Upload Page
router.get('/upload', async (req, res) => {
  try {
    res.render('upload');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get Login Page
router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get User Pillar
router.get('/User/:id', async (req, res) => {
  try {
    res.render('userPillar');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
 module.exports = router;