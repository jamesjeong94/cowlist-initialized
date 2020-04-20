const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const port = 3000;
const cowRouter = require("./routes/api-cow");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(express.static("./client/dist"));

app.use("/api/cows", cowRouter);
app.use(express.static("../client"));

app.get("/", (req, res) => {
  res.render();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
