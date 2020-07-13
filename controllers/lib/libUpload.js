// route /upload - handles file uploads to a given path.

module.exports = {
  uploadFiles(req, res, next) {
    const { path } = req.body;

    return res.status(200).json({ path });
  },
};
