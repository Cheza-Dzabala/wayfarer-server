function checkToken(req) {
  if (!req.header('token')) {
    return false;
  }
  return true;
}

module.exports = {
  checkToken,
};
