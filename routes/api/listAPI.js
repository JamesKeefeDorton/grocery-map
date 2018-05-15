const router = require("express").Router();
const listController = require("../../controllers/listController")

router.route("/find/:id")
  .get(listController.findList)
router.route("/create/:userid")
	.post(listController.createList)


module.exports = router;