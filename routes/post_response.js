var log = require('../logger');

module.exports = function (app) {
    app.post('/post_response', function (req, res) {
        res.set({
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache, no-store, must-revalidate'
        });

        if (req.body.request === 'error') {
            res.status(204).send('No Content');
        } else {
            res.status(200).send('Successfully received data from user');
        }

        log.info('got post request on /post_response');
    });
};
