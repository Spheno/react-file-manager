const express = require("express");
const router = express.Router();

const upload = require("../controllers/lib/libUpload");

router.get("/:path", upload.uploadFiles);

module.exports = router;