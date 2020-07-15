// route /download - returns the file for a given path

const fs = require("fs");
const pathMD = require("path");

const config = require("../../config");

module.exports = {
  downloadFile(req, res) {
    const { dirPath } = req.query;

    if (dirPath === undefined) {
      console.log("dirPath argument is undefined.");
      return res.status(401).send("dirPath argument is undefined.");
    }

    var dir = config.configDirectory;
    const searchPath = pathMD.join(dir, dirPath);

    let isFileExists =
      fs.existsSync(searchPath) && fs.lstatSync(searchPath).isFile();

    if (!isFileExists)
      return res.status(401).json({
        message:
          "Path doesn't exist or it's not a file so it can't be downloaded.",
      });

    var filename = pathMD.basename(searchPath);

    try {
      res.download(searchPath, filename);
    } catch (error) {
      console.log(error);
    }
  },
};
