const mongoose = require('mongoose');

const Whiteboard = require('../models/Whiteboard');

exports.addItem = (req, res, next) => {
    console.log('adding item...');

    const itemName = req.body.name;
    const total = req.body.total;
    let split = req.body.split;
    const splitTotal = req.body.splitTotal;
    const user = req.body.user;

    if (split === "Yes") {
        split = true;
    } else {
        split = false;
    }

    console.log(itemName);
    console.log(total);
    console.log(split);
    console.log(splitTotal);
    console.log(user);

    const whiteboard = new Whiteboard({
        name: itemName,
        total: total,
        split: split,
        splitTotal: splitTotal,
        user: user
    });

    whiteboard.save()
    .then(result => {
        res.status(201).json({
            message: 'Entry added successfully!',
            entry: whiteboard
        });
    })
    .catch(err => console.log(err));


}


exports.deleteItem = (req, res, next) => {
    console.log('deleting item...');

    const id = req.body.entryId;

    console.log(id);

    Whiteboard.findByIdAndRemove(id)
            .then(result => {
                res.status(200).json({ message: 'Deleted entry.' });
            })
            .catch(err => {
                console.log(err);
            });

}


exports.getWhiteboard = (req, res, next) => {
    console.log('getting whiteboard...');
    const user = req.params.user;
    console.log('passed user is --> ' + user);

    Whiteboard.find({user: user})
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



exports.resetBoard = (req, res, next) => {
    console.log('resetting whiteboard...');
    const user = req.params.user;
    console.log('passed user is --> ' + user);

    Whiteboard.deleteMany({user: user})
        .then(result => {
            res.status(201).json({
                message: "Deleting successful."
            });
        })
        .catch(err => {
            console.log(err);
        })

}