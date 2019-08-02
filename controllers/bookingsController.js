import bookingsModel from '../models/bookingsModel';
import adminCheckMiddleware from '../middleware/adminCheckMiddleware';
import bookingsValidations from '../validations/bookingValidations';
import responseHelper from '../helpers/responseHelper';

const allBookings = (req, res) => {
  adminCheckMiddleware.checkAdmin(req, res);
  const bookings = bookingsModel.allBookings();
  res.status(200).json({
    status: 'success',
    data: bookings,
  });
};

const userBookings = (id, res) => {
  const bookings = bookingsModel.userBookings(id);
  return res.status(200).json({
    status: 'success',
    data: bookings,
  });
};

const createBooking = (req, res) => {
  const { body } = req;
  const { error } = bookingsValidations.validateBooking(body);
  if (error) responseHelper.respond(400, 'Bad Request', error.details[0].message, res);
  const booking = bookingsModel.createBooking(body);
  return res.status(201).json({
    status: 'success',
    data: { ...booking, ...{ token: 'nsslslijso' } },
  });
};
const deleteBooking = (req, res) => {
  const { id } = req.params;
  const booking = bookingsModel.findBooking(id);
  const { status, details } = bookingsModel.deleteBooking(booking);
  return res.status((status === 'error' ? 500 : 200)).json({
    status,
    data: { message: details },
  });
};
module.exports = {
  allBookings, userBookings, createBooking, deleteBooking,
};
