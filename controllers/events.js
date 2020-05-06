require("dotenv").config();
const {google} = require('googleapis');

const calendar = google.calendar({
    version: 'v3',
    auth: process.env.GOOGLE_API
});

const params = {
    calendarId: process.env.CALENDAR_ID
};

const getEvents = (req, res) => {
    calendar.events.list(params)
        .then(data => {
            console.log(res.json(data));
        })
        .catch(err => res.status(400).json("Unable to work with Google Calendar API.")
        );
};

module.exports = {
    getEvents: getEvents
};