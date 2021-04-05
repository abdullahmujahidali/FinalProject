const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types

const commentSchema= new mongoose.Schema({ 
    commentBody: {
        type: String,
        required: true
    },
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    commentLikes: [{
        type: ObjectId,
        ref: "User"
    }],
    postDate:{
        type:String
    }  

})
mongoose.model("Comment", commentSchema)