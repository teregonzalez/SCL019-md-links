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

const readingDirectory = (ruta) => {
  return new Promise((resolve, reject) => {
    fs.readdir(ruta, (error, data) => { 
      if (error) {
        return reject(error);
      } else {
      return resolve(data)
      }
    })
  })
}

const checkDirectory = (ruta) => {
  readingDirectory(ruta)
    .then(data => {
      data.forEach((file) => {
        let extFile = path.extname(file);
        if (extFile === '.md') {
          returnFileUrls(file);
        }
      })
    })
    .catch(error => console.log(error));
}

const RegExr = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n]+)(?=\))/g
const returnFileUrls = (file) => {
  fs.readFile(file, "utf-8", (err, file) => {
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
        checkDirectory(ruta)
    } else {
        if (getMdArchive(ruta)) {
          returnFileUrls(ruta);
        } else {
            console.log('El archivo NO es md')
        }
    }
} else {
    console.log('El archivo no existe')
}



