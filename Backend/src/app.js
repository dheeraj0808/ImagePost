const express = require("express");
const multer = require("multer");
const uploadFile = require("./Models/Services/Storage.services");
const PostModel = require("./Models/post.model");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Memory storage — file ka buffer milega (ImageKit ke liye zaroori hai)
const upload = multer({ storage: multer.memoryStorage() });

// Post create karo — image upload + DB save
app.post('/create-post', upload.any(), async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: "Image file is required!" });
        }

        // ImageKit pe upload karo
        const file = req.files[0];
        const result = await uploadFile(file.buffer);

        // MySQL mein save karo
        const caption = req.body.caption || "No caption";
        const dbResult = await PostModel.createPost(result.url, caption);

        res.status(201).json({
            message: "Post created successfully!",
            postId: dbResult.insertId,
            imageUrl: result.url,
            caption: caption
        });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Something went wrong!", details: err.message });
    }
});

app.get('/posts', async (req, res) => {
    const post = await PostModel.getAllPosts();
    return res.status(200).json({
        message: "Posts fetched successfully!",
        data: post
    });
});

app.get('/', (req, res) => {
    res.send('Welcome to the ImagePost API!');
});

module.exports = app;