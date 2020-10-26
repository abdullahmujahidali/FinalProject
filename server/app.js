const express = require("express");
const app=express();
const PORT=5000;

app.get("/",(req,res)=>{
    res.send("Server")
})

app.listen(PORT,()=>{
    console.log("Server is up and running ",PORT);
})
