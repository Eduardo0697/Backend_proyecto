const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserReviewSchema = new Schema({
    hostUser: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    guestUser: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    is_active:{
        type: Boolean
    }
}, { timestamps: true });

module.exports = mongoose.model('userReviews', UserReviewSchema);