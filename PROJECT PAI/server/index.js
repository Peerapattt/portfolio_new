const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');
const { query } = require('express');
const port = 6060;

app.use(cors({ 
    origin:true,
    methods: ["GET","POST","DELETE","PUT"],
    credentials: true
}))

app.use(express.json())



const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password:'',
    database:'portfolio'

})




app.listen(port,() => {
    console.log("Server starting on port " +port)
})


app.get("/work",(req,res) =>{
    db.query("select * from work " , (err,result)=>{
        if(err){
            console.log(err)
        
        }
        else{
            res.send(result)
        }
    })
})

app.post("/link",(req,res) =>{
    console.log(req.body)
    res.send(req.body)
})

app.get("/workname",(req,res) =>{
    db.query("select work_name from work " , (err,result)=>{
        if(err){
            console.log(err)
        
        }
        else{
            res.send(result)
        }
    })
})

app.post("/insertwork",(req,res) =>{
    const {fullname,phone,email,work_detail,work_name} = req.body
    db.query(`INSERT INTO customer (fullname,phone,email,work_detail,work_name,status) 
    value ('${fullname}','${phone}','${email}','${work_detail}','${work_name}','wait')` , (err,result)=>{
        if(err){
            console.log(err)
        
        }
        else{
            res.send(result)
        }
    })
})

app.get("/showwork",(req,res) =>{
    db.query(`select DATE_FORMAT(regdate, "%W %e %M %Y") AS regdate,id,fullname,phone,email,work_detail,work_name
    from customer ` , (err,result)=>{
        if(err){
            console.log(err)
        
        }
        else{
            res.send(result)
        }
    })
})