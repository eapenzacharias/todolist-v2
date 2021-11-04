/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body .project {\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  width: 100%;\n  font-family: Helvetica, sans-serif;\n  color: #333;\n}\n\nbody #main {\n  width: 90%;\n  max-width: 600px;\n  margin: 50px auto;\n  padding: 0;\n  -webkit-box-shadow: 0 4px 8px 0 #0003, 0 6px 20px 0 #00000030;\n  box-shadow: 0 4px 8px 0 #0003, 0 6px 20px 0 #00000030;\n  font-size: 16px;\n  font-weight: 300;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\nbody #main h1 {\n  border-bottom: 0.5px solid #b2b2b2;\n  font-size: 18px;\n  font-weight: 400;\n  padding: 20px 10px 15px 10px;\n  margin: 0;\n}\n\nbody #main #task-input {\n  border: none;\n  border-bottom: 0.2px solid #b2b2b2;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  color: #7a7a7a;\n  font-style: italic;\n  font-size: 16px;\n  padding: 15px 10px;\n  margin: 0;\n  width: 100%;\n}\n\nbody #main #tasks {\n  list-style-type: none;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody #main #tasks li {\n  border-bottom: 0.2px solid #b2b2b2;\n  padding: 15px 10px;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  margin: 0;\n}\n\nbody #main #tasks li input {\n  margin: 0 15px;\n  cursor: pointer;\n}\n\nbody #main #tasks li .task-text {\n  min-width: 70%;\n  padding: 0 0 2px 0;\n}\n\nbody #main #tasks li .task-options {\n  position: absolute;\n  right: 5px;\n  top: 0;\n  font-weight: 900;\n  color: #848484;\n  font-size: 20px;\n  -webkit-transition: 0.3s;\n  -webkit-transition: 0.6s;\n  transition: 0.6s;\n  cursor: pointer;\n  width: 60px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: end;\n  height: 100%;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\nbody #main #tasks li .task-options:hover {\n  color: #1c9159;\n}\n\nbody #main #tasks li .btn {\n  position: absolute;\n  color: #b2b2b2;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  cursor: pointer;\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\nbody #main #tasks li .del-btn {\n  right: 25px;\n  color: #c14c4c;\n}\n\nbody #main #tasks li .del-btn:hover {\n  color: #b01111;\n}\n\nbody #main #tasks li .edit-btn {\n  right: 50px;\n  color: #3d78ab;\n}\n\nbody #main #tasks li .edit-btn:hover {\n  color: #0b406e;\n}\n\nbody #main #tasks li .editing {\n  color: #0d7a1e;\n}\n\nbody #main #tasks .completed {\n  background-color: #fcfcfc;\n  color: #7a7a7a;\n}\n\nbody #main #tasks .submenu {\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  position: absolute;\n}\n\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\nbody #main #tasks .fadeInRight {\n  -webkit-animation-name: fadeinright;\n  animation-name: fadeInRight;\n}\n\nbody #main #clear-btn {\n  border: none;\n  background-color: #f3f1f1;\n  border-bottom: 0.2px solid #b2b2b2;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  font-size: 16px;\n  font-weight: 300;\n  color: #7a7a7a;\n  padding: 15px;\n  -webkit-transition: 0.6s;\n  transition: 0.6s;\n  cursor: pointer;\n}\n\nbody #main #clear-btn:hover {\n  background-color: #8e8e8e;\n  color: #333;\n}\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,aAAa;EACb,0BAA0B;EAC1B,qBAAqB;EACrB,WAAW;EACX,kCAAkC;EAClC,WAAW;AACb;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,iBAAiB;EACjB,UAAU;EACV,6DAA6D;EAC7D,qDAAqD;EACrD,eAAe;EACf,gBAAgB;EAChB,oBAAoB;EACpB,aAAa;EACb,4BAA4B;EAC5B,6BAA6B;EAC7B,0BAA0B;EAC1B,sBAAsB;AACxB;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,gBAAgB;EAChB,4BAA4B;EAC5B,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,8BAA8B;EAC9B,sBAAsB;EACtB,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kCAAkC;EAClC,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;EACpB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,wBAAwB;EACxB,wBAAwB;EACxB,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,oBAAoB;EACpB,aAAa;EACb,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,YAAY;EACZ,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,wBAAwB;EACxB,gBAAgB;EAChB,eAAe;EACf,gCAAgC;EAChC,wBAAwB;EACxB,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,oBAAoB;EACpB,aAAa;EACb,0BAA0B;EAC1B,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE;IACE,UAAU;IACV,mCAAmC;IACnC,2BAA2B;EAC7B;;EAEA;IACE,UAAU;IACV,gCAAgC;IAChC,wBAAwB;EAC1B;AACF;;AAEA;EACE;IACE,UAAU;IACV,mCAAmC;IACnC,2BAA2B;EAC7B;;EAEA;IACE,UAAU;IACV,gCAAgC;IAChC,wBAAwB;EAC1B;AACF;;AAEA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,kCAAkC;EAClC,8BAA8B;EAC9B,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,aAAa;EACb,wBAAwB;EACxB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb","sourcesContent":["body .project {\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  width: 100%;\n  font-family: Helvetica, sans-serif;\n  color: #333;\n}\n\nbody #main {\n  width: 90%;\n  max-width: 600px;\n  margin: 50px auto;\n  padding: 0;\n  -webkit-box-shadow: 0 4px 8px 0 #0003, 0 6px 20px 0 #00000030;\n  box-shadow: 0 4px 8px 0 #0003, 0 6px 20px 0 #00000030;\n  font-size: 16px;\n  font-weight: 300;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\nbody #main h1 {\n  border-bottom: 0.5px solid #b2b2b2;\n  font-size: 18px;\n  font-weight: 400;\n  padding: 20px 10px 15px 10px;\n  margin: 0;\n}\n\nbody #main #task-input {\n  border: none;\n  border-bottom: 0.2px solid #b2b2b2;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  color: #7a7a7a;\n  font-style: italic;\n  font-size: 16px;\n  padding: 15px 10px;\n  margin: 0;\n  width: 100%;\n}\n\nbody #main #tasks {\n  list-style-type: none;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody #main #tasks li {\n  border-bottom: 0.2px solid #b2b2b2;\n  padding: 15px 10px;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  margin: 0;\n}\n\nbody #main #tasks li input {\n  margin: 0 15px;\n  cursor: pointer;\n}\n\nbody #main #tasks li .task-text {\n  min-width: 70%;\n  padding: 0 0 2px 0;\n}\n\nbody #main #tasks li .task-options {\n  position: absolute;\n  right: 5px;\n  top: 0;\n  font-weight: 900;\n  color: #848484;\n  font-size: 20px;\n  -webkit-transition: 0.3s;\n  -webkit-transition: 0.6s;\n  transition: 0.6s;\n  cursor: pointer;\n  width: 60px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: end;\n  height: 100%;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\nbody #main #tasks li .task-options:hover {\n  color: #1c9159;\n}\n\nbody #main #tasks li .btn {\n  position: absolute;\n  color: #b2b2b2;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  cursor: pointer;\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\nbody #main #tasks li .del-btn {\n  right: 25px;\n  color: #c14c4c;\n}\n\nbody #main #tasks li .del-btn:hover {\n  color: #b01111;\n}\n\nbody #main #tasks li .edit-btn {\n  right: 50px;\n  color: #3d78ab;\n}\n\nbody #main #tasks li .edit-btn:hover {\n  color: #0b406e;\n}\n\nbody #main #tasks li .editing {\n  color: #0d7a1e;\n}\n\nbody #main #tasks .completed {\n  background-color: #fcfcfc;\n  color: #7a7a7a;\n}\n\nbody #main #tasks .submenu {\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  position: absolute;\n}\n\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\nbody #main #tasks .fadeInRight {\n  -webkit-animation-name: fadeinright;\n  animation-name: fadeInRight;\n}\n\nbody #main #clear-btn {\n  border: none;\n  background-color: #f3f1f1;\n  border-bottom: 0.2px solid #b2b2b2;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  font-size: 16px;\n  font-weight: 300;\n  color: #7a7a7a;\n  padding: 15px;\n  -webkit-transition: 0.6s;\n  transition: 0.6s;\n  cursor: pointer;\n}\n\nbody #main #clear-btn:hover {\n  background-color: #8e8e8e;\n  color: #333;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/localStorage.js":
/*!*************************************!*\
  !*** ./src/scripts/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateLocal": () => (/* binding */ updateLocal),
/* harmony export */   "getLocal": () => (/* binding */ getLocal)
/* harmony export */ });
function updateLocal(tasks) {
  localStorage.setItem('todolist', JSON.stringify(tasks));
}

function getLocal() {
  if (localStorage) {
    const tasks = JSON.parse(localStorage.getItem('todolist'));
    return tasks;
  }
  return -1;
}



/***/ }),

/***/ "./src/scripts/newTasks.js":
/*!*********************************!*\
  !*** ./src/scripts/newTasks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/scripts/localStorage.js");
/* harmony import */ var _printInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printInterface.js */ "./src/scripts/printInterface.js");
/* harmony import */ var _queries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries.js */ "./src/scripts/queries.js");




const taskInput = (0,_queries_js__WEBPACK_IMPORTED_MODULE_2__.getElement)('#task-input');

function getTask(tasks, text) {
  if (text.length === 0) {
    taskInput.placeholder = 'Please enter a valid task title';
  } else if (tasks.length === 0) {
    taskInput.value = '';
    tasks.push({
      index: 1,
      description: text,
      completed: false,
    });
  } else {
    taskInput.value = '';
    tasks.push({
      index: tasks.length + 1,
      description: text,
      completed: false,
    });
  }
  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.updateLocal)(tasks);
  (0,_printInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks[tasks.length - 1], tasks);
  taskInput.value = '';
}

function updateTasks(tasks) {
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (taskInput.value.length > 0) {
        const local = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getLocal)();
        if (local) {
          tasks = local;
        } else {
          tasks = [];
        }
        getTask(tasks, taskInput.value);
        taskInput.value = '';
      }
    }
  });
  return tasks;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTasks);

/***/ }),

/***/ "./src/scripts/printInterface.js":
/*!***************************************!*\
  !*** ./src/scripts/printInterface.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/scripts/localStorage.js");
/* harmony import */ var _queries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queries.js */ "./src/scripts/queries.js");
/* harmony import */ var _updateTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateTasks.js */ "./src/scripts/updateTasks.js");




const subMenu = (menu, description, tasks, task) => {
  const editBtn = (0,_queries_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span');
  editBtn.innerHTML = '&#9998;';
  editBtn.className = 'edit-btn btn fadeInRight';
  const delBtn = (0,_queries_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span');
  delBtn.innerHTML = '&#10005;';
  delBtn.className = 'del-btn btn fadeInRight';
  editBtn.addEventListener('click', () => {
    (0,_updateTasks_js__WEBPACK_IMPORTED_MODULE_2__.editTask)(editBtn, description, tasks, task);
  });
  delBtn.addEventListener('click', () => {
    tasks = (0,_updateTasks_js__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(task, tasks);
    // eslint-disable-next-line no-use-before-define
    printTasks(tasks);
  });
  menu.appendChild(editBtn);
  menu.appendChild(delBtn);
  return menu;
};

function printTask(task, tasks) {
  const li = (0,_queries_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('li');
  const done = (0,_queries_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('input');
  done.type = 'checkbox';
  done.checked = task.completed;
  if (task.completed) {
    li.className = 'completed';
  }
  done.addEventListener('change', () => {
    li.classList.toggle('completed');
    (0,_updateTasks_js__WEBPACK_IMPORTED_MODULE_2__.changeStatus)(done, tasks, task);
  });
  const description = (0,_queries_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span');
  description.className = 'task-text';
  description.innerHTML = task.description;
  let menu = (0,_queries_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span');
  const menuBtn = (0,_queries_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span');
  menuBtn.innerHTML = '⋮';
  menu.appendChild(menuBtn);
  menu.className = 'task-options';
  let mTog = true;
  menuBtn.addEventListener('click', () => {
    if (mTog) {
      menu = subMenu(menu, description, tasks, task);
      mTog = false;
    } else {
      menu.innerHTML = '';
      menu.appendChild(menuBtn);
      mTog = true;
    }
  });
  li.appendChild(done);
  li.appendChild(description);
  li.appendChild(menu);
  (0,_queries_js__WEBPACK_IMPORTED_MODULE_1__.getElement)('#tasks').appendChild(li);
}

function printTasks(tasks = []) {
  (0,_queries_js__WEBPACK_IMPORTED_MODULE_1__.getElement)('#tasks').innerHTML = '';
  const local = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getLocal)();
  if (local) {
    tasks = local;
  }
  tasks.forEach((task) => printTask(task, tasks));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printTasks);

/***/ }),

/***/ "./src/scripts/queries.js":
/*!********************************!*\
  !*** ./src/scripts/queries.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getElement": () => (/* binding */ getElement),
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
function getElement(element) {
  return document.querySelector(element);
}

function createElement(element) {
  return document.createElement(element);
}



/***/ }),

/***/ "./src/scripts/taskFilter.js":
/*!***********************************!*\
  !*** ./src/scripts/taskFilter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/scripts/localStorage.js");
/* harmony import */ var _printInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printInterface.js */ "./src/scripts/printInterface.js");
/* harmony import */ var _queries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries.js */ "./src/scripts/queries.js");
/* harmony import */ var _updateIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateIndex.js */ "./src/scripts/updateIndex.js");





function taskFilter(list) {
  const local = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getLocal)();
  if (local) {
    list = local;
  }
  const filtered = list.filter((task) => !task.completed);
  list = (0,_updateIndex_js__WEBPACK_IMPORTED_MODULE_3__["default"])(filtered);
  (0,_printInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"])(list);
}

function filterBtn(list = []) {
  const local = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getLocal)();
  if (local) {
    list = local;
  }
  const clearBtn = (0,_queries_js__WEBPACK_IMPORTED_MODULE_2__.getElement)('#clear-btn');
  clearBtn.onclick = () => taskFilter(list);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterBtn);

/***/ }),

/***/ "./src/scripts/updateIndex.js":
/*!************************************!*\
  !*** ./src/scripts/updateIndex.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/scripts/localStorage.js");


function newIndex(tasks) {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.updateLocal)(tasks);
  return tasks;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newIndex);

/***/ }),

/***/ "./src/scripts/updateTasks.js":
/*!************************************!*\
  !*** ./src/scripts/updateTasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeStatus": () => (/* binding */ changeStatus),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/scripts/localStorage.js");
/* harmony import */ var _updateIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateIndex.js */ "./src/scripts/updateIndex.js");



function changeStatus(done, tasks, task) {
  const local = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getLocal)();
  if (local) {
    tasks = local;
    tasks = (0,_updateIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
  }
  const objIndex = tasks.findIndex((obj) => obj.index === task.index);
  if (done.checked) {
    tasks[objIndex].completed = true;
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.updateLocal)(tasks);
  } else {
    tasks[objIndex].completed = false;
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.updateLocal)(tasks);
  }
}

function editTask(editBtn, description, tasks, task) {
  const local = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getLocal)();
  if (local) {
    tasks = local;
    tasks = (0,_updateIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
  }

  const objIndex = tasks.findIndex((obj) => obj.index === task.index);
  editBtn.classList.toggle('editing');
  if (editBtn.innerHTML === '✎') {
    editBtn.innerHTML = '&#10004;';
    description.contentEditable = true;
  } else {
    editBtn.innerHTML = '&#9998;';
    description.contentEditable = false;
    tasks[objIndex].description = description.innerText;
  }
  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.updateLocal)(tasks);
}

function deleteTask(task, tasks) {
  const local = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getLocal)();
  if (local) {
    tasks = local;
    tasks = (0,_updateIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
  }
  const objIndex = tasks.findIndex((obj) => obj.index === task.index);
  tasks.splice(objIndex, 1);
  (0,_updateIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
  return tasks;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _scripts_printInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/printInterface.js */ "./src/scripts/printInterface.js");
/* harmony import */ var _scripts_newTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/newTasks.js */ "./src/scripts/newTasks.js");
/* harmony import */ var _scripts_taskFilter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/taskFilter.js */ "./src/scripts/taskFilter.js");






let tasks = [];

tasks = (0,_scripts_newTasks_js__WEBPACK_IMPORTED_MODULE_2__["default"])(tasks);
(0,_scripts_printInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
(0,_scripts_taskFilter_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkRBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsSUFBSTtBQUNKLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFXO0FBQ2I7O0FBRUE7QUFDQSxnQkFBZ0IsMERBQVE7QUFDeEI7QUFDQTtBQUNBLFlBQVksMkRBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBUTtBQUNWO0FBQ0E7Ozs7Ozs7O1VDakRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMkI7O0FBRTBCO0FBQ0w7QUFDQTs7QUFFaEQ7O0FBRUEsUUFBUSxnRUFBVztBQUNuQixzRUFBVTtBQUNWLGtFQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC12Mi8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdjIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0LXYyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdjIvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0LXYyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0LXYyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0LXYyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC12Mi8uL3NyYy9zY3JpcHRzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC12Mi8uL3NyYy9zY3JpcHRzL25ld1Rhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0LXYyLy4vc3JjL3NjcmlwdHMvcHJpbnRJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdjIvLi9zcmMvc2NyaXB0cy9xdWVyaWVzLmpzIiwid2VicGFjazovL3RvZG9saXN0LXYyLy4vc3JjL3NjcmlwdHMvdGFza0ZpbHRlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC12Mi8uL3NyYy9zY3JpcHRzL3VwZGF0ZUluZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0LXYyLy4vc3JjL3NjcmlwdHMvdXBkYXRlVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdjIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdjIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdjIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0LXYyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdjIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC12Mi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkgLnByb2plY3Qge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuYm9keSAjbWFpbiB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IDAgIzAwMDMsIDAgNnB4IDIwcHggMCAjMDAwMDAwMzA7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCAjMDAwMywgMCA2cHggMjBweCAwICMwMDAwMDAzMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmJvZHkgI21haW4gaDEge1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2IyYjJiMjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBwYWRkaW5nOiAyMHB4IDEwcHggMTVweCAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5ICNtYWluICN0YXNrLWlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNiMmIyYjI7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICM3YTdhN2E7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSAjbWFpbiAjdGFza3Mge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5ICNtYWluICN0YXNrcyBsaSB7XFxuICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCAjYjJiMmIyO1xcbiAgcGFkZGluZzogMTVweCAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5ICNtYWluICN0YXNrcyBsaSBpbnB1dCB7XFxuICBtYXJnaW46IDAgMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSAjbWFpbiAjdGFza3MgbGkgLnRhc2stdGV4dCB7XFxuICBtaW4td2lkdGg6IDcwJTtcXG4gIHBhZGRpbmc6IDAgMCAycHggMDtcXG59XFxuXFxuYm9keSAjbWFpbiAjdGFza3MgbGkgLnRhc2stb3B0aW9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbG9yOiAjODQ4NDg0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjZzO1xcbiAgdHJhbnNpdGlvbjogMC42cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJvZHkgI21haW4gI3Rhc2tzIGxpIC50YXNrLW9wdGlvbnM6aG92ZXIge1xcbiAgY29sb3I6ICMxYzkxNTk7XFxufVxcblxcbmJvZHkgI21haW4gI3Rhc2tzIGxpIC5idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICNiMmIyYjI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cXG5ib2R5ICNtYWluICN0YXNrcyBsaSAuZGVsLWJ0biB7XFxuICByaWdodDogMjVweDtcXG4gIGNvbG9yOiAjYzE0YzRjO1xcbn1cXG5cXG5ib2R5ICNtYWluICN0YXNrcyBsaSAuZGVsLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogI2IwMTExMTtcXG59XFxuXFxuYm9keSAjbWFpbiAjdGFza3MgbGkgLmVkaXQtYnRuIHtcXG4gIHJpZ2h0OiA1MHB4O1xcbiAgY29sb3I6ICMzZDc4YWI7XFxufVxcblxcbmJvZHkgI21haW4gI3Rhc2tzIGxpIC5lZGl0LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzBiNDA2ZTtcXG59XFxuXFxuYm9keSAjbWFpbiAjdGFza3MgbGkgLmVkaXRpbmcge1xcbiAgY29sb3I6ICMwZDdhMWU7XFxufVxcblxcbmJvZHkgI21haW4gI3Rhc2tzIC5jb21wbGV0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcXG4gIGNvbG9yOiAjN2E3YTdhO1xcbn1cXG5cXG5ib2R5ICNtYWluICN0YXNrcyAuc3VibWVudSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuYm9keSAjbWFpbiAjdGFza3MgLmZhZGVJblJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVpbnJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xcbn1cXG5cXG5ib2R5ICNtYWluICNjbGVhci1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjFmMTtcXG4gIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNiMmIyYjI7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjN2E3YTdhO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC42cztcXG4gIHRyYW5zaXRpb246IDAuNnM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJvZHkgI21haW4gI2NsZWFyLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGU4ZThlO1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsNkRBQTZEO0VBQzdELHFEQUFxRDtFQUNyRCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsbUNBQW1DO0lBQ25DLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixtQ0FBbUM7SUFDbkMsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkgLnByb2plY3Qge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuYm9keSAjbWFpbiB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IDAgIzAwMDMsIDAgNnB4IDIwcHggMCAjMDAwMDAwMzA7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCAjMDAwMywgMCA2cHggMjBweCAwICMwMDAwMDAzMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmJvZHkgI21haW4gaDEge1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2IyYjJiMjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBwYWRkaW5nOiAyMHB4IDEwcHggMTVweCAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5ICNtYWluICN0YXNrLWlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNiMmIyYjI7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICM3YTdhN2E7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSAjbWFpbiAjdGFza3Mge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5ICNtYWluICN0YXNrcyBsaSB7XFxuICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCAjYjJiMmIyO1xcbiAgcGFkZGluZzogMTVweCAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5ICNtYWluICN0YXNrcyBsaSBpbnB1dCB7XFxuICBtYXJnaW46IDAgMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSAjbWFpbiAjdGFza3MgbGkgLnRhc2stdGV4dCB7XFxuICBtaW4td2lkdGg6IDcwJTtcXG4gIHBhZGRpbmc6IDAgMCAycHggMDtcXG59XFxuXFxuYm9keSAjbWFpbiAjdGFza3MgbGkgLnRhc2stb3B0aW9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbG9yOiAjODQ4NDg0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjZzO1xcbiAgdHJhbnNpdGlvbjogMC42cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJvZHkgI21haW4gI3Rhc2tzIGxpIC50YXNrLW9wdGlvbnM6aG92ZXIge1xcbiAgY29sb3I6ICMxYzkxNTk7XFxufVxcblxcbmJvZHkgI21haW4gI3Rhc2tzIGxpIC5idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICNiMmIyYjI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cXG5ib2R5ICNtYWluICN0YXNrcyBsaSAuZGVsLWJ0biB7XFxuICByaWdodDogMjVweDtcXG4gIGNvbG9yOiAjYzE0YzRjO1xcbn1cXG5cXG5ib2R5ICNtYWluICN0YXNrcyBsaSAuZGVsLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogI2IwMTExMTtcXG59XFxuXFxuYm9keSAjbWFpbiAjdGFza3MgbGkgLmVkaXQtYnRuIHtcXG4gIHJpZ2h0OiA1MHB4O1xcbiAgY29sb3I6ICMzZDc4YWI7XFxufVxcblxcbmJvZHkgI21haW4gI3Rhc2tzIGxpIC5lZGl0LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzBiNDA2ZTtcXG59XFxuXFxuYm9keSAjbWFpbiAjdGFza3MgbGkgLmVkaXRpbmcge1xcbiAgY29sb3I6ICMwZDdhMWU7XFxufVxcblxcbmJvZHkgI21haW4gI3Rhc2tzIC5jb21wbGV0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcXG4gIGNvbG9yOiAjN2E3YTdhO1xcbn1cXG5cXG5ib2R5ICNtYWluICN0YXNrcyAuc3VibWVudSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuYm9keSAjbWFpbiAjdGFza3MgLmZhZGVJblJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVpbnJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xcbn1cXG5cXG5ib2R5ICNtYWluICNjbGVhci1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjFmMTtcXG4gIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNiMmIyYjI7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjN2E3YTdhO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC42cztcXG4gIHRyYW5zaXRpb246IDAuNnM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJvZHkgI21haW4gI2NsZWFyLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGU4ZThlO1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gdXBkYXRlTG9jYWwodGFza3MpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYWwoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UpIHtcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9saXN0JykpO1xuICAgIHJldHVybiB0YXNrcztcbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbmV4cG9ydCB7IHVwZGF0ZUxvY2FsLCBnZXRMb2NhbCB9OyIsImltcG9ydCB7IGdldExvY2FsLCB1cGRhdGVMb2NhbCB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCBwcmludFRhc2sgZnJvbSAnLi9wcmludEludGVyZmFjZS5qcyc7XG5pbXBvcnQgeyBnZXRFbGVtZW50IH0gZnJvbSAnLi9xdWVyaWVzLmpzJztcblxuY29uc3QgdGFza0lucHV0ID0gZ2V0RWxlbWVudCgnI3Rhc2staW5wdXQnKTtcblxuZnVuY3Rpb24gZ2V0VGFzayh0YXNrcywgdGV4dCkge1xuICBpZiAodGV4dC5sZW5ndGggPT09IDApIHtcbiAgICB0YXNrSW5wdXQucGxhY2Vob2xkZXIgPSAnUGxlYXNlIGVudGVyIGEgdmFsaWQgdGFzayB0aXRsZSc7XG4gIH0gZWxzZSBpZiAodGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgdGFza0lucHV0LnZhbHVlID0gJyc7XG4gICAgdGFza3MucHVzaCh7XG4gICAgICBpbmRleDogMSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0ZXh0LFxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXNrSW5wdXQudmFsdWUgPSAnJztcbiAgICB0YXNrcy5wdXNoKHtcbiAgICAgIGluZGV4OiB0YXNrcy5sZW5ndGggKyAxLFxuICAgICAgZGVzY3JpcHRpb246IHRleHQsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIH0pO1xuICB9XG4gIHVwZGF0ZUxvY2FsKHRhc2tzKTtcbiAgcHJpbnRUYXNrKHRhc2tzW3Rhc2tzLmxlbmd0aCAtIDFdLCB0YXNrcyk7XG4gIHRhc2tJbnB1dC52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrcyh0YXNrcykge1xuICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaWYgKHRhc2tJbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsID0gZ2V0TG9jYWwoKTtcbiAgICAgICAgaWYgKGxvY2FsKSB7XG4gICAgICAgICAgdGFza3MgPSBsb2NhbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXNrcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGdldFRhc2sodGFza3MsIHRhc2tJbnB1dC52YWx1ZSk7XG4gICAgICAgIHRhc2tJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXNrcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlVGFza3M7IiwiaW1wb3J0IHsgZ2V0TG9jYWwgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBnZXRFbGVtZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9xdWVyaWVzLmpzJztcbmltcG9ydCB7IGNoYW5nZVN0YXR1cywgZGVsZXRlVGFzaywgZWRpdFRhc2sgfSBmcm9tICcuL3VwZGF0ZVRhc2tzLmpzJztcblxuY29uc3Qgc3ViTWVudSA9IChtZW51LCBkZXNjcmlwdGlvbiwgdGFza3MsIHRhc2spID0+IHtcbiAgY29uc3QgZWRpdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZWRpdEJ0bi5pbm5lckhUTUwgPSAnJiM5OTk4Oyc7XG4gIGVkaXRCdG4uY2xhc3NOYW1lID0gJ2VkaXQtYnRuIGJ0biBmYWRlSW5SaWdodCc7XG4gIGNvbnN0IGRlbEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZGVsQnRuLmlubmVySFRNTCA9ICcmIzEwMDA1Oyc7XG4gIGRlbEJ0bi5jbGFzc05hbWUgPSAnZGVsLWJ0biBidG4gZmFkZUluUmlnaHQnO1xuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVkaXRUYXNrKGVkaXRCdG4sIGRlc2NyaXB0aW9uLCB0YXNrcywgdGFzayk7XG4gIH0pO1xuICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFza3MgPSBkZWxldGVUYXNrKHRhc2ssIHRhc2tzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICBwcmludFRhc2tzKHRhc2tzKTtcbiAgfSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcbiAgcmV0dXJuIG1lbnU7XG59O1xuXG5mdW5jdGlvbiBwcmludFRhc2sodGFzaywgdGFza3MpIHtcbiAgY29uc3QgbGkgPSBjcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBkb25lID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZG9uZS50eXBlID0gJ2NoZWNrYm94JztcbiAgZG9uZS5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XG4gIGlmICh0YXNrLmNvbXBsZXRlZCkge1xuICAgIGxpLmNsYXNzTmFtZSA9ICdjb21wbGV0ZWQnO1xuICB9XG4gIGRvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGxpLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuICAgIGNoYW5nZVN0YXR1cyhkb25lLCB0YXNrcywgdGFzayk7XG4gIH0pO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ3Rhc2stdGV4dCc7XG4gIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IHRhc2suZGVzY3JpcHRpb247XG4gIGxldCBtZW51ID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBtZW51QnRuID0gY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBtZW51QnRuLmlubmVySFRNTCA9ICfii64nO1xuICBtZW51LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICBtZW51LmNsYXNzTmFtZSA9ICd0YXNrLW9wdGlvbnMnO1xuICBsZXQgbVRvZyA9IHRydWU7XG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG1Ub2cpIHtcbiAgICAgIG1lbnUgPSBzdWJNZW51KG1lbnUsIGRlc2NyaXB0aW9uLCB0YXNrcywgdGFzayk7XG4gICAgICBtVG9nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnUuaW5uZXJIVE1MID0gJyc7XG4gICAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgICAgbVRvZyA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgbGkuYXBwZW5kQ2hpbGQoZG9uZSk7XG4gIGxpLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgbGkuYXBwZW5kQ2hpbGQobWVudSk7XG4gIGdldEVsZW1lbnQoJyN0YXNrcycpLmFwcGVuZENoaWxkKGxpKTtcbn1cblxuZnVuY3Rpb24gcHJpbnRUYXNrcyh0YXNrcyA9IFtdKSB7XG4gIGdldEVsZW1lbnQoJyN0YXNrcycpLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBsb2NhbCA9IGdldExvY2FsKCk7XG4gIGlmIChsb2NhbCkge1xuICAgIHRhc2tzID0gbG9jYWw7XG4gIH1cbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4gcHJpbnRUYXNrKHRhc2ssIHRhc2tzKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaW50VGFza3M7IiwiZnVuY3Rpb24gZ2V0RWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG59XG5cbmV4cG9ydCB7IGdldEVsZW1lbnQsIGNyZWF0ZUVsZW1lbnQgfTsiLCJpbXBvcnQgeyBnZXRMb2NhbCB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCBwcmludFRhc2tzIGZyb20gJy4vcHJpbnRJbnRlcmZhY2UuanMnO1xuaW1wb3J0IHsgZ2V0RWxlbWVudCB9IGZyb20gJy4vcXVlcmllcy5qcyc7XG5pbXBvcnQgbmV3SW5kZXggZnJvbSAnLi91cGRhdGVJbmRleC5qcyc7XG5cbmZ1bmN0aW9uIHRhc2tGaWx0ZXIobGlzdCkge1xuICBjb25zdCBsb2NhbCA9IGdldExvY2FsKCk7XG4gIGlmIChsb2NhbCkge1xuICAgIGxpc3QgPSBsb2NhbDtcbiAgfVxuICBjb25zdCBmaWx0ZXJlZCA9IGxpc3QuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpO1xuICBsaXN0ID0gbmV3SW5kZXgoZmlsdGVyZWQpO1xuICBwcmludFRhc2tzKGxpc3QpO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJCdG4obGlzdCA9IFtdKSB7XG4gIGNvbnN0IGxvY2FsID0gZ2V0TG9jYWwoKTtcbiAgaWYgKGxvY2FsKSB7XG4gICAgbGlzdCA9IGxvY2FsO1xuICB9XG4gIGNvbnN0IGNsZWFyQnRuID0gZ2V0RWxlbWVudCgnI2NsZWFyLWJ0bicpO1xuICBjbGVhckJ0bi5vbmNsaWNrID0gKCkgPT4gdGFza0ZpbHRlcihsaXN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmlsdGVyQnRuOyIsImltcG9ydCB7IHVwZGF0ZUxvY2FsIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuXG5mdW5jdGlvbiBuZXdJbmRleCh0YXNrcykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGFza3NbaV0uaW5kZXggPSBpICsgMTtcbiAgfVxuICB1cGRhdGVMb2NhbCh0YXNrcyk7XG4gIHJldHVybiB0YXNrcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3SW5kZXg7IiwiaW1wb3J0IHsgZ2V0TG9jYWwsIHVwZGF0ZUxvY2FsIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IG5ld0luZGV4IGZyb20gJy4vdXBkYXRlSW5kZXguanMnO1xuXG5mdW5jdGlvbiBjaGFuZ2VTdGF0dXMoZG9uZSwgdGFza3MsIHRhc2spIHtcbiAgY29uc3QgbG9jYWwgPSBnZXRMb2NhbCgpO1xuICBpZiAobG9jYWwpIHtcbiAgICB0YXNrcyA9IGxvY2FsO1xuICAgIHRhc2tzID0gbmV3SW5kZXgodGFza3MpO1xuICB9XG4gIGNvbnN0IG9iakluZGV4ID0gdGFza3MuZmluZEluZGV4KChvYmopID0+IG9iai5pbmRleCA9PT0gdGFzay5pbmRleCk7XG4gIGlmIChkb25lLmNoZWNrZWQpIHtcbiAgICB0YXNrc1tvYmpJbmRleF0uY29tcGxldGVkID0gdHJ1ZTtcbiAgICB1cGRhdGVMb2NhbCh0YXNrcyk7XG4gIH0gZWxzZSB7XG4gICAgdGFza3Nbb2JqSW5kZXhdLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHVwZGF0ZUxvY2FsKHRhc2tzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0VGFzayhlZGl0QnRuLCBkZXNjcmlwdGlvbiwgdGFza3MsIHRhc2spIHtcbiAgY29uc3QgbG9jYWwgPSBnZXRMb2NhbCgpO1xuICBpZiAobG9jYWwpIHtcbiAgICB0YXNrcyA9IGxvY2FsO1xuICAgIHRhc2tzID0gbmV3SW5kZXgodGFza3MpO1xuICB9XG5cbiAgY29uc3Qgb2JqSW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmluZGV4ID09PSB0YXNrLmluZGV4KTtcbiAgZWRpdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdlZGl0aW5nJyk7XG4gIGlmIChlZGl0QnRuLmlubmVySFRNTCA9PT0gJ+KcjicpIHtcbiAgICBlZGl0QnRuLmlubmVySFRNTCA9ICcmIzEwMDA0Oyc7XG4gICAgZGVzY3JpcHRpb24uY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBlZGl0QnRuLmlubmVySFRNTCA9ICcmIzk5OTg7JztcbiAgICBkZXNjcmlwdGlvbi5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcbiAgICB0YXNrc1tvYmpJbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5pbm5lclRleHQ7XG4gIH1cbiAgdXBkYXRlTG9jYWwodGFza3MpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKHRhc2ssIHRhc2tzKSB7XG4gIGNvbnN0IGxvY2FsID0gZ2V0TG9jYWwoKTtcbiAgaWYgKGxvY2FsKSB7XG4gICAgdGFza3MgPSBsb2NhbDtcbiAgICB0YXNrcyA9IG5ld0luZGV4KHRhc2tzKTtcbiAgfVxuICBjb25zdCBvYmpJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaW5kZXggPT09IHRhc2suaW5kZXgpO1xuICB0YXNrcy5zcGxpY2Uob2JqSW5kZXgsIDEpO1xuICBuZXdJbmRleCh0YXNrcyk7XG4gIHJldHVybiB0YXNrcztcbn1cblxuZXhwb3J0IHsgY2hhbmdlU3RhdHVzLCBlZGl0VGFzaywgZGVsZXRlVGFzayB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcblxuaW1wb3J0IHByaW50VGFza3MgZnJvbSAnLi9zY3JpcHRzL3ByaW50SW50ZXJmYWNlLmpzJztcbmltcG9ydCB1cGRhdGVUYXNrcyBmcm9tICcuL3NjcmlwdHMvbmV3VGFza3MuanMnO1xuaW1wb3J0IGZpbHRlckJ0biBmcm9tICcuL3NjcmlwdHMvdGFza0ZpbHRlci5qcyc7XG5cbmxldCB0YXNrcyA9IFtdO1xuXG50YXNrcyA9IHVwZGF0ZVRhc2tzKHRhc2tzKTtcbnByaW50VGFza3ModGFza3MpO1xuZmlsdGVyQnRuKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9