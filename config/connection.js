require('dotenv').config
const { Sequelize, Model } = require('sequelize')
const DB = process.env.POSTGRESURI

console.log(DB)

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