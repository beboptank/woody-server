require("dotenv").config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const events = require('./controllers/events');
const gallery = require('./controllers/gallery');

const app = express();


//Routes

app.get('/', (req, res) => {
    res.send('woody-server');
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});

/*
    / --> 'server is running'
    /events --> GET Google Calendar API key
    /gallery --> GET Flickr API key
*/ 