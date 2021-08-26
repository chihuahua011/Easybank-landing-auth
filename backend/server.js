const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./model/user");
const PORT = 8000;
const app = express();
require("dotenv").config();

mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    () => console.log("Mongoose is connected")
);

//MIDDLEWARES
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

//ROUTES
app.post("/api/register", async (req, res) => {
    const { name, email, password } = req.body;
    const splitPass = password.split("");
    if (!(name && email && password)) {
        res.status(400).json({ msg: "Fill out all inputs" });
        return;
    }
    if (req.body === undefined) {
        res.status(500).json({ msg: "Data could not be processed" });
        return;
    }
    if (splitPass.length <= 5) {
        return res.status(400).json({ msg: "Password too short" });
    }
    User.findOne({ email: email }, async (error, doc) => {
        if (error) throw error;
        if (doc) res.status(400).json({ msg: "Already registered email" });
        if (!doc) {
            const hashedPass = await bcrypt.hash(password, 10);
            const newUser = new User({
                name: name,
                email: email,
                password: hashedPass,
            });
            await newUser.save();
            res.status(201).json({ msg: "User Successfully Created" });
        }
    });
});

app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    if (!(email && password)) {
        return res.status(400).json({ msg: "Missing input" });
    } else {
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { id: user._id, email: user.email, name: user.name },
                process.env.TOKEN_KEY
            );

            res.status(200).json({ msg: "login success", token: token });
        } else {
            res.status(400).json({ msg: "invalid user" });
        }
    }
});

app.post("/api/user", (req, res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token, process.env.TOKEN_KEY);

        res.status(200).json({ msg: "Valid token", user: user });
    } catch (err) {
        res.status(401).json({ msg: "invalid token" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
