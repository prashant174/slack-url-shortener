const express=require("express")
const { router } = require("./routes/urlRoute")
const { connection } = require("./config/db")
const { URL } = require("./models/urlModel")
const app=express()
require("dotenv").config()

app.get("/",(req,res)=>{
    res.send("Welcome to url shortner app")
})
app.use(express.json())
app.use("/url",router)



const port=process.env.PORT||9000
app.listen(port,async()=>{
    try{
         await connection
         console.log("connected to mongodb")
    }catch(err){
        console.log(err)
    }
    console.log(`server running on port ${port}`)
})
