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
    type: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    path: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    data: {
      type: DataTypes.BLOB("long"),
    },
    signature_data: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
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