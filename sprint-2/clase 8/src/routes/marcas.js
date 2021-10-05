const express = require("express")
const router = express.Router()
const Marcas = require("../models/Marca")
const Modelos = require("../models/Modelo")

router.get('/', async(req,res) => {
    const listado = await Marcas.findAll()

    res.status(200).json(listado)
})

router.get('/:idMarca', async(req,res) => {

    const idMarca = req.params.idMarca

    const busqueda = await  Marcas.findOne

    res.status(200).json(idMarca)
})

module.exports = router