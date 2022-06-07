const { Router } = require("express");

// Routes Files

const transactionRoutes = require("./transactionRoutes");
const categoryRoutes = require("./categoryRoutes");

const router = Router();

// Routes Middlewares

router.use("/", transactionRoutes);
router.use("/", categoryRoutes);

module.exports = router;
