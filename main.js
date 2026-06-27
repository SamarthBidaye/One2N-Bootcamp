const express=require("express");
const app=express()
const dotenv=require("dotenv").config()
const database=require("./components/dbconfigure/database");

app.use(express.json());
database()
// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})