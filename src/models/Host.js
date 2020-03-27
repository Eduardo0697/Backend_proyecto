const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HostSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    birth_date: {
        type: Date
    },
    properties: {
        type: [Schema.Types.ObjectId],
        ref: 'properties'
    },
    gender: {
        type: String,
        enum: ['M','F']
    },
    profile_pic: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('host', HostSchema);