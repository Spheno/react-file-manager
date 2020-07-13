// route /download - returns the file for a given path

module.exports = {
  downloadFile(req, res, next) {
    const { path } = req.body;

    return res.status(200).json({ path });
  },
};
