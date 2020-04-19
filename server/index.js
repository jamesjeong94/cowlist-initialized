const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const port = 3000;

const cowList = require("./models/model");

app.use(express.static("./client/dist"));
app.use(bodyParser.json());
app.use(morgan("combined"));

app.get("/api/cows", (req, res) => {
  cowList.getAll().then((data) => {
    res.send(data);
  });
});

app.post("/api/cows", (req, res) => {
  //   cowList.create();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
