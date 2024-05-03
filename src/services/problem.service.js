class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      return this.problemRepository.createProblem(problemData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemService;
