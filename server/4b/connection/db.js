const mysql = require('mysql2')

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "backendtest"
})

db.connect((err) => {
    if (err) throw err;
    console.log("Berhasil terkoneksi!");
  });

module.exports = db;