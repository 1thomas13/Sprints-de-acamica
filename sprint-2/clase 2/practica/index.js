const express = require("express")
const app = express()
const axios = require("axios")
app.use(express.json());

const cities = [
    {name:"Havana"},
    {name:"Singapur"},
    {name:"Macao"},
    {name:"New York"},
    {name:"Buenos Aires"},
    {name:"Londres"},
    {name:"Berlin"},
    {name:"Paris"},
    {name:"Toronto"},
    {name:"Lima"}]

const newCities = []

const randomArrayCity = () => {

    random =  Math.floor(Math.random()*cities.length-1)
    newCities.push(cities[random])
}

const getCityTemp = async (city) => {

    const baseApi = 'http://api.openweathermap.org'

    const res = await axios.get(`${baseApi}/data/2.5/weather?q=${city}&appid=87bae2ffee43eec860796931e362d3ad&units=metric`)
    return res.data.main.temp;
}

async function climaController(req,res) {
   

    while(newCities.length < 3){
        randomArrayCity()
    }

    try {
        for await (let city of newCities) {
            city.temp = await getCityTemp(city.name);
        }
        res.status(200).json({Citys:newCities})

    } catch (err) {
        res.status(500).json({error:err})
    }
}

app.get("/citys",climaController)

app.listen("3000",()=>{console.log("Escuchando el puero 3000")})