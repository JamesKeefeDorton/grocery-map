const router = require("express").Router();
const itemRoutes = require("./itemAPI");
const listRoutes = require("./listAPI");
const userRoutes = require("./userAPI");

router.use("/item", itemRoutes);
router.use("/list", listRoutes);
router.use("/user", userRoutes);

module.exports = router;
