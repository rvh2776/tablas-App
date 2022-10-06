const colors = require('colors');
const fs = require('fs');

const crearArchivo = async (base = 5, listar, hasta = 10) => {

        try {
    
            let salida = '';
            let consola = '';
            
            for (let i = 1; i <= hasta; i ++) {
             
                salida += `${i} x ${base} = ${i * base}\n`;
                consola += `${i} ${'x'.blue} ${base} ${'='.blue} ${i * base}\n`;
            }
            
            if (listar){
                console.log('================='.blue);
                console.log('  Tabla del:'.blue, ` ${base} `.green);
                console.log('=================\n'.blue);
                console.log(consola)
            }
            
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
            return `tabla-${base}.txt`.blue;
            
        } catch (err) {
    
            throw err;
        }
}

module.exports = {
    crearArchivo
}