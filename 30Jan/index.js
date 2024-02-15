
// import localStorage from 'localStorage'

const { json } = require('body-parser')
let express = require("express")
let localStorage=require("localStorage")
let fileTwo=require("./stored.js")


let app = express()//for routing


let details = []
//miidleware
app.use(express.json())




//REGISTER
app.get('/register',(req,res)=>{

    details.push(req.body)
    //Setting localStorage Item
localStorage.setItem('UserDetails', JSON.stringify(details)) 
 //console.log localStorage item with the key UserName
 console.log(localStorage.getItem('UserDetails'))

    res.json("Details Updated")

   

})


   
app.listen(3002, () => {

    console.log("listening");
})