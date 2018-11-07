(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_directives/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        var _this = this;
        this.alertService = alertService;
        // subscribe to alert messages
        this.subscription = alertService.getMessage().subscribe(function (message) { _this.message = message; });
    }
    AlertComponent.prototype.ngOnDestroy = function () {
        // unsubscribe on destroy to prevent memory leaks
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.prototype.isLoggedIn = function () {
        if (localStorage.getItem('currentUser'))
            return true;
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/delay */ "./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var rxjs_add_operator_materialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/materialize */ "./node_modules/rxjs/_esm5/add/operator/materialize.js");
/* harmony import */ var rxjs_add_operator_dematerialize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/dematerialize */ "./node_modules/rxjs/_esm5/add/operator/dematerialize.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FakeBackendInterceptor = (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(null).mergeMap(function () {
            // authenticate
            if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('Username or password is incorrect');
                }
            }
            // get users
            if (request.url.endsWith('/api/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('Unauthorised');
                }
            }
            // get user by id
            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('Unauthorised');
                }
            }
            // create user
            if (request.url.endsWith('/api/users') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('Username "' + newUser_1.username + '" is already taken');
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('Unauthorised');
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        })
            .materialize()
            .delay(500)
            .dematerialize();
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_1__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_1__["fakeBackendProvider"]; });





/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/user/authenticate', { username: username, password: password });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: UserService, ProductService, AlertService, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.service */ "./src/app/_services/product.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]; });







/***/ }),

/***/ "./src/app/_services/product.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/product.service.ts ***!
  \**********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getAllBrandsAtoZ = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/product/getbrands/a-to-z');
    };
    ProductService.prototype.getAllBrandsByCount = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/product/getbrands/by-product-count');
    };
    ProductService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/product/');
    };
    ProductService.prototype.getAllProductsForUser = function (username) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/product/stash/' + username);
    };
    ProductService.prototype.getProductById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/product/' + id);
    };
    ProductService.prototype.getProductsByBrand = function (brand) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/product/brands/' + brand);
    };
    ProductService.prototype.getProductsByBrandAndCategory = function (brand, category) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/product/brands/', { params: { brand: brand, category: category } });
    };
    ProductService.prototype.getProductsByCategory = function (category) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/product/category/' + category);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/user');
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/user/' + id);
    };
    UserService.prototype.create = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/user', user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/user/' + user.username, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/user/' + id);
    };
    UserService.prototype.addProductToCollection = function (username, productId) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/user/add-to-collection/', { username: username, productId: productId });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n   <app-header></app-header>\n</header>\n<div class=\"content-container\">\n   <div class=\"sidebar\">\n   <app-sidebar></app-sidebar>\n</div>\n<div class=\"content\">\n   <router-outlet></router-outlet>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background-color: black;\n  color: white;\n}\n\n.content-container {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXVyYXR1Y2tlci9EZXZlbG9wbWVudC9tYWtldXAtbW9zYWljL21ha2V1cC1tb3NhaWMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNHLHdCQUFBO0VBQ0EsYUFBQTtDQ0FGOztBREVEO0VBQ0ksYUFBQTtDQ0NIIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5oZWFkZXIge1xuICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICBjb2xvcjogd2hpdGU7XG59XG4uY29udGVudC1jb250YWluZXIge1xuICAgIG1hcmdpbjogMjBweDtcbn0iLCJoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-create/product-create.component */ "./src/app/product-create/product-create.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product-edit/product-edit.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _header_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/menu/menu.component */ "./src/app/header/menu/menu.component.ts");
/* harmony import */ var _products_by_brand_products_by_brand_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products-by-brand/products-by-brand.component */ "./src/app/products-by-brand/products-by-brand.component.ts");
/* harmony import */ var _header_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/login/login.component */ "./src/app/header/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _brands_a_z_a_z_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./brands/a-z/a-z.component */ "./src/app/brands/a-z/a-z.component.ts");
/* harmony import */ var _partials_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./partials/brand-list/brand-list.component */ "./src/app/partials/brand-list/brand-list.component.ts");
/* harmony import */ var _format_strings_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./format-strings.pipe */ "./src/app/format-strings.pipe.ts");
/* harmony import */ var _brands_partials_sort_menu_sort_menu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./brands/partials/sort-menu/sort-menu.component */ "./src/app/brands/partials/sort-menu/sort-menu.component.ts");
/* harmony import */ var _brands_most_products_most_products_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./brands/most-products/most-products.component */ "./src/app/brands/most-products/most-products.component.ts");
/* harmony import */ var _stash_stash_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./stash/stash.component */ "./src/app/stash/stash.component.ts");
/* harmony import */ var _partials_product_cards_product_cards_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./partials/product-cards/product-cards.component */ "./src/app/partials/product-cards/product-cards.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _looks_add_add_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./looks/add/add.component */ "./src/app/looks/add/add.component.ts");
/* harmony import */ var _partials_small_product_cards_small_product_cards_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./partials/small-product-cards/small-product-cards.component */ "./src/app/partials/small-product-cards/small-product-cards.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"],
                _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_9__["ProductCreateComponent"],
                _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_10__["ProductEditComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _header_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
                _products_by_brand_products_by_brand_component__WEBPACK_IMPORTED_MODULE_13__["ProductsByBrandComponent"],
                _header_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_16__["AlertComponent"],
                _brands_a_z_a_z_component__WEBPACK_IMPORTED_MODULE_20__["AZComponent"],
                _partials_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_21__["BrandListComponent"],
                _format_strings_pipe__WEBPACK_IMPORTED_MODULE_22__["FormatCategory"],
                _brands_partials_sort_menu_sort_menu_component__WEBPACK_IMPORTED_MODULE_23__["SortMenuComponent"],
                _brands_most_products_most_products_component__WEBPACK_IMPORTED_MODULE_24__["MostProductsComponent"],
                _stash_stash_component__WEBPACK_IMPORTED_MODULE_25__["StashComponent"],
                _partials_product_cards_product_cards_component__WEBPACK_IMPORTED_MODULE_26__["ProductCardsComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["SidebarComponent"],
                _looks_add_add_component__WEBPACK_IMPORTED_MODULE_28__["AddComponent"],
                _partials_small_product_cards_small_product_cards_component__WEBPACK_IMPORTED_MODULE_29__["SmallProductCardsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["Routing"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
            ],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"],
                _services__WEBPACK_IMPORTED_MODULE_19__["AlertService"],
                _services__WEBPACK_IMPORTED_MODULE_19__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_19__["UserService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _helpers__WEBPACK_IMPORTED_MODULE_18__["JwtInterceptor"],
                    multi: true
                },
                _services__WEBPACK_IMPORTED_MODULE_19__["ProductService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-create/product-create.component */ "./src/app/product-create/product-create.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product-edit/product-edit.component.ts");
/* harmony import */ var _brands_a_z_a_z_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brands/a-z/a-z.component */ "./src/app/brands/a-z/a-z.component.ts");
/* harmony import */ var _products_by_brand_products_by_brand_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-by-brand/products-by-brand.component */ "./src/app/products-by-brand/products-by-brand.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _brands_most_products_most_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./brands/most-products/most-products.component */ "./src/app/brands/most-products/most-products.component.ts");
/* harmony import */ var _stash_stash_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stash/stash.component */ "./src/app/stash/stash.component.ts");










var appRoutes = [
    {
        path: 'products',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_1__["ProductComponent"],
        data: { title: 'Product List' }
    },
    {
        path: 'product/:id',
        component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"],
        data: { title: 'Product Details' }
    },
    {
        path: 'products/add',
        component: _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_3__["ProductCreateComponent"],
        data: { title: 'Create Product' }
    },
    {
        path: 'product-edit/:id',
        component: _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_4__["ProductEditComponent"],
        data: { title: 'Edit Product' }
    },
    {
        path: 'brands',
        component: _brands_a_z_a_z_component__WEBPACK_IMPORTED_MODULE_5__["AZComponent"],
        data: { title: 'Brands Available' }
    },
    {
        path: 'brands/a-z',
        component: _brands_a_z_a_z_component__WEBPACK_IMPORTED_MODULE_5__["AZComponent"],
        data: { title: 'Brands Available - A to Z' }
    },
    {
        path: 'brands/by-count',
        component: _brands_most_products_most_products_component__WEBPACK_IMPORTED_MODULE_8__["MostProductsComponent"],
        data: { title: 'Brands Available - By Product Count' }
    },
    {
        path: 'brand/:brand',
        component: _products_by_brand_products_by_brand_component__WEBPACK_IMPORTED_MODULE_6__["ProductsByBrandComponent"],
        data: { title: 'Viewing your favourite brand' }
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        data: { title: 'Register with Makeup Mosaic' }
    },
    {
        path: 'stash',
        component: _stash_stash_component__WEBPACK_IMPORTED_MODULE_9__["StashComponent"],
        data: { title: "Aww yeah lookit all my stuff" }
    },
    {
        path: 'stash/:username',
        component: _stash_stash_component__WEBPACK_IMPORTED_MODULE_9__["StashComponent"],
        data: { title: "Aww yeah lookit all my stuff" }
    },
    {
        path: '',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_1__["ProductComponent"]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/brands/a-z/a-z.component.html":
/*!***********************************************!*\
  !*** ./src/app/brands/a-z/a-z.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Product Brands - A to Z</h1>\n\n<div>\n   <app-sort-menu></app-sort-menu>\n   <ul class=\"brand-list\">\n         <li *ngFor=\"let brand of brands\">\n            <a routerLink=\"/brand/{{brand._id}}\">\n               <span *ngIf=\"brand._id\" >{{brand._id | titlecase}}</span><span *ngIf=\"!brand._id\">None</span>\n               <span class=\"count\" *ngIf=\"brand.count\"> - {{brand.count}} products</span>\n            </a>\n         </li>\n      </ul>\n</div>"

/***/ }),

/***/ "./src/app/brands/a-z/a-z.component.scss":
/*!***********************************************!*\
  !*** ./src/app/brands/a-z/a-z.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5kcy9hLXovYS16LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/brands/a-z/a-z.component.ts":
/*!*********************************************!*\
  !*** ./src/app/brands/a-z/a-z.component.ts ***!
  \*********************************************/
/*! exports provided: AZComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AZComponent", function() { return AZComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/product.service */ "./src/app/_services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AZComponent = (function () {
    function AZComponent(http, route, productService) {
        this.http = http;
        this.route = route;
        this.productService = productService;
    }
    AZComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAllBrandsAtoZ().subscribe(function (data) {
            _this.brands = data;
        });
    };
    AZComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-a-z',
            template: __webpack_require__(/*! ./a-z.component.html */ "./src/app/brands/a-z/a-z.component.html"),
            styles: [__webpack_require__(/*! ./a-z.component.scss */ "./src/app/brands/a-z/a-z.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], AZComponent);
    return AZComponent;
}());



/***/ }),

/***/ "./src/app/brands/most-products/most-products.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/brands/most-products/most-products.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Product Brands - Most Products</h1>\n\n<div>\n   <app-sort-menu></app-sort-menu>\n   <ul class=\"brand-list\">\n         <li *ngFor=\"let brand of brands\">\n            <a routerLink=\"/brand/{{brand._id}}\">\n               <span *ngIf=\"brand._id\" >{{brand._id | titlecase}}</span><span *ngIf=\"!brand._id\">None</span>\n               <span class=\"count\" *ngIf=\"brand.count\"> - {{brand.count}} products</span>\n            </a>\n         </li>\n      </ul>\n</div>"

/***/ }),

/***/ "./src/app/brands/most-products/most-products.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/brands/most-products/most-products.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5kcy9tb3N0LXByb2R1Y3RzL21vc3QtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/brands/most-products/most-products.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/brands/most-products/most-products.component.ts ***!
  \*****************************************************************/
/*! exports provided: MostProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostProductsComponent", function() { return MostProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/product.service */ "./src/app/_services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MostProductsComponent = (function () {
    function MostProductsComponent(http, route, productService) {
        this.http = http;
        this.route = route;
        this.productService = productService;
    }
    MostProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAllBrandsByCount().subscribe(function (data) {
            _this.brands = data;
        });
    };
    MostProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-most-products',
            template: __webpack_require__(/*! ./most-products.component.html */ "./src/app/brands/most-products/most-products.component.html"),
            styles: [__webpack_require__(/*! ./most-products.component.scss */ "./src/app/brands/most-products/most-products.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], MostProductsComponent);
    return MostProductsComponent;
}());



/***/ }),

/***/ "./src/app/brands/partials/sort-menu/sort-menu.component.html":
/*!********************************************************************!*\
  !*** ./src/app/brands/partials/sort-menu/sort-menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sorting\">\n   <div>\n      Sort By: <a routerLink=\"/brands/a-z\">A-Z</a> | <a routerLink=\"/brands/by-count\">Most Products</a>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/brands/partials/sort-menu/sort-menu.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/brands/partials/sort-menu/sort-menu.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5kcy9wYXJ0aWFscy9zb3J0LW1lbnUvc29ydC1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/brands/partials/sort-menu/sort-menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/brands/partials/sort-menu/sort-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: SortMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortMenuComponent", function() { return SortMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortMenuComponent = (function () {
    function SortMenuComponent() {
    }
    SortMenuComponent.prototype.ngOnInit = function () {
    };
    SortMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sort-menu',
            template: __webpack_require__(/*! ./sort-menu.component.html */ "./src/app/brands/partials/sort-menu/sort-menu.component.html"),
            styles: [__webpack_require__(/*! ./sort-menu.component.scss */ "./src/app/brands/partials/sort-menu/sort-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SortMenuComponent);
    return SortMenuComponent;
}());



/***/ }),

/***/ "./src/app/format-strings.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/format-strings.pipe.ts ***!
  \****************************************/
/*! exports provided: FormatCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatCategory", function() { return FormatCategory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var FormatCategory = (function () {
    function FormatCategory() {
    }
    FormatCategory.prototype.transform = function (value) {
        var result = value.replace(' ', '-').replace('&', '').replace(' ', '');
        return result;
    };
    FormatCategory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'formatCategory' })
    ], FormatCategory);
    return FormatCategory;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <div class=\"row\">\n        <div class=\"logo\">\n          <span>M</span>akeup <span>M</span>osaic\n        </div>\n        <div class=\"menu\">\n            <app-menu></app-menu>\n        </div>\n        <div class=\"login\">\n            <app-login></app-login>\n        </div>\n      </div>\n    </div>\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .row .logo, .container .row .login, .container .row .menu {\n  vertical-align: bottom;\n  height: 100%;\n  padding: 5px;\n  float: left;\n}\n.container .row .logo, .container .row .menu {\n  width: 30%;\n}\n.container .row .login {\n  width: 40%;\n}\n.container .row .logo {\n  color: white;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  font-size: 40px;\n}\n.container .row .logo span {\n  font-size: 80px;\n  font-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXVyYXR1Y2tlci9EZXZlbG9wbWVudC9tYWtldXAtbW9zYWljL21ha2V1cC1tb3NhaWMvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlNO0VBQ0csdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7Q0NIUjtBRE1LO0VBQ0csV0FBQTtDQ0pSO0FET0s7RUFDRyxXQUFBO0NDTFI7QURRSztFQUNHLGFBQUE7RUFDQSx1RUFBQTtFQUNBLGdCQUFBO0NDTlI7QURRUTtFQUNHLGdCQUFBO0VBQ0EsaUJBQUE7Q0NOWCIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNvbnRhaW5lciB7XG4gICAucm93IHtcbiAgICAgIC5sb2dvLCAubG9naW4sIC5tZW51IHtcbiAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cblxuICAgICAgLmxvZ28sIC5tZW51IHtcbiAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICB9XG5cbiAgICAgIC5sb2dpbiB7XG4gICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgfVxuXG4gICAgICAubG9nbyB7XG4gICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuXG4gICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vbmU7XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG59IiwiLmNvbnRhaW5lciAucm93IC5sb2dvLCAuY29udGFpbmVyIC5yb3cgLmxvZ2luLCAuY29udGFpbmVyIC5yb3cgLm1lbnUge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uY29udGFpbmVyIC5yb3cgLmxvZ28sIC5jb250YWluZXIgLnJvdyAubWVudSB7XG4gIHdpZHRoOiAzMCU7XG59XG4uY29udGFpbmVyIC5yb3cgLmxvZ2luIHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5jb250YWluZXIgLnJvdyAubG9nbyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgXCJBcmlhbCBOYXJyb3cgQm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDQwcHg7XG59XG4uY29udGFpbmVyIC5yb3cgLmxvZ28gc3BhbiB7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgZm9udC1zdHlsZTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/header/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n   <div *ngIf=\"!isLoggedIn\" class=\"login-form login\">\n      <div>\n         {{errorMessage}}\n         <form name=\"loginForm\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n               <label for=\"username\">Username</label><br/>\n               <input type=\"text\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required /><br/>\n               <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n               <label for=\"password\">Password</label><br/>\n               <input type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required /><br/>\n               <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n            </div>\n            <br/>\n            <div class=\"form-group\">\n               <button [disabled]=\"loading\" class=\"button\">Login</button>\n               <span *ngIf=\"loading\"></span> \n               <a [routerLink]=\"['/register']\">Register</a>\n            </div>\n         </form>\n      </div>\n   </div>\n   <div *ngIf=\"isLoggedIn\">\n      <span>{{welcomeMessage}}</span> |  <a (click)=\"logout()\">Log out</a>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/header/login/login.component.scss":
/*!***************************************************!*\
  !*** ./src/app/header/login/login.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  padding: 10px;\n  text-align: right;\n  text-align: bottom;\n  height: 100%;\n  color: white;\n}\n.login .form-group {\n  float: left;\n  padding: 10px 5px;\n}\n.login .form-group label {\n  float: left;\n}\n.login .form-group input[text] {\n  float: left;\n  border: none;\n  color: black;\n}\n.login .form-group .button {\n  margin: 5px;\n  margin-left: 10px;\n}\na, span {\n  color: white;\n  padding: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXVyYXR1Y2tlci9EZXZlbG9wbWVudC9tYWtldXAtbW9zYWljL21ha2V1cC1tb3NhaWMvc3JjL2FwcC9oZWFkZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNHLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7Q0NBRjtBREVFO0VBQ0csWUFBQTtFQUNBLGtCQUFBO0NDQUw7QURFSztFQUNHLFlBQUE7Q0NBUjtBREdLO0VBQ0csWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0NDRFI7QURJSztFQUNHLFlBQUE7RUFDQSxrQkFBQTtDQ0ZSO0FEUUQ7RUFDUyxhQUFBO0VBQ0EsZUFBQTtDQ0xSIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubG9naW4ge1xuICAgcGFkZGluZzogMTBweDtcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgdGV4dC1hbGlnbjogYm90dG9tO1xuICAgaGVpZ2h0OiAxMDAlO1xuICAgY29sb3I6IHdoaXRlO1xuXG4gICAuZm9ybS1ncm91cCB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuXG4gICAgICBsYWJlbCB7XG4gICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cblxuICAgICAgaW5wdXRbdGV4dF17XG4gICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cblxuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBcbiAgIH1cbn1cbmEsIHNwYW4ge1xuICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICB9IiwiLmxvZ2luIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtYWxpZ246IGJvdHRvbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubG9naW4gLmZvcm0tZ3JvdXAge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTBweCA1cHg7XG59XG4ubG9naW4gLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBmbG9hdDogbGVmdDtcbn1cbi5sb2dpbiAuZm9ybS1ncm91cCBpbnB1dFt0ZXh0XSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5sb2dpbiAuZm9ybS1ncm91cCAuYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5hLCBzcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/header/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(route, router, authGuard, authenticationService, http, alertService) {
        this.route = route;
        this.router = router;
        this.authGuard = authGuard;
        this.authenticationService = authenticationService;
        this.http = http;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.authGuard.isLoggedIn();
        if (this.isLoggedIn)
            this.welcomeMessage = "Welcome, " + localStorage.getItem("username");
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.loggedInUser = data;
            if (_this.loggedInUser.length > 0) {
                localStorage.setItem("currentUser", JSON.stringify(_this.loggedInUser));
                localStorage.setItem("username", _this.model.username);
                _this.isLoggedIn = true;
                _this.errorMessage = "";
                //You might think it would make more sense to use the user object we just retrieved.  Well, it doesn't like it when I type the result so it's a User object.  It also didn't like it when I assumed the type because it didn't know it was a User.  Rendered fine on the browser, just VS Code complains.  That's too much complaining from everything so this is what it is. 
                _this.welcomeMessage = "Welcome, " + _this.model.username;
            }
            else {
                _this.isLoggedIn = false;
                _this.errorMessage = "Something has gone wrong, please try again";
                _this.loading = false;
            }
        }, function (error) {
            _this.isLoggedIn = false;
            _this.errorMessage = "Invalid username or password";
            _this.loading = false;
            console.log(error);
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.isLoggedIn = false;
        this.welcomeMessage = "";
        this.errorMessage = "";
        this.loading = false;
        this.model.username = "";
        this.model.password = "";
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/header/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/header/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/header/menu/menu.component.html":
/*!*************************************************!*\
  !*** ./src/app/header/menu/menu.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n   <li>\n      <a [routerLink]=\"['/']\">Home</a>\n   </li>\n   <li>\n      <a [routerLink]=\"['/brands']\">Brands</a>\n   </li>\n   <li>\n      <a [routerLink]=\"['/featured-products']\">Featured Products</a>\n   </li>\n   \n   <li>\n      <a [routerLink]=\"['/stash']\">My Collection</a>\n   </li>\n</ul>"

/***/ }),

/***/ "./src/app/header/menu/menu.component.scss":
/*!*************************************************!*\
  !*** ./src/app/header/menu/menu.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li {\n  list-style: none;\n  float: left;\n  margin: 0 5px;\n}\nul li a {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXVyYXR1Y2tlci9EZXZlbG9wbWVudC9tYWtldXAtbW9zYWljL21ha2V1cC1tb3NhaWMvc3JjL2FwcC9oZWFkZXIvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVHO0VBQ0csaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtDQ0RMO0FER0s7RUFDRyxhQUFBO0NDRFIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG51bCB7XG4gICBsaSB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBtYXJnaW46IDAgNXB4O1xuXG4gICAgICBhIHtcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgIH1cbn0iLCJ1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgNXB4O1xufVxudWwgbGkgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/header/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.brands = {};
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/header/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/header/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/looks/add/add.component.html":
/*!**********************************************!*\
  !*** ./src/app/looks/add/add.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add works!\n</p>\n"

/***/ }),

/***/ "./src/app/looks/add/add.component.scss":
/*!**********************************************!*\
  !*** ./src/app/looks/add/add.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvb2tzL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/looks/add/add.component.ts":
/*!********************************************!*\
  !*** ./src/app/looks/add/add.component.ts ***!
  \********************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddComponent = (function () {
    function AddComponent() {
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/looks/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/looks/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/partials/brand-list/brand-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/partials/brand-list/brand-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"brand-list\">\n   <li *ngFor=\"let brand of brands\">\n      <a routerLink=\"/brand/{{brand._id}}\">\n         <span *ngIf=\"brand._id\" >{{brand._id | titlecase}}</span><span *ngIf=\"!brand._id\">None</span>\n         <span class=\"count\" *ngIf=\"brand.count\"> - {{brand.count}} products</span>\n      </a>\n   </li>\n</ul>"

/***/ }),

/***/ "./src/app/partials/brand-list/brand-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/partials/brand-list/brand-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li a {\n  font-size: larger;\n  font-weight: normal;\n}\n\n.count {\n  color: #666;\n  font-weight: lighter;\n  font-size: smaller;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXVyYXR1Y2tlci9EZXZlbG9wbWVudC9tYWtldXAtbW9zYWljL21ha2V1cC1tb3NhaWMvc3JjL2FwcC9wYXJ0aWFscy9icmFuZC1saXN0L2JyYW5kLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhcnRpYWxzL2JyYW5kLWxpc3QvYnJhbmQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNHLGtCQUFBO0VBQ0Esb0JBQUE7Q0NBRjs7QURHRDtFQUNHLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0NDQUYiLCJmaWxlIjoic3JjL2FwcC9wYXJ0aWFscy9icmFuZC1saXN0L2JyYW5kLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnVsIGxpIGEge1xuICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uY291bnQge1xuICAgY29sb3I6ICM2NjY7XG4gICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbn0iLCJ1bCBsaSBhIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5jb3VudCB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/partials/brand-list/brand-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/partials/brand-list/brand-list.component.ts ***!
  \*************************************************************/
/*! exports provided: BrandListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandListComponent", function() { return BrandListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/product.service */ "./src/app/_services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrandListComponent = (function () {
    function BrandListComponent(http, route, productService) {
        this.http = http;
        this.route = route;
        this.productService = productService;
    }
    BrandListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAllBrandsByCount().subscribe(function (data) {
            _this.brands = data;
        });
    };
    BrandListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brand-list',
            template: __webpack_require__(/*! ./brand-list.component.html */ "./src/app/partials/brand-list/brand-list.component.html"),
            styles: [__webpack_require__(/*! ./brand-list.component.scss */ "./src/app/partials/brand-list/brand-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], BrandListComponent);
    return BrandListComponent;
}());



/***/ }),

/***/ "./src/app/partials/product-cards/product-cards.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/partials/product-cards/product-cards.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let product of products\" class=\"image-mosaic\">\n   <a [routerLink]=\"['/product/', product._id]\">\n      <div *ngFor=\"let image of product.images\" class=\"{{product.sub_category | formatCategory | lowercase}} {{product.category | formatCategory | lowercase}}\">\n         <img src=\"{{image.url}}\" />\n      </div>\n   </a>\n   <br />\n   <div class=\"description\">\n      <a [routerLink]=\"['/brand/', product.brand]\">\n         <strong>{{product.brand | uppercase}}</strong><br />\n      </a>\n      <a [routerLink]=\"['/product/', product._id]\">\n         <span>{{product.name | titlecase}}</span>\n      </a>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/partials/product-cards/product-cards.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/partials/product-cards/product-cards.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-mosaic {\n  width: 270px;\n  float: left;\n  display: block;\n  overflow: hidden;\n  position: relative;\n  margin: 10px;\n  padding: 10px;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);\n}\n.image-mosaic img {\n  max-width: 100%;\n  max-height: 500px;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n}\n.image-mosaic span {\n  color: #555;\n  font-size: small;\n}\n.image-mosaic .description {\n  position: absolute;\n  width: 100%;\n  min-height: 50px;\n  text-align: center;\n  bottom: 5px;\n  left: 0;\n  background-color: white;\n  opacity: 0.8;\n  padding: 5px;\n}\n.image-mosaic:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXVyYXR1Y2tlci9EZXZlbG9wbWVudC9tYWtldXAtbW9zYWljL21ha2V1cC1tb3NhaWMvc3JjL2FwcC9wYXJ0aWFscy9wcm9kdWN0LWNhcmRzL3Byb2R1Y3QtY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhcnRpYWxzL3Byb2R1Y3QtY2FyZHMvcHJvZHVjdC1jYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNHLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyRUFBQTtDQ0FGO0FER0U7RUFDRyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtDQ0RMO0FESUU7RUFDRyxZQUFBO0VBQ0EsaUJBQUE7Q0NGTDtBREtFO0VBQ0csbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtDQ0hMO0FET0Q7RUFDRyw0Q0FBQTtDQ0pGIiwiZmlsZSI6InNyYy9hcHAvcGFydGlhbHMvcHJvZHVjdC1jYXJkcy9wcm9kdWN0LWNhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW1hZ2UtbW9zYWljICB7XG4gICB3aWR0aDogMjcwcHg7XG4gICBmbG9hdDogbGVmdDtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIG1hcmdpbjogMTBweDtcbiAgIHBhZGRpbmc6IDEwcHg7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoYmxhY2ssIDAuMyksIDAgMTVweCAxMnB4IHJnYmEoYmxhY2ssIDAuMik7XG4gICBcblxuICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgIH1cblxuICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICB9XG5cbiAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3R0b206IDVweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgIH1cbn1cblxuLmltYWdlLW1vc2FpYzpob3ZlciB7XG4gICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4vLyAucmVtb3ZlcnMge1xuLy8gICAgd2lkdGg6IDUwcHg7XG4vLyB9XG5cbi8vIC5leWUtbWFrZXVwIHtcbi8vICAgIHdpZHRoOiAyMDBweDtcbi8vIH1cblxuLy8gLmJydXNoZXMtYXBwbGljYXRvcnMsIC5leWVicm93cywgLmV5ZWxpbmVyLCAubWFzY2FyYSB7XG4vLyAgICB3aWR0aDogMTAwcHg7XG4vLyAgICBoZWlnaHQ6IDI1MHB4O1xuXG5cbi8vICAgIGltZyB7XG4vLyAgICAgICBsZWZ0OiAtMjVweDtcbi8vICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgIH1cbi8vIH1cblxuLy8gLmxpcHMsIC5saXAge1xuLy8gICAgd2lkdGg6IDEyNXB4O1xuLy8gICAgaGVpZ2h0OiAyMDBweDtcblxuLy8gICAgaW1nIHtcbi8vICAgICAgIGxlZnQ6IC0yNXB4O1xuLy8gICAgICAgd2lkdGg6IDIwMHB4O1xuLy8gICAgfVxuLy8gfVxuXG4vLyAuY2MtY3JlYW1zLCAuY29uY2VhbGVyLCAuYmItY3JlYW1zLCAudGludGVkLW1vaXN0dXJpc2VyLCAucHJpbWVyLCAuZm91bmRhdGlvbiwgLnRvb2xze1xuLy8gICAgd2lkdGg6IDE1MHB4O1xuLy8gICAgaGVpZ2h0OiAyMDBweDtcblxuLy8gICAgaW1nIHtcbi8vICAgICAgIGxlZnQ6IC0yNXB4O1xuLy8gICAgICAgd2lkdGg6IDIwMHB4O1xuLy8gICAgfVxuLy8gfVxuXG4vLyAuc2tpbmNhcmUsIC5iYXRoLWJvZHljYXJlLCAuZXllc2hhZG93cywgLmJhdGgtc2hvd2VyLCAuYmx1c2hlciwgIC5icm9uemVyLCAucG93ZGVyLCAuaGlnaGxpZ2h0ZXIsIC5mcmFncmFuY2V7XG4vLyAgICB3aWR0aDogMjAwcHg7XG4vLyAgICBoZWlnaHQ6IDIwMHB4O1xuXG4vLyAgICBpbWcge1xuLy8gICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgfVxuLy8gfSIsIi5pbWFnZS1tb3NhaWMge1xuICB3aWR0aDogMjcwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmltYWdlLW1vc2FpYyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5pbWFnZS1tb3NhaWMgc3BhbiB7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuLmltYWdlLW1vc2FpYyAuZGVzY3JpcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvdHRvbTogNXB4O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC44O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5pbWFnZS1tb3NhaWM6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/partials/product-cards/product-cards.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/partials/product-cards/product-cards.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardsComponent", function() { return ProductCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductCardsComponent = (function () {
    function ProductCardsComponent() {
    }
    ProductCardsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductCardsComponent.prototype, "products", void 0);
    ProductCardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-cards',
            template: __webpack_require__(/*! ./product-cards.component.html */ "./src/app/partials/product-cards/product-cards.component.html"),
            styles: [__webpack_require__(/*! ./product-cards.component.scss */ "./src/app/partials/product-cards/product-cards.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductCardsComponent);
    return ProductCardsComponent;
}());



/***/ }),

/***/ "./src/app/partials/small-product-cards/small-product-cards.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/partials/small-product-cards/small-product-cards.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let product of products\" class=\"image-mosaic\">\n   <a [routerLink]=\"['/product/', product._id]\" *ngFor=\"let image of product.images\" class=\"{{product.sub_category | formatCategory | lowercase}} {{product.category | formatCategory | lowercase}}\">\n      <img src=\"{{image.url}}\" />\n   </a>\n   <br />\n   <div class=\"description\">\n      \n      <a [routerLink]=\"['/product/', product._id]\">\n         <span>{{product.name | titlecase}}</span>\n      </a>\n   </div>\n   <div class=\"add-product\">\n      <a (click)=\"addProductToCollection(product._id)\">+</a>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/partials/small-product-cards/small-product-cards.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/partials/small-product-cards/small-product-cards.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-mosaic {\n  height: 220px;\n  min-width: 120px;\n  float: left;\n  display: block;\n  overflow: hidden;\n  position: relative;\n  margin: 10px;\n  padding: 10px;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);\n}\n.image-mosaic img {\n  max-width: 100%;\n  max-height: 100%;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n}\n.image-mosaic span {\n  color: #555;\n  font-size: small;\n}\n.image-mosaic .description {\n  position: absolute;\n  width: 100%;\n  min-height: 50px;\n  text-align: center;\n  bottom: 5px;\n  left: 0;\n  background-color: white;\n  opacity: 0.8;\n}\n.image-mosaic .description a {\n  padding: 2px;\n  line-height: 10px;\n  font-size: 10px;\n}\n.image-mosaic:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.add-product {\n  display: block;\n  position: absolute;\n  top: 90px;\n}\n.add-product a {\n  font-size: 30px;\n  color: indigo;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXVyYXR1Y2tlci9EZXZlbG9wbWVudC9tYWtldXAtbW9zYWljL21ha2V1cC1tb3NhaWMvc3JjL2FwcC9wYXJ0aWFscy9zbWFsbC1wcm9kdWN0LWNhcmRzL3NtYWxsLXByb2R1Y3QtY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhcnRpYWxzL3NtYWxsLXByb2R1Y3QtY2FyZHMvc21hbGwtcHJvZHVjdC1jYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNHLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJFQUFBO0NDQUY7QURFRTtFQUNHLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0NDQUw7QURHRTtFQUNHLFlBQUE7RUFDQSxpQkFBQTtDQ0RMO0FESUU7RUFDRyxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7Q0NGTDtBREdLO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7Q0NETDtBRE1EO0VBQ0csNENBQUE7Q0NIRjtBRE9EO0VBQ0csZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtDQ0pGO0FETUU7RUFDRyxnQkFBQTtFQUNBLGNBQUE7Q0NKTCIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL3NtYWxsLXByb2R1Y3QtY2FyZHMvc21hbGwtcHJvZHVjdC1jYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmltYWdlLW1vc2FpYyAge1xuICAgaGVpZ2h0OiAyMjBweDtcbiAgIG1pbi13aWR0aDogMTIwcHg7XG4gICBmbG9hdDogbGVmdDtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIG1hcmdpbjogMTBweDtcbiAgIHBhZGRpbmc6IDEwcHg7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoYmxhY2ssIDAuMyksIDAgMTVweCAxMnB4IHJnYmEoYmxhY2ssIDAuMik7XG5cbiAgIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgIH1cblxuICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICB9XG5cbiAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3R0b206IDVweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIGEge1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICB9XG4gICB9XG59XG5cbi5pbWFnZS1tb3NhaWM6aG92ZXIge1xuICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuXG4uYWRkLXByb2R1Y3Qge1xuICAgZGlzcGxheTogYmxvY2s7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB0b3A6IDkwcHg7IFxuXG4gICBhIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIGNvbG9yOiBpbmRpZ287XG4gICB9XG59XG5cbiIsIi5pbWFnZS1tb3NhaWMge1xuICBoZWlnaHQ6IDIyMHB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDE5cHggMzhweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMTVweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5pbWFnZS1tb3NhaWMgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5pbWFnZS1tb3NhaWMgc3BhbiB7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuLmltYWdlLW1vc2FpYyAuZGVzY3JpcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvdHRvbTogNXB4O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC44O1xufVxuLmltYWdlLW1vc2FpYyAuZGVzY3JpcHRpb24gYSB7XG4gIHBhZGRpbmc6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmltYWdlLW1vc2FpYzpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5hZGQtcHJvZHVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTBweDtcbn1cbi5hZGQtcHJvZHVjdCBhIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogaW5kaWdvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/partials/small-product-cards/small-product-cards.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/partials/small-product-cards/small-product-cards.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SmallProductCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallProductCardsComponent", function() { return SmallProductCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/user.service */ "./src/app/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SmallProductCardsComponent = (function () {
    function SmallProductCardsComponent(userService) {
        this.userService = userService;
    }
    SmallProductCardsComponent.prototype.ngOnInit = function () {
    };
    SmallProductCardsComponent.prototype.addProductToCollection = function (id) {
        this.userService.addProductToCollection(localStorage.getItem("username"), id).subscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SmallProductCardsComponent.prototype, "products", void 0);
    SmallProductCardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-small-product-cards',
            template: __webpack_require__(/*! ./small-product-cards.component.html */ "./src/app/partials/small-product-cards/small-product-cards.component.html"),
            styles: [__webpack_require__(/*! ./small-product-cards.component.scss */ "./src/app/partials/small-product-cards/small-product-cards.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], SmallProductCardsComponent);
    return SmallProductCardsComponent;
}());



/***/ }),

/***/ "./src/app/product-create/product-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-create/product-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Product</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveProduct()\" #productForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Website</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.website\" name=\"website\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Category</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.category\" name=\"category\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Sub-Category</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.sub_category\" name=\"sub_category\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Brand</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"product.brand\" name=\"brand\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!productForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product-create/product-create.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/product-create/product-create.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtY3JlYXRlL3Byb2R1Y3QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/product-create/product-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-create/product-create.component.ts ***!
  \************************************************************/
/*! exports provided: ProductCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function() { return ProductCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCreateComponent = (function () {
    function ProductCreateComponent(http, router) {
        this.http = http;
        this.router = router;
        this.product = {};
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
    };
    ProductCreateComponent.prototype.saveProduct = function () {
        var _this = this;
        this.http.post('/product', this.product)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/product-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    ProductCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-create',
            template: __webpack_require__(/*! ./product-create.component.html */ "./src/app/product-create/product-create.component.html"),
            styles: [__webpack_require__(/*! ./product-create.component.scss */ "./src/app/product-create/product-create.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n   <div class=\"image-container\">\n      <div *ngFor=\"let image of product.images\">\n         <img src=\"{{image.url}}\" />\n      </div>\n   </div>\n   <div class=\"product-info\">\n      <h1>{{ product.name }}</h1>\n\n      <a routerLink=\"/brand/{{product.brand}}\">{{product.brand}}</a>\n      <br /> Category: {{product.category}}\n      <br /> Sub Category: {{product.sub_category}}\n      <br /> Price: {{product.price}}\n      <br /> <a href=\"{{product.affiliate_link}}\">Affiliate Link</a>\n\n      <br/><br/>\n      <a (click)=\"addProductToCollection()\">+ Add to your collection</a>\n   </div>\n\n   <div class=\"related-products-category clear\">\n      <h2> Other {{product.brand | titlecase }} Products in This Category: </h2>\n      <app-small-product-cards [products]=\"relatedProductsCategory\"></app-small-product-cards>\n   </div>\n\n   <div class=\"related-products\">\n      <h2> Other {{product.brand | titlecase }} Products: </h2>\n      <app-small-product-cards [products]=\"relatedProducts\"></app-small-product-cards>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-container {\n  width: 30%;\n  max-width: 500px;\n  float: left;\n}\n.image-container img {\n  max-width: 100%;\n}\n.product-info {\n  width: 70%;\n  float: right;\n}\n.product-info h1 {\n  font-size: large;\n  font-weight: bold;\n}\n.related-products, .clear {\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXVyYXR1Y2tlci9EZXZlbG9wbWVudC9tYWtldXAtbW9zYWljL21ha2V1cC1tb3NhaWMvc3JjL2FwcC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRyxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0NDQUY7QURDRTtFQUNHLGdCQUFBO0NDQ0w7QURHRDtFQUNHLFdBQUE7RUFDQSxhQUFBO0NDQUY7QURFRTtFQUNHLGlCQUFBO0VBQ0Esa0JBQUE7Q0NBTDtBRElEO0VBQ0csWUFBQTtDQ0RGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbWFnZS1jb250YWluZXIge1xuICAgd2lkdGg6IDMwJTtcbiAgIG1heC13aWR0aDogNTAwcHg7XG4gICBmbG9hdDogbGVmdDtcbiAgIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICB9XG59XG5cbi5wcm9kdWN0LWluZm8ge1xuICAgd2lkdGg6IDcwJTtcbiAgIGZsb2F0OiByaWdodDtcblxuICAgaDEge1xuICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgfVxufVxuXG4ucmVsYXRlZC1wcm9kdWN0cywgLmNsZWFyIHtcbiAgIGNsZWFyOiBib3RoO1xufSIsIi5pbWFnZS1jb250YWluZXIge1xuICB3aWR0aDogMzAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZHVjdC1pbmZvIHtcbiAgd2lkdGg6IDcwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnByb2R1Y3QtaW5mbyBoMSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmVsYXRlZC1wcm9kdWN0cywgLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG59Il19 */"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/product.service */ "./src/app/_services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailComponent = (function () {
    function ProductDetailComponent(router, route, http, userService, productService) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.userService = userService;
        this.productService = productService;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProductById(this.route.snapshot.params['id']).subscribe(function (data) {
            _this.product = data;
            _this.productId = _this.product._id;
            _this.productService.getProductsByBrand(_this.product.brand).subscribe(function (data) {
                _this.relatedProducts = data;
            });
            _this.productService.getProductsByCategory(_this.product.sub_category).subscribe(function (data) {
                _this.relatedProductsCategory = data;
            });
        });
    };
    ProductDetailComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.http.delete('/product/' + id)
            .subscribe(function (res) {
            _this.router.navigate(['/products']);
        }, function (err) {
            console.log(err);
        });
    };
    ProductDetailComponent.prototype.addProductToCollection = function () {
        this.userService.addProductToCollection(localStorage.getItem("username"), this.productId).subscribe();
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/product-detail/product-detail.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-edit/product-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Product</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updateProduct(product._id)\" #productForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">ISBN</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.isbn\" name=\"isbn\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Title</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.title\" name=\"title\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Author</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.author\" name=\"author\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Published Year</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"product.published_year\" name=\"published_year\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Publisher</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.publisher\" name=\"publisher\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!productForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZWRpdC9wcm9kdWN0LWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductEditComponent = (function () {
    function ProductEditComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.product = {};
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        this.getProduct(this.route.snapshot.params['id']);
    };
    ProductEditComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/product/' + id).subscribe(function (data) {
            _this.product = data;
        });
    };
    ProductEditComponent.prototype.updateProduct = function (id) {
        var _this = this;
        this.product.updated_date = Date.now();
        this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/product/' + id, this.product)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/product-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    ProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.scss */ "./src/app/product-edit/product-edit.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <h1>Product List\n      <a [routerLink]=\"['/products/add']\" class=\"btn btn-default btn-lg\">\n         <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n      </a>\n   </h1>\n   <table class=\"table\">\n      <thead>\n         <tr>\n            <th>Name</th>\n            <th>Category</th>\n            <th>Action</th>\n         </tr>\n      </thead>\n      <tbody>\n         <tr *ngFor=\"let product of products\">\n            <td>{{ product.name }}</td>\n            <td>{{ product.category }}</td>\n            <td>{{ product.sub_category}}</td>\n            <td>\n               <a [routerLink]=\"['/brand', product.brand]\">{{ product.brand }}</a>\n            </td>\n            <td>\n               <a [routerLink]=\"['/product/', product._id]\">More...</a>\n            </td>\n         </tr>\n      </tbody>\n   </table>\n</div>\n\n<div *ngFor=\"let product of products\" class=\"image-mosaic\">\n   <a [routerLink]=\"['/product/', product._id]\">\n      <div *ngFor=\"let image of product.images\">\n         <img src=\"{{image.url}}\" />\n      </div>\n   </a>\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.scss":
/*!************************************************!*\
  !*** ./src/app/product/product.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-mosaic {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXVyYXR1Y2tlci9EZXZlbG9wbWVudC9tYWtldXAtbW9zYWljL21ha2V1cC1tb3NhaWMvc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNHLFlBQUE7Q0NBRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmltYWdlLW1vc2FpYyB7XG4gICBmbG9hdDogbGVmdDtcbn0iLCIuaW1hZ2UtbW9zYWljIHtcbiAgZmxvYXQ6IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/product.service */ "./src/app/_services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = (function () {
    function ProductComponent(http, productService) {
        this.http = http;
        this.productService = productService;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAll().subscribe(function (data) {
            _this.products = data;
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/product/product.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/products-by-brand/products-by-brand.component.html":
/*!********************************************************************!*\
  !*** ./src/app/products-by-brand/products-by-brand.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <h1>Product List for {{brandTitle}}\n      <a [routerLink]=\"['/products/add']\" class=\"btn btn-default btn-lg\">\n         <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n      </a>\n   </h1>\n\n   <app-product-cards [products]=\"products\"></app-product-cards>\n</div>"

/***/ }),

/***/ "./src/app/products-by-brand/products-by-brand.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/products-by-brand/products-by-brand.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-mosaic {\n  width: 270px;\n  float: left;\n  display: block;\n  overflow: hidden;\n  position: relative;\n  margin: 10px;\n  padding: 10px;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);\n}\n.image-mosaic img {\n  max-width: 100%;\n  max-height: 500px;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n}\n.image-mosaic span {\n  color: #555;\n  font-size: small;\n}\n.image-mosaic .description {\n  position: absolute;\n  width: 100%;\n  min-height: 50px;\n  text-align: center;\n  bottom: 5px;\n  left: 0;\n  background-color: white;\n  opacity: 0.8;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXVyYXR1Y2tlci9EZXZlbG9wbWVudC9tYWtldXAtbW9zYWljL21ha2V1cC1tb3NhaWMvc3JjL2FwcC9wcm9kdWN0cy1ieS1icmFuZC9wcm9kdWN0cy1ieS1icmFuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMtYnktYnJhbmQvcHJvZHVjdHMtYnktYnJhbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRyxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkVBQUE7Q0NBRjtBREdFO0VBQ0csZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7Q0NETDtBRElFO0VBQ0csWUFBQTtFQUNBLGlCQUFBO0NDRkw7QURLRTtFQUNHLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7Q0NITCIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzLWJ5LWJyYW5kL3Byb2R1Y3RzLWJ5LWJyYW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW1hZ2UtbW9zYWljICB7XG4gICB3aWR0aDogMjcwcHg7XG4gICBmbG9hdDogbGVmdDtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIG1hcmdpbjogMTBweDtcbiAgIHBhZGRpbmc6IDEwcHg7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoYmxhY2ssIDAuMyksIDAgMTVweCAxMnB4IHJnYmEoYmxhY2ssIDAuMik7XG4gICBcblxuICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgIH1cblxuICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICB9XG5cbiAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3R0b206IDVweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgIH1cbn1cblxuLy8gLnJlbW92ZXJzIHtcbi8vICAgIHdpZHRoOiA1MHB4O1xuLy8gfVxuXG4vLyAuZXllLW1ha2V1cCB7XG4vLyAgICB3aWR0aDogMjAwcHg7XG4vLyB9XG5cbi8vIC5icnVzaGVzLWFwcGxpY2F0b3JzLCAuZXllYnJvd3MsIC5leWVsaW5lciwgLm1hc2NhcmEge1xuLy8gICAgd2lkdGg6IDEwMHB4O1xuLy8gICAgaGVpZ2h0OiAyNTBweDtcblxuXG4vLyAgICBpbWcge1xuLy8gICAgICAgbGVmdDogLTI1cHg7XG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICB9XG4vLyB9XG5cbi8vIC5saXBzLCAubGlwIHtcbi8vICAgIHdpZHRoOiAxMjVweDtcbi8vICAgIGhlaWdodDogMjAwcHg7XG5cbi8vICAgIGltZyB7XG4vLyAgICAgICBsZWZ0OiAtMjVweDtcbi8vICAgICAgIHdpZHRoOiAyMDBweDtcbi8vICAgIH1cbi8vIH1cblxuLy8gLmNjLWNyZWFtcywgLmNvbmNlYWxlciwgLmJiLWNyZWFtcywgLnRpbnRlZC1tb2lzdHVyaXNlciwgLnByaW1lciwgLmZvdW5kYXRpb24sIC50b29sc3tcbi8vICAgIHdpZHRoOiAxNTBweDtcbi8vICAgIGhlaWdodDogMjAwcHg7XG5cbi8vICAgIGltZyB7XG4vLyAgICAgICBsZWZ0OiAtMjVweDtcbi8vICAgICAgIHdpZHRoOiAyMDBweDtcbi8vICAgIH1cbi8vIH1cblxuLy8gLnNraW5jYXJlLCAuYmF0aC1ib2R5Y2FyZSwgLmV5ZXNoYWRvd3MsIC5iYXRoLXNob3dlciwgLmJsdXNoZXIsICAuYnJvbnplciwgLnBvd2RlciwgLmhpZ2hsaWdodGVyLCAuZnJhZ3JhbmNle1xuLy8gICAgd2lkdGg6IDIwMHB4O1xuLy8gICAgaGVpZ2h0OiAyMDBweDtcblxuLy8gICAgaW1nIHtcbi8vICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgIH1cbi8vIH0iLCIuaW1hZ2UtbW9zYWljIHtcbiAgd2lkdGg6IDI3MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDE5cHggMzhweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMTVweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5pbWFnZS1tb3NhaWMgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaW1hZ2UtbW9zYWljIHNwYW4ge1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cbi5pbWFnZS1tb3NhaWMgLmRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3R0b206IDVweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuODtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/products-by-brand/products-by-brand.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/products-by-brand/products-by-brand.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductsByBrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsByBrandComponent", function() { return ProductsByBrandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsByBrandComponent = (function () {
    function ProductsByBrandComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
    }
    ProductsByBrandComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.brandTitle = this.route.snapshot.params["brand"];
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/product/brands/' + this.brandTitle).subscribe(function (data) {
            _this.products = data;
        });
    };
    ProductsByBrandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-by-brand',
            template: __webpack_require__(/*! ./products-by-brand.component.html */ "./src/app/products-by-brand/products-by-brand.component.html"),
            styles: [__webpack_require__(/*! ./products-by-brand.component.scss */ "./src/app/products-by-brand/products-by-brand.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductsByBrandComponent);
    return ProductsByBrandComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n   <h2>Register</h2>\n   <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\n         <label for=\"firstName\">First Name</label>\n         <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n         <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\n         <label for=\"lastName\">Last Name</label>\n         <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n         <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n         <label for=\"username\">Username</label>\n         <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n         <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n         <label for=\"password\">Password</label>\n         <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n         <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n      </div>\n      <div class=\"form-group\">\n         <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n         <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n         />\n         <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n      </div>\n   </form>\n\n   <div>\n      <h2>Users:</h2>\n      \n      <div *ngFor=\"let user of users\">\n         {{user.username}} - {{user.firstName}} {{user.lastName}}: {{user.password}}, at {{ user.createdAt | date:'fullDate'}}\n      </div>\n   </div>\n\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/index */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(route, http, router, userService, alertService) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            console.log('Registration successful');
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { return _this.users = users; });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_index__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_index__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\"><ul>\n      <li>\n         <a [routerLink]=\"['/']\">Home</a>\n      </li>\n      <li>\n         <a [routerLink]=\"['/brands']\">Brands</a>\n      </li>\n      <li>\n         <a [routerLink]=\"['/featured-products']\">Featured Products</a>\n      </li>\n      \n      <li>\n         <a [routerLink]=\"['/stash']\">My Collection</a>\n      </li>\n   </ul>\n   \n</div>   "

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 4px;\n  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);\n  min-width: 200px;\n  margin-right: 10px;\n}\n.sidebar ul li {\n  list-style: none;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXVyYXR1Y2tlci9EZXZlbG9wbWVudC9tYWtldXAtbW9zYWljL21ha2V1cC1tb3NhaWMvc3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0NDQ0Y7QURDRTtFQUNHLGlCQUFBO0VBQ0EsYUFBQTtDQ0NMIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xuICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gICBtaW4td2lkdGg6IDIwMHB4O1xuICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICB1bCBsaSB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgcGFkZGluZzogNXB4O1xuXG4gICAgICBhIHtcbiAgICAgIH1cbiAgIH1cbn1cblxuIiwiLnNpZGViYXIge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uc2lkZWJhciB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/stash/stash.component.html":
/*!********************************************!*\
  !*** ./src/app/stash/stash.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <h1>My Stash\n   </h1>\n\n   <app-product-cards [products]=\"products\"></app-product-cards>\n</div>"

/***/ }),

/***/ "./src/app/stash/stash.component.scss":
/*!********************************************!*\
  !*** ./src/app/stash/stash.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXNoL3N0YXNoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/stash/stash.component.ts":
/*!******************************************!*\
  !*** ./src/app/stash/stash.component.ts ***!
  \******************************************/
/*! exports provided: StashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StashComponent", function() { return StashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/product.service */ "./src/app/_services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StashComponent = (function () {
    function StashComponent(productService) {
        this.productService = productService;
    }
    StashComponent.prototype.ngOnInit = function () {
        var _this = this;
        var username = localStorage.getItem('username');
        this.productService.getAllProductsForUser(username).subscribe(function (data) {
            _this.products = data;
        });
        ;
    };
    StashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stash',
            template: __webpack_require__(/*! ./stash.component.html */ "./src/app/stash/stash.component.html"),
            styles: [__webpack_require__(/*! ./stash.component.scss */ "./src/app/stash/stash.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], StashComponent);
    return StashComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://127.0.0.1:8000'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lauratucker/Development/makeup-mosaic/makeup-mosaic/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map