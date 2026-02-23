const mysql = require('mysql2/promise');

// Sirf 4 main cheezein chahiye Database connect karne ke liye
const connectDB = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = connectDB;