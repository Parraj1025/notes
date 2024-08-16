const express = require('express');
const sequelize = require('sequelize');
const app = express();
const router = express.Router()
router.use(express.json())



const { Note } = require('../../models/note');

router.get('/', async (req,res) => {
  const result = await Note.findAll();
  res.status(200).json(result)
})

//route to add a new note. grabs the body information and then runs sequelize command to insert into the table with given data

router.post('/', async (req, res) => {

  const { title, text } = req.body;
  const newNote = await Note.create({ title, text })
  res.status(200).json(await Note.findAll())

})

//route to delete note

router.delete(`/:id`, async (req, res) => {
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

module.exports = router