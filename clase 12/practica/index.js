const express= require("express")
const app = express()

const arrayUsuarios=[
    {
        id: 1 ,
        nombre: "jorge",
        apellido:"borges",
        fechaNacimiento: "24/3/2003",
        libros:[
            {
                id: 1,
                titulo: "hola",
                descripcion:"se trata...",
                anioPublicaion:1992
            },
            {
                id: 2,
                titulo: "hola",
                descripcion:"se trata...",
                anioPublicaion:1992
            }
            
        ]
    },
    {
        id: 2 ,
        nombre: "jorge",
        apellido:"borges",
        fechaNacimiento: "24/3/2003",
        libros:[
            {
                id: 1,
                titulo: "hola",
                descripcion:"se trata...",
                anioPublicaion:1992
            },
            {
                id: 2,
                titulo: "hola",
                descripcion:"se trata...",
                anioPublicaion:1992
            }
            
        ]
    }
]
    

app.get("/",(req,res)=>{
    res.json(arrayUsuarios)
})

app.listen(3000,()=>{
    console.log("Puerto 3000")
})