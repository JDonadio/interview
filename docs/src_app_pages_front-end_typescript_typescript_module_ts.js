"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_front-end_typescript_typescript_module_ts"],{

/***/ 6090:
/*!*************************************************************************!*\
  !*** ./src/app/pages/front-end/typescript/typescript-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeScriptPageRoutingModule": () => (/* binding */ TypeScriptPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _typescript_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typescript.page */ 5532);




const routes = [
    {
        path: '',
        component: _typescript_page__WEBPACK_IMPORTED_MODULE_0__.TypeScriptPage
    }
];
let TypeScriptPageRoutingModule = class TypeScriptPageRoutingModule {
};
TypeScriptPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TypeScriptPageRoutingModule);



/***/ }),

/***/ 5693:
/*!*****************************************************************!*\
  !*** ./src/app/pages/front-end/typescript/typescript.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeScriptPageModule": () => (/* binding */ TypeScriptPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _typescript_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typescript-routing.module */ 6090);
/* harmony import */ var _typescript_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typescript.page */ 5532);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 7581);








let TypeScriptPageModule = class TypeScriptPageModule {
};
TypeScriptPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _typescript_routing_module__WEBPACK_IMPORTED_MODULE_0__.TypeScriptPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [
            _typescript_page__WEBPACK_IMPORTED_MODULE_1__.TypeScriptPage,
        ]
    })
], TypeScriptPageModule);



/***/ }),

/***/ 5532:
/*!***************************************************************!*\
  !*** ./src/app/pages/front-end/typescript/typescript.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeScriptPage": () => (/* binding */ TypeScriptPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _typescript_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typescript.page.html?ngResource */ 1713);
/* harmony import */ var _typescript_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typescript.page.scss?ngResource */ 8354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_assets_questions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/questions/index */ 3717);
/* harmony import */ var src_app_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/store/store.service */ 230);






const STORE_KEY = 'typescript';
let TypeScriptPage = class TypeScriptPage {
    constructor(store) {
        this.store = store;
        this.storeKey = STORE_KEY;
        this.sections = src_assets_questions_index__WEBPACK_IMPORTED_MODULE_2__.TypeScriptQuestions;
        this.comments = '';
        this.isLoading = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            const storedData = yield this.store.get(STORE_KEY);
            this.sections = (storedData === null || storedData === void 0 ? void 0 : storedData.data) || src_assets_questions_index__WEBPACK_IMPORTED_MODULE_2__.TypeScriptQuestions;
            this.comments = (storedData === null || storedData === void 0 ? void 0 : storedData.comments) || '';
            this.isLoading = false;
        });
    }
};
TypeScriptPage.ctorParameters = () => [
    { type: src_app_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__.StoreService }
];
TypeScriptPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'itw-typescript',
        template: _typescript_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_typescript_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TypeScriptPage);



/***/ }),

/***/ 8354:
/*!****************************************************************************!*\
  !*** ./src/app/pages/front-end/typescript/typescript.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBlc2NyaXB0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1713:
/*!****************************************************************************!*\
  !*** ./src/app/pages/front-end/typescript/typescript.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>\n      <div class=\"section-title\">\n        <ion-icon name=\"logo-javascript\"></ion-icon>\n        <div>TypeScript</div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <itw-questions *ngIf=\"!isLoading\"\n    [sections]=\"sections\"\n    [comments]=\"comments\"\n    [storeKey]=\"storeKey\">\n  </itw-questions>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_front-end_typescript_typescript_module_ts.js.map