const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    password:{
        type: String,
        required: true,
    },
    profile_pic:{
        type: String,
        default: ''
    },
    hostCategory:{
        type: String
    },
    languages: {
        type: [String]
    },
    reviewsDone:{
        type: [Schema.Types.ObjectId],
        ref: 'propertyReviews'
    },
    reservationsDone:{
        type: [Schema.Types.ObjectId],
        ref: 'reservation'
    },
    description:{
        type: String,
        default: ''
    },
    properties: {
        type: [Schema.Types.ObjectId],
        ref: 'properties'
    },
    nationality:{
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
    is_host: {
        type: Boolean,
    },
    is_guest: {
        type: Boolean
    },
    createdAt:
        {
            type: String
        }
}, { timestamps: true });

UserSchema.pre('save', function (next) {
    const user = this;
    const SALT_FACTOR = 13;
    if(!user.isModified('password')){
        return next();
    }
    bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
        if(err) return next(err);
        bcrypt.hash(user.password, salt, function (error, hash) {
            if(error) return next(error);
            user.password = hash;
            next()
        });
    });
});

module.exports = mongoose.model('users', UserSchema);