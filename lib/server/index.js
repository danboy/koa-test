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
app.use(views('./app/views', 'jade'));
app.use(routes());
app.use(router(app));

// koa routers top level suff seems to not be working here.. this should be temporary
app.get('/', function *(){
  this.body = yield this.render('home/index');
});

module.exports = app;
