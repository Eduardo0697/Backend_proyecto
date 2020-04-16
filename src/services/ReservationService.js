const Reservations = require('../models/Reservation');

const getAllReservations = () =>  Reservations
    .find({is_active: true})
    .populate([
        { path: 'user', model: 'users'},
        { path: 'property', model: 'properties' }
    ]);

const getAllReservationsFilter = (filter) =>  Reservations
    .find({[filter]: { $exists: true} , is_active: true })
    .populate([
        { path: 'user', model: 'users'},
        { path: 'property', model: 'properties' }
    ]);

const getOneReservationById = (id) => Reservations.findById({
    _id: id, is_active: true
}) .populate([
    { path: 'user', model: 'users'},
    { path: 'property', model: 'properties' }
]);

const createOneReservation = (data) => Reservations.create(data);

const updateReservationById = (id, data) => Reservations
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, {...data}, {new: true})
    .populate([
        { path: 'user', model: 'users'},
        { path: 'property', model: 'properties' }
    ]);

const deleteReservationById = (id) => Reservations
    .findByIdAndUpdate({
        _id : id, is_active: true
    }, { is_active: true });

module.exports = {
    getAllReservations,
    getAllReservationsFilter,
    getOneReservationById,
    createOneReservation,
    updateReservationById,
    deleteReservationById
};