var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

/* GET ALL USERS */
router.get('/', function (req, res, next) {
   User.find(function (err, users) {
      if (err) 
         return next(err);
      res.json(users);
   });
});

/* GET SINGLE USER BY ID */
router.get('/:id', function (req, res, next) {
   User.find({ _id: mongoose.Types.ObjectId(req.params.id) }, function (err, post) {
      console.log(req.params.id + "I reached here, ok??");
      if (err) return next(err);
      res.json(post);

   });
   console.log("Yeah and here?");
});

/* SAVE USER */
router.post('/', function (req, res, next) {
   User.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
   });
});

/* UPDATE USER */
router.put('/:id', function (req, res, next) {
   User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
   });
});

/* DELETE USER */
router.delete('/:id', function (req, res, next) {
   User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
   });
});

module.exports = router;