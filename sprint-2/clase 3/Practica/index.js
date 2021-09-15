const express = require("express")
const mongoose = require("mongoose")
const config = require("./config")

const app = express()
app.use(express())


mongoose.connect(config.mongoDB)

app.get("/",(req,res)=>{
    res.json("funcionooooooooooooooooooooooooooooooooooooo")
})

app.listen(config.PORT,()=>{
    console.log(`Corriendo el puerto ${config.PORT}`)
})

