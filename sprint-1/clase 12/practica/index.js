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

    let search = writers => writers.id == req.params.id

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

    const index = writers.findIndex(writers => writers.id == req.params.id)

    if(writers[index].libros.length > 0){
        res.json(writers[index].libros)
    }

    else res.json("El autor no tiene libros")
  
})

app.post("/autores/:id/libros", middlewares.writerExist,(req,res)=>{

    const index = writers.findIndex(writers => writers.id == req.params.id)

    writers[index].libros.push(req.body)

    res.json("Libro agregado")
})


app.get("/autores/:id/libros/:idlibro", middlewares.writerExist,(req,res) => {
    
    const writer = writers.filter(writers => writers.id == req.params.id)

    res.json(writer)
})

app.listen(3000,()=>{
    console.log("Escuchando el puerto 3000")
})


