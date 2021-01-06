const express = require("express");
const app = express();


const PORT = 5000;

const cors = require("cors")

const mongoose = require("mongoose")

const { MONGOURI } = require("./keys")

//we are not exporting require that is why I am not creating an object here
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

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
app.use(express.json())
//register routes

app.use(require("./routes/auth"))
app.use(require("./routes/post"))



app.listen(PORT, () => {
    console.log("Server is up and running ", PORT);
})
