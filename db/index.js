const mysql = require("mysql");
const Promise = require("bluebird");
const tables = require("./config.js");

const database = "cowlist";
const dbInfo = {
  host: "localhost",
  user: "root",
  password: "Ihatemysql29!",
};

const connection = mysql.createConnection(dbInfo);

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => {
    console.log(
      `==> Successfully connected to database "${database}" @ ${dbInfo.host}`
    );
  })
  .then(() => {
    db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`);
    console.log(`==> Created database ${database}`);
  })
  .then(() => {
    db.queryAsync(`USE ${database}`);
    console.log(`==> Using database ${database}`);
  })
  .then(() => {
    console.log(`==> Created tables for ${database}`);
    tables(db);
  })
  .catch((err) => {
    console.log("==> Error at database connection");
    return console.log(err);
  });

module.exports = db;
