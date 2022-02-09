const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/js", express.static(path.join(__dirname, "public/main.js")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/main.js"));
});

const port = process.env.PORT || 4004;

app.listen(port, () => console.log("listening on port " + port));
