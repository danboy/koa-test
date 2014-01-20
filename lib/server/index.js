var views = require('koa-render')
  , router = require('koa-router')
  , routes = require('../controllers')
  , error = require('../error')
  , config = require('../config')
  , stylus = require('koa-stylus')
  , serve = require('koa-static')
  , koa = require('koa')
  , app = koa();

app.db = require('../db');
app.use(stylus('./public'));
app.use(serve('./public'));
app.use(error());
app.use(views(__dirname+'../../../app/views', 'jade'));
app.use(router(app));
app.use(routes());

// koa routers top level suff seems to not be working here.. this should be temporary
app.get('/', function *(){
  this.body = yield this.render('home/index');
});

app.listen(3000);
module.exports = app;
