

const { json } = require('body-parser')

let express = require("express")

let app = express()

let fs = require("fs")

app.use(express.json())

app.get("/getdata",async (req, res) => {
    
    await fs.readFile("db.json",  (err, data) => {
        let userdata=JSON.parse(data)

        if(err){
            res.json(err)
        }
        else{
            res.json(userdata)
        }

    })
}
         
)


app.listen(3002, () => {

    console.log("listening");
})