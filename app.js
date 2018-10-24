//
const argv = require('./config/yargs').argv
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

console.log(`Base= ${argv.base}  Límite=${argv.limite}`)

switch (comando) {

    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear', argv.base, argv.limite);

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ', colors.green(`${archivo}`)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando NO reconocido');
}