require('dotenv').config()
const express = require('express');
const dbConnection = require('./config/connection')
const path = require('path')
const router = require('./controllers/router.js');


const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req,res) => {
    console.log('welcome');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req,res) => {
    console.log('here some notes');
    res.sendFile(path.join(__dirname, 'public', 'note.html'))
})

app.use("/api", router)








dbConnection.sync({force: false}).then(app.listen(()=>{console.log('done')}))

app.listen(3000, () => console.log('Server listening on port 3000'));
