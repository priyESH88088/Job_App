const express=require("express");

const jobRoute= require("./route/job.route") ;

const mongoose=require("mongoose");

const dotenv = require("dotenv");
 dotenv.config();

const app=express();

app.use(express.json());
console.log(process.env.db_Url);     
mongoose.connect("mongodb+srv://priyesh88088:3c7sKd7ej76YWrR8@cluster0.efm2ruf.mongodb.net/").
then(()=>{console.log("Connected to MongoDB")})
.catch((err)=>{console.log("Error in connecting",err)})


 app.use("/api/v1/jobs",jobRoute);

const portno=3000;
app.listen(portno,()=>{
    console.log(`Server up and running at portNo: ${portno}`)
});
