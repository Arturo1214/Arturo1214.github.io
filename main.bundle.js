webpackJsonp([1,4],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-blog',
            template: __webpack_require__(531),
            styles: [__webpack_require__(524)]
        }), 
        __metadata('design:paramtypes', [])
    ], BlogComponent);
    return BlogComponent;
}());
//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__(532),
            styles: [__webpack_require__(525)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverLatterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoverLatterComponent = (function () {
    function CoverLatterComponent() {
    }
    CoverLatterComponent.prototype.ngOnInit = function () {
    };
    CoverLatterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-cover-latter',
            template: __webpack_require__(533),
            styles: [__webpack_require__(526)]
        }), 
        __metadata('design:paramtypes', [])
    ], CoverLatterComponent);
    return CoverLatterComponent;
}());
//# sourceMappingURL=cover-latter.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_entities_work__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_entities_education__ = __webpack_require__(460);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent() {
        this.listWork = new Array();
        this.listWork.push(new __WEBPACK_IMPORTED_MODULE_1__shared_entities_work__["a" /* Work */]("MC4", "Desarrollo Software", "Marzo 2017", "Actual", "Desarrollo de Software, JavaEE, SMS, USSD", 2));
        this.listWork.push(new __WEBPACK_IMPORTED_MODULE_1__shared_entities_work__["a" /* Work */]("Humans Software Factory", "Analista , Desarrollo", "Noviembre de 2015", "Febrero de 2017", "Desarrollo de software (Web JavaEE)." +
            "Tottus Billing.- Aplicación web para la emisión de facturas según la norma SFV-14, incluida los módulos de compra, venta e inventario, multi sucursal."
            + " Contabilidad para Consultoras.- Aplicación Web para consultoras contables, genera la contabilidad de múltiples empresas, mediante el ingreso de comprobantes manuales o automáticos."
            + "Historias Clínicas (Centro de Salud Ocupacional SOI).- Aplicación Web para la gestión de historias clínicas de los pacientes del centro de salud ocupacional.", 3));
        this.listWork.push(new __WEBPACK_IMPORTED_MODULE_1__shared_entities_work__["a" /* Work */]("Qbit SRL", "Desarrollo Software", "Febrero de 2015", "Octubre 2015", "Desarrolo de aplicaciones moviles android nativo, desarrollo de aplicaciones web JEE."
            + "Taxi Corp.- Aplicación para el pedido de radio móvil mediante una aplicación móvil Android para el cliente, Aplicación web para la gestión de pedidos de móviles y control de vehículos de la empresa, aplicación móvil para el chofer para recibir las llamadas y control de posiciones médiate GPS ."
            + "Medifact.- Aplicación Web para la empresa MEDIPIEL SRL., control de inventario, producción de farmacéuticos, control de ventas, gestión de cajas."
            + "Inesco Tiket.- Aplicación Web para la empresa INESCO SA., emisión de ticket de pago a servicios de transporte que solicita la empresa, control de pago e integración con su sistema ERP de la empresa.", 4));
        this.listWork.push(new __WEBPACK_IMPORTED_MODULE_1__shared_entities_work__["a" /* Work */]("UAGRM", "Encargado Laboratorio", "Enero 2014", "Diciembre 2014", "Encargado de los laboratorios de computo de la Facultad de Ingeniería de Ciencias de La Computación y Telecomunicaciones de la UAGRM, colaboración en departamento de investigación."
            + "Encargado de Equipos de Computación.- Mantenimiento de los equipos."
            + " Encargado de la Red.- Configuración control y monitoreo de la red de los laboratorios de computación.", 5));
        this.listEducation = new Array();
        this.listEducation.push(new __WEBPACK_IMPORTED_MODULE_2__shared_entities_education__["a" /* Education */]("School Of Engineering", "Diplomado Gerencia de Proyectos de Desarrollo de Software", "Junio 2014", "Diciembre 2014", ""));
        this.listEducation.push(new __WEBPACK_IMPORTED_MODULE_2__shared_entities_education__["a" /* Education */]("Universidad Autónoma Gabriel René Moreno", "Ingeniería de Sistemas", "Marzo 2010", "Junio 2014", ""));
        this.listEducation.push(new __WEBPACK_IMPORTED_MODULE_2__shared_entities_education__["a" /* Education */]("UE. Renata Preto de Brunelli", "Bachiller en Humanidades", "Febrero 2006", "Diciembre 2009", ""));
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(534),
            styles: [__webpack_require__(527)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-project',
            template: __webpack_require__(535),
            styles: [__webpack_require__(528)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectComponent);
    return ProjectComponent;
}());
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 335;


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(466);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_project_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cover_latter_cover_latter_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blog_blog_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_4__project_project_component__["a" /* ProjectComponent */] },
    { path: 'cover-latter', component: __WEBPACK_IMPORTED_MODULE_5__cover_latter_cover_latter_component__["a" /* CoverLatterComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_6__blog_blog_component__["a" /* BlogComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            declarations: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(530),
            styles: [__webpack_require__(521)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_project_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_app_routing_module__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_navbar_navbar_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_footer_footer_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cover_latter_cover_latter_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__blog_blog_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__cover_latter_cover_latter_component__["a" /* CoverLatterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
/**
 * Created by arturo on 20-03-17.
 */
var Contact = (function () {
    function Contact(name, value) {
        this._name = name;
        this._value = value;
        this._icon = "";
    }
    Object.defineProperty(Contact.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Contact;
}());
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Education; });
/**
 * Created by arturo on 20-03-17.
 */
var Education = (function () {
    function Education(institution, academicDegree, startDate, endDate, description) {
        this._institution = institution;
        this._academicDegree = academicDegree;
        this._startDate = startDate;
        this._endDate = endDate;
        this._description = description;
    }
    Education.prototype.dateEducation = function () {
        return this._startDate + " - " + this._endDate;
    };
    Object.defineProperty(Education.prototype, "institution", {
        get: function () {
            return this._institution;
        },
        set: function (value) {
            this._institution = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Education.prototype, "academicDegree", {
        get: function () {
            return this._academicDegree;
        },
        set: function (value) {
            this._academicDegree = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Education.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        set: function (value) {
            this._startDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Education.prototype, "endDate", {
        get: function () {
            return this._endDate;
        },
        set: function (value) {
            this._endDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Education.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    return Education;
}());
//# sourceMappingURL=education.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
/**
 * Created by arturo on 20-03-17.
 */
var Person = (function () {
    function Person(name, surname) {
        this._name = name;
        this._surname = surname;
    }
    Object.defineProperty(Person.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.fullName = function () {
        return this._name + " " + this._surname;
    };
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        set: function (value) {
            this._surname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "occupation", {
        get: function () {
            return this._occupation;
        },
        set: function (value) {
            this._occupation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "citeCountry", {
        get: function () {
            return this._citeCountry;
        },
        set: function (value) {
            this._citeCountry = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
//# sourceMappingURL=person.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skill; });
/**
 * Created by arturo on 20-03-17.
 */
var Skill = (function () {
    function Skill(name, percentage) {
        this._name = name;
        this._percentage = percentage;
    }
    Object.defineProperty(Skill.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "percentage", {
        get: function () {
            return this._percentage;
        },
        set: function (value) {
            this._percentage = value;
        },
        enumerable: true,
        configurable: true
    });
    return Skill;
}());
//# sourceMappingURL=skill.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Work; });
/**
 * Created by arturo on 20-03-17.
 */
var Work = (function () {
    function Work(business, position, starDate, endDate, description, item) {
        this._business = business;
        this._position = position;
        this._starDate = starDate;
        this._endDate = endDate;
        this._description = description;
        this._item = item;
    }
    Work.prototype.dateWork = function () {
        return this._starDate + " - " + this._endDate;
    };
    Object.defineProperty(Work.prototype, "business", {
        get: function () {
            return this._business;
        },
        set: function (value) {
            this._business = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Work.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Work.prototype, "starDate", {
        get: function () {
            return this._starDate;
        },
        set: function (value) {
            this._starDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Work.prototype, "endDate", {
        get: function () {
            return this._endDate;
        },
        set: function (value) {
            this._endDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Work.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Work.prototype, "item", {
        get: function () {
            return this._item;
        },
        set: function (value) {
            this._item = value;
        },
        enumerable: true,
        configurable: true
    });
    return Work;
}());
//# sourceMappingURL=work.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(536),
            styles: [__webpack_require__(522)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_person__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_contact__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_skill__ = __webpack_require__(462);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent() {
        this.person = new __WEBPACK_IMPORTED_MODULE_1__entities_person__["a" /* Person */]("Arturo", "Herrera");
        this.person.occupation = "Arquitecto de Software - Desarrollo";
        this.person.description = "Ingeniero de sistemas, apasionado del analisis y desarrollo de Software";
        this.person.citeCountry = "Santa Cruz - Bolivia";
        this.person.address = "Urb. Guapuru II , C. Canaveral, N 17";
        this.listContact = new Array();
        this.listContact.push(new __WEBPACK_IMPORTED_MODULE_2__entities_contact__["a" /* Contact */]("Personal", "(591) 70856450"));
        this.listContact.push(new __WEBPACK_IMPORTED_MODULE_2__entities_contact__["a" /* Contact */]("Trabajo", "(591) 71475146"));
        this.listEmail = new Array();
        this.listEmail.push(new __WEBPACK_IMPORTED_MODULE_2__entities_contact__["a" /* Contact */]("Personal", "arturoherreraocana@gmail.com"));
        this.listSkill = new Array();
        this.listSkill.push(new __WEBPACK_IMPORTED_MODULE_3__entities_skill__["a" /* Skill */]("JavaEE (EJB, JPA, EAP, Primefaces)", "95%"));
        this.listSkill.push(new __WEBPACK_IMPORTED_MODULE_3__entities_skill__["a" /* Skill */]("Android Nativo", "80%"));
        this.listSkill.push(new __WEBPACK_IMPORTED_MODULE_3__entities_skill__["a" /* Skill */]("Sql (SqlServer , PostgresSql, Oracle, SQLite)", "85%"));
        this.listSkill.push(new __WEBPACK_IMPORTED_MODULE_3__entities_skill__["a" /* Skill */]("Python (Djanngo)", "60%"));
        this.listSkill.push(new __WEBPACK_IMPORTED_MODULE_3__entities_skill__["a" /* Skill */]("AngularJs, Angular2, Ionic2", "65%"));
        this.listSkill.push(new __WEBPACK_IMPORTED_MODULE_3__entities_skill__["a" /* Skill */]("HTML", "75%"));
        this.listSkill.push(new __WEBPACK_IMPORTED_MODULE_3__entities_skill__["a" /* Skill */]("SASS-CSS", "65%"));
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(537),
            styles: [__webpack_require__(523)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".docs-footer {\n  margin-top: 40px;\n  padding: 12px;\n  font-size: 12px; }\n\n.docs-footer-list {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  padding: 8px; }\n\n.docs-footer-angular-logo {\n  height: 50px; }\n\n.docs-footer-copyright {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.docs-footer-links ul {\n  list-style: none;\n  margin: 0 40px;\n  padding: 0; }\n  .docs-footer-links ul a {\n    font-size: 16px;\n    padding: 0;\n    text-decoration: none; }\n    .docs-footer-links ul a:hover {\n      text-decoration: underline; }\n\n@media screen and (max-width: 884px) {\n  .docs-footer-list {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; } }\n\nnav a.active {\n  color: #039be5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

module.exports = "<app-navbar ></app-navbar>\n\n<router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = "<p>\n  blog works!\n</p>\n"

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "<p>\n  cover-latter works!\n</p>\n"

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "<section class=\"col s12 m12 l8 section\">\n  <div class=\"row\">\n    <div class=\"section-wrapper z-depth-1\">\n      <div class=\"section-icon col s12 m12 l2\">\n        <i class=\"fa fa-suitcase\"></i>\n      </div>\n      <div class=\"custom-content col s12 m12 l10 wow fadeIn a1\" data-wow-delay=\"0.1s\">\n        <h2>Experiencia laboral</h2>\n\n        <div *ngFor=\"let work of listWork\">\n          <div class=\"custom-content-wrapper wow fadeIn a2\" data-wow-delay=\"0.2s\">\n            <h3> {{ work.business }}<span> {{ work.position }}</span></h3>\n            <span> {{ work.dateWork() }} </span>\n            <p> {{ work.description}}</p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <!-- ========================================\n     Education\n    ==========================================-->\n\n    <div class=\"section-wrapper z-depth-1\">\n      <div class=\"section-icon col s12 m12 l2\">\n        <i class=\"fa fa-graduation-cap\"></i>\n      </div>\n      <div class=\"custom-content col s12 m12 l10 wow fadeIn a1\" data-wow-delay=\"0.1s\" >\n        <h2>Educacion </h2>\n\n        <div *ngFor=\"let education of listEducation\">\n          <div class=\"custom-content-wrapper wow fadeIn a2\" data-wow-delay=\"0.2s\" >\n            <h3> {{ education.academicDegree }}<span> {{ education.institution }}</span></h3>\n            <span> {{ education.dateEducation() }} </span>\n            <p> {{ education.description}}</p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <!-- =======================================\n      portfolio Website\n    ==========================================-->\n\n    <div class=\"section-wrapper z-depth-1 wow fadeIn\" data-wow-delay=\"0.1s\">\n      <div class=\"interests col s12 m12 l10 wow fadeIn\" data-wow-delay=\"0.1s\">\n          <ul> <!-- interetsr icon start -->\n            <li><a href=\"https://github.com/Arturo1214\"> <i class=\"fa fa-github\"></i></a></li>\n            <li><a href=\"https://www.facebook.com/arturo1214\"><i class=\"fa fa-facebook\" ></i></a></li>\n            <li><a href=\"https://www.linkedin.com/in/arturo-herrera-o/\"><i class=\"fa fa-linkedin\" ></i></a></li>\n            <li><a href=\"https://plus.google.com/+ArturoHerreraOcaña\"><i class=\"fa fa-google-plus\" ></i></a></li>\n          </ul>\n\n      </div>\n    </div>\n  </div><!-- end row -->\n</section><!-- end section -->\n"

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<p>\n  project works!\n</p>\n"

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<footer class=\"docs-footer\">\n  <div class=\"docs-footer-list\">\n    <div class=\"footer-logo\">\n      <img class=\"docs-footer-angular-logo\"\n           src=\"../../../assets/img/homepage/angular-white-transparent.svg\"\n           alt=\"Angular\">\n    </div>\n\n    <div class=\"docs-footer-links\">\n      <ul>\n        <li> <a class=\"\" href=\"https://wwww.angular.io\">Learn Angular</a> </li>\n      </ul>\n    </div>\n\n    <div class=\"docs-footer-copyright\">\n      <p>Powered by Google ©2010-2016. Code licensed under an MIT-style License. Documentation licensed under CC BY 4.0.</p>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<!-- Start Sidebar -->\n<aside class=\"col l4 m12 s12 sidebar z-depth-1\" id=\"sidebar\">\n  <!--  Sidebar row -->\n  <div class=\"row\">\n    <!--  top section   -->\n    <div class=\"heading\">\n      <!-- ====================\n                IMAGE\n      ==========================-->\n      <div class=\"feature-img\">\n        <a href=\"index.html\"><img src=\"assets/images/profile-nav.jpg\" class=\"responsive-img\" alt=\"\"></a>\n      </div>\n      <!-- =========================================\n                 NAVIGATION\n      ==========================================-->\n      <div class=\" nav-icon\">\n        <nav>\n          <div class=\"nav-wrapper\">\n            <ul id=\"nav-mobile\" class=\"side-nav\" >\n              <li><a routerLink=\"/home\" onclick=\"$('.button-collapse').sideNav('hide')\"  >Currículum</a></li>\n              <li><a routerLink=\"/project\" onclick=\"$('.button-collapse').sideNav('hide')\"  >Proyectos</a></li>\n              <li><a routerLink=\"/cover-latter\" onclick=\"$('.button-collapse').sideNav('hide')\"  >Carta de presentación</a></li>\n              <li><a routerLink=\"/blog\" onclick=\"$('.button-collapse').sideNav('hide')\"  >Blog</a></li>\n              <li><a routerLink=\"/contact\" onclick=\"$('.button-collapse').sideNav('hide')\"  >Contacto</a></li>\n            </ul>\n            <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"fa fa-bars\"></i></a>\n          </div>\n        </nav>\n      </div>\n      <!-- ========================================\n                 NAME AND TAGLINE\n      ==========================================-->\n      <div class=\"title col s12 m12 l9 right  wow fadeIn\" data-wow-delay=\"0.1s\">\n        <h2>{{ person.fullName() }}</h2> <!-- title name -->\n        <span>{{ person.occupation }}</span>  <!-- tagline -->\n      </div>\n    </div>\n    <!-- sidebar info -->\n    <div class=\"col l12 m12 s12 sort-info sidebar-item\">\n      <div class=\"row\">\n        <div class=\"col m12 s12 l3 icon\"> <!-- icon -->\n          <i class=\"fa fa-user\"></i>\n        </div>\n        <div class=\"col m12 s12 l9 info wow fadeIn a1\" data-wow-delay=\"0.1s\" > <!-- text -->\n          <div class=\"section-item-details\">\n            <p>{{ person.description }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- MOBILE NUMBER -->\n    <div class=\"col l12 m12 s12  mobile sidebar-item\">\n      <div class=\"row\">\n        <div class=\"col m12 s12 l3 icon\">\n          <i class=\"fa fa-phone\"></i> <!-- icon -->\n        </div>\n        <div class=\"col m12 s12 l9 info wow fadeIn a2\" data-wow-delay=\"0.2s\" >\n          <div class=\"section-item-details\">\n            <div *ngFor=\"let contact of listContact\">\n              <div class=\"personal\">\n                <h4> {{ contact.value }}</h4>\n                <span> {{ contact.name }} </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--  EMAIL -->\n    <div class=\"col l12 m12 s12  email sidebar-item \">\n      <div class=\"row\">\n        <div class=\"col m12 s12 l3 icon\">\n          <i class=\"fa fa-envelope\"></i> <!-- icon -->\n        </div>\n        <div class=\"col m12 s12 l9 info wow fadeIn a3\" data-wow-delay=\"0.3s\">\n          <div class=\"section-item-details\">\n            <div *ngFor=\"let contact of listEmail\">\n              <div class=\"personal\">\n                <h4><a href=\"mailto:{{ contact.value }}\"> {{ contact.value }} </a> </h4>\n                <span> {{ contact.name }} </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- ADDRESS  -->\n    <div class=\"col l12 m12 s12  address sidebar-item \">\n      <div class=\"row\">\n        <div class=\"col l3 m12  s12 icon\">\n          <i class=\"fa fa-home\"></i> <!-- icon -->\n        </div>\n        <div class=\"col m12 s12 l9 info wow fadeIn a4\" data-wow-delay=\"0.4s\">\n          <div class=\"section-item-details\">\n            <div class=\"address-details\"> <!-- address  -->\n              <h4> {{ person.address }} </h4>\n                {{ person.citeCountry }}<br>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- SKILLS -->\n    <div class=\"col l12 m12 s12  skills sidebar-item\" >\n      <div class=\"row\">\n        <div class=\"col m12 l3 s12 icon\">\n          <i class=\"fa fa-calendar-o\"></i> <!-- icon -->\n        </div>\n        <!-- Skills -->\n        <div class=\"col m12 l9 s12 skill-line a5 wow fadeIn\" data-wow-delay=\"0.5s\">\n          <h3>Habilidades profesionales </h3>\n\n          <div *ngFor=\"let skill of listSkill\">\n            <span> {{ skill.name }}</span>\n            <div class=\"progress\">\n              <div class=\"determinate\"> {{ skill.percentage }} </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>   <!-- end row -->\n</aside><!-- end sidebar -->\n\n\n"

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(336);


/***/ })

},[554]);
//# sourceMappingURL=main.bundle.js.map