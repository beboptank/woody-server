require("dotenv").config();
const Flickr = require('flickr-sdk');

let flickr = new Flickr(process.env.FLICKR_API_KEY);

flickr.people.getPhotos({
    user_id: process.env.FLICKR_ID
})
    .then(function (res) {
        console.log('awesome my dude', res.body);
    })
    .catch(function (err) {
        console.error('uh oh', err);
    });