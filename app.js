const express = require('express')

const app = express()

app.use(express.urlencoded)
app.use(express.json())

app.use(express.static('./assets'))

app.get('/', (req,res) => {
    res.send('hey')
})