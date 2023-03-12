const generalController = require("../controllers/generalController");
const adminController = require("../controllers/adminController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

const router = require("express").Router();

router
  .route("/:id")
  .put(verifyTokenAndAuthorization, generalController.update)
  .delete(verifyTokenAndAuthorization, generalController.deleteUser);

router.route("/find/:id").get(verifyTokenAndAdmin, adminController.userDetails);
router.route("/").get(verifyTokenAndAdmin, adminController.usersDetails);

module.exports = router;
