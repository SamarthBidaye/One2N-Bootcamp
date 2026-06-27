const mongoose=require("mongoose")

const studentData=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    studentId:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    department:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true,
    }
},{timestamps:true})

module.exports=mongoose.model("Students-Data",studentData);