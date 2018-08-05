var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Sephora = require('../models/Sephora');

/* GET ALL PRODUCTS */
router.get('/sephora', function (req, res, next) {
   Sephora.find(function (err, sephora) {
      if (err) return next(err);
      res.json(sephora);
   }).limit(200);
});



module.exports = router;
