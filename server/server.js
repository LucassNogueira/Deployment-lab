require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const Rollbar = require("rollbar");
const e = require("express");
const base = "https://deployment-lab020922.herokuapp.com/";
const app = express();

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
rollbar.log("Howdy Test");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("https://deployment-lab020922.herokuapp.com/test", (req, res) => {
  console.log("hit");
  try {
    doSomething();
  } catch (e) {
    rollbar.error("Something went wrong", e);
    return;
  }
  res.status(404).send(res);
});
const port = process.env.PORT || 4000;

app.listen(port, () => console.log("listening on port " + port));
