var fs = require('fs')
  , expect = require('expect.js')
  , app = require('../lib/server')
  , request = require('supertest')
  , path = __dirname + '/controllers/'
  , controllers = fs.readdirSync(path)
  , id, user;

beforeEach(function(done){
  function clearCollections() {
    for (var collection in app.db.connection.collections) {
      app.db.connection.collections[collection].remove(function() {});
    }
    return done();
  }

  if (app.db.connection.readyState === 0) {
    app.db.connect(config.test.db, function (err) {
      if (err) throw err;
      return clearCollections();
    });
  } else {
    return clearCollections();
  }
});

afterEach(function (done) {
  app.db.disconnect();
  return done();
});

controllers.forEach(function(controller){
  if(controller.indexOf('.') != 0){
    require(path+controller)(app, request.agent(app.listen(3433)), expect);
  }
});
