const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
let comand = argv._[0];

switch (comand) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListar();
        for (let tarea of listado) {
            console.log("========POR HACER ========".green);
            console.log(`${tarea.descripcion}`.red);
            console.log(`${tarea.completado}`.grey);
            console.log("==========================".green);
        }
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log("Comando no encontrado");
        break;
}