const path = require('path');

const absolutePath = (ruta) => path.isAbsolute(ruta);

module.exports = {
    absolutePath
}