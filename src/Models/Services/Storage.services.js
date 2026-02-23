const imagekit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey: "private_boxPu0NhLOQE9fxtuaJmnbrHJw8="
});

async function uploadFile(buffer){
    const result = await imagekit.files.upload({
        file: buffer,
        fileName: "test"
    });
    return result;
}

module.exports = uploadFile;

