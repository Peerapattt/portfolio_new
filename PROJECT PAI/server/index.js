const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');
const { query } = require('express');
const port = 6060;
const multer = require('multer');

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
    db.query(`select DATE_FORMAT(regdate, "%W %e %M %Y") AS regdate,id,fullname,phone,email,work_detail,work_name,status
    from customer ` , (err,result)=>{
        if(err){
            console.log(err)
        
        }
        else{
            res.send(result)
        }
    })
})


app.put("/updatework/:id", (req, res) => {
    try {
      let { id } = req.params;
      let  {fullname,phone,email,status} = req.body;
      const sql= `UPDATE customer SET fullname = '${fullname}',phone ='${phone}',email ='${email}',status ='${status}' where id = '${id}' `
      console.log(fullname,phone,email,status);
      console.log(id);
      console.log(sql);
      db.query(sql, (err, results) => {
        if (err) {
          res.send(err.message);
          throw err;
        }
        console.log(sql);
        console.log(results);
        console.log(sql);
        res.send("updated successfully");
      });
    } catch (err) {
      console.error(err.message);
    }
  });



  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
    cb(null, Date.now() + ".png")
    }
    })
    const upload = multer({ storage: storage })
    app.get('/', (req, res) => {
    res.send('Hello Upload')
    })
    app.post('/upload', upload.single('file'),  (req, res) => { 
    
    res.send(req.file)
    })


    app.delete("/delete/:id", (req, res) => {
        try {
          let { id } = req.params;
      
          const sql = `DELETE FROM customer where id = "${id}"`;
          console.log(sql);
          db.query(sql, (err, results) => {
            if (err) {
              throw err;
            }
            console.log(results);
            res.send(results);
          });
        } catch (err) {
          console.error(err.message);
        }
      });




    // app.post('/iflogin',async (req,res) => {


    //     try(
    //         const (Email,password) = req.body

    //         const sql = `SELECT * FROM customer WHERE email='${Email}' and password='${password}' `;
    //     )


    //     const email = req.body.email;
    //     const password = req.body.password;
    //     console.log(email,password)
      
    //     pool.query("SELECT * FROM customer WHERE email=? and password=?",
    //     [email,password],
    //     (err,result)=>{
    //         if(err){
    //             console.log(err); 
    //             res.send({err:err});
    //         }
    //         if(result.length>0){
    //             res.send(result);
    //         }else{
    //             res.send({message:"Wrong email/password.."});
    //         }
      
    //     })
    //   })