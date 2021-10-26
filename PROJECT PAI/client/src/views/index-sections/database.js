const mysql = require("mysql2")
const dbconnection = mysql. createPool({
    user:'root',
    host: 'localhost',
    password:'',
    database:'portfolio'
}).promise()

module.exports = dbconnection;