const connectDB = require("../config/db");
require("dotenv").config();
const env = process.env

exports.getAllUsers = async (req, res) => {
    connectDB.query("SELECT * FROM `users`",(err, data, field)=>{
        res.status(200).json(data)
    })
}

exports.registerUser = async (req, res) => {
    const {email, password} = req.body

    console.log(email,password)
    connectDB.query(`INSERT INTO users (email, password) VALUES ('${email}','${password}');`,(err, data, field) => {
        res.status(200).json({test:'success',data:data})
    })
}
// `INSERT INTO users (email, password) VALUES (${email}, ${password})`
// INSERT INTO `users` (`email`, `password`) VALUES ('test3@gmail.com', '123456');