const _ = require("lodash");
const db = require("../../db");

const executeQuery = (query, values) => {
  return db.queryAsync(query, values).spread((results) => {
    return results;
  });
};

const parseData = (options) => {
  return _.reduce(
    options,
    (parsed, value, key) => {
      parsed.string.push(`${key} = ?`);
      parsed.values.push(value);
      return parsed;
    },
    { string: [], values: [] }
  );
};

class CowList {
  constructor() {
    this.tablename = "cows";
  }

  getAll(options) {
    if (!options) {
      let queryString = `SELECT * FROM ${this.tablename}`;
      return executeQuery(queryString);
    }
    let parsedOptions = parseData(options);
    let queryString = `SELECT * FROM ${
      this.tablename
    } WHERE ${parsedOptions.string.join(" AND ")}`;
    return executeQuery(queryString, parsedOptions.values);
  }

  create(options) {
    let queryString = `INSERT INTO ${this.tablename} SET ?`;
    return executeQuery(queryString, options);
  }

  update(options, values) {
    let parsedOptions = parseData(options);
    let queryString = `UPDATE ${
      this.tablename
    } SET ? WHERE ${parsedOptions.string.join(" AND ")}`;
    return executeQuery(
      queryString,
      Array.prototype.concat(values, parsedOptions.values)
    );
  }

  delete(options) {
    let parsedOptions = parseData(options);
    let queryString = `DELETE FROM ${
      this.tablename
    } WHERE ${parsedOptions.string.join(" AND ")}`;
    console.log(queryString, parsedOptions);
    return executeQuery(queryString, parsedOptions.values);
  }
}

module.exports = new CowList();
