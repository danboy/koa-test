module.exports = function(){
  return function *pageNotFound(next){
    yield next;

    // already handled
    if (this.status) return;

    this.status = 404;
    switch (this.accepts('html', 'json')) {
    case 'html':
      this.type = 'html';
      this.body = yield this.render('error', {ctx: this});
      break;
    case 'json':
      this.body = {
      message: 'Page Not Found'
      };
      break
    default:
      this.type = 'text';
      this.body = 'Page Not Found';
    }
  }
}
