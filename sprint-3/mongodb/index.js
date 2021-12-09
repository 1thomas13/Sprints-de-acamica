require("dotenv").config()
const mongo=require("./connectToMongoDb")
const express= require("express")
const app=express()

port=process.env.APP_PORT

app.get("/",(req,res)=>{
    const text= "Esta informacion es obtenida de la api"
    console.log(text)
    res.send(text)
})

app.get('/version', function (req, res) {
    res.send('API v1.0 (con soporte de MongoDB)')
})


app.post('/users', async (req, res) => {
    try {
        await mongo.addNewUser();
        res.sendStatus(200);
    } catch (err) {
        console.error(`Error: `, err.message);
    }
})

app.get('/users', async (req, res) => {
    try {
        let users = await mongo.getAllUsers();
        res.send(users);
    } catch (err) {
        console.error(`Error: `, err.message);
        res.status(500)
    }
})

app.listen(port, () => {
    console.log(`Aplicación escuchando en el puerto ${port}`);
})