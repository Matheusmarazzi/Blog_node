//imports
const express = require("express");
const bodyParser = require("body-parser");
const connection = require('./database/database');

const app = express();//instantiating express

//body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//database
connection.authenticate()//connecting with database
            .then(()=>{
                console.log("connection succefully");
            })
            .catch((err)=>{
                console.log(err);
            })


//view engine
app.set('view engine', 'ejs');//setting ejs as  view engine

app.use(express.static('public'));//setting folder for static files



app.get("/", (req, res)=>{//creating main route
    res.render("index");
})


app.listen(3333, ()=>{//initialling server with callback
    console.log("server online");
} )