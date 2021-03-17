const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Post = mongoose.model("Post")
const User = mongoose.model("User")

const requireLogin =require("../middleware/requireLogin")

router.get("/allpost",requireLogin,(req,res)=>{
    Post.find()
    .populate("postedBy","_id name pic role organization")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post("/createpost",requireLogin,(req,res)=>{
    // console.log(req.body.subject)
    const {subject,title,body,photo}=req.body
    // console.log(subject,title,body,photo)
    if(!title || !subject || !body){
        return res.status(422).json({error:"Please add all fields"})
    }

    const post = new Post({
         subject,
         title,
         body,
         photo,
         postedBy:req.user 
     })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get("/getsubpost",requireLogin,(req,res)=>{
    Post.find({postedBy:{$in:req.user.following}}) 
    .populate("postedBy","_id name pic")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.get("/mypost",requireLogin,(req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate("PostedBy","_id name pic role organization intro country")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get("/post/:id", requireLogin,(req, res) => {
   Post.findOne({_id:req.params.id})
   .populate("comments.postedBy","_id name pic")
   .populate("postedBy","_id name pic role organization")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
});

router.get("/user/:id",requireLogin,(req,res)=>{
    User.findOne({_id:req.params.id})
    .select("-password")
    .then(user=>{
        Post.find({postedBy: req.params.id})
        .populate("postedBy","_id name")
        .exec((err,posts)=>{
            if(err){
                return res.status(422).json({error: err})
            }
            res.json({user,posts})
        })
    }).catch(err=>{
        return res.json(404).json({error:"User not found"})
    })
})



router.put("/like",requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id,
            ranking:req.user._id
        }
        
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        else{
            res.json(result)
        }
    })
})


router.put("/unlike",requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id,
            ranking:req.user._id
        }
     
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        else{
            res.json(result)
        }
    })
})

//restful api
router.put("/comment",requireLogin,(req,res)=>{
    const comment={
        text:req.body.text,
        // commentLikes,
        postedBy:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        // $push:{commentlikes:req.user._id},
        $push:{comments:comment}

    },{
        new:true
    })
    .populate("postedBy","_id name pic")
    .populate("comments.postedBy","_id name pic")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        else{
            res.json(result)
        }
    })
})

router.delete("/deletepost/:postId",requireLogin,(req,res)=>{
    Post.findOne({_id:req.params.postId})
    .populate("postedBy","_id")
    .exec((err,post)=>{
        if(err || !post){
            res.status(422).json({error:err})
        }
        if(post.postedBy._id.toString()=== req.user._id.toString()){
            post.remove()
            .then(result=>{
                res.json({message:"Sucessfully Deleted"});
            }).catch(err=>{
                console.log(err)
            })
        }
    })
})

router.delete("/deletecomment/:id/:comment_id", requireLogin, (req, res) => {
    const comment = { _id: req.params.comment_id };
    Post.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { comments: comment },
      },
      {
        new: true, 
      }
    )
      .populate("comments.postedBy", "_id name")
      .populate("postedBy", "_id name ")
      .exec((err, postComment) => {
        if (err || !postComment) {
          return res.status(422).json({ error: err });
        } else {
         
          const result = postComment;
          res.json(result);
        }
      });
  });

module.exports = router