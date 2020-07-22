const optsCreate = {
        description: {
                alias: 'd',
                demand: true,
        }
}


const optsUpdate = {
        description: {
                alias: 'd',
                demand: true,
        },
        completed: {
                alias: 'c'
        }
}


const optsDelete = {
        description: {
                alias: 'd',
                demand: true,
        },
}

const yargs = require('yargs').command(
        'create',
        'Allows user to create a task',
        optsCreate
).command(
        'list',
        'Allows user to list pending tasks',
).command(
        'update',
        'Allows user to update a task',
        optsUpdate
).command('delete',
        'Allows user to delete a task',
        optsDelete
).help().argv;


module.exports = {
        yargs
}
