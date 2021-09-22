

const { DataTypes } = require("sequelize");

const { connection } = require("../db");

const Film = connection.define("films", {
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    actor: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {});

const main = async () => {
    try {
        await Film.sync({alter: true});
    } catch (error) {
        console.log(error);
    }
};

main();

module.exports = Film;