const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


// ROUTES
const whiteboardRoutes = require('./routes/whiteboard');
const todoRoutes = require('./routes/todo');


const MONGODB_URI = 'mongodb+srv://pminda:qwerty12345@cluster0-wbn9g.mongodb.net/homehub?retryWrites=true&w=majority';

const app = express();

var corsOptions = {
    origin: true,
    credentials: true  
}

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/whiteboard', whiteboardRoutes);
app.use('/todo', todoRoutes);



mongoose.connect( MONGODB_URI )
.then(result => {
    console.log('connected!');
    app.listen(8080);
})
.catch(err => console.log(err));