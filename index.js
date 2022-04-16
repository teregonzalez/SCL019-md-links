// const { path } = require('path');
const fs = require('fs');
const path = require('path');
const {argv} = require('yargs');
const url = require('url');
const https = require('https');
const chalk = require('chalk');


// const { fetch } = require('node-fetch');
// const {fetch} = require('fetch');
// const {fetchUrl} = fetch.fetchUrl;


// Guarda tercer argumento por consola
let ruta = process.argv[2];

// Lee el directorio
const readingDirectory = (ruta) => {
    return new Promise((resolve, reject) => {
        fs.readdir(ruta, (error, data) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(data.forEach((file) => {
                    if (path.extname(file) === '.md') {
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
        } else {
            console.log(newArray)
        }
    });
}

const validateUrls = (ruta) => {
    fs.readFile(ruta, "utf-8", (err, data) => { // entra al archivo
        const stringLinks = data.match(RegExr);
        let arrayStatus = new Array();
        if (err) {
            console.log(err);
        } else {
            stringLinks.forEach((urlData) => {
                getHttpStatus(urlData)
                .then((res) => {
                  if (res.status === 200) {
                  console.log(chalk.blue.bold('Status from'), chalk.bgMagentaBright(urlData), chalk.blue.bold('is'), res.status, chalk.green('OK ✓'));
                  } else if (res.status === 301) {
                    console.log(chalk.blue.bold('Status from'), chalk.bgMagentaBright(urlData), chalk.blue.bold('is'), res.status, chalk.green('OK ✓'));
                  } else if (res.status !== 200) {
                  console.log(chalk.blue.bold('Status from'), chalk.bgMagentaBright(urlData), chalk.blue.bold('is'), res.status, chalk.red('FAIL ✕'));
                  }
                })
                .catch((err) => {
                  console.log(err.code);
                });
        });
        }
    });
}

const getHttpStatus = (ruta) => {
    return new Promise((resolve) => {
        const options = {
            method: 'GET',
            host: url.parse(ruta).host,
            port: 443,
            path: url.parse(ruta).pathname
        };

        const req = https.request(options, res => {
            const linkstatus = {
                linkname: ruta,
                Code: res.statusCode,
                status: 
                    res.statusCode
            };

            // console.log('1req', linkstatus);
            // console.log(`statusCode: ${
            //     res.statusCode
            // }`)

            resolve(linkstatus);
        });

        req.on('error', (error) => { 
            const dataerr = {
                linkname: ruta,
                status: false
            };
            resolve(dataerr);
        });

        req.end()
    });
};

module.exports = {
    readingDirectory,
    returnFileUrls,
    validateUrls,
    getHttpStatus
}
