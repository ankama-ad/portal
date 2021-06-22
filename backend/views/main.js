(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ankam\Documents\demo\portal\src\main.ts */"zUnb");


/***/ }),

/***/ "0zmI":
/*!********************************************************!*\
  !*** ./src/app/views/redirect/redirect.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWRpcmVjdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "165h":
/*!******************************************************!*\
  !*** ./src/app/views/redirect/redirect.component.ts ***!
  \******************************************************/
/*! exports provided: RedirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectComponent", function() { return RedirectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_redirect_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./redirect.component.html */ "CXPM");
/* harmony import */ var _redirect_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redirect.component.scss */ "0zmI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var RedirectComponent = /** @class */ (function () {
    function RedirectComponent() {
    }
    RedirectComponent.prototype.ngOnInit = function () {
    };
    RedirectComponent.ctorParameters = function () { return []; };
    RedirectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-redirect',
            template: _raw_loader_redirect_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_redirect_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], RedirectComponent);
    return RedirectComponent;
}());



/***/ }),

/***/ "AytR":
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
    //mockApiUrl: 'http://34.227.93.219:8080/api/'
    mockApiUrl: 'https://quj8scqmf4.execute-api.us-west-2.amazonaws.com/Dev/',
    baseApiUrl: 'http://localhost:8080/api/'
};


/***/ }),

/***/ "Bov3":
/*!**************************************************!*\
  !*** ./src/app/services/CanActivateMainRoute.ts ***!
  \**************************************************/
/*! exports provided: CanActivateMainRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateMainRoute", function() { return CanActivateMainRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @azure/msal-angular */ "l+12");




var CanActivateMainRoute = /** @class */ (function () {
    function CanActivateMainRoute(router, msalAuthService) {
        this.router = router;
        this.msalAuthService = msalAuthService;
    }
    CanActivateMainRoute.prototype.canActivate = function (route, state) {
        var activeAccount = this.msalAuthService.instance.getActiveAccount();
        console.log(activeAccount);
        if (!activeAccount && this.msalAuthService.instance.getAllAccounts().length > 0) {
            var accounts = this.msalAuthService.instance.getAllAccounts();
            activeAccount = (accounts[0]);
        }
        if (!activeAccount) {
            this.router.navigateByUrl('/login');
        }
        return !!activeAccount;
    };
    CanActivateMainRoute.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["MsalService"] }
    ]; };
    CanActivateMainRoute = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["MsalService"]])
    ], CanActivateMainRoute);
    return CanActivateMainRoute;
}());



/***/ }),

/***/ "CXPM":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/redirect/redirect.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>redirect works!</p>\r\n");

/***/ }),

/***/ "D4iE":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/embedded-report/embedded-report.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n <main class=\"row\">\r\n<div  style=\"width:100% !important; height:auto !important\"></div>\r\n<section id=\"report-container\"  #embeddedReport\r\nclass=\"embed-container col-lg-offset-4 col-lg-7 col-md-offset-5 col-md-7 col-sm-offset-5 col-sm-7 mt-5\">\r\n<div class=\"d-flex justify-content-center\">\r\n    <div class=\"spinner-border\" role=\"status\">\r\n      <span class=\"sr-only\">Loading...</span> \r\n    </div>\r\n  </div>\r\n</section></main>\r\n\r\n       \r\n");

/***/ }),

/***/ "DodC":
/*!****************************************************!*\
  !*** ./src/app/containers/default-layout/index.ts ***!
  \****************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout.component */ "JPqG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "G/4p":
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout */ "DodC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");






var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        //baseUri:string = 'http://localhost:8080/api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    ApiService.prototype.getRandRList = function () {
        throw new Error('Method not implemented.');
    };
    ApiService.prototype.createUser = function (user) {
        console.log("radha");
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mockApiUrl + "addinterneluser";
        console.log(url);
        return this.http.post(url, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.getUsers = function () {
        console.log("getting");
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mockApiUrl + "getinternelusers";
        console.log(url);
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.getUsersById = function (userID) {
        console.log("getting");
        // console.log(UserID);
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mockApiUrl + "getuserdetailsbyid";
        return this.http.post(url, { UserID: userID })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.createroles = function (data) {
        console.log("krishna");
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mockApiUrl + "addwebroles";
        console.log(url);
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.getroles = function () {
        console.log("getwebroles");
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mockApiUrl + "getwebroles";
        console.log(url);
        return this.http.post(url, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.getRolesByTeamAndDepartment = function (obj) {
        console.log("getwebrolesbyteamanddepartment");
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mockApiUrl + "getwebrolesbyteamanddepartment";
        console.log(url);
        return this.http.post(url, obj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.getTeamsByDepartment = function (obj) {
        console.log("Getting Teams By DepartmentID");
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mockApiUrl + "getteamsbydepartment";
        console.log(url);
        return this.http.post(url, obj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.adddepartments = function (data) {
        console.log("krishna");
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mockApiUrl + "adddepartments";
        console.log(url);
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.getdepartments = function () {
        console.log("getdepartments");
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mockApiUrl + "getdepartments";
        console.log(url);
        return this.http.get(url);
    };
    ApiService.prototype.addteams = function (data) {
        console.log("krishna");
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mockApiUrl + "addteams";
        console.log(url);
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.getteams = function () {
        console.log("getteams service");
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mockApiUrl + "getteams";
        console.log(url);
        return this.http.post(url, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.LoggedIn = function () {
        return !!localStorage.getItem('token');
    };
    ApiService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    // Error handling 
    ApiService.prototype.errorMgmt = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    ApiService.prototype.getRiders = function () {
        console.log("getriders");
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mockApiUrl + "webgetriders";
        console.log(url);
        return this.http.post(url, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.prototype.getcustomers = function () {
        console.log("getting Customers");
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].mockApiUrl + "webgetriders/webusers";
        console.log(url);
        return this.http.post(url, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "JPqG":
/*!***********************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return DefaultLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./default-layout.component.html */ "lm8q");
/* harmony import */ var _default_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-layout.component.scss */ "zrKf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_nav */ "c2Qq");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @azure/msal-angular */ "l+12");








var DefaultLayoutComponent = /** @class */ (function () {
    function DefaultLayoutComponent(authService, broadcastService, _document) {
        var _this = this;
        this.authService = authService;
        this.broadcastService = broadcastService;
        //public navItems : any [];
        //public filteredItems = navItems;
        //public navItems = navItems;
        this.sidebarMinimized = true;
        this.lstNavs = [];
        this.profile = {};
        this.broadcastService.msalSubject$.subscribe(function (x) {
            if (x.eventType == "msal:acquireTokenStart") {
                _this.profile = x.payload.account;
            }
            // 'msal:loginSuccess',
            console.log("login success.", x);
            //alert("success");
        });
        this.broadcastService.inProgress$.subscribe(function (x) {
            // 'msal:loginSuccess',
            console.log("api progress.", x);
            // alert("sucprogresscess");
        });
        this.changes = new MutationObserver(function (mutations) {
            _this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
        });
        this.element = _document.body;
        this.changes.observe(this.element, {
            attributes: true,
            attributeFilter: ['class']
        });
        console.log(_nav__WEBPACK_IMPORTED_MODULE_5__["navItems"]);
        var RoleName = localStorage.getItem('RoleName');
        console.log(RoleName);
        var navToRemove = [];
        this.lstNavs = _nav__WEBPACK_IMPORTED_MODULE_5__["navItems"];
    }
    DefaultLayoutComponent.prototype.constructNavs = function (items) {
        var lstNavItems = items.split(',');
        for (var i = 0; i < lstNavItems.length; i++) {
            for (var j = 0; j < _nav__WEBPACK_IMPORTED_MODULE_5__["navItems"].length; j++) {
                if (_nav__WEBPACK_IMPORTED_MODULE_5__["navItems"][j].name == lstNavItems[i]) {
                    this.lstNavs.push(_nav__WEBPACK_IMPORTED_MODULE_5__["navItems"][j]);
                }
            }
        }
    };
    DefaultLayoutComponent.prototype.ngOnDestroy = function () {
        this.changes.disconnect();
    };
    DefaultLayoutComponent.prototype.logout = function () {
        localStorage.clear();
        //this.ngZone.run(() => this.router.navigateByUrl('/login'))
        this.authService.logout();
    };
    DefaultLayoutComponent.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__["MsalBroadcastService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    DefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-layout',
            template: _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_default_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__["MsalBroadcastService"], Object])
    ], DefaultLayoutComponent);
    return DefaultLayoutComponent;
}());



/***/ }),

/***/ "KZX/":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jw-angular-pagination */ "EnGh");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jw_angular_pagination__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/shared/confirm-dialog/confirm-dialog.component */ "ZokB");
/* harmony import */ var _app_views_embedded_report_embedded_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/views/embedded-report/embedded-report.component */ "ZhN8");






//import { MatDatepickerModule,MatNativeDateModule,MatFormFieldModule, MatInputModule } from '@angular/material';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [jw_angular_pagination__WEBPACK_IMPORTED_MODULE_3__["JwPaginationComponent"], _app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], _app_views_embedded_report_embedded_report_component__WEBPACK_IMPORTED_MODULE_5__["EmbeddedReportComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            exports: [
                jw_angular_pagination__WEBPACK_IMPORTED_MODULE_3__["JwPaginationComponent"],
                _app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"],
                _app_views_embedded_report_embedded_report_component__WEBPACK_IMPORTED_MODULE_5__["EmbeddedReportComponent"]
                // MatDatepickerModule,
                // MatNativeDateModule,
                // MatFormFieldModule,
                // MatInputModule
            ],
            entryComponents: [_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "M5B9":
/*!*********************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-action[align=end] {\n  justify-content: flex-end;\n}\n.mat-dialog-action[align=center] {\n  justify-content: center;\n}\n.mat-dialog-title {\n  font-size: initial !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0FBQVI7QUFFSTtFQUNJLHVCQUFBO0FBQVI7QUFJQTtFQUNJLDZCQUFBO0FBREoiLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1hY3Rpb257XHJcbiAgICAmW2FsaWduPVwiZW5kXCJde1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcbiAgICAmW2FsaWduPVwiY2VudGVyXCJde1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWRpYWxvZy10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "PH8J":
/*!*********************************************************************!*\
  !*** ./src/app/views/embedded-report/embedded-report.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Copyright (c) Microsoft Corporation.\r\nLicensed under the MIT license. */\r\n\r\nheader {\r\n    background-color: #007FFF;\r\n    height: 75px;\r\n    width: 100%;\r\n}\r\n\r\nheader > p {\r\n    color: #FFFFFF;\r\n    font: bold 1.6em \"segoe ui\", arial, sans-serif;\r\n    margin-left: 31px;\r\n    padding-top: 20px;\r\n}\r\n\r\nmain {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n}\r\n\r\nsection#text-container > div > p {\r\n    font: 1.2em \"segoe ui\", arial, sans-serif;\r\n}\r\n\r\nsection#report-container {\r\n    height: calc(0.5625 * 61vw); /* 16:9 aspect ratio */\r\n}\r\n\r\n/* @media only screen and (max-width: 575px) {\r\n    section#report-container {\r\n        height: calc(0.5625 * 100vw); /* 16:9 aspect ratio \r\n    //}\r\n//} */\r\n\r\nfooter > p {\r\n    font: 1em \"segoe ui\", arial, sans-serif;\r\n}\r\n\r\niframe {\r\n    border: none;\r\n}\r\n\r\nsection {\r\n    min-width: 80vw;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYmVkZGVkLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO2lDQUNpQzs7QUFFakM7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCw4Q0FBOEM7SUFDOUMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSwyQkFBMkIsRUFBRSxzQkFBc0I7QUFDdkQ7O0FBRUE7Ozs7S0FJSzs7QUFFTDtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImVtYmVkZGVkLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gKi9cclxuXHJcbmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3RkZGO1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmhlYWRlciA+IHAge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250OiBib2xkIDEuNmVtIFwic2Vnb2UgdWlcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tbGVmdDogMzFweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG5tYWluIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnNlY3Rpb24jdGV4dC1jb250YWluZXIgPiBkaXYgPiBwIHtcclxuICAgIGZvbnQ6IDEuMmVtIFwic2Vnb2UgdWlcIiwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnNlY3Rpb24jcmVwb3J0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMC41NjI1ICogNjF2dyk7IC8qIDE2OjkgYXNwZWN0IHJhdGlvICovXHJcbn1cclxuXHJcbi8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIHNlY3Rpb24jcmVwb3J0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDAuNTYyNSAqIDEwMHZ3KTsgLyogMTY6OSBhc3BlY3QgcmF0aW8gXHJcbiAgICAvL31cclxuLy99ICovXHJcblxyXG5mb290ZXIgPiBwIHtcclxuICAgIGZvbnQ6IDFlbSBcInNlZ29lIHVpXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pZnJhbWUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAgIG1pbi13aWR0aDogODB2dztcclxufSJdfQ== */");

/***/ }),

/***/ "QB/w":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "nSew");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "wTWu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @azure/msal-angular */ "l+12");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(msalGuardConfig, authService, httpClient, router, msalBroadcastService) {
        this.msalGuardConfig = msalGuardConfig;
        this.authService = authService;
        this.httpClient = httpClient;
        this.router = router;
        this.msalBroadcastService = msalBroadcastService;
        this._destroying$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.isIframe = false;
        this.loginDisplay = false;
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        console.log('view intit');
    };
    LoginComponent.prototype.ngOnChanges = function (changes) {
        var activeAccount = this.authService.instance.getActiveAccount();
        console.log(activeAccount);
        if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
            var accounts = this.authService.instance.getAllAccounts();
            activeAccount = (accounts[0]);
        }
        if (activeAccount) {
            this.router.navigateByUrl('/dashboard');
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        // this.isIframe = window !== window.parent && !window.opener; // Remove this line to use Angular Universal
        // this.msalBroadcastService.inProgress$
        //   .pipe(
        //     filter((status: InteractionStatus) => status === InteractionStatus.None),
        //     takeUntil(this._destroying$)
        //   )
        //   .subscribe((result) => {
        //     console.log(result);
        //     this.setLoginDisplay();
        //     this.checkAndSetActiveAccount();
        //   })
    };
    LoginComponent.prototype.setLoginDisplay = function () {
        this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
    };
    LoginComponent.prototype.checkAndSetActiveAccount = function () {
        /**
         * If no active account set but there are accounts signed in, sets first account to active account
         * To use active account set here, subscribe to inProgress$ first in your component
         * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
         */
        var activeAccount = this.authService.instance.getActiveAccount();
        debugger;
        console.log(activeAccount);
        if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
            var accounts = this.authService.instance.getAllAccounts();
            this.authService.instance.setActiveAccount(accounts[0]);
        }
    };
    LoginComponent.prototype.login = function () {
        this.router.navigateByUrl('/dashboard');
        // this.router.navigate(['dashboard']);
        // debugger;
        // if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
        //   if (this.msalGuardConfig.authRequest){
        //     this.authService.loginPopup({...this.msalGuardConfig.authRequest} as PopupRequest)
        //       .subscribe((response: AuthenticationResult) => {
        //         this.authService.instance.setActiveAccount(response.account);
        //       });
        //     } else {
        //       this.authService.loginPopup()
        //         .subscribe((response: AuthenticationResult) => {
        //           this.authService.instance.setActiveAccount(response.account);
        //         });
        //   }
        // } else {
        //   if (this.msalGuardConfig.authRequest){
        //     let req = {...this.msalGuardConfig.authRequest} as RedirectRequest
        //     if(!req.redirectUri || req.redirectUri == '/'){
        //      // req.redirectUri = window.location.origin + '/#/dashboard';
        //     }
        //     alert('authrequest' + JSON.stringify(req));
        //     this.authService.loginRedirect(req);
        //   } else {
        //     this.authService.loginRedirect();
        //   }
        // }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this._destroying$.next(undefined);
        this._destroying$.complete();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__["MSAL_GUARD_CONFIG"],] }] },
        { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__["MsalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__["MsalBroadcastService"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__["MsalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__["MsalBroadcastService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.router.events.subscribe(function (evt) {
                    if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                        return;
                    }
                    window.scrollTo(0, 0);
                });
                return [2 /*return*/];
            });
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: loggerCallback, MSALInstanceFactory, MSALInterceptorConfigFactory, MSALGuardConfigFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggerCallback", function() { return loggerCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSALInstanceFactory", function() { return MSALInstanceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSALInterceptorConfigFactory", function() { return MSALInterceptorConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSALGuardConfigFactory", function() { return MSALGuardConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bse0");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth.guard */ "lKHo");
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @azure/msal-browser */ "Czdx");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @azure/msal-angular */ "l+12");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers */ "G/4p");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "l+oi");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/shared.module */ "KZX/");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/redirect/redirect.component */ "165h");
/* harmony import */ var _services_CanActivateMainRoute__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/CanActivateMainRoute */ "Bov3");





//import { LoginComponent } from './views/login/login.component';







// Import containers


// Import routing module

// Import 3rd party components








var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var APP_CONTAINERS = [
    _containers__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutComponent"]
];
var isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1; // Remove this line to use Angular Universal
function loggerCallback(logLevel, message) {
    console.log(message);
}
function MSALInstanceFactory() {
    return new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_9__["PublicClientApplication"]({
        auth: {
            clientId: '6878a486-4dea-4baa-9713-8f99f9d63052',
            redirectUri: '/',
            postLogoutRedirectUri: 'http://localhost:4200/login'
        },
        cache: {
            cacheLocation: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserCacheLocation"].LocalStorage,
            storeAuthStateInCookie: isIE,
        },
        system: {
            loggerOptions: {
                loggerCallback: loggerCallback,
                logLevel: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_9__["LogLevel"].Info,
                piiLoggingEnabled: false
            }
        }
    });
}
function MSALInterceptorConfigFactory() {
    var protectedResourceMap = new Map();
    protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', ['user.read']);
    protectedResourceMap.set('https://graph.microsoft.com/v1.0/users', ['user.read']);
    protectedResourceMap.set('http://localhost:8080/api', ['api://6878a486-4dea-4baa-9713-8f99f9d63052/api.access']);
    //['https://localhost:44367/api/', ['d5179ea0-d0f2-42e1-ac8e-5be86d0d5980']]
    return {
        interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_9__["InteractionType"].Redirect,
        protectedResourceMap: protectedResourceMap
    };
}
function MSALGuardConfigFactory() {
    return {
        interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_9__["InteractionType"].Redirect,
        authRequest: {
            scopes: ['user.read']
        },
        loginFailedRoute: '/login-failed'
    };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppAsideModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppBreadcrumbModule"].forRoot({}),
                _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppFooterModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppHeaderModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppSidebarModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"].forRoot({}),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsModule"].forRoot(),
                ng2_charts__WEBPACK_IMPORTED_MODULE_17__["ChartsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__["MsalModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]
            ], APP_CONTAINERS, [
                _views_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _views_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_21__["RedirectComponent"]
                // AppComponent,
                // ...APP_CONTAINERS,
                //LoginComponent
            ]),
            providers: [{
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"]
                }, _auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__["MsalInterceptor"],
                    multi: true
                },
                {
                    provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__["MSAL_INSTANCE"],
                    useFactory: MSALInstanceFactory
                },
                {
                    provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__["MSAL_GUARD_CONFIG"],
                    useFactory: MSALGuardConfigFactory
                },
                {
                    provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__["MSAL_INTERCEPTOR_CONFIG"],
                    useFactory: MSALInterceptorConfigFactory
                },
                _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__["MsalService"],
                _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__["MsalGuard"],
                _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__["MsalBroadcastService"],
                _services_CanActivateMainRoute__WEBPACK_IMPORTED_MODULE_22__["CanActivateMainRoute"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__["MsalRedirectComponent"]],
            entryComponents: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZhN8":
/*!********************************************************************!*\
  !*** ./src/app/views/embedded-report/embedded-report.component.ts ***!
  \********************************************************************/
/*! exports provided: EmbeddedReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddedReportComponent", function() { return EmbeddedReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_embedded_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./embedded-report.component.html */ "D4iE");
/* harmony import */ var _embedded_report_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./embedded-report.component.css */ "PH8J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var powerbi_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! powerbi-client */ "dZk+");
/* harmony import */ var powerbi_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(powerbi_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");







var EmbeddedReportComponent = /** @class */ (function () {
    function EmbeddedReportComponent(httpClient) {
        this.httpClient = httpClient;
        this.reportId = 3;
    }
    EmbeddedReportComponent.prototype.ngOnInit = function () {
        //this.config = config;    
        this.getEmbedToken();
        // this.httpClient.get<any>(`${Constants.apiRoot}PowerBI/EmbedConfig`).subscribe(config => {
        //     this.config = config;
        //     const model = window['powerbi-client'].models;
        //     const embedConfig = {
        //         type: 'report',
        //         tokenType: model.TokenType.Embed,
        //         accessToken: config.token,
        //         embedUrl: config.embedURL,
        //         permissions: model.Permissions.All,
        //         settings: {
        //             filterPaneEnabled: true,
        //             navContentPaneEnabled: true
        //         }
        //     };
        //     powerbi.embed(this.embeddedReport.nativeElement, embedConfig);
        // });
    };
    EmbeddedReportComponent.prototype.getEmbedToken = function () {
        var _this = this;
        var report = {};
        // const model = (<any>window)["powerbi-client"].models;
        // const basicFilter = {
        //   $schema: "http://powerbi.com/product/schema#basic",
        //   target: {
        //     table: "Sales",
        //     column: "Sales"
        //   },
        //   operator: "lt",
        //   values: [258.95],
        //   filterType: model.FilterType.BasicFilter,         
        // }
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseApiUrl + "powerbi/getEmbedToken/" + this.reportId).subscribe(function (res) {
            console.log(res);
            var model = powerbi_client__WEBPACK_IMPORTED_MODULE_5__["models"];
            var basicFilter = {
                $schema: "http://powerbi.com/product/schema#basic",
                target: {
                    table: "Sales",
                    column: "Sales"
                },
                operator: "lt",
                values: [1376.85, 239.95, 98.95],
                filterType: model.FilterType.BasicFilter,
            };
            var basicFilter2 = {
                $schema: "http://powerbi.com/product/schema#basic",
                target: {
                    table: "Date",
                    column: "Month"
                },
                operator: "lt",
                values: ['2016 Apr', '2016 May', '2016 Jun'],
                filterType: model.FilterType.BasicFilter,
            };
            var embedConfig = {
                type: 'report',
                tokenType: model.TokenType.Embed,
                accessToken: res.accessToken,
                embedUrl: res.embedUrl[0].embedUrl,
                permissions: model.Permissions.All,
                // viewMode: models.ViewMode.Edit,
                settings: {
                    filterPaneEnabled: true,
                    navContentPaneEnabled: true,
                    panes: {
                        filters: {
                            visible: true
                        },
                        pageNavigation: {
                            visible: true
                        }
                    },
                    selection: {
                        visible: true
                    },
                    syncSlicers: {
                        visible: true
                    },
                    visualizations: {
                        expanded: true
                    },
                    background: model.BackgroundType.Transparent
                }
            };
            setTimeout(function () {
                report = powerbi.embed(_this.embeddedReport.nativeElement, embedConfig);
                //  report.on('loaded', () => {
                //   report.getFilters()
                //       .then((filters:any) => {
                //           filters.push(basicFilter);
                //           filters.push(basicFilter2);
                //           return report.setFilters(filters);
                //       });
                // }, 1200);
            });
        }, function (err) {
            console.log(err);
        });
    };
    EmbeddedReportComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    EmbeddedReportComponent.propDecorators = {
        embeddedReport: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['embeddedReport',] }],
        reportId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    EmbeddedReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-embedded-report',
            template: _raw_loader_embedded_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_embedded_report_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], EmbeddedReportComponent);
    return EmbeddedReportComponent;
}());



/***/ }),

/***/ "ZokB":
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirm_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "yB71");
/* harmony import */ var _confirm_dialog_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-dialog.component.scss */ "M5B9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "s6ns");





var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfirmDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ConfirmDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-confirm-dialog',
            template: _raw_loader_confirm_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_confirm_dialog_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "G/4p");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @azure/msal-angular */ "l+12");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");



//import { LoginComponent } from './views/login/login.component';
// Import Containers



var routes = [
    // {
    //   path: 'login',
    //   component: LoginComponent,
    //   data: {
    //     title: 'Login Page'
    //   }
    // }, 
    {
        path: 'login', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
    },
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard', canActivateChild: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalGuard"]],
                loadChildren: function () { return __webpack_require__.e(/*! import() | views-dashboard-dashboard-module */ "views-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./views/dashboard/dashboard.module */ "6dU7")).then(function (m) { return m.DashboardModule; }); }
            },
            {
                path: 'requests', canActivateChild: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalGuard"]],
                loadChildren: function () { return __webpack_require__.e(/*! import() | views-requests-requests-module */ "views-requests-requests-module").then(__webpack_require__.bind(null, /*! ./views/requests/requests.module */ "Re/M")).then(function (m) { return m.RequestsModule; }); }
            },
            {
                path: 'feedback', canActivateChild: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalGuard"]],
                loadChildren: function () { return __webpack_require__.e(/*! import() | views-feedback-feedback-module */ "views-feedback-feedback-module").then(__webpack_require__.bind(null, /*! ./views/feedback/feedback.module */ "PURR")).then(function (m) { return m.FeedbackModule; }); }
            },
            {
                path: 'admins', canActivateChild: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalGuard"]],
                loadChildren: function () { return __webpack_require__.e(/*! import() | views-admins-admins-module */ "views-admins-admins-module").then(__webpack_require__.bind(null, /*! ./views/admins/admins.module */ "war2")).then(function (m) { return m.AdminsModule; }); }
            },
            {
                path: 'reports', canActivateChild: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalGuard"]],
                loadChildren: function () { return __webpack_require__.e(/*! import() | views-reports-reports-module */ "views-reports-reports-module").then(__webpack_require__.bind(null, /*! ./views/reports/reports.module */ "qUkX")).then(function (m) { return m.ReportsModule; }); }
            },
            {
                path: '', redirectTo: '/login', pathMatch: 'full',
            },
            {
                path: 'code',
                redirectTo: '/dashboard', pathMatch: 'full',
            },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy', useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "c2Qq":
/*!*************************!*\
  !*** ./src/app/_nav.ts ***!
  \*************************/
/*! exports provided: navItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItems", function() { return navItems; });
var navItems = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'fa fa-th'
    },
    {
        name: 'Users',
        url: '/user',
        icon: 'fa fa-users',
        children: [
            // {
            //   name: 'Registration',
            //   url: '/user/Registration',
            //   icon: 'fa fa-id-card'
            // },
            {
                name: 'Departments',
                url: '/user/departments',
                icon: 'fa fa-desktop'
            },
            {
                name: 'Teams',
                url: '/user/teams',
                icon: 'fa fa-users'
            },
            {
                name: 'Roles',
                url: '/user/createroles',
                icon: 'fa fa-id-card'
            },
            {
                name: 'Access',
                url: '/user/userroles',
                icon: 'fa fa-id-card'
            },
            {
                name: 'Users',
                url: '/user/userlist',
                icon: 'icon-people'
            },
        ]
    },
    // {
    //   name: 'Customers',
    //   url: '/customer',
    //   icon:'fa fa-viacoin',
    //   children: [
    //     {
    //       name: 'List',
    //       url: '/customer/customerlist',
    //       icon: 'fa fa-users'
    //     },
    //   ]
    // },
    // {
    //   name: 'Riders',
    //   url: '/rider',
    //   icon:'fa fa-viacoin',
    //   children: [
    //     {
    //       name: 'List',
    //       url: '/rider/riderlist',
    //       icon: 'fa fa-users'
    //     },
    //   ]
    // },
    // {
    //   name: 'Vendors',
    //   url: '/vendors',
    //   icon:'fa fa-viacoin',
    //   children: [
    //     {
    //       name: 'R&R',
    //       url: '/vendors/RandR',
    //       icon: 'fa fa-taxi',
    //     },
    //   ]
    // },
    // {
    //   name: 'Complaints',
    //   url: '/RequestDetails',
    //   icon: 'fa fa-envelope',
    //   children: [
    //     {
    //       name: 'R&R',
    //       url: '/RequestDetails/RandR',
    //       icon: 'fa fa-taxi', 
    //     },{
    //       name: 'Wooz',
    //       url: '/RequestDetails/Wooz',
    //       icon: 'fa fa-motorcycle',
    //     },{
    //       name: 'Generalized',
    //       url: '/RequestDetails/genralized',
    //       children:[
    //         {
    //           name:'list',
    //           url: '/RequestDetails/genralized/list',
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   name: 'Resolve',
    //   url: '/complaints',
    //   icon:'fa fa-viacoin',
    //   children: [
    //     {
    //       name: 'List',
    //       url: '/complaints/complaintslist',
    //       icon: 'fa fa-users'
    //     },
    //   ]
    // },
    // {
    //   name: 'Transactions',
    //   url: '/Transactions',
    //   icon: 'fa fa-exchange',
    //   children: [
    //     {
    //       name: 'RandR',
    //       url: '/Transactions/RandR',
    //       icon: 'fa fa-taxi',
    //     },{
    //       name: 'Wooz',
    //       url: '/Transactions/Wooz',
    //       icon: 'fa fa-motorcycle',
    //     }
    //   ]
    // },
    {
        name: 'Reports',
        url: '/reports',
        icon: 'fa fa-bar-chart',
        children: [
            {
                name: 'List',
                url: 'reports/list',
                icon: 'fa fa-list',
            }
        ]
    },
    {
        name: 'Admins',
        url: '/Admins',
        icon: 'fa fa-cogs',
        children: [
            {
                name: 'Departments',
                url: '/admins/departments',
                icon: 'fa fa-sitemap',
            }
        ]
    },
    {
        name: 'Requests',
        url: '/requests',
        icon: 'fa fa-envelope-open-o',
        children: [
            {
                name: 'Reqests List',
                url: '/requests/list',
                icon: 'fa fa-list',
            }
        ]
    },
    {
        name: 'Feedback',
        url: '/feedback',
        icon: 'fa fa-pencil-square-o',
        children: [
            {
                name: 'Feedbacks',
                icon: 'fa fa-list',
                url: '/feedback/list',
            }
        ]
    },
    {
        name: 'Settings',
        url: '/settings',
        icon: 'fa fa-wrench'
    },
];


/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "ej43":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @azure/msal-angular */ "l+12");
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @azure/msal-browser */ "Czdx");






// import { User } from '@/_models';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(msalGuardConfig, broadcastService, authService, httpClient, msalBroadcastService) {
        var _this = this;
        this.msalGuardConfig = msalGuardConfig;
        this.broadcastService = broadcastService;
        this.authService = authService;
        this.httpClient = httpClient;
        this.msalBroadcastService = msalBroadcastService;
        this.user = {};
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.broadcastService.msalSubject$.subscribe(function (x) {
            console.log("auth service login success.", x);
            if (x.eventType == "msal:acquireTokenStart") {
                _this.user = x.payload.account;
            }
            // 'msal:loginSuccess',
            //alert("success");
        });
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    AuthenticationService.prototype.login2 = function (username, password) {
        // return this.http.post(`${config}/users/authenticate`, { username, password })
        //     .pipe(map(user => {
        //         // store user details and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('currentUser', JSON.stringify(user));
        //         this.currentUserSubject.next(user);
        //         return user;
        //     }));
    };
    AuthenticationService.prototype.login = function () {
        var _this = this;
        if (this.msalGuardConfig.interactionType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_5__["InteractionType"].Popup) {
            if (this.msalGuardConfig.authRequest) {
                this.authService.loginPopup(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.msalGuardConfig.authRequest))
                    .subscribe(function (response) {
                    _this.authService.instance.setActiveAccount(response.account);
                });
            }
            else {
                this.authService.loginPopup()
                    .subscribe(function (response) {
                    _this.authService.instance.setActiveAccount(response.account);
                });
            }
        }
        else {
            if (this.msalGuardConfig.authRequest) {
                this.authService.loginRedirect(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.msalGuardConfig.authRequest));
            }
            else {
                this.authService.loginRedirect();
            }
        }
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage and set current user to null        
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        this.currentUserSubject.next(null);
        if (this.msalGuardConfig.interactionType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_5__["InteractionType"].Popup) {
            this.authService.logoutPopup({
                mainWindowRedirectUri: "/"
            });
        }
        else {
            this.authService.logoutRedirect();
        }
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MSAL_GUARD_CONFIG"],] }] },
        { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalBroadcastService"] },
        { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalBroadcastService"] }
    ]; };
    AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalBroadcastService"],
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalBroadcastService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "lKHo":
/*!***************************!*\
  !*** ./src/auth.guard.ts ***!
  \***************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/app/services/api.service */ "H+bZ");
/* harmony import */ var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/services/authentication.service */ "ej43");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(_apiService, _router, authService) {
        this._apiService = _apiService;
        this._router = _router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._apiService.LoggedIn()) {
            return true;
        }
        else {
            this.authService.login();
            return false;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "lm8q":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\r\n  [navbarBrandRouterLink]=\"['/dashboard']\"\r\n  [fixed]=\"true\"\r\n  [navbarBrandFull]=\"{src: 'assets/img/avatars/logoo.png', width: 75, height: 40, alt: 'CoreUI Logo'}\"\r\n  [navbarBrandMinimized]=\"{src: 'assets/img/brand/sygnet.svg', width: 30, height: 30, alt: 'CoreUI Logo'}\"\r\n  [sidebarToggler]=\"'lg'\"\r\n  [asideMenuToggler]=\"'lg'\">\r\n  \r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n    \r\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n        <strong style=\" text-transform: capitalize;\" class=\"text-capitalize\">{{profile?.name}} </strong> <img src=\"assets/img/abst.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\"/>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n        <a class=\"dropdown-item\" href=\"/#/login\" (click) = \"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</app-header>\r\n<div class=\"app-body\">\r\n  <app-sidebar [fixed]=\"true\" [display]=\"'lg'\">\r\n    <app-sidebar-nav [navItems]=\"lstNavs\" [perfectScrollbar] [disabled]=\"sidebarMinimized\"></app-sidebar-nav>\r\n    <app-sidebar-minimizer></app-sidebar-minimizer>\r\n  </app-sidebar>\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n    <!-- Breadcrumb -->\r\n    <!-- breaking change 'cui-breadcrumb' -->\r\n    <cui-breadcrumb>\r\n      <!-- Breadcrumb Menu-->\r\n     \r\n    </cui-breadcrumb>\r\n    \r\n    <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n    </div><!-- /.container-fluid -->\r\n  </main>  \r\n</div>\r\n<app-footer>\r\n  <span><a href=\"http://www.google.com\">App Team</a> &copy; 2021 App Team Solutions.</span>\r\n  <span class=\"ml-auto\">Powered by <a href=\"http://www.google.com\">App Team</a></span>\r\n</app-footer>\r\n");

/***/ }),

/***/ "nSew":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-login\">\r\n    <div>\r\n        <div class=\"card text-right\" style=\"width: 18rem;\">\r\n            <div class=\"card-body\">             \r\n              <div  class=\"login-container\" >\r\n                <button type=\"button\"  (click)=\"login()\" class=\"btn btn-success\">Start Login </button>\r\n              </div>\r\n              <!-- <button type=\"button\" (click)=\"login()\" class=\"btn btn-pill btn-success\">Login</button> -->              \r\n            </div>\r\n          </div>        \r\n    </div>\r\n</div>\r\n<!-- <app-redirect></app-redirect> -->");

/***/ }),

/***/ "wTWu":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  margin: auto;\n  margin-top: 10vh;\n}\n\n.login-container {\n  text-align: center;\n  height: 350px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n\n.login-container button {\n  width: 200px;\n  align-self: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFLQSxhQUFBO0VBQ0osa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFIQTs7QUFKSTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtBQU1SIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgbWFyZ2luOmF1dG87ICAgXHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoOyAgICBcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciB7ICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIH1cclxuICAgIGhlaWdodDogMzUwcHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "yB71":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-dialog/confirm-dialog.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<h4 mat-dialog-title align=\"center\">Confirm</h4>\r\n<div mat-dialog-content>{{data.message}}</div>\r\n<div mat-dialog-action align=\"center\">\r\n    <button type=\"button\" color=\"primary\" mat-button mat-dialog-close>Yes</button>&nbsp;\r\n    <button type=\"button\" color=\"warn\" mat-button (click)=\"onNoClick()\">NO</button>\r\n</div>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "AytR");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"], {
    useJit: true,
    preserveWhitespaces: true
})
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "zrKf":
/*!*************************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-body main {\n  min-height: 86vh;\n}\n\n.text-capitalize {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZWZhdWx0LWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUU7RUFDRSwwQkFBQTtBQUNKIiwiZmlsZSI6ImRlZmF1bHQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1ib2R5IG1haW4ge1xyXG4gIG1pbi1oZWlnaHQ6IDg2dmg7XHJcbiAgfVxyXG5cclxuICAudGV4dC1jYXBpdGFsaXplIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH0iXX0= */");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map