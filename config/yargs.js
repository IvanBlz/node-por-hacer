const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea por hacer"
};

const completado = {
    default: true,
    alias: 'com',
    desc: "Marca como completado o pendiente la tarea"
};

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado

    })
    .command('borrar', 'borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}