const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    password:{
        type: String,
        required: true,
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

HostSchema.pre('save', function (next) {
    const host = this;
    const SALT_FACTOR = 10;
    if(!host.isModified('password')){
        return next();
    }
    bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
        if(err) return next(err);
        bcrypt.hash(host.password, salt, function (error, hash) {
            if(error) return next(error);
            host.password = hash;
            next()
        })
    });
});

module.exports = mongoose.model('hosts', HostSchema);