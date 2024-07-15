const express = require('express');
const router = express.Router()
const noteRoute = require('./api/notes')

router.use('/notes', noteRoute)
router.use(express.json())







module.exports = router 