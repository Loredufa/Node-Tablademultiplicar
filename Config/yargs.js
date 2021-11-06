
const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            demandOption: 'true',
            default: false,
            describe: 'Muestra la tabla en consola'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Limite de la tabla'
        })
        .check((argv,options) => {
            if(isNaN( argv.b )) {
                return 'La base debe ser un nuemero'
            }
            return true;
        })
        .argv;

    module.exports = argv;
