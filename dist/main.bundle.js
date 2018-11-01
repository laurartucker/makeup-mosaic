webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'alert',
            template: __webpack_require__("./src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__("./src/app/_directives/alert.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_component__["a"]; });



/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("./src/app/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FakeBackendInterceptor */
/* unused harmony export fakeBackendProvider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_materialize__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/materialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_dematerialize__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/dematerialize.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FakeBackendInterceptor = (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(null).mergeMap(function () {
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
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Username or password is incorrect');
                }
            }
            // get users
            if (request.url.endsWith('/api/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Unauthorised');
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
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Unauthorised');
                }
            }
            // create user
            if (request.url.endsWith('/api/users') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Username "' + newUser_1.username + '" is already taken');
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]({ status: 200 }));
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
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Unauthorised');
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jwt_interceptor__ = __webpack_require__("./src/app/_helpers/jwt.interceptor.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__jwt_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fake_backend__ = __webpack_require__("./src/app/_helpers/fake-backend.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/user/authenticate', { username: username, password: password });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("./src/app/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("./src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/_services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("./src/app/_services/product.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__product_service__["a"]; });






/***/ }),

/***/ "./src/app/_services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getAllBrandsAtoZ = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/product/getbrands/a-to-z');
    };
    ProductService.prototype.getAllBrandsByCount = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/product/getbrands/by-product-count');
    };
    ProductService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/product/');
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/user');
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/user/' + id);
    };
    UserService.prototype.create = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/user', user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/user/' + user.username, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/user/' + id);
    };
    UserService.prototype.addProductToCollection = function (username, productId) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/user/add-to-collection/', { username: username, productId: productId });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n   <app-header></app-header>\n</header>\n<div class=\"content-container\">\n   <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "header {\n  background-color: black;\n  color: white; }\n\n.content-container {\n  margin: 20px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_detail_product_detail_component__ = __webpack_require__("./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_create_product_create_component__ = __webpack_require__("./src/app/product-create/product-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_edit_product_edit_component__ = __webpack_require__("./src/app/product-edit/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_menu_menu_component__ = __webpack_require__("./src/app/header/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__products_by_brand_products_by_brand_component__ = __webpack_require__("./src/app/products-by-brand/products-by-brand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_login_login_component__ = __webpack_require__("./src/app/header/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives__ = __webpack_require__("./src/app/_directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards__ = __webpack_require__("./src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__helpers__ = __webpack_require__("./src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__brands_a_z_a_z_component__ = __webpack_require__("./src/app/brands/a-z/a-z.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__partials_brand_list_brand_list_component__ = __webpack_require__("./src/app/partials/brand-list/brand-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__format_strings_pipe__ = __webpack_require__("./src/app/format-strings.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__partials_product_list_grid_product_list_grid_component__ = __webpack_require__("./src/app/partials/product-list-grid/product-list-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__partials_product_list_text_product_list_text_component__ = __webpack_require__("./src/app/partials/product-list-text/product-list-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__featured_products_featured_products_component__ = __webpack_require__("./src/app/featured-products/featured-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__brands_sort_menu_sort_menu_component__ = __webpack_require__("./src/app/brands/sort-menu/sort-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__brands_most_products_most_products_component__ = __webpack_require__("./src/app/brands/most-products/most-products.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_8__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_9__product_create_product_create_component__["a" /* ProductCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_10__product_edit_product_edit_component__["a" /* ProductEditComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__header_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_13__products_by_brand_products_by_brand_component__["a" /* ProductsByBrandComponent */],
                __WEBPACK_IMPORTED_MODULE_14__header_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__directives__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_20__brands_a_z_a_z_component__["a" /* AZComponent */],
                __WEBPACK_IMPORTED_MODULE_21__partials_brand_list_brand_list_component__["a" /* BrandListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__format_strings_pipe__["a" /* FormatCategory */],
                __WEBPACK_IMPORTED_MODULE_23__partials_product_list_grid_product_list_grid_component__["a" /* ProductListGridComponent */],
                __WEBPACK_IMPORTED_MODULE_24__partials_product_list_text_product_list_text_component__["a" /* ProductListTextComponent */],
                __WEBPACK_IMPORTED_MODULE_25__featured_products_featured_products_component__["a" /* FeaturedProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__brands_sort_menu_sort_menu_component__["a" /* SortMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_27__brands_most_products_most_products_component__["a" /* MostProductsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__guards__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_19__services__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_19__services__["b" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_19__services__["d" /* UserService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_18__helpers__["a" /* JwtInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_19__services__["c" /* ProductService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail_component__ = __webpack_require__("./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_create_product_create_component__ = __webpack_require__("./src/app/product-create/product-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_edit_product_edit_component__ = __webpack_require__("./src/app/product-edit/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__brands_a_z_a_z_component__ = __webpack_require__("./src/app/brands/a-z/a-z.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_by_brand_products_by_brand_component__ = __webpack_require__("./src/app/products-by-brand/products-by-brand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__brands_most_products_most_products_component__ = __webpack_require__("./src/app/brands/most-products/most-products.component.ts");









var appRoutes = [
    {
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_1__product_product_component__["a" /* ProductComponent */],
        data: { title: 'Product List' }
    },
    {
        path: 'product/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
        data: { title: 'Product Details' }
    },
    {
        path: 'products/add',
        component: __WEBPACK_IMPORTED_MODULE_3__product_create_product_create_component__["a" /* ProductCreateComponent */],
        data: { title: 'Create Product' }
    },
    {
        path: 'product-edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__product_edit_product_edit_component__["a" /* ProductEditComponent */],
        data: { title: 'Edit Product' }
    },
    {
        path: 'brands',
        component: __WEBPACK_IMPORTED_MODULE_5__brands_a_z_a_z_component__["a" /* AZComponent */],
        data: { title: 'Brands Available' }
    },
    {
        path: 'brands/a-z',
        component: __WEBPACK_IMPORTED_MODULE_5__brands_a_z_a_z_component__["a" /* AZComponent */],
        data: { title: 'Brands Available - A to Z' }
    },
    {
        path: 'brands/by-count',
        component: __WEBPACK_IMPORTED_MODULE_8__brands_most_products_most_products_component__["a" /* MostProductsComponent */],
        data: { title: 'Brands Available - By Product Count' }
    },
    {
        path: 'brand/:brand',
        component: __WEBPACK_IMPORTED_MODULE_6__products_by_brand_products_by_brand_component__["a" /* ProductsByBrandComponent */],
        data: { title: 'Viewing your favourite brand' }
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */],
        data: { title: 'Register with Makeup Mosaic' }
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__product_product_component__["a" /* ProductComponent */]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/brands/a-z/a-z.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Product Brands - A to Z</h1>\n\n<div>\n   <app-sort-menu></app-sort-menu>\n   <ul class=\"brand-list\">\n         <li *ngFor=\"let brand of brands\">\n            <a routerLink=\"/brand/{{brand._id}}\">\n               <span *ngIf=\"brand._id\" >{{brand._id | titlecase}}</span><span *ngIf=\"!brand._id\">None</span>\n               <span class=\"count\" *ngIf=\"brand.count\"> - {{brand.count}} products</span>\n            </a>\n         </li>\n      </ul>\n</div>"

/***/ }),

/***/ "./src/app/brands/a-z/a-z.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/brands/a-z/a-z.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AZComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("./src/app/_services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-a-z',
            template: __webpack_require__("./src/app/brands/a-z/a-z.component.html"),
            styles: [__webpack_require__("./src/app/brands/a-z/a-z.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]])
    ], AZComponent);
    return AZComponent;
}());



/***/ }),

/***/ "./src/app/brands/most-products/most-products.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Product Brands - Most Products</h1>\n\n<div>\n   <app-sort-menu></app-sort-menu>\n   <ul class=\"brand-list\">\n         <li *ngFor=\"let brand of brands\">\n            <a routerLink=\"/brand/{{brand._id}}\">\n               <span *ngIf=\"brand._id\" >{{brand._id | titlecase}}</span><span *ngIf=\"!brand._id\">None</span>\n               <span class=\"count\" *ngIf=\"brand.count\"> - {{brand.count}} products</span>\n            </a>\n         </li>\n      </ul>\n</div>"

/***/ }),

/***/ "./src/app/brands/most-products/most-products.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/brands/most-products/most-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MostProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("./src/app/_services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-most-products',
            template: __webpack_require__("./src/app/brands/most-products/most-products.component.html"),
            styles: [__webpack_require__("./src/app/brands/most-products/most-products.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]])
    ], MostProductsComponent);
    return MostProductsComponent;
}());



/***/ }),

/***/ "./src/app/brands/sort-menu/sort-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sorting\">\n   <div>\n      Sort By: <a routerLink=\"/brands/a-z\">A-Z</a> | <a routerLink=\"/brands/by-count\">Most Products</a>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/brands/sort-menu/sort-menu.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/brands/sort-menu/sort-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortMenuComponent = (function () {
    function SortMenuComponent() {
    }
    SortMenuComponent.prototype.ngOnInit = function () {
    };
    SortMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sort-menu',
            template: __webpack_require__("./src/app/brands/sort-menu/sort-menu.component.html"),
            styles: [__webpack_require__("./src/app/brands/sort-menu/sort-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SortMenuComponent);
    return SortMenuComponent;
}());



/***/ }),

/***/ "./src/app/featured-products/featured-products.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  featured-products works!\n</p>\n"

/***/ }),

/***/ "./src/app/featured-products/featured-products.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/featured-products/featured-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturedProductsComponent = (function () {
    function FeaturedProductsComponent() {
    }
    FeaturedProductsComponent.prototype.ngOnInit = function () {
    };
    FeaturedProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-featured-products',
            template: __webpack_require__("./src/app/featured-products/featured-products.component.html"),
            styles: [__webpack_require__("./src/app/featured-products/featured-products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturedProductsComponent);
    return FeaturedProductsComponent;
}());



/***/ }),

/***/ "./src/app/format-strings.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatCategory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'formatCategory' })
    ], FormatCategory);
    return FormatCategory;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <div class=\"row\">\n        <div class=\"logo\">\n          <span>M</span>akeup <span>M</span>osaic\n        </div>\n        <div class=\"menu\">\n            <app-menu></app-menu>\n        </div>\n        <div class=\"login\">\n            <app-login></app-login>\n        </div>\n      </div>\n    </div>\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".container .row .logo, .container .row .login, .container .row .menu {\n  vertical-align: bottom;\n  height: 100%;\n  padding: 5px;\n  float: left; }\n\n.container .row .logo, .container .row .menu {\n  width: 30%; }\n\n.container .row .login {\n  width: 40%; }\n\n.container .row .logo {\n  color: white;\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n  font-size: 40px; }\n\n.container .row .logo span {\n    font-size: 80px;\n    font-style: none; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n   <div *ngIf=\"!isLoggedIn\" class=\"login-form login\">\n      <div>\n         {{errorMessage}}\n         <form name=\"loginForm\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n               <label for=\"username\">Username</label><br/>\n               <input type=\"text\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required /><br/>\n               <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n               <label for=\"password\">Password</label><br/>\n               <input type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required /><br/>\n               <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n            </div>\n            <br/>\n            <div class=\"form-group\">\n               <button [disabled]=\"loading\" class=\"button\">Login</button>\n               <span *ngIf=\"loading\"></span> \n               <a [routerLink]=\"['/register']\">Register</a>\n            </div>\n         </form>\n      </div>\n   </div>\n   <div *ngIf=\"isLoggedIn\">\n      <span>{{welcomeMessage}}</span> |  <a (click)=\"logout()\">Log out</a>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/header/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".login {\n  padding: 10px;\n  text-align: right;\n  text-align: bottom;\n  height: 100%;\n  color: white; }\n  .login .form-group {\n    float: left;\n    padding: 10px 5px; }\n  .login .form-group label {\n      float: left; }\n  .login .form-group input[text] {\n      float: left;\n      border: none;\n      color: black; }\n  .login .form-group .button {\n      margin: 5px;\n      margin-left: 10px; }\n  a, span {\n  color: white;\n  padding: 0 5px; }\n"

/***/ }),

/***/ "./src/app/header/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards__ = __webpack_require__("./src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.loggedInUser = data;
            if (_this.loggedInUser.length > 0) {
                localStorage.setItem("loggedInUser", JSON.stringify(_this.loggedInUser));
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/header/login/login.component.html"),
            styles: [__webpack_require__("./src/app/header/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__guards__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AlertService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/header/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n   <li>\n      <a [routerLink]=\"['/']\">Home</a>\n   </li>\n   <li>\n      <a [routerLink]=\"['/brands']\">Brands</a>\n   </li>\n   <li>\n      <a [routerLink]=\"['/featured-products']\">Featured Products</a>\n   </li>\n   <li>\n</ul>"

/***/ }),

/***/ "./src/app/header/menu/menu.component.scss":
/***/ (function(module, exports) {

module.exports = "ul li {\n  list-style: none;\n  float: left;\n  margin: 0 5px; }\n  ul li a {\n    color: white; }\n"

/***/ }),

/***/ "./src/app/header/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("./src/app/header/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/header/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/partials/brand-list/brand-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"brand-list\">\n   <li *ngFor=\"let brand of brands\">\n      <a routerLink=\"/brand/{{brand._id}}\">\n         <span *ngIf=\"brand._id\" >{{brand._id | titlecase}}</span><span *ngIf=\"!brand._id\">None</span>\n         <span class=\"count\" *ngIf=\"brand.count\"> - {{brand.count}} products</span>\n      </a>\n   </li>\n</ul>"

/***/ }),

/***/ "./src/app/partials/brand-list/brand-list.component.scss":
/***/ (function(module, exports) {

module.exports = "ul li a {\n  font-size: larger;\n  font-weight: normal; }\n\n.count {\n  color: #666;\n  font-weight: lighter;\n  font-size: smaller; }\n"

/***/ }),

/***/ "./src/app/partials/brand-list/brand-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("./src/app/_services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-brand-list',
            template: __webpack_require__("./src/app/partials/brand-list/brand-list.component.html"),
            styles: [__webpack_require__("./src/app/partials/brand-list/brand-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]])
    ], BrandListComponent);
    return BrandListComponent;
}());



/***/ }),

/***/ "./src/app/partials/product-list-grid/product-list-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product-list-grid works!\n</p>\n"

/***/ }),

/***/ "./src/app/partials/product-list-grid/product-list-grid.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/partials/product-list-grid/product-list-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductListGridComponent = (function () {
    function ProductListGridComponent() {
    }
    ProductListGridComponent.prototype.ngOnInit = function () {
    };
    ProductListGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-list-grid',
            template: __webpack_require__("./src/app/partials/product-list-grid/product-list-grid.component.html"),
            styles: [__webpack_require__("./src/app/partials/product-list-grid/product-list-grid.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductListGridComponent);
    return ProductListGridComponent;
}());



/***/ }),

/***/ "./src/app/partials/product-list-text/product-list-text.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product-list-text works!\n</p>\n"

/***/ }),

/***/ "./src/app/partials/product-list-text/product-list-text.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/partials/product-list-text/product-list-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductListTextComponent = (function () {
    function ProductListTextComponent() {
    }
    ProductListTextComponent.prototype.ngOnInit = function () {
    };
    ProductListTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-list-text',
            template: __webpack_require__("./src/app/partials/product-list-text/product-list-text.component.html"),
            styles: [__webpack_require__("./src/app/partials/product-list-text/product-list-text.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductListTextComponent);
    return ProductListTextComponent;
}());



/***/ }),

/***/ "./src/app/product-create/product-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Product</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveProduct()\" #productForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Website</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.website\" name=\"website\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Category</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.category\" name=\"category\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Sub-Category</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.sub_category\" name=\"sub_category\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Brand</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"product.brand\" name=\"brand\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!productForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product-create/product-create.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-create/product-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-create',
            template: __webpack_require__("./src/app/product-create/product-create.component.html"),
            styles: [__webpack_require__("./src/app/product-create/product-create.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let product of products\">\n   <div class=\"image-container\">\n      <div *ngFor=\"let image of product.images\">\n         <img src=\"{{image.url}}\" />\n      </div>\n   </div>\n   <div class=\"product-info\">\n      <h1>{{ product.name }}</h1>\n\n      <a routerLink=\"/brand/{{product.brand}}\">{{product.brand}}</a>\n      <br /> Category: {{product.category}}\n      <br /> Sub Category: {{product.sub_category}}\n      <br /> Price: {{product.price}}\n      <br /> <a href=\"{{product.affiliate_link}}\">Affiliate Link</a>\n\n      <br/><br/>\n      <a (click)=\"addProductToCollection()\">Add me to your collection!</a>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ".image-container {\n  width: 30%;\n  max-width: 500px;\n  float: left; }\n  .image-container img {\n    max-width: 100%; }\n  .product-info {\n  width: 70%;\n  float: right; }\n  .product-info h1 {\n    font-size: large;\n    font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailComponent = (function () {
    function ProductDetailComponent(router, route, http, userService) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.userService = userService;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/product/' + this.route.snapshot.params['id']).subscribe(function (data) {
            _this.products = data;
            _this.productId = _this.products[0]._id;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-detail',
            template: __webpack_require__("./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("./src/app/product-detail/product-detail.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-edit/product-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Product</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updateProduct(product._id)\" #productForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">ISBN</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.isbn\" name=\"isbn\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Title</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.title\" name=\"title\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Author</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.author\" name=\"author\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Published Year</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"product.published_year\" name=\"published_year\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Publisher</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"product.publisher\" name=\"publisher\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!productForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/product/' + id).subscribe(function (data) {
            _this.product = data;
        });
    };
    ProductEditComponent.prototype.updateProduct = function (id) {
        var _this = this;
        this.product.updated_date = Date.now();
        this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/product/' + id, this.product)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/product-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    ProductEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-edit',
            template: __webpack_require__("./src/app/product-edit/product-edit.component.html"),
            styles: [__webpack_require__("./src/app/product-edit/product-edit.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <h1>Product List\n      <a [routerLink]=\"['/products/add']\" class=\"btn btn-default btn-lg\">\n         <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n      </a>\n   </h1>\n   <table class=\"table\">\n      <thead>\n         <tr>\n            <th>Name</th>\n            <th>Category</th>\n            <th>Action</th>\n         </tr>\n      </thead>\n      <tbody>\n         <tr *ngFor=\"let product of products\">\n            <td>{{ product.name }}</td>\n            <td>{{ product.category }}</td>\n            <td>{{ product.sub_category}}</td>\n            <td>\n               <a [routerLink]=\"['/brand', product.brand]\">{{ product.brand }}</a>\n            </td>\n            <td>\n               <a [routerLink]=\"['/product/', product._id]\">More...</a>\n            </td>\n         </tr>\n      </tbody>\n   </table>\n</div>\n\n<div *ngFor=\"let product of products\" class=\"image-mosaic\">\n   <a [routerLink]=\"['/product/', product._id]\">\n      <div *ngFor=\"let image of product.images\">\n         <img src=\"{{image.url}}\" />\n      </div>\n   </a>\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.scss":
/***/ (function(module, exports) {

module.exports = ".image-mosaic {\n  float: left; }\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("./src/app/_services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/product/product.component.html"),
            styles: [__webpack_require__("./src/app/product/product.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/products-by-brand/products-by-brand.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <h1>Product List for {{brandTitle}}\n      <a [routerLink]=\"['/products/add']\" class=\"btn btn-default btn-lg\">\n         <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n      </a>\n   </h1>\n\n   <div *ngFor=\"let product of products\" class=\"image-mosaic\">\n      <a [routerLink]=\"['/product/', product._id]\">\n         <div *ngFor=\"let image of product.images\" class=\"{{product.sub_category | formatCategory | lowercase}} {{product.category | formatCategory | lowercase}}\">\n            <img src=\"{{image.url}}\" />\n         </div>\n      </a>\n      <br />\n      <div class=\"description\">\n         <a [routerLink]=\"['/brand/', product.brand]\">\n            <strong>{{product.brand | uppercase}}</strong><br />\n         </a>\n         <a [routerLink]=\"['/product/', product._id]\">\n            <span>{{product.name | titlecase}}</span>\n         </a>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/products-by-brand/products-by-brand.component.scss":
/***/ (function(module, exports) {

module.exports = ".image-mosaic {\n  width: 270px;\n  float: left;\n  display: block;\n  overflow: hidden;\n  position: relative;\n  margin: 10px;\n  padding: 10px;\n  background-color: white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2); }\n  .image-mosaic img {\n    max-width: 100%;\n    max-height: 500px;\n    position: relative;\n    display: block;\n    margin: 0 auto; }\n  .image-mosaic span {\n    color: #555;\n    font-size: small; }\n  .image-mosaic .description {\n    position: absolute;\n    width: 100%;\n    min-height: 50px;\n    text-align: center;\n    bottom: 5px;\n    left: 0;\n    background-color: white;\n    opacity: 0.8;\n    padding: 5px; }\n"

/***/ }),

/***/ "./src/app/products-by-brand/products-by-brand.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsByBrandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/product/brands/' + this.brandTitle).subscribe(function (data) {
            _this.products = data;
        });
    };
    ProductsByBrandComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-products-by-brand',
            template: __webpack_require__("./src/app/products-by-brand/products-by-brand.component.html"),
            styles: [__webpack_require__("./src/app/products-by-brand/products-by-brand.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProductsByBrandComponent);
    return ProductsByBrandComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n   <h2>Register</h2>\n   <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\n         <label for=\"firstName\">First Name</label>\n         <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n         <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\n         <label for=\"lastName\">Last Name</label>\n         <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n         <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n         <label for=\"username\">Username</label>\n         <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n         <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n         <label for=\"password\">Password</label>\n         <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n         <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n      </div>\n      <div class=\"form-group\">\n         <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n         <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n         />\n         <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n      </div>\n   </form>\n\n   <div>\n      <h2>Users:</h2>\n      \n      <div *ngFor=\"let user of users\">\n         {{user.username}} - {{user.firstName}} {{user.lastName}}: {{user.password}}, at {{ user.createdAt | date:'fullDate'}}\n      </div>\n   </div>\n\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("./src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: __webpack_require__("./src/app/register/register.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["d" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* AlertService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map