"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_front-end_angular_angular_module_ts"],{

/***/ 6879:
/*!*******************************************************************!*\
  !*** ./src/app/pages/front-end/angular/angular-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularPageRoutingModule": () => (/* binding */ AngularPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular.page */ 4014);




const routes = [
    {
        path: '',
        component: _angular_page__WEBPACK_IMPORTED_MODULE_0__.AngularPage
    }
];
let AngularPageRoutingModule = class AngularPageRoutingModule {
};
AngularPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AngularPageRoutingModule);



/***/ }),

/***/ 4741:
/*!***********************************************************!*\
  !*** ./src/app/pages/front-end/angular/angular.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularPageModule": () => (/* binding */ AngularPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-routing.module */ 6879);
/* harmony import */ var _angular_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular.page */ 4014);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 7581);








let AngularPageModule = class AngularPageModule {
};
AngularPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_routing_module__WEBPACK_IMPORTED_MODULE_0__.AngularPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [
            _angular_page__WEBPACK_IMPORTED_MODULE_1__.AngularPage,
        ]
    })
], AngularPageModule);



/***/ }),

/***/ 4014:
/*!*********************************************************!*\
  !*** ./src/app/pages/front-end/angular/angular.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularPage": () => (/* binding */ AngularPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular.page.html?ngResource */ 7964);
/* harmony import */ var _angular_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular.page.scss?ngResource */ 4248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_assets_questions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/questions/index */ 3717);
/* harmony import */ var src_app_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/store/store.service */ 230);






const STORE_KEY = 'angular';
let AngularPage = class AngularPage {
    constructor(store) {
        this.store = store;
        this.storeKey = STORE_KEY;
        this.sections = src_assets_questions_index__WEBPACK_IMPORTED_MODULE_2__.AngularQuestions;
        this.comments = '';
        this.isLoading = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            const storedData = yield this.store.get(STORE_KEY);
            this.sections = (storedData === null || storedData === void 0 ? void 0 : storedData.data) || src_assets_questions_index__WEBPACK_IMPORTED_MODULE_2__.AngularQuestions;
            this.comments = (storedData === null || storedData === void 0 ? void 0 : storedData.comments) || '';
            this.isLoading = false;
        });
    }
};
AngularPage.ctorParameters = () => [
    { type: src_app_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__.StoreService }
];
AngularPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'itw-angular',
        template: _angular_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_angular_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AngularPage);



/***/ }),

/***/ 4248:
/*!**********************************************************************!*\
  !*** ./src/app/pages/front-end/angular/angular.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmd1bGFyLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7964:
/*!**********************************************************************!*\
  !*** ./src/app/pages/front-end/angular/angular.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>\n      <div class=\"section-title\">\n        <ion-icon name=\"logo-angular\"></ion-icon>\n        <div>Angular</div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <itw-questions *ngIf=\"!isLoading\"\n    [sections]=\"sections\"\n    [comments]=\"comments\"\n    [storeKey]=\"storeKey\">\n  </itw-questions>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_front-end_angular_angular_module_ts.js.map