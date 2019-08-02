import UserModel from '../models/userModel';
import authValidation from '../validations/authValidations';

const errorResponses = (error, res) => res.status(400).json({
  status: 'unsuccessful',
  message: error.details[0].message,
});
const signin = (req, res) => {
  const { error } = authValidation.vailidateSignin(req);
  if (error) errorResponses(error, res);

  const { email, password } = req;
  const user = UserModel.signin(email, password);
  if (user) {
    return res.status(200).json({
      status: 'success',
      data: { ...user, ...{ token: 'nFx5ch9VBq' } },
    });
  }
  return res.status(404).json({
    status: 'unsuccessful',
    message: 'Invalid Credentials',
  });
};

module.exports = {
  signin,
};
