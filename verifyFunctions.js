const fs = require('fs');
const path = require('path');

const existRoot = (ruta) => fs.existsSync(ruta);

const verifyAbsolute = (ruta) => path.isAbsolute(ruta);

const transformAbsolute = (ruta) => path.resolve(ruta);

const verifyDirectory = (ruta) => fs.statSync(ruta).isDirectory();

const getMdArchive = (ruta) => path.extname(ruta) === '.md';

const onlyUnique = (links) => links.filter((v, i, a) => a.indexOf(v) === i).length;

module.exports = {
    existRoot,
    verifyAbsolute,
    transformAbsolute,
    verifyDirectory,
    getMdArchive,
    onlyUnique
}
