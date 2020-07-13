const express = require("express");
const router = express.Router();

const browse = require("../controllers/lib/libBrowse");

router.get("/", browse.getPathContent);

module.exports = router;