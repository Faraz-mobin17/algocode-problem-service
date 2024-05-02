const express = require("express");
const ProblemRouter = require("./problem.routes");
const v1Router = express.Router();

v1Router.use("/v1", ProblemRouter);

module.exports = v1Router;
