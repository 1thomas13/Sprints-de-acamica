
const mostrarPath = (req,res,next)=>{
    console.log(req.path)
    next()
}
module.exports = mostrarPath