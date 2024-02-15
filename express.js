// let express =require('express')

// let app=express(); // to create routes
// var port =3002

// app.get("/register",(req,res)=>{

//     res.send("This is Register");
// })


// app.get("/login",(req,res)=>{

//     res.send("This is Login");
// })

// app.listen(port,()=>{

//     console.log(`hii ${port} is listening`);
// })

let express= require("express")
let app=express() // to create routes
let fs=require("fs")

let port =3002

var register=[]

//middleware

app.use(express.json())

// app.use((req,res,next)=>{

// var body=''

// req.on("data",(chunk)=>{
//     body+=chunk.toString();
// })

// req.on("end",()=>{
//     console.log(body);
//     next()
   
    
// })


// })

app.post("/register",(req,res)=>{

    register.push(req.body)
    fs.writeFile("index.txt",JSON.stringify(register),(err)=>{
        res.json("data stored")
    })
    
    // res.send("this is register")

})

app.get("/login",(req,res)=>{

    fs.readFile("index.txt",(err,data)=>{
        // res.json("data stored")
        res.json(JSON.parse(data))
    })
    
})

app.listen(port,()=>{

    console.log("listening");
})