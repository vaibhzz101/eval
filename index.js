require('dotenv').config()
const express = require('express')
const connection = require('./config/db')
const cors = require('cors')
const  {userRoute} = require('./routes/user.routes')
const {blogsRoute} = require('./routes/blog.route')
const authentication = require('./miidlewares/authentication.middlewares')
const app = express()

// ! middleware 

app.use(express.json())

app.use(cors())
// const authorise = (permittedRole) =>{
// return (req, res, next) => {
//     const user_role = req.user.role
//     if(user_role===permittedRole)

// }
// } 
app.get("/", (req,res)=>{
    res.send("Home page")
})
app.use("/users", userRoute)
app.use(authentication)

app.use("/blogs", blogsRoute)

// app.get("/reports",authorise("customer"),(req,res)=>{
//     const role = req.user.roll
//     if(role === "customer"){
        
//         res.send("reports..")
//     }
 
// })
// app.get("/xyz",(req,res)=>{
//     const role = req.user.roll
//     if(role === "customer"){
        
//         res.send("reports..")
//     }
 
// })



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