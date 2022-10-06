const fs = require('fs');

const crearArchivo = (base = 5) => {

    return new Promise((resolve, reject) => {

        console.log('=================');
        console.log('  Tabla del:', base );
        console.log('=================\n');
    
        let salida = '';
    
        for (let i = 1; i <= 10; i ++) {
            salida += `${i} x ${base} = ${i * base}\n`;
        }

        console.log(salida);

        (salida) ? resolve(`tabla-${base}.txt`) : reject(`No se pudo crear el archivo: tabla-${base}.txt`);
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    });
}

module.exports = {
    crearArchivo
}