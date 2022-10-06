const colors = require('colors');


const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es el numero "multiplicador" de la tabla'.green
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla por consola'.green
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Hasta que numero llega la tabla'.green
    })
    .check((argv, option) => {
        if(isNaN(argv.base)){
            throw 'La base debe ser un número'.red;
        }
        return true;
    })
    .argv;

module.exports = argv;