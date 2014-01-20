var Index = {
  index: function *(next){
    this.body = yield this.render('home/index');
  }
, show: function *(next){
    this.body = "show";
  }
}

module.exports = Index;
