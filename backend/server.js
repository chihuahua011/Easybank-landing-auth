const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./model/user");
const PORT = 8000;
const app = express();

mongoose.connect(
    "mongodb+srv://marci:Mo6459747@pcluster.qimml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    () => console.log("Mongoose is connected")
)

//MIDDLEWARES
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend/build")))

app.use(cors({
    origin: "http://localhost:3000"
}));

//ROUTES
app.post("/api/register", async (req, res) => {
    const { name, email, password } = req.body;
    if(!(name && email && password)){
        res.status(409).json({msg: "Fill out all inputs"});
        return;
    }
    if(req.body === undefined) {
        res.status(500).json({msg: "Data could not be processed"});
        return;
    }
    User.findOne({ email: email }, async (error, doc) => {
        if(error) throw error;
        if(doc) res.status(400).json({ msg: "Already registered email" });
        if(!doc) {
            const hashedPass = await bcrypt.hash(password, 10);
            const newUser = new User({
                name: name,
                email: email,
                password: hashedPass
            })
            await newUser.save();
            res.status(201).json({ msg: "User Successfully Created" })
        };
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});