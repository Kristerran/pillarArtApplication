const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Artwork extends Model {}

Artwork.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.BLOB("long")
    },
    signature: {
      type: DataTypes.BLOB("long"),
    },
    artist: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Artist",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Artwork",
  }
),
module.exports = Artwork;