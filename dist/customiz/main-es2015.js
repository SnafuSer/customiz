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

module.exports = "<div class=\"container-app\"  *ngIf=\"display === true\">\n\n    <selection></selection>\n    <preview class=\"capture-id\"></preview>\n\n</div>\n<!-- <button (click)=\"myClickFunction()\">Click</button> -->\n<div class=\"loader-container\" *ngIf=\"loading\">\n    <div class=\"loader\">\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\n          <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\n        </svg>\n      </div>\n    <h4 class=\"title\">{{ loadingText }}</h4>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/preview/preview.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/preview/preview.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"preview-panel\">\n    <div class=\"container-preview\" id=\"container-preview\" *ngIf=\"appComponent.tabSide === 'side1'\">\n        <img class=\"bg-mug\" src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616725/mugs/bg-mug/mug.png\" alt=\"\">\n        <img class=\"bg-image\" [src]=\"bgImage?.img\" alt=\"\">\n        <div class=\"textTitle\">{{ appComponent?.textTitle }}</div>\n        \n        <!-- <div [class]=\"'container-charac ' + character?.type + i +' length' + listCharacters?.length\" [ngClass]=\"{'front': character?.position === '2'}\" *ngFor=\"let character of listCharacters; let i = index\"> -->\n        <div [class]=\"'container-charac character' + i +' length' + listCharacters?.length\" [ngClass]=\"{'front': character?.position === '2'}\" *ngFor=\"let character of listCharacters; let i = index\">\n            <div *ngIf=\"character.type === 'character'; else elseBlock\">\n                <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/'+ character?.gender +'/clothes/seat/access/' + character?.access + '.png'\" alt=\"\">\n    \n                <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1615539532/mugs/'+ character?.gender +'/silhouette/seat/' + character?.gender + character?.position + '-' + character?.skinColor + '.png'\" alt=\"\">\n                <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/'+ character?.gender +'/clothes/seat/pant/' + character?.pant + '.png'\" alt=\"\">\n                <!-- <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/'+ character?.gender +'/clothes/seat/shirt/shirt' + character?.position + '-' + character?.shirt + '.png'\" alt=\"\"> -->\n                <!-- mix-blend-mode: multiply; -->\n                <!-- <canvas #myCanvas width=\"170\" height=\"170\" id=\"barCanvaslist{{i}}\"></canvas> -->\n                <div class=\"svg\" [id]=\"i\" [inlineSVG]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/' + character?.gender + '/clothes/seat/shirt/' + character?.shirt + character?.position + '.svg'\" [onSVGLoaded]=\"myFunc\"></div>\n    \n                <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/'+ character?.gender +'/clothes/seat/hair/' + character?.hairStyle + '-' + character?.hairColor + '.png'\" alt=\"\">\n            </div>\n            <ng-template #elseBlock>\n                <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/pets/seat/'+ character?.gender +'.png'\" alt=\"\">\n            </ng-template>\n            <span class=\"name-charac\">{{character.name}}</span>\n        </div>\n        <div class=\"zoomIn\">\n            <img class=\"icon\" (click)=\"openModal = true\" src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1621269671/mugs/icons/zoomIn.png\" alt=\"\">\n        </div>\n    </div>\n    <!-- https://res.cloudinary.com/deck4daxl/image/upload/v1615539532/mugs/male/silhouette/seat/male2-c4.png -->\n    <div class=\"container-preview\" *ngIf=\"appComponent.tabSide === 'side2'\">\n        <img class=\"bg-mug mirror\" src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616725/mugs/bg-mug/mug.png\" alt=\"\">\n        <div id=\"textTitle2\" [ngStyle]=\"{fontSize: appComponent?.textSide2.size, lineHeight: appComponent?.textSide2.lineHeight}\" class=\"textTitle2\">\n            <span *ngIf=\"appComponent?.textSide2.text.length > 0\">{{ appComponent?.textSide2.text }}</span>\n            <img *ngIf=\"appComponent?.textSide2.background\" [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/'+ appComponent?.textSide2.background\" alt=\"\">\n        </div>\n    </div>\n    <!-- <img src=\"../assets/svg/shirt.svg\" alt=\"\"> -->\n    <button class=\"btn-cart\" (click)=\"export()\">Ajouter au panier</button>\n</div>\n\n<div class=\"overlay\" *ngIf=\"openModal === true\">\n    <div class=\"modal\">\n        <div class=\"container-preview modalView\" id=\"container-preview\" *ngIf=\"appComponent.tabSide === 'side1'\">\n            <img class=\"bg-mug\" src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616725/mugs/bg-mug/mug.png\" alt=\"\">\n            <img class=\"bg-image\" [src]=\"bgImage?.img\" alt=\"\">\n            <div class=\"textTitle\">{{ appComponent?.textTitle }}</div>\n            <!-- <div [class]=\"'container-charac ' + character.type + i +' length' + listCharacters.length\" *ngFor=\"let character of listCharacters; let i = index\" (click)=\"setActiveTab(i)\"> -->\n            <div [class]=\"'container-charac character' + i +' length' + listCharacters?.length\" [ngClass]=\"{'front': character?.position === '2'}\" *ngFor=\"let character of listCharacters; let i = index\">\n                <div *ngIf=\"character.type === 'character'; else elseBlock\">\n                    <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/'+ character?.gender +'/clothes/seat/access/' + character?.access + '.png'\" alt=\"\">\n        \n                    <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1615539532/mugs/'+ character?.gender +'/silhouette/seat/' + character?.gender + character?.position + '-' + character?.skinColor + '.png'\" alt=\"\">\n                    <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/'+ character?.gender +'/clothes/seat/pant/' + character?.pant + '.png'\" alt=\"\">\n                    <!-- <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/'+ character?.gender +'/clothes/seat/shirt/shirt' + character?.position + '-' + character?.shirt + '.png'\" alt=\"\"> -->\n                    <!-- mix-blend-mode: multiply; -->\n                    <!-- <canvas #myCanvas width=\"170\" height=\"170\" id=\"barCanvaslist{{i}}\"></canvas> -->\n                    <div class=\"svg\" [id]=\"i\" [inlineSVG]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/' + character?.gender + '/clothes/seat/shirt/' + character?.shirt + character?.position + '.svg'\" [onSVGLoaded]=\"myFunc\"></div>\n        \n                    <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/'+ character?.gender +'/clothes/seat/hair/' + character?.hairStyle + '-' + character?.hairColor + '.png'\" alt=\"\">\n                </div>\n                <ng-template #elseBlock>\n                    <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/mugs/pets/seat/'+ character?.gender +'.png'\" alt=\"\">\n                </ng-template>\n                <span class=\"name-charac\">{{character.name}}</span>\n            </div>\n        </div>\n        <!-- https://res.cloudinary.com/deck4daxl/image/upload/v1615539532/mugs/male/silhouette/seat/male2-c4.png -->\n        <div class=\"container-preview modal\" *ngIf=\"appComponent.tabSide === 'side2'\">\n            <img class=\"bg-mug mirror\" src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616725/mugs/bg-mug/mug.png\" alt=\"\">\n            <div id=\"textTitle2\" [ngStyle]=\"{fontSize: appComponent?.textSide2.size, lineHeight: appComponent?.textSide2.lineHeight}\" class=\"textTitle2\">\n                <span *ngIf=\"appComponent?.textSide2.text.length > 0\">{{ appComponent?.textSide2.text }}</span>\n                <img *ngIf=\"appComponent?.textSide2.background\" [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614611242/'+ appComponent?.textSide2.background\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"close\" (click)=\"openModal = false\">\n            X\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/selection/selection.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/selection/selection.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-step2\">\n  <div class=\"tabs\">\n    <!-- <div class=\"tab\" [ngClass]=\"{'selected': item.selected === true}\" (click)=\"setActiveTab(i)\">\n      Décor\n    </div>\n    <div class=\"tab\" [ngClass]=\"{'selected': item.selected === true}\" (click)=\"setActiveTab(i)\">\n      Texte\n    </div> -->\n    <div class=\"tab\" [ngClass]=\"{'selected': item.selected === true}\" *ngFor=\"let item of tabs; let i = index\" (click)=\"setActiveTab(i, 'tabs')\">\n      <img class=\"icon\" [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614616677/mugs/icons/' + item.id + '.png'\" alt=\"\">\n      <span class=\"text\">\n        {{ item?.name }}\n      </span>\n    </div>\n    <div class=\"tab\" [ngClass]=\"{'selected': item.selected === true}\" *ngFor=\"let item of listCharacters; let i = index\" (click)=\"setActiveTab(i, item.type)\">\n      <img class=\"icon\" src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616677/mugs/icons/user.png\" alt=\"\">\n      <span class=\"text\">\n        {{ item?.name }}\n      </span>\n    </div>\n    <div class=\"tab\" *ngIf=\"listCharacters.length < 4\" (click)=\"addCharacter()\">\n      <img class=\"icon\" src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616677/mugs/icons/add.png\" alt=\"\">\n      <span class=\"text\">\n        Ajouter\n      </span>\n    </div>\n  </div>\n  <div class=\"choices-panel\">\n    <div *ngIf=\"display === 'text'\">\n      <div class=\"tabs-side\">\n        <div class=\"tab\" (click)=\"changeSide('side1')\" [ngClass]=\"{'selected': tabSide === 'side1'}\">\n          <img class=\"icon mirror\" src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1615112742/mugs/icons/mug.png\" alt=\"\">\n          <span class=\"text\">\n            Face 1\n          </span>\n        </div>\n        <div class=\"tab\" (click)=\"changeSide('side2')\" [ngClass]=\"{'selected': tabSide === 'side2'}\">\n          <img class=\"icon\" src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1615112742/mugs/icons/mug.png\" alt=\"\">\n          <span class=\"text\">\n            Face 2\n          </span>\n        </div>\n      </div>\n      <div class=\"text-display\" *ngIf=\"tabSide === 'side1'\">\n        <h5>Vous pouvez selectionner un titre pour l'image</h5>\n        <div class=\"text-item\" [ngClass]=\"{'selected': text.selected === true}\" *ngFor=\"let text of textTitle\" (click)=\"changeTextTitle(text)\" >\n          {{ text.title }}\n        </div>\n      </div>\n      <div class=\"text-display\" *ngIf=\"tabSide === 'side2'\">\n        <h5>Laissez un texte si vous le souhaitez (max 200 charactères)</h5>\n        <textarea name=\"text\" [(ngModel)]=\"textSide2.text\" (ngModelChange)=\"changeTextSide2()\" maxlength=\"200\" id=\"\" cols=\"42\" rows=\"4\"></textarea>\n        <!-- <button class=\"btn-cart\" (click)=\"changeTextSide2()\">Changer</button> -->\n        <h5>Ou choisissez en un parmis la librairie</h5>\n        <div class=\"text2-lib\">\n          <div class=\"item-lib\" *ngFor=\"let quote of listQuotes; let i = index\" (click)=\"changeTextSide2(quote)\">\n            <img class=\"landscape-bg\" \n            [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/' + quote?.public_id + '.png'\" \n            alt=\"\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"display === 'landscape'\">\n      <h5>Vous pouvez selectionner un fond pour l'image</h5>\n      <div class=\"item-choices\">\n        <div class=\"landscapes\" [ngClass]=\"{'selected': landscape.selected === true, 'icon': landscape?.public_id === 'mugs/icons/empty'}\" *ngFor=\"let landscape of listLandscapes; let i = index\">\n            <img class=\"landscape-bg\" \n            [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/' + landscape?.public_id + '.png'\" \n            (click)=\"landscape?.public_id === 'mugs/icons/empty' ? changeBg(landscape, true) : changeBg(landscape)\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"display === 'character'\">\n      <div class=\"delete-charac\" (click)=\"delete()\">X Supprimer ce personnage</div>\n      <div class=\"general-infos row\">\n        <div class=\"input-name\">\n          <label class=\"label\" for=\"Nom\">Nom</label>\n          <input type=\"text\" *ngIf=\"listCharacters.length <= 3\" name=\"Nom\" id=\"Nom\" maxlength=\"12\" [(ngModel)]=\"currentChar.name\">\n          <input type=\"text\" *ngIf=\"listCharacters.length > 3\" name=\"Nom\" id=\"Nom\" maxlength=\"8\" [(ngModel)]=\"currentChar.name\">\n        </div>\n        <div class=\"gender\">\n          <span class=\"label\">Genre</span>\n          <div class=\"gender-choices choices\">\n            <div class=\"choice\" (click)=\"changeGender('female')\" [ngClass]=\"{'selected': currentChar.gender === 'female'}\">\n              <img src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616677/mugs/icons/female.png\" alt=\"\">\n            </div>\n            <div class=\"choice\" (click)=\"changeGender('male')\" [ngClass]=\"{'selected': currentChar.gender === 'male'}\">\n              <img src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616677/mugs/icons/male.png\" alt=\"\">\n            </div>\n            <div class=\"choice\" (click)=\"changeGender('animal')\" [ngClass]=\"{'selected': currentChar.gender === 'animal'}\">\n              <img src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616677/mugs/icons/animal.png\" alt=\"\">\n            </div>\n          </div>\n        </div>\n        <div class=\"position\">\n          <span class=\"label\">Position</span>\n          <div class=\"position-choices choices\">\n            <span class=\"action\" (click)=\"changePositionMore()\">Changer</span>\n            <!-- <div class=\"choice\" (click)=\"changePosition('1')\" [ngClass]=\"{'selected': currentChar.position === '1'}\">\n              <img src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/mugs/icons/silhouette-1.png\" alt=\"\">\n            </div>\n            <div class=\"choice\" (click)=\"changePosition('2')\" [ngClass]=\"{'selected': currentChar.position === '2'}\">\n              <img src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/mugs/icons/silhouette-2.png\" alt=\"\">\n            </div> -->\n          </div>\n        </div>\n      </div>\n      <div class=\"scrollable pets\" *ngIf=\"isPets\">\n        <div class=\"img-choice pets\" \n            *ngFor=\"let item of listPets\" \n            [ngClass]=\"{'selected': item.public_id.includes(item.gender)}\"\n            (click)=\"changePet(item)\">\n              <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/' + item.public_id\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"scrollable\" *ngIf=\"!isPets\">\n        <div class=\"skin-infos row\">\n          <span class=\"label\">Couleur de peau</span>\n          <div class=\"colors\">\n            <div class=\"color\" *ngFor=\"let item of listSkins\" \n            [ngStyle]=\"{'background-color': item.color}\" \n            [ngClass]=\"{'selected': item.name === currentChar.skinColor}\"\n            (click)=\"changeSkin(item)\"></div>\n          </div>\n        </div>\n        <div class=\"hairs-colors row\">\n          <span class=\"label\">Couleur de cheuveux</span>\n          <div class=\"colors\">\n            <div class=\"color\" \n            *ngFor=\"let item of listHairColors\" \n            [ngStyle]=\"{'background-color': item.color}\" \n            [ngClass]=\"{'selected': item.name === currentChar.hairColor}\"\n            (click)=\"changeHairColor(item)\"></div>\n          </div>\n        </div>\n        <div class=\"hairs-style row\">\n          <span class=\"label\">Coupe de cheuveux</span>\n          <div class=\"colors\">\n            <div class=\"img-choice\" \n            *ngFor=\"let item of filterItemsOfHairs()\" \n            [ngClass]=\"{'selected': item.public_id.includes(currentChar.hairStyle)}\"\n            (click)=\"changeHairStyle(item)\">\n                <img *ngIf=\"item.display === true\" [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/' + item.public_id\" alt=\"\">\n            </div>\n          </div>\n        </div>\n        <div class=\"shirt-style row\">\n          <span class=\"label\">Haut</span>\n          <div class=\"colors\">\n            <div class=\"img-choice\" \n            *ngFor=\"let item of filterItemsOfShirt()\" \n            [ngClass]=\"{'selected': item.name === currentChar.shirt}\"\n            (click)=\"changeShirt(item)\">\n                <img *ngIf=\"item.display === true\" [src]=\"item.public_id\" alt=\"\">\n            </div>\n          </div>\n        </div>\n        <div class=\"shirt-color row\">\n          <span class=\"label\">Couleur du haut</span>\n          <div class=\"colors\">\n            <div class=\"img-choice pattern\" \n            *ngFor=\"let item of listShirtColors\" \n            [ngStyle]=\"{'background-image': 'url(' + item.color + ')'}\" \n            [ngClass]=\"{'selected': item.color === currentChar.shirtColor}\"\n            (click)=\"changeShirtColor(item)\">\n                <!-- <img  [src]=\"item.color\" alt=\"\"> -->\n            </div>\n          </div>\n        </div>\n        <div class=\"pant-style row\">\n          <span class=\"label\">Pantalon</span>\n          <div class=\"colors\">\n            <div class=\"img-choice pant\" \n            *ngFor=\"let item of listPants\" \n            [ngClass]=\"{'selected': item.public_id.includes(currentChar.pant)}\"\n            (click)=\"changePant(item)\">\n                <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/' + item.public_id\" alt=\"\">\n            </div>\n          </div>\n        </div>\n        <div class=\"access-style row\">\n          <span class=\"label\">Accessoire</span>\n          <div class=\"colors\">\n            <div class=\"img-choice\" \n            [ngClass]=\"{'selected': currentChar.access === 'empty'}\"\n            (click)=\"changeAccess('empty')\">\n                <img src=\"https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/mugs/icons/empty.png\" alt=\"\">\n            </div>\n            <div class=\"img-choice\" \n            *ngFor=\"let item of listAccess\" \n            [ngClass]=\"{'selected': item.public_id.includes(currentChar.access)}\"\n            (click)=\"changeAccess(item)\">\n                <img [src]=\"'https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/' + item.public_id\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

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
                    number: 0,
                    gender: "female",
                    hairColor: "c1",
                    hairStyle: "hair5",
                    access: "empty",
                    name: "Puce",
                    pant: "pant1",
                    position: "1",
                    selected: false,
                    shirt: "tshirt",
                    shirtColor: {
                        name: "c7",
                        color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147465/mugs/male/clothes/seat/shirt/red_zqvhvf.png"
                    },
                    skinColor: "c2",
                    type: "character",
                },
                {
                    number: 1,
                    gender: "male",
                    hairColor: "c1",
                    hairStyle: "hair1",
                    access: "empty",
                    name: "Snafu",
                    pant: "pant2",
                    position: "1",
                    selected: false,
                    shirt: "tshirt",
                    shirtColor: {
                        name: "c2",
                        color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147465/mugs/male/clothes/seat/shirt/blue_yg22vl.png"
                    },
                    skinColor: "c2",
                    type: "character",
                }
            ],
            landscape: { img: "https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/mugs/paysage/mountain.png" },
            textTitle: "Love",
            textSide2: { text: "Aloha que tal",
                size: "35px",
                lineHeight: "75px",
                background: ""
            }
        };
        this.createhorsLigne();
    }
    ngOnInit() {
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
        if (event.data === "Item added") {
            this.loading = false;
        }
    }
    createhorsLigne() {
        this.listCharacters = this.options.characters;
        this.choiceLanscape = this.options.landscape;
        this.textTitle = this.options.textTitle;
        this.textSide2 = this.options.textSide2;
        this.currentChar = this.listCharacters[0];
        this.display = true;
        this.loading = false;
    }
    createListcharacters() {
        this.listCharacters = [{
                number: 0,
                type: "character",
                name: "Perso 1",
                gender: "male",
                position: "1",
                skinColor: "c",
                hairColor: "c1",
                hairStyle: "hair2",
                shirt: "tshirt",
                shirtColor: {
                    name: "c1",
                    color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620039278/mugs/male/clothes/seat/shirt/plaid.png"
                },
                pant: "pant1",
                access: "empty",
            },
            {
                number: 1,
                type: "character",
                name: "Perso 2",
                gender: "female",
                position: "2",
                skinColor: "c2",
                hairColor: "c2",
                hairStyle: "hair1",
                shirt: "tshirt",
                shirtColor: {
                    name: "c2",
                    color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147465/mugs/male/clothes/seat/shirt/blue_yg22vl.png"
                },
                pant: "pant1",
                access: "empty",
            }];
        this.choiceLanscape = {
            img: "https://res.cloudinary.com/deck4daxl/image/upload/v1614610615/mugs/paysage/campaign_yodqct.png"
        };
    }
    addCharacter() {
        this.listCharacters.push({
            number: this.listCharacters.length,
            type: "character",
            name: "Perso " + (this.listCharacters.length + 1),
            gender: "male",
            position: "1",
            skinColor: "c",
            hairColor: "c1",
            hairStyle: "hair2",
            shirt: "tshirt",
            shirtColor: {
                name: "c3",
                color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147466/mugs/male/clothes/seat/shirt/green_ewuysi.png"
            },
            pant: "pant1",
            access: "empty",
        });
        this.currentChar = this.listCharacters[this.listCharacters.length];
    }
    export() {
        this.loadingText = "Création du design en cours...";
        this.loading = true;
        let test = {
            textSide2: this.textSide2,
            textTitle: this.textTitle,
            landscape: this.choiceLanscape,
            characters: this.listCharacters
        };
        let message = JSON.stringify(test);
        console.log('ok', test);
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
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/lib_esmodule/index.js");







// ***** Redux *****



// ***** App *****


// ***** Components *****

// ***** Pages *****


// ***** Libs *****

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
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_15__["InlineSVGModule"].forRoot(),
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

module.exports = ".preview-panel {\n  background-color: #FAFAFA;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.container-preview {\n  -webkit-transform: translateY(-40px);\n          transform: translateY(-40px);\n}\n\n.bg-mug {\n  position: absolute;\n  width: 460px;\n  top: 50px;\n  margin-left: 20px;\n}\n\n.bg-mug.mirror {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n\n.bg-image {\n  width: 270px;\n  top: 170px;\n  position: absolute;\n  margin-left: 45px;\n  mix-blend-mode: multiply;\n}\n\n.container-charac {\n  position: absolute;\n  top: 205px;\n  cursor: pointer;\n}\n\n.container-charac.front {\n  z-index: 100 !important;\n}\n\n.container-charac img, .container-charac canvas {\n  height: 100%;\n  position: absolute;\n}\n\n.container-charac.length2 {\n  height: 200px;\n}\n\n.container-charac.length2.character0 {\n  margin-left: 30px;\n  z-index: 9;\n}\n\n.container-charac.length2.character1 {\n  margin-left: 115px;\n  z-index: 8;\n}\n\n.container-charac.length3 {\n  height: 170px;\n  top: 225px;\n}\n\n.container-charac.length3::ng-deep svg {\n  width: 170px;\n}\n\n.container-charac.length3.character0 {\n  margin-left: 5px;\n  z-index: 9;\n}\n\n.container-charac.length3.character1 {\n  margin-left: 75px;\n  z-index: 8;\n}\n\n.container-charac.length3.character2 {\n  margin-left: 155px;\n  z-index: 7;\n}\n\n.container-charac.length3 .name-charac {\n  margin-left: 95px;\n  font-size: 16px;\n}\n\n.container-charac.length4 {\n  height: 130px;\n  top: 275px;\n}\n\n.container-charac.length4::ng-deep svg {\n  width: 130px;\n}\n\n.container-charac.length4.character0 {\n  margin-left: 15px;\n  z-index: 9;\n}\n\n.container-charac.length4.character1 {\n  margin-left: 65px;\n  z-index: 8;\n  top: 280px;\n}\n\n.container-charac.length4.character2 {\n  margin-left: 130px;\n  z-index: 7;\n}\n\n.container-charac.length4.character3 {\n  margin-left: 200px;\n  z-index: 6;\n  top: 280px;\n}\n\n.container-charac.length4 .name-charac {\n  margin-left: 65px;\n  font-size: 15px;\n}\n\n.container-charac.length5 {\n  height: 100px;\n  top: 275px;\n}\n\n.container-charac.length5::ng-deep svg {\n  width: 100px;\n}\n\n.container-charac.length5.character0 {\n  margin-left: 50px;\n  z-index: 9;\n}\n\n.container-charac.length5.character1 {\n  margin-left: 76px;\n  z-index: 8;\n  top: 280px;\n}\n\n.container-charac.length5.character2 {\n  margin-left: 145px;\n  z-index: 7;\n}\n\n.container-charac.length5.character3 {\n  margin-left: 200px;\n  z-index: 6;\n  top: 280px;\n}\n\n.container-charac.length5.character4 {\n  margin-left: 200px;\n  z-index: 5;\n}\n\n.container-charac.length5 .name-charac {\n  margin-left: 50px;\n  font-size: 14px;\n}\n\n.name-charac {\n  position: absolute;\n  bottom: -25px;\n  margin-left: 110px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  font-family: \"Dancing\";\n  font-size: 18px;\n  white-space: nowrap;\n  text-align: center;\n  color: #454545;\n  mix-blend-mode: multiply;\n  text-shadow: 1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;\n}\n\n.textTitle {\n  font-family: \"Dancing\";\n  font-weight: bolder;\n  font-size: 38px;\n  position: absolute;\n  top: 127px;\n  margin-left: 39px;\n  width: 290px;\n  text-align: center;\n  color: #454545;\n  mix-blend-mode: multiply;\n}\n\n.textTitle2 {\n  font-family: \"Dancing\";\n  font-weight: bolder;\n  position: absolute;\n  top: 125px;\n  text-align: center;\n  margin-left: 195px;\n  width: 250px;\n  text-align: center;\n  color: #454545;\n  mix-blend-mode: multiply;\n  /* width: auto; */\n  text-overflow: ellipsis;\n  white-space: break-spaces;\n  overflow: hidden;\n  top: 50%;\n  -webkit-transform: translateY(calc(-50% + 25px));\n          transform: translateY(calc(-50% + 25px));\n  max-height: 340px;\n}\n\n.textTitle2 img {\n  width: 100%;\n}\n\n.btn-cart {\n  margin: auto 16px 8px auto;\n  background-color: #141414;\n  border: 0px;\n  line-height: 50px;\n  padding: 0 24px;\n  color: white;\n  font-family: arial;\n  font-size: 16px;\n  border-radius: 15px;\n  cursor: pointer;\n  z-index: 9;\n}\n\n.svg {\n  position: absolute;\n}\n\n.svg::ng-deep svg {\n  width: 200px;\n}\n\n.svg::ng-deep svg .imageSvg {\n  content: url(\"https://res.cloudinary.com/deck4daxl/image/upload/v1618934770/mugs/male/clothes/seat/shirt/basicPlaid_hxqpdj.png\");\n}\n\n.zoomIn {\n  display: -webkit-box;\n  display: flex;\n  position: absolute;\n  width: 460px;\n  height: 460px;\n  top: 50px;\n  margin-left: 20px;\n  z-index: 99999;\n  background-color: rgba(255, 255, 255, 0);\n}\n\n.zoomIn .icon {\n  display: none;\n  cursor: pointer;\n}\n\n.zoomIn:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.zoomIn:hover .icon {\n  display: block;\n  margin: auto;\n  height: 50px;\n}\n\n.overlay {\n  display: -webkit-box;\n  display: flex;\n  position: absolute;\n  z-index: 99999;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal {\n  width: 620px;\n  height: 520px;\n  background-color: white;\n  margin: auto;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal .container-preview.modalView {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3);\n  position: relative;\n  top: -20px;\n}\n\n.modal .close {\n  position: absolute;\n  top: -16px;\n  right: -16px;\n  background-color: #141414;\n  padding: 4px;\n  border: 1px solid #141414;\n  border-radius: 15px;\n  width: 32px;\n  height: 32px;\n  color: white;\n  text-align: center;\n  line-height: 32px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.modal .close:hover {\n  background-color: #FFF;\n  color: #141414;\n  border: 2px solid #141414;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNlcnJhbm8vQ3VzdG9taXovc3JjL2FwcC9wcmV2aWV3L3ByZXZpZXcuc2NzcyIsInNyYy9hcHAvcHJldmlldy9wcmV2aWV3LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxvQ0FBQTtVQUFBLDRCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QURGSTtFQUNJLDZCQUFBO1VBQUEscUJBQUE7QUNJUjs7QURBQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FDR0o7O0FEQUE7RUFNSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRko7O0FETUk7RUFDSSx1QkFBQTtBQ0pSOztBRE1JO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDSlI7O0FETUk7RUFDSSxhQUFBO0FDSlI7O0FES1E7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUNIWjs7QURLUTtFQUNJLGtCQUFBO0VBRUEsVUFBQTtBQ0paOztBRE9JO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUNMUjs7QURPWTtFQUNJLFlBQUE7QUNMaEI7O0FEUVE7RUFDSSxnQkFBQTtFQUVBLFVBQUE7QUNQWjs7QURTUTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ1BaOztBRFVRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDUlo7O0FEVVE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNSWjs7QURXSTtFQUNJLGFBQUE7RUFDQSxVQUFBO0FDVFI7O0FEV1k7RUFDSSxZQUFBO0FDVGhCOztBRFlRO0VBQ0ksaUJBQUE7RUFFQSxVQUFBO0FDWFo7O0FEYVE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDWFo7O0FEYVE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNYWjs7QURhUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNYWjs7QURhUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ1haOztBRGNJO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUNaUjs7QURjWTtFQUNJLFlBQUE7QUNaaEI7O0FEZVE7RUFDSSxpQkFBQTtFQUVBLFVBQUE7QUNkWjs7QURnQlE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDZFo7O0FEZ0JRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDZFo7O0FEZ0JRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ2RaOztBRGdCUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ2RaOztBRGdCUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ2RaOztBRG1CQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSx1SUFBQTtBQ2hCSjs7QURrQkE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FDZko7O0FEaUJBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxnREFBQTtVQUFBLHdDQUFBO0VBRUEsaUJBQUE7QUNoQko7O0FEaUJJO0VBQ0ksV0FBQTtBQ2ZSOztBRG1CQTtFQUNJLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNoQko7O0FEbUJBO0VBQ0ksa0JBQUE7QUNoQko7O0FEa0JRO0VBQ0ksWUFBQTtBQ2hCWjs7QURpQlk7RUFDSSxnSUFBQTtBQ2ZoQjs7QUR1QkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHdDQUFBO0FDcEJKOztBRHFCSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDbkJSOztBRHFCSTtFQUNJLDBDQUFBO0FDbkJSOztBRG9CUTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ2xCWjs7QURzQkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUNuQko7O0FEcUJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ2xCSjs7QURtQkk7RUFDSSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDakJSOztBRG1CSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ2pCUjs7QURrQlE7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ2hCWiIsImZpbGUiOiJzcmMvYXBwL3ByZXZpZXcvcHJldmlldy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXctcGFuZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyLXByZXZpZXcge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XG59XG4uYmctbXVnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQ2MHB4O1xuICAgIHRvcDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAmLm1pcnJvciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICB9XG59XG5cbi5iZy1pbWFnZSB7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIHRvcDogMTcwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICAgIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbn1cblxuLmNvbnRhaW5lci1jaGFyYWMge1xuICAgICY6bnRoLWNoaWxkKDJuKzApIHtcbiAgICAgICAgLm5hbWUtY2hhcmFjIHtcbiAgICAgICAgICAgIC8vIGJvdHRvbTogLTM1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC8vICY6aG92ZXIge1xuICAgIC8vICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbiAgICAvLyB9XG4gICAgJi5mcm9udCB7XG4gICAgICAgIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpbWcsIGNhbnZhcyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICAmLmxlbmd0aDIge1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAmLmNoYXJhY3RlcjAge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICB9XG4gICAgICAgICYuY2hhcmFjdGVyMSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTE1cHg7XG4gICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogMTIwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiA4O1xuICAgICAgICB9XG4gICAgfVxuICAgICYubGVuZ3RoMyB7XG4gICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICAgIHRvcDogMjI1cHg7XG4gICAgICAgICY6Om5nLWRlZXAge1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5jaGFyYWN0ZXIwIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICB9XG4gICAgICAgICYuY2hhcmFjdGVyMSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNzVweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDg7XG4gICAgICAgICAgICAvLyB0b3A6IDI2MHB4O1xuICAgICAgICB9XG4gICAgICAgICYuY2hhcmFjdGVyMiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTU1cHg7XG4gICAgICAgICAgICB6LWluZGV4OiA3O1xuICAgICAgICB9XG4gICAgICAgIC5uYW1lLWNoYXJhYyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOTVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmxlbmd0aDQge1xuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICB0b3A6IDI3NXB4O1xuICAgICAgICAmOjpuZy1kZWVwIHtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuY2hhcmFjdGVyMCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgIH1cbiAgICAgICAgJi5jaGFyYWN0ZXIxIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICAgICAgICAgICAgei1pbmRleDogODtcbiAgICAgICAgICAgIHRvcDogMjgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJi5jaGFyYWN0ZXIyIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMzBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDc7XG4gICAgICAgIH1cbiAgICAgICAgJi5jaGFyYWN0ZXIzIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDY7XG4gICAgICAgICAgICB0b3A6IDI4MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYW1lLWNoYXJhYyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmxlbmd0aDUge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB0b3A6IDI3NXB4O1xuICAgICAgICAmOjpuZy1kZWVwIHtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuY2hhcmFjdGVyMCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgIH1cbiAgICAgICAgJi5jaGFyYWN0ZXIxIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3NnB4O1xuICAgICAgICAgICAgei1pbmRleDogODtcbiAgICAgICAgICAgIHRvcDogMjgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJi5jaGFyYWN0ZXIyIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNDVweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDc7XG4gICAgICAgIH1cbiAgICAgICAgJi5jaGFyYWN0ZXIzIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDY7XG4gICAgICAgICAgICB0b3A6IDI4MHB4O1xuICAgICAgICB9XG4gICAgICAgICYuY2hhcmFjdGVyNCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICB9XG4gICAgICAgIC5uYW1lLWNoYXJhYyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuLm5hbWUtY2hhcmFjIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMjVweDtcbiAgICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGZvbnQtZmFtaWx5OiBcIkRhbmNpbmdcIjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM0NTQ1NDU7XG4gICAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICAgIHRleHQtc2hhZG93OiAxcHggMCAwICNmZmYsIC0xcHggMCAwICNmZmYsIDAgMXB4IDAgI2ZmZiwgMCAtMXB4IDAgI2ZmZiwgMXB4IDFweCAjZmZmLCAtMXB4IC0xcHggMCAjZmZmLCAxcHggLTFweCAwICNmZmYsIC0xcHggMXB4IDAgI2ZmZjtcbn1cbi50ZXh0VGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBcIkRhbmNpbmdcIjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMjdweDtcbiAgICBtYXJnaW4tbGVmdDogMzlweDtcbiAgICB3aWR0aDogMjkwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNDU0NTQ1O1xuICAgIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbn1cbi50ZXh0VGl0bGUyIHtcbiAgICBmb250LWZhbWlseTogXCJEYW5jaW5nXCI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAvLyBmb250LXNpemU6IDM1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAxOTVweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNDU0NTQ1O1xuICAgIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbiAgICAvKiB3aWR0aDogYXV0bzsgKi9cbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoLTUwJSArIDI1cHgpKTtcbiAgICAvLyBsaW5lLWhlaWdodDogNzBweDtcbiAgICBtYXgtaGVpZ2h0OiAzNDBweDtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5idG4tY2FydCB7XG4gICAgbWFyZ2luOiBhdXRvIDE2cHggOHB4IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcbiAgICBib3JkZXI6IDBweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAwIDI0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDogOTtcbn1cblxuLnN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICY6Om5nLWRlZXAge1xuICAgICAgICBzdmcge1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgLmltYWdlU3ZnIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OnVybChcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlY2s0ZGF4bC9pbWFnZS91cGxvYWQvdjE2MTg5MzQ3NzAvbXVncy9tYWxlL2Nsb3RoZXMvc2VhdC9zaGlydC9iYXNpY1BsYWlkX2h4cXBkai5wbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAuc3QwIHtcbiAgICAgICAgICAgIC8vICAgICBmaWxsOiB1cmwoXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZWNrNGRheGwvaW1hZ2UvdXBsb2FkL3YxNjE4OTM0NzcwL211Z3MvbWFsZS9jbG90aGVzL3NlYXQvc2hpcnQvYmFzaWNQbGFpZF9oeHFwZGoucG5nXCIpXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uem9vbUluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNDYwcHg7XG4gICAgaGVpZ2h0OiA0NjBweDtcbiAgICB0b3A6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNGRkYsICRhbHBoYTogMCk7XG4gICAgLmljb24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI0ZGRiwgJGFscGhhOiAuNSk7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLm92ZXJsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IC41KTtcbn1cbi5tb2RhbCB7XG4gICAgd2lkdGg6IDYyMHB4O1xuICAgIGhlaWdodDogNTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5jb250YWluZXItcHJldmlldy5tb2RhbFZpZXcge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtMjBweDtcbiAgICB9XG4gICAgLmNsb3NlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xNnB4O1xuICAgICAgICByaWdodDogLTE2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE0MTQxNDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBjb2xvcjogIzE0MTQxNDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxNDE0MTQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnByZXZpZXctcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29udGFpbmVyLXByZXZpZXcge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpO1xufVxuXG4uYmctbXVnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDYwcHg7XG4gIHRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uYmctbXVnLm1pcnJvciB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cblxuLmJnLWltYWdlIHtcbiAgd2lkdGg6IDI3MHB4O1xuICB0b3A6IDE3MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG59XG5cbi5jb250YWluZXItY2hhcmFjIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyLWNoYXJhYy5mcm9udCB7XG4gIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lci1jaGFyYWMgaW1nLCAuY29udGFpbmVyLWNoYXJhYyBjYW52YXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jb250YWluZXItY2hhcmFjLmxlbmd0aDIge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoMi5jaGFyYWN0ZXIwIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIHotaW5kZXg6IDk7XG59XG4uY29udGFpbmVyLWNoYXJhYy5sZW5ndGgyLmNoYXJhY3RlcjEge1xuICBtYXJnaW4tbGVmdDogMTE1cHg7XG4gIHotaW5kZXg6IDg7XG59XG4uY29udGFpbmVyLWNoYXJhYy5sZW5ndGgzIHtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgdG9wOiAyMjVweDtcbn1cbi5jb250YWluZXItY2hhcmFjLmxlbmd0aDM6Om5nLWRlZXAgc3ZnIHtcbiAgd2lkdGg6IDE3MHB4O1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoMy5jaGFyYWN0ZXIwIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgei1pbmRleDogOTtcbn1cbi5jb250YWluZXItY2hhcmFjLmxlbmd0aDMuY2hhcmFjdGVyMSB7XG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xuICB6LWluZGV4OiA4O1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoMy5jaGFyYWN0ZXIyIHtcbiAgbWFyZ2luLWxlZnQ6IDE1NXB4O1xuICB6LWluZGV4OiA3O1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoMyAubmFtZS1jaGFyYWMge1xuICBtYXJnaW4tbGVmdDogOTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoNCB7XG4gIGhlaWdodDogMTMwcHg7XG4gIHRvcDogMjc1cHg7XG59XG4uY29udGFpbmVyLWNoYXJhYy5sZW5ndGg0OjpuZy1kZWVwIHN2ZyB7XG4gIHdpZHRoOiAxMzBweDtcbn1cbi5jb250YWluZXItY2hhcmFjLmxlbmd0aDQuY2hhcmFjdGVyMCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB6LWluZGV4OiA5O1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoNC5jaGFyYWN0ZXIxIHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gIHotaW5kZXg6IDg7XG4gIHRvcDogMjgwcHg7XG59XG4uY29udGFpbmVyLWNoYXJhYy5sZW5ndGg0LmNoYXJhY3RlcjIge1xuICBtYXJnaW4tbGVmdDogMTMwcHg7XG4gIHotaW5kZXg6IDc7XG59XG4uY29udGFpbmVyLWNoYXJhYy5sZW5ndGg0LmNoYXJhY3RlcjMge1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIHotaW5kZXg6IDY7XG4gIHRvcDogMjgwcHg7XG59XG4uY29udGFpbmVyLWNoYXJhYy5sZW5ndGg0IC5uYW1lLWNoYXJhYyB7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uY29udGFpbmVyLWNoYXJhYy5sZW5ndGg1IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgdG9wOiAyNzVweDtcbn1cbi5jb250YWluZXItY2hhcmFjLmxlbmd0aDU6Om5nLWRlZXAgc3ZnIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLmNvbnRhaW5lci1jaGFyYWMubGVuZ3RoNS5jaGFyYWN0ZXIwIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIHotaW5kZXg6IDk7XG59XG4uY29udGFpbmVyLWNoYXJhYy5sZW5ndGg1LmNoYXJhY3RlcjEge1xuICBtYXJnaW4tbGVmdDogNzZweDtcbiAgei1pbmRleDogODtcbiAgdG9wOiAyODBweDtcbn1cbi5jb250YWluZXItY2hhcmFjLmxlbmd0aDUuY2hhcmFjdGVyMiB7XG4gIG1hcmdpbi1sZWZ0OiAxNDVweDtcbiAgei1pbmRleDogNztcbn1cbi5jb250YWluZXItY2hhcmFjLmxlbmd0aDUuY2hhcmFjdGVyMyB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgei1pbmRleDogNjtcbiAgdG9wOiAyODBweDtcbn1cbi5jb250YWluZXItY2hhcmFjLmxlbmd0aDUuY2hhcmFjdGVyNCB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgei1pbmRleDogNTtcbn1cbi5jb250YWluZXItY2hhcmFjLmxlbmd0aDUgLm5hbWUtY2hhcmFjIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm5hbWUtY2hhcmFjIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0yNXB4O1xuICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgZm9udC1mYW1pbHk6IFwiRGFuY2luZ1wiO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0NTQ1NDU7XG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbiAgdGV4dC1zaGFkb3c6IDFweCAwIDAgI2ZmZiwgLTFweCAwIDAgI2ZmZiwgMCAxcHggMCAjZmZmLCAwIC0xcHggMCAjZmZmLCAxcHggMXB4ICNmZmYsIC0xcHggLTFweCAwICNmZmYsIDFweCAtMXB4IDAgI2ZmZiwgLTFweCAxcHggMCAjZmZmO1xufVxuXG4udGV4dFRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiRGFuY2luZ1wiO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDM4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMjdweDtcbiAgbWFyZ2luLWxlZnQ6IDM5cHg7XG4gIHdpZHRoOiAyOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzQ1NDU0NTtcbiAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xufVxuXG4udGV4dFRpdGxlMiB7XG4gIGZvbnQtZmFtaWx5OiBcIkRhbmNpbmdcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxOTVweDtcbiAgd2lkdGg6IDI1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDU0NTQ1O1xuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gIC8qIHdpZHRoOiBhdXRvOyAqL1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKC01MCUgKyAyNXB4KSk7XG4gIG1heC1oZWlnaHQ6IDM0MHB4O1xufVxuLnRleHRUaXRsZTIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4tY2FydCB7XG4gIG1hcmdpbjogYXV0byAxNnB4IDhweCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xuICBib3JkZXI6IDBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5O1xufVxuXG4uc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnN2Zzo6bmctZGVlcCBzdmcge1xuICB3aWR0aDogMjAwcHg7XG59XG4uc3ZnOjpuZy1kZWVwIHN2ZyAuaW1hZ2VTdmcge1xuICBjb250ZW50OiB1cmwoXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZWNrNGRheGwvaW1hZ2UvdXBsb2FkL3YxNjE4OTM0NzcwL211Z3MvbWFsZS9jbG90aGVzL3NlYXQvc2hpcnQvYmFzaWNQbGFpZF9oeHFwZGoucG5nXCIpO1xufVxuXG4uem9vbUluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDYwcHg7XG4gIGhlaWdodDogNDYwcHg7XG4gIHRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuLnpvb21JbiAuaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi56b29tSW46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4uem9vbUluOmhvdmVyIC5pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ub3ZlcmxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5tb2RhbCB7XG4gIHdpZHRoOiA2MjBweDtcbiAgaGVpZ2h0OiA1MjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1vZGFsIC5jb250YWluZXItcHJldmlldy5tb2RhbFZpZXcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbn1cbi5tb2RhbCAuY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE2cHg7XG4gIHJpZ2h0OiAtMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTQxNDE0O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ubW9kYWwgLmNsb3NlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgY29sb3I6ICMxNDE0MTQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxNDE0MTQ7XG59Il19 */"

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
        this.openModal = false;
        this.masterPages = 2;
        this.myFunc = this.handler.bind(this);
    }
    ngOnInit() {
        this.getCloudinary('landscape');
        this.bgImage = this.appComponent.choiceLanscape;
        this.listCharacters = this.appComponent.listCharacters;
        this.tabSide = this.appComponent.tabSide;
    }
    getCloudinary(src) {
        src = 'landscape';
        this.cloudinaryService.getCloudinary(src).subscribe((response) => {
            for (let i = 0; i < response.resources.length; i++) {
                // this.listLandscape[i + 1] = {img : "https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/" + response.resources[i].public_id}
            }
        }, (error) => { return console.log('error', error); });
    }
    handler(svg, parent) {
        if (isNaN(parseInt(parent.id))) {
            setTimeout(() => {
                svg.getElementsByTagName('pattern').item(0).id = "salut" + parent.id;
                let st0 = svg.getElementsByClassName('st0');
                for (var i = 0, len = st0.length; i < len; i++) {
                    st0[i].style["fill"] = 'url("#salut' + parent.id + '")';
                }
                svg.getElementsByTagName('image').item(0).setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.appComponent.listCharacters[parseInt(parent.id)].shirtColor.color);
            }, 50);
        }
        else {
            svg.getElementsByTagName('pattern').item(0).id = "salut" + parent.id;
            let st0 = svg.getElementsByClassName('st0');
            for (var i = 0, len = st0.length; i < len; i++) {
                st0[i].style["fill"] = 'url("#salut' + parent.id + '")';
            }
            svg.getElementsByTagName('image').item(0).setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.appComponent.listCharacters[parseInt(parent.id)].shirtColor.color);
        }
        return svg;
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
    preview() {
    }
};
Preview.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_3__["Cloudinary"] },
    { type: _services_cloudinary_service__WEBPACK_IMPORTED_MODULE_4__["CloudinaryService"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("myCanvas")
], Preview.prototype, "canvaslist", void 0);
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

module.exports = ".container-step2 {\n  display: -webkit-box;\n  display: flex;\n  background-color: #FFF;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  border: 1px solid #E2E2E2E2;\n  height: 100%;\n  overflow: hidden;\n}\n\nh5 {\n  margin: 16px 0 8px;\n}\n\n.choices-panel {\n  -webkit-box-flex: 1;\n          flex: 1;\n  max-width: 390px;\n  padding-left: 16px;\n  padding-bottom: 16px;\n}\n\n.delete-charac {\n  color: crimson;\n  text-decoration: underline;\n  text-align: center;\n  font-size: 12px;\n  padding: 4px;\n  cursor: pointer;\n}\n\n.tabs {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  border-right: 1px solid #E2E2E2E2;\n}\n\n.tabs .tab {\n  height: 72px;\n  width: 75px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  cursor: pointer;\n}\n\n.tabs .tab:hover {\n  background-color: #E6E6E6;\n}\n\n.tabs .tab.selected {\n  border-left: 3px solid #141414;\n  box-sizing: border-box;\n  background-color: #FAFAFA;\n}\n\n.tabs .tab .icon {\n  width: 16px;\n  margin: auto auto 4px auto;\n}\n\n.tabs .tab .text {\n  margin: 0 auto auto auto;\n  text-align: center;\n  text-align: center;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.tabs-side {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  border-bottom: 1px solid #E2E2E2E2;\n}\n\n.tabs-side .tab {\n  height: 75px;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  cursor: pointer;\n}\n\n.tabs-side .tab:hover {\n  background-color: #E6E6E6;\n}\n\n.tabs-side .tab.selected {\n  border-bottom: 3px solid #141414;\n  box-sizing: border-box;\n  background-color: #FAFAFA;\n}\n\n.tabs-side .tab .icon {\n  width: 16px;\n  margin: auto auto 4px auto;\n}\n\n.tabs-side .tab .icon.mirror {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n\n.tabs-side .tab .text {\n  margin: 0 auto auto auto;\n  text-align: center;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.label {\n  font-size: 12px;\n  margin-bottom: 6px;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 10px;\n}\n\n.item-choices {\n  display: -webkit-box;\n  display: flex;\n  padding-top: 16px;\n  flex-wrap: wrap;\n}\n\n.item-choices .landscapes {\n  padding: 8px;\n  cursor: pointer;\n  width: 100px;\n  height: 100px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.item-choices .landscapes:hover {\n  background-color: #E6E6E6;\n}\n\n.item-choices .landscapes.selected {\n  border-bottom: 3px solid #141414;\n}\n\n.item-choices .landscapes.icon img {\n  width: 40px;\n  margin: auto;\n}\n\n.item-choices img {\n  width: 100px;\n  margin: auto;\n}\n\n.general-infos {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.input-name {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 2;\n          flex: 2;\n  margin-right: 24px;\n}\n\n.input-name input {\n  height: 32px;\n  background-color: #FAFAFA;\n  border: 0px;\n  padding-left: 8px;\n  outline-offset: 0px;\n}\n\n.scrollable {\n  overflow-y: scroll;\n  height: calc(520px - 86px);\n  padding-bottom: 24px;\n}\n\n.scrollable.pets {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.gender, .position {\n  margin-right: 24px;\n}\n\n.gender .action, .position .action {\n  text-decoration: underline;\n  display: block;\n  margin-top: 8px;\n  font-size: 14px;\n}\n\n.choices {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.choices .choice {\n  height: 32px;\n  width: 32px;\n  display: -webkit-box;\n  display: flex;\n  cursor: pointer;\n  margin: 0 8px 0 0;\n}\n\n.choices .choice:hover {\n  background-color: #E6E6E6;\n}\n\n.choices .choice.selected {\n  border-left: 3px solid #141414;\n  box-sizing: border-box;\n}\n\n.choices .choice img {\n  height: 24px;\n  margin: auto;\n}\n\n.gender {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.colors {\n  display: -webkit-box;\n  display: flex;\n  overflow-x: scroll;\n}\n\n.color {\n  height: 24px;\n  width: 24px;\n  margin: 0 16px 0 0;\n  cursor: pointer;\n  box-sizing: border-box;\n  border-radius: 50%;\n}\n\n.color.selected {\n  border: 3px solid #141414 !important;\n}\n\n.color#FFFFFF {\n  border: 1px solid #131313;\n}\n\n.img-choice {\n  height: 45px;\n  width: 45px;\n  min-width: 45px;\n  display: -webkit-box;\n  display: flex;\n  margin: auto 16px 0 0;\n  cursor: pointer;\n}\n\n.img-choice:hover {\n  background-color: #E6E6E6;\n}\n\n.img-choice.pattern {\n  background-size: 500%;\n}\n\n.img-choice img {\n  height: 40px;\n  margin: auto;\n}\n\n.img-choice.pant img {\n  width: 40px;\n  height: auto;\n}\n\n.img-choice.selected {\n  border-bottom: 3px solid #141414 !important;\n}\n\n.img-choice.pets {\n  margin: 8px 16px 0 0;\n}\n\n.text-display {\n  overflow: scroll;\n  height: calc(520px - 75px);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.text-display h5 {\n  margin: 16px 0 8px;\n}\n\n.text-display .text-item {\n  font-family: \"Dancing\";\n  font-weight: bolder;\n  font-size: 25px;\n  padding: 4px 8px;\n  border-bottom: 1px solid #E2E2E2;\n  margin: 4px;\n  cursor: pointer;\n}\n\n.text-display .text-item:hover {\n  background-color: #FAFAFA;\n}\n\n.text-display .text-item.selected {\n  border-bottom: 3px solid #141414 !important;\n}\n\n.btn-cart {\n  margin: 8px 0 16px auto;\n  background-color: #141414;\n  border: 0px;\n  line-height: 34px;\n  padding: 0 24px;\n  color: white;\n  font-family: arial;\n  font-size: 16px;\n  border-radius: 10px;\n  cursor: pointer;\n  z-index: 9;\n}\n\n.text2-lib {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.text2-lib .item-lib {\n  width: 100px;\n  height: 100px;\n  border: 1px solid #E2E2E2;\n  margin: 8px auto;\n  text-align: center;\n  cursor: pointer;\n}\n\n.text2-lib .item-lib:hover {\n  background-color: #F6F7FB;\n}\n\n.text2-lib .item-lib img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNlcnJhbm8vQ3VzdG9taXovc3JjL2FwcC9zZWxlY3Rpb24vc2VsZWN0aW9uLnNjc3MiLCJzcmMvYXBwL3NlbGVjdGlvbi9zZWxlY3Rpb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQ0FBQTtBQ0lKOztBREhJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxlQUFBO0FDS1I7O0FESlE7RUFDSSx5QkFBQTtBQ01aOztBREpRO0VBQ0ksOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDTVo7O0FESlE7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7QUNNWjs7QURKUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ01aOztBREZBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0NBQUE7QUNLSjs7QURKSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxlQUFBO0FDTVI7O0FETFE7RUFDSSx5QkFBQTtBQ09aOztBRExRO0VBQ0ksZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDT1o7O0FETFE7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7QUNPWjs7QUROWTtFQUNJLDZCQUFBO1VBQUEscUJBQUE7QUNRaEI7O0FETFE7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNPWjs7QURIQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ01KOztBREpBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNPSjs7QURMQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1FKOztBRFBJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ1NSOztBRFJRO0VBQ0kseUJBQUE7QUNVWjs7QURSUTtFQUNJLGdDQUFBO0FDVVo7O0FETlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1FoQjs7QURKSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDTVI7O0FESEE7RUFDSSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNNSjs7QURIQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGtCQUFBO0FDTUo7O0FETEk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ09SOztBREpBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0FDT0o7O0FETkk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDUVI7O0FETEE7RUFDSSxrQkFBQTtBQ1FKOztBRFBJO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNTUjs7QUROQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ1NKOztBRFJJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNVUjs7QURUUTtFQUNJLHlCQUFBO0FDV1o7O0FEVFE7RUFDSSw4QkFBQTtFQUNBLHNCQUFBO0FDV1o7O0FEVFE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ1daOztBRFBBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDVUo7O0FEUEE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtBQ1VKOztBRFJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDV0o7O0FEVkk7RUFDSSxvQ0FBQTtBQ1lSOztBRFZJO0VBQ0kseUJBQUE7QUNZUjs7QURUQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ1lKOztBRFhJO0VBQ0kseUJBQUE7QUNhUjs7QURYSTtFQUNJLHFCQUFBO0FDYVI7O0FEWEk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ2FSOztBRFZRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNZWjs7QURUSTtFQUNJLDJDQUFBO0FDV1I7O0FEVEk7RUFDSSxvQkFBQTtBQ1dSOztBRFBBO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ1VKOztBRFRJO0VBQ0ksa0JBQUE7QUNXUjs7QURUSTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDV1I7O0FEVlE7RUFDSSx5QkFBQTtBQ1laOztBRFZRO0VBQ0ksMkNBQUE7QUNZWjs7QURQQTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNVSjs7QURQQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUNVSjs7QURUSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1dSOztBRFZRO0VBQ0kseUJBQUE7QUNZWjs7QURWUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDWVoiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3Rpb24vc2VsZWN0aW9uLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLXN0ZXAyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTJFMkUyRTI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5oNSB7XG4gICAgbWFyZ2luOiAxNnB4IDAgOHB4O1xufVxuLmNob2ljZXMtcGFuZWwge1xuICAgIGZsZXg6IDE7XG4gICAgbWF4LXdpZHRoOiAzOTBweDtcbiAgICAvLyBtaW4td2lkdGg6IDQ1NXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cbi5kZWxldGUtY2hhcmFjIHtcbiAgICBjb2xvcjogY3JpbXNvbjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFicyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFMkUyRTJFMjtcbiAgICAudGFiIHtcbiAgICAgICAgaGVpZ2h0OiA3MnB4O1xuICAgICAgICB3aWR0aDogNzVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG4gICAgICAgIH1cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMxNDE0MTQ7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgICAgICAgfVxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvIDRweCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIGF1dG8gYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxufVxuLnRhYnMtc2lkZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTJFMkUyRTI7XG4gICAgLnRhYiB7XG4gICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG4gICAgICAgIH1cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzE0MTQxNDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICAgICAgICB9XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gNHB4IGF1dG87XG4gICAgICAgICAgICAmLm1pcnJvciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIGF1dG8gYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxufVxuLmxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaXRlbS1jaG9pY2VzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAubGFuZHNjYXBlcyB7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcbiAgICAgICAgfVxuICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTQxNDE0O1xuICAgICAgICAgICAgLy8gYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICAmLmljb24ge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxufVxuLmdlbmVyYWwtaW5mb3Mge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5pbnB1dC1uYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMjtcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgaW5wdXQge1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgb3V0bGluZS1vZmZzZXQ6IDBweDtcbiAgICB9XG59XG4uc2Nyb2xsYWJsZSB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGhlaWdodDogY2FsYyg1MjBweCAtIDg2cHgpO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICYucGV0cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG59XG4uZ2VuZGVyLCAucG9zaXRpb24ge1xuICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAuYWN0aW9uIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG4uY2hvaWNlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIC5jaG9pY2Uge1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCA4cHggMCAwO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG4gICAgICAgIH1cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMxNDE0MTQ7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG4uZ2VuZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb2xvcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuLmNvbG9yIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgbWFyZ2luOiAwIDE2cHggMCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzE0MTQxNCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAmI0ZGRkZGRiB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMzEzMTM7XG4gICAgfVxufVxuLmltZy1jaG9pY2Uge1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBtaW4td2lkdGg6IDQ1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IGF1dG8gMTZweCAwIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xuICAgIH1cbiAgICAmLnBhdHRlcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwMCU7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodCA6IDQwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgJi5wYW50IHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzE0MTQxNCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAmLnBldHMge1xuICAgICAgICBtYXJnaW46IDhweCAxNnB4IDAgMDtcbiAgICB9XG59XG5cbi50ZXh0LWRpc3BsYXkgIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsOyAgICBcbiAgICBoZWlnaHQ6IGNhbGMoNTIwcHggLSA3NXB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaDUge1xuICAgICAgICBtYXJnaW46IDE2cHggMCA4cHg7XG4gICAgfVxuICAgIC50ZXh0LWl0ZW0ge1xuICAgICAgICBmb250LWZhbWlseTogXCJEYW5jaW5nXCI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMkUyRTI7XG4gICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgICAgICAgfVxuICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTQxNDE0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5idG4tY2FydCB7XG4gICAgbWFyZ2luOiA4cHggMCAxNnB4IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcbiAgICBib3JkZXI6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICBwYWRkaW5nOiAwIDI0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDogOTtcbn1cblxuLnRleHQyLWxpYiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLml0ZW0tbGliIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTJFMkUyO1xuICAgICAgICBtYXJnaW46IDhweCBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZCO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuY29udGFpbmVyLXN0ZXAyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm9yZGVyOiAxcHggc29saWQgI0UyRTJFMkUyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmg1IHtcbiAgbWFyZ2luOiAxNnB4IDAgOHB4O1xufVxuXG4uY2hvaWNlcy1wYW5lbCB7XG4gIGZsZXg6IDE7XG4gIG1heC13aWR0aDogMzkwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi5kZWxldGUtY2hhcmFjIHtcbiAgY29sb3I6IGNyaW1zb247XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UyRTJFMkUyO1xufVxuLnRhYnMgLnRhYiB7XG4gIGhlaWdodDogNzJweDtcbiAgd2lkdGg6IDc1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YWJzIC50YWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xufVxuLnRhYnMgLnRhYi5zZWxlY3RlZCB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzE0MTQxNDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cbi50YWJzIC50YWIgLmljb24ge1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luOiBhdXRvIGF1dG8gNHB4IGF1dG87XG59XG4udGFicyAudGFiIC50ZXh0IHtcbiAgbWFyZ2luOiAwIGF1dG8gYXV0byBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhYnMtc2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTJFMkUyRTI7XG59XG4udGFicy1zaWRlIC50YWIge1xuICBoZWlnaHQ6IDc1cHg7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YWJzLXNpZGUgLnRhYjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG59XG4udGFicy1zaWRlIC50YWIuc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzE0MTQxNDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cbi50YWJzLXNpZGUgLnRhYiAuaWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW46IGF1dG8gYXV0byA0cHggYXV0bztcbn1cbi50YWJzLXNpZGUgLnRhYiAuaWNvbi5taXJyb3Ige1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG59XG4udGFicy1zaWRlIC50YWIgLnRleHQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pdGVtLWNob2ljZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLml0ZW0tY2hvaWNlcyAubGFuZHNjYXBlcyB7XG4gIHBhZGRpbmc6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaXRlbS1jaG9pY2VzIC5sYW5kc2NhcGVzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcbn1cbi5pdGVtLWNob2ljZXMgLmxhbmRzY2FwZXMuc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzE0MTQxNDtcbn1cbi5pdGVtLWNob2ljZXMgLmxhbmRzY2FwZXMuaWNvbiBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLml0ZW0tY2hvaWNlcyBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmdlbmVyYWwtaW5mb3Mge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uaW5wdXQtbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDI7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cbi5pbnB1dC1uYW1lIGlucHV0IHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBib3JkZXI6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIG91dGxpbmUtb2Zmc2V0OiAwcHg7XG59XG5cbi5zY3JvbGxhYmxlIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IGNhbGMoNTIwcHggLSA4NnB4KTtcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XG59XG4uc2Nyb2xsYWJsZS5wZXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZ2VuZGVyLCAucG9zaXRpb24ge1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG4uZ2VuZGVyIC5hY3Rpb24sIC5wb3NpdGlvbiAuYWN0aW9uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNob2ljZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xufVxuLmNob2ljZXMgLmNob2ljZSB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwIDhweCAwIDA7XG59XG4uY2hvaWNlcyAuY2hvaWNlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcbn1cbi5jaG9pY2VzIC5jaG9pY2Uuc2VsZWN0ZWQge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMxNDE0MTQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY2hvaWNlcyAuY2hvaWNlIGltZyB7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZ2VuZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbG9ycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuLmNvbG9yIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luOiAwIDE2cHggMCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jb2xvci5zZWxlY3RlZCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMxNDE0MTQgIWltcG9ydGFudDtcbn1cbi5jb2xvciNGRkZGRkYge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTMxMzEzO1xufVxuXG4uaW1nLWNob2ljZSB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIG1pbi13aWR0aDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvIDE2cHggMCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW1nLWNob2ljZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG59XG4uaW1nLWNob2ljZS5wYXR0ZXJuIHtcbiAgYmFja2dyb3VuZC1zaXplOiA1MDAlO1xufVxuLmltZy1jaG9pY2UgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uaW1nLWNob2ljZS5wYW50IGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG4uaW1nLWNob2ljZS5zZWxlY3RlZCB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTQxNDE0ICFpbXBvcnRhbnQ7XG59XG4uaW1nLWNob2ljZS5wZXRzIHtcbiAgbWFyZ2luOiA4cHggMTZweCAwIDA7XG59XG5cbi50ZXh0LWRpc3BsYXkge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBoZWlnaHQ6IGNhbGMoNTIwcHggLSA3NXB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi50ZXh0LWRpc3BsYXkgaDUge1xuICBtYXJnaW46IDE2cHggMCA4cHg7XG59XG4udGV4dC1kaXNwbGF5IC50ZXh0LWl0ZW0ge1xuICBmb250LWZhbWlseTogXCJEYW5jaW5nXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMkUyRTI7XG4gIG1hcmdpbjogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGV4dC1kaXNwbGF5IC50ZXh0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuLnRleHQtZGlzcGxheSAudGV4dC1pdGVtLnNlbGVjdGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxNDE0MTQgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1jYXJ0IHtcbiAgbWFyZ2luOiA4cHggMCAxNnB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XG4gIGJvcmRlcjogMHB4O1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDk7XG59XG5cbi50ZXh0Mi1saWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4udGV4dDItbGliIC5pdGVtLWxpYiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UyRTJFMjtcbiAgbWFyZ2luOiA4cHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGV4dDItbGliIC5pdGVtLWxpYjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkY3RkI7XG59XG4udGV4dDItbGliIC5pdGVtLWxpYiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

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
        this.listPets = [];
        this.listLandscapes = [{
                public_id: "mugs/icons/empty"
            }];
        this.listCharacters = [];
        this.listHairs = [];
        this.listAccess = [];
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
        this.listShirtColors = [
            {
                name: "c1",
                color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147467/mugs/male/clothes/seat/shirt/grey_gh2qeh.png"
            },
            {
                name: "c2",
                color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147465/mugs/male/clothes/seat/shirt/blue_yg22vl.png"
            },
            {
                name: "c3",
                color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147466/mugs/male/clothes/seat/shirt/green_ewuysi.png"
            },
            {
                name: "c4",
                color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147465/mugs/male/clothes/seat/shirt/white_zfvyud.png"
            },
            {
                name: "c5",
                color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147466/mugs/male/clothes/seat/shirt/pink_ifullc.png"
            },
            {
                name: "c6",
                color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147465/mugs/male/clothes/seat/shirt/blue2_pn2zsy.png"
            },
            {
                name: "c7",
                color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147465/mugs/male/clothes/seat/shirt/red_zqvhvf.png"
            },
            {
                name: "c8",
                color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620039278/mugs/male/clothes/seat/shirt/plaid.png"
            },
            {
                name: "c9",
                color: "https://res.cloudinary.com/deck4daxl/image/upload/v1619618196/mugs/male/clothes/seat/shirt/jean_yb5rb1.png"
            },
            {
                name: "c10",
                color: "https://res.cloudinary.com/deck4daxl/image/upload/v1619618196/mugs/male/clothes/seat/shirt/plaid_fqzedx.png"
            },
            {
                name: "c11",
                color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620748862/mugs/male/clothes/seat/shirt/liberty_m5gh0e.png"
            },
            {
                name: "c12",
                color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620748861/mugs/male/clothes/seat/shirt/flowers_o0zhir.png"
            },
            {
                name: "c13",
                color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620146176/mugs/male/clothes/seat/shirt/milit_er8tm7.png"
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
        this.currentPosition = 1;
    }
    ngOnInit() {
        this.getCloudinary('landscape');
        this.getCloudinary('quotes');
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
        this.setActiveTab(this.appComponent.listCharacters.length - 1, 'character');
    }
    // Set tabs
    setActiveTab(item, type) {
        this.changeSide('side1');
        if (type === 'character' || type === 'animal') {
            this.display = 'character';
            for (let index = 0; index < this.tabs.length; index++) {
                this.tabs[index].selected = false;
            }
            for (let i = 0; i < this.listCharacters.length; i++) {
                if (i === item) {
                    this.listCharacters[item].selected = true;
                    this.currentChar = this.listCharacters[item];
                    this.changeGender(this.currentChar.gender, true);
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
    delete() {
        let index = this.appComponent.listCharacters.findIndex(current => current === this.currentChar);
        this.appComponent.listCharacters.splice(index, 1);
        this.setActiveTab(index - 1, 'characters');
    }
    changeBg(item, empty) {
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
            this.appComponent.choiceLanscape.img = 'https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/' + item.public_id + '.png';
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
    changeTextSide2(lib) {
        if (lib) {
            this.textSide2.text = "";
            this.textSide2.background = lib.public_id;
        }
        else {
            this.textSide2.background = "";
            this.appComponent.textSide2 = this.textSide2;
            setTimeout(() => {
                this.checkOverflow();
            }, 20);
        }
    }
    checkOverflow() {
        var els = document.getElementById('textTitle2');
        if (els.offsetHeight < els.scrollHeight ||
            els.offsetWidth < els.scrollWidth) {
            var fontSize = parseInt(window.getComputedStyle(els, null).getPropertyValue('font-size'));
            var lineHeight = parseInt(window.getComputedStyle(els, null).getPropertyValue('line-height'));
            let x = fontSize - 1;
            let y = lineHeight - 2;
            els.style.fontSize = x + "px";
            els.style.lineHeight = y + "px";
            this.textSide2.size = x + "px";
            this.textSide2.lineHeight = y + "px";
            this.checkOverflow();
        }
        else {
            return false;
        }
    }
    // Get library img
    getCloudinary(src) {
        this.cloudinaryService.getCloudinary(src).subscribe((response) => {
            this.isPets = false;
            this.listPets = [];
            this.cloudinaryResponse = response.resources;
            switch (src) {
                case 'listMan':
                    this.listManImg();
                    break;
                case 'listFemale':
                    this.listManImg();
                    break;
                case 'landscape':
                    this.listLandscapes = this.listLandscapes.concat(this.cloudinaryResponse);
                    break;
                case 'quotes':
                    this.listQuotes = this.cloudinaryResponse;
                    break;
                case 'listPets':
                    this.isPets = true;
                    this.cloudinaryResponse.forEach(element => {
                        var mySubString = element.public_id.substring(element.public_id.lastIndexOf("/") + 1);
                        element.name = mySubString;
                        this.listPets.push(element);
                    });
                    break;
                default:
                    break;
            }
        }, (error) => { return console.log('error', error); });
    }
    listManImg() {
        this.listHairs = [];
        this.listShirt = [];
        this.listPants = [];
        this.listAccess = [];
        this.cloudinaryResponse.forEach(element => {
            // Create each miniature list
            if (element.public_id.includes("hair")) {
                // create the hair name miniature
                var mySubString = element.public_id.substring(element.public_id.lastIndexOf("/") + 1, element.public_id.lastIndexOf("-"));
                element.name = mySubString;
                this.listHairs.push(element);
            }
            if (element.public_id.includes("shirt")) {
                if (this.currentChar.gender === 'male') {
                    this.listShirt = [
                        {
                            public_id: "/assets/list/man/shirt1.svg",
                            name: "shirt",
                            display: true
                        },
                        {
                            public_id: "/assets/list/man/tshirt1.svg",
                            name: "tshirt",
                            display: true
                        },
                        {
                            public_id: "/assets/list/man/costume1.svg",
                            name: "costume",
                            display: true
                        },
                        {
                            public_id: "/assets/list/man/sweat1.svg",
                            name: "sweat",
                            display: true
                        },
                    ];
                }
                if (this.currentChar.gender === 'female') {
                    this.listShirt = [
                        {
                            public_id: "/assets/list/female/cropTop.svg",
                            name: "cropTop",
                            display: true
                        },
                        {
                            public_id: "/assets/list/female/tshirt1.svg",
                            name: "tshirt",
                            display: true
                        },
                        {
                            public_id: "/assets/list/female/longMarcel.svg",
                            name: "longMarcel",
                            display: true
                        },
                        {
                            public_id: "/assets/list/female/sweat1.svg",
                            name: "sweat",
                            display: true
                        },
                    ];
                }
            }
            if (element.public_id.includes("pant")) {
                // create the pant name miniature
                var mySubString = element.public_id.substring(element.public_id.lastIndexOf("/") + 1);
                element.name = mySubString;
                this.listPants.push(element);
            }
            if (element.public_id.includes("access")) {
                // create the access name miniature
                var mySubString = element.public_id.substring(element.public_id.lastIndexOf("/") + 1);
                element.name = mySubString;
                this.listAccess.push(element);
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
    changeGender(item, tabs) {
        this.currentChar.gender = item;
        switch (item) {
            case 'male':
                if (!tabs) {
                    this.currentChar.type = "character";
                    this.currentChar.gender = 'male';
                    this.currentChar.shirt = 'tshirt';
                    this.currentChar.hairStyle = 'hair1';
                    this.currentChar.pant = 'pant1';
                    this.currentChar.access = 'empty';
                }
                this.getCloudinary('listMan');
                break;
            case 'female':
                if (!tabs) {
                    this.currentChar.type = "character";
                    this.currentChar.gender = 'female';
                    this.currentChar.shirt = 'tshirt';
                    this.currentChar.hairStyle = 'hair1';
                    this.currentChar.pant = 'pant1';
                    this.currentChar.access = 'empty';
                }
                this.getCloudinary('listFemale');
                break;
            case 'animal':
                this.currentChar.type = "animal";
                this.currentChar.gender = 'kingCharle1';
                this.currentChar.shirt = '';
                this.currentChar.hairStyle = '';
                this.currentChar.pant = '';
                this.currentChar.access = '';
                this.getCloudinary('listPets');
                break;
            default:
                break;
        }
    }
    changePet(item) {
        this.currentChar.gender = item.name;
    }
    changePosition(item) {
        this.currentChar.position = item;
    }
    changePositionMore() {
        if (this.currentPosition === 4) {
            this.currentPosition = 0;
        }
        this.currentPosition += 1;
        this.currentChar.position = this.currentPosition;
    }
    changeSkin(item) {
        this.currentChar.skinColor = item.name;
    }
    changeHairColor(item) {
        this.currentChar.hairColor = item.name;
        this.displayHairStyle(this.currentChar.hairColor);
    }
    changeShirtColor(item) {
        this.currentChar.shirtColor = item;
        let svg = document.getElementById('salut' + this.currentChar.number);
        svg.getElementsByTagName('image').item(0).setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', item.color);
    }
    changeHairStyle(item) {
        this.currentChar.hairStyle = item.name;
    }
    changeShirt(item) {
        this.currentChar.shirt = item.name;
        // this.changeShirtColor(this.currentChar.shirtColor)
    }
    changePant(item) {
        this.currentChar.pant = item.name;
    }
    changeAccess(item) {
        if (item === "empty")
            return this.currentChar.access = item;
        this.currentChar.access = item.name;
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
        // for (let i = 0; i < this.listShirt.length; i++)  {
        //   if (this.listShirt[i].public_id.includes(position)) {
        //     this.listShirt[i].display = true
        //   } else {
        //     this.listShirt[i].display = false
        //   }
        // };
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
    Cloudinary: cloudinary_core__WEBPACK_IMPORTED_MODULE_7__["Cloudinary"]
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
            _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_6__["CloudinaryModule"].forRoot(cloudinary, { cloud_name: 'deck4daxl' }),
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