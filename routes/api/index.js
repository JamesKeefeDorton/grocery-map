const router = require("express").Router();
const inventoryRoutes = require("./inventoryAPI");
const userRoutes = require("./userAPI");

// Book routes
router.use("/inventory", inventoryRoutes);
router.use("/user", userRoutes);

module.exports = router;
