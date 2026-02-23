const ImageKit = require("imagekit");

// ImageKit dashboard se apni keys lo aur yahan daalo
const imagekit = new ImageKit({
    publicKey: "your_public_key",                          // Dashboard se public key daalo
    privateKey: "private_boxPu0NhLOQE9fxtuaJmnbrHJw8=",
    urlEndpoint: "https://ik.imagekit.io/your_imagekit_id" // Dashboard se URL endpoint daalo
});

async function uploadFile(buffer) {
    console.log("Uploading file to ImageKit...");
    const result = await imagekit.upload({
        file: buffer.toString("base64"),
        fileName: "post_image_" + Date.now()
    });
    return result;
}

module.exports = uploadFile;
