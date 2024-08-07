const sequelize = require('../config/connection')
const { Model , DataTypes } = require('sequelize')

class Note extends Model {}

//note model

Note.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    text: {
        type: DataTypes.STRING
    }
},
{
    timestamps:false,
    sequelize,
    modelName: 'NOTES'
})

module.exports = { Note }