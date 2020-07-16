// route /remove - removes file at a given path.

const fs = require("fs");
const pathMD = require("path");

const config = require("../../config");

module.exports = {
  removeFile(req, res) {
    const { dirPath } = req.body;

    if (dirPath === undefined) {
      dirPath = "/";
    }

    var dir = config.configDirectory;
    const searchPath = pathMD.join(dir, dirPath);

    let isFileExists =
      fs.existsSync(searchPath) && fs.lstatSync(searchPath).isFile();

    if (!isFileExists)
      return res.status(401).json({
        message:
          "Path doesn't exist or it's not a file so it can't be removed.",
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
