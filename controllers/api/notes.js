const express = require('express');
const sequelize = require('sequelize');
const app = express();
const path = require('path')
app.use(express.json())

const { Note } = require('../../models/note');
const { title } = require('process');


app.get('/', async (req, res) => {
  console.log('all these notes..')
  try {
    const title = req.body.title;
    const text = req.body.text;

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

app.post('/', async (req, res) => {
  const { title, text } = req.body;
  const newNote = await Note.create({ title, text })
  res.status(200).json(await Note.findAll())

})

app.delete(`/:id`, async (req, res) => {
  console.log('deleting')
  const selectedNote = req.params.id
  try {
    const noteDelete = await Note.findByPk(selectedNote)

    if (!noteDelete) {
      res.status(500).json('no note to send')
    }
    console.log(noteDelete)
    
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

module.exports = app