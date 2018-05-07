const router = require("express").Router();
const inventoryRoutes = require("./inventoryAPI");

// Book routes
router.use("/inventory", inventoryRoutes);

module.exports = router;
