const express = require('express');
const db = require("../config");


const app = express();
app.use(express.json());

const port = 8080;

const sql = `CREATE TABLE user( id int AURO_INCREMENT PRIMARY KEY, name VARCHAR(15), eamil VARCHAR(20))`;
db.query(sql, (err, result)=>{
    if(err) console.log(err);
    console.log("Table created") 
})

function requestlogger(request, response, next){
    console.log(`Request Method: ${request.method}, URL: ${request.url}`);
    next();// Passing control to the next middleware/ route handler
}

app.use(requestlogger); // Applying middleware to all routes

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port,()=>{
    console.log(`the server is running on ${port}`);
})
