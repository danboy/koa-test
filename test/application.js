var fs = require('fs')
  , expect = require('expect.js')
  , app = require('../lib/server')
  , request = require('supertest').agent(app.listen(3433))
  , path = __dirname + '/controllers/'
  , controllers = fs.readdirSync(path)
  , id, user;

user = {
  email: 'test@example.com'
, password: 'password'
}

controllers.forEach(function(controller){
  if(controller.indexOf('.') != 0){
    require(path+controller)(app, request, expect);
  }
});
