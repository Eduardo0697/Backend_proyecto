const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    property: {
        type: Schema.Types.ObjectId,
        ref: 'properties',
        required: true
    },
    published_at: {
        type: Date
    }
}, { timestamps: true });

module.exports = mongoose.model('reviews', ReviewSchema);