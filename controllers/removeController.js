const express = require("express");
const router = express.Router();

const remove = require("../controllers/lib/libRemove");

router.post("/", remove.removeFile);

module.exports = router;