const fs = require("fs");

const Artwork = require('../../models/Artwork')
const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    Artwork.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      image_data: fs.readFileSync(
        "C:/Users/krist/pillarArtApplication/public/uploads/" + req.file.filename
      ),

    }).then((image) => {
      fs.writeFileSync(
        "C:/Users/krist/pillarArtApplication/public/tmp/" + image.name,
        image.data
      );

      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};