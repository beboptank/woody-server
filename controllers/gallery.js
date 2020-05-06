require("dotenv").config();
const Flickr = require('flickr-sdk');

let flickr = new Flickr(process.env.FLICKR_API_KEY);

const getPhotos = (req, res) => {
    flickr.people.getPhotos({
        user_id: process.env.FLICKR_ID
    })
        .then(data => {
            console.log(res.json(data));
        })
        .catch(err => res.status(400).json('Unable to work with Flickr API.'));
};

 module.exports = {
    getPhotos: getPhotos
 };