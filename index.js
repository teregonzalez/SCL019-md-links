// const { path } = require('path');
const fs = require('fs');
const path = require('path');
const {argv} = require('yargs');

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

const returnFileUrls = (file) => {
  const RegExr = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n]+)(?=\))/g
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

module.exports = {
  readingDirectory,
  returnFileUrls
}
