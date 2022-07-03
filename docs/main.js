/* eslint-disable */
"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_b"] = self["webpackChunkwebpack_b"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: teal;\\r\\n  color: #000;\\r\\n  font-family: 'M PLUS 1p', sans-serif;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  background-color: #000;\\r\\n  padding: 20px;\\r\\n  color: #fff;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#menu {\\r\\n  width: 800px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n#search {\\r\\n  padding: 4px 15px;\\r\\n  font-family: inherit;\\r\\n  font-size: 15px;\\r\\n  width: 35%;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  width: 80px;\\r\\n  height: 43px;\\r\\n}\\r\\n\\r\\n#nav-header {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: #fff;\\r\\n  position: relative;\\r\\n  right: 0;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  color: #fff;\\r\\n  letter-spacing: 4px;\\r\\n}\\r\\n\\r\\n#showcase h2 {\\r\\n  display: inline;\\r\\n}\\r\\n\\r\\n#refresh,\\r\\n#form button {\\r\\n  border: none;\\r\\n  color: #fff;\\r\\n  font-size: 23px;\\r\\n  border-radius: 8px;\\r\\n  font-family: inherit;\\r\\n}\\r\\n\\r\\n#refresh {\\r\\n  padding: 15px 20px;\\r\\n  color: #000;\\r\\n  background-color: #fff;\\r\\n  font-size: 16px;\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n#showcase button:hover {\\r\\n  background-color: rgb(184, 54, 54);\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n#showcase button:hover,\\r\\n#form button:hover {\\r\\n  cursor: pointer;\\r\\n  transition: 0.7s;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 80%;\\r\\n  margin: 100px auto auto auto;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(2, 1fr);\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n#form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: #fff;\\r\\n  width: 100%;\\r\\n  padding: 30px;\\r\\n  position: relative;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n#form-header,\\r\\n#showcase-title {\\r\\n  background-color: #080a1f;\\r\\n  color: #fff;\\r\\n  width: 100%;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n#showcase-title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  gap: 20px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#form input {\\r\\n  font-family: inherit;\\r\\n  padding: 10px 35px;\\r\\n  border: none;\\r\\n  border-bottom: 1.2px solid #ccc;\\r\\n  font-size: 17px;\\r\\n}\\r\\n\\r\\n#form i {\\r\\n  position: absolute;\\r\\n}\\r\\n\\r\\n.icon {\\r\\n  padding: 13px;\\r\\n  min-width: 40px;\\r\\n  color: #555;\\r\\n}\\r\\n\\r\\n#message {\\r\\n  display: none;\\r\\n  position: absolute;\\r\\n  top: 10px;\\r\\n  right: 50%;\\r\\n  background-color: rgb(99, 245, 107);\\r\\n  color: #000;\\r\\n  font-weight: 400;\\r\\n  padding: 6px 8px;\\r\\n  font-size: 14px;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\n#social-media {\\r\\n  background-color: #fff;\\r\\n  padding: 4px;\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  top: 200px;\\r\\n  display: flex;\\r\\n  gap: 6px;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n#social-media img {\\r\\n  width: 40px;\\r\\n  height: 40px;\\r\\n}\\r\\n\\r\\n#social-media img:hover {\\r\\n  transform: scale(0.9);\\r\\n}\\r\\n\\r\\n.input-field {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n#form input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#form input::placeholder {\\r\\n  color: #555;\\r\\n}\\r\\n\\r\\n#form button[type=\\\"submit\\\"] {\\r\\n  padding: 15px 20px;\\r\\n  width: 150px;\\r\\n  font-size: 18px;\\r\\n  margin-top: 20px;\\r\\n  box-sizing: border-box;\\r\\n  position: relative;\\r\\n  margin-left: 70%;\\r\\n  background-color: #080a1f;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n  padding: 20px 15px;\\r\\n  color: #fff;\\r\\n  font-size: 17px;\\r\\n  margin: 10px;\\r\\n  margin-left: 0;\\r\\n  border-radius: 4px;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\nli:hover {\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\nul {\\r\\n  width: 100%;\\r\\n  height: 58vh;\\r\\n  overflow: auto;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n/* scroll bar */\\r\\n\\r\\n/* width */\\r\\n::-webkit-scrollbar {\\r\\n  width: 7px;\\r\\n}\\r\\n\\r\\n/* Track */\\r\\n::-webkit-scrollbar-track {\\r\\n  background: #f1f1f1;\\r\\n}\\r\\n\\r\\n/* Handle */\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background: #888;\\r\\n}\\r\\n\\r\\n/* Handle on hover */\\r\\n::-webkit-scrollbar-thumb:hover {\\r\\n  background: #555;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  h1 {\\r\\n    font-size: 15px;\\r\\n  }\\r\\n\\r\\n  h2 {\\r\\n    font-size: 14px;\\r\\n    letter-spacing: 1.5px;\\r\\n  }\\r\\n\\r\\n  h3 {\\r\\n    font-size: 13px;\\r\\n    letter-spacing: 2px;\\r\\n  }\\r\\n\\r\\n  nav {\\r\\n    padding: 15px 10px;\\r\\n    z-index: 2;\\r\\n    gap: 20px;\\r\\n    position: fixed;\\r\\n  }\\r\\n\\r\\n  .container {\\r\\n    display: flex;\\r\\n    flex-direction: column-reverse;\\r\\n    margin-top: 120px;\\r\\n    width: 95%;\\r\\n  }\\r\\n\\r\\n  #form-header {\\r\\n    padding: 8px 12px;\\r\\n  }\\r\\n\\r\\n  #form {\\r\\n    padding: 15px;\\r\\n  }\\r\\n\\r\\n  #form input {\\r\\n    font-size: 15px;\\r\\n  }\\r\\n\\r\\n  #form button[type=\\\"submit\\\"] {\\r\\n    padding: 8px 4px;\\r\\n    width: 80px;\\r\\n    position: relative;\\r\\n    margin-top: 0;\\r\\n    border-radius: 5px;\\r\\n    font-size: 15px;\\r\\n  }\\r\\n\\r\\n  #logo {\\r\\n    width: 40px;\\r\\n    height: 22px;\\r\\n  }\\r\\n\\r\\n  #search {\\r\\n    width: 100%;\\r\\n    padding: 5px;\\r\\n  }\\r\\n\\r\\n  #menu a {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  #social-media {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  #showcase-title {\\r\\n    gap: 5px;\\r\\n    padding: 8px;\\r\\n    justify-content: space-between;\\r\\n    font-size: 15px;\\r\\n  }\\r\\n\\r\\n  #refresh {\\r\\n    padding: 10px;\\r\\n    border-radius: 4px;\\r\\n    font-size: 15px;\\r\\n  }\\r\\n\\r\\n  ul {\\r\\n    width: 100%;\\r\\n    overflow: visible;\\r\\n  }\\r\\n\\r\\n  li {\\r\\n    margin: 10px 0;\\r\\n    font-size: 15px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-b/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-b/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-b/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-b/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-b/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-b/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-b/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-b/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-b/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-b/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/variables.js */ \"./src/modules/variables.js\");\n/* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form.js */ \"./src/modules/form.js\");\n/* harmony import */ var _modules_async_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/async.js */ \"./src/modules/async.js\");\n/* harmony import */ var _modules_fetch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/fetch.js */ \"./src/modules/fetch.js\");\n\n\n\n\n\n\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.refreshBtn.addEventListener('click', _modules_async_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.form.addEventListener('submit', _modules_form_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.search.addEventListener('keyup', _modules_fetch_js__WEBPACK_IMPORTED_MODULE_4__.filter);\n\n//# sourceURL=webpack://webpack-b/./src/index.js?");

/***/ }),

/***/ "./src/modules/async.js":
/*!******************************!*\
  !*** ./src/modules/async.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch.js */ \"./src/modules/fetch.js\");\n\n\nconst displayScore = async () => {\n  // Execution\n  await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayScore);\n\n//# sourceURL=webpack://webpack-b/./src/modules/async.js?");

/***/ }),

/***/ "./src/modules/fetch.js":
/*!******************************!*\
  !*** ./src/modules/fetch.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData),\n/* harmony export */   \"filter\": () => (/* binding */ filter)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\n\nlet names = [];\n\nconst fetchData = () => {\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__.scorePlaceholder.innerHTML = '';\n  fetch(_variables_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl)\n    .then((res) => res.json())\n    .then((data) => {\n      data.result.forEach((data) => {\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__.scorePlaceholder.innerHTML += `\n      <li class=\"score\" >${data.user}: ${data.score}</li>`;\n        document.querySelectorAll('.score').forEach((li) => {\n          const R = Math.floor(Math.random() * 255);\n          const G = Math.floor(Math.random() * 244);\n          const B = Math.floor(Math.random() * 100);\n          const bg = `rgb(${R}, ${G}, ${B})`;\n          li.style.backgroundColor = bg;\n        });\n      });\n      names = _variables_js__WEBPACK_IMPORTED_MODULE_0__.scorePlaceholder.querySelectorAll('li');\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__.resultCount.textContent = `(${data.result.length}) Players`;\n    });\n};\n\nconst filter = () => {\n  const filterValue = _variables_js__WEBPACK_IMPORTED_MODULE_0__.search.value.toUpperCase();\n  for (let i = 0; i < names.length; i += 1) {\n    if (names[i].innerHTML.toUpperCase().indexOf(filterValue) > -1) {\n      names[i].style.display = '';\n    } else {\n      names[i].style.display = 'none';\n    }\n  }\n};\n\nfetchData();\n\n\n\n//# sourceURL=webpack://webpack-b/./src/modules/fetch.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _post_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.js */ \"./src/modules/post.js\");\n/* harmony import */ var _refresh_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refresh.js */ \"./src/modules/refresh.js\");\n/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.js */ \"./src/modules/user.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\n\n\n\n\nconst handleSubmit = (e) => {\n  e.preventDefault();\n  const userData = new _post_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  userData.add((0,_user_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  (0,_refresh_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_variables_js__WEBPACK_IMPORTED_MODULE_3__.name, _variables_js__WEBPACK_IMPORTED_MODULE_3__.score);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleSubmit);\n\n//# sourceURL=webpack://webpack-b/./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/post.js":
/*!*****************************!*\
  !*** ./src/modules/post.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\n\nclass Data {\n  add(prop) {\n    this.prop = prop;\n\n    fetch(_variables_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl, {\n      method: 'POST',\n      body: JSON.stringify(this.prop),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    })\n      .then((response) => response.json());\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);\n\n//# sourceURL=webpack://webpack-b/./src/modules/post.js?");

/***/ }),

/***/ "./src/modules/refresh.js":
/*!********************************!*\
  !*** ./src/modules/refresh.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst refresh = (prop1, prop2) => {\n  prop1.value = '';\n  prop2.value = '';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refresh);\n\n//# sourceURL=webpack://webpack-b/./src/modules/refresh.js?");

/***/ }),

/***/ "./src/modules/user.js":
/*!*****************************!*\
  !*** ./src/modules/user.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\n\nconst getUser = () => {\n  // get user input from the form\n  const userName = _variables_js__WEBPACK_IMPORTED_MODULE_0__.name.value;\n  const userScore = _variables_js__WEBPACK_IMPORTED_MODULE_0__.score.value;\n\n  // user input object\n  const userInput = {\n    user: userName,\n    score: userScore,\n  };\n  return userInput;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUser);\n\n//# sourceURL=webpack://webpack-b/./src/modules/user.js?");

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"baseUrl\": () => (/* binding */ baseUrl),\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"refreshBtn\": () => (/* binding */ refreshBtn),\n/* harmony export */   \"resultCount\": () => (/* binding */ resultCount),\n/* harmony export */   \"score\": () => (/* binding */ score),\n/* harmony export */   \"scorePlaceholder\": () => (/* binding */ scorePlaceholder),\n/* harmony export */   \"search\": () => (/* binding */ search)\n/* harmony export */ });\nconst scorePlaceholder = document.querySelector('#scores');\nconst form = document.querySelector('#form');\nconst name = document.querySelector('#user-name');\nconst score = document.querySelector('input[type=\"number\"]');\nconst search = document.querySelector('#search');\nconst refreshBtn = document.querySelector('#refresh');\nconst resultCount = document.querySelector('#result');\nconst baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JUUg16quXPBEL9Inuyon/scores/';\n\n\n\n//# sourceURL=webpack://webpack-b/./src/modules/variables.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);