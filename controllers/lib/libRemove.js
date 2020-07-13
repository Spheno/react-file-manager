// route /remove - removes file at a given path.

module.exports = {
  removeFile(req, res, next) {
    const { path } = req.body;

    return res.status(200).json({ path });
  },
};
