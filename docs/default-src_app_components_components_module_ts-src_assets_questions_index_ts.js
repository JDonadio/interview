(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_components_module_ts-src_assets_questions_index_ts"],{

/***/ 7581:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_components_questions_questions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/questions/questions.component */ 8801);






let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        ],
        declarations: [
            src_app_components_questions_questions_component__WEBPACK_IMPORTED_MODULE_0__.QuestionsComponent,
        ],
        exports: [
            src_app_components_questions_questions_component__WEBPACK_IMPORTED_MODULE_0__.QuestionsComponent,
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 8801:
/*!*************************************************************!*\
  !*** ./src/app/components/questions/questions.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsComponent": () => (/* binding */ QuestionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _questions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions.component.html?ngResource */ 1970);
/* harmony import */ var _questions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions.component.scss?ngResource */ 4995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/state/state.service */ 6857);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ 9507);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);






let QuestionsComponent = class QuestionsComponent {
    constructor(state) {
        this.state = state;
        this.storeKey = null;
        this.comments = '';
        this.sections = [];
        this.expanded = {};
    }
    ngOnInit() {
        this.sections.forEach(section => {
            this.expanded[section.title] = this.hasAtLeastOneAnswers(section);
        });
    }
    save() {
        lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(() => {
            this.state.saveData(this.storeKey, this.sections, this.comments);
        }, 200)();
    }
    hasAtLeastOneAnswers(section) {
        return !!section.questions.filter(q => q.points).length;
    }
};
QuestionsComponent.ctorParameters = () => [
    { type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService }
];
QuestionsComponent.propDecorators = {
    storeKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    comments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    sections: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
QuestionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'itw-questions',
        template: _questions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_questions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionsComponent);



/***/ }),

/***/ 7129:
/*!*************************************!*\
  !*** ./src/app/models/candidate.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeCandidate": () => (/* binding */ makeCandidate)
/* harmony export */ });
function makeCandidate(data) {
    const defaultValue = {
        name: '',
        seniority: '',
        feedback: '',
    };
    return Object.assign(Object.assign({}, defaultValue), data);
}


/***/ }),

/***/ 6857:
/*!*************************************************!*\
  !*** ./src/app/services/state/state.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateService": () => (/* binding */ StateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var src_app_services_store_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/store/store.service */ 230);
/* harmony import */ var src_app_models_candidate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/candidate */ 7129);





const ACTIVE_TECHNOLOGIES_KEY = 'techs';
const CANDIDATE_KEY = 'candidate';
let StateService = class StateService {
    constructor(store) {
        this.store = store;
        this.candidate = (0,src_app_models_candidate__WEBPACK_IMPORTED_MODULE_1__.makeCandidate)({});
        this._candidate = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.candidate$ = this._candidate.asObservable();
        this.activeTechnologies = [];
        this._activeTechnologies = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.activeTechnologies$ = this._activeTechnologies.asObservable();
        this.indexedData = {};
        this.indexedComments = {};
        this._indexedData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.indexedData$ = this._indexedData.asObservable();
        this.indexedResume = {};
        this.canvasImage = {};
        this.init();
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.activeTechnologies = (yield this.store.get(ACTIVE_TECHNOLOGIES_KEY)) || [];
        });
    }
    saveCandidate(value) {
        this.candidate = value;
        this._candidate.next(value);
        this.store.set(CANDIDATE_KEY, value);
    }
    saveData(tech, data, comments) {
        const hasAtLeastOneAnswers = this.hasAtLeastOneAnswers(data);
        this.setIndexedData(tech, data, comments);
        this.setActiveTechnologies(tech, hasAtLeastOneAnswers);
        if (hasAtLeastOneAnswers) {
            this.store.set(tech, { data, comments });
        }
        else {
            this.store.remove(tech);
        }
    }
    setActiveTechnologies(tech, hasAtLeastOneAnswers) {
        let newTechs = [];
        if (hasAtLeastOneAnswers) {
            newTechs = [...this.activeTechnologies, tech];
        }
        else {
            newTechs = this.activeTechnologies.filter(_tech => _tech !== tech);
        }
        this.activeTechnologies = [...new Set(newTechs)];
        this._activeTechnologies.next(this.activeTechnologies);
        this.store.set(ACTIVE_TECHNOLOGIES_KEY, this.activeTechnologies);
    }
    setIndexedData(tech, data, comments) {
        this.indexedComments[tech] = comments;
        this.indexedData[tech] = data;
        this._indexedData.next(this.indexedData);
    }
    setIndexedResume(tech, resume) {
        this.indexedResume[tech] = resume;
    }
    setCanvasImageFor(tech, base64Image) {
        this.canvasImage[tech] = base64Image;
    }
    hasAtLeastOneAnswers(data) {
        return !!data.map(section => section.questions
            .filter(q => q.points)
            .map(q => q.points)).flat().length;
    }
};
StateService.ctorParameters = () => [
    { type: src_app_services_store_store_service__WEBPACK_IMPORTED_MODULE_0__.StoreService }
];
StateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], StateService);



/***/ }),

/***/ 8545:
/*!***********************************************************!*\
  !*** ./src/assets/questions/front-end/angular/angular.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularQuestions": () => (/* binding */ AngularQuestions)
/* harmony export */ });
const AngularQuestions = [
    {
        title: 'Version',
        questions: [
            {
                level: null,
                criteria: null,
                text: 'En tu actual proyecto: que versión utilizas y cual es tu rol actual ?',
            },
            {
                level: 'advanced',
                criteria: 'optional',
                text: 'Sabes que es Ivy ?',
            },
        ]
    },
    {
        title: 'Lazy loading',
        questions: [
            {
                level: 'initial',
                criteria: 'optional',
                text: 'Podrías describir el concepto de Lazy Loading ?',
            },
            {
                level: 'initial',
                criteria: null,
                text: 'Dónde y cómo se configura ?',
            },
        ]
    },
    {
        title: 'Components',
        questions: [
            {
                level: 'initial',
                criteria: null,
                text: 'Que es un componente ?',
            },
            {
                level: 'initial',
                criteria: null,
                text: 'Diferencia entre Componente y Directiva',
            },
            {
                level: 'initial',
                criteria: null,
                text: 'Cómo se comunican los Componentes ?',
            },
        ]
    },
    {
        title: 'Pipes',
        questions: [
            {
                level: 'initial',
                criteria: null,
                text: 'Que son los pipes y para que se utilizan ?',
            },
            {
                level: 'initial',
                criteria: null,
                text: 'Hiciste Pipes custom ?',
            },
            {
                level: 'intermediate',
                criteria: 'optional',
                text: 'Diferencia entre Pipe PURO e IMPURO ?',
            },
            {
                level: 'intermediate',
                criteria: null,
                text: 'Para que sirve en Pipe Async ?',
            },
        ]
    },
    {
        title: 'State Management',
        questions: [
            {
                level: 'intermediate',
                criteria: null,
                text: 'Si tengo un formulario con información cargada y refresco la vista, cómo persistirías los datos ?',
            },
            {
                level: 'advanced',
                criteria: null,
                text: 'Utilizaste servicios como NGXS o NgRx ? Si es así, conceptual mente cómo funcionan las responsabilidades ?',
            },
        ]
    },
    {
        title: 'Observable',
        questions: [
            {
                level: 'initial',
                criteria: null,
                text: 'Podrías describir con tus palabras lo que entendes por Observable ?',
            },
            {
                level: 'intermediate',
                criteria: null,
                text: 'Cuándo y para que lo utilizarías ?',
            },
            {
                level: 'advanced',
                criteria: null,
                text: 'Podrías describir que es un BehaviorSubject ? (Puede haberlo mencionado en la sección de State Management)',
            },
            {
                level: 'intermediate',
                criteria: null,
                text: 'Sabrías la diferencia entre BehaviorSubject y Subject ? (Puede haberlo mencionado en la sección de State Management)',
            },
            {
                level: 'initial',
                criteria: null,
                text: 'Sabrías describir la diferencia entre un Observable y una Promise ?',
            },
            {
                level: 'intermediate',
                criteria: null,
                text: 'Si necesito hacer un HTTP Request, me conviene utilizar Observables o Promises ?',
            },
        ]
    },
    {
        title: 'Change Detection Strategy',
        questions: [
            {
                level: 'intermediate',
                criteria: null,
                text: 'Conoces el concepto de Estrategia de Detección de Cambios ?',
            },
            {
                level: 'advanced',
                criteria: null,
                text: 'Cuántas estrategias conoces y cómo funcionan ?',
            },
        ]
    },
    {
        title: 'View Encapsulation',
        questions: [
            {
                level: 'intermediate',
                criteria: null,
                text: 'Conoces el concepto de Encapsulación de Vista ?',
            },
            {
                level: 'advanced',
                criteria: null,
                text: 'Cuántos tipos hay y que diferencias tienen ?',
            },
        ]
    },
    {
        title: 'Forms',
        questions: [
            {
                level: 'intermediate',
                criteria: null,
                text: 'Conoces las estrategias que existen en angular para el manejo de formularios y cuál es la diferencia entre ellas ?',
            },
            {
                level: 'advanced',
                criteria: null,
                text: 'Utilizaste validaciones custom y dinámicas ?',
            },
            {
                level: 'advanced',
                criteria: null,
                text: 'Que paso extra hay que hacer cuando cambias dinámicamente la validación de un control ?',
            },
            {
                level: 'advanced',
                criteria: null,
                text: 'Hiciste uso de la interfaz ControlValueAccessor ? Para que ?',
            },
        ]
    },
    {
        title: 'Performance',
        questions: [
            {
                level: 'intermediate',
                criteria: 'optional',
                text: 'Para que sirve la instrucción trackBy del *ngFor ?',
            },
            {
                level: 'advanced',
                criteria: 'optional',
                text: 'Explica con tus palabras que es el tree-shaking y como funciona ?',
            },
            {
                level: 'advanced',
                criteria: 'optional',
                text: 'Conoces la diferencia entre la compilación JIT y la AOT ?',
            },
            {
                level: 'advanced',
                criteria: 'optional',
                text: 'Sabes que es y lo que hace ngcc ?',
            },
        ]
    },
    {
        title: 'Routing',
        questions: [
            {
                level: 'intermediate',
                criteria: 'optional',
                text: 'Como haces para securizar una ruta?',
            },
            {
                level: 'advanced',
                criteria: 'optional',
                text: 'Como estructurarias un enrutamiento que tiene Tabs ?',
            },
        ]
    },
    {
        title: 'Resolvers',
        questions: [
            {
                level: 'advanced',
                criteria: 'optional',
                text: 'Para que sirve y como funcionan los resolvers ?',
            },
        ]
    },
    {
        title: 'PWA',
        questions: [
            {
                level: 'advanced',
                criteria: 'optional',
                text: 'Que son las PWA, has trabajado con ellas ?',
            },
            {
                level: 'advanced',
                criteria: 'optional',
                text: 'Qué son service workers, los has utilizado ?',
            },
            {
                level: 'advanced',
                criteria: 'optional',
                text: 'Cuando considerarías utilizar una PWA ?',
            },
        ]
    },
];


/***/ }),

/***/ 4321:
/*!***************************************************!*\
  !*** ./src/assets/questions/front-end/css/css.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CssQuestions": () => (/* binding */ CssQuestions)
/* harmony export */ });
const CssQuestions = [
    {
        title: 'Positioning',
        questions: [
            {
                level: 'initial',
                criteria: null,
                text: 'Si a un elemento le cambio su posición a absolute, es absoluta respecto a que elemento ?',
            },
            {
                level: 'intermediate',
                criteria: null,
                text: 'Conoces flexbox y que reglas define para su uso ?',
            },
            {
                level: 'intermediate',
                criteria: null,
                text: 'Sabrías que diferencias tiene flexbox con grid layout ?',
            },
            {
                level: 'advanced',
                criteria: null,
                text: 'A que es relativo la posición "fixed" ?',
            },
        ]
    },
    {
        title: 'Identificators & Specificity',
        questions: [
            {
                level: 'initial',
                criteria: null,
                text: 'Que tipo de selectores conoces ?',
            },
            {
                level: 'intermediate',
                criteria: null,
                text: 'Que son los pseudo-classes y los pseudo-elements y para que sirven ?',
            },
            {
                level: 'intermediate',
                criteria: null,
                text: 'Si tengo un elemento <p> definido como...',
            },
        ]
    },
    {
        title: 'Development / Organization Methodologies',
        questions: [
            {
                level: 'initial',
                criteria: null,
                text: 'Si te menciono BEM, OOCSS y SMACSS: sabrías decirme a que hacen referencia ?',
            },
            {
                level: 'initial',
                criteria: null,
                text: 'Podrías decirme que ventajas tengo al usar un preprocesador de CSS ?',
            },
            {
                level: 'intermediate',
                criteria: null,
                text: 'Si utilizas uno de estos, cuál elegis y por qué ?',
            },
            {
                level: 'intermediate',
                criteria: null,
                text: 'Sabrías definir un mixin y dar un ejemplo de uso ?',
            },
        ]
    },
    {
        title: 'Responsive',
        questions: [
            {
                level: 'advanced',
                criteria: 'optional',
                text: 'Si tengo una aplicación que debería adaptarse a diferentes tamaños de dispositivos, que se te ocurre que podrías implementar para este escenario ?',
            },
        ]
    },
    {
        title: 'General',
        questions: [
            {
                level: 'intermediate',
                criteria: null,
                text: 'Que unidades de medida, ademas los px, existen ?',
            },
            {
                level: 'intermediate',
                criteria: null,
                text: 'Tienen efecto el margin-top o el margin-bottom en los elementos en línea ?',
            },
            {
                level: 'intermediate',
                criteria: null,
                text: 'Para que sirve la propiedad z-index ?',
            },
            {
                level: 'initial',
                criteria: null,
                text: 'Que diferencia hay entre display:none y visibility:hidden?',
            },
            {
                level: 'advanced',
                criteria: null,
                text: 'Que son y que ventajas tienen las variables de css ?',
            },
        ]
    },
];


/***/ }),

/***/ 7652:
/*!*****************************************************************!*\
  !*** ./src/assets/questions/front-end/typescript/typescript.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeScriptQuestions": () => (/* binding */ TypeScriptQuestions)
/* harmony export */ });
const TypeScriptQuestions = [
    {
        title: '',
        questions: [
            {
                level: 'initial',
                criteria: null,
                text: '',
            },
            {
                level: 'intermediate',
                criteria: null,
                text: '',
            },
            {
                level: 'advanced',
                criteria: null,
                text: '',
            },
        ]
    },
];


/***/ }),

/***/ 781:
/*!*****************************************!*\
  !*** ./src/assets/questions/git/git.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GitQuestions": () => (/* binding */ GitQuestions)
/* harmony export */ });
const GitQuestions = [
    {
        title: '',
        questions: [
            {
                level: 'initial',
                criteria: null,
                text: '',
            },
            {
                level: 'intermediate',
                criteria: null,
                text: '',
            },
            {
                level: 'advanced',
                criteria: null,
                text: '',
            },
        ]
    },
];


/***/ }),

/***/ 3717:
/*!***************************************!*\
  !*** ./src/assets/questions/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularQuestions": () => (/* reexport safe */ _front_end_angular_angular__WEBPACK_IMPORTED_MODULE_0__.AngularQuestions),
/* harmony export */   "CssQuestions": () => (/* reexport safe */ _front_end_css_css__WEBPACK_IMPORTED_MODULE_1__.CssQuestions),
/* harmony export */   "TypeScriptQuestions": () => (/* reexport safe */ _front_end_typescript_typescript__WEBPACK_IMPORTED_MODULE_2__.TypeScriptQuestions),
/* harmony export */   "GitQuestions": () => (/* reexport safe */ _git_git__WEBPACK_IMPORTED_MODULE_3__.GitQuestions)
/* harmony export */ });
/* harmony import */ var _front_end_angular_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front-end/angular/angular */ 8545);
/* harmony import */ var _front_end_css_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./front-end/css/css */ 4321);
/* harmony import */ var _front_end_typescript_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./front-end/typescript/typescript */ 7652);
/* harmony import */ var _git_git__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./git/git */ 781);






/***/ }),

/***/ 4030:
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ 7982);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 8286:
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ 4030),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ 4985),
    objectToString = __webpack_require__(/*! ./_objectToString */ 1050);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 2388:
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ 836);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 3493:
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ 4985:
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ 4030);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 1050:
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 7982:
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 3493);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 836:
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 9507:
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ 4842),
    now = __webpack_require__(/*! ./now */ 9644),
    toNumber = __webpack_require__(/*! ./toNumber */ 9571);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 4842:
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 8419:
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 744:
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 8286),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 8419);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 9644:
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ 7982);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 9571:
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ 2388),
    isObject = __webpack_require__(/*! ./isObject */ 4842),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 744);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 4995:
/*!**************************************************************************!*\
  !*** ./src/app/components/questions/questions.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-label {\n  padding-left: 0.2rem;\n  font-size: 16px;\n}\n\nion-radio-group {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-content: center;\n  justify-content: flex-end;\n  align-items: center;\n  padding-top: 0.4rem;\n}\n\nion-radio-group .radio-option {\n  display: flex;\n  padding: 0.5rem;\n}\n\nion-radio-group .radio-option ion-label {\n  padding-right: 0.4rem;\n  font-size: 13px;\n}\n\n.question:last-child {\n  border-bottom: none;\n}\n\n.question {\n  padding-left: 0.6rem;\n  padding-top: 1rem;\n  border-bottom: 1px solid lightgray;\n}\n\n.question ion-label {\n  padding-top: 3px;\n}\n\n.question.initial {\n  border-left: 4px solid skyblue;\n}\n\n.question.intermediate {\n  border-left: 4px solid #5b965b;\n}\n\n.question.advanced {\n  border-left: 4px solid #f16464;\n}\n\n.question.optional {\n  background: #fdfac9;\n}\n\n.question.none {\n  padding-bottom: 1rem;\n}\n\n.comments {\n  margin-top: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDSTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQUNOOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtBQURGOztBQUdFO0VBQ0UsZ0JBQUE7QUFESjs7QUFJRTtFQUNFLDhCQUFBO0FBRko7O0FBS0U7RUFDRSw4QkFBQTtBQUhKOztBQU1FO0VBQ0UsOEJBQUE7QUFKSjs7QUFPRTtFQUNFLG1CQUFBO0FBTEo7O0FBUUU7RUFDRSxvQkFBQTtBQU5KOztBQVVBO0VBQ0UsZ0JBQUE7QUFQRiIsImZpbGUiOiJxdWVzdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pb24tcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogLjRyZW07XG5cbiAgLnJhZGlvLW9wdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAuNXJlbTtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjRyZW07XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICB9XG59XG5cbi5xdWVzdGlvbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnF1ZXN0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAuNnJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICB9XG5cbiAgJi5pbml0aWFsIHtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHNreWJsdWU7XG4gIH1cblxuICAmLmludGVybWVkaWF0ZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNWI5NjViO1xuICB9XG5cbiAgJi5hZHZhbmNlZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZjE2NDY0O1xuICB9XG5cbiAgJi5vcHRpb25hbCB7XG4gICAgYmFja2dyb3VuZDogI2ZkZmFjOTtcbiAgfVxuXG4gICYubm9uZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cbn1cblxuLmNvbW1lbnRzIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbn0iXX0= */";

/***/ }),

/***/ 1970:
/*!**************************************************************************!*\
  !*** ./src/app/components/questions/questions.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-accordion-group *ngFor=\"let section of sections\" [value]=\"true\">\n  <ion-card>\n    <ion-accordion [value]=\"expanded[section.title]\">\n      <ion-item slot=\"header\">\n        <ion-label>{{ section.title }}</ion-label>\n      </ion-item>\n\n      <ion-list slot=\"content\">\n        <div class=\"question\" [ngClass]=\"(question.level || 'none') + ' ' + (question.criteria || '')\"\n          *ngFor=\"let question of section.questions\">\n\n          <ion-label>{{ question.text }}</ion-label>\n\n          <ion-radio-group\n            allow-empty-selection=\"true\"\n            [(ngModel)]=\"question.points\"\n            (ngModelChange)=\"save()\"\n            *ngIf=\"question.level\">\n\n            <ion-note *ngIf=\"question.criteria === 'optional'\"><i>Optional</i></ion-note>\n\n            <div class=\"radio-option\" *ngFor=\"let val of [1,2,3,4,5]\">\n              <ion-label>{{ val }}</ion-label>\n              <ion-radio slot=\"start\" value=\"{{ val }}\"></ion-radio>\n            </div>\n          </ion-radio-group>\n        </div>\n      </ion-list>\n    </ion-accordion>\n  </ion-card>\n</ion-accordion-group>\n\n<ion-card class=\"comments\">\n  <ion-item>\n    <ion-label>Comentarios adicionales</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-textarea (ngModelChange)=\"save()\" debounce=\"300\" rows=\"5\" [(ngModel)]=\"comments\"></ion-textarea>\n  </ion-item>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts-src_assets_questions_index_ts.js.map