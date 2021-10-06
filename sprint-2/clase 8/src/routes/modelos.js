const express = require("express")
const router = express.Router()
const {Marca,Modelo} = require("../models/index")

router.get("/", async(req,res)=>{
    
    const listado = await Modelo.findAll()

    res.json(listado)
})

router.get("/buscar/:idModelo", async(req,res)=>{
    
    const idModelo = req.params.idModelo
    const busqueda = await Modelo.findOne({
        where:{
            id:idModelo
        }
    })
    if(busqueda == null){
        res.status(400).json("el id no pertenece a ningun modelo")
    }
    res.status(200).json(busqueda)
})

router.post("/", (req,res)=>{
    const datos = req.body
    
    const newModelo = Modelo.create({
        nombre: datos.nombre,
        pantalla: datos.pantalla,
        smart: datos.smart,
        precio: datos.precio,
        marca_Id: datos.marcaId
    })

    res.status(201).json({msg:"modelo creado"})
})

router.get('/ord', async (req, res) => {
    const ordenados = await Modelo.findAll({
        order: [
            [
                "precio", 'ASC'
            ]
        ]
    })
    res.status(200).json({Modelos: ordenados})
}) 


module.exports = router