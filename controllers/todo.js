const mongoose = require('mongoose');

const Todo = require('../models/Todo');

exports.getList = (req, res, next) => {
    console.log('getting todo list...');

    Todo.find()
        .then(entries => {
            console.log(entries);
            res.status(201).json({
                entries: entries
            });
        })
        .catch(err => {
            console.log(err);
        })

}

exports.addTask = (req, res, next) => {
    console.log('adding task...');

    const task = req.body.task;
    const completed = req.body.completed;


    //console.log(task);
    //console.log(completed);


    const todo = new Todo({
        task: task,
        completed: completed,

    });

    todo.save()
    .then(result => {
        res.status(201).json({
            message: 'Task added successfully!',
            entry: todo
        });
    })
    .catch(err => console.log(err));


}

exports.deleteTask = (req, res, next) => {
    console.log('deleting item...');

    const id = req.body.taskId;

    console.log(id);

    Todo.findByIdAndRemove(id)
            .then(result => {
                res.status(200).json({ message: 'Deleted entry.' });
            })
            .catch(err => {
                console.log(err);
            });

}

exports.updateCheckbox = (req, res, next) => {
    console.log('updating checkbox...');

    const id = req.body.taskId;

    console.log(id);

    Todo.findById(id)
            .then(task => {

                console.log(task);

                if (!task.completed) {
                    task.completed = true;
                    console.log('now TRUE');
                } else {
                    task.completed = false;
                    console.log('now FALSE');

                }

                return task.save();

            })
            .then(result => {
                res.status(200).json({ message: 'updated entry.' });
            })
            .catch(err => {
                console.log(err);
            });

}
