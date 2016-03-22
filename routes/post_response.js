var log = require('../logger');

module.exports = function (app) {
    app.post('/post_response', function (req, res) {
        log.info('request body: ' + req.body.request);

        var data;

        if (req.body.request === 'error') {
            data = 'No Content';
            res.status(204).send(data);
            log.info('sent response: ' + data);
        } else {
            data = 'Successfully received data from user';
            res.status(200).send(data);
            log.info('send response: ' + data);
        }
    });
};
