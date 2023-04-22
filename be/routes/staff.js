const express = require("express");
const router = express.Router();

const StaffController = require("../controllers/Staff");

router.post("/login", StaffController.login);
router.post("/send-otp", StaffController.sendOtp);
router.post("/sign-up", StaffController.signup);
router.post(
  "/logInOrSingInWithGoogle",
  StaffController.logInOrSingInWithGoogle
);
router.post("/forgot-password", StaffController.resetPassword);
module.exports = router;
