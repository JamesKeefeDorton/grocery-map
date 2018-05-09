const router = require("express").Router();
const userController = require("../../controllers/userController")

router.route("/register")
    .post(userController.addUser)
router.route("/login/:username")
    .get(userController.findUser)


module.exports = router;