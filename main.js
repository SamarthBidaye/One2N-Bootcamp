const express=require("express");
const app=express()
const dotenv=require("dotenv").config()
const database=require("./components/dbconfigure/database");
const studentsapi=require('./components/routes/studentsAuth');

app.use(express.json());
database()


app.use('/student',studentsapi)


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})