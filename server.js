require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const events = require('./controllers/events');
const gallery = require('./controllers/gallery');

const app = express();
app.use(bodyParser.json());
app.use(cors());


//Routes

app.get('/', (req, res) => {
    res.send('woody-server');
});

app.get('/events', (req, res) => {
    events.getEvents(req, res);
});

app.get('/gallery', (req, res) => {
    gallery.getPhotos(req, res);
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});

/*
    / --> 'server is running'
    /events --> GET Google Calendar API key
    /gallery --> GET Flickr API key
*/ 