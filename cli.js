// const { path } = require('path');
const fs = require('fs');
const path = require('path');
const {argv} = require('yargs');

const {
    existRoot,
    verifyAbsolute,
    transformAbsolute,
    verifyDirectory,
    getMdArchive
} = require('./verifyFunctions');

const {
    readingDirectory
} = require('./index');

// Guarda tercer argumento por consola
const ruta = process.argv[2];

if (existRoot(ruta)) {
    verifyAbsolute(ruta) ? verifyDirectory(ruta) : transformAbsolute(ruta);
    if (verifyDirectory(ruta)) {
      readingDirectory(ruta)
    } else {
        if (getMdArchive(ruta)) {
            //Comprueba opcion ingresada
          if (argv.validate && argv.stats) {
            console.log('opcion validate y stats');
          } else if (argv.validate) {
            console.log('opcion validate');
          } else if (argv.stats) {
            console.log('opcion stats');
          } 
          
        } else {
            console.log('El archivo NO es md')
        }
    }
} else {
    console.log('El archivo no existe')
}