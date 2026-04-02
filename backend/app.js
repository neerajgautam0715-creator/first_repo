const express=require("express");
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    res.send("backend route is running");
})

app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`);
});
