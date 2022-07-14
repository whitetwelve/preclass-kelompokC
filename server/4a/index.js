let mysql = require('mysql2')

let db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "backendtest"
})

db.connect((err) => {
    if (err) throw err;
    console.log("Berhasil terkoneksi!");
  });
//get collections data
let data ="SELECT FROM collections_tb, users_tb.id as user_id FROM collections_tb ";

db.query(data, function (err, done) {
    if (err) throw err;

    console.log(done);
  });

 data =`SELECT FROM task_tb.*, WHERE collections_id = 3`;

  db.query(data, function (err, done) {
      if (err) throw err;
  
      console.log(done);
    });

      data =`SELECT collections_tb WHERE = 3, 
      collections_tb.name, users_tb.username,task_tb.* FROM collections_tb LEFT JOIN users_tb ON collections_tb.user_id=users_tb.id INNER JOIN task_tb ON task_tb.collections_id=collections_tb.id WHERE task_tb.collections_id= 3 `;
      db.query(data, function (err, done) {
        if (err) throw err;
    
        console.log(done);
      });
    