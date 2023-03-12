const generalController = require("../controllers/generalController");

const router = require("express").Router();

router.route("/register").post(generalController.register);
router.route("/login").post(generalController.login);

module.exports = router;
