require('dotenv').config()
const express = require('express')
const connection = require('./config/db')
const cors = require('cors')
const userRoute = require('./routes/users.routre')
const postRoute = require('./routes/post.route')
const authentication = require('./miidlewares/authentication.middlewares')
const app = express()

// ! middleware 

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.send("Home page")
})
app.use("/users", userRoute)
app.use(authentication)
app.use("/notes", postRoute)



app.listen(process.env.port, async()=>{
    try{
        await connection
        console.log("connected to db")

    }
    catch(error){
        console.log("cannot connect to db")
        console.log(error)

    }
    console.log(`Running the server at port ${process.env.port}`)
})