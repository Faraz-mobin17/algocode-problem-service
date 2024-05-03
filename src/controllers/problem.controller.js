const { StatusCodes } = require("http-status-codes");
const BadRequest = require("../errors/badrequest.error");
function pingProblemController(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Ping Controller is Alive" });
}

function addProblem(req, res, next) {
  try {
    throw new BadRequest("add Problem");
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res, next) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "not implemented" });
}

function getProblems(req, res, next) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "not implemented" });
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
