import userModel from '../models/userModel';

const returnError = (status, bodyStatus, message, res) => res.status(status).json({
  status: bodyStatus,
  data: {
    message,
  },
});

const checkAdmin = (req, res) => {
  const id = req.header('id');
  console.log(id);

  const user = userModel.findUserById(id);
  console.log(user);
  if (!id || !user || user.is_admin === false) returnError(403, 'Unauthorized', 'Only admins can access this section', res);

  return true;
};

module.exports = {
  checkAdmin,
};
