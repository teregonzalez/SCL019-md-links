// const { path } = require('path');
const fs = require('fs');
const path = require('path');
const {argv} = require('yargs');
const url = require('url');
const https = require('https');
const chalk = require('chalk');
const { onlyUnique } = require('./verifyFunctions');

// Guarda tercer argumento por consola
const RegExr = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n]+)(?=\))/g

// Lee el directorio
const readingDirectory = (ruta) => {
    return new Promise((resolve, reject) => {
        fs.readdir(ruta, (error, data) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(data.forEach((file) => {
                      console.log(file);
                }));
            }
        })
    })
}

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

const statsUrls = (ruta) => {
    fs.readFile(ruta, "utf-8", (err, data) => { 
      // console.log(data);// entra al archivo
        const stringLinks = data.match(RegExr);
        let arrayStatus = Array.from(stringLinks);
        console.log(chalk.magenta.bold('Total links: '), stringLinks.length);
        if (err) {
            console.log(err);
        } else {
            console.log(chalk.magenta.bold('Unique links: '), onlyUnique(arrayStatus));
        }
        let invalid = 0;
        let valid = 0;
        arrayStatus.forEach((urlData) => {
          getHttpStatus(urlData).then((res) => {
            if(res.status){
                valid+=1
            }else{
                invalid+=1
            }
          }).catch((err) => {
              console.log(err.code);
          });
      });
        // console.log(data);
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
                getHttpStatus(urlData).then((res) => {
                    if (res.status === 200) {
                        console.log(chalk.bgBlueBright(urlData), chalk.blue.bold('Status is'), chalk.green(res.status + ' OK ✓'));
                    } else if (res.status === 301) {
                        console.log(chalk.bgBlueBright(urlData), chalk.blue.bold('Status is'), chalk.green(res.status + ' OK ✓'));
                    } else if (res.status !== 200) {
                        console.log(chalk.bgBlueBright(urlData), chalk.blue.bold('Status is'), chalk.red(res.status + ' FAIL ✕'));
                    }

                }).catch((err) => {
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
                status: res.statusCode
            };

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
    getHttpStatus,
    statsUrls,
    // defaultOption
}
