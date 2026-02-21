require('dotenv').config();
const app = require("./src/app");
const pool = require('./src/db/db');
const PORT = process.env.PORT || 3000;

// Code shuru, pehle database check karo:
pool.getConnection()
    .then(() => {
        // Agar yaha tak aaya matlab connected!
        console.log("Database se connect ho gaya!");

        // Ab hum apna node.js/express server start kar sakte hain
        app.listen(PORT, () => {
            console.log(`Server chal raha hai (Port ${PORT})`);
        });
    })
    .catch((err) => {
        // Agar database nai chala to ye error aayega
        console.log("Database Error:", err);
    });