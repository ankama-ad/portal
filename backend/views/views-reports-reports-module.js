(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-reports-reports-module"],{

/***/ "0v0k":
/*!**************************************************************************!*\
  !*** ./src/app/views/reports/display-report/display-report.component.ts ***!
  \**************************************************************************/
/*! exports provided: DisplayReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayReportComponent", function() { return DisplayReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_display_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./display-report.component.html */ "jl7C");
/* harmony import */ var _display_report_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-report.component.scss */ "hK+p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");





var DisplayReportComponent = /** @class */ (function () {
    function DisplayReportComponent(route) {
        this.route = route;
        this.reportId = 0;
    }
    DisplayReportComponent.prototype.ngOnInit = function () {
        this.reportId = (this.route.snapshot.paramMap.get('id'));
    };
    DisplayReportComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    DisplayReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-display-report',
            template: _raw_loader_display_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_display_report_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DisplayReportComponent);
    return DisplayReportComponent;
}());



/***/ }),

/***/ "7++B":
/*!**************************************************************!*\
  !*** ./src/app/views/reports-list/reports-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ReportsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsListComponent", function() { return ReportsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reports_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reports-list.component.html */ "Ghda");
/* harmony import */ var _reports_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-list.component.scss */ "Iayl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _services_reportService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/reportService */ "Hxde");







var ReportsListComponent = /** @class */ (function () {
    function ReportsListComponent(reportService, router, authService) {
        this.reportService = reportService;
        this.router = router;
        this.authService = authService;
        this.reports = [];
    }
    ReportsListComponent.prototype.ngOnInit = function () {
        this.getReprots();
    };
    ReportsListComponent.prototype.getReprots = function () {
        var _this = this;
        this.reportService.getUserReports(this.authService.user.username).subscribe(function (res) {
            if (res && res.length) {
                _this.reports = res;
            }
        }, function (err) {
            console.log("err", err);
        });
    };
    ReportsListComponent.prototype.loadReport = function (reportId) {
        this.router.navigate(['/reports/details', reportId]);
    };
    ReportsListComponent.ctorParameters = function () { return [
        { type: _services_reportService__WEBPACK_IMPORTED_MODULE_6__["ReportService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    ReportsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-reports-list',
            template: _raw_loader_reports_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_reports_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_reportService__WEBPACK_IMPORTED_MODULE_6__["ReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], ReportsListComponent);
    return ReportsListComponent;
}());



/***/ }),

/***/ "G5b+":
/*!************************************************************!*\
  !*** ./src/app/views/reports/reports/reports.component.ts ***!
  \************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reports_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reports.component.html */ "H0lP");
/* harmony import */ var _reports_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.component.scss */ "RoSW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent.ctorParameters = function () { return []; };
    ReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-reports',
            template: _raw_loader_reports_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_reports_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "Ghda":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports-list/reports-list.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Reports List!</p>\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>      \r\n        <th>Id</th>\r\n        <th>Name</th>\r\n        <th>Description</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr class=\"cursor-pointer\" *ngFor=\"let item of reports; let i = index\" (click)=\"loadReport(item.id)\" >       \r\n        <td>{{item.id}}</td>\r\n        <td>{{item.reportName}}</td>\r\n        <td>{{item.reportDescription}}</td>\r\n      </tr>     \r\n    </tbody>\r\n  </table>");

/***/ }),

/***/ "H0lP":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/reports/reports.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "Hxde":
/*!*******************************************!*\
  !*** ./src/app/services/reportService.ts ***!
  \*******************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




var ReportService = /** @class */ (function () {
    function ReportService(http) {
        this.http = http;
        this.baseUri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApiUrl + "reports/";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
    }
    ReportService.prototype.getReports = function () {
        return this.http.get(this.baseUri + "getReports");
    };
    ReportService.prototype.getUserReports = function (username) {
        return this.http.get(this.baseUri + "getUserReports/" + username);
    };
    ReportService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ReportService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "Iayl":
/*!****************************************************************!*\
  !*** ./src/app/views/reports-list/reports-list.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cursor-pointer {\n  cursor: pointer;\n}\n.cursor-pointer:hover {\n  background-color: #b0aeae;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXBvcnRzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7QUFBSTtFQUNJLHlCQUFBO0FBRVIiLCJmaWxlIjoicmVwb3J0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnNvci1wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGFlYWU7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "Jfv1":
/*!*********************************************************!*\
  !*** ./src/app/views/reports/reports-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reports-list/reports-list.component */ "7++B");
/* harmony import */ var _display_report_display_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display-report/display-report.component */ "0v0k");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports/reports.component */ "G5b+");






var routes = [
    {
        path: '',
        data: { title: 'Reports' },
        component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_5__["ReportsComponent"],
        children: [
            {
                path: 'list',
                data: { title: 'List' },
                component: _reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_3__["ReportsListComponent"],
            },
            {
                path: 'details/:id',
                data: { title: 'details' },
                component: _display_report_display_report_component__WEBPACK_IMPORTED_MODULE_4__["DisplayReportComponent"],
            },
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/reports',
        pathMatch: 'full'
    }
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "RoSW":
/*!**************************************************************!*\
  !*** ./src/app/views/reports/reports/reports.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "hK+p":
/*!****************************************************************************!*\
  !*** ./src/app/views/reports/display-report/display-report.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNwbGF5LXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "jl7C":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/display-report/display-report.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row\">\r\n    <app-embedded-report class=\"col-12\" [reportId]=\"reportId\"></app-embedded-report>\r\n</div>");

/***/ }),

/***/ "qUkX":
/*!*************************************************!*\
  !*** ./src/app/views/reports/reports.module.ts ***!
  \*************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-routing.module */ "Jfv1");
/* harmony import */ var _reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reports-list/reports-list.component */ "7++B");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports/reports.component */ "G5b+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/shared.module */ "KZX/");
/* harmony import */ var _display_report_display_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./display-report/display-report.component */ "0v0k");








var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_4__["ReportsListComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_5__["ReportsComponent"], _display_report_display_report_component__WEBPACK_IMPORTED_MODULE_7__["DisplayReportComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"]
            ],
            exports: [_reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_4__["ReportsListComponent"]]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-reports-reports-module.js.map