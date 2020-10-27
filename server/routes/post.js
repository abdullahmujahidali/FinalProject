const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Post = mongoose.model("Post")
const requireLogin =require("../middleware/requireLogin")

router.post("/createpost",requireLogin,(req,res)=>{
    const {subject,title,body}=req.body
    if(!title || !subject || !body){
        return res.status(422).json({error:"Please add all fields"})
    }
    req.user.password =undefined
    const post = new Post({
         subject,
         title,
         body,
         postedBy:req.user 
     })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router