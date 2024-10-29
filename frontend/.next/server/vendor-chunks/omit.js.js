"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/omit.js";
exports.ids = ["vendor-chunks/omit.js"];
exports.modules = {

/***/ "(ssr)/./node_modules/omit.js/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/omit.js/es/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction omit(obj, fields) {\n  // eslint-disable-next-line prefer-object-spread\n  var shallowCopy = Object.assign({}, obj);\n\n  for (var i = 0; i < fields.length; i += 1) {\n    var key = fields[i];\n    delete shallowCopy[key];\n  }\n\n  return shallowCopy;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (omit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb21pdC5qcy9lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEMsa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvb21pdC5qcy9lcy9pbmRleC5qcz85ZjBmIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG9taXQob2JqLCBmaWVsZHMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1vYmplY3Qtc3ByZWFkXG4gIHZhciBzaGFsbG93Q29weSA9IE9iamVjdC5hc3NpZ24oe30sIG9iaik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIga2V5ID0gZmllbGRzW2ldO1xuICAgIGRlbGV0ZSBzaGFsbG93Q29weVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHNoYWxsb3dDb3B5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBvbWl0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/omit.js/es/index.js\n");

/***/ })

};
;