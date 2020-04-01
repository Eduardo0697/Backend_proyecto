const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location:{
        type: String
    },
    photos: {
        type: [String]
    },
    description:{
        type: String
    },
    hostUser: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    punctuation:{
        type: String
    },
    reviews: {
        type: [Schema.Types.ObjectId],
        ref: 'propertyReviews',
    },
    features: {
        type: [String]
    },
    services: {
        type: [String]
    },
    is_available: {
        type: Boolean,
        default: true
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('properties', PropertySchema);