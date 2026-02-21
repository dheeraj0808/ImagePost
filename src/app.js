const express = require("express");
const app = express();
// app.js mein add kiya gaya:
app.get('/', (req, res) => {
    res.send('Welcome to the ImagePost API!');
});

module.exports = app;