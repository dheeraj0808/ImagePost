const connectDB = require('../db/db');

// MySQL mein table banana padta hai (MongoDB jaisa Schema nahi hota)
async function createPostTable() {
    const query = `
        CREATE TABLE IF NOT EXISTS posts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            image VARCHAR(500) NOT NULL,
            caption VARCHAR(500) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    await connectDB.query(query);
    console.log("Posts table ready!");
}

// Ek post insert karo
async function createPost(image, caption) {
    const query = `INSERT INTO posts (image, caption) VALUES (?, ?)`;
    const [result] = await connectDB.query(query, [image, caption]);
    return result;
}

// Saare posts laao
async function getAllPosts() {
    const query = `SELECT * FROM posts ORDER BY created_at DESC`;
    const [rows] = await connectDB.query(query);
    return rows;
}

module.exports = { createPostTable, createPost, getAllPosts };