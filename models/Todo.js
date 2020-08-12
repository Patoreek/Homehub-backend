const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema(
    {
        task: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            required: true
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model('todo', todoSchema);