const router = require('express').Router();
const { Artist } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const artist = await Artist.findAll({
    });
    res.status(200).json(artistData);
  } catch (err) {
    res.status(500).json(err);
  }
})
router.post('/', async (req, res) => {
  try {
    const artistData = await Artist.create(req.body);

    req.session.save(() => {
      req.session.artist = artistData.id;
      req.session.logged_in = true;

      res.status(200).json(artistData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const artistData = await Artist.findOne({ where: { username: req.body.username } });

    if (!artistData) {
      res
        .status(400)
        .json({ message: 'Incorrect user or password, please try again' });
      return;
    }

    const validPassword = await artistData.checkPass(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect user or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.artist = artistData.id;
      req.session.logged_in = true;
      
      res.redirect('/');
    });

  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/register", async (req, res) => {
  try {
    const artist = await Artist.create(req.body);
    req.session.save(() => {
      req.session.artist_id = artist.id;
      req.session.logged_in = true;
      
      res.status(200).redirect('/');
    });
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;
