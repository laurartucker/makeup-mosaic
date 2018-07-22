var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/Product.js');

/* GET ALL PRODUCTS */
router.get('/', function (req, res, next) {
   Product.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
   }).limit(200);
});

router.get('/brands/:brand', function (req, res, next) {
   Product.find({ brand: req.params.brand }).exec(function (err, products) {
      if (err) return next(err);
      res.json(products);
   });
});

router.get('/getbrands', function (req, res, next) {
   Product.aggregate().group({ _id: "$brand"}).sort({ _id: 1}).exec(function (err, products) {
      if (err) return next(err);
      res.json(products);
   });
});

router.get('/getbrands/by-product-count', function(req, res, next) {
   
   Product.aggregate().group({_id: "$brand", count: { $sum: 1}}).sort( { count: -1 }).exec(function (err, products) {
      if (err) return next(err);
      res.json(products);
   });

})

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function (req, res, next) {
   Product.find({ _id: mongoose.Types.ObjectId(req.params.id) }, function (err, post) {
      console.log(req.params.id + "I reached here, ok??");
      if (err) return next(err);
      res.json(post);

   });
   console.log("Yeah and here?");
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
