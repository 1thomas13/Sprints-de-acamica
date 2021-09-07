const express = require("express")
const app = express()
const axios = require("axios")

const citys = [
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

app.get("/cuidades",(req,res)=>{

    while(newCitys.length < 3){
        random =  Math.ceil(Math.random()*citys.length-1)
        newCitys.push(citys[random])
    }

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${newCitys[0].name}&appid=e7ee0d2a1c3ca427bcd61f675ea5ce0c&units=metric`)
    .then((res) => {
        return res.data;
    })
    .then((data) => {
        return data.main;
    })
    .then((temp) => {
        newCitys[0].temperature = temp.temp;
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${newCitys[1].name}&appid=e7ee0d2a1c3ca427bcd61f675ea5ce0c&units=metric`)
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                return data.main;
            })
            .then((temp) => {
                newCitys[1].temperature = temp.temp;
                axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${newCitys[2].name}&appid=e7ee0d2a1c3ca427bcd61f675ea5ce0c&units=metric`)
                    .then((res) => {
                        return res.data;
                    })
                    .then((data) => {
                        return data.main;
                    })
                    .then((temp) => {
                        newCitys[2].temperature = temp.temp;
                        res.status(200).json({"response": newCitys});
                    })
            })
    })
    .catch((error) => {
        console.log(error);
        reject("ERROR");
    })
})


        
        




app.listen(3000,()=>{console.log("Escuchando el puerto 3000")})