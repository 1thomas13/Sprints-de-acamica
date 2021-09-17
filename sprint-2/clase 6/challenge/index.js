const Sequelize = require("sequelize")
const express = require("express")
const {config} = require("./config")
const {host,port,user,pass,database} = config.db

const sequelize = new Sequelize (`mariadb://${user}:${pass}@${host}:${port}/${database}`)

const app = express()
app.use(express.json())

sequelize.authenticate()
    .then(() => {
        console.log('Connection established')
    })

app.get("/bandas", async(req,res)=> {

    try {
        const mostrarBandas = await sequelize.query("SELECT * FROM bandasmusicales;")
        res.json({mostrarBandas})
    } catch (err) {
        res.json({err})
    }
})

app.listen("3000", ()=>{
    console.log("Corriendo el puerto 3000")
})
