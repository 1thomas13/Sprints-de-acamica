const express = require("express")
const app = express()
const jwt = require('jsonwebtoken')



app.use(express.json())

app.post("/jwt", (req,res) => {
    
    const {user,pass} = req.body

    const token = jwt.sign({
        user
    }, pass)

    res.json({token})
})

const autenticar = (req,res,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const verifyToken = jwt.verify(token,"password")

        if(verifyToken) {
            req.user = verifyToken;
            return next()
        }
    } catch (error) {
        res.json({error:error})
    }
}

app.post("/secure", autenticar, (req,res)=>{
    res.json(`autenticado. Bienvenido ${req.body.user}`)
})


app.listen(3000,() => {
    console.log("Escuchando el puerto 3000")
})