class ApiResponse {
  constructor(statusCode, message, error = {}, data) {
    this.success = statusCode < 400;
    this.message = message;
    this.data = data;
    this.error = error;
  }
}

module.exports = ApiResponse;
