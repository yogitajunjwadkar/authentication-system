const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/authmongoose")
    .then(() => {
        console.log("connect to mongodb")
    })
    .catch((e) => {
        console.log("couldn't connect to mongodb")
    })

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    mobileno: {
        type: Number,
        require: true,
        unique: true
    },
    password: {
        type: String,
        unique: true
    }
})
const User = mongoose.model("User", userSchema)

app.post("/signup", async (req, resp) => {
    try {
        const { name, email, mobileno, password } = req.body
        if (!name || !email || !mobileno || !password) {
            return resp.status(400).json({ message: "all field are required" })
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            resp.status(400).json({ message: "user already exists" })
        }
        const newuser = User.create({
            name,
            email,
            mobileno,
            password
        })
        resp.status(201).json({ message: "signup successful" })

    }
    catch (e) {
        console.log(e)
        resp.status(500).json({ message: "server error" })
    }
})

app.post("/login", async (req, resp) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            resp.status(400).json({ message: "email and password are required" })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return resp.status(404).json({ message: "user not found" })
        }
        if (user.password != password) {
            resp.status(401).json({ message: "incorrect email or password" })
        }
        resp.status(200).json({ message: "login successful" })
    }
    catch (error) {
        console.log(error)
        resp.status(500).json({ message: "server error" })
    }

})

app.listen(8500)











