const express = require("express");
const app=express();
const PORT=5000;

const customMiddleware=(req,res,next)=>{
    next()
}

app.use(customMiddleware)

app.get("/",(req,res)=>{
    res.send("Server")
})
app.get("/about",customMiddleware,(req,res)=>{
    res.send("About Page")
})

app.listen(PORT,()=>{
    console.log("Server is up and running ",PORT);
})
