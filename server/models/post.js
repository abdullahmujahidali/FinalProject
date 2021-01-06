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
    likes: [{
        type: ObjectId,
        ref: "User"
    }],
    photo: {
        type: String,
        default: "https://ibb.co/KwRC4qn"
    },
    postedBy: {
        type: ObjectId,
        ref: "User"
    }
})

mongoose.model("Post", postSchema)