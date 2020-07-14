const express = require("express");
const router = express.Router();

const upload = require("../controllers/lib/libUpload");

router.post("/", upload.uploadFiles);

module.exports = router;