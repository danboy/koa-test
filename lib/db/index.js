var mongoose = require('mongoose')  
  , config = require('../config')
  , connectionString = config.get('database:url')
  , options = {};

options = {  
  server: {
    auto_reconnect: true,
    poolSize: 10
  }
};

mongoose.connect(connectionString, options, function(err, res) {  
  if(err) {
    console.log('Error connecting to: ' + connectionString + '. ' + err);
  } else {
    console.log('Successfully connected to: ' + connectionString);
  }
});
