const express = require("express");
const router = express.Router();

const KeyWordController = require("../controllers/KeyWord");

router.get("/getAll", KeyWordController.getAll);

module.exports = router;
