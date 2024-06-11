const sqlite3 = require("sqlite3").verbose();

// open a database connection
let db = new sqlite3.Database("./database/index.db", (err) => {
  if (err) {
    console.error(err.message);
  }
});

let id = 3;
// delete a row based on id
db.run(`DELETE FROM student WHERE id=?`, id, function (err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Row(s) deleted ${this.changes}`);
});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
});
