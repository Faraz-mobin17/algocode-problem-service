const express = require("express");
const errorHandler = require("./utils/errorHandler.utils");
const { PORT } = require("./config/server.config");
const connectDB = require("./config/db.config");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/ping", (req, res) => {
  return res.json({ message: "Problem service is alive" });
});

const apiRouter = require("./routes/index");

// if any request will comes to this router map that requrest to api router
app.use("/api", apiRouter);

// last middleware if any errors comes
app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server started at PORT ${PORT}`);
  await connectDB();
});
