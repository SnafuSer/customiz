(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-app\"  *ngIf=\"display === true\">\n\n    <selection></selection>\n    <preview></preview>\n\n</div>\n<div class=\"loader-container\" *ngIf=\"loading\">\n    <div class=\"loader\">\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\n          <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\n        </svg>\n      </div>\n    <h4 class=\"title\">{{ loadingText }}</h4>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/preview/preview.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/preview/preview.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"preview-panel\">\n    <div class=\"container-preview\" *ngIf=\"appComponent.tabSide === 'side1'\">\n        <img class=\"bg-mug\" src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616725/mugs/bg-mug/mug.png\" alt=\"\">\n        <img class=\"bg-image\" [src]=\"bgImage?.img\" alt=\"\">\n        <div class=\"textTitle\">{{ appComponent?.textTitle }}</div>\n        <!-- <div [class]=\"'container-charac ' + character.type + i +' length' + listCharacters.length\" *ngFor=\"let character of listCharacters; let i = index\" (click)=\"setActiveTab(i)\"> -->\n        <div [class]=\"'container-charac ' + character?.type + i +' length' + listCharacters?.length\" *ngFor=\"let character of listCharacters; let i = index\">\n            <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/homme/silhouette/seat/man' + character?.position + '-' + character?.skinColor + '.png'\" alt=\"\">\n            <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/homme/clothes/pant/' + character?.pant + '.png'\" alt=\"\">\n            <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/homme/clothes/shirt/shirt' + character?.position + '-' + character?.shirt + '.png'\" alt=\"\">\n            <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/homme/clothes/hair/' + character?.hairStyle + '-' + character?.hairColor + '.png'\" alt=\"\">\n            <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/homme/clothes/hat/' + character?.hat + '.png'\" alt=\"\">\n        </div>\n    </div>\n    <div class=\"container-preview\" *ngIf=\"appComponent.tabSide === 'side2'\">\n        <img class=\"bg-mug mirror\" src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616725/mugs/bg-mug/mug.png\" alt=\"\">\n        <div class=\"textTitle\">{{ appComponent?.textSide2 }}</div>\n    </div>\n    <button class=\"btn-cart\" (click)=\"export()\">Ajouter au panier</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/selection/selection.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/selection/selection.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-step2\">\n  <div class=\"tabs\">\n    <!-- <div class=\"tab\" [ngClass]=\"{'selected': item.selected === true}\" (click)=\"setActiveTab(i)\">\n      Décor\n    </div>\n    <div class=\"tab\" [ngClass]=\"{'selected': item.selected === true}\" (click)=\"setActiveTab(i)\">\n      Texte\n    </div> -->\n    <div class=\"tab\" [ngClass]=\"{'selected': item.selected === true}\" *ngFor=\"let item of tabs; let i = index\" (click)=\"setActiveTab(i, 'tabs')\">\n      <img class=\"icon\" [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614616677/mugs/icons/' + item.id + '.png'\" alt=\"\">\n      <span class=\"text\">\n        {{ item?.name }}\n      </span>\n    </div>\n    <div class=\"tab\" [ngClass]=\"{'selected': item.selected === true}\" *ngFor=\"let item of listCharacters; let i = index\" (click)=\"setActiveTab(i, 'characters')\">\n      <img class=\"icon\" src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616677/mugs/icons/user.png\" alt=\"\">\n      <span class=\"text\">\n        {{ item?.name }}\n      </span>\n    </div>\n    <div class=\"tab\" *ngIf=\"listCharacters.length < 5\" (click)=\"addCharacter()\">\n      <img class=\"icon\" src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616677/mugs/icons/add.png\" alt=\"\">\n      <span class=\"text\">\n        Ajouter\n      </span>\n    </div>\n  </div>\n  <div class=\"choices-panel\">\n    <div *ngIf=\"display === 'text'\">\n      <div class=\"tabs-side\">\n        <div class=\"tab\" (click)=\"changeSide('side1')\" [ngClass]=\"{'selected': tabSide === 'side1'}\">\n          <img class=\"icon mirror\" src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1615112742/mugs/icons/mug.png\" alt=\"\">\n          <span class=\"text\">\n            Face 1\n          </span>\n        </div>\n        <div class=\"tab\" (click)=\"changeSide('side2')\" [ngClass]=\"{'selected': tabSide === 'side2'}\">\n          <img class=\"icon\" src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1615112742/mugs/icons/mug.png\" alt=\"\">\n          <span class=\"text\">\n            Face 2\n          </span>\n        </div>\n      </div>\n      <div class=\"text-display\" *ngIf=\"tabSide === 'side1'\">\n        <h5>Vous pouvez selectionner un titre pour l'image</h5>\n        <div class=\"text-item\" [ngClass]=\"{'selected': text.selected === true}\" *ngFor=\"let text of textTitle\" (click)=\"changeTextTitle(text)\" >\n          {{ text.title }}\n        </div>\n      </div>\n      <div class=\"text-display\" *ngIf=\"tabSide === 'side2'\">\n        <h5>Laissez un texte si vous le souhaitez (max 50 charactères)</h5>\n        <textarea name=\"text\" ([ngModel])=\"textSide2\" maxlength=\"50\" id=\"\" cols=\"42\" rows=\"4\"></textarea>\n        <h5>Ou choisissez en un parmis la librairie</h5>\n      </div>\n    </div>\n    <div *ngIf=\"display === 'landscape'\">\n      <h5>Vous pouvez selectionner un fond pour l'image</h5>\n      <div class=\"item-choices\">\n        <div class=\"landscapes\" [ngClass]=\"{'selected': landscape.selected === true, 'icon': landscape?.public_id === 'mugs/icons/empty'}\" *ngFor=\"let landscape of listLandscapes; let i = index\">\n            <img class=\"landscape-bg\" \n            [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/' + landscape?.public_id\" \n            (click)=\"landscape?.public_id === 'mugs/icons/empty' ? changeBg(landscape, true) : changeBg(landscape)\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"display === 'character'\">\n      <div class=\"general-infos row\">\n        <div class=\"input-name\">\n          <label class=\"label\" for=\"Nom\">Nom</label>\n          <input type=\"text\" name=\"Nom\" id=\"Nom\" [(ngModel)]=\"currentChar.name\">\n        </div>\n        <div class=\"gender\">\n          <span class=\"label\">Genre</span>\n          <div class=\"gender-choices choices\">\n            <div class=\"choice\" (click)=\"changeGender('female')\" [ngClass]=\"{'selected': currentChar.gender === 'female'}\">\n              <img src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616677/mugs/icons/female.png\" alt=\"\">\n            </div>\n            <div class=\"choice\" (click)=\"changeGender('male')\" [ngClass]=\"{'selected': currentChar.gender === 'male'}\">\n              <img src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616677/mugs/icons/male.png\" alt=\"\">\n            </div>\n            <div class=\"choice\" (click)=\"changeGender('animal')\" [ngClass]=\"{'selected': currentChar.gender === 'animal'}\">\n              <img src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616677/mugs/icons/animal.png\" alt=\"\">\n            </div>\n          </div>\n        </div>\n        <div class=\"position\">\n          <span class=\"label\">Position</span>\n          <div class=\"position-choices choices\">\n            <div class=\"choice\" (click)=\"changePosition('1')\" [ngClass]=\"{'selected': currentChar.position === '1'}\">\n              <img src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/mugs/icons/silhouette-1.png\" alt=\"\">\n            </div>\n            <div class=\"choice\" (click)=\"changePosition('2')\" [ngClass]=\"{'selected': currentChar.position === '2'}\">\n              <img src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/mugs/icons/silhouette-2.png\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"skin-infos row\">\n        <span class=\"label\">Couleur de peau</span>\n        <div class=\"colors\">\n          <div class=\"color\" *ngFor=\"let item of listSkins\" \n          [ngStyle]=\"{'background-color': item.color}\" \n          [ngClass]=\"{'selected': item.name === currentChar.skinColor}\"\n          (click)=\"changeSkin(item)\"></div>\n        </div>\n      </div>\n      <div class=\"hairs-colors row\">\n        <span class=\"label\">Couleur de cheuveux</span>\n        <div class=\"colors\">\n          <div class=\"color\" \n          *ngFor=\"let item of listHairColors\" \n          [ngStyle]=\"{'background-color': item.color}\" \n          [ngClass]=\"{'selected': item.name === currentChar.hairColor}\"\n          (click)=\"changeHairColor(item)\"></div>\n        </div>\n      </div>\n      <div class=\"hairs-style row\">\n        <span class=\"label\">Coupe de cheuveux</span>\n        <div class=\"colors\">\n          <div class=\"img-choice\" \n          *ngFor=\"let item of filterItemsOfHairs()\" \n          [ngClass]=\"{'selected': item.public_id.includes(currentChar.hairStyle)}\"\n          (click)=\"changeHairStyle(item)\">\n              <img *ngIf=\"item.display === true\" [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/' + item.public_id\" alt=\"\">\n          </div>\n        </div>\n      </div>\n      <div class=\"shirt-style row\">\n        <span class=\"label\">Haut</span>\n        <div class=\"colors\">\n          <div class=\"img-choice\" \n          *ngFor=\"let item of filterItemsOfShirt()\" \n          [ngClass]=\"{'selected': item.public_id.includes(currentChar.shirt)}\"\n          (click)=\"changeShirt(item)\">\n              <img *ngIf=\"item.display === true\" [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/' + item.public_id\" alt=\"\">\n          </div>\n        </div>\n      </div>\n      <div class=\"pant-style row\">\n        <span class=\"label\">Pantalon</span>\n        <div class=\"colors\">\n          <div class=\"img-choice pant\" \n          *ngFor=\"let item of listPants\" \n          [ngClass]=\"{'selected': item.public_id.includes(currentChar.pant)}\"\n          (click)=\"changePant(item)\">\n              <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/' + item.public_id\" alt=\"\">\n          </div>\n        </div>\n      </div>\n      <div class=\"hat-style row\">\n        <span class=\"label\">Chapeau</span>\n        <div class=\"colors\">\n          <div class=\"img-choice\" \n          [ngClass]=\"{'selected': currentChar.hat === 'empty'}\"\n          (click)=\"changeHat('empty')\">\n              <img src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/mugs/icons/empty.png\" alt=\"\">\n          </div>\n          <div class=\"img-choice\" \n          *ngFor=\"let item of listHat\" \n          [ngClass]=\"{'selected': item.public_id.includes(currentChar.hat)}\"\n          (click)=\"changeHat(item)\">\n              <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/' + item.public_id\" alt=\"\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/modals/blankModal/blank.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/modals/blankModal/blank.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



/****** PAGES ******/
const routes = [
    { path: '**', redirectTo: '404' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #171717;\n}\n\n.container-app {\n  display: -webkit-box;\n  display: flex;\n  max-width: 980px;\n  margin: auto;\n  height: 520px;\n  padding-top: 16px;\n}\n\npreview {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\nselection {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.loader-container {\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(5, 111, 250, 0.3);\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  z-index: 101;\n}\n\n.loader-container h4 {\n  margin: 24px auto auto auto;\n}\n\n.loader {\n  position: relative;\n  margin: auto auto 0;\n  width: 100px;\n}\n\n.loader:before {\n  content: \"\";\n  display: block;\n  padding-top: 100%;\n}\n\n.circular {\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  height: 100%;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.path {\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\n  stroke-linecap: round;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n@-webkit-keyframes color {\n  100%, 0% {\n    stroke: #d62d20;\n  }\n  40% {\n    stroke: #0057e7;\n  }\n  66% {\n    stroke: #008744;\n  }\n  80%, 90% {\n    stroke: #ffa700;\n  }\n}\n\n@keyframes color {\n  100%, 0% {\n    stroke: #d62d20;\n  }\n  40% {\n    stroke: #0057e7;\n  }\n  66% {\n    stroke: #008744;\n  }\n  80%, 90% {\n    stroke: #ffa700;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNlcnJhbm8vQ3VzdG9taXovc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHlDQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtVQUFBLE9BQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO1VBQUEsT0FBQTtBQ0VKOztBRGNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7QUNYSjs7QURZSTtFQUNJLDJCQUFBO0FDVlI7O0FEYUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFsQk07QUNRUjs7QURXRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNUSjs7QURhQTtFQUNFLDRDQUFBO1VBQUEsb0NBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDVkY7O0FEYUE7RUFDRSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0ZBQUE7VUFBQSx3RUFBQTtFQUNBLHFCQUFBO0FDVkY7O0FEYUE7RUFDRTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUNWRjtBQUNGOztBRE9BO0VBQ0U7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VDVkY7QUFDRjs7QURhQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQ1hGO0VEYUE7SUFDRSx5QkFBQTtJQUNBLHdCQUFBO0VDWEY7RURhQTtJQUNFLHlCQUFBO0lBQ0EseUJBQUE7RUNYRjtBQUNGOztBRERBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLG9CQUFBO0VDWEY7RURhQTtJQUNFLHlCQUFBO0lBQ0Esd0JBQUE7RUNYRjtFRGFBO0lBQ0UseUJBQUE7SUFDQSx5QkFBQTtFQ1hGO0FBQ0Y7O0FEY0E7RUFDRTtJQUVFLGVBM0VFO0VDOERKO0VEZUE7SUFDRSxlQS9FRztFQ2tFTDtFRGVBO0lBQ0UsZUFuRkk7RUNzRU47RURlQTtJQUVFLGVBcEZLO0VDc0VQO0FBQ0Y7O0FEQUE7RUFDRTtJQUVFLGVBM0VFO0VDOERKO0VEZUE7SUFDRSxlQS9FRztFQ2tFTDtFRGVBO0lBQ0UsZUFuRkk7RUNzRU47RURlQTtJQUVFLGVBcEZLO0VDc0VQO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbioge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjMTcxNzE3XG59XG4uY29udGFpbmVyLWFwcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDk4MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDUyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG5wcmV2aWV3IHtcbiAgICBmbGV4OiAxO1xufVxuc2VsZWN0aW9uIHtcbiAgICBmbGV4OiAxO1xufVxuXG5cblxuXG5cbi8vIExPQURFUlxuJGdyZWVuOiAjMDA4NzQ0O1xuJGJsdWU6ICMwMDU3ZTc7XG4kcmVkOiAjZDYyZDIwO1xuJHllbGxvdzogI2ZmYTcwMDtcbiR3aGl0ZTogI2VlZTtcblxuLy8gc2NhbGluZy4uLiBhbnkgdW5pdHNcbiR3aWR0aDogMTAwcHg7XG4ubG9hZGVyLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwNTZGRkEsICRhbHBoYTogMC4zKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHotaW5kZXg6IDEwMTtcbiAgICBoNCB7XG4gICAgICAgIG1hcmdpbjogMjRweCBhdXRvIGF1dG8gYXV0bztcbiAgICB9XG59XG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG8gYXV0byAwO1xuICB3aWR0aDogJHdpZHRoO1xuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy10b3A6IDEwMCU7XG4gIH1cbn1cblxuLmNpcmN1bGFyIHtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucGF0aCB7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIGFuaW1hdGlvbjogZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlLCBjb2xvciA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBkYXNoIHtcbiAgMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuICA1MCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjRweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNvbG9yIHtcbiAgMTAwJSxcbiAgMCUge1xuICAgIHN0cm9rZTogJHJlZDtcbiAgfVxuICA0MCUge1xuICAgIHN0cm9rZTogJGJsdWU7XG4gIH1cbiAgNjYlIHtcbiAgICBzdHJva2U6ICRncmVlbjtcbiAgfVxuICA4MCUsXG4gIDkwJSB7XG4gICAgc3Ryb2tlOiAkeWVsbG93O1xuICB9XG59XG5cblxuIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzE3MTcxNztcbn1cblxuLmNvbnRhaW5lci1hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogNTIwcHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG5wcmV2aWV3IHtcbiAgZmxleDogMTtcbn1cblxuc2VsZWN0aW9uIHtcbiAgZmxleDogMTtcbn1cblxuLmxvYWRlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNSwgMTExLCAyNTAsIDAuMyk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxMDE7XG59XG4ubG9hZGVyLWNvbnRhaW5lciBoNCB7XG4gIG1hcmdpbjogMjRweCBhdXRvIGF1dG8gYXV0bztcbn1cblxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvIGF1dG8gMDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLmxvYWRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDEwMCU7XG59XG5cbi5jaXJjdWxhciB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnBhdGgge1xuICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICBhbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSwgY29sb3IgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1cHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNHB4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNvbG9yIHtcbiAgMTAwJSwgMCUge1xuICAgIHN0cm9rZTogI2Q2MmQyMDtcbiAgfVxuICA0MCUge1xuICAgIHN0cm9rZTogIzAwNTdlNztcbiAgfVxuICA2NiUge1xuICAgIHN0cm9rZTogIzAwODc0NDtcbiAgfVxuICA4MCUsIDkwJSB7XG4gICAgc3Ryb2tlOiAjZmZhNzAwO1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let AppComponent = class AppComponent {
    constructor(dialog, sanitizer) {
        this.dialog = dialog;
        this.sanitizer = sanitizer;
        this.tabSide = 'side1';
        this.loading = true;
        this.loadingText = "Chargement de la librairie en cours...";
        this.listCharacters = [];
        this.currentChar = {};
        this.options = {};
        this.display = false;
        this.options = {
            characters: [
                {
                    gender: "male",
                    hairColor: "c1",
                    hairStyle: "hair2",
                    hat: "empty",
                    name: "Simon",
                    pant: "pant1",
                    position: "1",
                    selected: false,
                    shirt: "c1",
                    skinColor: "c",
                    type: "character",
                },
                {
                    gender: "female",
                    hairColor: "c1",
                    hairStyle: "hair1",
                    hat: "empty",
                    name: "Puce",
                    pant: "pant2",
                    position: "2",
                    selected: false,
                    shirt: "c2",
                    skinColor: "c2",
                    type: "character",
                }, {
                    gender: "male",
                    hairColor: "c3",
                    hairStyle: "hair1",
                    hat: "empty",
                    name: "Nems",
                    pant: "pant1",
                    position: "1",
                    selected: false,
                    shirt: "c3",
                    skinColor: "c4",
                    type: "character",
                }
            ],
            landscape: { img: "https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/mugs/paysage/mountain_cxhvy2" },
            textTitle: "Love"
        };
        this.createhorsLigne();
    }
    ngOnInit() {
        console.log('Aloha');
        // if(Object.keys(this.options).length === 0) this.createListcharacters()
        // else {
        //   this.listCharacters = this.options.characters
        //   this.choiceLanscape = this.options.landscape
        //   this.textTitle = this.options.textTitle
        // }
    }
    onMessage(event) {
        if (event.data.options) {
            this.options = JSON.parse(event.data.options);
            this.listCharacters = this.options.characters;
            this.choiceLanscape = this.options.landscape;
            this.textTitle = this.options.textTitle;
            this.currentChar = this.listCharacters[0];
            this.display = true;
            this.loading = false;
        }
    }
    createhorsLigne() {
        this.listCharacters = this.options.characters;
        this.choiceLanscape = this.options.landscape;
        this.textTitle = this.options.textTitle;
        this.currentChar = this.listCharacters[0];
        this.display = true;
        this.loading = false;
    }
    createListcharacters() {
        this.listCharacters = [{
                type: "character",
                name: "Perso 1",
                gender: "male",
                position: "1",
                skinColor: "c",
                hairColor: "c1",
                hairStyle: "hair2",
                shirt: "c2",
                pant: "pant1",
                hat: "empty",
            },
            {
                type: "character",
                name: "Perso 2",
                gender: "female",
                position: "2",
                skinColor: "c2",
                hairColor: "c2",
                hairStyle: "hair1",
                shirt: "c1",
                pant: "pant1",
                hat: "empty",
            }];
        this.choiceLanscape = {
            img: "https://res.cloudinary.com/deck4daxl/image/upload/v1614610615/mugs/paysage/campaign_yodqct.png"
        };
    }
    addCharacter() {
        this.listCharacters.push({
            type: "character",
            name: "Perso " + (this.listCharacters.length + 1),
            gender: "male",
            position: "1",
            skinColor: "c",
            hairColor: "c1",
            hairStyle: "hair2",
            shirt: "c2",
            pant: "pant1",
            hat: "empty",
        });
    }
    export() {
        this.loadingText = "Création du design en cours...";
        this.loading = true;
        let test = {
            textTitle: this.textTitle,
            landscape: this.choiceLanscape,
            characters: this.listCharacters
        };
        let message = JSON.stringify(test);
        console.log('ok');
        window.parent.postMessage({ export: message, characters: this.listCharacters.length, textTitle: this.textTitle }, '*');
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:message', ['$event'])
], AppComponent.prototype, "onMessage", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux */ "./src/redux/index.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/services.module */ "./src/services/services.module.ts");
/* harmony import */ var _components_modals_modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/modals/modal.module */ "./src/components/modals/modal.module.ts");
/* harmony import */ var _preview_preview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./preview/preview */ "./src/app/preview/preview.ts");
/* harmony import */ var _selection_selection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./selection/selection */ "./src/app/selection/selection.ts");







// ***** Redux *****



// ***** App *****


// ***** Components *****

// ***** Pages *****


let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _preview_preview__WEBPACK_IMPORTED_MODULE_13__["Preview"],
            _selection_selection__WEBPACK_IMPORTED_MODULE_14__["Selections"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _components_modals_modal_module__WEBPACK_IMPORTED_MODULE_12__["ModalModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _services_services_module__WEBPACK_IMPORTED_MODULE_11__["ServiceModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_redux__WEBPACK_IMPORTED_MODULE_9__["reducers"], { initialState: _redux__WEBPACK_IMPORTED_MODULE_9__["INITIAL_STATE"] }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({ maxAge: 10, name: '[CUSTOMIZ]' }),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/preview/preview.scss":
/*!**************************************!*\
  !*** ./src/app/preview/preview.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview-panel {\n  background-color: #FAFAFA;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.container-preview {\n  -webkit-transform: translateY(-40px);\n          transform: translateY(-40px);\n}\n\n.bg-mug {\n  position: absolute;\n  width: 460px;\n  top: 50px;\n  margin-left: 20px;\n}\n\n.bg-mug.mirror {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n\n.bg-image {\n  width: 270px;\n  top: 170px;\n  position: absolute;\n  margin-left: 45px;\n  mix-blend-mode: multiply;\n}\n\n.container-charac {\n  position: absolute;\n  top: 240px;\n  cursor: pointer;\n}\n\n.container-charac:hover {\n  -webkit-filter: brightness(1.2);\n          filter: brightness(1.2);\n}\n\n.container-charac img {\n  height: 100%;\n  position: absolute;\n}\n\n.container-charac.length2 {\n  height: 140px;\n}\n\n.container-charac.length2.character0 {\n  margin-left: 215px;\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n  z-index: 9;\n}\n\n.container-charac.length2.character1 {\n  margin-left: 150px;\n}\n\n.container-charac.length3 {\n  height: 130px;\n  top: 250px;\n}\n\n.container-charac.length3.character0 {\n  margin-left: 200px;\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n\n.container-charac.length3.character1 {\n  margin-left: 125px;\n  z-index: 9;\n}\n\n.container-charac.length3.character2 {\n  margin-left: 180px;\n}\n\n.container-charac.length4 {\n  height: 110px;\n  top: 265px;\n}\n\n.container-charac.length4.character0 {\n  margin-left: 160px;\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n\n.container-charac.length4.character1 {\n  margin-left: 76px;\n  z-index: 9;\n}\n\n.container-charac.length4.character2 {\n  margin-left: 145px;\n}\n\n.container-charac.length4.character3 {\n  margin-left: 200px;\n}\n\n.container-charac.length5 {\n  height: 100px;\n  top: 275px;\n}\n\n.container-charac.length5.character0 {\n  margin-left: 160px;\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n\n.container-charac.length5.character1 {\n  margin-left: 76px;\n  z-index: 9;\n}\n\n.container-charac.length5.character2 {\n  margin-left: 145px;\n}\n\n.container-charac.length5.character3 {\n  margin-left: 200px;\n}\n\n.container-charac.length5.character4 {\n  margin-left: 200px;\n}\n\n.textTitle {\n  font-family: \"Dancing\";\n  font-weight: bolder;\n  font-size: 35px;\n  position: absolute;\n  top: 125px;\n  margin-left: 39px;\n  width: 290px;\n  text-align: center;\n  color: #454545;\n  mix-blend-mode: multiply;\n}\n\n.btn-cart {\n  margin: auto 16px 8px auto;\n  background-color: #141414;\n  border: 0px;\n  line-height: 50px;\n  padding: 0 24px;\n  color: white;\n  font-family: arial;\n  font-size: 16px;\n  border-radius: 15px;\n  cursor: pointer;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNlcnJhbm8vQ3VzdG9taXovc3JjL2FwcC9wcmV2aWV3L3ByZXZpZXcuc2NzcyIsInNyYy9hcHAvcHJldmlldy9wcmV2aWV3LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxvQ0FBQTtVQUFBLDRCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QURGSTtFQUNJLDZCQUFBO1VBQUEscUJBQUE7QUNJUjs7QURBQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FDR0o7O0FEQUE7RUFFSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRUo7O0FEREk7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0FDR1I7O0FEREk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNHUjs7QURESTtFQUNJLGFBQUE7QUNHUjs7QURGUTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLFVBQUE7QUNJWjs7QURGUTtFQUNJLGtCQUFBO0FDSVo7O0FEREk7RUFDSSxhQUFBO0VBQ0EsVUFBQTtBQ0dSOztBREZRO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDSVo7O0FERlE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNJWjs7QURGUTtFQUNJLGtCQUFBO0FDSVo7O0FEREk7RUFDSSxhQUFBO0VBQ0EsVUFBQTtBQ0dSOztBREZRO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDSVo7O0FERlE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUNJWjs7QURGUTtFQUNJLGtCQUFBO0FDSVo7O0FERlE7RUFDSSxrQkFBQTtBQ0laOztBRERJO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUNHUjs7QURGUTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQ0laOztBREZRO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FDSVo7O0FERlE7RUFDSSxrQkFBQTtBQ0laOztBREZRO0VBQ0ksa0JBQUE7QUNJWjs7QURGUTtFQUNJLGtCQUFBO0FDSVo7O0FERUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcmV2aWV3L3ByZXZpZXcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmV2aWV3LXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRhaW5lci1wcmV2aWV3IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpO1xufVxuLmJnLW11ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0NjBweDtcbiAgICB0b3A6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgJi5taXJyb3Ige1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgfVxufVxuXG4uYmctaW1hZ2Uge1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICB0b3A6IDE3MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcbiAgICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG59XG5cbi5jb250YWluZXItY2hhcmFjIHtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI0MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICAmLmxlbmd0aDIge1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICAmLmNoYXJhY3RlcjAge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIxNXB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgICAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgfVxuICAgICAgICAmLmNoYXJhY3RlcjEge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICYubGVuZ3RoMyB7XG4gICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgIHRvcDogMjUwcHg7XG4gICAgICAgICYuY2hhcmFjdGVyMCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgICAgIH1cbiAgICAgICAgJi5jaGFyYWN0ZXIxIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMjVweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgIH1cbiAgICAgICAgJi5jaGFyYWN0ZXIyIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxODBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmxlbmd0aDQge1xuICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICB0b3A6IDI2NXB4O1xuICAgICAgICAmLmNoYXJhY3RlcjAge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2MHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgICAgICB9XG4gICAgICAgICYuY2hhcmFjdGVyMSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNzZweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgIH1cbiAgICAgICAgJi5jaGFyYWN0ZXIyIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNDVweDtcbiAgICAgICAgfVxuICAgICAgICAmLmNoYXJhY3RlcjMge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICYubGVuZ3RoNSB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHRvcDogMjc1cHg7XG4gICAgICAgICYuY2hhcmFjdGVyMCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTYwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgICAgIH1cbiAgICAgICAgJi5jaGFyYWN0ZXIxIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3NnB4O1xuICAgICAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgfVxuICAgICAgICAmLmNoYXJhY3RlcjIge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0NXB4O1xuICAgICAgICB9XG4gICAgICAgICYuY2hhcmFjdGVyMyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJi5jaGFyYWN0ZXI0IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4udGV4dFRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJEYW5jaW5nXCI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDM5cHg7XG4gICAgd2lkdGg6IDI5MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzQ1NDU0NTtcbiAgICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG59XG5cbi5idG4tY2FydCB7XG4gICAgbWFyZ2luOiBhdXRvIDE2cHggOHB4IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcbiAgICBib3JkZXI6IDBweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAwIDI0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDogOTtcbn0iLCIucHJldmlldy1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXItcHJldmlldyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XG59XG5cbi5iZy1tdWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0NjBweDtcbiAgdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5iZy1tdWcubWlycm9yIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuXG4uYmctaW1hZ2Uge1xuICB3aWR0aDogMjcwcHg7XG4gIHRvcDogMTcwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbn1cblxuLmNvbnRhaW5lci1jaGFyYWMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXItY2hhcmFjOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG4uY29udGFpbmVyLWNoYXJhYyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jb250YWluZXItY2hhcmFjLmxlbmd0aDIge1xuICBoZWlnaHQ6IDE0MHB4O1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoMi5jaGFyYWN0ZXIwIHtcbiAgbWFyZ2luLWxlZnQ6IDIxNXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIHotaW5kZXg6IDk7XG59XG4uY29udGFpbmVyLWNoYXJhYy5sZW5ndGgyLmNoYXJhY3RlcjEge1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG59XG4uY29udGFpbmVyLWNoYXJhYy5sZW5ndGgzIHtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgdG9wOiAyNTBweDtcbn1cbi5jb250YWluZXItY2hhcmFjLmxlbmd0aDMuY2hhcmFjdGVyMCB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoMy5jaGFyYWN0ZXIxIHtcbiAgbWFyZ2luLWxlZnQ6IDEyNXB4O1xuICB6LWluZGV4OiA5O1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoMy5jaGFyYWN0ZXIyIHtcbiAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoNCB7XG4gIGhlaWdodDogMTEwcHg7XG4gIHRvcDogMjY1cHg7XG59XG4uY29udGFpbmVyLWNoYXJhYy5sZW5ndGg0LmNoYXJhY3RlcjAge1xuICBtYXJnaW4tbGVmdDogMTYwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cbi5jb250YWluZXItY2hhcmFjLmxlbmd0aDQuY2hhcmFjdGVyMSB7XG4gIG1hcmdpbi1sZWZ0OiA3NnB4O1xuICB6LWluZGV4OiA5O1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoNC5jaGFyYWN0ZXIyIHtcbiAgbWFyZ2luLWxlZnQ6IDE0NXB4O1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoNC5jaGFyYWN0ZXIzIHtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoNSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHRvcDogMjc1cHg7XG59XG4uY29udGFpbmVyLWNoYXJhYy5sZW5ndGg1LmNoYXJhY3RlcjAge1xuICBtYXJnaW4tbGVmdDogMTYwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cbi5jb250YWluZXItY2hhcmFjLmxlbmd0aDUuY2hhcmFjdGVyMSB7XG4gIG1hcmdpbi1sZWZ0OiA3NnB4O1xuICB6LWluZGV4OiA5O1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoNS5jaGFyYWN0ZXIyIHtcbiAgbWFyZ2luLWxlZnQ6IDE0NXB4O1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoNS5jaGFyYWN0ZXIzIHtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoNS5jaGFyYWN0ZXI0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xufVxuXG4udGV4dFRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGFuY2luZ1wiO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDM1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDM5cHg7XG4gIHdpZHRoOiAyOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzQ1NDU0NTtcbiAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xufVxuXG4uYnRuLWNhcnQge1xuICBtYXJnaW46IGF1dG8gMTZweCA4cHggYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcbiAgYm9yZGVyOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogOTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/preview/preview.ts":
/*!************************************!*\
  !*** ./src/app/preview/preview.ts ***!
  \************************************/
/*! exports provided: Preview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preview", function() { return Preview; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/fesm2015/cloudinary-angular-5.x.js");
/* harmony import */ var _services_cloudinary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cloudinary.service */ "./src/services/cloudinary.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");






let Preview = class Preview {
    constructor(snackBar, cloudinary, cloudinaryService, appComponent) {
        this.snackBar = snackBar;
        this.cloudinary = cloudinary;
        this.cloudinaryService = cloudinaryService;
        this.appComponent = appComponent;
        this.listCharacters = [];
    }
    ngOnInit() {
        this.getCloudinary('landscape');
        this.bgImage = this.appComponent.choiceLanscape;
        this.listCharacters = this.appComponent.listCharacters;
        this.tabSide = this.appComponent.tabSide;
    }
    getCloudinary(src) {
        // src = 'listMan'
        src = 'landscape';
        this.cloudinaryService.getCloudinary(src).subscribe((response) => {
            for (let i = 0; i < response.resources.length; i++) {
                // this.listLandscape[i + 1] = {img : "https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/" + response.resources[i].public_id}
            }
        }, (error) => { return console.log('error', error); });
    }
    setActiveCharacter(item) {
        for (let i = 0; i < this.listCharacters.length; i++) {
            if (i === item) {
                this.listCharacters[i].choose = true;
                this.choiceCharacter = this.listCharacters[i];
                this.appComponent.choiceCharacter = this.choiceCharacter;
            }
            else
                this.listCharacters[i].choose = false;
        }
    }
    export() {
        this.appComponent.export();
    }
};
Preview.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_3__["Cloudinary"] },
    { type: _services_cloudinary_service__WEBPACK_IMPORTED_MODULE_4__["CloudinaryService"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] }
];
Preview = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'preview',
        template: __webpack_require__(/*! raw-loader!./preview.html */ "./node_modules/raw-loader/index.js!./src/app/preview/preview.html"),
        styles: [__webpack_require__(/*! ./preview.scss */ "./src/app/preview/preview.scss")]
    })
], Preview);



/***/ }),

/***/ "./src/app/selection/selection.scss":
/*!******************************************!*\
  !*** ./src/app/selection/selection.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-step2 {\n  display: -webkit-box;\n  display: flex;\n  background-color: #FFF;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  border: 1px solid #E2E2E2E2;\n  height: 100%;\n  overflow: hidden;\n}\n\nh5 {\n  margin: 16px 0 8px;\n}\n\n.choices-panel {\n  -webkit-box-flex: 1;\n          flex: 1;\n  max-width: 390px;\n  padding-left: 16px;\n  padding-bottom: 16px;\n}\n\n.tabs {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  border-right: 1px solid #E2E2E2E2;\n}\n\n.tabs .tab {\n  height: 72px;\n  width: 75px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  cursor: pointer;\n}\n\n.tabs .tab:hover {\n  background-color: #E6E6E6;\n}\n\n.tabs .tab.selected {\n  border-left: 3px solid #B446FE;\n  box-sizing: border-box;\n  background-color: #FAFAFA;\n}\n\n.tabs .tab .icon {\n  width: 16px;\n  margin: auto auto 4px auto;\n}\n\n.tabs .tab .text {\n  margin: 0 auto auto auto;\n  text-align: center;\n  text-align: center;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.tabs-side {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  border-bottom: 1px solid #E2E2E2E2;\n}\n\n.tabs-side .tab {\n  height: 75px;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  cursor: pointer;\n}\n\n.tabs-side .tab:hover {\n  background-color: #E6E6E6;\n}\n\n.tabs-side .tab.selected {\n  border-bottom: 3px solid #B446FE;\n  box-sizing: border-box;\n  background-color: #FAFAFA;\n}\n\n.tabs-side .tab .icon {\n  width: 16px;\n  margin: auto auto 4px auto;\n}\n\n.tabs-side .tab .icon.mirror {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n\n.tabs-side .tab .text {\n  margin: 0 auto auto auto;\n  text-align: center;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.label {\n  font-size: 12px;\n  margin-bottom: 6px;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 10px;\n}\n\n.item-choices {\n  display: -webkit-box;\n  display: flex;\n  padding-top: 16px;\n  flex-wrap: wrap;\n}\n\n.item-choices .landscapes {\n  padding: 8px;\n  cursor: pointer;\n  width: 100px;\n  height: 100px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.item-choices .landscapes:hover {\n  background-color: #E6E6E6;\n}\n\n.item-choices .landscapes.selected {\n  border-bottom: 3px solid #B446FE;\n}\n\n.item-choices .landscapes.icon img {\n  width: 40px;\n  margin: auto;\n}\n\n.item-choices img {\n  width: 100px;\n  margin: auto;\n}\n\n.general-infos {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.input-name {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 2;\n          flex: 2;\n  margin-right: 24px;\n}\n\n.input-name input {\n  height: 32px;\n  background-color: #FAFAFA;\n  border: 0px;\n  padding-left: 8px;\n  outline-offset: 0px;\n}\n\n.gender, .position {\n  margin-right: 24px;\n}\n\n.choices {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.choices .choice {\n  height: 32px;\n  width: 32px;\n  display: -webkit-box;\n  display: flex;\n  cursor: pointer;\n  margin: 0 8px 0 0;\n}\n\n.choices .choice:hover {\n  background-color: #E6E6E6;\n}\n\n.choices .choice.selected {\n  border-left: 3px solid #B446FE;\n  box-sizing: border-box;\n}\n\n.choices .choice img {\n  height: 24px;\n  margin: auto;\n}\n\n.gender {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.colors {\n  display: -webkit-box;\n  display: flex;\n}\n\n.color {\n  height: 24px;\n  width: 24px;\n  margin: 0 16px 0 0;\n  cursor: pointer;\n  box-sizing: border-box;\n  border-radius: 50%;\n}\n\n.color.selected {\n  border: 3px solid #B446FE !important;\n}\n\n.color#FFFFFF {\n  border: 1px solid #131313;\n}\n\n.img-choice {\n  height: 45px;\n  width: 45px;\n  display: -webkit-box;\n  display: flex;\n  margin: auto 16px 0 0;\n  cursor: pointer;\n}\n\n.img-choice:hover {\n  background-color: #E6E6E6;\n}\n\n.img-choice img {\n  height: 40px;\n  margin: auto;\n}\n\n.img-choice.pant img {\n  width: 40px;\n  height: auto;\n}\n\n.img-choice.selected {\n  border-bottom: 3px solid #B446FE !important;\n}\n\n.text-display {\n  overflow: scroll;\n  height: calc(520px - 75px);\n}\n\n.text-display h5 {\n  margin: 16px 0 8px;\n}\n\n.text-display .text-item {\n  font-family: \"Dancing\";\n  font-weight: bolder;\n  font-size: 25px;\n  padding: 4px 8px;\n  border-bottom: 1px solid #E2E2E2;\n  margin: 4px;\n  cursor: pointer;\n}\n\n.text-display .text-item:hover {\n  background-color: #FAFAFA;\n}\n\n.text-display .text-item.selected {\n  border-bottom: 3px solid #B446FE !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNlcnJhbm8vQ3VzdG9taXovc3JjL2FwcC9zZWxlY3Rpb24vc2VsZWN0aW9uLnNjc3MiLCJzcmMvYXBwL3NlbGVjdGlvbi9zZWxlY3Rpb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7QUNFSjs7QURBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGlDQUFBO0FDR0o7O0FERkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGVBQUE7QUNJUjs7QURIUTtFQUNJLHlCQUFBO0FDS1o7O0FESFE7RUFDSSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNLWjs7QURIUTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtBQ0taOztBREhRO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDS1o7O0FEREE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQ0FBQTtBQ0lKOztBREhJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGVBQUE7QUNLUjs7QURKUTtFQUNJLHlCQUFBO0FDTVo7O0FESlE7RUFDSSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNNWjs7QURKUTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtBQ01aOztBRExZO0VBQ0ksNkJBQUE7VUFBQSxxQkFBQTtBQ09oQjs7QURKUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ01aOztBREZBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDT0o7O0FETkk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDUVI7O0FEUFE7RUFDSSx5QkFBQTtBQ1NaOztBRFBRO0VBQ0ksZ0NBQUE7QUNTWjs7QURMWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDT2hCOztBREhJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNLUjs7QURGQTtFQUNJLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0tKOztBREZBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURKSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDTVI7O0FESEE7RUFDSSxrQkFBQTtBQ01KOztBREpBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDT0o7O0FETkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1FSOztBRFBRO0VBQ0kseUJBQUE7QUNTWjs7QURQUTtFQUNJLDhCQUFBO0VBQ0Esc0JBQUE7QUNTWjs7QURQUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDU1o7O0FETEE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNRSjs7QURMQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ1FKOztBRE5BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDU0o7O0FEUkk7RUFDSSxvQ0FBQTtBQ1VSOztBRFJJO0VBQ0kseUJBQUE7QUNVUjs7QURQQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDVUo7O0FEVEk7RUFDSSx5QkFBQTtBQ1dSOztBRFRJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNXUjs7QURSUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDVVo7O0FEUEk7RUFDSSwyQ0FBQTtBQ1NSOztBRExBO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtBQ1FKOztBRFBJO0VBQ0ksa0JBQUE7QUNTUjs7QURQSTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDU1I7O0FEUlE7RUFDSSx5QkFBQTtBQ1VaOztBRFJRO0VBQ0ksMkNBQUE7QUNVWiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGlvbi9zZWxlY3Rpb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItc3RlcDIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMkUyRTJFMjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmg1IHtcbiAgICBtYXJnaW46IDE2cHggMCA4cHg7XG59XG4uY2hvaWNlcy1wYW5lbCB7XG4gICAgZmxleDogMTtcbiAgICBtYXgtd2lkdGg6IDM5MHB4O1xuICAgIC8vIG1pbi13aWR0aDogNDU1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuLnRhYnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRTJFMkUyRTI7XG4gICAgLnRhYiB7XG4gICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xuICAgICAgICB9XG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjQjQ0NkZFO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gICAgICAgIH1cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0byA0cHggYXV0bztcbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byBhdXRvIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi50YWJzLXNpZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UyRTJFMkUyO1xuICAgIC50YWIge1xuICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xuICAgICAgICB9XG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNCNDQ2RkU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgICAgICAgfVxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvIDRweCBhdXRvO1xuICAgICAgICAgICAgJi5taXJyb3Ige1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byBhdXRvIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLml0ZW0tY2hvaWNlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLmxhbmRzY2FwZXMge1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG4gICAgICAgIH1cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0I0NDZGRTtcbiAgICAgICAgICAgIC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgJi5pY29uIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn1cbi5nZW5lcmFsLWluZm9zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uaW5wdXQtbmFtZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDI7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgIGlucHV0IHtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgIG91dGxpbmUtb2Zmc2V0OiAwcHg7XG4gICAgfVxufVxuLmdlbmRlciwgLnBvc2l0aW9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG4uY2hvaWNlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIC5jaG9pY2Uge1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCA4cHggMCAwO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG4gICAgICAgIH1cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNCNDQ2RkU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG4uZ2VuZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb2xvcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uY29sb3Ige1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBtYXJnaW46IDAgMTZweCAwIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICYuc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjQjQ0NkZFICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICYjRkZGRkZGIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzEzMTMxMztcbiAgICB9XG59XG4uaW1nLWNob2ljZSB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiBhdXRvIDE2cHggMCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0IDogNDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAmLnBhbnQge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5zZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjQjQ0NkZFICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4udGV4dC1kaXNwbGF5ICB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgICAgXG4gICAgaGVpZ2h0OiBjYWxjKDUyMHB4IC0gNzVweCk7XG4gICAgaDUge1xuICAgICAgICBtYXJnaW46IDE2cHggMCA4cHg7XG4gICAgfVxuICAgIC50ZXh0LWl0ZW0ge1xuICAgICAgICBmb250LWZhbWlseTogXCJEYW5jaW5nXCI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMkUyRTI7XG4gICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgICAgICAgfVxuICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjQjQ0NkZFICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmNvbnRhaW5lci1zdGVwMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMkUyRTJFMjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5oNSB7XG4gIG1hcmdpbjogMTZweCAwIDhweDtcbn1cblxuLmNob2ljZXMtcGFuZWwge1xuICBmbGV4OiAxO1xuICBtYXgtd2lkdGg6IDM5MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4udGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFMkUyRTJFMjtcbn1cbi50YWJzIC50YWIge1xuICBoZWlnaHQ6IDcycHg7XG4gIHdpZHRoOiA3NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFicyAudGFiOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcbn1cbi50YWJzIC50YWIuc2VsZWN0ZWQge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNCNDQ2RkU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG4udGFicyAudGFiIC5pY29uIHtcbiAgd2lkdGg6IDE2cHg7XG4gIG1hcmdpbjogYXV0byBhdXRvIDRweCBhdXRvO1xufVxuLnRhYnMgLnRhYiAudGV4dCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50YWJzLXNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UyRTJFMkUyO1xufVxuLnRhYnMtc2lkZSAudGFiIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFicy1zaWRlIC50YWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xufVxuLnRhYnMtc2lkZSAudGFiLnNlbGVjdGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNCNDQ2RkU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG4udGFicy1zaWRlIC50YWIgLmljb24ge1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luOiBhdXRvIGF1dG8gNHB4IGF1dG87XG59XG4udGFicy1zaWRlIC50YWIgLmljb24ubWlycm9yIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuLnRhYnMtc2lkZSAudGFiIC50ZXh0IHtcbiAgbWFyZ2luOiAwIGF1dG8gYXV0byBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaXRlbS1jaG9pY2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5pdGVtLWNob2ljZXMgLmxhbmRzY2FwZXMge1xuICBwYWRkaW5nOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLml0ZW0tY2hvaWNlcyAubGFuZHNjYXBlczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG59XG4uaXRlbS1jaG9pY2VzIC5sYW5kc2NhcGVzLnNlbGVjdGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNCNDQ2RkU7XG59XG4uaXRlbS1jaG9pY2VzIC5sYW5kc2NhcGVzLmljb24gaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5pdGVtLWNob2ljZXMgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5nZW5lcmFsLWluZm9zIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmlucHV0LW5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAyO1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG4uaW5wdXQtbmFtZSBpbnB1dCB7XG4gIGhlaWdodDogMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgYm9yZGVyOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBvdXRsaW5lLW9mZnNldDogMHB4O1xufVxuXG4uZ2VuZGVyLCAucG9zaXRpb24ge1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG5cbi5jaG9pY2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cbi5jaG9pY2VzIC5jaG9pY2Uge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCA4cHggMCAwO1xufVxuLmNob2ljZXMgLmNob2ljZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG59XG4uY2hvaWNlcyAuY2hvaWNlLnNlbGVjdGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjQjQ0NkZFO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmNob2ljZXMgLmNob2ljZSBpbWcge1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmdlbmRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb2xvcnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29sb3Ige1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW46IDAgMTZweCAwIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNvbG9yLnNlbGVjdGVkIHtcbiAgYm9yZGVyOiAzcHggc29saWQgI0I0NDZGRSAhaW1wb3J0YW50O1xufVxuLmNvbG9yI0ZGRkZGRiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMzEzMTM7XG59XG5cbi5pbWctY2hvaWNlIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvIDE2cHggMCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW1nLWNob2ljZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG59XG4uaW1nLWNob2ljZSBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5pbWctY2hvaWNlLnBhbnQgaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi5pbWctY2hvaWNlLnNlbGVjdGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNCNDQ2RkUgIWltcG9ydGFudDtcbn1cblxuLnRleHQtZGlzcGxheSB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGhlaWdodDogY2FsYyg1MjBweCAtIDc1cHgpO1xufVxuLnRleHQtZGlzcGxheSBoNSB7XG4gIG1hcmdpbjogMTZweCAwIDhweDtcbn1cbi50ZXh0LWRpc3BsYXkgLnRleHQtaXRlbSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRhbmNpbmdcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UyRTJFMjtcbiAgbWFyZ2luOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50ZXh0LWRpc3BsYXkgLnRleHQtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG4udGV4dC1kaXNwbGF5IC50ZXh0LWl0ZW0uc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0I0NDZGRSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/selection/selection.ts":
/*!****************************************!*\
  !*** ./src/app/selection/selection.ts ***!
  \****************************************/
/*! exports provided: Selections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selections", function() { return Selections; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/fesm2015/cloudinary-angular-5.x.js");
/* harmony import */ var _services_cloudinary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cloudinary.service */ "./src/services/cloudinary.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");






let Selections = class Selections {
    constructor(snackBar, appComponent, cloudinary, cloudinaryService) {
        this.snackBar = snackBar;
        this.appComponent = appComponent;
        this.cloudinary = cloudinary;
        this.cloudinaryService = cloudinaryService;
        this.listLandscapes = [{
                public_id: "mugs/icons/empty"
            }];
        this.listCharacters = [];
        this.listHairs = [];
        this.listHat = [];
        this.listPants = [];
        this.listShirt = [];
        this.listSkins = [
            {
                name: "c",
                color: "#FAE6D5"
            },
            {
                name: "c2",
                color: "#F4CBAF"
            },
            {
                name: "c3",
                color: "#D4A383"
            },
            {
                name: "c4",
                color: "#63301E"
            },
        ];
        this.listHairColors = [
            {
                name: "c1",
                color: "#000000"
            },
            {
                name: "c2",
                color: "#F2C94C"
            },
            {
                name: "c3",
                color: "#F2994A"
            },
        ];
        this.display = "landscape";
        this.tabs = [
            {
                name: "Décor",
                type: "landscape",
                id: "photo"
            },
            {
                name: "Texte",
                type: "text",
                id: "text"
            },
        ];
        this.textTitle = [
            {
                title: "Sisters"
            },
            {
                title: "Besties"
            },
            {
                title: "Hollydays"
            },
            {
                title: "Happy Birthday"
            },
            {
                title: "Family"
            },
            {
                title: "Animals"
            },
            {
                title: "Baby"
            },
            {
                title: "Love"
            },
            {
                title: "Noël"
            },
            {
                title: "Anges"
            },
        ];
    }
    ngOnInit() {
        this.getCloudinary('landscape');
        this.getCloudinary('listMan');
        this.tabSide = this.appComponent.tabSide;
        this.listCharacters = this.appComponent.listCharacters;
        this.bgImage = this.appComponent.choiceLanscape;
        this.currentChar = this.appComponent.currentChar;
        this.textSide2 = this.appComponent.textSide2;
        this.tabs[0].selected = true;
    }
    addCharacter() {
        this.appComponent.addCharacter();
    }
    // Set tabs
    setActiveTab(item, array) {
        this.changeSide('side1');
        if (array === 'characters') {
            this.display = 'character';
            for (let index = 0; index < this.tabs.length; index++) {
                this.tabs[index].selected = false;
            }
            for (let i = 0; i < this.listCharacters.length; i++) {
                if (i === item) {
                    this.listCharacters[item].selected = true;
                    this.currentChar = this.listCharacters[item];
                    this.displayHairStyle(this.currentChar.hairColor);
                    this.displayShirtStyle('shirt' + this.currentChar.position);
                }
                else
                    this.listCharacters[i].selected = false;
            }
        }
        else {
            for (let index = 0; index < this.tabs.length; index++) {
                if (index === item) {
                    this.tabs[index].selected = true;
                    this.display = this.tabs[index].type;
                }
                else
                    this.tabs[index].selected = false;
            }
            for (let i = 0; i < this.listCharacters.length; i++) {
                this.listCharacters[i].selected = false;
            }
        }
    }
    changeSide(side) {
        this.tabSide = side;
        this.appComponent.tabSide = side;
    }
    changeBg(item, empty) {
        console.log('item', this.listLandscapes);
        for (let i = 0; i < this.listLandscapes.length; i++) {
            if (this.listLandscapes[i].public_id === item.public_id) {
                this.listLandscapes[i].selected = true;
            }
            else {
                this.listLandscapes[i].selected = false;
            }
        }
        ;
        if (empty) {
            this.appComponent.choiceLanscape.img = '';
        }
        else {
            this.appComponent.choiceLanscape.img = 'https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/' + item.public_id;
        }
    }
    changeTextTitle(item) {
        for (let i = 0; i < this.textTitle.length; i++) {
            if (this.textTitle[i].title === item.title) {
                this.textTitle[i].selected = true;
            }
            else {
                this.textTitle[i].selected = false;
            }
        }
        ;
        this.appComponent.textTitle = item.title;
    }
    // Get library img
    getCloudinary(src) {
        this.cloudinaryService.getCloudinary(src).subscribe((response) => {
            this.cloudinaryResponse = response.resources;
            switch (src) {
                case 'listMan':
                    this.listManImg();
                    break;
                case 'landscape':
                    this.listLandscapes = this.listLandscapes.concat(this.cloudinaryResponse);
                    break;
                default:
                    break;
            }
        }, (error) => { return console.log('error', error); });
    }
    listManImg() {
        this.cloudinaryResponse.forEach(element => {
            // Create each miniature list
            if (element.public_id.includes("hair")) {
                // create the hair name miniature
                var mySubString = element.public_id.substring(element.public_id.lastIndexOf("/") + 1, element.public_id.lastIndexOf("-"));
                element.name = mySubString;
                this.listHairs.push(element);
            }
            if (element.public_id.includes("shirt")) {
                // create the shirt name miniature
                var mySubString = element.public_id.substring(element.public_id.lastIndexOf("-") + 1);
                element.name = mySubString;
                this.listShirt.push(element);
            }
            if (element.public_id.includes("pant")) {
                // create the pant name miniature
                var mySubString = element.public_id.substring(element.public_id.lastIndexOf("/") + 1);
                element.name = mySubString;
                this.listPants.push(element);
            }
            if (element.public_id.includes("hat")) {
                // create the hat name miniature
                var mySubString = element.public_id.substring(element.public_id.lastIndexOf("/") + 1);
                element.name = mySubString;
                this.listHat.push(element);
            }
            this.displayHairStyle(this.currentChar.hairColor);
            this.displayShirtStyle('shirt' + this.currentChar.position);
        });
    }
    // Filter for display the good hair's colors && shirt position
    filterItemsOfHairs() {
        return this.listHairs.filter(x => x.display == true);
    }
    filterItemsOfShirt() {
        return this.listShirt.filter(x => x.display == true);
    }
    // change colors and style functions
    changeGender(item) {
        this.currentChar.gender = item;
    }
    changePosition(item) {
        this.currentChar.position = item;
    }
    changeSkin(item) {
        this.currentChar.skinColor = item.name;
    }
    changeHairColor(item) {
        this.currentChar.hairColor = item.name;
        this.displayHairStyle(this.currentChar.hairColor);
    }
    changeHairStyle(item) {
        this.currentChar.hairStyle = item.name;
    }
    changeShirt(item) {
        this.currentChar.shirt = item.name;
    }
    changePant(item) {
        this.currentChar.pant = item.name;
    }
    changeHat(item) {
        if (item === "empty")
            return this.currentChar.hat = item;
        this.currentChar.hat = item.name;
    }
    // Display the good style hair && shirt depend on the color choice
    displayHairStyle(color) {
        for (let i = 0; i < this.listHairs.length; i++) {
            if (this.listHairs[i].public_id.includes(color)) {
                this.listHairs[i].display = true;
            }
            else {
                this.listHairs[i].display = false;
            }
        }
        ;
    }
    displayShirtStyle(position) {
        for (let i = 0; i < this.listShirt.length; i++) {
            if (this.listShirt[i].public_id.includes(position)) {
                this.listShirt[i].display = true;
            }
            else {
                this.listShirt[i].display = false;
            }
        }
        ;
    }
};
Selections.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
    { type: _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_3__["Cloudinary"] },
    { type: _services_cloudinary_service__WEBPACK_IMPORTED_MODULE_4__["CloudinaryService"] }
];
Selections = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'selection',
        template: __webpack_require__(/*! raw-loader!./selection.html */ "./node_modules/raw-loader/index.js!./src/app/selection/selection.html"),
        styles: [__webpack_require__(/*! ./selection.scss */ "./src/app/selection/selection.scss")]
    })
], Selections);



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: cloudinary, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloudinary", function() { return cloudinary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/fesm2015/cloudinary-angular-5.x.js");
/* harmony import */ var cloudinary_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cloudinary-core */ "./node_modules/cloudinary-core/cloudinary-core.js");
/* harmony import */ var cloudinary_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cloudinary_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
// ####################################################################
// ######################## Externals #################################
// ####################################################################

// ***** @angular *****







// ***** Material *****

// ***** other *****
// ####################################################################
// ######################## Internal #################################
// ####################################################################
// ***** App *****
// ***** Pipe *****
const cloudinary = {
    Cloudinary: cloudinary_core__WEBPACK_IMPORTED_MODULE_7__
};
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_6__["CloudinaryModule"].forRoot(cloudinary_core__WEBPACK_IMPORTED_MODULE_7__, { cloud_name: 'deck4daxl' }),
        ],
        providers: [
            _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_6__["CloudinaryModule"],
        ],
        bootstrap: [],
        entryComponents: [],
        exports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/components/modals/blankModal/blank.scss":
/*!*****************************************************!*\
  !*** ./src/components/modals/blankModal/blank.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9tb2RhbHMvYmxhbmtNb2RhbC9ibGFuay5zY3NzIn0= */"

/***/ }),

/***/ "./src/components/modals/blankModal/blank.ts":
/*!***************************************************!*\
  !*** ./src/components/modals/blankModal/blank.ts ***!
  \***************************************************/
/*! exports provided: BlankDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankDialog", function() { return BlankDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let BlankDialog = class BlankDialog {
    constructor(dialogRef, snackBar, data) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.data = data;
    }
    ngOnInit() {
    }
    closeDialog() {
        this.dialogRef.close();
    }
};
BlankDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
BlankDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'blank',
        template: __webpack_require__(/*! raw-loader!./blank.html */ "./node_modules/raw-loader/index.js!./src/components/modals/blankModal/blank.html"),
        styles: [__webpack_require__(/*! ./blank.scss */ "./src/components/modals/blankModal/blank.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], BlankDialog);



/***/ }),

/***/ "./src/components/modals/modal.module.ts":
/*!***********************************************!*\
  !*** ./src/components/modals/modal.module.ts ***!
  \***********************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _blankModal_blank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blankModal/blank */ "./src/components/modals/blankModal/blank.ts");
/* harmony import */ var _app_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/shared.module */ "./src/app/shared.module.ts");




// ***** Dialogs *****


let ModalModule = class ModalModule {
};
ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _blankModal_blank__WEBPACK_IMPORTED_MODULE_4__["BlankDialog"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _app_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ],
        providers: [],
        bootstrap: [],
        entryComponents: [
            _blankModal_blank__WEBPACK_IMPORTED_MODULE_4__["BlankDialog"],
        ],
        exports: [
            _blankModal_blank__WEBPACK_IMPORTED_MODULE_4__["BlankDialog"],
        ]
    })
], ModalModule);



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
const environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/redux/index.ts":
/*!****************************!*\
  !*** ./src/redux/index.ts ***!
  \****************************/
/*! exports provided: reducers, INITIAL_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/redux/user.ts");

const reducers = {
    user: _user__WEBPACK_IMPORTED_MODULE_0__["userReducer"],
};
const INITIAL_STATE = {
    user: _user__WEBPACK_IMPORTED_MODULE_0__["userInitial"],
};


/***/ }),

/***/ "./src/redux/user.ts":
/*!***************************!*\
  !*** ./src/redux/user.ts ***!
  \***************************/
/*! exports provided: CREATE_USER, SELECT_USER, userInitial, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_USER", function() { return CREATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_USER", function() { return SELECT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInitial", function() { return userInitial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
// ***** Actions *****
const CREATE_USER = 'CREATE_USER';
const SELECT_USER = 'SELECT_USER';
// ***** Initial data *****
const userInitial = {
    id: null,
    firstname: null,
    lastname: null,
    email: null,
    tel: null,
    description: null,
};
// ***** Reducer *****
function userReducer(state, action) {
    switch (action.type) {
        case CREATE_USER:
            action.payload.createdAt = new Date();
            return action.payload;
        case SELECT_USER:
            return action.payload;
        default: return state;
    }
}


/***/ }),

/***/ "./src/services/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/services/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/services/auth.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuardService);



/***/ }),

/***/ "./src/services/auth.service.ts":
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");



let AuthService = class AuthService {
    constructor(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }
    isAuthenticated() {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }
};
AuthService.ctorParameters = () => [
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/services/cloudinary.service.ts":
/*!********************************************!*\
  !*** ./src/services/cloudinary.service.ts ***!
  \********************************************/
/*! exports provided: CloudinaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryService", function() { return CloudinaryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/fesm2015/cloudinary-angular-5.x.js");




let CloudinaryService = class CloudinaryService {
    constructor(http, cloudinary) {
        this.http = http;
        this.cloudinary = cloudinary;
    }
    getCloudinary(tag) {
        let url = this.cloudinary.url(tag + '.json', { type: "list" });
        return this.http.get(url, { responseType: "json" });
    }
};
CloudinaryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_3__["Cloudinary"] }
];
CloudinaryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CloudinaryService);



/***/ }),

/***/ "./src/services/services.module.ts":
/*!*****************************************!*\
  !*** ./src/services/services.module.ts ***!
  \*****************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/services/auth-guard.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _services_cloudinary_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/cloudinary.service */ "./src/services/cloudinary.service.ts");
// ####################################################################
// ######################## Externals #################################
// ####################################################################

// ***** @angular *****



// ***** Services *****



let ServiceModule = class ServiceModule {
};
ServiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        ],
        providers: [
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_cloudinary_service__WEBPACK_IMPORTED_MODULE_6__["CloudinaryService"]
        ],
        bootstrap: [],
        entryComponents: [],
        exports: []
    })
], ServiceModule);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/simonserrano/Customiz/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map