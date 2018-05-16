const router = require("express").Router();
const listController = require("../../controllers/listController")

<<<<<<< HEAD
router.route("/find/:id")
  .get(listController.findList)
router.route("/create/:userid")
	.post(listController.createList)
=======
// Matches with "/api/list"
router.route("/")
    .get(listController.findAll)
    .post(listController.create);
>>>>>>> master

// Matches with "/api/list/:id"
router
    .route("/:id")
    .get(listController.findById)
    .put(listController.update)
    .delete(listController.remove);

module.exports = router;