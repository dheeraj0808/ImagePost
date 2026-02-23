# ImagePost
A web application (backend) that provides APIs for managing image posts. This project uses Express.js and MySQL for data persistence.

## 🚀 Features
- **Express Server:** Fast and minimalist web framework for Node.js.
- **MySQL Database:** Relational database integration using `mysql2` and connection pooling.
- **Environment Variables:** Secure configuration using `dotenv`.
- **Auto-restart:** Uses `nodemon` for automatic server restarts during development.

## 📁 Project Structure
```
ImagePost/
├── src/
│   ├── app.js        # Express application setup and routes
│   └── db/
│       └── db.js     # Database connection pool setup
├── .env              # Environment configurations (not included in version control)
├── package.json      # Project dependencies and scripts
└── server.js         # Entry point to start the server
```

## 🛠️ Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL/XAMPP](https://www.apachefriends.org/) running locally.

## ⚙️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dheeraj0808/ImagePost.git
   cd ImagePost
   ```

2. **Install dependecies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=ImagePost
   ```

4. **Start the Database:**
   Ensure your MySQL server (via XAMPP or similar) is running on port `3306`.

5. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   The terminal should display:
   ```
   Database se connect ho gaya!
   Server chal raha hai (Port 5000)
   ```

## 🌐 API Endpoints
- **`GET /`** : Health check / Welcome route.
  - Response: `Welcome to the ImagePost API!`
