// const { path } = require('path');
const fs = require('fs');
const readline = require('readline')
const path = require('path');

const getInput = require('readline').createInterface({
  input:process.stdin,
  output:process.stdout
})

getInput.question('Ingresa tu ruta:', (ruta) => {
  const absolutePath = (ruta) => path.isAbsolute(ruta);
  // === true ? "Es absoluta" : "No es absoluta";
  console.log(absolutePath(ruta));
getInput.close()
})


//  fs.readFile(routerinsert)


// const verifyRoot = (ruta) => fs.existsSync(ruta) === true ? "El archivo EXISTE!" : "El archivo NO EXISTE!";

// module.exports = {
//   verifyRoot
// };

// process.stdout.write('Holaaa')
