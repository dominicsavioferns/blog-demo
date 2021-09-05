const router = require("express").Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("", userController.createuser);
router.get("/:id", authMiddleware.authoriseUser, userController.getuserById);

module.exports = router;