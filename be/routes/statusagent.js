const express = require("express");
const router = express.Router();

const StatusAgentController = require("../controllers/StatusAgent");
router.get("/getAllStatus", StatusAgentController.getAllStatus);
module.exports = router;
