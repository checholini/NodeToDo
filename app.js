const yargs = require('./config/yargs.js').yargs;
const {
        create,
        list,
        deleteTask,
        update,
} = require('./tasks/taskManager.js');

let command = yargs._[0];

switch (command) {

        case 'list':
                list();
                break
        case 'create':
                console.log(yargs.description);
                create(yargs.description)
                break;
        case 'update':
                update(yargs.description)
                break;
        case 'delete':
                deleteTask(yargs.description)
                break;
}
