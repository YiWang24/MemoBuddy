"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/register/page",{

/***/ "(app-pages-browser)/./src/components/auth/AuthFormField.jsx":
/*!***********************************************!*\
  !*** ./src/components/auth/AuthFormField.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=BiHide,BiShow!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Input = (param)=>{\n    let { id, label, placeholder, type = \"text\", value, onChange, required = false } = param;\n    _s();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isPasswordVisible, setIsPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isTouched, setIsTouched] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const validateField = (value)=>{\n        let error = \"\";\n        if (required && !value) {\n            error = \"\".concat(label, \" is required\");\n        } else if (type === \"email\" && !/\\S+@\\S+\\.\\S+/.test(value)) {\n            error = \"Email is invalid\";\n        } else if (type === \"password\" && value.length < 6) {\n            error = \"Password must be at least 6 characters\";\n        }\n        setErrorMessage(error);\n    };\n    const handleBlur = ()=>{\n        setIsTouched(true);\n        validateField(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-start gap-2 w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: id,\n                className: \"w-full justify-between items-center inline-flex   font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    type === \"password\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex items-center justify-end gap-2 cursor-pointer hover:text-blue-500\",\n                        onClick: ()=>setIsPasswordVisible(!isPasswordVisible),\n                        children: [\n                            isPasswordVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiShow, {}, void 0, false, {\n                                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 34\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiHide, {}, void 0, false, {\n                                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 47\n                            }, undefined),\n                            \" \",\n                            isPasswordVisible ? \"Show\" : \"Hide\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: id,\n                placeholder: placeholder,\n                type: type === \"password\" && isPasswordVisible ? \"text\" : type,\n                value: value || \"\",\n                onBlur: handleBlur,\n                onChange: (e)=>{\n                    onChange(e.target.value);\n                },\n                className: \"w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                required: required\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            isTouched && errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-red-500 text-sm mt-1\",\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Input, \"nv6tcoRmbZlC/gR37LYlVYXOTmc=\");\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm1GaWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUNsQjtBQUNzQjtBQUVoRCxNQUFNSyxRQUFRO1FBQUMsRUFDYkMsRUFBRSxFQUNGQyxLQUFLLEVBQ0xDLFdBQVcsRUFDWEMsT0FBTyxNQUFNLEVBQ2JDLEtBQUssRUFDTEMsUUFBUSxFQUNSQyxXQUFXLEtBQUssRUFDakI7O0lBQ0MsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2IsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDYyxtQkFBbUJDLHFCQUFxQixHQUFHZiwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNLENBQUNnQixXQUFXQyxhQUFhLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNa0IsZ0JBQWdCLENBQUNUO1FBQ3JCLElBQUlVLFFBQVE7UUFDWixJQUFJUixZQUFZLENBQUNGLE9BQU87WUFDdEJVLFFBQVEsR0FBUyxPQUFOYixPQUFNO1FBQ25CLE9BQU8sSUFBSUUsU0FBUyxXQUFXLENBQUMsZUFBZVksSUFBSSxDQUFDWCxRQUFRO1lBQzFEVSxRQUFRO1FBQ1YsT0FBTyxJQUFJWCxTQUFTLGNBQWNDLE1BQU1ZLE1BQU0sR0FBRyxHQUFHO1lBQ2xERixRQUFRO1FBQ1Y7UUFDQU4sZ0JBQWdCTTtJQUNsQjtJQUVBLE1BQU1HLGFBQWE7UUFDakJMLGFBQWE7UUFDYkMsY0FBY1Q7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ2M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNsQjtnQkFDQ21CLFNBQVNwQjtnQkFDVG1CLFdBQVU7O2tDQUVWLDhEQUFDRTtrQ0FBTXBCOzs7Ozs7b0JBQ05FLFNBQVMsNEJBQ1IsOERBQUNrQjt3QkFDQ0YsV0FBVTt3QkFDVkcsU0FBUyxJQUFNWixxQkFBcUIsQ0FBQ0Q7OzRCQUVwQ0Esa0NBQW9CLDhEQUFDWCx1RkFBTUE7Ozs7MERBQU0sOERBQUNELHVGQUFNQTs7Ozs7NEJBQUs7NEJBQzdDWSxvQkFBb0IsU0FBUzs7Ozs7Ozs7Ozs7OzswQkFLcEMsOERBQUNjO2dCQUNDdkIsSUFBSUE7Z0JBQ0pFLGFBQWFBO2dCQUNiQyxNQUFNQSxTQUFTLGNBQWNNLG9CQUFvQixTQUFTTjtnQkFDMURDLE9BQU9BLFNBQVM7Z0JBQ2hCb0IsUUFBUVA7Z0JBQ1JaLFVBQVUsQ0FBQ29CO29CQUNUcEIsU0FBU29CLEVBQUVDLE1BQU0sQ0FBQ3RCLEtBQUs7Z0JBQ3pCO2dCQUNBZSxXQUFVO2dCQUNWYixVQUFVQTs7Ozs7O1lBRVhLLGFBQWFKLDhCQUNaLDhEQUFDVztnQkFBSUMsV0FBVTswQkFBNkJaOzs7Ozs7Ozs7Ozs7QUFJcEQ7R0FoRU1SO0tBQUFBO0FBa0VOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm1GaWVsZC5qc3g/YmVhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQmlIaWRlLCBCaVNob3cgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcclxuXHJcbmNvbnN0IElucHV0ID0gKHtcclxuICBpZCxcclxuICBsYWJlbCxcclxuICBwbGFjZWhvbGRlcixcclxuICB0eXBlID0gXCJ0ZXh0XCIsXHJcbiAgdmFsdWUsXHJcbiAgb25DaGFuZ2UsXHJcbiAgcmVxdWlyZWQgPSBmYWxzZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXNQYXNzd29yZFZpc2libGUsIHNldElzUGFzc3dvcmRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNUb3VjaGVkLCBzZXRJc1RvdWNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHZhbGlkYXRlRmllbGQgPSAodmFsdWUpID0+IHtcclxuICAgIGxldCBlcnJvciA9IFwiXCI7XHJcbiAgICBpZiAocmVxdWlyZWQgJiYgIXZhbHVlKSB7XHJcbiAgICAgIGVycm9yID0gYCR7bGFiZWx9IGlzIHJlcXVpcmVkYDtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJlbWFpbFwiICYmICEvXFxTK0BcXFMrXFwuXFxTKy8udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgZXJyb3IgPSBcIkVtYWlsIGlzIGludmFsaWRcIjtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJwYXNzd29yZFwiICYmIHZhbHVlLmxlbmd0aCA8IDYpIHtcclxuICAgICAgZXJyb3IgPSBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCI7XHJcbiAgICB9XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1RvdWNoZWQodHJ1ZSk7XHJcbiAgICB2YWxpZGF0ZUZpZWxkKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IGdhcC0yIHctZnVsbFwiPlxyXG4gICAgICA8bGFiZWxcclxuICAgICAgICBodG1sRm9yPXtpZH1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBpbmxpbmUtZmxleCAgIGZvbnQtbm9ybWFsIHRleHQtWyM2NjY2NjZdIHRleHQtYmFzZSB0cmFja2luZy1bMF0gbGVhZGluZy1bbm9ybWFsXSBwLTAgcGwtMFwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxyXG4gICAgICAgIHt0eXBlID09PSBcInBhc3N3b3JkXCIgJiYgKFxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgZ2FwLTIgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzUGFzc3dvcmRWaXNpYmxlKCFpc1Bhc3N3b3JkVmlzaWJsZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc1Bhc3N3b3JkVmlzaWJsZSA/IDxCaVNob3cgLz4gOiA8QmlIaWRlIC8+fXtcIiBcIn1cclxuICAgICAgICAgICAge2lzUGFzc3dvcmRWaXNpYmxlID8gXCJTaG93XCIgOiBcIkhpZGVcIn1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICB0eXBlPXt0eXBlID09PSBcInBhc3N3b3JkXCIgJiYgaXNQYXNzd29yZFZpc2libGUgPyBcInRleHRcIiA6IHR5cGV9XHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlIHx8IFwiXCJ9XHJcbiAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBwLTMgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwXCJcclxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtpc1RvdWNoZWQgJiYgZXJyb3JNZXNzYWdlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtIG10LTFcIj57ZXJyb3JNZXNzYWdlfTwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZWFjdCIsIkJpSGlkZSIsIkJpU2hvdyIsIklucHV0IiwiaWQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImlzUGFzc3dvcmRWaXNpYmxlIiwic2V0SXNQYXNzd29yZFZpc2libGUiLCJpc1RvdWNoZWQiLCJzZXRJc1RvdWNoZWQiLCJ2YWxpZGF0ZUZpZWxkIiwiZXJyb3IiLCJ0ZXN0IiwibGVuZ3RoIiwiaGFuZGxlQmx1ciIsImRpdiIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJzcGFuIiwib25DbGljayIsImlucHV0Iiwib25CbHVyIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthFormField.jsx\n"));

/***/ })

});