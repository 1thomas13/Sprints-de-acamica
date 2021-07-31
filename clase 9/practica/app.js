const fs=require('fs')
const calculator=require('./calculator')

let a=3
let b=3


fs.writeFile("./datos.txt",`${a}+${b}=${calculator.add(a,b)}\n${a}-${b}=${calculator.substract(a,b)}\n${a}*${b}=${calculator.multiply(a,b)}\n${a}/${b}=${calculator.divide(a,b)}`,(err)=>{
    if(err) console.log("err")
    else console.log ("Archivo creado")
})