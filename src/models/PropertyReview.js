const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PropertyReviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    property: {
        type: Schema.Types.ObjectId,
        ref: 'properties'
    },
    comment:{
        type: String
    },
    is_active:{
        type: Boolean,
        default: true
    },
    createdAt:{
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('propertyReviews', PropertyReviewSchema);