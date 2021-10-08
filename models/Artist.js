const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Artist extends Model {
    checkPass(password) {
        return bcrypt.compare(password, this.password);
    }
}

Artist.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [3],
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            bio: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            validate: {
                len: [8],
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (data) => {
                data.password = await bcrypt.hash(data.password, 10);
                return data;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "Artist",
    }
),

    module.exports = Artist