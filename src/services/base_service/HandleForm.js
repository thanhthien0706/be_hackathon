import formidable from "formidable";

export function ParseForm(req) {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      if (!err) {
        resolve({
          fields,
          files,
        });
      }

      reject(err);
    });
  });
}
