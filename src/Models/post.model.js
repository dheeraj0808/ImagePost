const mysql = require('mysql2/promise');

const PostSchema = new mysql.Schema({

    image: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    }
});

const PostModel = mysql.model('Post', PostSchema);

module.exports = PostModel;