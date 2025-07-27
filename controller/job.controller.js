const JobModel=require("../model/job.model");

const createJob= async(req,res)=>{

    console.log(req.body);
   await JobModel.create(req.body);

    res.json({
        success:true,
        message:"Job created successfully"
    }) };

const listJobs= async(req,res)=>{
    const minSalary=req.query.minSalary ||0;
    const lists= await JobModel.find({
    salary:{$gte:minSalary}
    });
   res.json({
    success:true,
    message:"Jobs fetch Successfully",
    result:lists
   }) 
};
const updateJobs=(req,res)=>{
    res.json({
        success:true,
        message:"job updated successfully"
    })
}    ;

const deleteJobs=(req,res)=>{
    res.json({
        success:true,
        message:"Job deleted successfully"
    })
};

const controller={
    createJob,
    listJobs,
    updateJobs,
    deleteJobs
}
module.exports=controller;