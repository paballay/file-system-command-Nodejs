const opt = {
    base: {
        demand: true, // obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Imprime en consola la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv,
}