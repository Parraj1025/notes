require('dotenv').config
const { Sequelize, Model } = require('sequelize')

const sequelize = new Sequelize('TestEnv','juanparra', '1560' ,{
    host: 'localhost',
    dialect:'postgres'
}
)

module.exports = sequelize