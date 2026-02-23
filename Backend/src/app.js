const express = require("express");
const multer = require("multer");
const uploadFile = require("./Models/Services/Storage.services");
const PostModel = require("./Models/post.model");

const app = express();

app.use(express.json());

// Memory storage — file ka buffer milega (ImageKit ke liye zaroori hai)
const upload = multer({ storage: multer.memoryStorage() });

// upload.any() — koi bhi field name accept karega, debug ke liye best hai
app.post('/create-post', upload.any(), async (req, res) => {
    try {
        console.log("Body:", req.body);
        console.log("Files:", req.files);

        // req.files array hoga upload.any() ke saath
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: "Image file is required!" });
        }

        // Pehli file ko upload karo
        const file = req.files[0];
        console.log("Field name received:", file.fieldname);

        const result = await uploadFile(file.buffer);
        console.log("Upload Result:", result);

        res.status(201).json({
            message: "Post created successfully!",
            imageUrl: result.url,
            data: result
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