const express=require("express");
const app=express()
const dotenv=require("dotenv").config()

app.use(express.json());

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})