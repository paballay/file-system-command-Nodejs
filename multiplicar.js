const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        for(let i = 1; i<=limite; i++){
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-limite-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-limite-${ limite }.txt`)
        });
    })
}


let listarTabla = (base, limite) => {
    for ( let i = 1; i <= limite; i++ ){
        console.log(`${ base } * ${ i } = ${ base * i }\n`.green);
    }
}

module.exports = {
    crearArchivo,
    listarTabla,
}