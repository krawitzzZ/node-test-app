module.exports = function (app) {
  app.dataSources.mongo.automigrate('endpoint', function (err) {
    if (err) throw err;

    app.models.endpoint.create([
      { name: 'post_response',
        content: {
          failure: 'No Content',
          success: 'Successfully received data from user'
        }
      },
      { name: 'response_codes',
        content: {
          failure: { result: false, text: 'Failure!' },
          success: { result: true, text: 'Success!' }
        }
      },
      { name: 'data_set',
        content: [
          {item: "banana", type: "fruit"},
          {item: "pear", type: "fruit"},
          {item: "apple", type: "fruit"},
          {item: "cucumber", type: "vegetable"},
          {item: "tomato", type: "vegetable"},
          {item: "potatoes", type: "vegetable"}
        ]
      }
    ], function (err, endpoints) {
      if (err) throw err;

      console.log('Models created: \n', endpoints);
    });
  });
};
