const { getAllReservations, getAllReservationsFilter, getOneReservationById } = require('../../services/ReservationService');

const getReservations = async (_, { filter }) => {
    const reservations = filter
        ? await getAllReservationsFilter()
        : await getAllReservations();
    return reservations;
};

const getReservationById = async (_, {id}) => {
    const reservation = await getOneReservationById(id);
    return reservation;
};

module.exports = {
    getReservations,
    getReservationById
};