const router = require("express").Router();
const listController = require("../../controllers/listController")

router.route("/find/:id")
    .get(listController.findList)


module.exports = router;