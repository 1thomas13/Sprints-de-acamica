const express = require("express")
const app = express()
const axios = require("axios")
app.use(express.json());

const cities = [
    {name:"Rio grande"},
    {name:"Singapur"},
    {name:"Macao"},
    {name:"New York"},
    {name:"Buenos Aires"},
    {name:"Londres"},
    {name:"Berlin"},
    {name:"Paris"},
    {name:"Toronto"},
    {name:"Lima"}]

const newCitys = []

const randomCity = (newCities,cities) => {

    random =  Math.ceil(Math.random()*cities.length-1)
    newCities.push(cities[random])
}

async function temps (newCities) {
    try {
            const getData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${newCities.name}&appid=87bae2ffee43eec860796931e362d3ad&units=metric`)
            const temp = getData.data.main.temp;
            console.log(temp);
        }
    catch (error) {
        throw Error(error);
    }
}

app.get("/citys",async(req,res) => {

    let ran = randomCity(cities, 3);
    const finalList = [];
    for (city of ran){
        try {
            const temp = await tempsCity(name);
            const item = { name, temp };
            console.log(`Datos recibidos:`, item);
            finalList.push(item)
        } catch (error) {
            res.status(500).json({ msg: "Error al obtener los datos del clima" });
            return
        }
    }


    res.status(200).json({Citys:newCitys})
})

app.listen("3000",()=>{console.log("Escuchando el puero 3000")})