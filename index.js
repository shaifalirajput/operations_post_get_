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
  const data = {id:2, name:"raj",address:"mumbai"};

 
 con.query('insert into demoo set ?',data,(error, result)=>{
     if(error)  error;
     resp.send(result)
 });
});
app.get("/fetchid",(req,resp)=>{
  con.query("select * from  where id=1", function(err,result,fields){
    if(err)
    {
      console.log(err)
    }else{
      resp.send("login succssesfully")
    }
  });
});
app.put("/update",(req,res)=>{
  const upname = req.body.name;
  const id= req.body.id;
  con.query('UPDATE demoo set name="?" where id=?' ,[upname,id],function(err,result,fields){
      if(err)
      {
        console.log(err)
      }else{
        res.send("updated")
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
