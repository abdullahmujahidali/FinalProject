const express = require("express");
const app=express();
const PORT=5000;
const mongoose=require("mongoose")
const {MONGOURI}=require("./keys")

mongoose.connect(MONGOURI,
   {
       useUnifiedTopology:true,
       useNewUrlParser:true
   }
    )
mongoose.connection.on("connected",()=>{
    console.log("Mongo Database connected")
})
mongoose.connection.on("error",(err)=>{
    console.log("Error Database connected",err)
})

app.listen(PORT,()=>{
    console.log("Server is up and running ",PORT);
})
