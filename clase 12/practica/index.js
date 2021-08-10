const express= require("express")
const app = express()
const writers= require("./writers.js")    
const middlewares= require("./middleware.js")

app.use(express.json())

//autores
app.get("/autores",(req,res)=>{
    res.json(writers)
})

app.post("/autores",(req,res)=>{

    writers.push(req.body)
    res.status(201).json(`Autor ${req.body.nombre} ${req.body.apellido}, agregado!`)

})

//autores/:id

app.get("/autores/:id",middlewares.writerExist ,(req,res)=>{
    let writer=(writers.filter(writers=>writers.id==req.params.id))
    res.json(writer)
})

app.put("/autores/:id",middlewares.writerExist,(req,res)=>{

    let search = (writers) => writers.id == req.params.id

    const index = writers.findIndex(search)

    writers[index]=req.body
    res.json(writers[index])
})

app.delete("/autores/:id",middlewares.writerExist,(req,res)=>{
    let search = (writers) => writers.id == req.params.id
    const index = writers.findIndex(search)

    res.json(`Autor eliminado correctamente`)
    writers.splice(index,1)

})

//autores/:id/libros

app.get("/autores/:id/libros",middlewares.writerExist,(req,res)=>{
    let author = (writers.filter(writers => writers.id == req.params.id))

    res.json(author.libros)
})

app.listen(3000,()=>{
    console.log("Escuchando el Puerto 3000")
})