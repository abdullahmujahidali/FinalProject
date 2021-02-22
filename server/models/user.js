const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/bigbrain/image/upload/v1614013996/defaultuser_yvxo97.png"
    },
    follower:[{
        type:ObjectId,
        ref:"User"
    }],
    following:[{
        type:ObjectId,
        ref:"User"
    }]
})

mongoose.model("User",userSchema)