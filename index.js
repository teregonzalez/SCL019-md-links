// const { path } = require('path');
const fs = require('fs');
const readline = require('readline')

const getInput = require('readline').createInterface({   // crea input para que el cliente ingrese la ruta
  input:process.stdin,
  output:process.stdout
})

getInput.question('Ingresa tu ruta:', ruta = () => {
  let routerinsert = `${ruta}`;
})


// const verifyRoot = (ruta) => fs.existsSync(ruta) === true ? "El archivo EXISTE!" : "El archivo NO EXISTE!";

// module.exports = {
//   verifyRoot
// };

// process.stdout.write('Holaaa')
