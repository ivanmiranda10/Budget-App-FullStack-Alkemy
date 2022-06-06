const { Router } = require("express");

// Routes Files

const transactionRoutes = require("./transactionRoutes");

const router = Router();

// Routes Middlewares

router.use("/", transactionRoutes);

module.exports = router;
