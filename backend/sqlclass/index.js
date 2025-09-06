//conatants
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require("express");
const app=express();
const path=require("path");

//ejs
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


//sql connection establishment
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Swayam@0908',
  database: 'delta_app'
});



// insert statement
// let p = "INSERT INTO user (id, username, email, password) VALUES ?";

// generate 100 random users
//also directly pushing them into values array making it an array of array so that through our connection query we can directly oass values



// let values = [];
// for (let i = 0; i < 100; i++) {
//   values.push([
//     faker.string.uuid(),          // id
//     faker.person.fullName(),      // username
//     faker.internet.email(),       // email
//     faker.internet.password()     // password
//   ]);
// }

// // bulk insert
// connection.query(p, [values], (err, result) => {
//   if (err) {
//     console.log("Insert Error:", err);
//     return;
//   }
//   console.log("Inserted Rows:", result.affectedRows);

//   // show tables
//   connection.query("SHOW TABLES", (err, result) => {
//     if (err) {
//       console.error("SQL Error:", err);
//       return;
//     }
//     console.log("Tables:", result);
//     console.log("Number of Tables:", result.length);

//     connection.end();
//   });
// });




//routing

//show count
app.get("/",(req,res)=>{
  let q=`SELECT count(*) AS total FROM user`;
  connection.query(q,(err,result)=>{
     if(err){
      console.error("SQL Error:",err);
      return res.status(500).send("Database error");
     }
     let count=result[0].total;
     res.render("home", { count });
  })
});


//show users
app.get("/user",(req,res)=>{
  let q=`SELECT * FROM user`;
  connection.query(q,(err,users)=>{
    if(err){
      console.error("sql error: ",err);
      return res.status(500).send("database error");
    }
    res.render("showusers",{users});
  })
});  


//edit username routing
app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`SELECT * FROM user WHERE id=?`;    
  connection.query(q,[id],(err,result)=>{
    if(err){
      console.error("sql error: ",err);
      return res.status(500).send("database error");
    }
    if(result.length === 0){
      return res.status(404).send("User not found");
    }
    res.render("edit",{user: result[0]});  
  })
  console.log("Editing user:", id);
}); 


//server is live
app.listen(8080,()=>{
  console.log("server is live on port 8080");
});
