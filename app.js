const colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar-async');
const  argv  = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.blue))
    .catch(err => console.log(err));