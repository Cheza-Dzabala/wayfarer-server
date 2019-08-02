import Joi from '@hapi/joi';

const validateBooking = (data) => {
  const schema = Joi.object().keys({
    user_id: Joi.number().required(),
    trip_id: Joi.number().required(),
    seat_number: Joi.string().required(),
  });

  return Joi.validate(data, schema);
};


module.exports = {
  validateBooking,
};
