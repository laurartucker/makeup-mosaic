import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user';
import { environment } from '../../environments/environment';


@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(environment.apiUrl + '/user');
    }

    getById(id: String) {
        return this.http.get(environment.apiUrl + '/user/' + id);
    }

    create(user: User) {
        return this.http.post(environment.apiUrl + '/user', user);
    }

    update(user: User) {
        return this.http.put(environment.apiUrl + '/user/' + user.username, user);
    }

    delete(id: String) {
        return this.http.delete(environment.apiUrl + '/user/' + id);
    }
}


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { User } from '../../../models/User';

// var express = require('express');
// var router = express.Router();
// var mongoose = require('mongoose');
// var User = require('../models/User.js');

// @Injectable()
// export class UserService {
//    constructor(private http: HttpClient) { }

//    getAll() {
//       /* GET ALL USERS */
//       router.get('/', function (req, res, next) {
//          User.find(function (err, users) {
//             if (err) return next(err);
//             res.json(users);
//          }).limit(200);
//       });
//    }

//    getById(id: string) {
//       router.get('/:id', function (req, res, next) {
//          User.find({ _id: id }, function (err, post) {
//             console.log(req.params.id + "I reached here, ok??");
//             if (err) return next(err);
//             res.json(post);
      
//          });
//          console.log("Yeah and here?");
//       });
//    }

//    create(user: User) {
//       router.post('/', function (req, res, next) {
//          User.create(req.body, function (err, post) {
//             if (err) return next(err);
//             res.json(post);
//          });
//       });
//    }

//    update(user: User) {
//       router.put('/:id', function (req, res, next) {
//          User.findByIdAndUpdate(user.id, user, function (err, post) {
//             if (err) return next(err);
//             res.json(post);
//          });
//       });
//    }

//    delete(id: string) {
//       router.delete('/:id', function (req, res, next) {
//          User.findByIdAndRemove(id, req.body, function (err, post) {
//             if (err) return next(err);
//             res.json(post);
//          });
//       });
//    }
// }
