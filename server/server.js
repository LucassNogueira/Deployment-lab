const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const port = process.env.PORT || 4004;

app.listen(port, () => console.log("listening on port " + port));
