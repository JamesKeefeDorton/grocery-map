const router = require("express").Router();
const itemController = require("../../controllers/itemController")

router.route("/")
    .get(itemController.findAll);

router
    .route("/:id")
    .get(itemController.findById);

module.exports = router;