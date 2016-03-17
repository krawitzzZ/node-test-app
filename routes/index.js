var log = require('../logger');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.set({
            'Access-Control-Allow-Origin': '*'
        });
        res.sendFile(__dirname + '/public/index.html');
    });
    log.info('page loaded');
};