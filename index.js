const express=require("express");

const jobRoute= require("./route/job.route") ;

const mongoose=require("mongoose");

const app=express();

app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/jobApp").
then(()=>{console.log("Connected to MongoDB")})
.catch((err)=>{console.log("Error in connecting",err)})


 app.use("/api/v1/jobs",jobRoute);

const portno=3000;
app.listen(portno,()=>{
    console.log(`Server up and running at portNo: ${portno}`)
});