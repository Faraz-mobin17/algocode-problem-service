const { StatusCodes } = require("http-status-codes");
const { ProblemService } = require("../services/index");
const { ProblemRepository } = require("../repositories/index");
const { ApiResponse } = require("../utils/index");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Ping Controller is Alive" });
}

async function addProblem(req, res, next) {
  try {
    console.log("incoming request body");
    const newproblem = await problemService.createProblem(req.body);
    console.log("Reached in problem controller");
    return res
      .status(StatusCodes.CREATED)
      .json(
        new ApiResponse(
          StatusCodes.CREATED,
          "Successfully create a problem",
          newproblem,
        ),
      );
  } catch (error) {
    next(error);
  }
}

async function getProblem(req, res, next) {}

async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponse(
          StatusCodes.OK,
          "Successfully fetched all problems",
          response,
        ),
      );
  } catch (error) {
    throw error;
  }
}

function deleteProblem(req, res, next) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "not implemented" });
}

function updateProblem(req, res, next) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "not implemented" });
}

module.exports = {
  addProblem,
  getProblem,
  deleteProblem,
  updateProblem,
  getProblems,
  pingProblemController,
};
