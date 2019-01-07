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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/detail/detail.component */ "./src/app/components/detail/detail.component.ts");





var routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
    {
        path: 'list',
        component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
    },
    {
        path: 'detail/:carId',
        component: _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-container {\r\n  padding: 16px 16px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNnB4IDE2cHggMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center app-container\">\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'car-showroom';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/detail/detail.component */ "./src/app/components/detail/detail.component.ts");
/* harmony import */ var _components_compare_compare_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/compare/compare.component */ "./src/app/components/compare/compare.component.ts");
/* harmony import */ var _services_car_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/car.service */ "./src/app/services/car.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_list_item_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/list/item/item.component */ "./src/app/components/list/item/item.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
                _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"],
                _components_compare_compare_component__WEBPACK_IMPORTED_MODULE_8__["CompareComponent"],
                _components_list_item_item_component__WEBPACK_IMPORTED_MODULE_11__["ItemComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            ],
            providers: [_services_car_service__WEBPACK_IMPORTED_MODULE_9__["CarService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/compare/compare.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/compare/compare.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comparison-content {\r\n  position: relative;\r\n  background-color: whitesmoke;\r\n  border-radius: 10px;\r\n}\r\n\r\n.close-icon {\r\n  position: absolute;\r\n  top: 0;\r\n  right: -32px;\r\n  outline: none;\r\n}\r\n\r\n.close-icon i {\r\n  font-size: 28px;\r\n  cursor: pointer;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.car-picture {\r\n  position: absolute;\r\n}\r\n\r\n.car-picture img {\r\n  width: 200px;\r\n}\r\n\r\n.detail-titles {\r\n  padding: 150px 0 0 16px;\r\n  width: 150px;\r\n  background-color: whitesmoke;\r\n  border-top-left-radius: 10px;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n.detail-values {\r\n  padding: 150px 16px 40px 0;\r\n  min-width: 200px;\r\n  max-width: 200px;\r\n  background-color: white;\r\n}\r\n\r\n.detail-item {\r\n  height: 40px;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.detail-titles .detail-item {\r\n  padding-right: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\n.detail-values .detail-item {\r\n  max-width: 200px;\r\n  padding: 0 16px;\r\n  color: cadetblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYXJlL2NvbXBhcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxhQUFhO0VBQ2IsY0FBYztDQUNmOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLGdDQUFnQztDQUNqQzs7QUFFRDtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7Q0FDaEM7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbXBhcmUvY29tcGFyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhcmlzb24tY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNsb3NlLWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IC0zMnB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jbG9zZS1pY29uIGkge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FyLXBpY3R1cmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNhci1waWN0dXJlIGltZyB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uZGV0YWlsLXRpdGxlcyB7XHJcbiAgcGFkZGluZzogMTUwcHggMCAwIDE2cHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGV0YWlsLXZhbHVlcyB7XHJcbiAgcGFkZGluZzogMTUwcHggMTZweCA0MHB4IDA7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZGV0YWlsLWl0ZW0ge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5kZXRhaWwtdGl0bGVzIC5kZXRhaWwtaXRlbSB7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmRldGFpbC12YWx1ZXMgLmRldGFpbC1pdGVtIHtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBjb2xvcjogY2FkZXRibHVlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/compare/compare.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/compare/compare.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comparison-content d-flex\">\n  <div class=\"detail-titles\">\n    <div class=\"detail-item d-flex align-items-center justify-content-end\">Name</div>\n    <div class=\"detail-item d-flex align-items-center justify-content-end\">Year</div>\n    <div class=\"detail-item d-flex align-items-center justify-content-end\">Price</div>\n    <div class=\"detail-item d-flex align-items-center justify-content-end\">Engine</div>\n    <div class=\"detail-item d-flex align-items-center justify-content-end\">Horsepower</div>\n    <div class=\"detail-item d-flex align-items-center justify-content-end\">Torque</div>\n    <div class=\"detail-item d-flex align-items-center justify-content-end\">0-100kmh</div>\n    <div class=\"detail-item d-flex align-items-center justify-content-end\">Payload</div>\n    <div class=\"detail-item d-flex align-items-center justify-content-end\">Fuel Tank</div>\n  </div>\n  <div *ngFor=\"let car of carsSelected; let i = index\"\n       class=\"car-detail d-flex flex-column\">\n    <div class=\"car-picture\">\n      <img [src]=\"getCarPicURL(car)\"\n           [alt]=\"car.model + ' picture'\">\n    </div>\n    <div class=\"detail-values\">\n      <div class=\"detail-item d-flex align-items-center\">{{ car.brand }} {{ car.model }}</div>\n      <div class=\"detail-item d-flex align-items-center\">{{ car.year }}</div>\n      <div class=\"detail-item d-flex align-items-center\">{{ car.price | currency:'USD' }}</div>\n      <div class=\"detail-item d-flex align-items-center\">{{ car.detail.engine }}</div>\n      <div class=\"detail-item d-flex align-items-center\">{{ car.detail.horsepower }} Hp</div>\n      <div class=\"detail-item d-flex align-items-center\">{{ car.detail.torque }} Lb-Ft.</div>\n      <div class=\"detail-item d-flex align-items-center\">{{ car.detail.acceleration }} Seconds</div>\n      <div class=\"detail-item d-flex align-items-center\">{{ car.detail.payload }} Lbs.</div>\n      <div class=\"detail-item d-flex align-items-center\">{{ car.detail.fuelTank }} Gal.</div>\n    </div>\n  </div>\n  <div class=\"close-icon noselect\"\n       (click)=\"closeCompare()\">\n    <i class=\"material-icons\">close</i>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/compare/compare.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/compare/compare.component.ts ***!
  \*********************************************************/
/*! exports provided: CompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareComponent", function() { return CompareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/car.service */ "./src/app/services/car.service.ts");



var CompareComponent = /** @class */ (function () {
    function CompareComponent(_car) {
        this._car = _car;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CompareComponent.prototype.ngOnInit = function () { };
    CompareComponent.prototype.getCarPicURL = function (car) {
        return this._car.getPicURL(car.brand, car.model, false);
    };
    CompareComponent.prototype.closeCompare = function () {
        this.close.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CompareComponent.prototype, "carsSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CompareComponent.prototype, "close", void 0);
    CompareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compare',
            template: __webpack_require__(/*! ./compare.component.html */ "./src/app/components/compare/compare.component.html"),
            styles: [__webpack_require__(/*! ./compare.component.css */ "./src/app/components/compare/compare.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"]])
    ], CompareComponent);
    return CompareComponent;
}());



/***/ }),

/***/ "./src/app/components/detail/detail.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/detail/detail.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view-container {\r\n  /* max-width: calc(100% - 32px); */\r\n}\r\n\r\n.pictures-container {\r\n  background-color: white;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.close-icon {\r\n  padding: 16px;\r\n  position: absolute;\r\n  right: 16px;\r\n}\r\n\r\n.close-icon i {\r\n  font-size: 28px;\r\n  color: gray;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n.carousel {\r\n  outline: none;\r\n}\r\n\r\nimg {\r\n  width: 80%;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n.carousel-caption {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.carousel-caption h3 {\r\n  margin: 0;\r\n}\r\n\r\n.carousel-caption span {\r\n  font-size: 20px;\r\n}\r\n\r\n.detail-container {\r\n  padding: 16px 16px;\r\n  background-color: slategray;\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n.detail-titles {\r\n  padding: 16px 0 40px 16px;\r\n  width: 200px;\r\n  background-color: whitesmoke;\r\n  border-top-left-radius: 25px;\r\n  border-bottom-left-radius: 25px;\r\n}\r\n\r\n.detail-values {\r\n  padding: 16px 16px 40px 0;\r\n  min-width: 150px;\r\n  background-color: white;\r\n  border-top-right-radius: 25px;\r\n  border-bottom-right-radius: 25px;\r\n}\r\n\r\n.detail-item {\r\n  height: 40px;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.detail-titles .detail-item {\r\n  padding-right: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\n.detail-values .detail-item {\r\n  padding: 0 16px;\r\n  color: cadetblue;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .detail-item {\r\n    height: 30px;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .detail-titles {\r\n    width: 170px;\r\n  }\r\n\r\n  .detail-values {\r\n    min-width: 140px;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7Q0FDcEM7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLDhCQUE4QjtDQUMvQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztDQUNmOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxxQ0FBcUM7Q0FDdEM7O0FBRUQ7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyxpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0NBQ2pDOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7Q0FDaEM7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLGFBQWE7R0FDZDs7RUFFRDtJQUNFLGlCQUFpQjtHQUNsQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldy1jb250YWluZXIge1xyXG4gIC8qIG1heC13aWR0aDogY2FsYygxMDAlIC0gMzJweCk7ICovXHJcbn1cclxuXHJcbi5waWN0dXJlcy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jbG9zZS1pY29uIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTZweDtcclxufVxyXG5cclxuLmNsb3NlLWljb24gaSB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIGgzIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmRldGFpbC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHggMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmRldGFpbC10aXRsZXMge1xyXG4gIHBhZGRpbmc6IDE2cHggMCA0MHB4IDE2cHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4uZGV0YWlsLXZhbHVlcyB7XHJcbiAgcGFkZGluZzogMTZweCAxNnB4IDQwcHggMDtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4uZGV0YWlsLWl0ZW0ge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5kZXRhaWwtdGl0bGVzIC5kZXRhaWwtaXRlbSB7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmRldGFpbC12YWx1ZXMgLmRldGFpbC1pdGVtIHtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgY29sb3I6IGNhZGV0Ymx1ZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5kZXRhaWwtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAuZGV0YWlsLXRpdGxlcyB7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgfVxyXG5cclxuICAuZGV0YWlsLXZhbHVlcyB7XHJcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/detail/detail.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/detail/detail.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view-container d-flex flex-column\"\n     *ngIf=\"car\">\n  <div class=\"pictures-container\">\n    <ngb-carousel>\n      <ng-template ngbSlide>\n        <img [src]=\"pics[0]\"\n             [alt]=\"car.model + ' main picture'\">\n        <div class=\"carousel-caption\">\n          <h3>{{ car.brand }} {{ car.model }}</h3>\n          <span>{{ car.year }}</span>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <img [src]=\"pics[1]\"\n             [alt]=\"car.model + ' secondary picture'\">\n        <div class=\"carousel-caption\">\n          <span>Price</span>\n          <h3>{{ car.price | currency:'USD' }}</h3>\n        </div>\n      </ng-template>\n    </ngb-carousel>\n  </div>\n  <div class=\"close-icon noselect\">\n    <i class=\"material-icons\"\n       [routerLink]=\"'/list'\">close</i>\n  </div>\n\n  <div class=\"detail-container d-flex justify-content-center\">\n    <div class=\"detail-titles\">\n      <div class=\"detail-item d-flex align-items-center justify-content-end\">Engine</div>\n      <div class=\"detail-item d-flex align-items-center justify-content-end\">Horsepower</div>\n      <div class=\"detail-item d-flex align-items-center justify-content-end\">Torque</div>\n      <div class=\"detail-item d-flex align-items-center justify-content-end\">0-60mph / 0-100kmh</div>\n      <div class=\"detail-item d-flex align-items-center justify-content-end\">Payload</div>\n      <div class=\"detail-item d-flex align-items-center justify-content-end\">Fuel Tank</div>\n    </div>\n    <div class=\"detail-values\">\n      <div class=\"detail-item d-flex align-items-center\">{{ car.detail.engine }}</div>\n      <div class=\"detail-item d-flex align-items-center\">{{ car.detail.horsepower }} Hp</div>\n      <div class=\"detail-item d-flex align-items-center\">{{ car.detail.torque }} Lb-Ft.</div>\n      <div class=\"detail-item d-flex align-items-center\">{{ car.detail.acceleration }} Seconds</div>\n      <div class=\"detail-item d-flex align-items-center\">{{ car.detail.payload }} Lbs.</div>\n      <div class=\"detail-item d-flex align-items-center\">{{ car.detail.fuelTank }} Gal.</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/detail/detail.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/detail/detail.component.ts ***!
  \*******************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_car_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/car.service */ "./src/app/services/car.service.ts");




var DetailComponent = /** @class */ (function () {
    function DetailComponent(_route, _car) {
        var _this = this;
        this._route = _route;
        this._car = _car;
        this.pics = [];
        this._route.paramMap.subscribe(function (params) {
            if (params.get('carId')) {
                _this._car
                    .getCarById(Number(params.get('carId')))
                    .subscribe(function (car) {
                    if (car) {
                        _this.car = car;
                        _this.getCarPictures();
                    }
                });
            }
        });
    }
    DetailComponent.prototype.getCarPictures = function () {
        this.pics.push(this._car.getPicURL(this.car.brand, this.car.model));
        this.pics.push(this._car.getPicURL(this.car.brand, this.car.model, false));
    };
    DetailComponent.prototype.ngOnInit = function () { };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/components/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/components/detail/detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/components/list/item/item.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/list/item/item.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-container {\r\n  height: 246px;\r\n  position: relative;\r\n  padding: 12px;\r\n  margin-bottom: 16px;\r\n  max-width: 204px;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n.hover.item-container:hover .picture-container,\r\n.hover.item-container:active .picture-container {\r\n  width: 190px;\r\n  height: 160px;\r\n}\r\n\r\n.hover.item-container:hover .picture-container img,\r\n.hover.item-container:active .picture-container img {\r\n  width: 160px;\r\n}\r\n\r\n.hover.item-container:hover .year,\r\n.hover.item-container:active .year {\r\n  font-size: 18px;\r\n}\r\n\r\n.year {\r\n  position: absolute;\r\n  top: 2px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  color: gray;\r\n}\r\n\r\n.picture-container {\r\n  width: 180px;\r\n  height: 150px;\r\n  border: solid 5px black;\r\n  border-radius: 50%;\r\n  background-color: white;\r\n}\r\n\r\n.picture-container img {\r\n  width: 150px;\r\n  border-radius: 30%;\r\n}\r\n\r\n.checkbox-container {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.checkbox-container img {\r\n  width: 28px;\r\n}\r\n\r\n.title {\r\n  margin-top: 8px;\r\n}\r\n\r\n.title .brand {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\n.title .model {\r\n  font-size: 15px;\r\n  margin-left: 4px;\r\n  color: gray;\r\n}\r\n\r\n.price {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  color: darkcyan;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0L2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztDQUNmOztBQUVEOztFQUVFLGFBQWE7RUFDYixjQUFjO0NBQ2Y7O0FBRUQ7O0VBRUUsYUFBYTtDQUNkOztBQUVEOztFQUVFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsU0FBUztDQUNWOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpc3QvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1jb250YWluZXIge1xyXG4gIGhlaWdodDogMjQ2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBtYXgtd2lkdGg6IDIwNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uaG92ZXIuaXRlbS1jb250YWluZXI6aG92ZXIgLnBpY3R1cmUtY29udGFpbmVyLFxyXG4uaG92ZXIuaXRlbS1jb250YWluZXI6YWN0aXZlIC5waWN0dXJlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDE5MHB4O1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbn1cclxuXHJcbi5ob3Zlci5pdGVtLWNvbnRhaW5lcjpob3ZlciAucGljdHVyZS1jb250YWluZXIgaW1nLFxyXG4uaG92ZXIuaXRlbS1jb250YWluZXI6YWN0aXZlIC5waWN0dXJlLWNvbnRhaW5lciBpbWcge1xyXG4gIHdpZHRoOiAxNjBweDtcclxufVxyXG5cclxuLmhvdmVyLml0ZW0tY29udGFpbmVyOmhvdmVyIC55ZWFyLFxyXG4uaG92ZXIuaXRlbS1jb250YWluZXI6YWN0aXZlIC55ZWFyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi55ZWFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ucGljdHVyZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJvcmRlcjogc29saWQgNXB4IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBpY3R1cmUtY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcclxufVxyXG5cclxuLmNoZWNrYm94LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLmNoZWNrYm94LWNvbnRhaW5lciBpbWcge1xyXG4gIHdpZHRoOiAyOHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLnRpdGxlIC5icmFuZCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGl0bGUgLm1vZGVsIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGRhcmtjeWFuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/list/item/item.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/list/item/item.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item-container\"\n     [class.hover]=\"!selectionMode\"\n     (click)=\"onItemClicked()\">\n  <span class=\"year\">{{ car.year }}</span>\n  <div class=\"picture-container noselect d-flex align-items-center justify-content-center\">\n    <img [src]=\"getPicURL()\"\n         [alt]=\"car.model + ' main picture'\">\n  </div>\n  <div class=\"checkbox-container noselect\"\n       *ngIf=\"selectionMode\">\n    <img src=\"/assets/images/checkbox_on.png\"\n         *ngIf=\"selected\">\n    <img src=\"/assets/images/checkbox_off.png\"\n         *ngIf=\"!selected\">\n  </div>\n  <div class=\"title d-flex justify-content-center\">\n    <span class=\"brand\">{{ car.brand }}</span>\n    <span class=\"model\">{{ car.model }}</span>\n  </div>\n  <div class=\"price d-flex justify-content-center\">\n    {{ car.price | currency:'USD' }}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/list/item/item.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/list/item/item.component.ts ***!
  \********************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/car.service */ "./src/app/services/car.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ItemComponent = /** @class */ (function () {
    function ItemComponent(_car, _router) {
        this._car = _car;
        this._router = _router;
        this.itemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ItemComponent.prototype.ngOnInit = function () { };
    ItemComponent.prototype.getPicURL = function () {
        return this._car.getPicURL(this.car.brand, this.car.model);
    };
    ItemComponent.prototype.onItemClicked = function () {
        if (this.selectionMode) {
            this.itemClicked.emit(this.car.id);
        }
        else {
            this._router.navigate(['detail', this.car.id]);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemComponent.prototype, "car", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ItemComponent.prototype, "selected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ItemComponent.prototype, "selectionMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemComponent.prototype, "itemClicked", void 0);
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/components/list/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/components/list/item/item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/list/list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view-container {\r\n  max-height: calc(100vh - 32px);\r\n}\r\n\r\n.header {\r\n  height: 80px;\r\n  min-height: 80px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.compare-container {\r\n  position: relative;\r\n}\r\n\r\n.select-to-compare-button {\r\n  width: 190px;\r\n  height: 40px;\r\n  padding: 8px 24px;\r\n  cursor: pointer;\r\n  background-color: darkslategray;\r\n  border-radius: 4px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  color: white;\r\n}\r\n\r\n.select-to-compare-button.clicked {\r\n  background-color: slategray;\r\n}\r\n\r\n.compare-button {\r\n  height: 40px;\r\n  /* position: absolute; */\r\n  /* left: 190px; */\r\n  padding-left: 16px;\r\n  cursor: pointer;\r\n}\r\n\r\n.compare-button img {\r\n  width: 40px;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .header {\r\n    height: 96px;\r\n    min-height: 96px;\r\n  }\r\n\r\n  .compare-container {\r\n    margin-top: 16px;\r\n    padding-right: 0;\r\n  }\r\n\r\n  .compare-button img {\r\n    width: 32px;\r\n  }\r\n}\r\n\r\n.search-button {\r\n  cursor: pointer;\r\n  margin-left: 8px;\r\n  font-size: 28px;\r\n  color: gray;\r\n}\r\n\r\n.pagination-container {\r\n  min-height: 54px;\r\n}\r\n\r\n.list-container {\r\n  /* max-height: calc(100vh - 214px); */\r\n  overflow: auto;\r\n}\r\n\r\n.comparison-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(0, 0, 0, 0.54);\r\n  z-index: 100;\r\n}\r\n\r\n.brand-logo img {\r\n  width: 40px;\r\n  padding-right: 16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQjtDQUNoQzs7QUFFRDtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0dBQ2xCOztFQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLFlBQVk7R0FDYjtDQUNGOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usc0NBQXNDO0VBQ3RDLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLHNDQUFzQztFQUN0QyxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3LWNvbnRhaW5lciB7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDMycHgpO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWluLWhlaWdodDogODBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uY29tcGFyZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNlbGVjdC10by1jb21wYXJlLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDE5MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiA4cHggMjRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlbGVjdC10by1jb21wYXJlLWJ1dHRvbi5jbGlja2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XHJcbn1cclxuXHJcbi5jb21wYXJlLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAvKiBsZWZ0OiAxOTBweDsgKi9cclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29tcGFyZS1idXR0b24gaW1nIHtcclxuICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgbWluLWhlaWdodDogOTZweDtcclxuICB9XHJcblxyXG4gIC5jb21wYXJlLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5jb21wYXJlLWJ1dHRvbiBpbWcge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDU0cHg7XHJcbn1cclxuXHJcbi5saXN0LWNvbnRhaW5lciB7XHJcbiAgLyogbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIxNHB4KTsgKi9cclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmNvbXBhcmlzb24tY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4uYnJhbmQtbG9nbyBpbWcge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view-container d-flex flex-column\">\n  <div class=\"header d-flex flex-column flex-md-row align-items-center\">\n    <div class=\"col-md-6 d-flex align-items-center\">\n      <div class=\"brand-logo justify-content-end\">\n        <img [src]=\"getLogoURL(brandSelected)\"\n             *ngIf=\"brandSelected\">\n      </div>\n      <input type=\"text\"\n             class=\"form-control col-md-8\"\n             [(ngModel)]=\"searchText\"\n             [ngbTypeahead]=\"search\"\n             placeholder=\"Search by brand name...\"\n             (selectItem)=\"onBrandSelected($event)\" />\n      <i class=\"material-icons noselect search-button\"\n         (click)=\"clearSearch()\"\n         placement=\"bottom\"\n         ngbTooltip=\"Clear search result\">clear</i>\n    </div>\n    <div class=\"compare-container d-flex col-md-6 justify-content-center\">\n      <div class=\"select-to-compare-button noselect d-flex justify-content-center align-items-center\"\n           [class.clicked]=\"selectionMode\"\n           (click)=\"onSelectToCompareClicked()\">Select to Compare</div>\n      <div *ngIf=\"selectionMode && carsToCompare.length > 1\"\n           class=\"compare-button noselect d-flex align-items-center\"\n           (click)=\"onCompareClicked()\"\n           placement=\"top\"\n           ngbTooltip=\"Compare cars\">\n        <img src=\"/assets/images/compare_icon.png\"\n             alt=\"Compare Icon\">\n      </div>\n    </div>\n  </div>\n  <div class=\"d-flex flex-wrap justify-content-around list-container\">\n    <app-item *ngFor=\"let car of carsPagedList\"\n              [car]=\"car\"\n              [selected]=\"isCarSelected(car.id)\"\n              [selectionMode]=\"selectionMode\"\n              (itemClicked)=\"onItemClicked($event)\"></app-item>\n  </div>\n  <div class=\"pagination-container d-flex justify-content-center align-items-center\"\n       *ngIf=\"carList.length\">\n    <ngb-pagination class=\"d-flex justify-content-start\"\n                    [collectionSize]=\"collectionSize\"\n                    [pageSize]=\"pageSize\"\n                    [(page)]=\"page\"\n                    (pageChange)=\"onPageChange($event)\"></ngb-pagination>\n  </div>\n</div>\n\n<div *ngIf=\"compareMode\"\n     class=\"comparison-container d-flex justify-content-center align-items-center\">\n  <app-compare [carsSelected]=\"carsSelected\"\n               (close)=\"onCloseCompare()\"></app-compare>\n</div>"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/car.service */ "./src/app/services/car.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ListComponent = /** @class */ (function () {
    function ListComponent(_car) {
        var _this = this;
        this._car = _car;
        this.carList = []; // Full car list
        this.brandList = [];
        this.carsPagedList = []; // Car list filtered by page
        this.filteredList = []; // Car list filtered by by search criteria
        this.carsToCompare = []; // Cars id to compare
        this.carsSelected = []; // Cars to compare
        this.maxCarsToCompare = 3;
        this.page = 1;
        this.pageSize = 12;
        this.collectionSize = 0;
        this.pagedCarList = [];
        this.selectionMode = false;
        this.compareMode = false;
        // Filter search text in the autocomplete
        // show maximum 10 suggestions in the dropdown
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) {
                return term.length < 1
                    ? []
                    : _this.brandList
                        .filter(function (b) {
                        return b.toLowerCase().indexOf(term.toLowerCase()) > -1;
                    })
                        .slice(0, 10);
            }));
        };
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._car.getCars().subscribe(function (carList) {
            _this.carList = carList;
            _this.carList.sort(function (car1, car2) {
                // Sort by brand name first
                if (car1.brand > car2.brand) {
                    return 1;
                }
                else if (car1.brand < car2.brand) {
                    return -1;
                }
                // Sort by model name second
                if (car1.model < car2.model) {
                    return -1;
                }
                else if (car1.model > car2.model) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.getPagedList(_this.carList);
            _this.brandList = _this.getBrandList(carList);
        });
    };
    ListComponent.prototype.getBrandList = function (carList) {
        var brandList = [];
        carList.map(function (car) {
            if (brandList.indexOf(car.brand) < 0) {
                brandList.push(car.brand);
            }
        });
        return brandList;
    };
    ListComponent.prototype.onSelectToCompareClicked = function () {
        this.selectionMode = !this.selectionMode;
        this.carsToCompare = [];
    };
    ListComponent.prototype.onCompareClicked = function () {
        var _this = this;
        this.compareMode = true;
        this.carsSelected = this.carList.filter(function (car) {
            return _this.isCarSelected(car.id);
        });
    };
    ListComponent.prototype.onCloseCompare = function () {
        this.compareMode = false;
        this.selectionMode = false;
        this.carsToCompare = [];
    };
    ListComponent.prototype.isCarSelected = function (id) {
        return this.carsToCompare.includes(id);
    };
    ListComponent.prototype.onItemClicked = function (carId) {
        if (!this.isCarSelected(carId) &&
            this.carsToCompare.length < this.maxCarsToCompare) {
            this.carsToCompare.push(carId);
        }
        else if (this.isCarSelected(carId)) {
            this.carsToCompare.splice(this.carsToCompare.indexOf(carId), 1);
        }
    };
    ListComponent.prototype.getPagedList = function (list) {
        var limitInf = (this.page - 1) * this.pageSize;
        var limitSup = (this.page - 1) * this.pageSize + this.pageSize;
        this.collectionSize = list.length;
        if (list.length < limitSup) {
            limitSup = list.length;
        }
        this.carsPagedList = list.slice(limitInf, limitSup);
    };
    ListComponent.prototype.onPageChange = function (page) {
        this.page = page;
        if (this.brandSelected) {
            this.getPagedList(this.filteredList);
        }
        else {
            this.getPagedList(this.carList);
        }
    };
    ListComponent.prototype.onBrandSelected = function (e) {
        var _this = this;
        // Search by brand name
        this.brandSelected = e.item;
        this.page = 1;
        this.filteredList = this.carList.filter(function (car) { return car.brand === _this.brandSelected; });
        this.getPagedList(this.filteredList);
    };
    ListComponent.prototype.getLogoURL = function (brand) {
        return this._car.getPicURL(brand);
    };
    ListComponent.prototype.clearSearch = function () {
        this.brandSelected = undefined;
        this.searchText = '';
        this.page = 1;
        this.filteredList = [];
        this.getPagedList(this.carList);
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/components/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/services/car.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/car.service.ts ***!
  \*****************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CarService = /** @class */ (function () {
    function CarService(_http) {
        this._http = _http;
        this.carsUrl = 'assets/cars-data-set.json';
    }
    CarService.prototype.getFolderName = function (name) {
        return name.replace(' ', '-').toLowerCase();
    };
    CarService.prototype.getPicURL = function (brand, model, mainPic) {
        if (mainPic === void 0) { mainPic = true; }
        var picURL = '';
        if (model) {
            var picName = mainPic ? 'main' : 'sec';
            picURL =
                '/assets/images/' +
                    this.getFolderName(brand) +
                    '/' +
                    this.getFolderName(model) +
                    '/' +
                    picName +
                    '.jpg';
        }
        else {
            picURL =
                '/assets/images/' + this.getFolderName(brand) + '/logo.png';
        }
        return picURL;
    };
    CarService.prototype.getCars = function () {
        return this._http.get(this.carsUrl);
    };
    CarService.prototype.getCarById = function (id) {
        return this.getCars().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (cars) { return cars.filter(function (car) { return car.id === id; })[0]; }));
    };
    CarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CarService);
    return CarService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\usuario\Documents\Ayrton\GAP\Test\code\car-showroom\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map