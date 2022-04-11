// const { path } = require('path');
const fs = require('fs');
const readline = require('readline')
const path = require('path');

const { 
  existRoot, 
  verifyAbsolute, 
  transformAbsolute,
  verifyDirectory,
  getMdArchive,
 } = require('./verifyFunctions')

const getInput = require('readline').createInterface({
  input:process.stdin,
  output:process.stdout
})

getInput.question('Ingresa tu ruta: ', (ruta) => {

  if(existRoot(ruta)){
    verifyAbsolute(ruta) ? verifyDirectory(ruta) : transformAbsolute(ruta);
  }else{
    process.stdout.write('El archivo no existe') 
  }
  
getInput.close()
})


//  fs.readFile(routerinsert)


// const existRoot = (ruta) => fs.existsSync(ruta) === true ? "El archivo EXISTE!" : "El archivo NO EXISTE!";

// module.exports = {
//   verifyRoot
// };

// process.stdout.write('Holaaa')
