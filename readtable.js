const sqlite3 = require("sqlite3").verbose();

// open the database
let db = new sqlite3.Database("./database/index.db");

let sql = `SELECT * FROM student
           WHERE name = '송이현'`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row);
  });
});

// close the database connection
db.close();
