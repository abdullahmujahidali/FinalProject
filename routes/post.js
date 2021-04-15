const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Post = mongoose.model("Post")
const User = mongoose.model("User")
var dateFormat = require("dateformat");
var now = new Date();

const requireLogin = require("../middleware/requireLogin")

router.get("/allpost", requireLogin, (req, res) => {
    Post.find()
        .populate("postedBy", "_id name pic role organization")
        .sort("-createdAt")
        .then(posts => {
            res.json({ posts })
        })
        .catch(err => {
            console.log(err)
        })
})

router.post("/createpost", requireLogin, (req, res) => {
    const { subject, title, body, photo } = req.body
    if (!title || !subject || !body) {
        return res.status(422).json({ error: "Please add all fields" })
    }
    dat = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    const post = new Post({
        subject,
        title,
        postDate: dat,
        body,
        photo,
        postedBy: req.user
    })
    post.save().then(result => {
        console.log(post)
        res.json({ post: result })
    })
        .catch(err => {
            console.log(err)
        })
})

router.get("/getsubpost", requireLogin, (req, res) => {
    Post.find({ postedBy: { $in: req.user.following } })
        .populate("postedBy", "_id name pic")
        .sort("-createdAt")
        .then(posts => {
            res.json({ posts })
        })
        .catch(err => {
            console.log(err)
        })
})

router.get("/mypost", requireLogin, (req, res) => {
    Post.find({ postedBy: req.user._id })
        .populate("PostedBy", "_id name pic role organization intro country")
        .then(mypost => {
            res.json({ mypost })
        })
        .catch(err => {
            console.log(err)
        })
})

router.get("/post/:id", requireLogin, (req, res) => {
    Post.findOne({ _id: req.params.id })
        .populate("comments.postedBy", "_id name pic")
        .populate("postedBy", "_id name pic role organization")
        .then(posts => {
            res.json({ posts })
        })
        .catch(err => {
            console.log(err)
        })
});

router.get("/posts/:subject", requireLogin, (req, res) => {
    Post.find({ subject: req.user.subject })
        .populate("PostedBy", "_id name pic role organization intro country")
        .then(mypost => {
            console.log(mypost)
            res.json({ mypost })
        })
        .catch(err => {
            console.log(err)
        })
})


router.get("/user/:id", requireLogin, (req, res) => {
    User.findOne({ _id: req.params.id })
        .select("-password")
        .then(user => {
            Post.find({ postedBy: req.params.id })
                .populate("postedBy", "_id name")
                .exec((err, posts) => {
                    if (err) {
                        return res.status(422).json({ error: err })
                    }
                    res.json({ user, posts })
                })
        }).catch(err => {
            return res.json(404).json({ error: "User not found" })
        })
})
router.put("/like", requireLogin, (req, res) => {
    Post.findByIdAndUpdate(req.body.postId, {
        $push: {
            likes: req.user._id,
            ranking: req.user._id
        }

    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(422).json({ error: err })
        }
        else {
            res.json(result)
        }
    })
})

router.put("/unlike", requireLogin, (req, res) => {
    Post.findByIdAndUpdate(req.body.postId, {
        $pull: {
            likes: req.user._id,
            ranking: req.user._id
        }

    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(422).json({ error: err })
        }
        else {
            res.json(result)
        }
    })
})

router.put("/comment", requireLogin, (req, res) => {
    const comment = {
        text: req.body.text,
        // commentLikes,
        postedBy: req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId, {
        // $push:{commentlikes:req.user._id},
        $push: { comments: comment }

    }, {
        new: true
    })
        .populate("postedBy", "_id name pic")
        .populate("comments.postedBy", "_id name pic")
        .exec((err, result) => {
            if (err) {
                return res.status(422).json({ error: err })
            }
            else {
                res.json(result)
            }
        })
})
router.delete("/deletepost/:postId", requireLogin, (req, res) => {
    Post.findOne({ _id: req.params.postId })
        .populate("postedBy", "_id")
        .exec((err, post) => {
            if (err || !post) {
                res.status(422).json({ error: err })
            }
            if (post.postedBy._id.toString() === req.user._id.toString()) {
                post.remove()
                    .then(result => {
                        res.json({ message: "Sucessfully Deleted" });
                    }).catch(err => {
                        console.log(err)
                    })
            }
        })
})
router.post("/search-post", (req, res) => {
    let userPattern = new RegExp("^" + req.body.query)
    Post.find({ title: { $regex: userPattern } })
        .select("_id title body subject")
        .then(post => {
            console.log({ post })
            res.json({ post })
        })
        .catch(err => {
            console.log(err)
        })
})
router.post("/search-subject", (req, res) => {
    let userPattern = new RegExp("^" + req.body.query)
    Post.find({subject: { $regex: userPattern } })
        .select("_id title body subject")
        .then(post => {
            console.log({ post })
            res.json({ post })
        })
        .catch(err => {
            console.log(err)
        })
})
router.delete("/deletecomment/:id/:comment_id", requireLogin, (req, res) => {
    const comment = { _id: req.params.comment_id };
    console.log(comment)
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
router.put("/likecomment/:id/:comment_id", requireLogin, (req, res) => {
    const comment = { _id: req.params.comment_id };
    console.log(req.params.comment_id)
    console.log("\n")
    console.log(req.params.id)
    Post.findOneAndUpdate(req.params.id, {
        $push: {
            "comments.commentLikes": req.user._id
        }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(422).json({ error: err })
        }
        else {
            console.log("qweqwe " + result)
            res.json(result)
        }
    })
})

router.put("/unlikecomment/:id/:comment_id", requireLogin, (req, res) => {
    const comment = { _id: req.params.comment_id };
    Post.findByIdAndUpdate(req.params.id, {
        $pull: {
            "comments.commentLikes": req.user._id
        }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(422).json({ error: err })
        }
        else {
            console.log(result)
            res.json(result)
        }
    })
})

module.exports = router