"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/forgot-password/page",{

/***/ "(app-pages-browser)/./src/components/auth/AuthResetPasswordCard.jsx":
/*!*******************************************************!*\
  !*** ./src/components/auth/AuthResetPasswordCard.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pin-input */ \"(app-pages-browser)/./node_modules/react-pin-input/dist/bundle.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pin_input__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./src/constants/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst AuthResetPasswordCard = (param)=>{\n    let { stage, onInputChange, onSubmit } = param;\n    const { cardTitle, buttonTitle, cardBody, cardFooter, link } = _constants__WEBPACK_IMPORTED_MODULE_4__.STAGE_CONTENT[stage];\n    const renderFormFields = (stage)=>{\n        switch(stage){\n            case \"email\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                    id: \"email\",\n                    type: \"email\",\n                    placeholder: \"Email\",\n                    name: \"email\",\n                    label: \"Email Address\",\n                    onValidInput: onInputChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, undefined);\n            case \"code\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_pin_input__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    length: 6,\n                    initialValue: \"\",\n                    type: \"numeric\",\n                    inputMode: \"number\",\n                    style: {\n                        padding: \"10px\"\n                    },\n                    inputStyle: {\n                        borderColor: \"red\"\n                    },\n                    inputFocusStyle: {\n                        borderColor: \"blue\"\n                    },\n                    onComplete: (value)=>onInputChange(\"code\", value),\n                    autoSelect: true,\n                    regexCriteria: /^[ A-Za-z0-9_@./#&+-]*$/\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, undefined);\n            case \"password\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            id: \"password\",\n                            type: \"password\",\n                            placeholder: \"Password\",\n                            name: \"password\",\n                            label: \"Password\",\n                            onValidInput: handleValidInput,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            id: \"confirmPassword\",\n                            type: \"password\",\n                            placeholder: \"Confirm Password\",\n                            name: \"confirmPassword\",\n                            label: \"Confirm Password\",\n                            onValidInput: handleValidInput,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[60%] h-[60%] flex flex-col items-center gap-4 border-red-500 border-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"relative flex flex-col items-center justify-center gap-4 text-center text-[40px] text-black \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-12 h-12 rounded-full bg-zinc-400 \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative font-medium\",\n                        children: \"Welcome back\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center gap-6 text-center text-[20px] text-base mt-10 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[24px] font-bold\",\n                        children: cardTitle\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[16px] font-sans leading-[24px] text-gray-500\",\n                        children: cardBody\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    renderFormFields(stage),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                        onClick: onSubmit,\n                        text: buttonTitle,\n                        backgroundColor: \"bg-zinc-300\",\n                        textColor: \"text-white\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"text-[16px] [text-decoration:underline] font-medium  text-gray text-right mt-10 cursor-pointer  transition duration-300 ease-in-out hover:text-blue-500\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: link,\n                    children: cardFooter\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AuthResetPasswordCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthResetPasswordCard);\nvar _c;\n$RefreshReg$(_c, \"AuthResetPasswordCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aFJlc2V0UGFzc3dvcmRDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFDc0I7QUFDdkI7QUFDSztBQUU1QyxNQUFNTSx3QkFBd0I7UUFBQyxFQUM3QkMsS0FBSyxFQUNMQyxhQUFhLEVBQ2JDLFFBQVEsRUFDVDtJQUNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUUsR0FDMURULHFEQUFhLENBQUNFLE1BQU07SUFFdEIsTUFBTVEsbUJBQW1CLENBQUNSO1FBQ3hCLE9BQVFBO1lBQ04sS0FBSztnQkFDSCxxQkFDRSw4REFBQ0wsMkRBQWFBO29CQUNaYyxJQUFHO29CQUNIQyxNQUFLO29CQUNMQyxhQUFZO29CQUNaQyxNQUFLO29CQUNMQyxPQUFNO29CQUNOQyxjQUFjYjtvQkFDZGMsUUFBUTs7Ozs7O1lBR2QsS0FBSztnQkFDSCxxQkFDRSw4REFBQ2xCLHdEQUFRQTtvQkFDUG1CLFFBQVE7b0JBQ1JDLGNBQWE7b0JBQ2JQLE1BQUs7b0JBQ0xRLFdBQVU7b0JBQ1ZDLE9BQU87d0JBQUVDLFNBQVM7b0JBQU87b0JBQ3pCQyxZQUFZO3dCQUFFQyxhQUFhO29CQUFNO29CQUNqQ0MsaUJBQWlCO3dCQUFFRCxhQUFhO29CQUFPO29CQUN2Q0UsWUFBWSxDQUFDQyxRQUFVeEIsY0FBYyxRQUFRd0I7b0JBQzdDQyxZQUFZO29CQUNaQyxlQUFlOzs7Ozs7WUFHckIsS0FBSztnQkFDSCxxQkFDRTs7c0NBQ0UsOERBQUNoQywyREFBYUE7NEJBQ1pjLElBQUc7NEJBQ0hDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLE1BQUs7NEJBQ0xDLE9BQU07NEJBQ05DLGNBQWNjOzRCQUNkYixRQUFROzs7Ozs7c0NBRVYsOERBQUNwQiwyREFBYUE7NEJBQ1pjLElBQUc7NEJBQ0hDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLE1BQUs7NEJBQ0xDLE9BQU07NEJBQ05DLGNBQWNjOzRCQUNkYixRQUFROzs7Ozs7OztRQUlsQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNjO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBT0QsV0FBVTs7a0NBQ2hCLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBdUI7Ozs7Ozs7Ozs7OzswQkFFeEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQXlCM0I7Ozs7OztrQ0FDeEMsOERBQUMwQjt3QkFBSUMsV0FBVTtrQ0FDWnpCOzs7Ozs7b0JBRUZHLGlCQUFpQlI7a0NBQ2xCLDhEQUFDSix3REFBVUE7d0JBQ1RvQyxTQUFTOUI7d0JBQ1QrQixNQUFNN0I7d0JBQ044QixpQkFBaUI7d0JBQ2pCQyxXQUFXOzs7Ozs7Ozs7Ozs7MEJBR2YsOERBQUNDO2dCQUFPTixXQUFVOzBCQUNoQiw0RUFBQ087b0JBQUVDLE1BQU0vQjs4QkFBT0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhCO0tBdkZNUDtBQXlGTiwrREFBZUEscUJBQXFCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aFJlc2V0UGFzc3dvcmRDYXJkLmpzeD85ZTMxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aEZvcm1GaWVsZCwgQXV0aEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvYXV0aFwiO1xyXG5pbXBvcnQgUGluSW5wdXQgZnJvbSBcInJlYWN0LXBpbi1pbnB1dFwiO1xyXG5pbXBvcnQgeyBTVEFHRV9DT05URU5UIH0gZnJvbSBcIkAvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBBdXRoUmVzZXRQYXNzd29yZENhcmQgPSAoe1xyXG4gIHN0YWdlLFxyXG4gIG9uSW5wdXRDaGFuZ2UsXHJcbiAgb25TdWJtaXQsXHJcbn0pID0+IHtcclxuICBjb25zdCB7IGNhcmRUaXRsZSwgYnV0dG9uVGl0bGUsIGNhcmRCb2R5LCBjYXJkRm9vdGVyLCBsaW5rIH0gPVxyXG4gICAgU1RBR0VfQ09OVEVOVFtzdGFnZV07XHJcblxyXG4gIGNvbnN0IHJlbmRlckZvcm1GaWVsZHMgPSAoc3RhZ2UpID0+IHtcclxuICAgIHN3aXRjaCAoc3RhZ2UpIHtcclxuICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxBdXRoRm9ybUZpZWxkXHJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgb25WYWxpZElucHV0PXtvbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlIFwiY29kZVwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8UGluSW5wdXRcclxuICAgICAgICAgICAgbGVuZ3RoPXs2fVxyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJcIlxyXG4gICAgICAgICAgICB0eXBlPVwibnVtZXJpY1wiXHJcbiAgICAgICAgICAgIGlucHV0TW9kZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIGlucHV0U3R5bGU9e3sgYm9yZGVyQ29sb3I6IFwicmVkXCIgfX0gLy8gQ2hhbmdlIHRoZSBib3JkZXIgY29sb3JcclxuICAgICAgICAgICAgaW5wdXRGb2N1c1N0eWxlPXt7IGJvcmRlckNvbG9yOiBcImJsdWVcIiB9fSAvLyBDaGFuZ2UgdGhlIGJvcmRlciBjb2xvciB3aGVuIGZvY3VzZWRcclxuICAgICAgICAgICAgb25Db21wbGV0ZT17KHZhbHVlKSA9PiBvbklucHV0Q2hhbmdlKFwiY29kZVwiLCB2YWx1ZSl9XHJcbiAgICAgICAgICAgIGF1dG9TZWxlY3Q9e3RydWV9XHJcbiAgICAgICAgICAgIHJlZ2V4Q3JpdGVyaWE9ey9eWyBBLVphLXowLTlfQC4vIyYrLV0qJC99XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgXCJwYXNzd29yZFwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QXV0aEZvcm1GaWVsZFxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBvblZhbGlkSW5wdXQ9e2hhbmRsZVZhbGlkSW5wdXR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEF1dGhGb3JtRmllbGRcclxuICAgICAgICAgICAgICBpZD1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgb25WYWxpZElucHV0PXtoYW5kbGVWYWxpZElucHV0fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzYwJV0gaC1bNjAlXSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNCBib3JkZXItcmVkLTUwMCBib3JkZXItMlwiPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IHRleHQtY2VudGVyIHRleHQtWzQwcHhdIHRleHQtYmxhY2sgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGJnLXppbmMtNDAwIFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZm9udC1tZWRpdW1cIj5XZWxjb21lIGJhY2s8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTYgdGV4dC1jZW50ZXIgdGV4dC1bMjBweF0gdGV4dC1iYXNlIG10LTEwIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gZm9udC1ib2xkXCI+e2NhcmRUaXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzE2cHhdIGZvbnQtc2FucyBsZWFkaW5nLVsyNHB4XSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICB7Y2FyZEJvZHl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3JlbmRlckZvcm1GaWVsZHMoc3RhZ2UpfVxyXG4gICAgICAgIDxBdXRoQnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtvblN1Ym1pdH1cclxuICAgICAgICAgIHRleHQ9e2J1dHRvblRpdGxlfVxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtcImJnLXppbmMtMzAwXCJ9XHJcbiAgICAgICAgICB0ZXh0Q29sb3I9e1widGV4dC13aGl0ZVwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInRleHQtWzE2cHhdIFt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lXSBmb250LW1lZGl1bSAgdGV4dC1ncmF5IHRleHQtcmlnaHQgbXQtMTAgY3Vyc29yLXBvaW50ZXIgIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOnRleHQtYmx1ZS01MDBcIj5cclxuICAgICAgICA8YSBocmVmPXtsaW5rfT57Y2FyZEZvb3Rlcn08L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhSZXNldFBhc3N3b3JkQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBdXRoRm9ybUZpZWxkIiwiQXV0aEJ1dHRvbiIsIlBpbklucHV0IiwiU1RBR0VfQ09OVEVOVCIsIkF1dGhSZXNldFBhc3N3b3JkQ2FyZCIsInN0YWdlIiwib25JbnB1dENoYW5nZSIsIm9uU3VibWl0IiwiY2FyZFRpdGxlIiwiYnV0dG9uVGl0bGUiLCJjYXJkQm9keSIsImNhcmRGb290ZXIiLCJsaW5rIiwicmVuZGVyRm9ybUZpZWxkcyIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwibmFtZSIsImxhYmVsIiwib25WYWxpZElucHV0IiwicmVxdWlyZWQiLCJsZW5ndGgiLCJpbml0aWFsVmFsdWUiLCJpbnB1dE1vZGUiLCJzdHlsZSIsInBhZGRpbmciLCJpbnB1dFN0eWxlIiwiYm9yZGVyQ29sb3IiLCJpbnB1dEZvY3VzU3R5bGUiLCJvbkNvbXBsZXRlIiwidmFsdWUiLCJhdXRvU2VsZWN0IiwicmVnZXhDcml0ZXJpYSIsImhhbmRsZVZhbGlkSW5wdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJvbkNsaWNrIiwidGV4dCIsImJhY2tncm91bmRDb2xvciIsInRleHRDb2xvciIsImZvb3RlciIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthResetPasswordCard.jsx\n"));

/***/ })

});