const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completar = {
    alias: 'c',
    default: true,
    desc: 'Marcar como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado comletado de una tarea', {
        descripcion,
        completar
    })
    .command('borrar', 'Crear un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}