require("dotenv").config();
const {google} = require('googleapis');

const calendar = google.calendar({
    version: 'v3',
    auth: process.env.GOOGLE_API
});

const params = {
    calendarId: process.env.CALENDAR_ID
}

calendar.events.list(params)
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    });