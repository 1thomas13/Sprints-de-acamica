const express = require('express')
const app = express()
const object = require("./object.js")
app.use (express.json())

let phones = object.phones

app.get('/', (req, res) => {
    res.json(phones)
})

const half = (phones.length/2)
const halfPhones = [];

app.get('/half', (req, res) => {
    for(let i = 0;i<half ;i++){
        halfPhones.push(phones[i])
    }
    res.json(halfPhones)
})

app.get("/cheaper",(req,res)=>{

   phones.sort((a,b)=> a.precio - b.precio)

    let cheaper=phones[0]

    res.json(cheaper)
})

app.get("/expensive",(req,res)=>{

    phones.sort((a,b)=> a.precio - b.precio)
 
     let expensive=phones[phones.length-1]
 
     res.json(expensive)
 })

const gamaBaja = phones.filter(phones=>phones.gama==="baja")
const gamaMedia = phones.filter(phones=>phones.gama==="media")
const gamaAlta = phones.filter(phones=>phones.gama==="alta")
const gamas = [gamaAlta,gamaMedia,gamaBaja]

app.get("/gamas",(req,res)=>{
    res.json(gamas)
})

app.get("/gamas/baja",(req,res)=>{
    res.json(gamaBaja)
})

app.get("/gamas/media",(req,res)=>{
    res.json(gamaMedia)
})

app.get("/gamas/alta",(req,res)=>{
    res.json(gamaAlta)
})


app.listen(3000, () => {
    console.log("puerto 3000")
})