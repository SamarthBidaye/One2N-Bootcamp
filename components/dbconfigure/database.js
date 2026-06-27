const mongoose=require("mongoose")

const database=async ()=>{
    try {
        const connectToDB=await mongoose.connect(process.env.MONGOURI);
        console.log("Connected to database.")
    } catch (error) {
        console.log("Not Connected to database",error)
    }
}

module.exports=database;