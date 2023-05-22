const express = require("express");
const router = express.Router();

const AgentController = require("../controllers/Agent");

router.post("/addAgent", AgentController.addAgent);
router.get("/getAllRingGroup", AgentController.getAllRingGroup);
router.get("/getAllAgent", AgentController.getAllAgent);
router.get("/getAllPhoneNumbers", AgentController.getAllPhoneNumbers);
router.get("/getAllWaitime", AgentController.getAllWaitime);
router.get("/getAllStatusTime", AgentController.getAllStatusTime);
router.get("/getAllStatus", AgentController.getAllStatus);
router.get(
  "/getAllPhoneNumbersAndMonth",
  AgentController.getAllPhoneNumbersAndMonth
);
router.get(
  "/getKeyAndQuantityInCalls",
  AgentController.getKeyAndQuantityInCalls
);

router.get("/keywordstatistics", AgentController.keywordstatistics);

module.exports = router;
