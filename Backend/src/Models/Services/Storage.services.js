const ImageKit = require("imagekit");

// ImageKit ko 3 cheezein chahiye — publicKey, privateKey, urlEndpoint
const imagekit = new ImageKit({
    publicKey: "public_dummy",
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: "https://ik.imagekit.io/u6wtpdnun"
});

// Ye function image ko ImageKit pe upload karega
async function uploadFile(buffer) {
    const result = await imagekit.upload({
        file: buffer.toString("base64"),
        fileName: "post_" + Date.now()
    });
    return result;
}

module.exports = uploadFile;
