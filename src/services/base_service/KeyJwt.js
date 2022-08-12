const fs = require("fs");

const privateKey = fs.readFileSync("./src/config/key/private.pem");
const publicKey = fs.readFileSync("./src/config/key/publickey.crt");

module.exports = { privateKey, publicKey };
