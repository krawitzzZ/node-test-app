var log = require('../logger');

module.exports = function (app) {
    require('./index.js')(app);
    require('./post_response.js')(app);
    require('./response_codes.js')(app);
    require('./data_set.js')(app);
};
