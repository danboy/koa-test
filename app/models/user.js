var mongoose = require('mongoose')  
  , Schema = mongoose.Schema
    , RecipeSchema;

    UserSchema = mongoose.Schema({  
      email:              { type: String, required: true}
    , encrypted_password: { type: String, required: true }
    , password_salt:      { type: String }
    , created_at:         { type: Date }
    });

mongoose.model('User', RecipeSchema);  
module.exports = mongoose;
