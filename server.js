require('dotenv').config();
const app = require("./src/app");
const connectDB = require('./src/db/db');
const { createPostTable } = require('./src/Models/post.model');
const PORT = process.env.PORT || 5000;

// Pehle DB connect karo, phir table banao, phir server start karo
connectDB.getConnection()
    .then(async () => {
        console.log("Database se connect ho gaya!");

        // Posts table banao (agar pehle se nahi hai toh)
        await createPostTable();

        // Server start karo
        app.listen(PORT, () => {
            console.log(`Server chal raha hai (Port ${PORT})`);
        });
    })
    .catch((err) => {
        console.log("Database Error:", err);
    });