const mongoose = require("mongoose");
const { MONGODB_URL, NODE_ENV } = require("./server.config");

async function connectDB() {
  try {
    if (NODE_ENV === "development") {
      await mongoose.connect(MONGODB_URL);
      console.log("database Successfully Connected");
    } else if (NODE_ENV === "production") {
      console.log("production database");
      // await mongoose.connect(MONGODB_PROD_URL);
    }
  } catch (error) {
    console.log("Unable to connect to the db server", error);
  }
}

module.exports = connectDB;
