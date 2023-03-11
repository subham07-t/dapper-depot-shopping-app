const userController = require("../controllers/userController");

const router = require("express").Router();

router.route("/register").post(userController.register);
router.route("/login").post(userController.login);

module.exports = router;
