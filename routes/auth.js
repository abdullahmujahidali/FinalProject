const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")
const jwt=require("jsonwebtoken")
const {JWT_SECRET} = require("../config/keys")
const requireLogin = require("../middleware/requireLogin")

router.post("/signup", (req, res) => {
    const { name, email, password,country,organization,role,intro } = req.body
    if (!email || !password || !name) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User Already Exists" })
            }
            bcrypt.hash(password, 12)
                .then(hashedpassword => {
                    const user = new User({
                        email,
                        password:hashedpassword,
                        name,
                        country,
                        organization,
                        role,
                        intro
                    })
                    user.save()
                        .then(user => {
                            console.log(user)
                            res.json({ message: 'User Joined BigBrains' })
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })

        }).catch(err => {
            console.log(err)
        })
})

router.post("/signin",(req,res)=>{
    const {email,password}=req.body
    if(!email){
        return res.status(422).json({error:"Please provide the email"})
    }
    else if(!password){
        return res.status(422).json({error:"Please provide the password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid Email or Password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                //  res.json({message:"Sucessfully Logged In!"})
                const token= jwt.sign({_id:savedUser._id},JWT_SECRET)
                const {_id,name,email,following,follower,pic,country,organization,role,intro}= savedUser
                res.json({token,user:{_id,name,email,following,follower,pic,country,organization,role,intro}})
            }
            else{
                return res.status(422).json({error:"Invalid Email or Password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

module.exports = router