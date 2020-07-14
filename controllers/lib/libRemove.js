// route /remove - removes file at a given path.

const fs = require("fs");
const pathMD = require("path");

const config = require("../../config");

module.exports = {
  removeFile(req, res, next) {
    const { dirPath } = req.body;

    var dir = config.configDirectory;
    const searchPath = pathMD.join(dir, dirPath);

    let isFileExists =
      fs.existsSync(searchPath) && fs.lstatSync(searchPath).isFile();

    if (!isFileExists)
      return res.status(401).json({
        message: "It's not a file so it can't be removed.",
      });

    try {
      fs.unlinkSync(searchPath);
    } catch (error) {
      console.log(error);
      return res
        .status(401)
        .json({ message: "Error while deleting file at given path.", error });
    }

    return res
      .status(200)
      .json({ fileDeleted: searchPath, message: "File successfully removed." });
  },
};
