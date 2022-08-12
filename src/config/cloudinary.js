const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.DI_CLOUD_NAME,
  api_key: process.env.DI_API_KEY,
  api_secret: process.env.DI_API_SECRET,
});

module.exports = cloudinary;
