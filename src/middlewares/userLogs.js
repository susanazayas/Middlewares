const fs = require("fs");
const path = require("path");


module.exports = (req,res,next) =>{
    fs.appendFileSync(path.join(__dirname, '..', 'logs', 'userLogs.txt'), `el usuario ingreso a la ruta: ${req.url} \n `)
    
    next()
}