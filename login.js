var express = require("express")
var mysql = require('mysql');
var app = express()

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mysql_12345",
  database: "xelpmoc"
})


app.post("/login",(req,resp) =>{
  const data = { email:"shaifali@gmail.com",password:"rajput"};

 
 con.query('insert into users set ?',data,(error, result)=>{
     if(error)  error;
     resp.send("login successfully")
 });
});
app.get("/fetchid",(req,resp)=>{
  con.query("select * from demoo where id=1", function(err,result,fields){
    if(err)
    {
      console.log(err)
    }else{
      resp.send(result)
    }

  });
});


  app.listen(8000,(err)=>{
  
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("on port 8000")
    }
  });
