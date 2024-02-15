let express=require("express");

let app=express();

let conn=require("./db.js");

const { json } = require("body-parser");

app.use(express.json())

app.get("/register",(req,res)=>{
    conn.query("insert into users set?",req.body,(err,data)=>{
        console.log(err);
        res.send(data)
    })
   

})

app.get("/users",(req,res)=>{

    conn.query("select * from users",(err,data)=>{

        if(err){
            res.status(400).send(err)
        }
        else{

            res.status(200).json(data)
        }
    })

})

app.use(express.json())

app.post("/total",(req,res)=>{
    const {a,b}=req.body
     const sum=a+b

     res.json({"total":sum})
})

app.listen(3002,()=>{
    console.log("server is running");
})