var a = require("http");
var c = require("url")
var d = require("fs")


a.createServer((req, res) => {

    let bb = c.parse(req.url);
    console.log(bb.query)

    if (bb.pathname == "/register" && req.method == "GET") {

        // console.log(req.url);
        // res.write("Successfully Registered");
        // res.end();
        let a=bb.query

        a=a.split("&")
        
        var obj={}
        
        
        a=a.forEach((val,indx)=>{
            
        const [key,value]=val.split("=")
         obj[key]=value
            
            
        })
        
        console.log(obj)
       

            res.write("Successfully Loggedin");
            res.end();
          
       

    }
    else if (bb.pathname == "/register" && req.method == "POST") {

        // console.log(req.url);
        var body=""
        req.on('data',(chunk)=>{
            body+=chunk.toString()

        })

        req.on('end',()=>{
            d.readFile('index.txt',body,(err)=>{

                res.write("Successfully Loggedin");
            res.end();

            })
            
        })
       
    }
    else {

        res.write("Good Night");
        res.end();
    }


}).listen(3002, () => {

    console.log("server is running")
})