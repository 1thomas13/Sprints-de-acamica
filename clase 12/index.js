const express = require("express")
const app = express()
const curso = require("./array.js")
const mostrarPath = require("./middleware.js")

app.use(mostrarPath)

app.get("/cursos",(req,res)=>{
    res.json(curso)
})  



app.listen(3000,()=>{
    console.log("Escuchando el puerto 3000")
})