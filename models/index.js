const Artist = require('./Artist');
const Artwork = require('./Artwork')
const Image = require('./Image')
Artist.hasMany(Artwork, {
    foreignKey: "artist",
    onDelete: "CASCADE"
});
Artwork.belongsTo(Artist, {
    foreignKey: "artist"
});
module.exports = { Artist, Artwork, Image };
