const express = require("express");
const multer = require("multer");
const uploadFile = require("./Models/Services/Storage.services");
const app = express();

app.use(express.json());

const storage = multer.diskStorage({
    storage: multer.memoryStorage()

});

app.post('/create-post', (req, res) => {

    console.log(req.body);
    console.log(req.file);

    const result = uploadFile(req.file.buffer);

    console.log(result);
});

// app.js mein add kiya gaya:
app.get('/', (req, res) => {
    res.send('Welcome to the ImagePost API!');
});

module.exports = app;