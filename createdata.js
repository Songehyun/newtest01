const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./database/index.db");

// insert one row into the student table
db.run(
  `INSERT INTO user(name, email) VALUES('송이현', 's123xcknlf@gmail.com')`,
  function (err) {
    if (err) {
      return console.log(err.message);
    }
  }
);

// close the database connection
db.close();
