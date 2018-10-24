const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('=========================='.green);
    console.log(`==== tabla de ${base} ====`.green);
    console.log('=========================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`i=${i} ${base} x ${i} = ${ base * i}`.yellow);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor BASE no es un número');
            return;
        }
        if (!Number(limite)) {
            reject('El valor LIMITE no es un número');
            return
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${ base * i}\n`
        }
        fs.writeFile(`./tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${ base }-al-${ limite }.txt`);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}