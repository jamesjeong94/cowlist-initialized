const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const port = 3000;

const cowList = require("./models/model");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(express.static("./client/dist"));

app.get("/api/cows", (req, res) => {
  cowList
    .getAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("Error occured with getting all cow data");
      return console.log(err);
    });
});

app.post("/api/cows", (req, res) => {
  cowList
    .create(req.body)
    .then(() => {
      console.log("==> Cow successfully inserted");
      res.send(req.body);
    })
    .catch((err) => {
      console.log("Error occurred at creating cow");
      return console.log(err);
    });
});

app.patch("/api/cows", (req, res) => {
  cowList
    .update({ name: req.body.name }, { description: req.body.description })
    .then(() => {
      console.log("==> Cow successfully updated");
      res.send(req.body);
    })
    .catch((err) => {
      console.log("Error occured with updating cow");
      return console.log(err);
    });
});

app.delete("/api/cows", (req, res) => {
  cowList
    .delete({ name: req.body.name })
    .then(() => {
      console.log("==> Cow successfully deleted");
      res.send(201);
    })
    .catch((err) => {
      console.log("Error with deleting cow");
      return console.log(err);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
