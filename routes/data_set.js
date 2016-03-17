var log = require('../logger');

module.exports = function (app) {
    app.get('/data_set', function (req, res) {
        res.set({
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache, no-store, must-revalidate'
        });

        var products = [
            {item: "banana", type: "fruit"},
            {item: "pear", type: "fruit"},
            {item: "apple", type: "fruit"},
            {item: "cucumber", type: "vegetable"},
            {item: "potatoes", type: "vegetable"}
        ];

        var randomCount = randomInteger(0, products.length - 1);
        var chosenProduct = products[randomCount];

        res.status(200).send(chosenProduct);
        log.info('got get request on /data_set. sended: ', chosenProduct);

        function randomInteger(min, max) {
            var rand = min + Math.random() * (max + 1 - min);
            rand = Math.floor(rand);
            return rand;
        }
    });
};
