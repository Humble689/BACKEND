const { error } = require('console');
const mysql = require('mysql');
require ("dotenv").config()
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DATABASE
})  
db.connect((err) => {
    if(err) throw err;

    console.log('Connected to database')
})
module.exports= db;
