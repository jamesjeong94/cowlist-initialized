const express = require("express");

const router = express.Router();
const cowList = require("../models/model");

router.get("/", (req, res) => {
  return cowList
    .getAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("Error occured with getting all cow data");
      return console.log(err);
    });
});

router.post("/", (req, res) => {
  console.log("======>", req.body);
  cowList
    .create(req.body)
    .then(() => {
      console.log("==> Cow successfully inserted");
      res.json(req.body);
    })
    .catch((err) => {
      console.log("Error occurred at creating cow");
      return console.log(err);
    });
});

router.patch("/", (req, res) => {
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

router.delete("/", (req, res) => {
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

module.exports = router;
