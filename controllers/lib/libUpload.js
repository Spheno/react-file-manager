// route /upload - handles file uploads to a given path.
const fs = require("fs");
const pathMD = require("path");

const config = require("../../config");

module.exports = {
  uploadFiles(req, res) {
    const { dirPath } = req.body;
    var dir = config.configDirectory;

    if (dirPath === undefined) {
      console.log("dirPath argument is undefined.");
      return res.status(401).send("dirPath argument is undefined.");
    }

    const searchPath = pathMD.join(dir, dirPath); // path where file(s) should be uploaded

    let isDirExists =
      fs.existsSync(searchPath) && fs.lstatSync(searchPath).isDirectory();

    // if path is not directory then error
    if (!isDirExists)
      return res.status(401).json({
        message:
          "Path doesn't exist or it's not a directory so you can't upload a file inside of it.",
      });

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    // Input's name attribute in form is "uploadForm"
    let files = req.files.uploadForm;

    // mv() method to place the file somewhere on the server
    files.map((file) => {
      file.mv(pathMD.join(searchPath, file.name), function (err) {
        if (err) return res.status(500).send(err);
      });
    });

    return res.status(200).json({
      uploadPath: searchPath,
      nbFiles: files.length,
      message: "File(s) successfully uploaded.",
    });
  },
};
