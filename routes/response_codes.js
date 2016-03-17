var log = require('../logger');

module.exports = function (app) {
    app.get('/response_codes', function (req, res) {

        var response,
            randomCount;

        randomCount = randomInteger(1, 2);

        if (randomCount == 1) {
            response = {
                result: true,
                text: 'Success!'
            };
        } else {
            response = {
                result: false,
                text: 'Failure!'
            };
        }
        res.status(200).send(response);
        log.info('got get request on /response_codes. response is: ', response);

        function randomInteger(min, max) {
            var rand = min + Math.random() * (max + 1 - min);
            rand = Math.floor(rand);
            return rand;
        }
    });
};
