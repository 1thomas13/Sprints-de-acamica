const fs=require("fs")
fs.writeFile("./texto.txt","texto",(err)=>{
    if(err)console.log("err")
    console.log("archivo guardado")
})
let fileData = fs.readFileSync('nombre archivo', 'utf8');
console.log(fileData)