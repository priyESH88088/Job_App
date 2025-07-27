const express=require("express");
const router=express.Router();
const jobController=require("../controller/job.controller");

router.post("/create",jobController.createJob
);

router.get("/list",jobController.listJobs);

router.patch("/update",jobController.updateJobs);

router.delete("/delete",jobController.deleteJobs);

module.exports=router;