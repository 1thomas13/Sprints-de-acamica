const express = require("express")
const router = express.Router()
const {Marca,Modelo} = require("../models/index")

router.get('/', async (req, res) => {
    const listado = await Marca.findAll()


    res.status(200).json({Marcas: listado})
})


router.get('/:idMarca', async(req,res) => {

    const idMarca = req.params.idMarca
    const busqueda = await Marca.findOne({
        where:{
            id:idMarca
        }
    })

    if(busqueda == null){
        res.status(400).json("el id no pertenece a ninguna marca")
    }

    res.status(200).json(busqueda)
})

router.post("/", async(req,res)=>{
    const body = req.body
    
    const newMarca = Marca.create({
        nombre:body.nombre,
    })

    res.status(201).json({msg:"Marca creada"})
})



module.exports = router