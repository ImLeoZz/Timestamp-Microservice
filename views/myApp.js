const express = require('express');
const app = express();

app.get('/api/:date?', function(req, res) {
    
    let date = req.params.date;

    console.log(`1 -- ${date}`);

    if (date === undefined) {
        date = new Date();
    } else if (isNaN(date) == true) {
        date = new Date(req.params.date);
    } else {
        date = new Date(Number(req.params.date))
    };

    console.log(`2 -- ${date}`);

    if (date == 'Invalid Date') {
        res.json(
            {
            error: "Invalid Date"
            });
    } else if (isNaN(date)) {
        res.json(
            {
                unix: req.params.date,
                utc: date.toUTCString()
            });
    } else {
        res.json(
            {
                unix: date.getTime(), 
                utc: date.toUTCString()
            });
    }
});

module.exports = app;