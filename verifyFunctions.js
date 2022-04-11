const fs = require('fs');
const path = require('path');

//Opción valida
const existRoot = (ruta) => fs.existsSync(ruta);

//Verifica si es o no ruta absoluta
const verifyAbsolute = (ruta) => path.isAbsolute(ruta);

//Transforma ruta relativa a absoluta
const transformAbsolute = (ruta) => path.resolve(ruta); 

const verifyDirectory =  (ruta) => {
    const stats = fs.statSync(ruta);
    if(stats.isDirectory()){
        return 'El archivo es directorio'
    }else{
        getMdArchive(ruta)
    }
}

const getMdArchive = (ruta) => {
    if(path.extname(ruta) === '.md'){
        return 'El archivo es md'
    }else{
        return 'El archivo NO es md'
    }
}




// new Promise((resolve, reject) => {
//     fs.stat(ruta, (err, stats) => {
//       if (err && err.code === 'ENOENT') { // ENOENT significa que no es el archivo o dir correcto
//        return resolve(false);
//       } else if (err) {
//        return reject(err);
//       }
//       if (stats.isDirectory()) {
//        return resolve(true);
//       }
//       return resolve(false);
//      });
//   })

// const verifyDirectory = (ruta) => 

module.exports = {
    existRoot,
    verifyAbsolute,
    transformAbsolute,
    verifyDirectory,
    getMdArchive
}