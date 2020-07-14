const express = require("express");
const router = express.Router();

const remove = require("../controllers/lib/libRemove");

router.delete("/", remove.removeFile);

module.exports = router;