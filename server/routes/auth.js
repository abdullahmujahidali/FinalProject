const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")

router.post("/signup", (req, res) => {
    const { name, email, password } = req.body
    if (!email || !password || !name) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User Already Exists" })
            }
            bcrypt.hash(password, 11)//default is 10
                .then(hashedpassword => {
                    const user = new User({
                        email,
                        password:hashedpassword,
                        name
                    })
                    user.save()
                        .then(user => {
                            res.json({ message: "User Saved Sucessfully" })
                        })
                        .catch(error => {
                            console.log(error)
                        })
                })

        }).catch(error => {
            console.log(error)
        })
})

module.exports = router