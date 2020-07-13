// route /browse - returns a list of files and directories for a given path

const fs = require("fs");
const pathMD = require("path");

const config = require("../../config");

module.exports = {
  getPathContent(req, res, next) {
    const { dirPath } = req.query;

    var dir = config.configDirectory;
    const searchPath = pathMD.join(dir, dirPath);

    const files = [];
    const folders = [];

    fs.readdirSync(searchPath).forEach((item) => {
      var itemPath = pathMD.join(searchPath, item);
      var stat = fs.statSync(itemPath);
      if (stat.isFile()) files.push(item);
      else folders.push(item);
    });

    return res.status(200).json({ searchPath, files, folders });
  },
};
