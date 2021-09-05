const router = require("express").Router();
const authController = require("../controllers/authenticationController");

router.post("/user", authController.userLogin);

module.exports = router;