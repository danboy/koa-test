var Users = {
  index: function *(next){
    this.body = yield this.render('users/index');
  }
, create: function *(next){
    this.body = "no";
  }
}

module.exports = Users;
