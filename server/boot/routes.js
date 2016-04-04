module.exports = function (app) {
  app.middleware('routes', '/endpoints/post_response', require('../routes/post_response'));
  app.middleware('routes', '/endpoints/response_codes', require('../routes/response_codes'));
  app.middleware('routes', '/endpoints/data_set', require('../routes/data_set'));
};
