const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
    languages: {
        type: [String]
    },
    description:{
        type: String
    },
    registration_date:{
        type: Date
    },
    reviews:{
        type: [Schema.Types.ObjectId],
        ref: 'reviews',
    },
    is_active: {
        type: Boolean,
        default: true
    },
    is_verified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('users', UserSchema);