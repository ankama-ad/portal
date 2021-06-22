(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"],{

/***/ "+NEK":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "6dU7":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "aHM3");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "l70X");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-routing.module */ "jUYC");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/shared.module */ "KZX/");









var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot()
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "P3Bu":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <app-embedded-report class=\"col-12\" [reportId]=\"3\"></app-embedded-report>\r\n</div>\r\n<!-- <div class=\"row\">\r\n  <div class=\"col-6\">\r\n    <app-embedded-report class=\"col-12\" [reportId]=\"2\"></app-embedded-report>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <app-embedded-report class=\"col-12\" [reportId]=\"1\"></app-embedded-report>\r\n  </div>\r\n</div> -->");

/***/ }),

/***/ "aHM3":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js ***!
  \******************************************************************************/
/*! exports provided: ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective, ButtonsModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return ButtonCheckboxDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return ButtonRadioDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioGroupDirective", function() { return ButtonRadioGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return RADIO_CONTROL_VALUE_ACCESSOR$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return RADIO_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var C_Users_ankam_Documents_demo_portal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_ankam_Documents_demo_portal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons

/** @type {?} */

var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],

  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
  /**
  * @return {?}
  */
  function () {
    return ButtonCheckboxDirective;
  }),
  multi: true
};
/**
 * Add checkbox functionality to any element
 */

var ButtonCheckboxDirective = /*#__PURE__*/function () {
  function ButtonCheckboxDirective() {
    Object(C_Users_ankam_Documents_demo_portal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ButtonCheckboxDirective);

    /**
     * Truthy value, will be set to ngModel
     */
    this.btnCheckboxTrue = true;
    /**
     * Falsy value, will be set to ngModel
     */

    this.btnCheckboxFalse = false;
    this.state = false;
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
  } // view -> model

  /**
   * @return {?}
   */


  Object(C_Users_ankam_Documents_demo_portal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ButtonCheckboxDirective, [{
    key: "onClick",
    value: function onClick() {
      if (this.isDisabled) {
        return;
      }

      this.toggle(!this.state);
      this.onChange(this.value);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.toggle(this.trueValue === this.value);
    }
    /**
     * @protected
     * @return {?}
     */

  }, {
    key: "trueValue",
    get: function get() {
      return typeof this.btnCheckboxTrue !== 'undefined' ? this.btnCheckboxTrue : true;
    }
    /**
     * @protected
     * @return {?}
     */

  }, {
    key: "falseValue",
    get: function get() {
      return typeof this.btnCheckboxFalse !== 'undefined' ? this.btnCheckboxFalse : false;
    }
    /**
     * @param {?} state
     * @return {?}
     */

  }, {
    key: "toggle",
    value: function toggle(state) {
      this.state = state;
      this.value = this.state ? this.trueValue : this.falseValue;
    } // ControlValueAccessor
    // model -> view

    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.state = this.trueValue === value;
      this.value = value ? this.trueValue : this.falseValue;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.isDisabled = isDisabled;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
  }]);

  return ButtonCheckboxDirective;
}();

ButtonCheckboxDirective.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
  args: [{
    selector: '[btnCheckbox]',
    providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
  }]
}];
ButtonCheckboxDirective.propDecorators = {
  btnCheckboxTrue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  btnCheckboxFalse: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  state: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['class.active']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['attr.aria-pressed']
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['click']
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var RADIO_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],

  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
  /**
  * @return {?}
  */
  function () {
    return ButtonRadioDirective;
  }),
  multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */

var ButtonRadioDirective = /*#__PURE__*/function () {
  /**
   * @param {?} el
   * @param {?} cdr
   * @param {?} group
   * @param {?} renderer
   */
  function ButtonRadioDirective(el, cdr, group, renderer) {
    Object(C_Users_ankam_Documents_demo_portal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ButtonRadioDirective);

    this.el = el;
    this.cdr = cdr;
    this.group = group;
    this.renderer = renderer;
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
  }
  /**
   * Current value of radio component or group
   * @return {?}
   */


  Object(C_Users_ankam_Documents_demo_portal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ButtonRadioDirective, [{
    key: "value",
    get: function get() {
      return this.group ? this.group.value : this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      if (this.group) {
        this.group.value = value;
        return;
      }

      this._value = value;
    }
    /**
     * If `true` — radio button is disabled
     * @return {?}
     */

  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    ,
    set: function set(disabled) {
      this._disabled = disabled;
      this.setDisabledState(disabled);
    }
    /**
     * @return {?}
     */

  }, {
    key: "isActive",
    get: function get() {
      return this.btnRadio === this.value;
    }
    /**
     * @return {?}
     */

  }, {
    key: "onClick",
    value: function onClick() {
      if (this.el.nativeElement.attributes.disabled || !this.uncheckable && this.btnRadio === this.value) {
        return;
      }

      this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;

      this._onChange(this.value);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.uncheckable = typeof this.uncheckable !== 'undefined';
    }
    /**
     * @return {?}
     */

  }, {
    key: "onBlur",
    value: function onBlur() {
      this.onTouched();
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_onChange",
    value: function _onChange(value) {
      if (this.group) {
        this.group.onTouched();
        this.group.onChange(value);
        return;
      }

      this.onTouched();
      this.onChange(value);
    } // ControlValueAccessor
    // model -> view

    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.value = value;
      this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(disabled) {
      if (disabled) {
        this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
        return;
      }

      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
  }]);

  return ButtonRadioDirective;
}();

ButtonRadioDirective.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
  args: [{
    selector: '[btnRadio]',
    providers: [RADIO_CONTROL_VALUE_ACCESSOR]
  }]
}];
/** @nocollapse */

ButtonRadioDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
  }, {
    type: ButtonRadioGroupDirective,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
  }];
};

ButtonRadioDirective.propDecorators = {
  btnRadio: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  uncheckable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  isActive: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['class.active']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['attr.aria-pressed']
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['click']
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var RADIO_CONTROL_VALUE_ACCESSOR$1 = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],

  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
  /**
  * @return {?}
  */
  function () {
    return ButtonRadioGroupDirective;
  }),
  multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */

var ButtonRadioGroupDirective = /*#__PURE__*/function () {
  /**
   * @param {?} cdr
   */
  function ButtonRadioGroupDirective(cdr) {
    Object(C_Users_ankam_Documents_demo_portal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ButtonRadioGroupDirective);

    this.cdr = cdr;
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
  }
  /**
   * @return {?}
   */


  Object(C_Users_ankam_Documents_demo_portal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ButtonRadioGroupDirective, [{
    key: "value",
    get: function get() {
      return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      this._value = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this._value = value;
      this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(disabled) {
      if (this.radioButtons) {
        this.radioButtons.forEach(
        /**
        * @param {?} buttons
        * @return {?}
        */
        function (buttons) {
          buttons.setDisabledState(disabled);
        });
      }
    }
  }]);

  return ButtonRadioGroupDirective;
}();

ButtonRadioGroupDirective.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
  args: [{
    selector: '[btnRadioGroup]',
    providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
  }]
}];
/** @nocollapse */

ButtonRadioGroupDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
  }];
};

ButtonRadioGroupDirective.propDecorators = {
  radioButtons: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
    args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
    /**
    * @return {?}
    */
    function () {
      return ButtonRadioDirective;
    })]
  }]
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ButtonsModule = /*#__PURE__*/function () {
  function ButtonsModule() {
    Object(C_Users_ankam_Documents_demo_portal_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ButtonsModule);
  }

  Object(C_Users_ankam_Documents_demo_portal_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ButtonsModule, null, [{
    key: "forRoot",
    value:
    /**
     * @return {?}
     */
    function forRoot() {
      return {
        ngModule: ButtonsModule,
        providers: []
      };
    }
  }]);

  return ButtonsModule;
}();

ButtonsModule.decorators = [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
  args: [{
    declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
    exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
  }]
}];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

 //# sourceMappingURL=ngx-bootstrap-buttons.js.map

/***/ }),

/***/ "jUYC":
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "l70X");




var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "l70X":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "P3Bu");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.scss */ "+NEK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.LoadValues();
    };
    DashboardComponent.prototype.LoadValues = function () {
        this.DCBT = 120;
        this.DCBH = 100;
        this.VRT = 90;
        this.EVC = 65;
        this.AEIS = 23;
        this.AMTC = 45;
        this.TVHW = 90;
        this.TVTS = 29;
    };
    DashboardComponent.ctorParameters = function () { return []; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module.js.map