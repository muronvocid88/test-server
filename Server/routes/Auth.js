const express = require("express");
const router = express.Router();
const controller = require("../controller/AuthController");

router.post("/api/v1/auth/register", controller.Register);
router.post("/api/v1/auth/login", controller.Login);

module.exports = router;
