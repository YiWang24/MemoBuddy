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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=BiHide,BiShow!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Input = (param)=>{\n    let { id, label, placeholder, type = \"text\", value, onChange, required = false } = param;\n    _s();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isPasswordVisible, setIsPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isTouched, setIsTouched] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const validateField = (value)=>{\n        let error = \"\";\n        if (required && !value) {\n            error = \"\".concat(label, \" is required\");\n        } else if (type === \"email\" && !/\\S+@\\S+\\.\\S+/.test(value)) {\n            error = \"Email is invalid\";\n        } else if (type === \"password\" && value.length < 6) {\n            error = \"Password must be at least 6 characters\";\n        }\n        setErrorMessage(error);\n    };\n    const handleBlur = ()=>{\n        setIsTouched(true);\n        validateField(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-start gap-2 w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: id,\n                className: \"w-full justify-between items-center inline-flex   font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    type === \"password\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex items-center justify-end gap-2 cursor-pointer hover:text-blue-500\",\n                        onClick: ()=>setIsPasswordVisible(!isPasswordVisible),\n                        children: [\n                            isPasswordVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiShow, {}, void 0, false, {\n                                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 34\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiHide, {}, void 0, false, {\n                                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 47\n                            }, undefined),\n                            \" \",\n                            isPasswordVisible ? \"Show\" : \"Hide\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: id,\n                placeholder: placeholder,\n                type: isPasswordVisible ? \"text\" : \"password\",\n                value: value || \"\",\n                onChange: (e)=>{\n                    onChange(e.target.value);\n                },\n                className: \"w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                required: required\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-red-500 text-sm mt-1\",\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Input, \"nv6tcoRmbZlC/gR37LYlVYXOTmc=\");\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm1GaWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUNsQjtBQUNzQjtBQUVoRCxNQUFNSyxRQUFRO1FBQUMsRUFDYkMsRUFBRSxFQUNGQyxLQUFLLEVBQ0xDLFdBQVcsRUFDWEMsT0FBTyxNQUFNLEVBQ2JDLEtBQUssRUFDTEMsUUFBUSxFQUNSQyxXQUFXLEtBQUssRUFDakI7O0lBQ0MsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2IsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDYyxtQkFBbUJDLHFCQUFxQixHQUFHZiwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNLENBQUNnQixXQUFXQyxhQUFhLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNa0IsZ0JBQWdCLENBQUNUO1FBQ3JCLElBQUlVLFFBQVE7UUFDWixJQUFJUixZQUFZLENBQUNGLE9BQU87WUFDdEJVLFFBQVEsR0FBUyxPQUFOYixPQUFNO1FBQ25CLE9BQU8sSUFBSUUsU0FBUyxXQUFXLENBQUMsZUFBZVksSUFBSSxDQUFDWCxRQUFRO1lBQzFEVSxRQUFRO1FBQ1YsT0FBTyxJQUFJWCxTQUFTLGNBQWNDLE1BQU1ZLE1BQU0sR0FBRyxHQUFHO1lBQ2xERixRQUFRO1FBQ1Y7UUFDQU4sZ0JBQWdCTTtJQUNsQjtJQUVBLE1BQU1HLGFBQWE7UUFDakJMLGFBQWE7UUFDYkMsY0FBY1Q7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ2M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNsQjtnQkFDQ21CLFNBQVNwQjtnQkFDVG1CLFdBQVU7O2tDQUVWLDhEQUFDRTtrQ0FBTXBCOzs7Ozs7b0JBQ05FLFNBQVMsNEJBQ1IsOERBQUNrQjt3QkFDQ0YsV0FBVTt3QkFDVkcsU0FBUyxJQUFNWixxQkFBcUIsQ0FBQ0Q7OzRCQUVwQ0Esa0NBQW9CLDhEQUFDWCx1RkFBTUE7Ozs7MERBQU0sOERBQUNELHVGQUFNQTs7Ozs7NEJBQUs7NEJBQzdDWSxvQkFBb0IsU0FBUzs7Ozs7Ozs7Ozs7OzswQkFLcEMsOERBQUNjO2dCQUNDdkIsSUFBSUE7Z0JBQ0pFLGFBQWFBO2dCQUNiQyxNQUFNTSxvQkFBb0IsU0FBUztnQkFDbkNMLE9BQU9BLFNBQVM7Z0JBQ2hCQyxVQUFVLENBQUNtQjtvQkFDVG5CLFNBQVNtQixFQUFFQyxNQUFNLENBQUNyQixLQUFLO2dCQUN6QjtnQkFDQWUsV0FBVTtnQkFDVmIsVUFBVUE7Ozs7OztZQUVYQyw4QkFDQyw4REFBQ1c7Z0JBQUlDLFdBQVU7MEJBQTZCWjs7Ozs7Ozs7Ozs7O0FBSXBEO0dBL0RNUjtLQUFBQTtBQWlFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hdXRoL0F1dGhGb3JtRmllbGQuanN4P2JlYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJpSGlkZSwgQmlTaG93IH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XHJcblxyXG5jb25zdCBJbnB1dCA9ICh7XHJcbiAgaWQsXHJcbiAgbGFiZWwsXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgdHlwZSA9IFwidGV4dFwiLFxyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIHJlcXVpcmVkID0gZmFsc2UsXHJcbn0pID0+IHtcclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzUGFzc3dvcmRWaXNpYmxlLCBzZXRJc1Bhc3N3b3JkVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzVG91Y2hlZCwgc2V0SXNUb3VjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB2YWxpZGF0ZUZpZWxkID0gKHZhbHVlKSA9PiB7XHJcbiAgICBsZXQgZXJyb3IgPSBcIlwiO1xyXG4gICAgaWYgKHJlcXVpcmVkICYmICF2YWx1ZSkge1xyXG4gICAgICBlcnJvciA9IGAke2xhYmVsfSBpcyByZXF1aXJlZGA7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZW1haWxcIiAmJiAhL1xcUytAXFxTK1xcLlxcUysvLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgIGVycm9yID0gXCJFbWFpbCBpcyBpbnZhbGlkXCI7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwicGFzc3dvcmRcIiAmJiB2YWx1ZS5sZW5ndGggPCA2KSB7XHJcbiAgICAgIGVycm9yID0gXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyc1wiO1xyXG4gICAgfVxyXG4gICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNUb3VjaGVkKHRydWUpO1xyXG4gICAgdmFsaWRhdGVGaWVsZCh2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCBnYXAtMiB3LWZ1bGxcIj5cclxuICAgICAgPGxhYmVsXHJcbiAgICAgICAgaHRtbEZvcj17aWR9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgaW5saW5lLWZsZXggICBmb250LW5vcm1hbCB0ZXh0LVsjNjY2NjY2XSB0ZXh0LWJhc2UgdHJhY2tpbmctWzBdIGxlYWRpbmctW25vcm1hbF0gcC0wIHBsLTBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cclxuICAgICAgICB7dHlwZSA9PT0gXCJwYXNzd29yZFwiICYmIChcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIGdhcC0yIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc1Bhc3N3b3JkVmlzaWJsZSghaXNQYXNzd29yZFZpc2libGUpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNQYXNzd29yZFZpc2libGUgPyA8QmlTaG93IC8+IDogPEJpSGlkZSAvPn17XCIgXCJ9XHJcbiAgICAgICAgICAgIHtpc1Bhc3N3b3JkVmlzaWJsZSA/IFwiU2hvd1wiIDogXCJIaWRlXCJ9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpZH1cclxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgdHlwZT17aXNQYXNzd29yZFZpc2libGUgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICB2YWx1ZT17dmFsdWUgfHwgXCJcIn1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgcC0zIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMFwiXHJcbiAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAvPlxyXG4gICAgICB7ZXJyb3JNZXNzYWdlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtIG10LTFcIj57ZXJyb3JNZXNzYWdlfTwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZWFjdCIsIkJpSGlkZSIsIkJpU2hvdyIsIklucHV0IiwiaWQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImlzUGFzc3dvcmRWaXNpYmxlIiwic2V0SXNQYXNzd29yZFZpc2libGUiLCJpc1RvdWNoZWQiLCJzZXRJc1RvdWNoZWQiLCJ2YWxpZGF0ZUZpZWxkIiwiZXJyb3IiLCJ0ZXN0IiwibGVuZ3RoIiwiaGFuZGxlQmx1ciIsImRpdiIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJzcGFuIiwib25DbGljayIsImlucHV0IiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthFormField.jsx\n"));

/***/ })

});