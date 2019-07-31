const respond = (status, bodyStatus, message, res) => res.status(status).json({
  status: bodyStatus,
  data: {
    message,
  },
});

module.exports = {
  respond,
};
