const express= require("express")
const cors=require("cors")
require("dotenv").config()
require('./DB/connection')
const router=require('./Router/router')


const recipeServer=express()

recipeServer.use(express.json())
recipeServer.use(cors())
recipeServer.use(router)


const PORT=3000 || process.env.PORT

recipeServer.listen(PORT,()=>{
    console.log(`Server started listening at port: ${PORT}`);
})
recipeServer.get("/",(req,res)=>{
    res.send('<h1>Recipe Server Onduty</h1>')
})

