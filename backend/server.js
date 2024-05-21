import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

const PORT=process.env.PORT || 5000


const app=  express();

// app.get("/",(req,res)=>{
//     res.send("Server id ready to work");
// })

dotenv.config();

app.use("/api/auth",authRoutes);

// console.log(process.env.MONGO_URI)

app.listen( PORT,()=>{
    console.log(`Yes Server is running fine on port ${PORT}`);
    connectMongoDB();
})
