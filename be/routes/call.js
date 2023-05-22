const express = require("express");
const router = express.Router();

const CallController = require("../controllers/Call");
router.post("/addCall", CallController.addCall);
router.get("/getAllCall", CallController.getAllCall);
module.exports = router;
