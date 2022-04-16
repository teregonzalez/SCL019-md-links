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

// Guarda tercer argumento por consola
let ruta = process.argv[2];

//Lee el directorio
const readingDirectory = (ruta) => {
  return new Promise((resolve, reject) => {
    fs.readdir(ruta, (error, data) => { 
      if (error) {
        return reject(error);
      } else {
      return resolve(data.forEach((file) => {
        if(path.extname(file) === '.md'){
          return console.log(file);
        }
      }));
    }
    })
  })
}

const RegExr = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n]+)(?=\))/g
const returnFileUrls = (file) => {
  fs.readFile(file, "utf-8", (err, file) => {
    console.log(file)
    const stringLinks = file.match(RegExr);
    const newArray = Array.from(stringLinks);
    if (err) {
      console.log(err);
    }
    else {
      console.log(newArray)
    }
  });
}

if (existRoot(ruta)) {
    verifyAbsolute(ruta) ? verifyDirectory(ruta) : transformAbsolute(ruta);
    if (verifyDirectory(ruta)) {
      readingDirectory(ruta)
    } else {
        if (getMdArchive(ruta)) {
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



