const express = require('express');
const sequelize = require('sequelize');
const app = express();
const path = require('path')
app.use(express.json())


//importing note model

const { Note } = require('../../models/note');

//route to get all notes stored in server

app.get('/', async (req, res) => {
  console.log('all these notes..')
  try {
    const title = req.body.title;
    const text = req.body.text;

    //sequelize findall to grab all items inside Note model
    const allNotes = await Note.findAll()

    if (!allNotes) {
      res.status(500).json('its no notes in here')
    }
    res.json(allNotes)

  }
  catch (err) {
    console.log(err)
  }
})

//route to add a new note. grabs the body information and then runs sequelize command to insert into the table with given data

app.post('/', async (req, res) => {

  const { title, text } = req.body;
  const newNote = await Note.create({ title, text })
  res.status(200).json(await Note.findAll())

})

//route to delete note

app.delete(`/:id`, async (req, res) => {
  console.log('deleting')
  const selectedNote = req.params.id

  //the app tries to run a sequelize function to find note given the id provided 
  try {
    const noteDelete = await Note.findByPk(selectedNote)

//if there is not a note to delete with this id it will send back an error with 'no note to send' 

    if (!noteDelete) {
      res.status(500).json('no note to send')
    }
    console.log(noteDelete)
    

    //if there is a note with the given id it then runs a sequelize command to delete data stored matching that id from database
    const deletedNote = await Note.destroy({
      where: {
        id: selectedNote
      }
    })

    if (!deletedNote) {
      console.log('no notes deleted')
    }
  }
  catch(err) {
    res.send(err)
  }

})

//exporting routes

module.exports = app