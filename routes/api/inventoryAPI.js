const router = require("express").Router();
const inventoryController = require("../controllers/inventoryController")

router.route("/")
    .get(itemsController.findAll)

module.exports = router;