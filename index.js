// const { path } = require('path');
const fs = require('fs');

const verifyRoot = (ruta) => fs.existsSync(ruta) === true ? "El archivo EXISTE!" : "El archivo NO EXISTE!";

module.exports = {
  verifyRoot
};

