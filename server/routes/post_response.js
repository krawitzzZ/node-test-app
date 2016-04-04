module.exports = function (req, res) {
  if (req.body.request === 'error') {
    res.status(204).send('No Content');
  } else {
    res.send('Successfully received data from user');
  }
};
