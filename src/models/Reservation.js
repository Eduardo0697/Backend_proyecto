const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    property: {
        type: Schema.Types.ObjectId,
        ref: 'properties'
    },
    guestNumber:{
        type: Number,
        default: 1
    },
    comment:{
        type: String
    },
    startDate:{
        type: String
    },
    endDate:{
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

module.exports = mongoose.model('reservation', ReservationSchema);