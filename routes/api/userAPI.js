const router = require("express").Router();
const userController = require("../../controllers/userController")

router.route("/register")
  .post(userController.addUser)
router.route("/login/:username")
  .get(userController.findUser)
router.route("/addlist/:userid/:listid")
	.put(userController.addList)


module.exports = router;