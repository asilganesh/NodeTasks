

const { json } = require('body-parser')
let express = require("express")

let app = express()//for routing

let fs = require("fs")

let details = []
//miidleware
app.use(express.json())


var write=()=>{
    fs.writeFile("index.txt", JSON.stringify(details, null, 2), (err, data) => {
    })
}

//REGISTER
app.post('/register', (req, res) => {


    if (details.length == 0) {

        details =[...details,req.body]
        write();
        res.json("Details Updated")

       
    }

    else {

      


    //   if(users){

    //     res.json("Details Updated")
    //   }
    //   else{
    //     res.join("User already exists")
    //   }

    for(i=0;i<details.length;i++){
       
        if (req.body.userName == details[i].userName) {
            res.json("Username Already Exists")
        }
        else {
            details.push(req.body)
            write();
            console.log(req.body.userName,details[i].userName)
         
            res.status(200).json("Details Updated")  
        }
    }
    }

})

//LOGIN

app.get("/login", (req, res) => {
    
    fs.readFile("index.txt", (err, data) => {
        let userdata=JSON.parse(data)
       

       
     for(i=0;i<userdata.length;i++){
        if(req.body.userName!=userdata[i].userName){
          
            res.json("UserName Not Exists")
        }
        else{
            if(req.body.password!=userdata[i].password){
                res.json("Incorrect Password")
            }
            else{
                res.json("Login Successfully")
            }
        }
     }

        
    })
})


app.listen(3002, () => {

    console.log("listening");
})