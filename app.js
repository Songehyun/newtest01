const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db/index.db");
db.serialize(() => {
  db.run("CREATE TABLE users (name TEXT NOT NULL, age INTEGER NOT NULL)");
  const stmt = db.prepare("INSERT INTO users (name, age) VALUES(?, ?)");
  const users = [
    { name: "사람", age: 30 },
    { name: "이름", age: 12 },
  ];

  for (let user of users) {
    stmt.run(user.name, user.age);
  }

  stmt.finalize();
});

db.close();
