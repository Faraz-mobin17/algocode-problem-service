class ApiResponse {
  constructor(statusCode, message, data, error = {}) {
    this.success = statusCode < 400;
    this.message = message;
    this.data = data;
    this.error = error;
  }
}

module.exports = ApiResponse;
