var request = require('supertest')  
  , assert = require('assert')
  , mongoose = require('mongoose')
  , app = require('../start')
  , id, user;

user = {
  email: 'test@example.com'
, password: 'password'
}

beforeEach(function(done) {  
  mongoose.connection.collections['users'].drop(function(err) {
    mongoose.connection.collections['users'].insert(user, function(err, docs) {
      id = docs[0]._id;
      done();
    });
  });
});
