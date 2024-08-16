const express = require('express');
const router = express.Router()
const noteRoute = require('./api/notes')

router.use(express.json())

router.use('/notes', noteRoute)






module.exports = router 