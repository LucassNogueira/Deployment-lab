require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const rollbar = require("rollbar");

const app = express();

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("listening on port " + port));
