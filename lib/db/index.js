var mongoose = require('mongoose')  
  , config = require('../config')
  , connectionString = config.get('database:url');

mongoose.connect(connectionString, config.get('database:options'), function(err, res) {  
  if(err) {
    console.log('Error connecting to: ' + connectionString + '. ' + err);
  } else {
    console.log('Successfully connected to: ' + connectionString);
  }
});

module.exports = mongoose;
