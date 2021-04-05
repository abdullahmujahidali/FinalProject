const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;


const mongoose = require("mongoose")

const { MONGOURI } = require("./config/keys")


mongoose.connect(MONGOURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify:false
})

mongoose.connection.on("connected", () => {
    console.log("Mongo Database connected")
})
mongoose.connection.on("error", (err) => {
    console.log("Error connecitng the database", err)
})


require("./models/user")
require("./models/post")
require("./models/comment")


app.use(express.json())
app.use(require("./routes/auth"))
app.use(require("./routes/post"))
app.use(require("./routes/user"))


if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}




app.listen(PORT, () => {
    console.log("Server is up and running ", PORT);
})
