var mongoose = require('mongoose');


var SephoraSchema = new mongoose.Schema({
  Description: String,
  Categories: String,
  Sub_Category: String,
  Price: String,
  Image: String,
  Sephora_ID: String,
  Brand: String,
  Name: String,
  Referer_Link: String  
});


module.exports = mongoose.model('Sephora', SephoraSchema);
