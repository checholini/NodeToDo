const fs = require('fs');

let myTasks = [];

let create = (description) => {

        loadFromDb();
        let tempTask = {
                description,
                completed: false,
        }

        myTasks.push(tempTask);

        saveInDB(myTasks)

        console.log(myTasks)
        return tempTask;

}

let list = () => {
        loadFromDb();
        console.log('********** To Do **********');
        for (let task of myTasks) {
                console.log(task.description);
                console.log('Completed: ', task.completed);
                console.log('***************************');
        }
}

let update = (description) => {
        loadFromDb();
        let changed = false;
        for (task of myTasks) {
                if (task.description == description) {
                        task.completed = true;
                        changed = true;
                        console.log(`Task ${ description } was marked as completed`)
                }
        }
        if (changed) {
                saveInDB();
        } else {
                console.log(`No task found for ${ description } `);
        }
}

let deleteTask = (description) => {
        loadFromDb();
        let index = myTasks.findIndex(task => task.description == description);
        if (index >= 0) {
                console.log(`${ description } was deleted from tasks`)
                myTasks.splice(index, 1);
                saveInDB();
        } else {
                console.log(`No task found for ${ description } `);
        }
}

let saveInDB = () => {

        let data = JSON.stringify(myTasks);

        fs.writeFile('./db/tasks.json', data, (err) => {
                if (err) console.log(err)
        });

}

let loadFromDb = () => {
        try {
                let data = require('../db/tasks.json');
                myTasks = data;
        } catch (err) {
                myTasks = [];
        }
}

module.exports = {
        create,
        list,
        update,
        deleteTask,
}
