
const { DataTypes } = require("sequelize");

const { connection } = require("../db");

const User = connection.define("user", {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false},
    password: { type : DataTypes.STRING, allowNull: false}
}, {});

const main = async () => {
    try {
        await User.sync({alter: true});
    } catch (error) {
        console.log(error);
    }
};

main();

module.exports = User;