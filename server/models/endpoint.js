module.exports = function(Endpoint) {

  Endpoint.response_codes = function (cb) {
    var rand = randomInteger(0, 1);
    var response;
    if (rand) {
      response = { result: true, text: 'Success!' };
    } else {
      response = { result: false, text: 'Failure!' };
    }
    cb(null, response);
  };

  Endpoint.remoteMethod(
    'response_codes',
    {
      http: {path: '/response_codes', verb: 'get'},
      returns: {arg: 'response', type: 'json'}
    }
  );

  function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;
  }
};
