"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/login/page",{

/***/ "(app-pages-browser)/./src/components/auth/AuthFormField.jsx":
/*!***********************************************!*\
  !*** ./src/components/auth/AuthFormField.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst Input = (param)=>{\n    let { id, label, placeholder, type = \"text\", value, onChange, required = false } = param;\n    _s();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isPasswordVisible, setIsPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const validateField = (value)=>{\n        let error = \"\";\n        if (required && !value) {\n            error = \"\".concat(label, \" is required\");\n        } else if (type === \"email\" && !/\\S+@\\S+\\.\\S+/.test(value)) {\n            error = \"Email is invalid\";\n        } else if (type === \"password\" && value.length < 6) {\n            error = \"Password must be at least 6 characters\";\n        }\n        setErrorMessage(error);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        validateField(value);\n    }, [\n        value\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-start gap-2 w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: id,\n                className: \"w-full   font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0\",\n                children: label\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            type === \"password\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"flex items-center justify-end gap-2 cursor-pointer hover:text-blue-500\",\n                onClick: ()=>setIsPasswordVisible(!isPasswordVisible),\n                children: [\n                    isPasswordVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BiShow, {}, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 32\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BiHide, {}, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 45\n                    }, undefined),\n                    \" \",\n                    isPasswordVisible ? \"Show\" : \"Hide\"\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: id,\n                placeholder: placeholder,\n                type: type,\n                value: value || \"\",\n                onChange: (e)=>{\n                    onChange(e.target.value);\n                },\n                className: \"w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                required: required\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-red-500 text-sm mt-1\",\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthFormField.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Input, \"gxUkUp/kV/L5YBqV5yNR74eSPOA=\");\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm1GaWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBQ2xCO0FBRTFCLE1BQU1HLFFBQVE7UUFBQyxFQUNiQyxFQUFFLEVBQ0ZDLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxPQUFPLE1BQU0sRUFDYkMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLFdBQVcsS0FBSyxFQUNqQjs7SUFDQyxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNZLG1CQUFtQkMscUJBQXFCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzNELE1BQU1jLGdCQUFnQixDQUFDUDtRQUNyQixJQUFJUSxRQUFRO1FBQ1osSUFBSU4sWUFBWSxDQUFDRixPQUFPO1lBQ3RCUSxRQUFRLEdBQVMsT0FBTlgsT0FBTTtRQUNuQixPQUFPLElBQUlFLFNBQVMsV0FBVyxDQUFDLGVBQWVVLElBQUksQ0FBQ1QsUUFBUTtZQUMxRFEsUUFBUTtRQUNWLE9BQU8sSUFBSVQsU0FBUyxjQUFjQyxNQUFNVSxNQUFNLEdBQUcsR0FBRztZQUNsREYsUUFBUTtRQUNWO1FBQ0FKLGdCQUFnQkk7SUFDbEI7SUFFQWhCLGdEQUFTQSxDQUFDO1FBQ1JlLGNBQWNQO0lBQ2hCLEdBQUc7UUFBQ0E7S0FBTTtJQUVWLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2Y7Z0JBQ0NnQixTQUFTakI7Z0JBQ1RnQixXQUFVOzBCQUVUZjs7Ozs7O1lBRUZFLFNBQVMsNEJBQ1IsOERBQUNlO2dCQUNDRixXQUFVO2dCQUNWRyxTQUFTLElBQU1ULHFCQUFxQixDQUFDRDs7b0JBRXBDQSxrQ0FBb0IsOERBQUNXOzs7O2tEQUFZLDhEQUFDQzs7Ozs7b0JBQVc7b0JBQzdDWixvQkFBb0IsU0FBUzs7Ozs7OzswQkFHbEMsOERBQUNhO2dCQUNDdEIsSUFBSUE7Z0JBQ0pFLGFBQWFBO2dCQUNiQyxNQUFNQTtnQkFDTkMsT0FBT0EsU0FBUztnQkFDaEJDLFVBQVUsQ0FBQ2tCO29CQUNUbEIsU0FBU2tCLEVBQUVDLE1BQU0sQ0FBQ3BCLEtBQUs7Z0JBQ3pCO2dCQUNBWSxXQUFVO2dCQUNWVixVQUFVQTs7Ozs7O1lBRVhDLDhCQUNDLDhEQUFDUTtnQkFBSUMsV0FBVTswQkFBNkJUOzs7Ozs7Ozs7Ozs7QUFJcEQ7R0E1RE1SO0tBQUFBO0FBOEROLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm1GaWVsZC5qc3g/YmVhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IElucHV0ID0gKHtcclxuICBpZCxcclxuICBsYWJlbCxcclxuICBwbGFjZWhvbGRlcixcclxuICB0eXBlID0gXCJ0ZXh0XCIsXHJcbiAgdmFsdWUsXHJcbiAgb25DaGFuZ2UsXHJcbiAgcmVxdWlyZWQgPSBmYWxzZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXNQYXNzd29yZFZpc2libGUsIHNldElzUGFzc3dvcmRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB2YWxpZGF0ZUZpZWxkID0gKHZhbHVlKSA9PiB7XHJcbiAgICBsZXQgZXJyb3IgPSBcIlwiO1xyXG4gICAgaWYgKHJlcXVpcmVkICYmICF2YWx1ZSkge1xyXG4gICAgICBlcnJvciA9IGAke2xhYmVsfSBpcyByZXF1aXJlZGA7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZW1haWxcIiAmJiAhL1xcUytAXFxTK1xcLlxcUysvLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgIGVycm9yID0gXCJFbWFpbCBpcyBpbnZhbGlkXCI7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwicGFzc3dvcmRcIiAmJiB2YWx1ZS5sZW5ndGggPCA2KSB7XHJcbiAgICAgIGVycm9yID0gXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyc1wiO1xyXG4gICAgfVxyXG4gICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdmFsaWRhdGVGaWVsZCh2YWx1ZSk7XHJcbiAgfSwgW3ZhbHVlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgZ2FwLTIgdy1mdWxsXCI+XHJcbiAgICAgIDxsYWJlbFxyXG4gICAgICAgIGh0bWxGb3I9e2lkfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCAgIGZvbnQtbm9ybWFsIHRleHQtWyM2NjY2NjZdIHRleHQtYmFzZSB0cmFja2luZy1bMF0gbGVhZGluZy1bbm9ybWFsXSBwLTAgcGwtMFwiXHJcbiAgICAgID5cclxuICAgICAgICB7bGFiZWx9XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIHt0eXBlID09PSBcInBhc3N3b3JkXCIgJiYgKFxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBnYXAtMiBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWJsdWUtNTAwXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzUGFzc3dvcmRWaXNpYmxlKCFpc1Bhc3N3b3JkVmlzaWJsZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2lzUGFzc3dvcmRWaXNpYmxlID8gPEJpU2hvdyAvPiA6IDxCaUhpZGUgLz59e1wiIFwifVxyXG4gICAgICAgICAge2lzUGFzc3dvcmRWaXNpYmxlID8gXCJTaG93XCIgOiBcIkhpZGVcIn1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICl9XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPXtpZH1cclxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICB2YWx1ZT17dmFsdWUgfHwgXCJcIn1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgcC0zIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMFwiXHJcbiAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAvPlxyXG4gICAgICB7ZXJyb3JNZXNzYWdlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtIG10LTFcIj57ZXJyb3JNZXNzYWdlfTwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZWFjdCIsIklucHV0IiwiaWQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImlzUGFzc3dvcmRWaXNpYmxlIiwic2V0SXNQYXNzd29yZFZpc2libGUiLCJ2YWxpZGF0ZUZpZWxkIiwiZXJyb3IiLCJ0ZXN0IiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInNwYW4iLCJvbkNsaWNrIiwiQmlTaG93IiwiQmlIaWRlIiwiaW5wdXQiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthFormField.jsx\n"));

/***/ })

});