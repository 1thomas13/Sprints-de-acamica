const mongoose = require("mongoose")
const express = require("express")
const app = express()
app.use(express())
mongoose.connect("mongodb://localhost:27017/bd")


schema = {nombre: String, apellido: String, edad: Number}
const usuarios = mongoose.model("usuarios", schema);

const yo = {nombre: "Juan",
            apellido: "Perez",
            edad: 24};

    let nuevo_usuario = new usuarios(yo)
    nuevo_usuario.save();

usuarios.find().then(function (resultados){
    console.log(resultados);
});

usuarios.find({nombre:"Juan"}).then(function (resultados){
    console.log(resultados);
    });

app.listen(3000,()=>{
    console.log("Puerto 3000 corriendo")
})