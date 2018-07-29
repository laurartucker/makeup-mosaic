﻿var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
   {
      username: String,
      password: String,
      firstName: String,
      lastName: String,
   },
   {
      timestamps: true
   });

module.exports = mongoose.model('User', UserSchema);


