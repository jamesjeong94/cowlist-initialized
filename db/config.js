const Promise = require("bluebird");

module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisfyAll(db);
  }
  return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS cows (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        description VARCHAR(150)
    )
  `);
};
