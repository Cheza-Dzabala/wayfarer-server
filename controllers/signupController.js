import userModel from '../models/userModel';
import authValidations from '../validations/authValidations';

const errorResponses = (error, bodyStatus, res, status) => res.status(status).json({
  status: bodyStatus,
  message: error,
});
const signup = (req, res) => {
  const doesExist = userModel.findUser(req.email);
  if (doesExist) errorResponses('Email already exists on the system', 'Forbidden', res, 403);
  const { error } = authValidations.vaildateSignup(req);
  if (error) errorResponses(error.details[0].message, 'Bad Request', res, 400);
  const user = userModel.signup(req);
  if (user) {
    return res.status(201).json({
      status: 'success',
      data: { ...user, ...{ token: 'nFx5ch9VBq' } },
    });
  }
  return res.status(404).json({
    status: 'unsuccessful',
    message: 'Unable to sign up user',
  });
};

module.exports = {
  signup,
};
