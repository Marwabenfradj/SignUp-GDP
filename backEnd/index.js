const express = require("express");
var morgan = require('morgan');
var cors = require('cors');
const connectDB = require("./config/db");

const app = express();
app.use(cors());
require("dotenv").config();

// middleware global
app.use(express.json({limit: '200mb'}));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

// home interface
app.get('/',(req,res)=>{
    res.send(`<div style="height:97.3vh;display:flex;justify-content:center;align-items:center;font-size:50px;color:green;background-color:black;margin:0"><h1>Server <span style="font-size:40px">&copy;</span><span style="font-size:50px">Dev</span><p style="font-size:40px;color:orange">Running Successfully! On Port ⚙️:<span style="font-size:60px"> ${PORT} </span></p></h1></div>`)
})

connectDB.getConnection((err, conn)=>{
    if(err) {
        console.log('error connect DB',err)
    } else {
        conn.release();
        console.log('connect DB successfully!')
        app.use("/users",require('./routes/users.routes'))
    }
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>
console.log(`server running on port ${PORT}` ));