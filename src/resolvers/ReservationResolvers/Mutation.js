const { createOneReservation, updateReservationById, deleteReservationById } = require('../../services/ReservationService');
const { getOnePropertyById } = require('../../services/PropertyService');

const createReservation = async (_, {data}, { userAuth }) => {
    const reservation = await createOneReservation(data);
    if(reservation) {
        //Save the reservation in the user logged in reservations
        userAuth.reservationsDone.push(reservation._id);
        userAuth.save();
        // Save the reservation in the reservations of the Property
        const Property = await getOnePropertyById(data.property);
        Property.reservedBy.push(reservation._id);
        Property.save();

        reservation.user= userAuth._id;
        reservation.property = Property._id;
        reservation.save();
    }
    return reservation;
};

const updateReservation = async (_, {id, data}) => {
    const reservation = await updateReservationById(id, data);
    return reservation;
};

const deleteReservation = async (_, {id }, { userAuth }) => {
    const reservation = await deleteReservationById(id);
    if(!reservation) return 'reservation does not exist'

    // Delete the reservation from reservationsDone of the user logged in
    const index = userAuth.reservationsDone.findIndex(p => p._id == id);
    userAuth.reservationsDone.splice(index,1);
    userAuth.save();

    //Delete the reservation from the reservedBy in the Property
    const Property = await getOnePropertyById(reservation.property._id);
    const index2 =  Property.reservedBy.findIndex(p => p._id == id);
    Property.reservedBy.splice(index2,1);
    Property.save();

    return 'Property reservation deleted';
};

module.exports = {
    createReservation,
    updateReservation,
    deleteReservation,
};