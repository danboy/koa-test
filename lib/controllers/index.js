var fs = require('co-fs')
  , Controllers = []
  , path = __dirname+'/../../app/controllers/';

module.exports = function(options){
  return function *routes(next){
    var app = this.app;
    var paths = yield fs.readdir(path);
    paths.forEach(function(file){
      if(file.substr(file.lastIndexOf('.') + 1) === 'js'){
        var name = file.replace('.js', '');
        var methods = require(path + file);
        (file == 'index.js') ? app.resource('', require(path + file)) : app.resource(name, require(path + file));
      }
    });
    this.controllers = Controllers;
    yield next;
  }
}
