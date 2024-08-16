require("dotenv").config();
const Sequelize = require('sequelize');

const dbConnection = new Sequelize('notes', 'postgres', "1560", {
    host: 'localhost',
    port: 5432,
    dialect: "postgres",
})

module.exports = dbConnection