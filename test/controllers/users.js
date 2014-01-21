module.exports = function(app, request, expect){
  
  describe('Users', function(){
    
    it('should have a users page', function(done){
      request
      .get('/Users')
      .expect(200)
      .end(function(err,res){
        expect(res).to.exist;
        expect(res.text).to.contain('users');
        done();
      });
    });

  });

}
