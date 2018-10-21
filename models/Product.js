var mongoose = require('mongoose');


var ProductSchema = new mongoose.Schema({
  website: String,
  category: String,
  sub_category: String,
  brand: String,
  affiliate_link: String,
  images: { url: String, path: String},
  path: String,
  price: String,
  name: String,
  date_added: Date,
  last_viewed: Date
});

module.exports = mongoose.model('Product', ProductSchema);
