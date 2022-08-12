const cloudinary = require("../../config/cloudinary");

export function UploadService(file, options) {
  return new Promise((resolve, reject) => {
    let optionDefault = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      folder: "f_hackathon",
    };

    if (options) {
      optionDefault = {
        ...options,
        ...optionDefault,
      };
    }

    const result = cloudinary.uploader.upload(file, optionDefault);

    if (result) {
      resolve(result);
    }

    reject(result);
  });
}
