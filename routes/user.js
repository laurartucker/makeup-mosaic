var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User');

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
      if (err) return next(err);
      res.json(post);
   });
});

/* CREATE USER */
router.post('/', function (req, res, next) {
   var newUser = new User(req.body);
   newUser.registrationDate = Date.now();

   User.create(newUser, function (err, post) {
      if (err)
         return next(err);
      res.json(post);
   });
});

// /* UPDATE USER */
// router.put('/:id', function (req, res, next) {
//    User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//    });
// });

// /* DELETE USER */
// router.delete('/:id', function (req, res, next) {
//    User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//    });
// });

/* VALIDATE LOGIN */
router.post('/authenticate', function (req, res, next) {
   User.find({ username: req.body.username, password: req.body.password}, function (err, user) {
      if (err) return next(err);

      if (user) {
         res.json(user);
      }
      else
         res.json(401, "Invalid username or password" + req.body.username + " | " + req.body.password);
   });
   
});

router.put('/add-to-collection/', function (req, res, next) {
   User.update({username: req.body.username}, {$push: {productCollection: { productId: req.body.productId}}}, function(err, user) {
      if (err) return next(err);

      if (user) {
         res.json(user);
      }
   });
});

module.exports = router;
