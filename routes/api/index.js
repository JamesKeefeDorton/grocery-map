const router = require("express").Router();
const listitemsRoutes = require("./listitemsAPI");
const userRoutes = require("./userAPI");

// Book routes
router.use("/listitems", listitemsRoutes);
router.use("/user", userRoutes);

module.exports = router;
