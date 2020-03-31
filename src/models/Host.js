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
    profile_pic:{
        type: String
    },
    category:{
        type: String
    },
    languages: {
        type: [String]
    },
    description:{
        type: String
    },
    is_active: {
        type: Boolean,
        default: true
    },
    is_verified: {
        type: Boolean,
        default: false
    },
    properties: {
        type: [Schema.Types.ObjectId],
        ref: 'properties'
    }
}, { timestamps: true });

module.exports = mongoose.model('hosts', HostSchema);