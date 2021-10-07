const Artist = require('./Artist');
const Artwork = require('./Artwork')
Artist.hasMany(Artwork, {
    foreignKey: "artist_id",
    onDelete: "CASCADE"
});
Artwork.belongsTo(Artist, {
    foreignKey: "artist_id"
});
module.exports = { Artist, Artwork, };
