const express = require("express");

const { PORT } = require("./config/server.config");
const apiRouter = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/ping", (req, res) => {
  return res.json({ message: "Problem service is alive" });
});

app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
