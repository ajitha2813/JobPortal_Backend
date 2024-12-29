import bodyParser from "body-parser"
import express from "express"
import mongoose from "mongoose"
const app=express()
import dotenv from "dotenv"
dotenv.config();
const PORT=process.env.PORT || 8000;
const MONGOURL=process.env.MONGO_URL;
app.use(bodyParser.json())

mongoose.connect(MONGOURL).then(()=>{
    console.log("database connected successfully")
    app.listen(PORT,()=>{
        console.log('Server is running on port  ${PORT}')
    })
}).catch((error)=>console.log(error))
