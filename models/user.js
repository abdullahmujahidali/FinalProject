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
    resetToken:{
        type:String
    },
    expireToken:{
        type:Date
    },
    country:{
        type:String,
        required:true
    },
    organization:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    intro:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/bigbrain/image/upload/v1616577562/avatardefault_92824_efnc86.png"
    },
    timeline:{
        type:String
        // default:"https://res.cloudinary.com/bigbrain/image/upload/v1614013996/defaultuser_yvxo97.png"
    },
    follower:[{
        type:ObjectId,
        ref:"User"
    }],
    ranking:[{
        type:ObjectId,
        ref:"User"
    }],
    following:[{
        type:ObjectId,
        ref:"User"
    }]
},{timestamps:true})

mongoose.model("User",userSchema)