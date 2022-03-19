const express = require("express")
var app = express()
const path = require('path')
const bodyParser = require('body-parser')
const res = require("express/lib/response")



app.use(bodyParser.urlencoded({ extended: true }))

app.get("/",function(request,response){
    response.send("Hello World!")
})

app.listen(10000, function () {
    console.log("Started application on port %d", 10000)
});

app.get("/users", function(request, response){
    response.sendFile(path.join(__dirname, "/insert_users.html"))
})

app.post("/users", (request, response) => {    
    console.log(request.body)
    // mandar los datos a la base de datos
});


// consulta buscando users - email == request.body.email
 //śi Array, length 
 
 app.get("/singIn", function(request, response){
    response.sendFile(path.join(__dirname, "/sing_in.html"))
})

//conexion base de datos
var mysql = require('mysql');
const connect  = require("http2")

var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo"
});
conexion.connect(function(err) {
    if (err) throw err;
    conexion.query("SELECT * FROM customers", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
