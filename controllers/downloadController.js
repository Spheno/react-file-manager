const express = require("express");
const router = express.Router();

const download = require("../controllers/lib/libDownload");

router.get("/", download.downloadFile);

module.exports = router;