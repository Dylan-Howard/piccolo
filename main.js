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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"d-flex\">\n  <div class=\"head-bg\" [ngStyle]=\"{'background-image': 'url(assets/img/piccolo-inc_tractor-header.png)'}\"></div>\n  <div class=\"container my-auto\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <div class=\"slide-card-body\">\n              <h2 class=\"text-animate-1\">{{ content.heroTitle }}</h2>\n              <p class=\"text-muted text-animate-2\">{{ content.heroContent }}</p>\n            </div>\n          </div>\n        </div>\n        <button class=\"scroll-down\">\n          {{ content.heroScroll }}\n          <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 25.16 29.91\" height=\"16px\">\n            <defs>\n              <style>.cls-1{fill:none;}.cls-2{opacity:0.8;}.cls-3{clip-path:url(#clip-path);}.cls-4{fill:#fff;}</style>\n              <clipPath id=\"clip-path\" transform=\"translate(-5.96 -7.17)\">\n                <rect class=\"cls-1\" x=\"-3.5\" y=\"3.5\" width=\"43.99\" height=\"37\" transform=\"translate(-3.5 40.5) rotate(-90)\"/>\n              </clipPath>\n            </defs>\n            <g id=\"Layer_2\" data-name=\"Layer 2\">\n              <g id=\"Hero\">\n                <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n                  <g class=\"cls-2\">\n                    <g class=\"cls-3\">\n                      <polygon class=\"cls-4\" points=\"10.99 0 10.99 22.74 2.18 12.32 0 14.91 12.58 29.91 25.16 15 22.94 12.36 14.1 22.88 14.1 0 10.99 0\"/>\n                    </g>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </svg>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"quick-info-wrapper\">\n    <ul class=\"quick-info\">\n      <li>\n        <img src=\"assets/img/piccolo-inc_phone.svg\">\n        <p class=\"mb-0\"><a href=\"tel:2707816021\">(270) 781-6021</a></p>\n      </li>\n      <li>\n        <img src=\"assets/img/piccolo-inc_location.svg\">\n        <p class=\"mb-0\">7520 Louisville Road, Bowling Green, KY 42101</p>\n      </li>\n    </ul>\n  </div>\n</header>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 mx-auto my-4\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <!-- <img class=\"slide-card-head\" src=\"assets/img/piccolo-inc_about.jpg\"> -->\n            <div class=\"slide-card-body\">\n              <h2>{{ content.principlesTitle }}</h2>\n              <p class=\"text-muted\">{{ content.principlesContent }}</p>\n              <div class=\"btn-wrapper\">\n                <a class=\"btn\" routerLink=\"/about/principles/\">\n                  <span class=\"btn-text\">{{ content.principlesCTA }}</span>\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 40.83 34.34\" height=\"16px\">\n                    <defs>\n                      <style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#fff;}</style>\n                      <clipPath id=\"clip-path\" transform=\"translate(-9.79 -8.03)\">\n                        <rect class=\"cls-1\" width=\"60.05\" height=\"50.5\" transform=\"translate(60.05 50.5) rotate(-180)\"/>\n                      </clipPath>\n                    </defs>\n                    <g id=\"Layer_2\" data-name=\"Layer 2\">\n                      <g id=\"Hero\">\n                        <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n                          <g class=\"cls-2\">\n                            <polygon class=\"cls-3\" points=\"0 19.34 31.05 19.34 16.81 31.36 20.36 34.34 40.83 17.17 20.48 0 16.87 3.03 31.23 15.1 0 15.1 0 19.34\"/>\n                          </g>\n                        </g>\n                      </g>\n                    </g>\n                  </svg>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 mx-auto my-4\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <!-- <img class=\"slide-card-head\" src=\"assets/img/piccolo-inc_clients.jpg\"> -->\n            <div class=\"slide-card-body\">\n              <h2>{{ content.teamTitle }}</h2>\n              <p class=\"text-muted\">{{ content.teamContent }}</p>\n              <div class=\"btn-wrapper\">\n                <a class=\"btn\" routerLink=\"/about/team/\">\n                  <span class=\"btn-text\">{{ content.teamCTA }}</span>\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 40.83 34.34\" height=\"16px\">\n  <defs>\n    <style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#fff;}</style>\n    <clipPath id=\"clip-path\" transform=\"translate(-9.79 -8.03)\">\n      <rect class=\"cls-1\" width=\"60.05\" height=\"50.5\" transform=\"translate(60.05 50.5) rotate(-180)\"/>\n    </clipPath>\n  </defs>\n  <g id=\"Layer_2\" data-name=\"Layer 2\">\n    <g id=\"Hero\">\n      <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n        <g class=\"cls-2\">\n          <polygon class=\"cls-3\" points=\"0 19.34 31.05 19.34 16.81 31.36 20.36 34.34 40.83 17.17 20.48 0 16.87 3.03 31.23 15.1 0 15.1 0 19.34\"/>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<app-contact></app-contact>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.en = {
            heroTitle: "Our History",
            heroContent: "Piccolo Inc. is a privately held transportation and logistics company established in 2005 by two MBA graduates. From our beginning, Piccolo Inc. has worked to provide timely, low-cost, and reliable transportation management services. We strive to help our clients manage an increasingly complex supply chain, reduce distribution expenses, and enable them to focus on their core competencies.",
            heroScroll: "Scroll Down",
            principlesTitle: "Our Principles",
            principlesContent: "Piccolo Inc. was intentionally founded on guiding principles that we still hold value today. These include Customer Value and Satisfaction, Employee Development, Economic Performance, a Relationship Model, Business Transparency, and Corporate Social Responsibility.",
            principlesCTA: "Learn More",
            teamTitle: "Our Team",
            teamContent: "Our team at Piccolo Inc. is composed of highly skilled and well-trained people who desire to work well for the benefit of every party involved.",
            teamCTA: "See Our Team"
        };
        this.es = {
            heroTitle: "Nuestra Historia",
            heroContent: "Piccolo Inc. es una empresa privada de transporte y logística establecida en 2005 por dos graduados de MBA. Desde nuestros comienzos, Piccolo Inc. ha trabajado para brindar servicios de administración de transporte oportunos, de bajo costo y confiables. Nos esforzamos por ayudar a nuestros clientes a gestionar una cadena de suministro cada vez más compleja, reducir los gastos de distribución y permitirles centrarse en sus competencias principales.",
            heroScroll: "Desplazarse hacia abajo",
            principlesTitle: "Nuestros principios",
            principlesContent: "Piccolo Inc. se fundó intencionalmente sobre principios rectores que todavía tenemos valor hoy. Estos incluyen Valor y Satisfacción del Cliente, Desarrollo del Empleado, Desempeño Económico, un Modelo de Relación, Transparencia Empresarial y Responsabilidad Social Corporativa.",
            principlesCTA: "Aprende Más",
            teamTitle: "Nuestro Equipo",
            teamContent: "Nuestro equipo de Piccolo Inc. está compuesto por personas altamente capacitadas y bien capacitadas que desean trabajar bien para el beneficio de cada una de las partes involucradas.",
            teamCTA: "Ver Nuestro Equipo"
        };
        this.lang = "en";
        this.content = this.en;
    }
    AboutComponent.prototype.syncLang = function () {
        if (document.getElementById('lang').innerHTML === "en") {
            this.content = this.en;
            this.lang = "en";
        }
        else {
            this.content = this.es;
            this.lang = "es";
        }
    };
    AboutComponent.prototype.checkLang = function () {
        if (document.getElementById('lang').innerHTML != this.lang) {
            this.syncLang();
        }
    };
    AboutComponent.prototype.ngOnInit = function () {
        var self = this;
        setInterval(function () {
            self.checkLang();
        }, 100);
        if (jquery__WEBPACK_IMPORTED_MODULE_1__('.scroll-down').length) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.scroll-down').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({ scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1__(window).height() }, 650, function (x, t, b, c, d) {
                    if ((t /= d / 2) < 1)
                        return c / 2 * t * t * t * t + b;
                    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
                });
            });
        }
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/principles/principles.component.css":
/*!***********************************************************!*\
  !*** ./src/app/about/principles/principles.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/principles/principles.component.html":
/*!************************************************************!*\
  !*** ./src/app/about/principles/principles.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"d-flex\">\n  <div class=\"head-bg\" [ngStyle]=\"{'background-image': 'url(assets/img/piccolo-inc_tractor-header.png)'}\"></div>\n  <div class=\"container my-auto\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <div class=\"slide-card-body\">\n              <h1 class=\"text-animate-1\">{{ content.heroTitle }}</h1>\n              <h2 class=\"text-animate-2\">{{ content.heroSubtitle }}</h2>\n              <p class=\"text-muted text-animate-3\">{{ content.heroContent }}</p>\n            </div>\n          </div>\n        </div>\n        <button class=\"scroll-down\">\n          {{ content.heroScroll }}\n          <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 25.16 29.91\" height=\"16px\">\n            <defs>\n              <style>.cls-1{fill:none;}.cls-2{opacity:0.8;}.cls-3{clip-path:url(#clip-path);}.cls-4{fill:#fff;}</style>\n              <clipPath id=\"clip-path\" transform=\"translate(-5.96 -7.17)\">\n                <rect class=\"cls-1\" x=\"-3.5\" y=\"3.5\" width=\"43.99\" height=\"37\" transform=\"translate(-3.5 40.5) rotate(-90)\"/>\n              </clipPath>\n            </defs>\n            <g id=\"Layer_2\" data-name=\"Layer 2\">\n              <g id=\"Hero\">\n                <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n                  <g class=\"cls-2\">\n                    <g class=\"cls-3\">\n                      <polygon class=\"cls-4\" points=\"10.99 0 10.99 22.74 2.18 12.32 0 14.91 12.58 29.91 25.16 15 22.94 12.36 14.1 22.88 14.1 0 10.99 0\"/>\n                    </g>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </svg>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"quick-info-wrapper\">\n    <ul class=\"quick-info\">\n      <li>\n        <img src=\"assets/img/piccolo-inc_phone.svg\">\n        <p class=\"mb-0\"><a href=\"tel:2707816021\">(270) 781-6021</a></p>\n      </li>\n      <li>\n        <img src=\"assets/img/piccolo-inc_location.svg\">\n        <p class=\"mb-0\">7520 Louisville Road, Bowling Green, KY 42101</p>\n      </li>\n    </ul>\n  </div>\n</header>\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 mx-auto my-4\" *ngFor=\"let principle of content.principles\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <!-- <img class=\"slide-card-head\" src=\"assets/img/piccolo-inc_about.jpg\"> -->\n            <div class=\"slide-card-body\">\n              <h2>{{ principle.title }}</h2>\n              <p class=\"text-muted\">{{ principle.content }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<app-contact></app-contact>\n"

/***/ }),

/***/ "./src/app/about/principles/principles.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/about/principles/principles.component.ts ***!
  \**********************************************************/
/*! exports provided: PrinciplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrinciplesComponent", function() { return PrinciplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrinciplesComponent = /** @class */ (function () {
    function PrinciplesComponent() {
        this.en = {
            heroTitle: "Our Principles",
            heroSubtitle: "Customer Value and Satisfaction",
            heroContent: "Our asset-lite based business model allows us to provide reliable transportation solutions at competitive rates, thereby helping our clients to reduce distribution expenses and improve their economic performance. We strive to exceed client expectations in terms of reliability, quality, service and value. Our client-centered organizational culture enables us to provide superior client satisfaction and build lifelong relationships with our customers.",
            heroScroll: "Scroll Down",
            principles: [
                {
                    title: "Employee Development",
                    content: "We encourage entrepreneurship, professional development and additional training. Employee loyalty and excellent performance are rewarded with annual cash bonuses and company ownership."
                },
                {
                    title: "Economic Performance",
                    content: "We emphasize sustainable and profitable company growth that is financed with our internal resources. Our overall performance is measured in terms of income, cash flow, EVA, ROI, ROA, business growth, sales growth, employee productivity, customer satisfaction, and employee development."
                },
                {
                    title: "Relationship Model",
                    content: "We seek to establish long-term business relationships with our clients, thereby creating mutually beneficial cooperation. Our clients include retailers, general merchandise stores, manufacturers, distributors and wholesalers, among others. Management Model: We believe in intelligent, responsible and proactive management that sets clear goals, provides decisive leadership and executes strategy. Our managers combine professional and academic expertise with hard work and entrepreneurial spirit."
                },
                {
                    title: "Management Model",
                    content: "We believe in intelligent, responsible and proactive management that sets clear goals, provides decisive leadership and executes strategy. Our managers combine professional and academic expertise with hard work and entrepreneurial spirit."
                },
                {
                    title: "Business Transparency",
                    content: "Corporate integrity is the foundation of our success and our only source of sustainable competitive advantage. Our business is based on transparent business practices and highest levels of integrity in all relationships with our stakeholders."
                },
                {
                    title: "Corporate Social Responsibility",
                    content: "Our strategy and corporate purpose are aligned to improve the well-being of our stakeholders and the society. Our CSR is not just lip service, but rather a comprehensive CSR strategy with tangible results. We donate a certain percentage of our net profits to higher education, NGO and charities."
                }
            ]
        };
        this.es = {
            heroTitle: "Nuestros Principios",
            heroSubtitle: "Valor y Satisfacción del Cliente",
            heroContent: "Nuestro modelo de negocio basado en activos le permite ofrecer soluciones de transporte confiables a precios competitivos, ayudando así a nuestros clientes a reducir los gastos de distribución y mejorar su desempeño económico. Nos esforzamos por exceder las expectativas del cliente en términos de confiabilidad, calidad, servicio y valor. Nuestra cultura organizacional centrada en el cliente nos permite brindar una satisfacción superior al cliente y construir relaciones de por vida con nuestros clientes.",
            heroScroll: "Desplazarse hacia abajo",
            principles: [
                {
                    title: "Desarrollo de Empleado",
                    content: "Alentamos el espíritu empresarial, el desarrollo profesional y la capacitación adicional. La lealtad de los empleados y el excelente desempeño se recompensan con bonos anuales en efectivo y propiedad de la compañía."
                },
                {
                    title: "Desempeño Económico",
                    content: "Hacemos hincapié en el crecimiento empresarial sostenible y rentable que se financia con nuestros recursos internos. Nuestro rendimiento general se mide en términos de ingresos, flujo de efectivo, EVA, ROI, ROA, crecimiento del negocio, crecimiento de ventas, productividad de los empleados, satisfacción del cliente y desarrollo de los empleados."
                },
                {
                    title: "Modelo de Relación",
                    content: "Buscamos establecer relaciones comerciales a largo plazo con nuestros clientes, creando así una cooperación mutuamente beneficiosa. Nuestros clientes incluyen minoristas, tiendas de mercaderías en general, fabricantes, distribuidores y mayoristas, entre otros. Modelo de gestión: Creemos en una gestión inteligente, responsable y proactiva que establece objetivos claros, proporciona un liderazgo decisivo y ejecuta la estrategia. Nuestros gerentes combinan la experiencia profesional y académica con el trabajo duro y el espíritu emprendedor."
                },
                {
                    title: "Modelo de Gestión",
                    content: "Creemos en una gestión inteligente, responsable y proactiva que establece objetivos claros, proporciona un liderazgo decisivo y ejecuta la estrategia. Nuestros gerentes combinan la experiencia profesional y académica con el trabajo duro y el espíritu emprendedor."
                },
                {
                    title: "Transparencia Empresarial",
                    content: "La integridad corporativa es la base de nuestro éxito y nuestra única fuente de ventaja competitiva sostenible. Nuestro negocio se basa en prácticas comerciales transparentes y los más altos niveles de integridad en todas las relaciones con nuestros grupos de interés."
                },
                {
                    title: "Responsabilidad Social Corporativa",
                    content: "Nuestra estrategia y propósito corporativo están alineados para mejorar el bienestar de nuestros grupos de interés y la sociedad. Nuestra RSE no es solo un servicio de labios, sino una estrategia integral de RSC con resultados tangibles. Damos un cierto porcentaje de nuestras ganancias netas a la educación superior, ONG y organizaciones benéficas."
                }
            ]
        };
        this.lang = "en";
        this.content = this.en;
    }
    PrinciplesComponent.prototype.syncLang = function () {
        if (document.getElementById('lang').innerHTML === "en") {
            this.content = this.en;
            this.lang = "en";
        }
        else {
            this.content = this.es;
            this.lang = "es";
        }
    };
    PrinciplesComponent.prototype.checkLang = function () {
        if (document.getElementById('lang').innerHTML != this.lang) {
            this.syncLang();
        }
    };
    PrinciplesComponent.prototype.ngOnInit = function () {
        var self = this;
        setInterval(function () {
            self.checkLang();
        }, 100);
    };
    PrinciplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-principles',
            template: __webpack_require__(/*! ./principles.component.html */ "./src/app/about/principles/principles.component.html"),
            styles: [__webpack_require__(/*! ./principles.component.css */ "./src/app/about/principles/principles.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrinciplesComponent);
    return PrinciplesComponent;
}());



/***/ }),

/***/ "./src/app/about/team/team.component.css":
/*!***********************************************!*\
  !*** ./src/app/about/team/team.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i.right-margin {\n  margin-right: .5rem;\n}\n"

/***/ }),

/***/ "./src/app/about/team/team.component.html":
/*!************************************************!*\
  !*** ./src/app/about/team/team.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"d-flex\">\n  <div class=\"head-bg\" [ngStyle]=\"{'background-image': 'url(assets/img/piccolo-inc_tractor-header.png)'}\"></div>\n  <div class=\"container my-auto\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <div class=\"slide-card-body\">\n              <h1 class=\"text-animate-1\">{{ content.heroTitle }}</h1>\n              <p class=\"text-muted text-animate-2\">{{ content.heroContent }}</p>\n            </div>\n          </div>\n        </div>\n        <button class=\"scroll-down\">\n          {{ content.heroScroll }}\n          <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 25.16 29.91\" height=\"16px\">\n            <defs>\n              <style>.cls-1{fill:none;}.cls-2{opacity:0.8;}.cls-3{clip-path:url(#clip-path);}.cls-4{fill:#fff;}</style>\n              <clipPath id=\"clip-path\" transform=\"translate(-5.96 -7.17)\">\n                <rect class=\"cls-1\" x=\"-3.5\" y=\"3.5\" width=\"43.99\" height=\"37\" transform=\"translate(-3.5 40.5) rotate(-90)\"/>\n              </clipPath>\n            </defs>\n            <g id=\"Layer_2\" data-name=\"Layer 2\">\n              <g id=\"Hero\">\n                <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n                  <g class=\"cls-2\">\n                    <g class=\"cls-3\">\n                      <polygon class=\"cls-4\" points=\"10.99 0 10.99 22.74 2.18 12.32 0 14.91 12.58 29.91 25.16 15 22.94 12.36 14.1 22.88 14.1 0 10.99 0\"/>\n                    </g>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </svg>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"quick-info-wrapper\">\n    <ul class=\"quick-info\">\n      <li>\n        <img src=\"assets/img/piccolo-inc_phone.svg\">\n        <p class=\"mb-0\"><a href=\"tel:2707816021\">(270) 781-6021</a></p>\n      </li>\n      <li>\n        <img src=\"assets/img/piccolo-inc_location.svg\">\n        <p class=\"mb-0\">7520 Louisville Road, Bowling Green, KY 42101</p>\n      </li>\n    </ul>\n  </div>\n</header>\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"map-wrapper sr-card\">\n          <a>\n            <img class=\"profile-picture\" src=\"assets/img/piccolo-inc_senad.jpg\">\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <div class=\"slide-card-body\">\n              <h2>{{ content.ownerTitle }}</h2>\n              <p class=\"text-muted\">{{ content.ownerMessage1 }}</p>\n              <p class=\"text-muted\">{{ content.ownerMessage2 }}</p>\n              <p class=\"text-muted\">{{ content.ownerMessage3 }}</p>\n              <p class=\"text-muted\">\n                <i class=\"fa fa-envelope fa-1x right-margin\"></i>\n                <a href=\"mailto:{{content.ownerEmail}}\">{{ content.ownerEmail }}</a>\n              </p>\n              <p class=\"text-muted\">\n                <i class=\"fa fa-phone fa-1x right-margin\"></i>\n                <a href=\"tel:{{content.ownerOfficeNumber}}\">{{ content.ownerPublicOfficeNumber }}</a>\n              </p>\n              <p class=\"text-muted\">\n                <i class=\"fa fa-desktop fa-1x right-margin\"></i>\n                <a href=\"tel:{{content.ownerOfficeNumber}}\">{{ content.ownerWebsiteLink }}</a>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-4 mx-auto my-4\" *ngFor=\"let member of teamInfo\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <!-- <img class=\"slide-card-head\" src=\"assets/img/piccolo-inc_about.jpg\"> -->\n            <div class=\"slide-card-body\">\n              <h2>{{member.name}}</h2>\n              <!-- <p class=\"text-muted\" *ngIf=\"member.title\">{{member.title}}</p> -->\n              <p class=\"text-muted\">\n                <i class=\"fa fa-phone fa-1x right-margin\"></i>\n                <a href=\"tel:{{member.number}}\">{{member.publicNumber}}</a>\n              </p>\n              <p class=\"text-muted\">\n                <i class=\"fa fa-envelope fa-1x right-margin\"></i>\n                <a href=\"mailto:{{member.email}}\">{{member.email}}</a>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<app-contact></app-contact>\n"

/***/ }),

/***/ "./src/app/about/team/team.component.ts":
/*!**********************************************!*\
  !*** ./src/app/about/team/team.component.ts ***!
  \**********************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
        this.teamInfo = [
            {
                name: 'Tamara Robledo',
                title: 'Insert Title Here',
                number: '2707819163',
                publicNumber: '(270) 781-9163',
                email: 'tamara@piccoloinc.com'
            },
            {
                name: 'You Han',
                title: 'Insert Title Here',
                number: '2707810499',
                publicNumber: '(270) 781-0499',
                email: 'accounting@piccoloinc.com'
            },
            {
                name: 'Kirsten Wilson',
                title: 'Insert Title Here',
                number: '2707812672',
                publicNumber: '(270) 781-2672',
                email: 'Kirsten@piccoloinc.com'
            },
            {
                name: 'Darko Grgic',
                title: 'Insert Title Here',
                number: '2707816046',
                publicNumber: '(270) 781-6046',
                email: 'Darko@piccoloinc.com'
            },
            {
                name: 'Kristin Lovos',
                title: 'Insert Title Here',
                number: '2707816021',
                publicNumber: '(270) 781-6021',
                email: 'Klovos@piccoloinc.com'
            },
            {
                name: 'Erica Murillo',
                title: 'Insert Title Here',
                number: '2707817848',
                publicNumber: '(270) 781-7848',
                email: 'erica@piccoloinc.com'
            },
            {
                name: 'Priscilla Herrera',
                title: 'Insert Title Here',
                number: '2708463384',
                publicNumber: '(270) 846-3384',
                email: 'priscilla@piccoloinc.com'
            },
            {
                name: 'Liz Benitez (Louisville office)',
                title: 'Insert Title Here',
                number: '2707817848',
                publicNumber: '5027854731',
                email: 'liz@piccoloinc.com'
            }
        ];
        this.en = {
            heroTitle: "Our Team",
            heroContent: "Our team at Piccolo Inc. is composed of highly skilled and well-trained people who desire to work well for the benefit of every party involved. We are multi-lingual, speaking English, Madarin, Spanish, Serbian, Croatian, Bosnian.",
            heroScroll: "Scroll Down",
            ownerTitle: "About Our President",
            ownerMessage1: "Senad Veletanlic is the president and founder of Piccolo Inc. Senad has completed several degrees and certifications including a bachelor’s degree and his MBA at Western Kentucky University, as well as a Certificate of Business Excellence from Vanderbilt University.",
            ownerMessage2: "Senad founded his company in 2002. In 2005, Piccolo Inc was transformed to a logistics company, with the goal of becoming a leading transportation service provider in South Central Kentucky. After being in this field for the last 13 years, Senad has achieved this goal by satisfying the challenging logistics and supply chain management needs of many customers. Senad is proud that Piccolo Inc. has stayed steady and reliable contributor to an increasingly competitive and ever changing industry.",
            ownerMessage3: "Senad not only has a career in logistics, but is also an established realtor, experienced with both commercial and residential real estate. He is licensed in the states of Kentucky and Florida, qualified to handle any real estate needs, big or small. If you have any needs in logistics, real estate, or sales, Senad welcomes you to contact him by email, phone, or visiting his real estate website directly, listed below:",
            ownerEmail: "senad@piccoloinc.com",
            ownerOfficeNumber: "2709918219",
            ownerPublicOfficeNumber: "(270) 991-8219",
            ownerWebsiteLink: "https://senadveletanlic.exprealty.com/"
        };
        this.es = {
            heroTitle: "Nuestros Equipo",
            heroContent: "Nuestro equipo de Piccolo Inc. está compuesto por personas altamente capacitadas y bien capacitadas que desean trabajar bien para el beneficio de cada una de las partes involucradas.",
            heroScroll: "Desplazarse hacia abajo",
            ownerTitle: "Sobre Nuestro Presidente",
            ownerMessage1: "Senad Veletanlic es el presidente y fundador de Piccolo Inc. Senad ha completado varios títulos y certificaciones, incluida una licenciatura y su MBA en Western Kentucky University, así como un Certificado de Excelencia Empresarial de Vanderbilt University.",
            ownerMessage2: "Senad fundó su empresa en 2002. En 2005, Piccolo Inc se transformó en una empresa de logística, con el objetivo de convertirse en un proveedor líder de servicios de transporte en el centro sur de Kentucky. Después de estar en este campo durante los últimos 13 años, Senad ha logrado este objetivo al satisfacer las desafiantes necesidades de logística y gestión de la cadena de suministro de muchos clientes. Senad se enorgullece de que Piccolo Inc. se haya mantenido estable y contribuya de manera confiable a una industria cada vez más competitiva y en constante cambio.",
            ownerMessage3: "Senad no solo tiene una carrera en logística, sino que también es un agente inmobiliario establecido, con experiencia en bienes raíces comerciales y residenciales. Tiene licencia en los estados de Kentucky y Florida, calificado para manejar cualquier necesidad de bienes raíces, grande o pequeña. Si tiene alguna necesidad en logística, bienes raíces o ventas, Senad lo invita a contactarlo por correo electrónico, teléfono o visitando directamente su sitio web de bienes raíces, que se enumeran a continuación:",
            ownerEmail: "senad@piccoloinc.com",
            ownerOfficeNumber: "2709918219",
            ownerPublicOfficeNumber: "(270) 991-8219",
            ownerWebsiteLink: "https://senadveletanlic.exprealty.com/"
        };
        this.lang = "en";
        this.content = this.en;
    }
    TeamComponent.prototype.syncLang = function () {
        if (document.getElementById('lang').innerHTML === "en") {
            this.content = this.en;
            this.lang = "en";
        }
        else {
            this.content = this.es;
            this.lang = "es";
        }
    };
    TeamComponent.prototype.checkLang = function () {
        if (document.getElementById('lang').innerHTML != this.lang) {
            this.syncLang();
        }
    };
    TeamComponent.prototype.ngOnInit = function () {
        var self = this;
        setInterval(function () {
            self.checkLang();
        }, 100);
        if (jquery__WEBPACK_IMPORTED_MODULE_1__('.scroll-down').length) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.scroll-down').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({ scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1__(window).height() }, 650, function (x, t, b, c, d) {
                    if ((t /= d / 2) < 1)
                        return c / 2 * t * t * t * t + b;
                    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
                });
            });
        }
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/about/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/about/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    // The '* => *' will trigger the animation to change between any two states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        // The query function has three params.
        // First is the event, so this will apply on entering or when the element is added to the DOM.
        // Second is a list of styles or animations to apply.
        // Third we add a config object with optional set to true, this is to signal
        // angular that the animation may not apply as it may or may not be in the DOM.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', 
        // here we apply a style and use the animate function to apply the style over 0.3 seconds
        [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2.6s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2.6s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))], { optional: true })
    ])
]);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _about_principles_principles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/principles/principles.component */ "./src/app/about/principles/principles.component.ts");
/* harmony import */ var _about_team_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/team/team.component */ "./src/app/about/team/team.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _drivers_drivers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drivers/drivers.component */ "./src/app/drivers/drivers.component.ts");
/* harmony import */ var _drivers_faq_faq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drivers/faq/faq.component */ "./src/app/drivers/faq/faq.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { ClientsComponent } from './clients/clients.component';




var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'about/principles', component: _about_principles_principles_component__WEBPACK_IMPORTED_MODULE_4__["PrinciplesComponent"] },
    { path: 'about/team', component: _about_team_team_component__WEBPACK_IMPORTED_MODULE_5__["TeamComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    // { path: 'clients', component: ClientsComponent },
    { path: 'drivers', component: _drivers_drivers_component__WEBPACK_IMPORTED_MODULE_7__["DriversComponent"] },
    { path: 'drivers/faq', component: _drivers_faq_faq_component__WEBPACK_IMPORTED_MODULE_8__["FaqComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "#mainNav {\n  background: #ffab00;\n  padding: 1.2rem 0;\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  width: 100%;\n}\n#mainNav .navbar-brand { padding: 0 0 0 2.4rem; }\n#mainNav .navbar-brand > svg {\n  height: 42px;\n  fill: #FFFFFF;\n}\n#mainNav .nav-btn {\n  background: transparent;\n  border: none;\n  color: #fff;\n  font-size: 38px;\n  line-height: 38px;\n  padding: 2px 0;\n  position: fixed;\n  top: 1.2rem;\n  right: 2rem;\n  height: 42px;\n}\n#mainNav .nav-links-wrapper {\n  display: block;\n  position: absolute;\n  top: 5rem;\n  right: 0;\n  overflow: hidden;\n  height: 0;\n  width: 100%;\n}\n#mainNav .nav-links-wrapper.nav-open { height: auto; }\n#mainNav .nav-links {\n  background: #ffab00;\n  cursor: pointer;\n  display: block;\n  padding: 1rem;\n  margin: 0;\n\n  font-size: 2rem;\n  text-align: center;\n\n  -webkit-transform: translate3d(0,-100%,0);\n  transform: translate3d(0,-100%,0);\n  transition: -webkit-transform .35s;\n  transition: transform .35s;\n  transition: transform .35s, -webkit-transform .35s;\n}\n#mainNav .nav-links-wrapper.nav-open .nav-links {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n#mainNav .nav-links .nav-link {padding: 1rem 1.2rem;}\n#mainNav .nav-links .nav-link > a {\n  color: #fff;\n}\n#mainNav .nav-links .nav-link > a:hover {\n  color: #ffab00;\n  text-decoration: none;\n}\n/* Shrink */\n#mainNav.navbar-shrink .navbar-brand > svg {\n  fill: #ffab00;\n}\n#mainNav.navbar-shrink .nav-links { background: #ffab00; }\n#mainNav.navbar-shrink .nav-links .nav-link > a { color: rgba(255,255,255,.8); }\n#mainNav.navbar-shrink .nav-links .nav-link > a:hover { color: #FFFFFF; }\n@media (min-width: 992px) {\n  #mainNav {\n    background: transparent !important;\n    padding: 2rem;\n    position: absolute;\n  }\n  #mainNav .navbar-brand > svg {\n    height: 56px;\n    fill: #ffab00;\n  }\n  #mainNav .nav-btn {\n    display: none;\n  }\n  #mainNav .nav-links-wrapper {\n    top: 2rem;\n    height: auto;\n    width: auto;\n  }\n  #mainNav .nav-links {\n    background: #fff;\n    display: flex;\n    font-size: 1rem;\n    justify-content: space-around;\n\n    -webkit-animation: slideInRight 1s .8s cubic-bezier(0.77, 0, 0.175, 1);\n\n            animation: slideInRight 1s .8s cubic-bezier(0.77, 0, 0.175, 1);\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n  }\n  #mainNav .nav-links .nav-link {padding: 0 1.2rem;}\n  #mainNav .nav-links .nav-link > a {\n    color: #2a2a2a;\n    transition: color .2s;\n  }\n}\n/* Footer */\n.pre-footer { background: linear-gradient(#fafafa, #f8f8f8); }\n.pre-footer img { width: 100%; }\nfooter { background: #f8f8f8; padding: 2rem; }\nfooter .foot-logo {\n  fill: #ffab00;\n  max-width: 240px;\n  width: 90%;\n}\nfooter ul {\n  list-style: none;\n  padding: 0;\n}\nfooter li { padding: .3rem 0; }\nfooter a { color: rgba(33,33,33,.7); }\nfooter a:hover {\n  color: rgba(33,33,33,1);\n  text-decoration: none;\n}\n#lang { display: none; }\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-light\" id=\"mainNav\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n      <a class=\"navbar-brand\" routerLink=\"/\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 478 145\"><path d=\"M110 36C105 16 86 1 66 0H21l-8 56c24-17 41-15 43-15V18l38 31v1L56 81V58c-3 0-50 1-56 85h24l2-11v-2l5-33h31a49 49 0 0 0 26-8c18-11 27-32 22-53zM103 143h12l8-57h-12l-8 57zM120 65c-4 0-8 4-8 8a6 6 0 0 0 6 7c4 0 8-4 8-8a6 6 0 0 0-6-7zM164 85c-19 0-32 16-32 35 0 13 9 24 23 24a33 33 0 0 0 21-9l-3-8a24 24 0 0 1-14 5c-9 0-15-7-15-15 0-10 10-20 20-20 4 0 10 1 13 5l5-9c-3-5-12-8-18-8zM218 85c-19 0-33 16-33 35 0 13 10 24 24 24a33 33 0 0 0 21-9l-3-8a24 24 0 0 1-15 5c-8 0-14-7-14-15 0-10 10-20 20-20 4 0 10 1 12 5l6-9c-4-5-12-8-18-8zM270 85c-18 0-31 18-31 35 0 14 9 25 23 25 19 0 31-17 31-35 0-14-9-25-23-25zm-6 49c-9 0-12-8-12-15 0-9 6-23 17-23 8 0 11 8 11 15 0 9-5 23-16 23zM319 133c-4 0-5-4-5-7a32 32 0 0 1 1-6l7-54h-12l-8 54a42 42 0 0 0-1 8c0 9 4 16 14 16a23 23 0 0 0 13-3l-3-10a11 11 0 0 1-6 2zM366 85c-18 0-31 18-31 35 0 14 9 25 23 25 19 0 32-17 32-35 0-14-9-25-24-25zm-6 49c-9 0-12-8-12-15 0-9 6-23 17-23 8 0 11 8 11 15 0 9-5 23-16 23zM406 143h5l4-26h-6l-3 26zM413 108a4 4 0 0 0-4 4 3 3 0 0 0 3 2 4 4 0 0 0 4-3 3 3 0 0 0-3-3zM434 117a9 9 0 0 0-7 4v-4h-5l-4 26h5l2-13c1-3 2-7 6-7 3 0 4 2 4 5a15 15 0 0 1 0 2l-2 13h5l3-16a22 22 0 0 0 0-3c0-4-2-7-7-7zM459 117c-9 0-15 7-15 16 0 6 4 11 11 11a15 15 0 0 0 9-4l-1-4a11 11 0 0 1-7 2c-4 0-6-3-6-7s4-9 9-9c2 0 4 1 5 3l3-4c-2-3-5-4-8-4zM475 136a5 5 0 0 0-5 4 3 3 0 0 0 4 4 5 5 0 0 0 4-5 3 3 0 0 0-3-3z\"/></svg>\n      </a>\n      </div>\n    </div>\n  </div>\n\n  <button class=\"nav-btn\">\n    <i class=\"fa fa-bars\"></i>\n  </button>\n\n  <div class=\"nav-links-wrapper\">\n    <ul class=\"nav-links\">\n      <li class=\"nav-link\">\n        <a routerLink=\"/about/\">{{ content.nav1 }}</a>\n      </li>\n      <li class=\"nav-link\">\n        <a routerLink=\"/drivers/\">{{ content.nav2 }}</a>\n      </li>\n      <li class=\"nav-link\">\n        <a routerLink=\"/services/\">{{ content.nav3 }}</a>\n      </li>\n      <li class=\"nav-link\">\n        <a routerLink=\"/contact/\">{{ content.nav4 }}</a>\n      </li>\n      <li class=\"nav-link\">\n        <a (click)=\"toggleLang(); checkLang()\">{{ content.swap }}</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<main>\n  <router-outlet #o=\"outlet\"></router-outlet>\n</main>\n\n<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <svg class=\"foot-logo mb-4\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 478 145\">\n          <path d=\"M110 36C105 16 86 1 66 0H21l-8 56c24-17 41-15 43-15V18l38 31v1L56 81V58c-3 0-50 1-56 85h24l2-11v-2l5-33h31a49 49 0 0 0 26-8c18-11 27-32 22-53zM103 143h12l8-57h-12l-8 57zM120 65c-4 0-8 4-8 8a6 6 0 0 0 6 7c4 0 8-4 8-8a6 6 0 0 0-6-7zM164 85c-19 0-32 16-32 35 0 13 9 24 23 24a33 33 0 0 0 21-9l-3-8a24 24 0 0 1-14 5c-9 0-15-7-15-15 0-10 10-20 20-20 4 0 10 1 13 5l5-9c-3-5-12-8-18-8zM218 85c-19 0-33 16-33 35 0 13 10 24 24 24a33 33 0 0 0 21-9l-3-8a24 24 0 0 1-15 5c-8 0-14-7-14-15 0-10 10-20 20-20 4 0 10 1 12 5l6-9c-4-5-12-8-18-8zM270 85c-18 0-31 18-31 35 0 14 9 25 23 25 19 0 31-17 31-35 0-14-9-25-23-25zm-6 49c-9 0-12-8-12-15 0-9 6-23 17-23 8 0 11 8 11 15 0 9-5 23-16 23zM319 133c-4 0-5-4-5-7a32 32 0 0 1 1-6l7-54h-12l-8 54a42 42 0 0 0-1 8c0 9 4 16 14 16a23 23 0 0 0 13-3l-3-10a11 11 0 0 1-6 2zM366 85c-18 0-31 18-31 35 0 14 9 25 23 25 19 0 32-17 32-35 0-14-9-25-24-25zm-6 49c-9 0-12-8-12-15 0-9 6-23 17-23 8 0 11 8 11 15 0 9-5 23-16 23zM406 143h5l4-26h-6l-3 26zM413 108a4 4 0 0 0-4 4 3 3 0 0 0 3 2 4 4 0 0 0 4-3 3 3 0 0 0-3-3zM434 117a9 9 0 0 0-7 4v-4h-5l-4 26h5l2-13c1-3 2-7 6-7 3 0 4 2 4 5a15 15 0 0 1 0 2l-2 13h5l3-16a22 22 0 0 0 0-3c0-4-2-7-7-7zM459 117c-9 0-15 7-15 16 0 6 4 11 11 11a15 15 0 0 0 9-4l-1-4a11 11 0 0 1-7 2c-4 0-6-3-6-7s4-9 9-9c2 0 4 1 5 3l3-4c-2-3-5-4-8-4zM475 136a5 5 0 0 0-5 4 3 3 0 0 0 4 4 5 5 0 0 0 4-5 3 3 0 0 0-3-3z\"/>\n        </svg>\n        <p>7520 Louisville Road, Bowling Green, KY 42101</p>\n        <p>{{ content.footInfo1 }}: <a href=\"tel:2707816021\">(270) 781-6021</a></p>\n        <p>{{ content.footInfo2 }}: <a href=\"tel:2707991255\">(270) 799-1255</a></p>\n        <p>{{ content.footInfo3 }}: (270) 781-9871</p>\n      </div>\n      <div class=\"col-lg-2\">\n        <p class=\"mb-2\"><strong>{{ content.footAbout1 }}</strong></p>\n        <ul>\n          <li><a routerLink=\"/about/\">{{ content.footAbout2 }}</a></li>\n          <li><a routerLink=\"/about/\">{{ content.footAbout3 }}</a></li>\n        </ul>\n      </div>\n      <div class=\"col-lg-2\">\n        <p class=\"mb-2\"><strong>{{ content.footDrivers1 }}</strong></p>\n        <ul>\n          <li><a routerLink=\"/drivers/\">{{ content.footDrivers2 }}</a></li>\n          <!-- <li><a routerLink=\"/drivers/faq\">Frequently Asked Question</a></li> -->\n        </ul>\n      </div>\n      <div class=\"col-lg-3\">\n        <ul>\n          <li>\n            <div class=\"btn-wrapper\">\n              <a class=\"btn\" routerLink=\"/contact/\">\n                <span class=\"btn-text\">{{ content.footCTA1 }}</span>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 40.83 34.34\" height=\"16px\">\n                  <defs>\n                    <style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#fff;}</style>\n                    <clipPath id=\"clip-path\" transform=\"translate(-9.79 -8.03)\">\n                      <rect class=\"cls-1\" width=\"60.05\" height=\"50.5\" transform=\"translate(60.05 50.5) rotate(-180)\"/>\n                    </clipPath>\n                  </defs>\n                  <g id=\"Layer_2\" data-name=\"Layer 2\">\n                    <g id=\"Hero\">\n                      <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n                        <g class=\"cls-2\">\n                          <polygon class=\"cls-3\" points=\"0 19.34 31.05 19.34 16.81 31.36 20.36 34.34 40.83 17.17 20.48 0 16.87 3.03 31.23 15.1 0 15.1 0 19.34\"/>\n                        </g>\n                      </g>\n                    </g>\n                  </g>\n                </svg>\n              </a>\n            </div>\n          </li>\n          <li>\n            <div class=\"btn-wrapper\">\n              <a class=\"btn\" href=\"https://docs.google.com/forms/d/e/1FAIpQLSe9Qx4sKXnLNfibC7KN5C9NrQySc25bC5KCN1v8r6bSP2BhqQ/viewform?usp=sf_link\">\n                <span class=\"btn-text\">{{ content.footCTA2 }}</span>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 40.83 34.34\" height=\"16px\">\n                  <defs>\n                    <style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#fff;}</style>\n                    <clipPath id=\"clip-path\" transform=\"translate(-9.79 -8.03)\">\n                      <rect class=\"cls-1\" width=\"60.05\" height=\"50.5\" transform=\"translate(60.05 50.5) rotate(-180)\"/>\n                    </clipPath>\n                  </defs>\n                  <g id=\"Layer_2\" data-name=\"Layer 2\">\n                    <g id=\"Hero\">\n                      <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n                        <g class=\"cls-2\">\n                          <polygon class=\"cls-3\" points=\"0 19.34 31.05 19.34 16.81 31.36 20.36 34.34 40.83 17.17 20.48 0 16.87 3.03 31.23 15.1 0 15.1 0 19.34\"/>\n                        </g>\n                      </g>\n                    </g>\n                  </g>\n                </svg>\n              </a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n\n<span id=\"lang\">en</span>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.en = {
            nav1: "About Us",
            nav2: "Drivers",
            nav3: "Services",
            nav4: "Contact Us",
            swap: "Ver en Español",
            footInfo1: "Daytime Phone",
            footInfo2: "After Hours Phone",
            footInfo3: "Fax",
            footAbout1: "About Us",
            footAbout2: "Our History",
            footAbout3: "Our Services",
            footDrivers1: "Drivers",
            footDrivers2: "Safety Resources",
            footCTA1: "Contact Us",
            footCTA2: "Apply Now"
        };
        this.es = {
            nav1: "Sobre Nosotros",
            nav2: "Conductores",
            nav3: "Servicios",
            nav4: "Contáctenos",
            swap: "View in English",
            footInfo1: "Teléfono del día",
            footInfo2: "Teléfono de la noche",
            footInfo3: "Fax",
            footAbout1: "Sobre Nosotros",
            footAbout2: "Nuestra Historia",
            footAbout3: "Nuestros Servicios",
            footDrivers1: "Conductores",
            footDrivers2: "Recursos de Seguridad",
            footCTA1: "Contáctenos",
            footCTA2: "Aplica Ya"
        };
        this.content = this.en;
        this.lang = "en";
    }
    AppComponent.prototype.toggleLang = function () {
        if (document.getElementById('lang').innerHTML === "en") {
            document.getElementById('lang').innerHTML = "es";
        }
        else {
            document.getElementById('lang').innerHTML = "en";
        }
    };
    AppComponent.prototype.syncLang = function () {
        if (document.getElementById('lang').innerHTML === "en") {
            this.content = this.en;
            this.lang = "en";
        }
        else {
            this.content = this.es;
            this.lang = "es";
        }
    };
    AppComponent.prototype.checkLang = function () {
        if (document.getElementById('lang').innerHTML != this.lang) {
            this.syncLang();
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            /* Scroll Animations */
            // Collapse Navbar
            var navbarCollapse = function () {
                if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() > 468) {
                    var ceiling = jquery__WEBPACK_IMPORTED_MODULE_2__(window).height() * .7;
                    if (jquery__WEBPACK_IMPORTED_MODULE_2__("#mainNav").offset().top > ceiling) {
                        jquery__WEBPACK_IMPORTED_MODULE_2__("#mainNav").addClass("navbar-shrink");
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_2__("#mainNav").removeClass("navbar-shrink");
                    }
                }
            };
            // Scroll Reveal
            var scrollReveal = function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".sr-card").each(function () {
                    if (jquery__WEBPACK_IMPORTED_MODULE_2__(this).offset().top - jquery__WEBPACK_IMPORTED_MODULE_2__(this).height() < jquery__WEBPACK_IMPORTED_MODULE_2__(document).scrollTop() + 50) {
                        jquery__WEBPACK_IMPORTED_MODULE_2__(this).addClass('sr-show');
                    }
                });
            };
            // Calls every 10ms
            setInterval(function () { navbarCollapse(); scrollReveal(); }, 100);
            setInterval(function () {
                // console.log(document.getElementById('lang').innerHTML);
            }, 1000);
            /* Misc Functions */
            if (jquery__WEBPACK_IMPORTED_MODULE_2__('a').length) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('a').click(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(document).scrollTop(0);
                    jquery__WEBPACK_IMPORTED_MODULE_2__('.nav-links-wrapper').removeClass('nav-open');
                });
            }
            if (jquery__WEBPACK_IMPORTED_MODULE_2__('.scroll-down').length) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.scroll-down').click(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__('html, body').animate({ scrollTop: jquery__WEBPACK_IMPORTED_MODULE_2__(window).height() }, 650, function (x, t, b, c, d) {
                        if ((t /= d / 2) < 1)
                            return c / 2 * t * t * t * t + b;
                        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
                    });
                });
            }
            if (jquery__WEBPACK_IMPORTED_MODULE_2__('.nav-btn').length) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.nav-btn').click(function (el) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__('.nav-links-wrapper').toggleClass('nav-open');
                });
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] // register the animation
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _about_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/team/team.component */ "./src/app/about/team/team.component.ts");
/* harmony import */ var _about_principles_principles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/principles/principles.component */ "./src/app/about/principles/principles.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _drivers_drivers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./drivers/drivers.component */ "./src/app/drivers/drivers.component.ts");
/* harmony import */ var _drivers_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drivers/faq/faq.component */ "./src/app/drivers/faq/faq.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _about_principles_principles_component__WEBPACK_IMPORTED_MODULE_8__["PrinciplesComponent"],
                _clients_clients_component__WEBPACK_IMPORTED_MODULE_9__["ClientsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"],
                _drivers_drivers_component__WEBPACK_IMPORTED_MODULE_12__["DriversComponent"],
                _about_team_team_component__WEBPACK_IMPORTED_MODULE_7__["TeamComponent"],
                _drivers_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__["FaqComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clients/clients.component.css":
/*!***********************************************!*\
  !*** ./src/app/clients/clients.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clients/clients.component.html":
/*!************************************************!*\
  !*** ./src/app/clients/clients.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"d-flex\">\n  <div class=\"head-bg\" [ngStyle]=\"{'background-image': 'url(assets/img/piccolo-inc_tractor-header.png)'}\"></div>\n  <div class=\"container my-auto\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <div class=\"slide-card-body\">\n              <h2 class=\"text-animate-1\">Our Clients</h2>\n              <p class=\"text-muted text-animate-2\">We are here to provide you with solutions to all you transportation and logistics requirements. Scroll down for some resources that may help.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"quick-info-wrapper\">\n    <ul class=\"quick-info\">\n      <li>\n        <img src=\"assets/img/piccolo-inc_phone.svg\">\n        <p class=\"mb-0\"><a href=\"tel:2707816021\">(270) 781-6021</a></p>\n      </li>\n      <li>\n        <img src=\"assets/img/piccolo-inc_location.svg\">\n        <p class=\"mb-0\">7520 Louisville Road, Bowling Green, KY 42101</p>\n      </li>\n    </ul>\n  </div>\n</header>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 mx-auto\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <img class=\"slide-card-head\" src=\"./assets/img/piccolo-inc_about.jpg\">\n            <div class=\"slide-card-body\">\n              <h2>Book Load</h2>\n              <p class=\"text-muted\">You can use this form which will e-mail your Pick Up request for a pending shipment. Of course you can always call us at <a href=\"tel:2707816021\">(270) 781-6021</a>. Also, you can find a list of <a href=\"#\">available loads here</a>.</p>\n              <div class=\"btn-wrapper\">\n                <a class=\"btn\" routerLink=\"/principles/\">\n                  <span class=\"btn-text\">Learn More</span>\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 40.83 34.34\" height=\"16px\">\n  <defs>\n    <style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#fff;}</style>\n    <clipPath id=\"clip-path\" transform=\"translate(-9.79 -8.03)\">\n      <rect class=\"cls-1\" width=\"60.05\" height=\"50.5\" transform=\"translate(60.05 50.5) rotate(-180)\"/>\n    </clipPath>\n  </defs>\n  <g id=\"Layer_2\" data-name=\"Layer 2\">\n    <g id=\"Hero\">\n      <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n        <g class=\"cls-2\">\n          <polygon class=\"cls-3\" points=\"0 19.34 31.05 19.34 16.81 31.36 20.36 34.34 40.83 17.17 20.48 0 16.87 3.03 31.23 15.1 0 15.1 0 19.34\"/>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 mx-auto\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <img class=\"slide-card-head\" src=\"assets/img/piccolo-inc_clients.jpg\">\n            <div class=\"slide-card-body\">\n              <h2>Safety Resources</h2>\n              <p class=\"text-muted\">Our customers include retailers, general merchandise stores, manufactures, distributors, and wholesalers, among others. Headquartered in Bolwing Green, KY, Piccolo Inc. is a registered S-Corporation.</p>\n              <ul class=\"doc-links\">\n                <li><a href=\"#\">CSA - Compliance, Safety, Accountability for CMV Drivers manual</a></li>\n                <li><a href=\"#\">Interstate Truck Driver's Guide to Hours of Service</a></li>\n                <li><a href=\"#\">CSA compliance letter</a></li>\n                <li><a href=\"#\">Disciplinary procedures for D.O.T</a></li>\n                <li><a href=\"#\">Drivers Handbook</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<app-contact></app-contact>\n"

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/clients/clients.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  display: block;\n  overflow-wrap: break-word;\n}\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"d-flex\">\n  <div class=\"container my-auto\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <div class=\"map-wrapper sr-card\">\n          <a href=\"https://www.google.com/maps?saddr=My+Location&daddr=7520+Louisville+Rd,+Bowling+Green,+KY+42101\">\n            <img id=\"googleMap\" src=\"assets/img/piccolo-inc_map.jpg\">\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <div class=\"slide-card-body\">\n              <h2>{{ content.title }}</h2>\n              <p class=\"text-muted\">{{ content.content }}</p>\n              <div class=\"contact-icon text-center mx-auto\">\n                <i class=\"fa fa-envelope-o fa-2x\"></i>\n                <a href=\"mailto:confirmations@piccoloinc.com\">confirmations@piccoloinc.com</a>\n              </div>\n              <div class=\"contact-icon text-center mx-auto\">\n                <i class=\"fa fa-phone fa-2x\"></i>\n                <p><a href=\"tel:2707816021\">(270) 781-6021</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.en = {
            title: "Contact Us",
            content: "If you have any questions, please feel free to send us a short message or give us a call."
        };
        this.es = {
            title: "Contáctenos",
            content: "Si tiene alguna pregunta, no dude en enviarnos un breve mensaje o llámenos."
        };
        this.lang = "en";
        this.content = this.en;
    }
    ContactComponent.prototype.syncLang = function () {
        if (document.getElementById('lang').innerHTML === "en") {
            this.content = this.en;
            this.lang = "en";
        }
        else {
            this.content = this.es;
            this.lang = "es";
        }
    };
    ContactComponent.prototype.checkLang = function () {
        if (document.getElementById('lang').innerHTML != this.lang) {
            this.syncLang();
        }
    };
    ContactComponent.prototype.ngOnInit = function () {
        var self = this;
        setInterval(function () {
            self.checkLang();
        }, 100);
        if (jquery__WEBPACK_IMPORTED_MODULE_1__('.scroll-down').length) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.scroll-down').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({ scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1__(window).height() }, 650, function (x, t, b, c, d) {
                    if ((t /= d / 2) < 1)
                        return c / 2 * t * t * t * t + b;
                    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
                });
            });
        }
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/drivers/drivers.component.css":
/*!***********************************************!*\
  !*** ./src/app/drivers/drivers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/drivers/drivers.component.html":
/*!************************************************!*\
  !*** ./src/app/drivers/drivers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"d-flex\">\n  <div class=\"head-bg\" [ngStyle]=\"{'background-image': 'url(assets/img/piccolo-inc_tractor-header.png)'}\"></div>\n  <div class=\"container my-auto\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <div class=\"slide-card-body\">\n              <h2 class=\"text-animate-1\">{{ content.heroTitle }}</h2>\n              <p class=\"text-muted text-animate-2\">{{ content.heroContent }}</p>\n            </div>\n          </div>\n        </div>\n        <button class=\"scroll-down\">\n          {{ content.heroScroll }}\n          <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 25.16 29.91\" height=\"16px\">\n            <defs>\n              <style>.cls-1{fill:none;}.cls-2{opacity:0.8;}.cls-3{clip-path:url(#clip-path);}.cls-4{fill:#fff;}</style>\n              <clipPath id=\"clip-path\" transform=\"translate(-5.96 -7.17)\">\n                <rect class=\"cls-1\" x=\"-3.5\" y=\"3.5\" width=\"43.99\" height=\"37\" transform=\"translate(-3.5 40.5) rotate(-90)\"/>\n              </clipPath>\n            </defs>\n            <g id=\"Layer_2\" data-name=\"Layer 2\">\n              <g id=\"Hero\">\n                <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n                  <g class=\"cls-2\">\n                    <g class=\"cls-3\">\n                      <polygon class=\"cls-4\" points=\"10.99 0 10.99 22.74 2.18 12.32 0 14.91 12.58 29.91 25.16 15 22.94 12.36 14.1 22.88 14.1 0 10.99 0\"/>\n                    </g>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </svg>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"quick-info-wrapper\">\n    <ul class=\"quick-info\">\n      <li>\n        <img src=\"assets/img/piccolo-inc_phone.svg\">\n        <p class=\"mb-0\"><a href=\"tel:2707816021\">(270) 781-6021</a></p>\n      </li>\n      <li>\n        <img src=\"assets/img/piccolo-inc_location.svg\">\n        <p class=\"mb-0\">7520 Louisville Road, Bowling Green, KY 42101</p>\n      </li>\n    </ul>\n  </div>\n</header>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 mx-auto\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <img class=\"slide-card-head\" src=\"./assets/img/piccolo-inc_about.jpg\">\n            <div class=\"slide-card-body\">\n              <h2>{{ content.questionsTitle }}</h2>\n              <p class=\"text-muted\"> {{ content.questionsContent }}<a href=\"tel:2707816021\">(270) 781-6021</a>.</p>\n              <!-- <div class=\"btn-wrapper\">\n                <a class=\"btn\" routerLink=\"/drivers/faq/\">\n                  <span class=\"btn-text\">{{ content.questionsCTA }}</span>\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 40.83 34.34\" height=\"16px\">\n                    <defs>\n                      <style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#fff;}</style>\n                      <clipPath id=\"clip-path\" transform=\"translate(-9.79 -8.03)\">\n                        <rect class=\"cls-1\" width=\"60.05\" height=\"50.5\" transform=\"translate(60.05 50.5) rotate(-180)\"/>\n                      </clipPath>\n                    </defs>\n                    <g id=\"Layer_2\" data-name=\"Layer 2\">\n                      <g id=\"Hero\">\n                        <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n                          <g class=\"cls-2\">\n                            <polygon class=\"cls-3\" points=\"0 19.34 31.05 19.34 16.81 31.36 20.36 34.34 40.83 17.17 20.48 0 16.87 3.03 31.23 15.1 0 15.1 0 19.34\"/>\n                          </g>\n                        </g>\n                      </g>\n                    </g>\n                  </svg>\n                </a>\n              </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 mx-auto\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <img class=\"slide-card-head\" src=\"assets/img/piccolo-inc_clients.jpg\">\n            <div class=\"slide-card-body\">\n              <h2>{{ content.safetyTitle }}</h2>\n              <p class=\"text-muted\">{{ content.safetyContent }}</p>\n              <ul class=\"doc-links\">\n                <li *ngFor=\"let link of content.safetyLinks\"><a href=\"{{ link.link }}\">{{ link.title }}</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<app-contact></app-contact>\n"

/***/ }),

/***/ "./src/app/drivers/drivers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/drivers/drivers.component.ts ***!
  \**********************************************/
/*! exports provided: DriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversComponent", function() { return DriversComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriversComponent = /** @class */ (function () {
    function DriversComponent() {
        this.en = {
            heroTitle: "Our Drivers",
            heroContent: "Our drivers are an important part of our team at Piccolo inc. We want to do everything we can to help them succeed.",
            heroCTA: "Contact Us",
            heroScroll: "Scroll Down",
            questionsTitle: "Have Questions?",
            questionsContent: "If you have any questions, we've answered some frequently asked questions, but you may always call us at ",
            questionsCTA: "See Questions",
            safetyTitle: "Safety Resources",
            safetyContent: "Below, you'll find important documents to consider concerning the safety guidelines of Piccolo Inc.",
            safetyLinks: [
                {
                    title: "CSA - Compliance, Safety, Accountability for CMV Drivers manual",
                    link: "assets/safety/CSA2010.pdf"
                },
                {
                    title: "Interstate Truck Driver's Guide to Hours of Service",
                    link: "assets/safety/FMC_CSA_12_008_BASICs_UnsafeDriving.pdf"
                },
                {
                    title: "CSA compliance letter",
                    link: "assets/safety/csa_compliance_letter.pdf"
                },
                {
                    title: "Disciplinary procedures for D.O.T",
                    link: "assets/safety/disciplinary_procedure.pdf"
                },
                {
                    title: "Drivers Handbook",
                    link: "assets/safety/handbook.pdf"
                }
            ]
        };
        this.es = {
            heroTitle: "Nuestros Conductores",
            heroContent: "Nuestros conductores son una parte importante de nuestro equipo en Piccolo inc. Queremos hacer todo lo que podamos para ayudarlos a tener éxito.",
            heroCTA: "Contáctenos",
            heroScroll: "Desplazarse hacia abajo",
            questionsTitle: "¿Tener Preguntas?",
            questionsContent: "Si tiene alguna pregunta, hemos respondido algunas preguntas frecuentes, pero siempre puedes llamarnos a ",
            questionsCTA: "Ver Preguntas",
            safetyTitle: "Recursos de Seguridad",
            safetyContent: "A continuación, encontrará documentos importantes a considerar sobre las pautas de seguridad de Piccolo Inc.",
            safetyLinks: [
                {
                    title: "CSA - Compliance, Safety, Accountability for CMV Drivers manual",
                    link: "assets/safety/CSA2010.pdf"
                },
                {
                    title: "Interstate Truck Driver's Guide to Hours of Service",
                    link: "assets/safety/FMC_CSA_12_008_BASICs_UnsafeDriving.pdf"
                },
                {
                    title: "CSA compliance letter",
                    link: "assets/safety/csa_compliance_letter.pdf"
                },
                {
                    title: "Disciplinary procedures for D.O.T",
                    link: "assets/safety/disciplinary_procedure.pdf"
                },
                {
                    title: "Drivers Handbook",
                    link: "assets/safety/handbook.pdf"
                }
            ]
        };
        this.lang = "en";
        this.content = this.en;
    }
    DriversComponent.prototype.syncLang = function () {
        if (document.getElementById('lang').innerHTML === "en") {
            this.content = this.en;
            this.lang = "en";
        }
        else {
            this.content = this.es;
            this.lang = "es";
        }
    };
    DriversComponent.prototype.checkLang = function () {
        if (document.getElementById('lang').innerHTML != this.lang) {
            this.syncLang();
        }
    };
    DriversComponent.prototype.ngOnInit = function () {
        var self = this;
        setInterval(function () {
            self.checkLang();
        }, 100);
        if (jquery__WEBPACK_IMPORTED_MODULE_1__('.scroll-down').length) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.scroll-down').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({ scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1__(window).height() }, 650, function (x, t, b, c, d) {
                    if ((t /= d / 2) < 1)
                        return c / 2 * t * t * t * t + b;
                    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
                });
            });
        }
    };
    DriversComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drivers',
            template: __webpack_require__(/*! ./drivers.component.html */ "./src/app/drivers/drivers.component.html"),
            styles: [__webpack_require__(/*! ./drivers.component.css */ "./src/app/drivers/drivers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DriversComponent);
    return DriversComponent;
}());



/***/ }),

/***/ "./src/app/drivers/faq/faq.component.css":
/*!***********************************************!*\
  !*** ./src/app/drivers/faq/faq.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/drivers/faq/faq.component.html":
/*!************************************************!*\
  !*** ./src/app/drivers/faq/faq.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"d-flex\">\n  <div class=\"head-bg\" [ngStyle]=\"{'background-image': 'url(assets/img/piccolo-inc_tractor-header.png)'}\"></div>\n  <div class=\"container my-auto\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <div class=\"slide-card-body\">\n              <h1 class=\"text-animate-1\">{{ content.heroTitle }}</h1>\n              <p class=\"text-muted text-animate-2\">{{ content.heroContent }}<a href=\"tel:2707816021\">(270) 781-6021</a>.</p>\n            </div>\n          </div>\n        </div>\n        <button class=\"scroll-down\">\n          {{ content.heroScroll }}\n          <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 25.16 29.91\" height=\"16px\">\n            <defs>\n              <style>.cls-1{fill:none;}.cls-2{opacity:0.8;}.cls-3{clip-path:url(#clip-path);}.cls-4{fill:#fff;}</style>\n              <clipPath id=\"clip-path\" transform=\"translate(-5.96 -7.17)\">\n                <rect class=\"cls-1\" x=\"-3.5\" y=\"3.5\" width=\"43.99\" height=\"37\" transform=\"translate(-3.5 40.5) rotate(-90)\"/>\n              </clipPath>\n            </defs>\n            <g id=\"Layer_2\" data-name=\"Layer 2\">\n              <g id=\"Hero\">\n                <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n                  <g class=\"cls-2\">\n                    <g class=\"cls-3\">\n                      <polygon class=\"cls-4\" points=\"10.99 0 10.99 22.74 2.18 12.32 0 14.91 12.58 29.91 25.16 15 22.94 12.36 14.1 22.88 14.1 0 10.99 0\"/>\n                    </g>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </svg>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"quick-info-wrapper\">\n    <ul class=\"quick-info\">\n      <li>\n        <img src=\"assets/img/piccolo-inc_phone.svg\">\n        <p class=\"mb-0\"><a href=\"tel:2707816021\">(270) 781-6021</a></p>\n      </li>\n      <li>\n        <img src=\"assets/img/piccolo-inc_location.svg\">\n        <p class=\"mb-0\">7520 Louisville Road, Bowling Green, KY 42101</p>\n      </li>\n    </ul>\n  </div>\n</header>\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 mx-auto my-4\" *ngFor=\"let question of content.questions\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <div class=\"slide-card-body\">\n              <h2>{{ question.title }}</h2>\n              <p class=\"text-muted\">{{ question.content }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<app-contact></app-contact>\n"

/***/ }),

/***/ "./src/app/drivers/faq/faq.component.ts":
/*!**********************************************!*\
  !*** ./src/app/drivers/faq/faq.component.ts ***!
  \**********************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
        this.en = {
            heroTitle: "Frequently Asked Questions",
            heroContent: "For your help, we've provided some answers to some frequently asked questions. If you can't find an answer to your question, please feel free to call us at ",
            heroScroll: "Scroll Down",
            questions: [
                {
                    title: "Question 1",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    title: "Question 2",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    title: "Question 3",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    title: "Question 4",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    title: "Question 5",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    title: "Question 6",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                }
            ]
        };
        this.es = {
            heroTitle: "Preguntas Frecuentes",
            heroContent: "Para su ayuda, hemos proporcionado algunas respuestas a algunas preguntas frecuentes. Si no puede encontrar una respuesta a su pregunta, no dude en llamarnos a ",
            heroScroll: "Scroll Down",
            questions: [
                {
                    title: "Question 1",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    title: "Question 2",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    title: "Question 3",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    title: "Question 4",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    title: "Question 5",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    title: "Question 6",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                }
            ]
        };
        this.lang = "en";
        this.content = this.en;
    }
    FaqComponent.prototype.syncLang = function () {
        if (document.getElementById('lang').innerHTML === "en") {
            this.content = this.en;
            this.lang = "en";
        }
        else {
            this.content = this.es;
            this.lang = "es";
        }
    };
    FaqComponent.prototype.checkLang = function () {
        if (document.getElementById('lang').innerHTML != this.lang) {
            this.syncLang();
        }
    };
    FaqComponent.prototype.ngOnInit = function () {
        var self = this;
        setInterval(function () {
            self.checkLang();
        }, 100);
        if (jquery__WEBPACK_IMPORTED_MODULE_1__('.scroll-down').length) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.scroll-down').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({ scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1__(window).height() }, 650, function (x, t, b, c, d) {
                    if ((t /= d / 2) < 1)
                        return c / 2 * t * t * t * t + b;
                    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
                });
            });
        }
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/drivers/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/drivers/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"d-flex\">\n  <div class=\"head-bg\" [ngStyle]=\"{'background-image': 'url(assets/img/piccolo-inc_tractor-header.png)'}\"></div>\n  <div class=\"container my-auto\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <div class=\"slide-card-body\">\n              <h2 class=\"text-animate-1\">{{ content.heroTitle }}</h2>\n              <p class=\"text-muted text-animate-2\">{{ content.heroContent }}</p>\n              <div class=\"btn-wrapper\">\n                <a class=\"btn\" routerLink=\"/contact/\">\n                  <span class=\"btn-text\">{{ content.heroCTA }}</span>\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 40.83 34.34\" height=\"16px\">\n                    <defs>\n                      <style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#fff;}</style>\n                      <clipPath id=\"clip-path\" transform=\"translate(-9.79 -8.03)\">\n                        <rect class=\"cls-1\" width=\"60.05\" height=\"50.5\" transform=\"translate(60.05 50.5) rotate(-180)\"/>\n                      </clipPath>\n                    </defs>\n                    <g id=\"Layer_2\" data-name=\"Layer 2\">\n                      <g id=\"Hero\">\n                        <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n                          <g class=\"cls-2\">\n                            <polygon class=\"cls-3\" points=\"0 19.34 31.05 19.34 16.81 31.36 20.36 34.34 40.83 17.17 20.48 0 16.87 3.03 31.23 15.1 0 15.1 0 19.34\"/>\n                          </g>\n                        </g>\n                      </g>\n                    </g>\n                  </svg>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <button class=\"scroll-down\">\n          {{ content.heroScroll }}\n          <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 25.16 29.91\" height=\"16px\">\n            <defs>\n              <style>.cls-1{fill:none;}.cls-2{opacity:0.8;}.cls-3{clip-path:url(#clip-path);}.cls-4{fill:#fff;}</style>\n              <clipPath id=\"clip-path\" transform=\"translate(-5.96 -7.17)\">\n                <rect class=\"cls-1\" x=\"-3.5\" y=\"3.5\" width=\"43.99\" height=\"37\" transform=\"translate(-3.5 40.5) rotate(-90)\"/>\n              </clipPath>\n            </defs>\n            <g id=\"Layer_2\" data-name=\"Layer 2\">\n              <g id=\"Hero\">\n                <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n                  <g class=\"cls-2\">\n                    <g class=\"cls-3\">\n                      <polygon class=\"cls-4\" points=\"10.99 0 10.99 22.74 2.18 12.32 0 14.91 12.58 29.91 25.16 15 22.94 12.36 14.1 22.88 14.1 0 10.99 0\"/>\n                    </g>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </svg>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"quick-info-wrapper\">\n    <ul class=\"quick-info\">\n      <li>\n        <img src=\"assets/img/piccolo-inc_phone.svg\">\n        <p class=\"mb-0\"><a href=\"tel:2707816021\">(270) 781-6021</a></p>\n      </li>\n      <li>\n        <img src=\"assets/img/piccolo-inc_location.svg\">\n        <p class=\"mb-0\">7520 Louisville Rd., Bowling Green, KY 42101</p>\n      </li>\n    </ul>\n  </div>\n</header>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 mx-auto\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <img class=\"slide-card-head\" src=\"assets/img/piccolo-inc_about.jpg\">\n            <div class=\"slide-card-body\">\n              <h2>{{ content.aboutTitle }}</h2>\n              <p class=\"text-muted\">{{ content.aboutContent }}</p>\n              <div class=\"btn-wrapper\">\n                <a class=\"btn\" routerLink=\"/about/\">\n                  <span class=\"btn-text\">{{ content.aboutCTA }}</span>\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 40.83 34.34\" height=\"16px\">\n                    <defs>\n                      <style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#fff;}</style>\n                      <clipPath id=\"clip-path\" transform=\"translate(-9.79 -8.03)\">\n                        <rect class=\"cls-1\" width=\"60.05\" height=\"50.5\" transform=\"translate(60.05 50.5) rotate(-180)\"/>\n                      </clipPath>\n                    </defs>\n                    <g id=\"Layer_2\" data-name=\"Layer 2\">\n                      <g id=\"Hero\">\n                        <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n                          <g class=\"cls-2\">\n                            <polygon class=\"cls-3\" points=\"0 19.34 31.05 19.34 16.81 31.36 20.36 34.34 40.83 17.17 20.48 0 16.87 3.03 31.23 15.1 0 15.1 0 19.34\"/>\n                          </g>\n                        </g>\n                      </g>\n                    </g>\n                  </svg>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 mx-auto\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <img class=\"slide-card-head\" src=\"assets/img/piccolo-inc_clients.jpg\">\n            <div class=\"slide-card-body\">\n              <h2>{{ content.driversTitle }}</h2>\n              <p class=\"text-muted\">{{ content.driversContent }}</p>\n              <div class=\"btn-wrapper\">\n                <a class=\"btn\" routerLink=\"/drivers/\">\n                  <span class=\"btn-text\">{{ content.driversCTA }}</span>\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 40.83 34.34\" height=\"16px\">\n                    <defs>\n                      <style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#fff;}</style>\n                      <clipPath id=\"clip-path\" transform=\"translate(-9.79 -8.03)\">\n                        <rect class=\"cls-1\" width=\"60.05\" height=\"50.5\" transform=\"translate(60.05 50.5) rotate(-180)\"/>\n                      </clipPath>\n                    </defs>\n                    <g id=\"Layer_2\" data-name=\"Layer 2\">\n                      <g id=\"Hero\">\n                        <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n                          <g class=\"cls-2\">\n                            <polygon class=\"cls-3\" points=\"0 19.34 31.05 19.34 16.81 31.36 20.36 34.34 40.83 17.17 20.48 0 16.87 3.03 31.23 15.1 0 15.1 0 19.34\"/>\n                          </g>\n                        </g>\n                      </g>\n                    </g>\n                  </svg>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<app-contact></app-contact>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.en = {
            heroTitle: "Supply Chain Problems, Supply Chain Solutions.",
            heroContent: "In the networked economy, the major supply chain imperative is collaboration and management of increasingly complex transportation networks and improvement of operational excellence.",
            heroCTA: "Contact Us",
            heroScroll: "Scroll Down",
            aboutTitle: "About Us",
            aboutContent: "Piccolo Inc. is a privately held transportation and logistics company. Piccolo Inc. provides timely, low-cost, and reliable transportation management services that help clients to manage an increasingly complex supply chain, reduce distribution expenses and enables them to focus on their core competencies.",
            aboutCTA: "Learn More",
            driversTitle: "Our Drivers",
            driversContent: "Piccolo Inc. is here to provide you with solutions to all your transportation and logistics needs. More resources for our drivers can be found by follwing the link below.",
            driversCTA: "See Resources",
        };
        this.es = {
            heroTitle: "Problemas de Cadena de Suministros? Soluciones.",
            heroContent: "En la economía en red, el imperativo principal de la cadena de suministro es la colaboración y la gestión de redes de transporte cada vez más complejas y la mejora de la excelencia operativa.",
            heroCTA: "Contáctenos",
            heroScroll: "Desplazarse hacia abajo",
            aboutTitle: "Sobre Nosotros",
            aboutContent: "Piccolo Inc. es una empresa privada de transporte y logística. Piccolo Inc. brinda servicios de administración de transporte oportunos, económicos y confiables que ayudan a los clientes a administrar una cadena de suministro cada vez más compleja, reducen los gastos de distribución y les permiten concentrarse en sus competencias principales.",
            aboutCTA: "Aprende Más",
            driversTitle: "Nuestros Conductores",
            driversContent: "Piccolo Inc. está aquí para brindarle soluciones a todas sus necesidades de transporte y logística. Para obtener más recursos para nuestros controladores, siga el enlace a continuación.",
            driversCTA: "Ver Recursos",
            contactTitle: "Contáctenos",
            contactContent: "Si tiene alguna pregunta, no dude en enviarnos un breve mensaje o llámenos."
        };
        this.lang = "en";
        this.content = this.en;
    }
    HomeComponent.prototype.syncLang = function () {
        if (document.getElementById('lang').innerHTML === "en") {
            this.content = this.en;
            this.lang = "en";
        }
        else {
            this.content = this.es;
            this.lang = "es";
        }
    };
    HomeComponent.prototype.checkLang = function () {
        if (document.getElementById('lang').innerHTML != this.lang) {
            this.syncLang();
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        var self = this;
        setInterval(function () {
            self.checkLang();
        }, 100);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: circle;\n}\n"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"d-flex\">\n  <div class=\"head-bg\" [ngStyle]=\"{'background-image': 'url(assets/img/piccolo-inc_tractor-header.png)'}\"></div>\n  <div class=\"container my-auto\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <div class=\"slide-card-body\">\n              <h2 class=\"text-animate-1\">{{ content.heroTitle }}</h2>\n              <p class=\"text-muted text-animate-2\">{{ content.heroContent }}</p>\n            </div>\n          </div>\n        </div>\n        <button class=\"scroll-down\">\n          {{ content.heroScroll }}\n          <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 25.16 29.91\" height=\"16px\">\n            <defs>\n              <style>.cls-1{fill:none;}.cls-2{opacity:0.8;}.cls-3{clip-path:url(#clip-path);}.cls-4{fill:#fff;}</style>\n              <clipPath id=\"clip-path\" transform=\"translate(-5.96 -7.17)\">\n                <rect class=\"cls-1\" x=\"-3.5\" y=\"3.5\" width=\"43.99\" height=\"37\" transform=\"translate(-3.5 40.5) rotate(-90)\"/>\n              </clipPath>\n            </defs>\n            <g id=\"Layer_2\" data-name=\"Layer 2\">\n              <g id=\"Hero\">\n                <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n                  <g class=\"cls-2\">\n                    <g class=\"cls-3\">\n                      <polygon class=\"cls-4\" points=\"10.99 0 10.99 22.74 2.18 12.32 0 14.91 12.58 29.91 25.16 15 22.94 12.36 14.1 22.88 14.1 0 10.99 0\"/>\n                    </g>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </svg>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"quick-info-wrapper\">\n    <ul class=\"quick-info\">\n      <li>\n        <img src=\"assets/img/piccolo-inc_phone.svg\">\n        <p class=\"mb-0\"><a href=\"tel:2707816021\">(270) 781-6021</a></p>\n      </li>\n      <li>\n        <img src=\"assets/img/piccolo-inc_location.svg\">\n        <p class=\"mb-0\">7520 Louisville Road, Bowling Green, KY 42101</p>\n      </li>\n    </ul>\n  </div>\n</header>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 mx-auto my-4\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <div class=\"slide-card-body\">\n              <h2>{{ content.thirdTitle }}</h2>\n              <p class=\"text-muted\">{{ content.thirdContent }}</p>\n              <ul><li *ngFor=\"let item of content.thirdList\">{{ item }}</li></ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 mx-auto my-4\">\n        <div class=\"slide-card-wrapper\">\n          <div class=\"slide-card sr-card\">\n            <div class=\"slide-card-body\">\n              <h2>{{ content.expressTitle }}</h2>\n              <p class=\"text-muted\">{{ content.expressContent }}<a href=\"tel:270781-6021\">270-781-6021</a>.</p>\n              <div class=\"btn-wrapper\">\n                <a class=\"btn\" routerLink=\"/contact/\">\n                  <span class=\"btn-text\">{{ content.expressCTA }}</span>\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 40.83 34.34\" height=\"16px\">\n                    <defs>\n                      <style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#fff;}</style>\n                      <clipPath id=\"clip-path\" transform=\"translate(-9.79 -8.03)\">\n                        <rect class=\"cls-1\" width=\"60.05\" height=\"50.5\" transform=\"translate(60.05 50.5) rotate(-180)\"/>\n                      </clipPath>\n                    </defs>\n                    <g id=\"Layer_2\" data-name=\"Layer 2\">\n                      <g id=\"Hero\">\n                        <g id=\"Scroll_Down\" data-name=\"Scroll Down\">\n                          <g class=\"cls-2\">\n                            <polygon class=\"cls-3\" points=\"0 19.34 31.05 19.34 16.81 31.36 20.36 34.34 40.83 17.17 20.48 0 16.87 3.03 31.23 15.1 0 15.1 0 19.34\"/>\n                          </g>\n                        </g>\n                      </g>\n                    </g>\n                  </svg>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<app-contact></app-contact>\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
        this.en = {
            heroTitle: "Supply Chain Challenges, Supply Chain Solutions.",
            heroContent: "Piccolo Inc. provides a number of integrated services offering to help your company build and manage a supply chain that is cost-effective, fast, agile, adaptable and aligned. Our transportation management solutions include Third-Party Transportation Management, Express Freight Management, and Professional and Financial Services.",
            heroScroll: "Scroll Down",
            thirdTitle: "Third-Party Transportation Management",
            thirdContent: "Our asset-lite business model allows us to respond quickly to short-term fluctuations in supply and demand, maintain a flexible transportation environment and align the goals of our clients with that of carriers, while helping clients to reduce transportation expenses by 10% - 30%. Our services include:",
            thirdList: [
                "Analysis of current transportation strategy",
                "Bottleneck and problem analysis",
                "Formulation of optimal transportation strategy",
                "Carrier selection",
                "Transport operation management",
                "Confirmation of pick-up and delivery",
                "Freight audit and payment service"
            ],
            expressTitle: "Express Freight Management",
            expressContent: "Piccolo Express Freight Management provides time-critical and reliable delivery of LTL and FTL at competitive rates. To schedule an Express Freight shipment, please email express@piccoloinc.com or call ",
            expressCTA: "Contact Us"
        };
        this.es = {
            heroTitle: "Problemas de Cadena de Suministros? Soluciones.",
            heroContent: "Piccolo Inc. ofrece una serie de servicios integrados que se ofrecen para ayudar a su empresa a crear y administrar una cadena de suministro que sea rentable, rápida, ágil, adaptable y alineada. Nuestras soluciones de gestión de transporte incluyen gestión de transporte de terceros, gestión de transporte urgente y servicios profesionales y financieros.",
            heroScroll: "Desplazarse hacia abajo",
            thirdTitle: "Gestión de Transporte de Terceros",
            thirdContent: "Nuestro modelo comercial de activos le permite responder rápidamente a las fluctuaciones a corto plazo en la oferta y la demanda, mantener un entorno de transporte flexible y alinear los objetivos de nuestros clientes con los de los transportistas, al tiempo que ayuda a los clientes a reducir los gastos de transporte en un 10% % Nuestros servicios incluyen:",
            thirdList: [
                "Análisis de la estrategia de transporte actual",
                "Embotellamiento y análisis de problemas",
                "Formulación de una estrategia de transporte óptima",
                "Selección de operador",
                "Gestión de operaciones de transporte",
                "Confirmación de recogida y entrega",
                "Servicio de auditoria y pago de carga"
            ],
            expressTitle: "Express Freight Management",
            expressContent: "Piccolo Express Freight Management brinda entrega confiable y de tiempo crítico de LTL y FTL a precios competitivos. Para programar un envío de Express Freight, envíe un correo electrónico a express@piccoloinc.com o llame al ",
            expressCTA: "Contáctenos"
        };
        this.lang = "en";
        this.content = this.en;
    }
    ServicesComponent.prototype.syncLang = function () {
        if (document.getElementById('lang').innerHTML === "en") {
            this.content = this.en;
            this.lang = "en";
        }
        else {
            this.content = this.es;
            this.lang = "es";
        }
    };
    ServicesComponent.prototype.checkLang = function () {
        if (document.getElementById('lang').innerHTML != this.lang) {
            this.syncLang();
        }
    };
    ServicesComponent.prototype.ngOnInit = function () {
        var self = this;
        setInterval(function () {
            self.checkLang();
        }, 100);
        if (jquery__WEBPACK_IMPORTED_MODULE_1__('.scroll-down').length) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.scroll-down').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({ scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1__(window).height() }, 650, function (x, t, b, c, d) {
                    if ((t /= d / 2) < 1)
                        return c / 2 * t * t * t * t + b;
                    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
                });
            });
        }
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dylan/Documents/Workspace/piccolo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map