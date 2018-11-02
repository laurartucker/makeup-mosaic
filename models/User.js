var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
   {
      username: String,
      password: String,
      firstName: String,
      lastName: String,
      productCollection: {  //Array of references to the products collection   
         productId:  String,
         type: Array
      }
   },
   {
      timestamps: true
   });

module.exports = mongoose.model('User', UserSchema);

