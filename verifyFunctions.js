const fs = require('fs');
const path = require('path');

const existRoot = (ruta) => fs.existsSync(ruta);

const verifyAbsolute = (ruta) => path.isAbsolute(ruta);

const transformAbsolute = (ruta) => path.resolve(ruta); 

const verifyDirectory = (ruta) => 

module.exports = {
    existRoot,
    verifyAbsolute,
    transformAbsolute
}