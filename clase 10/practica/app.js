const chalk = require("chalk")
const coolImages = require("cool-images")
const fs= require("fs")

const images = coolImages.many(600,800,10)

images.forEach((url,index)=>{
    fs.appendFile("./urls.txt",`\nurl ${index+1} ${url}`,(err)=>{
        if(err) console.log(chalk.red("ERROR"))
        console.log(chalk.greenBright(" la url "+url+" se registro con exito"))
    })
})
console.log(`Se registraron ${images.length} urls `)



