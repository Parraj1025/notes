require('dotenv').config
const { Sequelize, Model } = require('sequelize')
const DB = process.env.POSTGRESURI

//connection file to establish connection to postgreSQL database

const sequelize = new Sequelize(DB, {
    dialectOptions:{
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}
)

module.exports = sequelize