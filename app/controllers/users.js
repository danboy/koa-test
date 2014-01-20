var Users = {
  index: function *(next){
    this.body = yield this.render('users/index');
  }
}

module.exports = Users;
