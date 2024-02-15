let sql=require("mysql");


let con=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"Ganesh@464",
    database:"employee"
});

con.connect(()=>{
    console.log("sql connected");
})

module.exports=con