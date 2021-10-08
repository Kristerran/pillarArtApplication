const router = require('express').Router();
const { Artist, Artwork } = require('../models');

// GET Pillar
router.get('/', async (req, res) => {
  try {
    res.render('homeOfThePillar', {user: req.session.logged_in});
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
    const { artist } = req.session;
    res.render('login', {artist});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/register", (req, res) => {
  res.render("register");
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