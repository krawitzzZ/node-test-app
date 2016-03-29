module.exports = function (req, res) {
  var random = randomInteger(0, 1);

  if (random) {
    res.json({ result: true, text: 'Success!' });
  } else {
    res.json({ result: false, text: 'Failure!' });
  }

  function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;
  }
};
