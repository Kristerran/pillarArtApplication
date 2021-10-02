const router = require('express').Router();
const { Artwork } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newArtwork = await Artwork.create({
      ...req.body,
      artist_id: req.session.artist_id,
    });

    res.status(200).json(newArtwork);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const artworkData = await Artwork.destroy({
      where: {
        id: req.params.id,
        artist_id: req.session.artist_id,
      },
    });

    if (!artworkData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(artworkData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
