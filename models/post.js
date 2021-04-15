const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: "https://res.cloudinary.com/bigbrain/image/upload/v1616608676/noQ_hvukdh.png"
    },
    likes: [{
        type: ObjectId,
        ref: "User"
    }],
    comments: [{
        text: String,
        postedBy: { 
            type: ObjectId, 
            ref: "User" 
        },
        commentLikes:[{
            type: ObjectId,
            ref: "User"
        }],
        commentDate:{
            type:Date,
            default:Date.now
        }
    }],
   
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    postDate:{
        type:String
    }
},{timestamps:true})

mongoose.model("Post", postSchema)