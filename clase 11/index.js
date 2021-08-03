const express=require("express")
const app = express()

let students=["Thomas Barreto", "Juan Perez", "Ezequiel Gonzales"]

app.get("/students",(req,res)=>{
    res.send(students)
})

app.listen(3000,()=>{
    console.log("Escuchando puerto 3000")
})