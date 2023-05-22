const express = require("express");
const router = express.Router();

const AdminController = require("../controllers/Admin");

router.get("/getAllStaff", AdminController.getAllStaff);
router.get("/getAllDeletedStaff", AdminController.getAllDeletedStaff);
router.put("/deleteStaff/:id", AdminController.deleteStaff);
router.put("/editStaff/:id", AdminController.editStaff);
router.put("/restoreStaff/:id", AdminController.restoreStaff);
router.delete("/destroyStaff/:id", AdminController.destroyStaff);
router.post("/addStaff", AdminController.addStaff);

module.exports = router;
