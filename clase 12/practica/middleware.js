const express= require("express")
const app = express()
const writers= require("./writers.js")  

const writerExist=(req,res,next)=>{
    let result = writers.filter(writers => writers.id == req.params.id)
    if(result.length != 0){
        next()
    }
    else res.json("El id no existe")
}

module.exports={writerExist}