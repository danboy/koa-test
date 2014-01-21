
module.exports = function(app, request, expect){

  var user = {
    email: 'test@example.com'
  , password: 'password'
  };
  
  describe('Users', function(){
    
    it('should have a users page', function(done){
      request
      .get('/users')
      .expect(200)
      .end(function(err,res){
        expect(res).to.exist;
        expect(res.text).to.contain('users');
        done();
      });
    });

    it('should create a new user on POST', function(done){
      request
      .post('/users')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(user))
      .expect(200)
      .end(function(err,res){
        expect(res).to.exist;
        expect(res.text).to.contain('users');
        done();
      });
    });

  });

}
