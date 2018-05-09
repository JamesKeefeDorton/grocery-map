const router = require("express").Router();
const listitemsController = require("../../controllers/listitemsController")

router.route("/")
    .get(listitemsController.findAll)

module.exports = router;