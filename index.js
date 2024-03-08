import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./database/db.js";
import cors from "cors";
import route from "./routes/route.js";


dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB()

const port=process.env.PORT;

app.use('/api/v1',route);




app.listen(port ,()=>{
   try {
     console.log(`Server started at ${port}`);
   } catch (error) {
    console.log(error);
   }
})