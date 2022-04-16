const fs = require('fs');
const path = require('path');

// Opción valida
const existRoot = (ruta) => fs.existsSync(ruta);

const verifyAbsolute = (ruta) => path.isAbsolute(ruta);

const transformAbsolute = (ruta) => path.resolve(ruta);

const verifyDirectory = (ruta) => fs.statSync(ruta).isDirectory();

const getMdArchive = (ruta) => path.extname(ruta) === '.md';

module.exports = {
    existRoot,
    verifyAbsolute,
    transformAbsolute,
    verifyDirectory,
    getMdArchive
}
