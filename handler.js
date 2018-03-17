'use strict';

module.exports.hello = (event, context, callback) => {
  var receipt = require('./receipt.js');

  if (event.queryStringParameters && event.queryStringParameters.img && event.queryStringParameters.bucket) {
    var bucket = event.queryStringParameters.bucket;
    var img = event.queryStringParameters.img;
    
    receipt.analyze(bucket, img, function(result){
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: result
        })
      };
      return callback(null, response)
    }); 
  }
  else {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "invalid input",
        input: event,
      })
    };

    callback(null, response)
  }

  
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
