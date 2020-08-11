const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const whiteboardSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        split: {
            type: Boolean,
            required: true
        },
        splitTotal: {
            type: Number,
            required: true
        },
        user: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model('whiteboard', whiteboardSchema);