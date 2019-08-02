import tripModel from '../models/tripsModel';
import tripValidation from '../validations/tripValidations';


const returnError = (error, status, bodyStatus, res) => res.status(status).json({
  status: bodyStatus,
  data: { message: error },
});


const createTrip = (req, res) => {
  const { error } = tripValidation.validateNewTrip(req);
  if (error) {
    returnError(error.details[0].message, 400, 'Bad Request', res);
  }
  const trip = tripModel.create(req);
  if (trip) {
    return res.status(201).json({
      status: 'success',
      data: { ...trip, ...{ token: 'nFx5ch9VBq' } },
    });
  }

  return res.status(500).json({
    status: 'Error',
    message: 'Internal Server Error',
  });
};

const allTrips = (req, res) => {
  const trips = tripModel.all();
  return res.status(200).json({
    status: 'success',
    data: { ...trips, ...{ token: 'kjslks02n' } },
  });
};

const cancelTrip = (id, res) => {
  const trip = tripModel.findTrip(id);
  if (!trip) {
    returnError('Trip does not exist', 404, 'Resource not found', res);
  }
  const { status, details } = tripModel.cancel(trip);
  if (status !== 'error') {
    return res.status(200).json({
      status: 'success',
      data: {
        message: 'Trip cancelled successfully',
      },
    });
  }
  return res.status(500).json({
    status: 'error',
    data: {
      message: `Unable to complete request. Error (${details})`,
    },
  });
};
module.exports = {
  createTrip, allTrips, cancelTrip,
};
