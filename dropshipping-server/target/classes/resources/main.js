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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/inicio/inicio.component */ "./src/app/layout/inicio/inicio.component.ts");
/* harmony import */ var _clientes_mantem_cliente_mantem_cliente_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientes/mantem-cliente/mantem-cliente.component */ "./src/app/clientes/mantem-cliente/mantem-cliente.component.ts");
/* harmony import */ var _vendedor_mantem_vendedor_mantem_vendedor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendedor/mantem-vendedor/mantem-vendedor.component */ "./src/app/vendedor/mantem-vendedor/mantem-vendedor.component.ts");
/* harmony import */ var _fornecedor_mantem_fornecedor_mantem_fornecedor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fornecedor/mantem-fornecedor/mantem-fornecedor.component */ "./src/app/fornecedor/mantem-fornecedor/mantem-fornecedor.component.ts");
/* harmony import */ var _produto_mantem_produto_mantem_produto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./produto/mantem-produto/mantem-produto.component */ "./src/app/produto/mantem-produto/mantem-produto.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _produto_lista_produto_lista_produto_lista_produto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./produto/lista-produto/lista-produto/lista-produto.component */ "./src/app/produto/lista-produto/lista-produto/lista-produto.component.ts");
/* harmony import */ var _vendas_vendas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vendas/vendas.component */ "./src/app/vendas/vendas.component.ts");
/* harmony import */ var _login_login_cliente_login_cliente_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login-cliente/login-cliente.component */ "./src/app/login/login-cliente/login-cliente.component.ts");
/* tslint:disable: max-line-length */











/* tslint:enable: max-line-length */
var appRoutes = [
    { path: 'app', component: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
    { path: 'login-fornecedor', component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'novo-cliente', component: _clientes_mantem_cliente_mantem_cliente_component__WEBPACK_IMPORTED_MODULE_2__["MantemClienteComponent"] },
    { path: 'editar-cliente/:id', component: _clientes_mantem_cliente_mantem_cliente_component__WEBPACK_IMPORTED_MODULE_2__["MantemClienteComponent"] },
    { path: 'inicio', component: _layout_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_1__["InicioComponent"] },
    { path: 'novo-vendedor', component: _vendedor_mantem_vendedor_mantem_vendedor_component__WEBPACK_IMPORTED_MODULE_3__["MantemVendedorComponent"] },
    { path: 'editar-vendedor/:id', component: _vendedor_mantem_vendedor_mantem_vendedor_component__WEBPACK_IMPORTED_MODULE_3__["MantemVendedorComponent"] },
    { path: 'novo-fornecedor', component: _fornecedor_mantem_fornecedor_mantem_fornecedor_component__WEBPACK_IMPORTED_MODULE_4__["MantemFornecedorComponent"] },
    { path: 'editar-fornecedor/:id', component: _fornecedor_mantem_fornecedor_mantem_fornecedor_component__WEBPACK_IMPORTED_MODULE_4__["MantemFornecedorComponent"] },
    { path: 'novo-produto/:idFornecedor', component: _produto_mantem_produto_mantem_produto_component__WEBPACK_IMPORTED_MODULE_5__["MantemProdutoComponent"] },
    { path: 'editar-produto/:id', component: _produto_mantem_produto_mantem_produto_component__WEBPACK_IMPORTED_MODULE_5__["MantemProdutoComponent"] },
    { path: 'lista-produto/:idFornecedor', component: _produto_lista_produto_lista_produto_lista_produto_component__WEBPACK_IMPORTED_MODULE_8__["ListaProdutoComponent"] },
    { path: 'login-cliente', component: _login_login_cliente_login_cliente_component__WEBPACK_IMPORTED_MODULE_10__["LoginClienteComponent"] },
    { path: 'vendas/:idCliente', component: _vendas_vendas_component__WEBPACK_IMPORTED_MODULE_9__["VendasComponent"] },
    { path: '**', redirectTo: 'inicio' }
];
var AppRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-wrapper\" [ngClass]=\"{'layout-sidebar-active': sidebarActive}\">\r\n  <app-menu></app-menu>\r\n  <app-topbar></app-topbar>\r\n  <div class=\"layout-main\">\r\n    <div class=\"layout-content\">\r\n      <div class=\"templates\">\r\n        <div class=\"why-templates\">\r\n         \r\n            <app-breadcrumb></app-breadcrumb>\r\n            <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\r\n\r\n            <router-outlet></router-outlet>\r\n            <p-growl></p-growl>\r\n            <p-confirmDialog header=\"Confirmação\" acceptLabel=\"Sim\" rejectLabel=\"Não\" icon=\"pi pi-exclamation-triangle\"\r\n              width=\"425\"></p-confirmDialog>\r\n\r\n         \r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-rodape></app-rodape>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _services_RxJS_HTTPStatus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/RxJS/HTTPStatus.service */ "./src/app/services/RxJS/HTTPStatus.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(httpStatus) {
        this.httpStatus = httpStatus;
        this.loading = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpStatus.getHttpStatus().subscribe(function (isInFlight) {
            // https://stackoverflow.com/questions/43375532/expressionchangedafterithasbeencheckederror-explained
            setTimeout(function () {
                _this.loading = isInFlight;
            }, 0);
        });
        //  this.sidebarActive = true;
    };
    AppComponent.prototype.onTopbarMobileMenuButtonClick = function (event) {
        this.topbarMenuButtonClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        event.preventDefault();
    };
    AppComponent.prototype.onMenuButtonClick = function (event) {
        this.sidebarActive = !this.sidebarActive;
        event.preventDefault();
    };
    AppComponent.prototype.onTopbarRootItemClick = function (event, item) {
        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        }
        else {
            this.activeTopbarItem = item;
        }
        event.preventDefault();
    };
    AppComponent.prototype.onTopbarMenuClick = function (event) {
        this.topbarMenuClick = true;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_services_RxJS_HTTPStatus_service__WEBPACK_IMPORTED_MODULE_1__["HTTPStatus"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/breadcrumb.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/growl */ "./node_modules/primeng/growl.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_growl__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputmask */ "./node_modules/primeng/inputmask.js");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/listbox */ "./node_modules/primeng/listbox.js");
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_listbox__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/paginator.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_paginator__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/scrollpanel */ "./node_modules/primeng/scrollpanel.js");
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/tabmenu.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(primeng_tabmenu__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/tree.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(primeng_tree__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/menubar */ "./node_modules/primeng/menubar.js");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(primeng_menubar__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var primeng_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/spinner */ "./node_modules/primeng/spinner.js");
/* harmony import */ var primeng_spinner__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(primeng_spinner__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _directives_disable_if_unauthorized_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./directives/disable-if-unauthorized.directive */ "./src/app/directives/disable-if-unauthorized.directive.ts");
/* harmony import */ var _directives_hide_if_unauthorized_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./directives/hide-if-unauthorized.directive */ "./src/app/directives/hide-if-unauthorized.directive.ts");
/* harmony import */ var _layout_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./layout/inicio/inicio.component */ "./src/app/layout/inicio/inicio.component.ts");
/* harmony import */ var _layout_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./layout/menu/app.menu.component */ "./src/app/layout/menu/app.menu.component.ts");
/* harmony import */ var _layout_rodape_app_rodape_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./layout/rodape/app.rodape.component */ "./src/app/layout/rodape/app.rodape.component.ts");
/* harmony import */ var _layout_topbar_app_breadcrumb_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./layout/topbar/app.breadcrumb.component */ "./src/app/layout/topbar/app.breadcrumb.component.ts");
/* harmony import */ var _layout_topbar_app_topbar_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./layout/topbar/app.topbar.component */ "./src/app/layout/topbar/app.topbar.component.ts");
/* harmony import */ var _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/auth-guard/auth-guard.service */ "./src/app/services/auth-guard/auth-guard.service.ts");
/* harmony import */ var _services_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/breadcrumb/breadcrumb.service */ "./src/app/services/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/cache/cache.service */ "./src/app/services/cache/cache.service.ts");
/* harmony import */ var _services_exportar_planilha_exportar_planilha_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./services/exportar-planilha/exportar-planilha.service */ "./src/app/services/exportar-planilha/exportar-planilha.service.ts");
/* harmony import */ var _services_RxJS_HTTPListener_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./services/RxJS/HTTPListener.service */ "./src/app/services/RxJS/HTTPListener.service.ts");
/* harmony import */ var _services_RxJS_HTTPStatus_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./services/RxJS/HTTPStatus.service */ "./src/app/services/RxJS/HTTPStatus.service.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _erro_acesso_erro_acesso_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./erro-acesso/erro-acesso.component */ "./src/app/erro-acesso/erro-acesso.component.ts");
/* harmony import */ var _directives_hide_if_nacional_directive__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./directives/hide-if-nacional.directive */ "./src/app/directives/hide-if-nacional.directive.ts");
/* harmony import */ var _clientes_mantem_cliente_mantem_cliente_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./clientes/mantem-cliente/mantem-cliente.component */ "./src/app/clientes/mantem-cliente/mantem-cliente.component.ts");
/* harmony import */ var _vendedor_mantem_vendedor_mantem_vendedor_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./vendedor/mantem-vendedor/mantem-vendedor.component */ "./src/app/vendedor/mantem-vendedor/mantem-vendedor.component.ts");
/* harmony import */ var _fornecedor_mantem_fornecedor_mantem_fornecedor_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./fornecedor/mantem-fornecedor/mantem-fornecedor.component */ "./src/app/fornecedor/mantem-fornecedor/mantem-fornecedor.component.ts");
/* harmony import */ var _produto_mantem_produto_mantem_produto_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./produto/mantem-produto/mantem-produto.component */ "./src/app/produto/mantem-produto/mantem-produto.component.ts");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _produto_lista_produto_lista_produto_lista_produto_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./produto/lista-produto/lista-produto/lista-produto.component */ "./src/app/produto/lista-produto/lista-produto/lista-produto.component.ts");
/* harmony import */ var _vendas_vendas_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./vendas/vendas.component */ "./src/app/vendas/vendas.component.ts");
/* harmony import */ var _vendas_produtos_vendas_produtos_vendas_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./vendas/produtos-vendas/produtos-vendas.component */ "./src/app/vendas/produtos-vendas/produtos-vendas.component.ts");
/* harmony import */ var _vendas_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./vendas/pedidos/pedidos.component */ "./src/app/vendas/pedidos/pedidos.component.ts");
/* harmony import */ var _vendas_carrinho_compras_carrinho_compras_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./vendas/carrinho-compras/carrinho-compras.component */ "./src/app/vendas/carrinho-compras/carrinho-compras.component.ts");
/* harmony import */ var _login_login_cliente_login_cliente_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./login/login-cliente/login-cliente.component */ "./src/app/login/login-cliente/login-cliente.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable: max-line-length */
// Angular Imports






// Outros imports



// PrimeNG Imports


























// App Imports




























/* tslint:enable: max-line-length */
var RxJS_Services = [_services_RxJS_HTTPListener_service__WEBPACK_IMPORTED_MODULE_47__["HTTPListener"], _services_RxJS_HTTPStatus_service__WEBPACK_IMPORTED_MODULE_48__["HTTPStatus"]];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_35__["AppComponent"],
                _layout_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_38__["InicioComponent"],
                _layout_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_39__["AppMenuComponent"],
                _layout_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_39__["AppSubMenuComponent"],
                _layout_topbar_app_topbar_component__WEBPACK_IMPORTED_MODULE_42__["AppTopBarComponent"],
                _layout_rodape_app_rodape_component__WEBPACK_IMPORTED_MODULE_40__["AppRodapeComponent"],
                _layout_topbar_app_breadcrumb_component__WEBPACK_IMPORTED_MODULE_41__["AppBreadcrumbComponent"],
                _directives_disable_if_unauthorized_directive__WEBPACK_IMPORTED_MODULE_36__["DisableIfUnauthorizedDirective"],
                _directives_hide_if_unauthorized_directive__WEBPACK_IMPORTED_MODULE_37__["HideIfUnauthorizedDirective"],
                _directives_hide_if_nacional_directive__WEBPACK_IMPORTED_MODULE_51__["HideIfNacionalDirective"],
                _erro_acesso_erro_acesso_component__WEBPACK_IMPORTED_MODULE_50__["ErroAcessoComponent"],
                _clientes_mantem_cliente_mantem_cliente_component__WEBPACK_IMPORTED_MODULE_52__["MantemClienteComponent"],
                _vendedor_mantem_vendedor_mantem_vendedor_component__WEBPACK_IMPORTED_MODULE_53__["MantemVendedorComponent"],
                _fornecedor_mantem_fornecedor_mantem_fornecedor_component__WEBPACK_IMPORTED_MODULE_54__["MantemFornecedorComponent"],
                _produto_mantem_produto_mantem_produto_component__WEBPACK_IMPORTED_MODULE_55__["MantemProdutoComponent"],
                _login_login_login_component__WEBPACK_IMPORTED_MODULE_56__["LoginComponent"],
                _produto_lista_produto_lista_produto_lista_produto_component__WEBPACK_IMPORTED_MODULE_57__["ListaProdutoComponent"],
                _vendas_vendas_component__WEBPACK_IMPORTED_MODULE_58__["VendasComponent"],
                _vendas_produtos_vendas_produtos_vendas_component__WEBPACK_IMPORTED_MODULE_59__["ProdutosVendasComponent"],
                _vendas_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_60__["PedidosComponent"],
                _vendas_carrinho_compras_carrinho_compras_component__WEBPACK_IMPORTED_MODULE_61__["CarrinhoComprasComponent"],
                _login_login_cliente_login_cliente_component__WEBPACK_IMPORTED_MODULE_62__["LoginClienteComponent"]
            ],
            imports: [
                // Angular Modules
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                // PrimeNG Modules
                primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__["CheckboxModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__["InputTextModule"],
                primeng_paginator__WEBPACK_IMPORTED_MODULE_24__["PaginatorModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_29__["TableModule"],
                primeng_tabmenu__WEBPACK_IMPORTED_MODULE_30__["TabMenuModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_26__["TabViewModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_11__["CardModule"],
                primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_28__["ScrollPanelModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_22__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_21__["MessageModule"],
                primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbModule"],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__["ConfirmDialogModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"],
                primeng_listbox__WEBPACK_IMPORTED_MODULE_20__["ListboxModule"],
                primeng_radiobutton__WEBPACK_IMPORTED_MODULE_27__["RadioButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_26__["FieldsetModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_26__["MultiSelectModule"],
                primeng_growl__WEBPACK_IMPORTED_MODULE_16__["GrowlModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_25__["PanelModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"],
                primeng_inputmask__WEBPACK_IMPORTED_MODULE_17__["InputMaskModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_26__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_26__["AutoCompleteModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_26__["PickListModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_26__["ProgressSpinnerModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__["InputTextareaModule"],
                primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_23__["OverlayPanelModule"],
                primeng_tree__WEBPACK_IMPORTED_MODULE_31__["TreeModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_26__["ChipsModule"],
                primeng_menubar__WEBPACK_IMPORTED_MODULE_33__["MenubarModule"],
                primeng_spinner__WEBPACK_IMPORTED_MODULE_34__["SpinnerModule"],
                // Outros imports
                ngx_loading__WEBPACK_IMPORTED_MODULE_6__["LoadingModule"],
                // Upload
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_15__["FileUploadModule"]
            ],
            providers: RxJS_Services.concat([
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
                    useClass: _services_RxJS_HTTPListener_service__WEBPACK_IMPORTED_MODULE_47__["HTTPListener"],
                    multi: true
                },
                primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"],
                primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
                _services_exportar_planilha_exportar_planilha_service__WEBPACK_IMPORTED_MODULE_46__["ExportarPlanilhaService"],
                _services_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_44__["BreadcrumbService"],
                _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_45__["CacheService"],
                _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_43__["AuthGuardService"],
                _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_49__["UtilityService"],
                _layout_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_39__["AppMenuComponent"],
                _layout_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_39__["AppSubMenuComponent"]
            ]),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_35__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categoria/api-categoria.service.ts":
/*!****************************************************!*\
  !*** ./src/app/categoria/api-categoria.service.ts ***!
  \****************************************************/
/*! exports provided: ApiCategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCategoriaService", function() { return ApiCategoriaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiCategoriaService = /** @class */ (function () {
    function ApiCategoriaService(http, utility) {
        this.http = http;
        this.utility = utility;
    }
    ApiCategoriaService.prototype.get = function (id) {
        return this.http.get("/api-vendas/api/v1/categoria/" + id)
            .toPromise();
    };
    ApiCategoriaService.prototype.salvar = function (categoria) {
        return this.http.post('/api-vendas/api/v1/categoria', categoria)
            .toPromise();
    };
    ApiCategoriaService.prototype.lista = function () {
        return this.http.get("/api-vendas/api/v1/categoria")
            .toPromise();
    };
    ApiCategoriaService.prototype.alterar = function (categoria) {
        return this.http.put("/api-vendas/api/v1/categoria/" + categoria.id, categoria)
            .toPromise();
    };
    ApiCategoriaService.prototype.excluir = function (id) {
        return this.http.delete("/api-vendas/api/v1/categoria/" + id)
            .toPromise();
    };
    ApiCategoriaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])
    ], ApiCategoriaService);
    return ApiCategoriaService;
}());



/***/ }),

/***/ "./src/app/clientes/api-cliente.service.ts":
/*!*************************************************!*\
  !*** ./src/app/clientes/api-cliente.service.ts ***!
  \*************************************************/
/*! exports provided: ApiClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiClienteService", function() { return ApiClienteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiClienteService = /** @class */ (function () {
    function ApiClienteService(http, utility) {
        this.http = http;
        this.utility = utility;
    }
    ApiClienteService.prototype.getByEmail = function (email) {
        return this.http.get("/api-vendas/api/v1/clientes/getByEmail/" + email)
            .toPromise();
    };
    ApiClienteService.prototype.getCliente = function (id) {
        return this.http.get("/api-vendas/api/v1/clientes/" + id)
            .toPromise();
    };
    ApiClienteService.prototype.salvarCliente = function (cliente) {
        return this.http.post('/api-vendas/api/v1/clientes', cliente)
            .toPromise();
    };
    ApiClienteService.prototype.lista = function () {
        return this.http.get("/api-vendas/api/v1/clientes")
            .toPromise();
    };
    ApiClienteService.prototype.alterar = function (cliente) {
        return this.http.put("/api-vendas/api/v1/clientes/" + cliente.id, cliente)
            .toPromise();
    };
    ApiClienteService.prototype.excluir = function (id) {
        return this.http.delete("/api-vendas/api/v1/clientes/" + id)
            .toPromise();
    };
    ApiClienteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])
    ], ApiClienteService);
    return ApiClienteService;
}());



/***/ }),

/***/ "./src/app/clientes/mantem-cliente/mantem-cliente.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/clientes/mantem-cliente/mantem-cliente.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required],\r\n.ng-valid.required {\r\n  border-left: 5px solid #42A948;\r\n  /* green */\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n  border-left: 5px solid #a94442;\r\n  /* red */\r\n}"

/***/ }),

/***/ "./src/app/clientes/mantem-cliente/mantem-cliente.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/clientes/mantem-cliente/mantem-cliente.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"ui-fluid\">\r\n      <p-card class=\"cad_cadastro ui-g-12\" title=\"Cliente\">\r\n          <hr>\r\n          <form class=\"ui-g\" (ngSubmit)=\"salvar()\" #clienteForm=\"ngForm\">\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"nome\">Nome:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-5 \">\r\n                      <input id=\"nome\"  required type=\"text\" size=\"30\" pInputText [(ngModel)]=\"cliente.nome\" name=\"nome\" #nome=\"ngModel\"  maxlength=\"50\">\r\n                      <p-message [hidden]=\"nome.valid || nome.pristine\" severity=\"error\" text=\"Nome deve ser preenchido\"></p-message>\r\n                  </div>\r\n              </div>\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"email\">E-mail:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-5 \">\r\n                      <input id=\"email\"  required type=\"text\" size=\"30\" pInputText [(ngModel)]=\"cliente.email\" name=\"email\" #nome=\"ngModel\"  maxlength=\"50\">\r\n                      \r\n                  </div>\r\n              </div>\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"cpf\">CPF:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-2\">\r\n                      <p-inputMask id=\"cpf\" name=\"cpf\" required size=\"14\" [(ngModel)]=\"cliente.cpf\"\r\n                          mask=\"999.999.999-99\"></p-inputMask>\r\n                  </div>\r\n\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"form-label\" for=\"telefone\">Telefone:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-2\">\r\n                      <p-inputMask id=\"telefone\" name=\"telefone\" size=\"14\" [(ngModel)]=\"cliente.telefone\"\r\n                          mask=\"(99)99999-9999\"></p-inputMask>\r\n                  </div>\r\n              </div>\r\n\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"senha\">Senha:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-2\">\r\n                      <input id=\"senha\"  required type=\"password\" size=\"30\" pInputText [(ngModel)]=\"cliente.senha\" name=\"senha\" #nome=\"ngModel\"  maxlength=\"8\">\r\n                  </div>\r\n\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"confirmaSenha\">Confirmar senha:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-2\">\r\n                      <input id=\"confirmaSenha\" required validateEqual=\"cliente.senha\" type=\"password\" pInputText  maxlength=\"8\" [(ngModel)]=\"confirmaSenha\" name=\"confirmaSenha\"/>\r\n                  </div>\r\n              </div>\r\n\r\n              <div  class=\"ui-g-12 ui-fluid\" >\r\n                  <p-fieldset legend=\"Endereço\" [toggleable]=\"true\">\r\n                      <div  class=\"ui-g-10 ui-fluid\" >\r\n                        <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                            <label  class=\"required form-label\" for=\"cep\">CEP:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-9 ui-lg-2\">\r\n                            <p-inputMask id=\"cep\" name=\"cep\" required size=\"9\" [(ngModel)]=\"cliente.endereco.cep\"\r\n                                mask=\"99999-999\"></p-inputMask>\r\n                        </div>\r\n                      </div>\r\n                      <div  class=\"ui-g-10 ui-fluid\" >\r\n                          <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                              <label  class=\"form-label\" for=\"logradouro\">Logradouro:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9 ui-lg-5\">\r\n                              <input id=\"logradouro\"  type=\"text\" size=\"64\" pInputText [(ngModel)]=\"cliente.endereco.logradouro\" name=\"logradouro\"\r\n                               #nome=\"ngModel\"  maxlength=\"64\">\r\n                          </div>\r\n                      </div>\r\n                      <div  class=\"ui-g-10 ui-fluid\" >\r\n                          <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                              <label  class=\"form-label\" for=\"complemento\">Complemento:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9 ui-lg-5\">\r\n                              <input id=\"complemento\"  type=\"text\" size=\"64\" pInputText [(ngModel)]=\"cliente.endereco.complemento\" name=\"complemento\"\r\n                               #nome=\"ngModel\"  maxlength=\"64\">\r\n                          </div>\r\n                      </div>\r\n                      <div  class=\"ui-g-10 ui-fluid\" >\r\n                          <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                              <label  class=\"form-label\" for=\"bairro\">Bairro:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9 ui-lg-5\">\r\n                              <input id=\"bairro\"  type=\"text\" size=\"64\" pInputText [(ngModel)]=\"cliente.endereco.bairro\" name=\"bairro\"\r\n                               #nome=\"ngModel\"  maxlength=\"64\">\r\n                          </div>\r\n                      </div>\r\n                      <div  class=\"ui-g-10 ui-fluid\" >\r\n                          <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                              <label  class=\"form-label\" for=\"uf\">UF:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9 ui-lg-2\">\r\n                              <p-dropdown [options]=\"ufs\" [(ngModel)]=\"cliente.endereco.uf\" [ngModelOptions]=\"{standalone: true}\"></p-dropdown>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                              <label  class=\"form-label\" for=\"municipio\">Município:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9 ui-lg-3\">\r\n                              <input id=\"municipio\"  type=\"text\" size=\"32\" pInputText [(ngModel)]=\"cliente.endereco.municipio\" name=\"municipio\"\r\n                               #nome=\"ngModel\"  maxlength=\"64\">\r\n                          </div>\r\n                      </div>\r\n                  </p-fieldset>\r\n              </div>\r\n              <div class=\"ui-fluid\">\r\n                  <div class=\"ui-g-6 ui-md-6 ui-lg-10\">\r\n                      <p-button label=\"Voltar\" style=\"float: right;\" [routerLink]=\"['/']\" routerLinkActive=\"active\"></p-button>\r\n                  </div>\r\n                  <div class=\"ui-g-6 ui-md-6 ui-lg-2\">\r\n                      <p-button type=\"submit\" [disabled]=\"clienteForm.form.invalid\" label=\"Salvar\" style=\"float: left;\"></p-button>\r\n                  </div>\r\n              </div>\r\n          </form>\r\n      </p-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/clientes/mantem-cliente/mantem-cliente.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/clientes/mantem-cliente/mantem-cliente.component.ts ***!
  \*********************************************************************/
/*! exports provided: MantemClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantemClienteComponent", function() { return MantemClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_cliente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-cliente.service */ "./src/app/clientes/api-cliente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/breadcrumb/breadcrumb.service */ "./src/app/services/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var src_app_entities_CLiente__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/entities/CLiente */ "./src/app/entities/CLiente.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_entities_Endereco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/entities/Endereco */ "./src/app/entities/Endereco.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MantemClienteComponent = /** @class */ (function () {
    function MantemClienteComponent(clienteAPI, utilService, route, breadcrumbService, messageService) {
        this.clienteAPI = clienteAPI;
        this.utilService = utilService;
        this.route = route;
        this.breadcrumbService = breadcrumbService;
        this.messageService = messageService;
        this.notMatchSenha = false;
        this.cliente = new src_app_entities_CLiente__WEBPACK_IMPORTED_MODULE_4__["Cliente"]();
        this.cliente.endereco = new src_app_entities_Endereco__WEBPACK_IMPORTED_MODULE_6__["Endereco"]();
        this.confirmaSenha = null;
        this.breadcrumbService.setItems([
            { label: 'Cadastro de Cliente', routerLink: 'novo-cliente' }
        ]);
        this.ufs = utilService.inicializarUF();
    }
    MantemClienteComponent.prototype.validade = function () {
        var pass = this.cliente.senha;
        var repPass = this.confirmaSenha;
        if (repPass !== pass) {
            return {
                notMatchSenha: true
            };
        }
        return null;
    };
    MantemClienteComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.url[0] && this.route.snapshot.url[0].path === 'editar-cliente') {
            this.route.params.subscribe(function (params) {
                _this.clienteAPI.getCliente(params['id'])
                    .then(function (response) {
                    _this.cliente = response.data;
                });
            });
        }
        else {
            this.inicializarCliente();
        }
    };
    MantemClienteComponent.prototype.salvar = function () {
        var _this = this;
        if (this.clienteForm.invalid) {
            return;
        }
        if (this.cliente.senha !== this.confirmaSenha) {
            this.messageService.add({ severity: 'error', summary: '', detail: 'É necessário confirmar a senha.' });
            return;
        }
        this.cliente.cpf = this.utilService.retirarFormatacao(this.cliente.cpf);
        this.cliente.telefone = this.utilService.retirarFormatacao(this.cliente.telefone);
        this.cliente.endereco.cep = this.utilService.retirarFormatacao(this.cliente.endereco.cep);
        if (this.cliente.id) {
            this.clienteAPI.alterar(this.cliente);
        }
        else {
            this.clienteAPI.salvarCliente(this.cliente)
                .then(function () {
                _this.clienteForm.reset();
                // Ajuste para que o checkbox reflita corretamente o estado atual da propriedade ATIVO
                setTimeout(function () {
                    return _this.inicializarCliente();
                }, 0);
            });
        }
    };
    MantemClienteComponent.prototype.inicializarCliente = function () {
        this.cliente = new src_app_entities_CLiente__WEBPACK_IMPORTED_MODULE_4__["Cliente"]();
        this.cliente.endereco = new src_app_entities_Endereco__WEBPACK_IMPORTED_MODULE_6__["Endereco"]();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('clienteForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], MantemClienteComponent.prototype, "clienteForm", void 0);
    MantemClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mantem-cliente',
            template: __webpack_require__(/*! ./mantem-cliente.component.html */ "./src/app/clientes/mantem-cliente/mantem-cliente.component.html"),
            styles: [__webpack_require__(/*! ./mantem-cliente.component.css */ "./src/app/clientes/mantem-cliente/mantem-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [_api_cliente_service__WEBPACK_IMPORTED_MODULE_1__["ApiClienteService"],
            src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], MantemClienteComponent);
    return MantemClienteComponent;
}());



/***/ }),

/***/ "./src/app/directives/disable-if-unauthorized.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/directives/disable-if-unauthorized.directive.ts ***!
  \*****************************************************************/
/*! exports provided: DisableIfUnauthorizedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableIfUnauthorizedDirective", function() { return DisableIfUnauthorizedDirective; });
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

var DisableIfUnauthorizedDirective = /** @class */ (function () {
    /*
      Exemplo:
      <button appDisableIfUnauthorized='CONSULTAR_JURIS' ..."></button>
    */
    function DisableIfUnauthorizedDirective(el) {
        this.el = el;
    }
    DisableIfUnauthorizedDirective.prototype.ngOnInit = function () {
        this.updateElement();
    };
    DisableIfUnauthorizedDirective.prototype.ngOnChanges = function () {
        this.updateElement();
    };
    DisableIfUnauthorizedDirective.prototype.updateElement = function () {
        this.el.nativeElement.disabled = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appDisableIfUnauthorized'),
        __metadata("design:type", String)
    ], DisableIfUnauthorizedDirective.prototype, "role", void 0);
    DisableIfUnauthorizedDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDisableIfUnauthorized]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DisableIfUnauthorizedDirective);
    return DisableIfUnauthorizedDirective;
}());



/***/ }),

/***/ "./src/app/directives/hide-if-nacional.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/directives/hide-if-nacional.directive.ts ***!
  \**********************************************************/
/*! exports provided: HideIfNacionalDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideIfNacionalDirective", function() { return HideIfNacionalDirective; });
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

var HideIfNacionalDirective = /** @class */ (function () {
    /*
  Exemplo:
  <button appHideIfNacional='PARAMETRIZAR_JURIS' ..."></button>
  */
    function HideIfNacionalDirective(el) {
        this.el = el;
    }
    HideIfNacionalDirective.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        this.updateElement();
    };
    HideIfNacionalDirective.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
    };
    HideIfNacionalDirective.prototype.ngOnChanges = function () {
        this.updateElement();
    };
    HideIfNacionalDirective.prototype.updateElement = function () {
        this.el.nativeElement.style.display = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appHideIfNacional'),
        __metadata("design:type", String)
    ], HideIfNacionalDirective.prototype, "role", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HideIfNacionalDirective.prototype, "onResize", null);
    HideIfNacionalDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHideIfNacional]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HideIfNacionalDirective);
    return HideIfNacionalDirective;
}());



/***/ }),

/***/ "./src/app/directives/hide-if-unauthorized.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/directives/hide-if-unauthorized.directive.ts ***!
  \**************************************************************/
/*! exports provided: HideIfUnauthorizedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideIfUnauthorizedDirective", function() { return HideIfUnauthorizedDirective; });
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

var HideIfUnauthorizedDirective = /** @class */ (function () {
    /*
    Exemplo:
    <button appHideIfUnauthorized='CONSULTAR_JURIS' ..."></button>
    */
    function HideIfUnauthorizedDirective(el) {
        this.el = el;
    }
    HideIfUnauthorizedDirective.prototype.ngOnInit = function () {
        this.updateElement();
    };
    HideIfUnauthorizedDirective.prototype.ngOnChanges = function () {
        this.updateElement();
    };
    HideIfUnauthorizedDirective.prototype.updateElement = function () {
        this.el.nativeElement.style.display = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appHideIfUnauthorized'),
        __metadata("design:type", String)
    ], HideIfUnauthorizedDirective.prototype, "role", void 0);
    HideIfUnauthorizedDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHideIfUnauthorized]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HideIfUnauthorizedDirective);
    return HideIfUnauthorizedDirective;
}());



/***/ }),

/***/ "./src/app/entities/CLiente.ts":
/*!*************************************!*\
  !*** ./src/app/entities/CLiente.ts ***!
  \*************************************/
/*! exports provided: Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
/* harmony import */ var _Usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Usuario */ "./src/app/entities/Usuario.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cliente;
}(_Usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"]));



/***/ }),

/***/ "./src/app/entities/Categoria.ts":
/*!***************************************!*\
  !*** ./src/app/entities/Categoria.ts ***!
  \***************************************/
/*! exports provided: Categoria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categoria", function() { return Categoria; });
var Categoria = /** @class */ (function () {
    function Categoria() {
    }
    return Categoria;
}());



/***/ }),

/***/ "./src/app/entities/Endereco.ts":
/*!**************************************!*\
  !*** ./src/app/entities/Endereco.ts ***!
  \**************************************/
/*! exports provided: Endereco */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Endereco", function() { return Endereco; });
var Endereco = /** @class */ (function () {
    function Endereco() {
    }
    return Endereco;
}());



/***/ }),

/***/ "./src/app/entities/Fornecedor.ts":
/*!****************************************!*\
  !*** ./src/app/entities/Fornecedor.ts ***!
  \****************************************/
/*! exports provided: Fornecedor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fornecedor", function() { return Fornecedor; });
/* harmony import */ var _Usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Usuario */ "./src/app/entities/Usuario.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Fornecedor = /** @class */ (function (_super) {
    __extends(Fornecedor, _super);
    function Fornecedor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fornecedor;
}(_Usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"]));



/***/ }),

/***/ "./src/app/entities/Pedido.ts":
/*!************************************!*\
  !*** ./src/app/entities/Pedido.ts ***!
  \************************************/
/*! exports provided: Pedido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pedido", function() { return Pedido; });
var Pedido = /** @class */ (function () {
    function Pedido() {
    }
    return Pedido;
}());



/***/ }),

/***/ "./src/app/entities/Produto.ts":
/*!*************************************!*\
  !*** ./src/app/entities/Produto.ts ***!
  \*************************************/
/*! exports provided: Produto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produto", function() { return Produto; });
var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());



/***/ }),

/***/ "./src/app/entities/ProdutoPedido.ts":
/*!*******************************************!*\
  !*** ./src/app/entities/ProdutoPedido.ts ***!
  \*******************************************/
/*! exports provided: ProdutoPedido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoPedido", function() { return ProdutoPedido; });
var ProdutoPedido = /** @class */ (function () {
    function ProdutoPedido() {
    }
    return ProdutoPedido;
}());



/***/ }),

/***/ "./src/app/entities/ProdutoPedidos.ts":
/*!********************************************!*\
  !*** ./src/app/entities/ProdutoPedidos.ts ***!
  \********************************************/
/*! exports provided: ProdutoPedidos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoPedidos", function() { return ProdutoPedidos; });
var ProdutoPedidos = /** @class */ (function () {
    function ProdutoPedidos() {
        this.produtoPedidos = [];
    }
    return ProdutoPedidos;
}());



/***/ }),

/***/ "./src/app/entities/Role.ts":
/*!**********************************!*\
  !*** ./src/app/entities/Role.ts ***!
  \**********************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["CONSULTAR_JURIS"] = "CONSULTAR_JURIS";
    Role["PARAMETRIZAR_JURIS"] = "PARAMETRIZAR_JURIS";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/entities/Usuario.ts":
/*!*************************************!*\
  !*** ./src/app/entities/Usuario.ts ***!
  \*************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/entities/Vendedor.ts":
/*!**************************************!*\
  !*** ./src/app/entities/Vendedor.ts ***!
  \**************************************/
/*! exports provided: Vendedor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vendedor", function() { return Vendedor; });
/* harmony import */ var _Usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Usuario */ "./src/app/entities/Usuario.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Vendedor = /** @class */ (function (_super) {
    __extends(Vendedor, _super);
    function Vendedor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Vendedor;
}(_Usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"]));



/***/ }),

/***/ "./src/app/erro-acesso/erro-acesso.component.css":
/*!*******************************************************!*\
  !*** ./src/app/erro-acesso/erro-acesso.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/erro-acesso/erro-acesso.component.html":
/*!********************************************************!*\
  !*** ./src/app/erro-acesso/erro-acesso.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"landing-body\">\r\n  <div id=\"features\"> \r\n      <div>\r\n        <div  class=\"ui-g-12 ui-fluid\">\r\n          <div class=\"ui-g-12 feature-box\">\r\n            <h1>\r\n              Usuário sem acesso ao sistema Juris, consulte o administrador de acessos.\r\n            </h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/erro-acesso/erro-acesso.component.ts":
/*!******************************************************!*\
  !*** ./src/app/erro-acesso/erro-acesso.component.ts ***!
  \******************************************************/
/*! exports provided: ErroAcessoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErroAcessoComponent", function() { return ErroAcessoComponent; });
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

var ErroAcessoComponent = /** @class */ (function () {
    function ErroAcessoComponent() {
    }
    ErroAcessoComponent.prototype.ngOnInit = function () {
    };
    ErroAcessoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-erro-acesso',
            template: __webpack_require__(/*! ./erro-acesso.component.html */ "./src/app/erro-acesso/erro-acesso.component.html"),
            styles: [__webpack_require__(/*! ./erro-acesso.component.css */ "./src/app/erro-acesso/erro-acesso.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErroAcessoComponent);
    return ErroAcessoComponent;
}());



/***/ }),

/***/ "./src/app/fornecedor/api-fornecedor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/fornecedor/api-fornecedor.service.ts ***!
  \******************************************************/
/*! exports provided: ApiFornecedorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiFornecedorService", function() { return ApiFornecedorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiFornecedorService = /** @class */ (function () {
    function ApiFornecedorService(http, utility) {
        this.http = http;
        this.utility = utility;
    }
    ApiFornecedorService.prototype.get = function (id) {
        return this.http.get(this.utility.apiVendasUrl() + ("/api-vendas/api/v1/fornecedor/" + id))
            .toPromise();
    };
    ApiFornecedorService.prototype.salvar = function (fornecedor) {
        return this.http.post(this.utility.apiVendasUrl() + '/api-vendas/api/v1/fornecedor', fornecedor)
            .toPromise();
    };
    ApiFornecedorService.prototype.lista = function () {
        return this.http.get("/api-vendas/api/v1/fornecedor")
            .toPromise();
    };
    ApiFornecedorService.prototype.alterar = function (fornecedor) {
        return this.http.put(this.utility.apiVendasUrl() +
            ("/api-vendas/api/v1/fornecedor/" + fornecedor.id), fornecedor)
            .toPromise();
    };
    ApiFornecedorService.prototype.excluir = function (id) {
        return this.http.delete("/api-vendas/api/v1/fornecedor/" + id)
            .toPromise();
    };
    ApiFornecedorService.prototype.getByEmail = function (email) {
        return this.http.get("/api-vendas/api/v1/fornecedor/getByEmail/" + email)
            .toPromise();
    };
    ApiFornecedorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])
    ], ApiFornecedorService);
    return ApiFornecedorService;
}());



/***/ }),

/***/ "./src/app/fornecedor/mantem-fornecedor/mantem-fornecedor.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/fornecedor/mantem-fornecedor/mantem-fornecedor.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fornecedor/mantem-fornecedor/mantem-fornecedor.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/fornecedor/mantem-fornecedor/mantem-fornecedor.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"ui-fluid\">\r\n      <p-card class=\"cad_cadastro ui-g-12\" title=\"Fornecedor\">\r\n          <hr>\r\n          <form class=\"ui-g\" (ngSubmit)=\"salvar()\" #fornecedorForm=\"ngForm\">\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"nome\">Nome Fantasia:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-5 \">\r\n                      <input id=\"nome\"  required type=\"text\" size=\"30\" pInputText [(ngModel)]=\"fornecedor.nomeFantasia\" name=\"nome\" #nome=\"ngModel\"  maxlength=\"50\">\r\n                      <p-message [hidden]=\"nome.valid || nome.pristine\" severity=\"error\" text=\"Nome deve ser preenchido\"></p-message>\r\n                  </div>\r\n              </div>\r\n\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                    <label  class=\"required form-label\" for=\"nome\">Razão Social:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-9 ui-lg-5 \">\r\n                    <input id=\"razaoSocial\"  required type=\"text\" size=\"30\" pInputText [(ngModel)]=\"fornecedor.razaoSocial\" name=\"razaoSocial\" #nome=\"ngModel\"  maxlength=\"50\">\r\n                </div>\r\n              </div>\r\n\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"email\">E-mail:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-5 \">\r\n                      <input id=\"email\"  required type=\"text\" size=\"30\" pInputText [(ngModel)]=\"fornecedor.email\" name=\"email\" #nome=\"ngModel\"  maxlength=\"50\">\r\n                      \r\n                  </div>\r\n              </div>\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"cnpj\">CNPJ:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-2\">\r\n                      <p-inputMask  id=\"cnpj\" name=\"cnpj\" required size=\"18\" [(ngModel)]=\"fornecedor.cnpj\"\r\n                          mask=\"99.999.999/9999-99\"></p-inputMask>\r\n                  </div>\r\n\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"form-label\" for=\"telefone\">Telefone:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-2\">\r\n                      <p-inputMask  id=\"telefone\" name=\"telefone\" size=\"14\" [(ngModel)]=\"fornecedor.telefone\"\r\n                          mask=\"(99) 99999-9999\"></p-inputMask>\r\n                  </div>\r\n              </div>\r\n\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"senha\">Senha:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-2\">\r\n                      <input id=\"senha\"  required type=\"password\" size=\"30\" pInputText [(ngModel)]=\"fornecedor.senha\" name=\"senha\" #nome=\"ngModel\"  maxlength=\"8\">\r\n                  </div>\r\n\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"confirmaSenha\">Confirmar senha:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-2\">\r\n                      <input id=\"confirmaSenha\" required validateEqual=\"fornecedor.senha\" type=\"password\"  maxlength=\"8\" pInputText [(ngModel)]=\"confirmaSenha\" name=\"confirmaSenha\"/>\r\n                  </div>\r\n              </div>\r\n\r\n              <div  class=\"ui-g-12 ui-fluid\" >\r\n                  <p-fieldset legend=\"Endereço\" [toggleable]=\"true\">\r\n                      <div  class=\"ui-g-10 ui-fluid\" >\r\n                        <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                            <label  class=\"required form-label\" for=\"cep\">CEP:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-9 ui-lg-2\">\r\n                            <p-inputMask  id=\"cep\" name=\"cep\" required size=\"9\" [(ngModel)]=\"fornecedor.endereco.cep\"\r\n                                mask=\"99999-999\"></p-inputMask>\r\n                        </div>\r\n                      </div>\r\n                      <div  class=\"ui-g-10 ui-fluid\" >\r\n                          <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                              <label  class=\"form-label\" for=\"logradouro\">Logradouro:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9 ui-lg-5\">\r\n                              <input id=\"logradouro\"  type=\"text\" size=\"64\" pInputText [(ngModel)]=\"fornecedor.endereco.logradouro\" name=\"logradouro\"\r\n                               #nome=\"ngModel\"  maxlength=\"64\">\r\n                          </div>\r\n                      </div>\r\n                      <div  class=\"ui-g-10 ui-fluid\" >\r\n                          <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                              <label  class=\"form-label\" for=\"complemento\">Complemento:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9 ui-lg-5\">\r\n                              <input id=\"complemento\"  type=\"text\" size=\"64\" pInputText [(ngModel)]=\"fornecedor.endereco.complemento\" name=\"complemento\"\r\n                               #nome=\"ngModel\"  maxlength=\"64\">\r\n                          </div>\r\n                      </div>\r\n                      <div  class=\"ui-g-10 ui-fluid\" >\r\n                          <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                              <label  class=\"form-label\" for=\"bairro\">Bairro:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9 ui-lg-5\">\r\n                              <input id=\"bairro\"  type=\"text\" size=\"64\" pInputText [(ngModel)]=\"fornecedor.endereco.bairro\" name=\"bairro\"\r\n                               #nome=\"ngModel\"  maxlength=\"64\">\r\n                          </div>\r\n                      </div>\r\n                      <div  class=\"ui-g-10 ui-fluid\" >\r\n                          <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                              <label  class=\"form-label\" for=\"uf\">UF:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9 ui-lg-2\">\r\n                              <p-dropdown [options]=\"ufs\" [(ngModel)]=\"fornecedor.endereco.uf\" name=\"uf.code\"></p-dropdown>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                              <label  class=\"form-label\" for=\"municipio\">Município:</label>\r\n                          </div>\r\n                          <div class=\"ui-g-12 ui-md-9 ui-lg-3\">\r\n                              <input id=\"municipio\"  type=\"text\" size=\"32\" pInputText [(ngModel)]=\"fornecedor.endereco.municipio\" name=\"municipio\"\r\n                               #nome=\"ngModel\"  maxlength=\"64\">\r\n                          </div>\r\n                      </div>\r\n                  </p-fieldset>\r\n              </div>\r\n              <div class=\"ui-fluid\">\r\n                  <div class=\"ui-g-6 ui-md-6 ui-lg-10\">\r\n                      <p-button label=\"Voltar\" style=\"float: right;\" [routerLink]=\"['/']\" routerLinkActive=\"active\"></p-button>\r\n                  </div>\r\n                  <div class=\"ui-g-6 ui-md-6 ui-lg-2\">\r\n                      <p-button type=\"submit\" [disabled]=\"fornecedorForm.form.invalid\" label=\"Salvar\" style=\"float: left;\"></p-button>\r\n                  </div>\r\n              </div>\r\n          </form>\r\n      </p-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/fornecedor/mantem-fornecedor/mantem-fornecedor.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/fornecedor/mantem-fornecedor/mantem-fornecedor.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MantemFornecedorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantemFornecedorComponent", function() { return MantemFornecedorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_entities_Fornecedor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/entities/Fornecedor */ "./src/app/entities/Fornecedor.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_fornecedor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-fornecedor.service */ "./src/app/fornecedor/api-fornecedor.service.ts");
/* harmony import */ var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/breadcrumb/breadcrumb.service */ "./src/app/services/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_entities_Endereco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/entities/Endereco */ "./src/app/entities/Endereco.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MantemFornecedorComponent = /** @class */ (function () {
    function MantemFornecedorComponent(fornecedorApi, utilService, route, breadcrumbService, messageService) {
        this.fornecedorApi = fornecedorApi;
        this.utilService = utilService;
        this.route = route;
        this.breadcrumbService = breadcrumbService;
        this.messageService = messageService;
        this.notMatchSenha = false;
        this.fornecedor = new src_app_entities_Fornecedor__WEBPACK_IMPORTED_MODULE_1__["Fornecedor"]();
        this.fornecedor.endereco = new src_app_entities_Endereco__WEBPACK_IMPORTED_MODULE_8__["Endereco"]();
        this.confirmaSenha = null;
        this.breadcrumbService.setItems([
            { label: 'Cadastro de Fornecedor', routerLink: 'novo-fornecedor' }
        ]);
    }
    MantemFornecedorComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.url[0] && this.route.snapshot.url[0].path === 'editar-fornecedor') {
            this.route.params.subscribe(function (params) {
                _this.fornecedorApi.get(params['id'])
                    .then(function (response) {
                    _this.fornecedor = response.data;
                });
            });
        }
        else {
            this.inicializar();
        }
        this.ufs = this.utilService.inicializarUF();
    };
    MantemFornecedorComponent.prototype.salvar = function () {
        var _this = this;
        if (this.fornecedorForm.invalid) {
            return;
        }
        if (this.fornecedor.senha !== this.confirmaSenha) {
            this.messageService.add({ severity: 'error', summary: '', detail: 'É necessário confirmar a senha.' });
            return;
        }
        this.fornecedor.cnpj = this.utilService.retirarFormatacao(this.fornecedor.cnpj);
        this.fornecedor.telefone = this.utilService.retirarFormatacao(this.fornecedor.telefone);
        this.fornecedor.endereco.cep = this.utilService.retirarFormatacao(this.fornecedor.endereco.cep);
        if (this.fornecedor.id) {
            this.fornecedorApi.alterar(this.fornecedor);
        }
        else {
            this.fornecedorApi.salvar(this.fornecedor)
                .then(function () {
                _this.fornecedorForm.reset();
                setTimeout(function () {
                    return _this.inicializar();
                }, 0);
            });
        }
    };
    MantemFornecedorComponent.prototype.inicializar = function () {
        this.fornecedor = new src_app_entities_Fornecedor__WEBPACK_IMPORTED_MODULE_1__["Fornecedor"]();
        this.fornecedor.endereco = new src_app_entities_Endereco__WEBPACK_IMPORTED_MODULE_8__["Endereco"]();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fornecedorForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], MantemFornecedorComponent.prototype, "fornecedorForm", void 0);
    MantemFornecedorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mantem-fornecedor',
            template: __webpack_require__(/*! ./mantem-fornecedor.component.html */ "./src/app/fornecedor/mantem-fornecedor/mantem-fornecedor.component.html"),
            styles: [__webpack_require__(/*! ./mantem-fornecedor.component.css */ "./src/app/fornecedor/mantem-fornecedor/mantem-fornecedor.component.css")]
        }),
        __metadata("design:paramtypes", [_api_fornecedor_service__WEBPACK_IMPORTED_MODULE_3__["ApiFornecedorService"],
            src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_services_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], MantemFornecedorComponent);
    return MantemFornecedorComponent;
}());



/***/ }),

/***/ "./src/app/imagem/api-imagem.service.ts":
/*!**********************************************!*\
  !*** ./src/app/imagem/api-imagem.service.ts ***!
  \**********************************************/
/*! exports provided: ApiImagemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiImagemService", function() { return ApiImagemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiImagemService = /** @class */ (function () {
    function ApiImagemService(http, utility) {
        this.http = http;
        this.utility = utility;
    }
    ApiImagemService.prototype.buscaImagemId = function (id) {
        return this.http.get("/api-vendas/api/v1/imagem/arquivo/" + id, { responseType: 'blob' }).toPromise();
    };
    ApiImagemService.prototype.get = function (id) {
        return this.http.get("/api-vendas/api/v1/imagem/" + id)
            .toPromise();
    };
    ApiImagemService.prototype.lista = function () {
        return this.http.get("/api-vendas/api/v1/imagem")
            .toPromise();
    };
    ApiImagemService.prototype.alterar = function (imagem) {
        return this.http.put("/api-vendas/api/v1/imagem/" + imagem.id, imagem)
            .toPromise();
    };
    ApiImagemService.prototype.excluir = function (id) {
        return this.http.delete("/api-vendas/api/v1/imagem/" + id)
            .toPromise();
    };
    ApiImagemService.prototype.buscaPorProduto = function (id) {
        return this.http.get("/api-vendas/api/v1/imagem/buscarPorProduto/" + id)
            .toPromise();
    };
    ApiImagemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])
    ], ApiImagemService);
    return ApiImagemService;
}());



/***/ }),

/***/ "./src/app/layout/inicio/inicio.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/inicio/inicio.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right {\r\n    float: right;\r\n}\r\n\r\nimg {\r\n    margin-right: 0px !important;\r\n}"

/***/ }),

/***/ "./src/app/layout/inicio/inicio.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/inicio/inicio.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"landing-body\" id=\"PrincipalExternoBody\">\r\n       \r\n</div>"

/***/ }),

/***/ "./src/app/layout/inicio/inicio.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/inicio/inicio.component.ts ***!
  \***************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/breadcrumb/breadcrumb.service */ "./src/app/services/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InicioComponent = /** @class */ (function () {
    function InicioComponent(breadcrumbService, router, app) {
        this.breadcrumbService = breadcrumbService;
        this.router = router;
        this.app = app;
        this.breadcrumbService.setItems([
            { label: 'inicio', routerLink: '' }
        ]);
    }
    InicioComponent.prototype.ngOnInit = function () {
        this.temPermissao = true;
    };
    InicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/layout/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/layout/inicio/inicio.component.css")]
        }),
        __metadata("design:paramtypes", [_services_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/layout/menu/app.menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/menu/app.menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-menubar\" >\r\n    <div id=\"menuBar\">\r\n            <p-menubar [model]=\"model\"></p-menubar>\r\n            \r\n    </div>\r\n</div>\r\n\r\n<div class=\"layout-sidebar\" [ngClass]=\"{'layout-sidebar-active': app.sidebarActive}\"  >\r\n\r\n        <p-scrollPanel #scrollPanel [style]=\"{height: '100%'}\" >\r\n            <ul app-submenu [item]=\"model\" root=\"true\"  class=\"layout-menu\" ></ul>\r\n        </p-scrollPanel>\r\n            \r\n</div>\r\n            "

/***/ }),

/***/ "./src/app/layout/menu/app.menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/menu/app.menu.component.ts ***!
  \***************************************************/
/*! exports provided: AppMenuComponent, AppSubMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMenuComponent", function() { return AppMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSubMenuComponent", function() { return AppSubMenuComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _entities_Role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../entities/Role */ "./src/app/entities/Role.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppMenuComponent = /** @class */ (function () {
    function AppMenuComponent(app) {
        this.app = app;
    }
    AppMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.layoutMenuScrollerViewChild.moveBar(); }, 100);
    };
    AppMenuComponent.prototype.ngOnInit = function () {
        this.updateMenu();
    };
    Object.defineProperty(AppMenuComponent.prototype, "ItemsMenu", {
        get: function () {
            return this.model;
        },
        enumerable: true,
        configurable: true
    });
    AppMenuComponent.prototype.updateMenu = function () {
        this.model = [
            { label: 'Início', routerLink: ['/'] },
            { label: 'Cadastros',
                role: _entities_Role__WEBPACK_IMPORTED_MODULE_4__["Role"].PARAMETRIZAR_JURIS,
                items: [
                    { label: 'Cliente', routerLink: ['/novo-cliente'] },
                    // { label: 'Vendedor', routerLink: ['/novo-vendedor']},
                    { label: 'Fornecedor', routerLink: ['/novo-fornecedor'] },
                ]
            },
        ];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollPanel'),
        __metadata("design:type", primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ScrollPanel"])
    ], AppMenuComponent.prototype, "layoutMenuScrollerViewChild", void 0);
    AppMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./app.menu.component.html */ "./src/app/layout/menu/app.menu.component.html")
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], AppMenuComponent);
    return AppMenuComponent;
}());

var AppSubMenuComponent = /** @class */ (function () {
    function AppSubMenuComponent(app, appMenu) {
        this.app = app;
        this.appMenu = appMenu;
    }
    AppSubMenuComponent.prototype.itemClick = function (event, item, index) {
        var _this = this;
        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }
        // activate current item and deactivate active sibling if any
        if (item.routerLink || item.items || item.command || item.url) {
            this.activeIndex = (this.activeIndex === index) ? -1 : index;
        }
        // execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }
        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            setTimeout(function () {
                _this.appMenu.layoutMenuScrollerViewChild.moveBar();
            }, 450);
            event.preventDefault();
        }
        // hide menu
        if (!item.items) {
            this.app.sidebarActive = false;
        }
    };
    AppSubMenuComponent.prototype.isActive = function (index) {
        return this.activeIndex === index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], AppSubMenuComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppSubMenuComponent.prototype, "root", void 0);
    AppSubMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            /* tslint:disable:component-selector */
            selector: '[app-submenu]',
            /* tslint:enable:component-selector */
            template: "\n        <ng-template ngFor let-child let-i=\"index\" [ngForOf]=\"(root ? item : item.items)\">\n            <li [ngClass]=\"{'active-menuitem': isActive(i)}\" [class]=\"child.badgeStyleClass\">\n                <a [href]=\"child.url||'#'\" (click)=\"itemClick($event,child,i)\" *ngIf=\"!child.routerLink\"\n                [attr.target]=\"child.target\"(mouseenter)=\"hover=true\" (mouseleave)=\"hover=false\" class=\"ripplelink\" >\n\n\n                    <span class=\"menuitem-text\">{{child.label}}</span>\n                    <em class=\"pi pi-chevron-down layout-submenu-toggler\" *ngIf=\"child.items\"></em>\n\n                    <span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n                </a>\n                <a (click)=\"itemClick($event,child,i)\" *ngIf=\"child.routerLink\"\n                    [routerLink]=\"child.routerLink\" routerLinkActive=\"active-menuitem-routerlink\"\n                    [routerLinkActiveOptions]=\"{exact: true}\" [attr.target]=\"child.target\"\n                    (mouseenter)=\"hover=true\" (mouseleave)=\"hover=false\" class=\"ripplelink\">\n\n\n                    <span class=\"menuitem-text\">{{child.label}}</span>\n                    <em class=\"pi pi-chevron-down layout-submenu-toggler\" *ngIf=\"child.items\"></em>\n                    <span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n                    </a>\n                <ul app-submenu [item]=\"child\" *ngIf=\"child.items\" [@children]=\"isActive(i) ? 'visible' : 'hidden'\"></ul>\n            </li>\n        </ng-template>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('children', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        height: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        height: '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hidden => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], AppMenuComponent])
    ], AppSubMenuComponent);
    return AppSubMenuComponent;
}());



/***/ }),

/***/ "./src/app/layout/rodape/app.rodape.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/rodape/app.rodape.component.ts ***!
  \*******************************************************/
/*! exports provided: AppRodapeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRodapeComponent", function() { return AppRodapeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppRodapeComponent = /** @class */ (function () {
    function AppRodapeComponent() {
    }
    AppRodapeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rodape',
            template: "\n            <div class=\"layout-footer\">\n                <div>\n                    <div >\n\n\n                        <div>\n                            <div class=\"ui-g-4\">\n                                <div class=\"ui-g-4 ui-g-offset-4\">\n\n                                </div>\n                            </div>\n                            <div class=\"ui-g-4\">\n                                <span class=\"footer-text\">\n                                    <span class=\"pi pi-copyright\"></span>\n                                    <span>DROPSHIPPING \u00A9 TODOS OS DIREITOS RESERVADOS.</span>\n                                </span>\n                            </div>\n                            <div class=\"ui-g-4\" >\n                                <div class=\"ui-g-4 ui-g-offset-4\">\n\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n    "
        })
    ], AppRodapeComponent);
    return AppRodapeComponent;
}());



/***/ }),

/***/ "./src/app/layout/topbar/app.breadcrumb.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/topbar/app.breadcrumb.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-breadcrumb\">\r\n    <ul>\r\n        <li>\r\n\r\n            <ng-template ngFor let-item let-last=\"last\" [ngForOf]=\"items\">\r\n                <li>\r\n                    <!--<a [routerLink]=\"item.routerLink\" *ngIf=\"item.routerLink\">{{item.label}}</a> -->\r\n                    <ng-container *ngIf=\"!item.routerLink\"></ng-container>\r\n                </li>\r\n        \r\n            </ng-template>\r\n        </li>\r\n    </ul>\r\n\r\n    \r\n    <ng-container>\r\n    <div class=\"layout-topbar-menu-wrapper\" style=\"float:right;  display:inline-block; vertical-align: middle; \">\r\n            <ul class=\"topbar-menu fadeInDown\" [ngClass]=\"{'topbar-menu-active': app.topbarMenuActive}\" (click)=\"app.onTopbarMenuClick($event)\">\r\n                <li #settings [ngClass]=\"{'active-topmenuitem':app.activeTopbarItem === settings}\" (click)=\"app.onTopbarRootItemClick($event, settings)\">\r\n                    <a href=\"#\" class=\"menu-btn\">\r\n                        <em class=\"pi pi-fw pi-cog\"></em>\r\n                        <span class=\"topbar-item-name\">Configurações</span>\r\n                    </a>\r\n                    <ul class=\"fadeInDown\">\r\n                        <li role=\"menuitem\">\r\n                            <a href=\"#\" (click)=\"account()\" style=\"text-align:left\">\r\n                                <em class=\"pi pi-fw pi-user\"></em>\r\n                                Conta\r\n                            </a>\r\n                        </li>\r\n                        <li role=\"menuitem\" s>\r\n                            <a href=\"#\" style=\"text-align:left\">\r\n                                <em class=\"pi pi-fw pi-question\"></em>\r\n                                Ajuda\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div style=\"float: right;\">\r\n                <span class=\"usuario\" *ngIf=\"getUser()\"> Usuário: {{getUser().username}}</span>\r\n        </div>\r\n\r\n    </ng-container>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/topbar/app.breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/topbar/app.breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: AppBreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumbComponent", function() { return AppBreadcrumbComponent; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/breadcrumb/breadcrumb.service */ "./src/app/services/breadcrumb/breadcrumb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppBreadcrumbComponent = /** @class */ (function () {
    function AppBreadcrumbComponent(breadcrumbService, app) {
        var _this = this;
        this.breadcrumbService = breadcrumbService;
        this.app = app;
        this.subscription = breadcrumbService.itemsHandler.subscribe(function (response) {
            _this.items = response;
        });
    }
    AppBreadcrumbComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AppBreadcrumbComponent.prototype.getUser = function () {
    };
    AppBreadcrumbComponent.prototype.account = function () {
    };
    AppBreadcrumbComponent.prototype.logout = function () {
    };
    AppBreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./app.breadcrumb.component.html */ "./src/app/layout/topbar/app.breadcrumb.component.html")
        }),
        __metadata("design:paramtypes", [_services_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbService"], _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]])
    ], AppBreadcrumbComponent);
    return AppBreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/layout/topbar/app.topbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/topbar/app.topbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <div class=\"link-rapido\">\r\n        <div class=\"container hidden-sm-down\">\r\n            <nav class=\"nav-esquerda\">\r\n                <a href=\"\">              \r\n                      DROPSHIPPING\r\n                </a>\r\n            </nav>\r\n            \r\n        </div>\r\n    </div>\r\n    <div id=\"topBar\" class=\"layout-topbar \" >\r\n      \r\n        <a [routerLink]=\"['/']\">\r\n             <img alt=\"logo\" src=\"\" class=\"logo\"/>\r\n        </a>\r\n\r\n        <a href=\"#\" class=\"menu-btn\" (click)=\"app.onMenuButtonClick($event)\">\r\n                <em class=\"pi pi-chevron-right\"></em>\r\n        </a>\r\n        <div [hidden]=\"!authenticated()\">\r\n            <a>\r\n                <button (click)=\"logout()\" pButton type=\"button\" label=\"Sair\" iconPos=\"right\" icon=\"pi pi-power-off\"\r\n                    class=\"mobile-topbar-menu-btn\"></button>\r\n            </a>\r\n            <a>\r\n                <button (click)=\"logout()\" pButton type=\"button\" label=\"Sair\" iconPos=\"right\" icon=\"pi pi-arrow-right\" class=\"topbar-button\"></button>\r\n            </a>\r\n        </div>\r\n        <div [hidden]=\"authenticated()\">\r\n            <a>\r\n                <button (click)=\"login()\" pButton type=\"button\" label=\"Login\" iconPos=\"right\" icon=\"pi pi-power-on\"\r\n                    class=\"mobile-topbar-menu-btn\"></button>\r\n            </a>\r\n            <a>\r\n                <button (click)=\"login()\" pButton type=\"button\" label=\"Login\" iconPos=\"right\" icon=\"pi pi-arrow-right\" class=\"topbar-button\"></button>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</header>"

/***/ }),

/***/ "./src/app/layout/topbar/app.topbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/topbar/app.topbar.component.ts ***!
  \*******************************************************/
/*! exports provided: AppTopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTopBarComponent", function() { return AppTopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth-guard/auth-guard.service */ "./src/app/services/auth-guard/auth-guard.service.ts");
/* harmony import */ var _node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppTopBarComponent = /** @class */ (function () {
    function AppTopBarComponent(app, authGuard, http, router) {
        this.app = app;
        this.authGuard = authGuard;
        this.http = http;
        this.router = router;
        //  this.authGuard.authenticate(undefined, undefined);
    }
    AppTopBarComponent.prototype.ngOnInit = function () {
    };
    AppTopBarComponent.prototype.login = function () {
    };
    AppTopBarComponent.prototype.getUser = function () {
    };
    AppTopBarComponent.prototype.logout = function () {
        var _this = this;
        this.http.post('logout', {}).pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            _this.authGuard.authenticated = false;
            _this.router.navigateByUrl('/login');
        })).subscribe();
    };
    AppTopBarComponent.prototype.authenticated = function () { return this.authGuard.authenticated; };
    AppTopBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topbar',
            template: __webpack_require__(/*! ./app.topbar.component.html */ "./src/app/layout/topbar/app.topbar.component.html")
        }),
        __metadata("design:paramtypes", [src_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
            _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"],
            _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppTopBarComponent);
    return AppTopBarComponent;
}());



/***/ }),

/***/ "./src/app/login/login-cliente/login-cliente.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/login/login-cliente/login-cliente.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login-cliente/login-cliente.component.html":
/*!******************************************************************!*\
  !*** ./src/app/login/login-cliente/login-cliente.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"ui-fluid\">\r\n      <p-card class=\"cad_cadastro ui-g-12\" title=\"Login\">\r\n          <hr>\r\n          <form class=\"ui-g\" (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">E-mail:</label> <input type=\"text\"\r\n                class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"cliente.email\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"senha\">Senha:</label> <input type=\"password\"\r\n                class=\"form-control\" id=\"senha\" name=\"senha\" [(ngModel)]=\"cliente.senha\"/>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Entrar</button>\r\n          </form>\r\n      </p-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login-cliente/login-cliente.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/login/login-cliente/login-cliente.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginClienteComponent", function() { return LoginClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_CLiente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/CLiente */ "./src/app/entities/CLiente.ts");
/* harmony import */ var _clientes_api_cliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clientes/api-cliente.service */ "./src/app/clientes/api-cliente.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth-guard/auth-guard.service */ "./src/app/services/auth-guard/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginClienteComponent = /** @class */ (function () {
    function LoginClienteComponent(authService, http, router, apiCliente) {
        this.authService = authService;
        this.http = http;
        this.router = router;
        this.apiCliente = apiCliente;
        this.credentials = { email: '', senha: '' };
    }
    LoginClienteComponent.prototype.ngOnInit = function () {
        this.cliente = new _entities_CLiente__WEBPACK_IMPORTED_MODULE_1__["Cliente"]();
    };
    LoginClienteComponent.prototype.login = function () {
        var _this = this;
        this.credentials.email = this.cliente.email.toString();
        this.credentials.senha = this.cliente.senha.toString();
        this.authService.authenticateCliente(this.cliente, function () {
            _this.authService.authenticate(_this.cliente, function () {
                _this.apiCliente.getByEmail(_this.cliente.email).then(function (response) {
                    _this.cliente = response.data;
                    _this.router.navigateByUrl('/vendas/' + _this.cliente.id);
                });
            });
        });
        return false;
    };
    LoginClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-cliente',
            template: __webpack_require__(/*! ./login-cliente.component.html */ "./src/app/login/login-cliente/login-cliente.component.html"),
            styles: [__webpack_require__(/*! ./login-cliente.component.css */ "./src/app/login/login-cliente/login-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"],
            _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _clientes_api_cliente_service__WEBPACK_IMPORTED_MODULE_2__["ApiClienteService"]])
    ], LoginClienteComponent);
    return LoginClienteComponent;
}());



/***/ }),

/***/ "./src/app/login/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/login/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"ui-fluid\">\r\n      <p-card class=\"cad_cadastro ui-g-12\" title=\"Login Fornecedor\">\r\n          <hr>\r\n          <form class=\"ui-g\" (ngSubmit)=\"login()\" #loginForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">E-mail:</label> <input type=\"text\"\r\n                class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"fornecedor.email\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"senha\">Senha:</label> <input type=\"password\"\r\n                class=\"form-control\" id=\"senha\" name=\"senha\" [(ngModel)]=\"fornecedor.senha\"/>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Entrar</button>\r\n          </form>\r\n      </p-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_Fornecedor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/Fornecedor */ "./src/app/entities/Fornecedor.ts");
/* harmony import */ var _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth-guard/auth-guard.service */ "./src/app/services/auth-guard/auth-guard.service.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fornecedor_api_fornecedor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fornecedor/api-fornecedor.service */ "./src/app/fornecedor/api-fornecedor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, http, router, apiFornecedor) {
        this.authService = authService;
        this.http = http;
        this.router = router;
        this.apiFornecedor = apiFornecedor;
        this.credentials = { email: '', senha: '' };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.credentials.email = this.fornecedor.email.toString();
        this.credentials.senha = this.fornecedor.senha.toString();
        this.authService.authenticate(this.fornecedor, function () {
            _this.apiFornecedor.getByEmail(_this.fornecedor.email).then(function (response) {
                _this.fornecedor = response.data;
                _this.router.navigateByUrl('/lista-produto/' + _this.fornecedor.id);
            });
        });
        return false;
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.fornecedor = new _entities_Fornecedor__WEBPACK_IMPORTED_MODULE_1__["Fornecedor"]();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"],
            _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _fornecedor_api_fornecedor_service__WEBPACK_IMPORTED_MODULE_5__["ApiFornecedorService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/produto/api-produto.service.ts":
/*!************************************************!*\
  !*** ./src/app/produto/api-produto.service.ts ***!
  \************************************************/
/*! exports provided: ApiProdutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiProdutoService", function() { return ApiProdutoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiProdutoService = /** @class */ (function () {
    function ApiProdutoService(http, utility) {
        this.http = http;
        this.utility = utility;
    }
    ApiProdutoService.prototype.get = function (id) {
        return this.http.get("/api-vendas/api/v1/produto/" + id)
            .toPromise();
    };
    ApiProdutoService.prototype.salvar = function (produto) {
        return this.http.post('/api-vendas/api/v1/produto', produto)
            .toPromise();
    };
    ApiProdutoService.prototype.lista = function () {
        return this.http.get("/api-vendas/api/v1/produto")
            .toPromise();
    };
    ApiProdutoService.prototype.alterar = function (produto) {
        return this.http.put("/api-vendas/api/v1/produto/" + produto.id, produto)
            .toPromise();
    };
    ApiProdutoService.prototype.excluir = function (id) {
        return this.http.delete("/api-vendas/api/v1/produto/" + id)
            .toPromise();
    };
    ApiProdutoService.prototype.filtra = function (options) {
        return this.http.get("/api-vendas/api/v1/produto/filtro", options)
            .toPromise();
    };
    ApiProdutoService.prototype.listaPorFornecedor = function (idFornecedor) {
        return this.http.get("/api-vendas/api/v1/produto/listaPorFornecedor/" + idFornecedor)
            .toPromise();
    };
    ApiProdutoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])
    ], ApiProdutoService);
    return ApiProdutoService;
}());



/***/ }),

/***/ "./src/app/produto/lista-produto/lista-produto/lista-produto.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/produto/lista-produto/lista-produto/lista-produto.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/produto/lista-produto/lista-produto/lista-produto.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/produto/lista-produto/lista-produto/lista-produto.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"ui-g-12\">\r\n    <p-card title=\"Produtos\">\r\n        <div>\r\n            <div class=\"ui-helper-clearfix\">\r\n                <button type=\"button\" pButton label=\"Novo Produto\" title=\"Novo Produto\" icon=\"pi pi-plus\" [routerLink]=\"['/novo-produto/'+idFornecedor]\" routerLinkActive=\"active\"\r\n                  style=\"float:right\"></button>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"produtos\" class=\"ui cards\">\r\n            <div class=\"card product\" *ngFor=\"let produto of produtos\" >\r\n              <div class=\"ui-g-12 ui-md-4 ui-lg-3\">\r\n                <div *ngIf=\"produto.imagens\" class=\"image\">\r\n                    <p-fileUpload name=\"produto.imagens\" [disabled]=\"true\" showUploadButton=\"false\"\r\n                          multiple=\"multiple\" accept=\"image/*\" url=\"{{uploadUrl}}\" maxFileSize=\"1000000\" >\r\n                          <ng-template pTemplate=\"content\">\r\n                              <div  class=\"ui-fileupload-files ng-star-inserted\">\r\n                                  <div class=\"espacoMiniatura\">\r\n                                      <img *ngIf=\"produto.imagens[0]\" alt=\"Anexo\" width=\"100\" src=\"{{produto.imagens[0].url}}\" />\r\n                                  </div>\r\n                              </div>\r\n                          </ng-template>\r\n                      </p-fileUpload>\r\n                </div>\r\n                <div class=\"content\">\r\n                  <h4 class=\"header\">{{produto.nome}}</h4>\r\n                  <div class=\"meta\">\r\n                    <div>{{produto.preco}} Reais</div>\r\n                  </div>\r\n                  <div class=\"description\">\r\n                    {{produto.descricao.substr(0, 200)}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"extra content\">\r\n                  <p-button   label=\"Editar\" (onClick)=\"editarProduto([produto.id])\" ></p-button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n    </p-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/produto/lista-produto/lista-produto/lista-produto.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/produto/lista-produto/lista-produto/lista-produto.component.ts ***!
  \********************************************************************************/
/*! exports provided: ListaProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProdutoComponent", function() { return ListaProdutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/breadcrumb/breadcrumb.service */ "./src/app/services/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var _node_modules_primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var _node_modules_primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api-produto.service */ "./src/app/produto/api-produto.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _imagem_api_imagem_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../imagem/api-imagem.service */ "./src/app/imagem/api-imagem.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListaProdutoComponent = /** @class */ (function () {
    function ListaProdutoComponent(route, router, breadcrumbService, messageService, produtoApi, imagemApi) {
        this.route = route;
        this.router = router;
        this.breadcrumbService = breadcrumbService;
        this.messageService = messageService;
        this.produtoApi = produtoApi;
        this.imagemApi = imagemApi;
    }
    ListaProdutoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.idFornecedor = params['idFornecedor'];
            _this.produtoApi.listaPorFornecedor(params['idFornecedor'])
                .then(function (response) {
                _this.produtos = response.data;
                var _loop_1 = function (produto) {
                    _this.imagemApi.buscaPorProduto(produto.id).then(function (resProduto) {
                        produto.imagens = resProduto.data;
                        _this.imagemApi.buscaImagemId(produto.imagens[0].id).then(function (response2) {
                            var reader = new FileReader();
                            reader.addEventListener('load', function () {
                                produto.imagens[0].url = reader.result;
                            }, false);
                            if (response2) {
                                reader.readAsDataURL(response2);
                            }
                            produto.imagens[0].arquivo = new Blob([response2]);
                            var url = window.URL.createObjectURL(produto.imagens[0].arquivo);
                            var link = document.createElement('a');
                            link.href = url;
                            link.download = produto.imagens[0].nome.toString();
                        });
                    });
                };
                for (var _i = 0, _a = _this.produtos; _i < _a.length; _i++) {
                    var produto = _a[_i];
                    _loop_1(produto);
                }
            });
        });
    };
    ListaProdutoComponent.prototype.editarProduto = function (id) {
        this.router.navigateByUrl('editar-produto/' + id);
    };
    ListaProdutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-produto',
            template: __webpack_require__(/*! ./lista-produto.component.html */ "./src/app/produto/lista-produto/lista-produto/lista-produto.component.html"),
            styles: [__webpack_require__(/*! ./lista-produto.component.css */ "./src/app/produto/lista-produto/lista-produto/lista-produto.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbService"],
            _node_modules_primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _api_produto_service__WEBPACK_IMPORTED_MODULE_3__["ApiProdutoService"],
            _imagem_api_imagem_service__WEBPACK_IMPORTED_MODULE_5__["ApiImagemService"]])
    ], ListaProdutoComponent);
    return ListaProdutoComponent;
}());



/***/ }),

/***/ "./src/app/produto/mantem-produto/mantem-produto.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/produto/mantem-produto/mantem-produto.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/produto/mantem-produto/mantem-produto.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/produto/mantem-produto/mantem-produto.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"ui-fluid\">\r\n      <p-card class=\"cad_cadastro ui-g-12\" title=\"Produto\">\r\n          <hr>\r\n          <form class=\"ui-g\" (ngSubmit)=\"salvar()\" #produtoForm=\"ngForm\">\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"nome\">Nome:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-5 \">\r\n                      <input id=\"nome\"  required type=\"text\" size=\"30\" pInputText [(ngModel)]=\"produto.nome\" name=\"nome\" #nome=\"ngModel\"  maxlength=\"50\">\r\n                      <p-message [hidden]=\"nome.valid || nome.pristine\" severity=\"error\" text=\"Nome deve ser preenchido\"></p-message>\r\n                  </div>\r\n              </div>\r\n\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"form-label\" for=\"marca\">Marca:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-5 \">\r\n                      <input id=\"marca\"  type=\"text\" size=\"30\" pInputText [(ngModel)]=\"produto.marca\" name=\"marca\" #marca=\"ngModel\"  maxlength=\"50\">\r\n                  </div>\r\n              </div>\r\n\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                    <label  class=\"form-label\" for=\"descricao\">Descrição:</label>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-9 ui-lg-8 \">\r\n                    <textarea id=\"descricao\" rows=\"5\" cols=\"30\" pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"produto.descricao\"\r\n                      name=\"descricao\" maxlength=\"1000\" #descricao=\"ngModel\"></textarea>\r\n                </div>\r\n              </div>\r\n\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"preco\">Preço:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-5 \">\r\n                      <input id=\"preco\"  required type=\"text\" size=\"30\" pInputText [(ngModel)]=\"produto.preco\" name=\"preco\" #preco=\"ngModel\">\r\n                      \r\n                  </div>\r\n              </div>\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"form-label\" for=\"categoria\">Categoria:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-4\">\r\n                      <p-dropdown id=\"categoria\" [options]=\"categorias\" [(ngModel)]=\"produto.categoria\" name=\"produto.categoria\"\r\n                      optionLabel=\"descricao\" filter=\"true\" placeholder=\"Selecione uma Categoria\"></p-dropdown>\r\n                  </div>\r\n              </div>\r\n\r\n              <div  class=\"ui-g-12 ui-fluid\" >\r\n                  <p-fieldset legend=\"Imagens\" [toggleable]=\"true\">\r\n                    <p-fileUpload name=\"files\" (onUpload)=\"onUpload($event)\" showUploadButton=\"false\"\r\n                        multiple=\"multiple\" accept=\"image/*\" url=\"{{uploadUrl}}\" maxFileSize=\"1000000\" >\r\n                        <ng-template pTemplate=\"content\">\r\n                            <div *ngFor=\"let file of files\" class=\"ui-fileupload-files ng-star-inserted\">\r\n                                <div class=\"espacoMiniatura\">\r\n                                    <img *ngIf=\"file\" alt=\"Anexo\" width=\"100\" src=\"{{file.url}}\" />\r\n                                </div>\r\n                                <div>\r\n                                    <a class='linkDownload' (click)=\"download(file)\" download={{file.nome}}>\r\n                                        {{file.nome}}\r\n                                    </a>\r\n                                </div>\r\n                                <div>\r\n                                    <button (click)=\"download(file)\" icon=\"pi pi-download\" pbutton=\"\" title=\"Fazer o download\" type=\"button\" class=\"ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only\">\r\n                                        <span aria-hidden=\"true\" class=\"ui-button-icon-left ui-clickable pi pi-download\"></span>\r\n                                        <span class=\"ui-button-text ui-clickable\">Download</span>\r\n                                    </button>\r\n                                    <button (click)=\"onRemove(file)\" [disabled]=\"disabilita\" icon=\"pi pi-times\" pbutton=\"\" title=\"Excluir o arquivo\" type=\"button\" class=\"ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only\">\r\n                                        <span aria-hidden=\"true\" class=\"ui-button-icon-left ui-clickable pi pi-times \"></span>\r\n                                        <span class=\"ui-button-text ui-clickable\">Remover</span>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </p-fileUpload>\r\n                  </p-fieldset>\r\n              </div>\r\n              <div class=\"ui-fluid\">\r\n                  <div class=\"ui-g-6 ui-md-6 ui-lg-10\">\r\n                      <p-button label=\"Voltar\" style=\"float: right;\" [routerLink]=\"['/']\" routerLinkActive=\"active\"></p-button>\r\n                  </div>\r\n                  <div class=\"ui-g-6 ui-md-6 ui-lg-2\">\r\n                      <p-button type=\"submit\" [disabled]=\"produtoForm.form.invalid || !valido\" label=\"Salvar\" style=\"float: left;\"></p-button>\r\n                  </div>\r\n              </div>\r\n          </form>\r\n      </p-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/produto/mantem-produto/mantem-produto.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/produto/mantem-produto/mantem-produto.component.ts ***!
  \********************************************************************/
/*! exports provided: MantemProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantemProdutoComponent", function() { return MantemProdutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_Fornecedor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/Fornecedor */ "./src/app/entities/Fornecedor.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-produto.service */ "./src/app/produto/api-produto.service.ts");
/* harmony import */ var _fornecedor_api_fornecedor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../fornecedor/api-fornecedor.service */ "./src/app/fornecedor/api-fornecedor.service.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/breadcrumb/breadcrumb.service */ "./src/app/services/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var _node_modules_primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var _node_modules_primeng_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_primeng_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _entities_Produto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../entities/Produto */ "./src/app/entities/Produto.ts");
/* harmony import */ var _entities_Categoria__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../entities/Categoria */ "./src/app/entities/Categoria.ts");
/* harmony import */ var _categoria_api_categoria_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../categoria/api-categoria.service */ "./src/app/categoria/api-categoria.service.ts");
/* harmony import */ var _imagem_api_imagem_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../imagem/api-imagem.service */ "./src/app/imagem/api-imagem.service.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/auth-guard/auth-guard.service */ "./src/app/services/auth-guard/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MantemProdutoComponent = /** @class */ (function () {
    function MantemProdutoComponent(fornecedorApi, utilService, route, router, breadcrumbService, messageService, produtoApi, categoriaApi, imagemApi, http, sanitizer, authService) {
        this.fornecedorApi = fornecedorApi;
        this.utilService = utilService;
        this.route = route;
        this.router = router;
        this.breadcrumbService = breadcrumbService;
        this.messageService = messageService;
        this.produtoApi = produtoApi;
        this.categoriaApi = categoriaApi;
        this.imagemApi = imagemApi;
        this.http = http;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.files = [];
        this.uploadUrl = '/api-vendas/api/v1/imagem';
        this.valido = false;
        this.produto = new _entities_Produto__WEBPACK_IMPORTED_MODULE_9__["Produto"]();
        this.produto.fornecedor = new _entities_Fornecedor__WEBPACK_IMPORTED_MODULE_1__["Fornecedor"]();
        this.produto.categoria = new _entities_Categoria__WEBPACK_IMPORTED_MODULE_10__["Categoria"]();
        this.breadcrumbService.setItems([
            { label: 'Cadastro de Produto', routerLink: 'novo-produto' }
        ]);
    }
    MantemProdutoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inicializarCategorias();
        if (this.route.snapshot.url[0] && this.route.snapshot.url[0].path === 'editar-produto') {
            this.route.params.subscribe(function (params) {
                _this.produtoApi.get(params['id'])
                    .then(function (response) {
                    _this.produto = response.data;
                    _this.buscaProduto();
                });
            });
        }
        else {
            this.inicializar();
            this.route.params.subscribe(function (params) {
                _this.idFornecedor = params['idFornecedor'];
                _this.fornecedorApi.get(params['idFornecedor']).then(function (response) {
                    _this.produto.fornecedor = response.data;
                });
            });
        }
    };
    MantemProdutoComponent.prototype.buscaProduto = function () {
        var _this = this;
        this.imagemApi.buscaPorProduto(this.produto.id).then(function (response2) {
            _this.imagens = response2.data;
            _this.files = _this.imagens;
            _this.buscaArquivos();
        });
    };
    MantemProdutoComponent.prototype.buscaArquivos = function () {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.imagemApi.buscaImagemId(this_1.imagens[i].id).then(function (response) {
                var reader = new FileReader();
                reader.addEventListener('load', function () {
                    _this.files[i].url = reader.result;
                }, false);
                if (response) {
                    reader.readAsDataURL(response);
                }
                _this.files[i].arquivo = new Blob([response]);
                var url = window.URL.createObjectURL(_this.files[i].arquivo);
                var link = document.createElement('a');
                link.href = url;
                link.download = _this.files[i].nome;
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.imagens.length; i++) {
            _loop_1(i);
        }
    };
    MantemProdutoComponent.prototype.download = function (file) {
        var _this = this;
        this.imagemApi.buscaImagemId(file.id).then(function (response) {
            file.arquivo = new Blob([response]);
            var url = window.URL.createObjectURL(file.arquivo);
            file.url = _this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file.arquivo)).toString();
            var link = document.createElement('a');
            link.href = url;
            link.download = file.nome.toString();
            link.dispatchEvent(new MouseEvent('click'));
        });
    };
    MantemProdutoComponent.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files.push(file);
        }
        var response = JSON.parse(event.xhr.response);
        this.imagens = response.data;
        this.messageService.add({ severity: 'info', summary: 'Imagens carregadas!', detail: 'Imagens carregadas!' });
        this.valido = true;
    };
    MantemProdutoComponent.prototype.inicializar = function () {
        this.produto = new _entities_Produto__WEBPACK_IMPORTED_MODULE_9__["Produto"]();
        this.produto.categoria = new _entities_Categoria__WEBPACK_IMPORTED_MODULE_10__["Categoria"]();
    };
    MantemProdutoComponent.prototype.inicializarCategorias = function () {
        var _this = this;
        this.categoriaApi.lista().then(function (response) {
            _this.categorias = response.data;
        });
    };
    MantemProdutoComponent.prototype.salvar = function () {
        var _this = this;
        if (this.produtoForm.invalid) {
            return;
        }
        if (this.produto.id) {
            this.produtoApi.alterar(this.produto);
            for (var _i = 0, _a = this.imagens; _i < _a.length; _i++) {
                var imagem = _a[_i];
                imagem.produto = this.produto;
                this.imagemApi.alterar(imagem).then(function () {
                    _this.router.navigateByUrl('lista-produto/' + _this.idFornecedor);
                });
            }
        }
        else {
            this.produtoApi.salvar(this.produto).then(function (response) {
                _this.produto = response.data;
                for (var _i = 0, _a = _this.imagens; _i < _a.length; _i++) {
                    var imagem = _a[_i];
                    imagem.produto = _this.produto;
                    _this.imagemApi.alterar(imagem).then(function () {
                        _this.router.navigateByUrl('lista-produto/' + _this.idFornecedor);
                    });
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('produtoForm'),
        __metadata("design:type", _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], MantemProdutoComponent.prototype, "produtoForm", void 0);
    MantemProdutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mantem-produto',
            template: __webpack_require__(/*! ./mantem-produto.component.html */ "./src/app/produto/mantem-produto/mantem-produto.component.html"),
            styles: [__webpack_require__(/*! ./mantem-produto.component.css */ "./src/app/produto/mantem-produto/mantem-produto.component.css")]
        }),
        __metadata("design:paramtypes", [_fornecedor_api_fornecedor_service__WEBPACK_IMPORTED_MODULE_4__["ApiFornecedorService"],
            _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbService"],
            _node_modules_primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _api_produto_service__WEBPACK_IMPORTED_MODULE_3__["ApiProdutoService"],
            _categoria_api_categoria_service__WEBPACK_IMPORTED_MODULE_11__["ApiCategoriaService"],
            _imagem_api_imagem_service__WEBPACK_IMPORTED_MODULE_12__["ApiImagemService"],
            _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["DomSanitizer"],
            _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]])
    ], MantemProdutoComponent);
    return MantemProdutoComponent;
}());



/***/ }),

/***/ "./src/app/services/RxJS/HTTPListener.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/RxJS/HTTPListener.service.ts ***!
  \*******************************************************/
/*! exports provided: HTTPListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPListener", function() { return HTTPListener; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _HTTPStatus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HTTPStatus.service */ "./src/app/services/RxJS/HTTPStatus.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HTTPListener = /** @class */ (function () {
    function HTTPListener(status, messageService) {
        this.status = status;
        this.messageService = messageService;
    }
    HTTPListener.prototype.intercept = function (req, next) {
        // Adicionando token de autenticação ao request
        var _this = this;
        this.status.setHttpStatus(true);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && event.body && event.body.messages) {
                _this.messageService.addAll(event.body.messages.map(function (msg) {
                    return ({ severity: msg.type.toLowerCase(), detail: msg.message });
                }));
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error.error && error.error.messages) {
                _this.messageService.addAll(error.error.messages.map(function (msg) {
                    return ({ severity: msg.type.toLowerCase(), detail: msg.message });
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.status.setHttpStatus(false); }));
    };
    HTTPListener = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_HTTPStatus_service__WEBPACK_IMPORTED_MODULE_5__["HTTPStatus"],
            primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], HTTPListener);
    return HTTPListener;
}());



/***/ }),

/***/ "./src/app/services/RxJS/HTTPStatus.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/RxJS/HTTPStatus.service.ts ***!
  \*****************************************************/
/*! exports provided: HTTPStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPStatus", function() { return HTTPStatus; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HTTPStatus = /** @class */ (function () {
    function HTTPStatus() {
        this.requestInFlight$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    HTTPStatus.prototype.setHttpStatus = function (inFlight) {
        this.requestInFlight$.next(inFlight);
    };
    HTTPStatus.prototype.getHttpStatus = function () {
        return this.requestInFlight$.asObservable();
    };
    HTTPStatus = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HTTPStatus);
    return HTTPStatus;
}());



/***/ }),

/***/ "./src/app/services/auth-guard/auth-guard.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/auth-guard/auth-guard.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/utility.service */ "./src/app/services/utility/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(http, utility) {
        this.http = http;
        this.utility = utility;
        this.authenticated = false;
    }
    AuthGuardService.prototype.authenticate = function (credentials, callback) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](credentials ? {
            authorization: 'Basic ' + btoa(credentials.email + ':' + credentials.senha)
        } : {});
        this.http.get("/api-vendas/api/v1/usuario/login/" + credentials.email, { headers: headers }).subscribe(function (response) {
            if (response['name']) {
                _this.authenticated = true;
            }
            else {
                _this.authenticated = false;
            }
            return callback && callback();
        });
    };
    AuthGuardService.prototype.authenticateCliente = function (credentials, callback) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](credentials ? {
            authorization: 'Basic ' + btoa(credentials.email + ':' + credentials.senha)
        } : {});
        this.http.get("/api-controle/api/v1/usuario/login/" + credentials.email, { headers: headers }).subscribe(function (response) {
            if (response['name']) {
                _this.authenticated = true;
            }
            else {
                _this.authenticated = false;
            }
            return callback && callback();
        });
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/breadcrumb/breadcrumb.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/breadcrumb/breadcrumb.service.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbService", function() { return BreadcrumbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BreadcrumbService = /** @class */ (function () {
    function BreadcrumbService() {
        this.itemsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.itemsHandler = this.itemsSource.asObservable();
    }
    BreadcrumbService.prototype.setItems = function (items) {
        this.itemsSource.next(items);
    };
    BreadcrumbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BreadcrumbService);
    return BreadcrumbService;
}());



/***/ }),

/***/ "./src/app/services/cache/cache.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/cache/cache.service.ts ***!
  \*************************************************/
/*! exports provided: CacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
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

var CacheService = /** @class */ (function () {
    function CacheService() {
        this.data = {};
    }
    CacheService.prototype.get = function (key) {
        return this.data[key];
    };
    CacheService.prototype.set = function (key, value) {
        this.data[key] = value;
    };
    CacheService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CacheService);
    return CacheService;
}());



/***/ }),

/***/ "./src/app/services/exportar-planilha/exportar-planilha.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/exportar-planilha/exportar-planilha.service.ts ***!
  \*************************************************************************/
/*! exports provided: ExportarPlanilhaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportarPlanilhaService", function() { return ExportarPlanilhaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExportarPlanilhaService = /** @class */ (function () {
    function ExportarPlanilhaService() {
    }
    ExportarPlanilhaService.prototype.exportar = function (planilha, nomeArquivo) {
        var ws_name = 'SomeSheet';
        var wb = { SheetNames: [], Sheets: {} };
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(planilha.data);
        wb.SheetNames.push(ws_name);
        wb.Sheets[ws_name] = ws;
        var wbout = Object(xlsx__WEBPACK_IMPORTED_MODULE_2__["write"])(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i !== s.length; ++i) {
                // tslint:disable-next-line
                view[i] = s.charCodeAt(i) & 0xFF;
            }
            return buf;
        }
        Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), nomeArquivo);
    };
    ExportarPlanilhaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ExportarPlanilhaService);
    return ExportarPlanilhaService;
}());



/***/ }),

/***/ "./src/app/services/utility/utility.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/utility/utility.service.ts ***!
  \*****************************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    UtilityService.prototype.retirarFormatacao = function (numFormatado) {
        return numFormatado ? (numFormatado.replace(/\./g, '')).replace('-', '').replace('(', '')
            .replace(')', '').replace(' ', '').replace('/', '') : numFormatado;
    };
    UtilityService.prototype.convertDateToString = function (data) {
        return data ? data.toDateString() : null;
    };
    UtilityService.prototype.carregaParamsString = function (option, optionParams, optionName) {
        return option ? optionParams.set(optionName, option.toString()) : optionParams;
    };
    UtilityService.prototype.carregaParamsId = function (option, optionParams, optionName) {
        return option ? optionParams.set(optionName, option.id.toString()) : optionParams;
    };
    UtilityService.prototype.formataNumeracao = function (num) {
        return num ? (num.substring(0, 7) + '-' + num.substring(7, 9) + '.' + num.substring(9, 13) + '.' +
            num.substring(13, 14) + '.' + num.substring(14, 16) + '.' + num.substring(16, 20)) : '';
    };
    UtilityService.prototype.inicializarUF = function () {
        var ufs = [
            { label: 'UF', value: null },
            { label: 'Acre', value: 'AC' },
            { label: 'Alagoas', value: 'AL' },
            { label: 'Amapá', value: 'AP' },
            { label: 'Amazonas', value: 'AM' },
            { label: 'Bahia', value: 'BA' },
            { label: 'Ceará', value: 'CE' },
            { label: 'Distrito Federal', value: 'DF' },
            { label: 'Espírito Santo', value: 'ES' },
            { label: 'Goiás', value: 'GO' },
            { label: 'Maranhão', value: 'MA' },
            { label: 'Mato Grosso', value: 'MY' },
            { label: 'Mato Grosso do SuL', value: 'MS' },
            { label: 'Minas Gerais', value: 'MG' },
            { label: 'Pará', value: 'PA' },
            { label: 'Paraíba', value: 'PB' },
            { label: 'Paraná', value: 'PR' },
            { label: 'Pernambuco', value: 'PE' },
            { label: 'Piauí', value: 'PI' },
            { label: 'Rio de Janeiro', value: 'RJ' },
            { label: 'Rio Grande do Norte', value: 'RN' },
            { label: 'Rio Grande do Sul', value: 'RS' },
            { label: 'Rondônia', value: 'RO' },
            { label: 'Roraima', value: 'RR' },
            { label: 'Santa Catarina', value: 'SC' },
            { label: 'São Paulo', value: 'SP' },
            { label: 'Sergipe', value: 'SE' },
            { label: 'Tocantins', value: 'TO' }
        ];
        return ufs;
    };
    UtilityService.prototype.apiVendasUrl = function () {
        return 'https://dropshipping-cadastro.herokuapp.com';
    };
    UtilityService.prototype.apiControleUrl = function () {
        return 'http://dropshipping-pedidos.herokuapp.com';
    };
    UtilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ "./src/app/vendas/carrinho-compras/carrinho-compras.component.css":
/*!************************************************************************!*\
  !*** ./src/app/vendas/carrinho-compras/carrinho-compras.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vendas/carrinho-compras/carrinho-compras.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/vendas/carrinho-compras/carrinho-compras.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-danger mb-3\" style=\"max-width: 18rem;\">\r\n  <div class=\"card-header text-center\"><h3>Carrinho</h3></div>\r\n  <div class=\"card-body\">\r\n      <h4 class=\"card-title\">Total: R${{total}}</h4>\r\n      <hr>\r\n      <h5 class=\"card-title\">Itens do Carrinho:</h5>\r\n\r\n      <ul>\r\n          <li *ngFor=\"let p of produtoPedidos.produtoPedidos\">\r\n              {{ p.produto.nome }} - {{ p.quantidade}} pcs.\r\n          </li>\r\n      </ul>\r\n\r\n      <p-button class=\"btn btn-light btn-block\" (onClick)=\"finalizar()\"\r\n           [disabled]=\"produtoPedidos.produtoPedidos.length == 0\">CONCLUIR COMPRA\r\n      </p-button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/vendas/carrinho-compras/carrinho-compras.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/vendas/carrinho-compras/carrinho-compras.component.ts ***!
  \***********************************************************************/
/*! exports provided: CarrinhoComprasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoComprasComponent", function() { return CarrinhoComprasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vendas_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendas-service.service */ "./src/app/vendas/vendas-service.service.ts");
/* harmony import */ var _entities_ProdutoPedidos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entities/ProdutoPedidos */ "./src/app/entities/ProdutoPedidos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarrinhoComprasComponent = /** @class */ (function () {
    function CarrinhoComprasComponent(vendasService) {
        this.vendasService = vendasService;
        this.total = 0;
        this.finalizado = false;
        this.nFinalizado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CarrinhoComprasComponent.prototype.ngOnInit = function () {
        this.produtoPedidos = new _entities_ProdutoPedidos__WEBPACK_IMPORTED_MODULE_2__["ProdutoPedidos"]();
        this.carregaCarrinho();
        this.carregaTotal();
    };
    CarrinhoComprasComponent.prototype.carregaTotal = function () {
        var _this = this;
        this.sub = this.vendasService.PedidosChanged.subscribe(function () {
            _this.calculaTotal();
        });
    };
    CarrinhoComprasComponent.prototype.carregaCarrinho = function () {
        var _this = this;
        this.sub = this.vendasService.ProdutoPedidoChanged.subscribe(function () {
            /*if (p) {
              const prodPedido = new ProdutoPedido();
              prodPedido.produto = p.produto;
              prodPedido.quantidade = p.quantidade;
              this.produtoPedidos.produtoPedidos.push(prodPedido);
            }*/
            // this.vendasService.produtosPedidos = this.produtoPedidos;
            _this.produtoPedidos = _this.vendasService.produtosPedidos;
            _this.calculaTotal();
        });
    };
    CarrinhoComprasComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CarrinhoComprasComponent.prototype.finalizar = function () {
        this.finalizado = true;
        this.vendasService.total = this.total;
        this.nFinalizado.emit(this.finalizado);
    };
    CarrinhoComprasComponent.prototype.reset = function () {
        this.finalizado = false;
        this.produtoPedidos = new _entities_ProdutoPedidos__WEBPACK_IMPORTED_MODULE_2__["ProdutoPedidos"]();
        this.carregaTotal();
        this.total = 0;
    };
    CarrinhoComprasComponent.prototype.calculaTotal = function () {
        this.total = 0;
        for (var _i = 0, _a = this.produtoPedidos.produtoPedidos; _i < _a.length; _i++) {
            var p = _a[_i];
            this.total += p.produto.preco * p.quantidade;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CarrinhoComprasComponent.prototype, "nFinalizado", void 0);
    CarrinhoComprasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carrinho-compras',
            template: __webpack_require__(/*! ./carrinho-compras.component.html */ "./src/app/vendas/carrinho-compras/carrinho-compras.component.html"),
            styles: [__webpack_require__(/*! ./carrinho-compras.component.css */ "./src/app/vendas/carrinho-compras/carrinho-compras.component.css")]
        }),
        __metadata("design:paramtypes", [_vendas_service_service__WEBPACK_IMPORTED_MODULE_1__["VendasService"]])
    ], CarrinhoComprasComponent);
    return CarrinhoComprasComponent;
}());



/***/ }),

/***/ "./src/app/vendas/pedidos/pedidos.component.css":
/*!******************************************************!*\
  !*** ./src/app/vendas/pedidos/pedidos.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vendas/pedidos/pedidos.component.html":
/*!*******************************************************!*\
  !*** ./src/app/vendas/pedidos/pedidos.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Pedido</h2>\r\n<ul *ngIf=\"produtoPedidos\">\r\n    <li *ngFor=\"let p of produtoPedidos.produtosPedidos\">\r\n        {{ p.produto.nome }} - ${{ p.produto.preco }} x {{ p.quantidade}} pcs.\r\n    </li>\r\n</ul>\r\n<h3 >Total amount: R${{ total }}</h3>\r\n \r\n<button class=\"btn btn-primary btn-block\" (click)=\"pagar()\" *ngIf=\"!pago\">Pay</button>\r\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"pago\">\r\n    <strong>Parabéns!</strong> Pedido realizado com sucesso.\r\n</div>"

/***/ }),

/***/ "./src/app/vendas/pedidos/pedidos.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/vendas/pedidos/pedidos.component.ts ***!
  \*****************************************************/
/*! exports provided: PedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosComponent", function() { return PedidosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vendas_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendas-service.service */ "./src/app/vendas/vendas-service.service.ts");
/* harmony import */ var _entities_ProdutoPedidos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entities/ProdutoPedidos */ "./src/app/entities/ProdutoPedidos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PedidosComponent = /** @class */ (function () {
    function PedidosComponent(vendasService) {
        this.vendasService = vendasService;
        this.produtoPedidos = new _entities_ProdutoPedidos__WEBPACK_IMPORTED_MODULE_2__["ProdutoPedidos"](); // this.vendasService.produtosPedidos;
    }
    PedidosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pago = false;
        this.sub = this.vendasService.ProdutoPedidoChanged.subscribe(function () {
            _this.produtoPedidos = _this.vendasService.produtosPedidos;
        });
        this.carregaTotal();
    };
    PedidosComponent.prototype.pagar = function () {
        this.pago = true;
        // this.vendasService.salvarPedido(this.produtoPedidos).subscribe();
    };
    PedidosComponent.prototype.carregaTotal = function () {
        this.total = 0;
        for (var _i = 0, _a = this.produtoPedidos.produtoPedidos; _i < _a.length; _i++) {
            var p = _a[_i];
            this.total += p.produto.preco * p.quantidade;
        }
    };
    PedidosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pedidos',
            template: __webpack_require__(/*! ./pedidos.component.html */ "./src/app/vendas/pedidos/pedidos.component.html"),
            styles: [__webpack_require__(/*! ./pedidos.component.css */ "./src/app/vendas/pedidos/pedidos.component.css")]
        }),
        __metadata("design:paramtypes", [_vendas_service_service__WEBPACK_IMPORTED_MODULE_1__["VendasService"]])
    ], PedidosComponent);
    return PedidosComponent;
}());



/***/ }),

/***/ "./src/app/vendas/produtos-vendas/produtos-vendas.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/vendas/produtos-vendas/produtos-vendas.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-0 {\r\n    padding-right: 0;\r\n    padding-left: 1;\r\n}"

/***/ }),

/***/ "./src/app/vendas/produtos-vendas/produtos-vendas.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/vendas/produtos-vendas/produtos-vendas.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 ui-md-9 ui-lg-9\">\r\n<div class=\"row card-deck\">\r\n  <div *ngFor=\"let p of produtoPedidos\">\r\n        <div class=\"ui-g-12 ui-md-4 ui-lg-3\">\r\n            <div *ngIf=\"p.produto.imagens\" class=\"image\">\r\n                <p-fileUpload name=\"p.produto.imagens\" [disabled]=\"true\"\r\n                    multiple=\"multiple\" accept=\"image/*\" url=\"{{uploadUrl}}\" maxFileSize=\"1000000\" >\r\n                    <ng-template pTemplate=\"content\">\r\n                        <div  class=\"ui-fileupload-files ng-star-inserted\">\r\n                            <div class=\"espacoMiniatura\">\r\n                                <img *ngIf=\"p.produto.imagens[0]\" alt=\"Anexo\" width=\"100\" src=\"{{p.produto.imagens[0].url}}\" />\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </p-fileUpload>\r\n            </div>\r\n            <div class=\"card text-center\">\r\n                <div class=\"card-header\">\r\n                    <h4>{{p.produto.nome}}</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">R${{p.produto.preco}}</h4>\r\n                    <div >\r\n                        <p-spinner [(ngModel)]=\"p.quantidade\" [min]=\"0\" [max]=\"100\"></p-spinner>\r\n                    </div>\r\n                    <br/>\r\n                    <br/>\r\n                    <div >\r\n                      <p-button class=\"btn btn-primary\" (onClick)=\"adicionar(p)\"\r\n                              [disabled]=\"p.quantidade <= 0\">ADCIONAR AO CARRINHO\r\n                      </p-button>\r\n                    </div>\r\n                    <br/>\r\n                    <div >\r\n                      <p-button class=\"btn btn-primary btn-block\"\r\n                              (onClick)=\"remover(p)\">REMOVER DO CARRINHO\r\n                      </p-button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"ui-g-12 ui-md-3 ui-lg-3\" *ngIf=\"!finalizado\">\r\n<div class=\"card text-white bg-danger mb-3\" style=\"max-width: 18rem;\">\r\n    <div class=\"card-header text-center\">\r\n        <h3>Carrinho</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Total: R${{total}}</h4>\r\n        <hr>\r\n        <h5 class=\"card-title\">Itens do Carrinho:</h5>\r\n        <ul>\r\n            <li *ngFor=\"let p of carrinhoPedidos.produtoPedidos\">\r\n                    {{ p.produto.nome }} - {{ p.quantidade}} pcs.\r\n            </li>\r\n        </ul>\r\n      \r\n        <p-button class=\"btn btn-light btn-block\" (onClick)=\"finalizar()\"\r\n            [disabled]=\"carrinhoPedidos.produtoPedidos.length == 0\">CONCLUIR COMPRA\r\n        </p-button>\r\n    </div>\r\n</div>\r\n</div>\r\n<div class=\"ui-g-3\" *ngIf=\"finalizado\">\r\n        <h2 class=\"text-center\">Pedido</h2>\r\n        <ul >\r\n            <li *ngFor=\"let c of carrinhoPedidos.produtoPedidos\">\r\n                {{ c.produto.nome }} - R${{ c.produto.preco }} x {{ c.quantidade}} pcs.\r\n            </li>\r\n        </ul>\r\n        <h3 >Total amount: R${{ total }}</h3>\r\n         \r\n        <p-button class=\"btn btn-primary btn-block\" (click)=\"pagar()\" *ngIf=\"!pago\">EFETUAR PAGAMENTO</p-button>\r\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"pago\">\r\n            <strong>Parabéns! Pedido realizado com sucesso.</strong> \r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/vendas/produtos-vendas/produtos-vendas.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/vendas/produtos-vendas/produtos-vendas.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProdutosVendasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosVendasComponent", function() { return ProdutosVendasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_ProdutoPedido__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/ProdutoPedido */ "./src/app/entities/ProdutoPedido.ts");
/* harmony import */ var _produto_api_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../produto/api-produto.service */ "./src/app/produto/api-produto.service.ts");
/* harmony import */ var _vendas_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vendas-service.service */ "./src/app/vendas/vendas-service.service.ts");
/* harmony import */ var _entities_ProdutoPedidos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../entities/ProdutoPedidos */ "./src/app/entities/ProdutoPedidos.ts");
/* harmony import */ var _imagem_api_imagem_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../imagem/api-imagem.service */ "./src/app/imagem/api-imagem.service.ts");
/* harmony import */ var _entities_Pedido__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../entities/Pedido */ "./src/app/entities/Pedido.ts");
/* harmony import */ var _clientes_api_cliente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../clientes/api-cliente.service */ "./src/app/clientes/api-cliente.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProdutosVendasComponent = /** @class */ (function () {
    function ProdutosVendasComponent(route, apiProduto, vendasService, imagemApi, apiCliente) {
        this.route = route;
        this.apiProduto = apiProduto;
        this.vendasService = vendasService;
        this.imagemApi = imagemApi;
        this.apiCliente = apiCliente;
        this.produtoPedidos = [];
        this.produtos = [];
        this.produtoSelecionado = false;
        this.total = 0;
        this.finalizado = false;
        this.nFinalizado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProdutosVendasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carrinhoPedidos = new _entities_ProdutoPedidos__WEBPACK_IMPORTED_MODULE_4__["ProdutoPedidos"]();
        this.pedido = new _entities_Pedido__WEBPACK_IMPORTED_MODULE_6__["Pedido"]();
        this.carregaProdutos();
        this.calculaTotal();
        // this.carregaCarrinho();
        // this.carregaTotal();
        this.pedido.pagementoEfetuado = false;
        this.route.params.subscribe(function (params) {
            _this.apiCliente.getCliente(params['idCliente']).then(function (response) {
                _this.pedido.cliente = response.data;
            });
        });
    };
    ProdutosVendasComponent.prototype.carregaProdutos = function () {
        var _this = this;
        this.apiProduto.lista().then(function (response) {
            _this.produtos = response.data;
            var _loop_1 = function (produto) {
                _this.imagemApi.buscaPorProduto(produto.id).then(function (resProduto) {
                    produto.imagens = resProduto.data;
                    _this.imagemApi.buscaImagemId(produto.imagens[0].id).then(function (response2) {
                        var reader = new FileReader();
                        reader.addEventListener('load', function () {
                            produto.imagens[0].url = reader.result;
                        }, false);
                        if (response2) {
                            reader.readAsDataURL(response2);
                        }
                        produto.imagens[0].arquivo = new Blob([response2]);
                        var url = window.URL.createObjectURL(produto.imagens[0].arquivo);
                        var link = document.createElement('a');
                        link.href = url;
                        link.download = produto.imagens[0].nome.toString();
                    });
                });
            };
            for (var _i = 0, _a = _this.produtos; _i < _a.length; _i++) {
                var produto = _a[_i];
                _loop_1(produto);
            }
            _this.produtos.forEach(function (produto) {
                _this.imagemApi.buscaPorProduto(produto.id).then(function (resProduto) {
                    produto.imagens = resProduto.data;
                    _this.imagemApi.buscaImagemId(produto.imagens[0].id).then(function (response2) {
                        var reader = new FileReader();
                        reader.addEventListener('load', function () {
                            produto.imagens[0].url = reader.result;
                        }, false);
                        if (response2) {
                            reader.readAsDataURL(response2);
                        }
                        produto.imagens[0].arquivo = new Blob([response2]);
                        var url = window.URL.createObjectURL(produto.imagens[0].arquivo);
                        var link = document.createElement('a');
                        link.href = url;
                        link.download = produto.imagens[0].nome.toString();
                    });
                });
                var p = new _entities_ProdutoPedido__WEBPACK_IMPORTED_MODULE_1__["ProdutoPedido"]();
                p.produto = produto;
                p.quantidade = 0;
                _this.produtoPedidos.push(p);
            }, function (error) { return console.log(error); });
        });
    };
    ProdutosVendasComponent.prototype.carregaPedidos = function () {
        var _this = this;
        this.sub = this.vendasService.PedidosChanged.subscribe(function () {
            _this.carrinhoPedidos = _this.vendasService.produtosPedidos;
        });
    };
    ProdutosVendasComponent.prototype.adicionar = function (produtoPedido) {
        var existe = false;
        for (var _i = 0, _a = this.carrinhoPedidos.produtoPedidos; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.produto.id === produtoPedido.produto.id) {
                existe = true;
            }
        }
        if (!existe) {
            this.carrinhoPedidos.produtoPedidos.push(produtoPedido);
        }
        this.calculaTotal();
    };
    ProdutosVendasComponent.prototype.remover = function (produtoPedido) {
        var index = this.getProdutoIndex(produtoPedido.produto);
        if (index > -1) {
            this.carrinhoPedidos.produtoPedidos.splice(index, 1);
        }
        this.calculaTotal();
    };
    ProdutosVendasComponent.prototype.reset = function () {
        this.produtoPedidos = [];
        this.carregaProdutos();
        this.vendasService.produtosPedidos.produtoPedidos = [];
        this.carregaPedidos();
        this.produtoSelecionado = false;
        this.finalizado = false;
        this.carregaTotal();
        this.total = 0;
    };
    ProdutosVendasComponent.prototype.getProdutoIndex = function (produto) {
        for (var i = 0; i < this.carrinhoPedidos.produtoPedidos.length; i++) {
            if (produto.id === this.carrinhoPedidos.produtoPedidos[i].produto.id) {
                return i;
            }
        }
    };
    ProdutosVendasComponent.prototype.carregaTotal = function () {
        var _this = this;
        this.sub = this.vendasService.PedidosChanged.subscribe(function () {
            _this.calculaTotal();
        });
    };
    ProdutosVendasComponent.prototype.carregaCarrinho = function () {
        var _this = this;
        this.sub = this.vendasService.ProdutoPedidoChanged.subscribe(function () {
            _this.calculaTotal();
        });
    };
    ProdutosVendasComponent.prototype.calculaTotal = function () {
        this.total = 0;
        for (var _i = 0, _a = this.carrinhoPedidos.produtoPedidos; _i < _a.length; _i++) {
            var p = _a[_i];
            p.valor = p.produto.preco * p.quantidade;
            this.total += p.produto.preco * p.quantidade;
        }
    };
    ProdutosVendasComponent.prototype.finalizar = function () {
        this.finalizado = true;
    };
    ProdutosVendasComponent.prototype.pagar = function () {
        var _this = this;
        this.pedido.pagementoEfetuado = true;
        this.vendasService.salvarPedido(this.pedido).then(function (response) {
            _this.pedido = response.data;
            var _loop_2 = function (produtoPedido) {
                produtoPedido.pedido = _this.pedido;
                _this.vendasService.salvarProdutoPedido(produtoPedido).then(function (response2) {
                    produtoPedido = response2.data;
                });
            };
            for (var _i = 0, _a = _this.carrinhoPedidos.produtoPedidos; _i < _a.length; _i++) {
                var produtoPedido = _a[_i];
                _loop_2(produtoPedido);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProdutosVendasComponent.prototype, "nFinalizado", void 0);
    ProdutosVendasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-produtos-vendas',
            template: __webpack_require__(/*! ./produtos-vendas.component.html */ "./src/app/vendas/produtos-vendas/produtos-vendas.component.html"),
            styles: [__webpack_require__(/*! ./produtos-vendas.component.css */ "./src/app/vendas/produtos-vendas/produtos-vendas.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _produto_api_produto_service__WEBPACK_IMPORTED_MODULE_2__["ApiProdutoService"],
            _vendas_service_service__WEBPACK_IMPORTED_MODULE_3__["VendasService"],
            _imagem_api_imagem_service__WEBPACK_IMPORTED_MODULE_5__["ApiImagemService"],
            _clientes_api_cliente_service__WEBPACK_IMPORTED_MODULE_7__["ApiClienteService"]])
    ], ProdutosVendasComponent);
    return ProdutosVendasComponent;
}());



/***/ }),

/***/ "./src/app/vendas/vendas-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/vendas/vendas-service.service.ts ***!
  \**************************************************/
/*! exports provided: VendasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendasService", function() { return VendasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _entities_ProdutoPedidos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/ProdutoPedidos */ "./src/app/entities/ProdutoPedidos.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VendasService = /** @class */ (function () {
    function VendasService(http, utility) {
        this.http = http;
        this.utility = utility;
        this.produtosPedidos = new _entities_ProdutoPedidos__WEBPACK_IMPORTED_MODULE_3__["ProdutoPedidos"]();
        this.produtoPedidoSubject = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pedidosSubject = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.totalSubject = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ProdutoPedidoChanged = this.produtoPedidoSubject.asObservable();
        this.PedidosChanged = this.pedidosSubject.asObservable();
        this.TotalChanged = this.totalSubject.asObservable();
    }
    VendasService.prototype.salvarPedido = function (pedido) {
        return this.http.post('/api-controle/api/v1/pedidos', pedido).toPromise();
    };
    VendasService.prototype.salvarProdutoPedido = function (produtoPedido) {
        return this.http.post('/api-controle/api/v1/produtoPedido', produtoPedido).toPromise();
    };
    VendasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]])
    ], VendasService);
    return VendasService;
}());



/***/ }),

/***/ "./src/app/vendas/vendas.component.css":
/*!*********************************************!*\
  !*** ./src/app/vendas/vendas.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    padding-top: 65px;\r\n}"

/***/ }),

/***/ "./src/app/vendas/vendas.component.html":
/*!**********************************************!*\
  !*** ./src/app/vendas/vendas.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n    <div class=\"ui-g-12\">\r\n        <app-produtos-vendas #produtosC [hidden]=\"finalizado\"></app-produtos-vendas>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/vendas/vendas.component.ts":
/*!********************************************!*\
  !*** ./src/app/vendas/vendas.component.ts ***!
  \********************************************/
/*! exports provided: VendasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendasComponent", function() { return VendasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _produtos_vendas_produtos_vendas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./produtos-vendas/produtos-vendas.component */ "./src/app/vendas/produtos-vendas/produtos-vendas.component.ts");
/* harmony import */ var _carrinho_compras_carrinho_compras_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrinho-compras/carrinho-compras.component */ "./src/app/vendas/carrinho-compras/carrinho-compras.component.ts");
/* harmony import */ var _pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedidos/pedidos.component */ "./src/app/vendas/pedidos/pedidos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VendasComponent = /** @class */ (function () {
    function VendasComponent() {
        this.collapsed = true;
        this.finalizado = false;
    }
    VendasComponent.prototype.ngOnInit = function () {
        console.log('teste');
    };
    VendasComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
    };
    VendasComponent.prototype.finishOrder = function (finalizado) {
        this.finalizado = finalizado;
    };
    VendasComponent.prototype.reset = function () {
        this.finalizado = false;
        this.produtosC.reset();
        this.carrinhoC.reset();
        this.pedidosC.pago = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('produtosC'),
        __metadata("design:type", _produtos_vendas_produtos_vendas_component__WEBPACK_IMPORTED_MODULE_1__["ProdutosVendasComponent"])
    ], VendasComponent.prototype, "produtosC", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('carrinhoC'),
        __metadata("design:type", _carrinho_compras_carrinho_compras_component__WEBPACK_IMPORTED_MODULE_2__["CarrinhoComprasComponent"])
    ], VendasComponent.prototype, "carrinhoC", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pedidosC'),
        __metadata("design:type", _pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_3__["PedidosComponent"])
    ], VendasComponent.prototype, "pedidosC", void 0);
    VendasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vendas',
            template: __webpack_require__(/*! ./vendas.component.html */ "./src/app/vendas/vendas.component.html"),
            styles: [__webpack_require__(/*! ./vendas.component.css */ "./src/app/vendas/vendas.component.css")]
        })
    ], VendasComponent);
    return VendasComponent;
}());



/***/ }),

/***/ "./src/app/vendedor/api-vendedor.service.ts":
/*!**************************************************!*\
  !*** ./src/app/vendedor/api-vendedor.service.ts ***!
  \**************************************************/
/*! exports provided: ApiVendedorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiVendedorService", function() { return ApiVendedorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiVendedorService = /** @class */ (function () {
    function ApiVendedorService(http) {
        this.http = http;
    }
    ApiVendedorService.prototype.get = function (id) {
        return this.http.get("/api-vendas/api/v1/vendedor/" + id)
            .toPromise();
    };
    ApiVendedorService.prototype.salvar = function (vendedor) {
        return this.http.post('/api-vendas/api/v1/vendedor', vendedor)
            .toPromise();
    };
    ApiVendedorService.prototype.lista = function () {
        return this.http.get("/api-vendas/api/v1/vendedor")
            .toPromise();
    };
    ApiVendedorService.prototype.alterar = function (vendedor) {
        return this.http.put("/api-vendas/api/v1/vendedor/" + vendedor.id, vendedor)
            .toPromise();
    };
    ApiVendedorService.prototype.excluir = function (id) {
        return this.http.delete("/api-vendas/api/v1/vendedor/" + id)
            .toPromise();
    };
    ApiVendedorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiVendedorService);
    return ApiVendedorService;
}());



/***/ }),

/***/ "./src/app/vendedor/mantem-vendedor/mantem-vendedor.component.css":
/*!************************************************************************!*\
  !*** ./src/app/vendedor/mantem-vendedor/mantem-vendedor.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vendedor/mantem-vendedor/mantem-vendedor.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/vendedor/mantem-vendedor/mantem-vendedor.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"ui-fluid\">\r\n      <p-card class=\"cad_cadastro ui-g-12\" title=\"Vendedor\">\r\n          <hr>\r\n          <form class=\"ui-g\" (ngSubmit)=\"salvar()\" #vendedorForm=\"ngForm\">\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"nome\">Nome:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-5 \">\r\n                      <input id=\"nome\"  required type=\"text\" size=\"30\" pInputText [(ngModel)]=\"vendedor.nome\" name=\"nome\" #nome=\"ngModel\"  maxlength=\"50\">\r\n                      <p-message [hidden]=\"nome.valid || nome.pristine\" severity=\"error\" text=\"Nome deve ser preenchido\"></p-message>\r\n                  </div>\r\n              </div>\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"email\">E-mail:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-5 \">\r\n                      <input id=\"email\"  required type=\"text\" size=\"30\" pInputText [(ngModel)]=\"vendedor.email\" name=\"email\" #nome=\"ngModel\"  maxlength=\"50\">\r\n                      \r\n                  </div>\r\n              </div>\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"cpf\">CPF:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-2\">\r\n                      <p-inputMask  id=\"cpf\" name=\"cpf\" required size=\"14\" [(ngModel)]=\"vendedor.cpf\"\r\n                          mask=\"999.999.999-99\"></p-inputMask>\r\n                  </div>\r\n\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"form-label\" for=\"telefone\">Telefone:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-2\">\r\n                      <p-inputMask id=\"telefone\" name=\"telefone\" size=\"14\" [(ngModel)]=\"vendedor.telefone\"\r\n                          mask=\"(99)99999-9999\"></p-inputMask>\r\n                  </div>\r\n              </div>\r\n\r\n              <div  class=\"ui-g-10 ui-fluid\" >\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"senha\">Senha:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-2\">\r\n                      <input id=\"senha\"  required type=\"password\" size=\"30\" pInputText [(ngModel)]=\"vendedor.senha\" name=\"senha\" #nome=\"ngModel\"  maxlength=\"8\">\r\n                  </div>\r\n\r\n                  <div class=\"ui-g-12 ui-md-3 ui-lg-2\">\r\n                      <label  class=\"required form-label\" for=\"confirmaSenha\">Confirmar senha:</label>\r\n                  </div>\r\n                  <div class=\"ui-g-12 ui-md-9 ui-lg-2\">\r\n                      <input id=\"confirmaSenha\" required validateEqual=\"vendedor.senha\" type=\"password\" maxlength=\"8\" pInputText [(ngModel)]=\"confirmaSenha\" name=\"confirmaSenha\"/>\r\n                  </div>\r\n              </div>\r\n              <div class=\"ui-fluid\">\r\n                  <div class=\"ui-g-6 ui-md-6 ui-lg-10\">\r\n                      <p-button label=\"Voltar\" style=\"float: right;\" [routerLink]=\"['/']\" routerLinkActive=\"active\"></p-button>\r\n                  </div>\r\n                  <div class=\"ui-g-6 ui-md-6 ui-lg-2\">\r\n                      <p-button type=\"submit\" [disabled]=\"vendedorForm.form.invalid\" label=\"Salvar\" style=\"float: left;\"></p-button>\r\n                  </div>\r\n              </div>\r\n          </form>\r\n      </p-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/vendedor/mantem-vendedor/mantem-vendedor.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/vendedor/mantem-vendedor/mantem-vendedor.component.ts ***!
  \***********************************************************************/
/*! exports provided: MantemVendedorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantemVendedorComponent", function() { return MantemVendedorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_vendedor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-vendedor.service */ "./src/app/vendedor/api-vendedor.service.ts");
/* harmony import */ var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/breadcrumb/breadcrumb.service */ "./src/app/services/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var src_app_entities_Vendedor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/entities/Vendedor */ "./src/app/entities/Vendedor.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MantemVendedorComponent = /** @class */ (function () {
    function MantemVendedorComponent(vendedorApi, utilService, route, breadcrumbService, messageService) {
        this.vendedorApi = vendedorApi;
        this.utilService = utilService;
        this.route = route;
        this.breadcrumbService = breadcrumbService;
        this.messageService = messageService;
        this.notMatchSenha = false;
        this.vendedor = new src_app_entities_Vendedor__WEBPACK_IMPORTED_MODULE_5__["Vendedor"]();
        this.confirmaSenha = null;
        this.breadcrumbService.setItems([
            { label: 'Cadastro de Vendedor', routerLink: 'novo-vendedor' }
        ]);
    }
    MantemVendedorComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.url[0] && this.route.snapshot.url[0].path === 'editar-vendedor') {
            this.route.params.subscribe(function (params) {
                _this.vendedorApi.get(params['id'])
                    .then(function (response) {
                    _this.vendedor = response.data;
                });
            });
        }
        else {
            this.inicializar();
        }
    };
    MantemVendedorComponent.prototype.salvar = function () {
        var _this = this;
        if (this.vendedorForm.invalid) {
            return;
        }
        if (this.vendedor.senha !== this.confirmaSenha) {
            this.messageService.add({ severity: 'error', summary: '', detail: 'É necessário confirmar a senha.' });
            return;
        }
        this.vendedor.cpf = this.utilService.retirarFormatacao(this.vendedor.cpf);
        this.vendedor.telefone = this.utilService.retirarFormatacao(this.vendedor.telefone);
        if (this.vendedor.id) {
            this.vendedorApi.alterar(this.vendedor);
        }
        else {
            this.vendedorApi.salvar(this.vendedor)
                .then(function () {
                _this.vendedorForm.reset();
                setTimeout(function () {
                    return _this.inicializar();
                }, 0);
            });
        }
    };
    MantemVendedorComponent.prototype.inicializar = function () {
        this.vendedor = new src_app_entities_Vendedor__WEBPACK_IMPORTED_MODULE_5__["Vendedor"]();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('vendedorForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"])
    ], MantemVendedorComponent.prototype, "vendedorForm", void 0);
    MantemVendedorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mantem-vendedor',
            template: __webpack_require__(/*! ./mantem-vendedor.component.html */ "./src/app/vendedor/mantem-vendedor/mantem-vendedor.component.html"),
            styles: [__webpack_require__(/*! ./mantem-vendedor.component.css */ "./src/app/vendedor/mantem-vendedor/mantem-vendedor.component.css")]
        }),
        __metadata("design:paramtypes", [_api_vendedor_service__WEBPACK_IMPORTED_MODULE_1__["ApiVendedorService"],
            src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]])
    ], MantemVendedorComponent);
    return MantemVendedorComponent;
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
    production: false,
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

module.exports = __webpack_require__(/*! C:\Users\rodrigo.stefanini\git\dropshipping_cadastro\dropshipping-web\src\main\web\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map