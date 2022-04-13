const fs = require('fs');
const path = require('path');

// Opción valida
const existRoot = (ruta) => fs.existsSync(ruta);

// Verifica si es o no ruta absoluta
const verifyAbsolute = (ruta) => path.isAbsolute(ruta);

// Transforma ruta relativa a absoluta
const transformAbsolute = (ruta) => path.resolve(ruta);

// Verifica si es o no directorio
const verifyDirectory = (ruta) => fs.statSync(ruta).isDirectory();

// const verifyDirectory =  (ruta) => {
//     const stats = fs.statSync(ruta);
//     if(stats.isDirectory()){
//         checkDirectory(ruta)
//     }else{
//         getMdArchive(ruta)
//     }
// }

const getMdArchive = (ruta) => path.extname(ruta) === '.md';

// const returnFileUrls = (file) => {
//     fs.readFile(file, "utf-8", (err, file) => {
//       const stringLinks = file.match(RegEx);
//       const newArray = Array.from(stringLinks);
//       if (err) {
//         console.log(err);
//       }
//       else {
//         console.log(newArray)
//       }
//     });
//   }

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
// })

// const verifyDirectory = (ruta) =>

module.exports = {
    existRoot,
    verifyAbsolute,
    transformAbsolute,
    verifyDirectory,
    getMdArchive
}
