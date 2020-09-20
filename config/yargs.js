const argv = require('yargs')
    .command('listar', 'Lista las tareas')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('borrar', 'Eliminar un elemento de la lista', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'Actualiza el estado de un elemento', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}