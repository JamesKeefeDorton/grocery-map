const router = require("express").Router();
const itemController = require("../../controllers/itemController")

router.route("/")
<<<<<<< HEAD
  .get(itemController.findAll)
=======
    .get(itemController.findAll);

router
    .route("/:id")
    .get(itemController.findById);
>>>>>>> master

module.exports = router;