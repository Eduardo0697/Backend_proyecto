const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PropertyReviewSchema = new Schema({
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
    comment:{
        type: String,
        required: true
    },
    is_active:{
        type: Boolean
    }
}, { timestamps: true });

module.exports = mongoose.model('propertyReviews', PropertyReviewSchema);