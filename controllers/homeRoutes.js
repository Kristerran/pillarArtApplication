const router = require('express').Router();
const { Artist, Artwork } = require('../models');

// GET Pillar
router.get('/', async (req, res) => {
  try {
    res.render('homeOfThePillar');
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