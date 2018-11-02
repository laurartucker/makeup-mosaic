var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/Product.js');
var User = require('../models/User');

/* GET ALL PRODUCTS */
router.get('/', function (req, res, next) {
   Product.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
   }).limit(200);
});

/* GET ALL PRODUCTS FOR A GIVEN BRAND */
router.get('/brands/:brand', function (req, res, next) {
   Product.find({ brand: req.params.brand }).sort({ category: 1 }).sort({ sub_category: 1 }).exec(function (err, products) {
      if (err) return next(err);
      res.json(products);
   });
});

/* GET LIST OF BRANDS, IN ALPHABETICAL ORDER */
router.get('/getbrands/a-to-z', function (req, res, next) {
   Product.aggregate().group({ _id: "$brand" }).sort({ "_id": 1 }).exec(function (err, products) {
      if (err) return next(err);
      res.json(products);
   });
});

/* GET LIST OF BRANDS WITH PRODUCT COUNT */
router.get('/getbrands/by-product-count', function (req, res, next) {
   Product.aggregate().group({ _id: "$brand", count: { $sum: 1 } }).sort({ count: -1 }).exec(function (err, products) {
      if (err) return next(err);
      res.json(products);
   });

})

router.get('/stash/:username', function (req, res, next) {

   User.findOne({ username: req.params.username }).exec(function (err, user) {
      if (err) {
         console.log(err);
         return next(err)
      };
      console.log(user.productCollection.length);

      let arr = user.productCollection.map(ele => new mongoose.Types.ObjectId(ele.productId));
      let products = [];

      console.log(arr);

     // for (var i = 0; i < arr.length; i++) {
         Product.find({ _id: { $in: arr} }).exec(function (err, products) {
            if (err) return next(err);
            
            res.json(products);
         });
     // }
      // console.log(products);
      // res.json(products);
      // console.log(arr + " " + arr.length);

      // Product.find({ _id: { $in: arr } }).exec(function (err, products) {
      //    if (err) return next(err);
      //    console.log(arr.length);
      //    
      // });
   });
})

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function (req, res, next) {
   Product.find({ _id: mongoose.Types.ObjectId(req.params.id) }, function (err, post) {
      if (err)
         return next(err);
      res.json(post);
   });

});

/* SAVE PRODUCT */
router.post('/', function (req, res, next) {
   Product.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
   });
});

/* UPDATE PRODUCT */
router.put('/:id', function (req, res, next) {
   Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
   });
});

/* DELETE PRODUCT */
router.delete('/:id', function (req, res, next) {
   Product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
   });
});

module.exports = router;
