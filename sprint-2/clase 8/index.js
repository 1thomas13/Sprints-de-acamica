const express = require("express")

const app = express()
app.use(express.json());

const marcas = require("./src/routes/marcas")
app.use("/marcas",marcas)

const modelos = require("./src/routes/modelos")
app.use("/modelos",modelos)

// const modelos = require("./src/routes/modelos")
// app.use("/modelos",modelos)

app.listen(3000,()=>{
    console.log("Corriendo el puerto 3000")
})