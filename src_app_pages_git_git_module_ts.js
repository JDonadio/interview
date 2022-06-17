"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_git_git_module_ts"],{

/***/ 7128:
/*!*************************************************!*\
  !*** ./src/app/pages/git/git-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GitPageRoutingModule": () => (/* binding */ GitPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _git_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./git.page */ 775);




const routes = [
    {
        path: '',
        component: _git_page__WEBPACK_IMPORTED_MODULE_0__.GitPage
    }
];
let GitPageRoutingModule = class GitPageRoutingModule {
};
GitPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GitPageRoutingModule);



/***/ }),

/***/ 9394:
/*!*****************************************!*\
  !*** ./src/app/pages/git/git.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GitPageModule": () => (/* binding */ GitPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _git_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./git-routing.module */ 7128);
/* harmony import */ var _git_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./git.page */ 775);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 7581);








let GitPageModule = class GitPageModule {
};
GitPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _git_routing_module__WEBPACK_IMPORTED_MODULE_0__.GitPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [
            _git_page__WEBPACK_IMPORTED_MODULE_1__.GitPage,
        ]
    })
], GitPageModule);



/***/ }),

/***/ 775:
/*!***************************************!*\
  !*** ./src/app/pages/git/git.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GitPage": () => (/* binding */ GitPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _git_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./git.page.html?ngResource */ 9986);
/* harmony import */ var _git_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./git.page.scss?ngResource */ 5730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_assets_questions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/questions/index */ 3717);
/* harmony import */ var src_app_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/store/store.service */ 230);






const STORE_KEY = 'git';
let GitPage = class GitPage {
    constructor(store) {
        this.store = store;
        this.storeKey = STORE_KEY;
        this.sections = src_assets_questions_index__WEBPACK_IMPORTED_MODULE_2__.GitQuestions;
        this.comments = '';
        this.isLoading = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            const storedData = yield this.store.get(STORE_KEY);
            this.sections = (storedData === null || storedData === void 0 ? void 0 : storedData.data) || src_assets_questions_index__WEBPACK_IMPORTED_MODULE_2__.GitQuestions;
            this.comments = (storedData === null || storedData === void 0 ? void 0 : storedData.comments) || '';
            this.isLoading = false;
        });
    }
};
GitPage.ctorParameters = () => [
    { type: src_app_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__.StoreService }
];
GitPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'itw-git',
        template: _git_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_git_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GitPage);



/***/ }),

/***/ 5730:
/*!****************************************************!*\
  !*** ./src/app/pages/git/git.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaXQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9986:
/*!****************************************************!*\
  !*** ./src/app/pages/git/git.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>\n      <div class=\"section-title\">\n        <ion-icon name=\"git-pull-request\"></ion-icon>\n        <div>Git</div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <itw-questions *ngIf=\"!isLoading\"\n    [sections]=\"sections\"\n    [comments]=\"comments\"\n    [storeKey]=\"storeKey\">\n  </itw-questions>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_git_git_module_ts.js.map