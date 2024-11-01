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

/***/ "(app-pages-browser)/./src/components/auth/AuthResetPasswordCard.jsx":
/*!*******************************************************!*\
  !*** ./src/components/auth/AuthResetPasswordCard.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pin-input */ \"(app-pages-browser)/./node_modules/react-pin-input/dist/bundle.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pin_input__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst STAGE_CONTENT = {\n    email: {\n        cardTitle: \"Reset Password\",\n        buttonTitle: \"Send Verification Code\",\n        cardBody: \"No worries, We’ll send you reset instructions\",\n        cardFooter: \"Already have an account?\",\n        link: \"/login\"\n    },\n    code: {\n        cardTitle: \"Check Your Email\",\n        buttonTitle: \"Verify Code\",\n        cardBody: \"We sent a reset link to contact@gmail.com enter 4 digit code that mentioned in the email\",\n        cardFooter: \"Haven’t got the email yet? Resend Code\"\n    },\n    password: {\n        cardTitle: \"Set a New Password\",\n        buttonTitle: \"Confirm\",\n        cardBody: \"Create a new password. Ensure it differs from previous ones for security\",\n        cardFooter: \"\"\n    },\n    success: {\n        cardTitle: \"Password Reset Successful\",\n        buttonTitle: \"Return to Login\",\n        cardBody: \"Your password has been reset successfully. Please login with your new password\",\n        cardFooter: \"\",\n        link: \"/login\"\n    }\n};\nconst AuthResetPasswordCard = (param)=>{\n    let { onValidInput } = param;\n    _s();\n    const [stage, setStage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"email\");\n    const { cardTitle, buttonTitle, cardBody, cardFooter } = STAGE_CONTENT[stage];\n    const renderFormFields = (stage)=>{\n        switch(stage){\n            case \"email\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                    type: \"email\",\n                    placeholder: \"Email\",\n                    name: \"email\",\n                    label: \"Email Address\",\n                    onValidInput: onValidInput,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, undefined);\n            case \"code\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_pin_input__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    length: 6,\n                    initialValue: \"\",\n                    type: \"numeric\",\n                    inputMode: \"number\",\n                    style: {\n                        padding: \"10px\"\n                    },\n                    inputStyle: {\n                        borderColor: \"red\"\n                    },\n                    inputFocusStyle: {\n                        borderColor: \"blue\"\n                    },\n                    onComplete: onValidInput,\n                    autoSelect: true,\n                    regexCriteria: /^[ A-Za-z0-9_@./#&+-]*$/\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined);\n            case \"password\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            type: \"password\",\n                            placeholder: \"Password\",\n                            name: \"password\",\n                            label: \"Password\",\n                            onValidInput: onValidInput,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            type: \"password\",\n                            placeholder: \"Confirm Password\",\n                            name: \"confirmPassword\",\n                            label: \"Confirm Password\",\n                            onValidInput: onValidInput,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true);\n        }\n    };\n    const handleButtonClick = ()=>{\n        if (stage === \"email\") {\n            if (onValidInput) setStage(\"code\");\n        } else if (stage === \"code\") {\n            setStage(\"password\");\n        } else if (stage === \"password\") {\n            setStage(\"success\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[60%] h-[60%] flex flex-col items-center gap-4 border-red-500 border-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"relative flex flex-col items-center justify-center gap-4 text-center text-[40px] text-black \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-12 h-12 rounded-full bg-zinc-400 \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative font-medium\",\n                        children: \"Welcome back\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center gap-6 text-center text-[20px] text-base mt-10 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[24px] font-bold\",\n                        children: cardTitle\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[16px] font-sans leading-[24px] text-gray-500\",\n                        children: cardBody\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined),\n                    renderFormFields(stage),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                        onClick: handleButtonClick,\n                        text: buttonTitle,\n                        backgroundColor: \"bg-zinc-300\",\n                        textColor: \"text-white\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"text-[16px] [text-decoration:underline] font-medium  text-gray text-right mt-10 cursor-pointer  transition duration-300 ease-in-out hover:text-blue-500\",\n                children: cardFooter\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthResetPasswordCard, \"/TPUyURFfva5gjzJoOib6rvGhGc=\");\n_c = AuthResetPasswordCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthResetPasswordCard);\nvar _c;\n$RefreshReg$(_c, \"AuthResetPasswordCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aFJlc2V0UGFzc3dvcmRDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFDc0I7QUFDdkI7QUFDdkMsTUFBTUssZ0JBQWdCO0lBQ3BCQyxPQUFPO1FBQ0xDLFdBQVc7UUFDWEMsYUFBYTtRQUNiQyxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsTUFBSztJQUNQO0lBQ0FDLE1BQU07UUFDSkwsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQ0U7UUFDRkMsWUFBWTtJQUNkO0lBQ0FHLFVBQVU7UUFDUk4sV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQ0U7UUFDRkMsWUFBWTtJQUNkO0lBQ0FJLFNBQVM7UUFDUFAsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQ0U7UUFDRkMsWUFBWTtRQUNaQyxNQUFLO0lBQ1A7QUFDRjtBQUVBLE1BQU1JLHdCQUF3QjtRQUFDLEVBQUVDLFlBQVksRUFBRTs7SUFDN0MsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLEVBQUVNLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRSxHQUFHTCxhQUFhLENBQUNZLE1BQU07SUFFN0UsTUFBTUUsbUJBQW1CLENBQUNGO1FBQ3hCLE9BQVFBO1lBQ04sS0FBSztnQkFDSCxxQkFDRSw4REFBQ2YsMkRBQWFBO29CQUNaa0IsTUFBSztvQkFDTEMsYUFBWTtvQkFDWkMsTUFBSztvQkFDTEMsT0FBTTtvQkFDTlAsY0FBY0E7b0JBQ2RRLFFBQVE7Ozs7OztZQUdkLEtBQUs7Z0JBQ0gscUJBQ0UsOERBQUNwQix3REFBUUE7b0JBQ1BxQixRQUFRO29CQUNSQyxjQUFhO29CQUNiTixNQUFLO29CQUNMTyxXQUFVO29CQUNWQyxPQUFPO3dCQUFFQyxTQUFTO29CQUFPO29CQUN6QkMsWUFBWTt3QkFBRUMsYUFBYTtvQkFBTTtvQkFDakNDLGlCQUFpQjt3QkFBRUQsYUFBYTtvQkFBTztvQkFDdkNFLFlBQVlqQjtvQkFDWmtCLFlBQVk7b0JBQ1pDLGVBQWU7Ozs7OztZQUdyQixLQUFLO2dCQUNILHFCQUNFOztzQ0FDRSw4REFBQ2pDLDJEQUFhQTs0QkFDWmtCLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLE1BQUs7NEJBQ0xDLE9BQU07NEJBQ05QLGNBQWNBOzRCQUNkUSxRQUFROzs7Ozs7c0NBRVYsOERBQUN0QiwyREFBYUE7NEJBQ1prQixNQUFLOzRCQUNMQyxhQUFZOzRCQUNaQyxNQUFLOzRCQUNMQyxPQUFNOzRCQUNOUCxjQUFjQTs0QkFDZFEsUUFBUTs7Ozs7Ozs7UUFJbEI7SUFDRjtJQUNBLE1BQU1ZLG9CQUFvQjtRQUN4QixJQUFJbkIsVUFBVSxTQUFTO1lBQ25CLElBQUdELGNBQ0xFLFNBQVM7UUFDWCxPQUFPLElBQUlELFVBQVUsUUFBUTtZQUMzQkMsU0FBUztRQUNYLE9BQU8sSUFBSUQsVUFBVSxZQUFZO1lBQy9CQyxTQUFTO1FBQ1g7SUFDRjtJQUNBLHFCQUNFLDhEQUFDbUI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFPRCxXQUFVOztrQ0FDaEIsOERBQUNEO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUF1Qjs7Ozs7Ozs7Ozs7OzBCQUV4Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBeUIvQjs7Ozs7O2tDQUN4Qyw4REFBQzhCO3dCQUFJQyxXQUFVO2tDQUNaN0I7Ozs7OztvQkFFRlUsaUJBQWlCRjtrQ0FDbEIsOERBQUNkLHdEQUFVQTt3QkFDVHFDLFNBQVNKO3dCQUNUSyxNQUFNakM7d0JBQ05rQyxpQkFBaUI7d0JBQ2pCQyxXQUFXOzs7Ozs7Ozs7Ozs7MEJBR2YsOERBQUNDO2dCQUFPTixXQUFVOzBCQUNmNUI7Ozs7Ozs7Ozs7OztBQUlUO0dBekZNSztLQUFBQTtBQTJGTiwrREFBZUEscUJBQXFCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aFJlc2V0UGFzc3dvcmRDYXJkLmpzeD85ZTMxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aEZvcm1GaWVsZCwgQXV0aEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvYXV0aFwiO1xyXG5pbXBvcnQgUGluSW5wdXQgZnJvbSBcInJlYWN0LXBpbi1pbnB1dFwiO1xyXG5jb25zdCBTVEFHRV9DT05URU5UID0ge1xyXG4gIGVtYWlsOiB7XHJcbiAgICBjYXJkVGl0bGU6IFwiUmVzZXQgUGFzc3dvcmRcIixcclxuICAgIGJ1dHRvblRpdGxlOiBcIlNlbmQgVmVyaWZpY2F0aW9uIENvZGVcIixcclxuICAgIGNhcmRCb2R5OiBcIk5vIHdvcnJpZXMsIFdl4oCZbGwgc2VuZCB5b3UgcmVzZXQgaW5zdHJ1Y3Rpb25zXCIsXHJcbiAgICBjYXJkRm9vdGVyOiBcIkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1wiLFxyXG4gICAgbGluazpcIi9sb2dpblwiXHJcbiAgfSxcclxuICBjb2RlOiB7XHJcbiAgICBjYXJkVGl0bGU6IFwiQ2hlY2sgWW91ciBFbWFpbFwiLFxyXG4gICAgYnV0dG9uVGl0bGU6IFwiVmVyaWZ5IENvZGVcIixcclxuICAgIGNhcmRCb2R5OlxyXG4gICAgICBcIldlIHNlbnQgYSByZXNldCBsaW5rIHRvIGNvbnRhY3RAZ21haWwuY29tIGVudGVyIDQgZGlnaXQgY29kZSB0aGF0IG1lbnRpb25lZCBpbiB0aGUgZW1haWxcIixcclxuICAgIGNhcmRGb290ZXI6IFwiSGF2ZW7igJl0IGdvdCB0aGUgZW1haWwgeWV0PyBSZXNlbmQgQ29kZVwiLFxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIGNhcmRUaXRsZTogXCJTZXQgYSBOZXcgUGFzc3dvcmRcIixcclxuICAgIGJ1dHRvblRpdGxlOiBcIkNvbmZpcm1cIixcclxuICAgIGNhcmRCb2R5OlxyXG4gICAgICBcIkNyZWF0ZSBhIG5ldyBwYXNzd29yZC4gRW5zdXJlIGl0IGRpZmZlcnMgZnJvbSBwcmV2aW91cyBvbmVzIGZvciBzZWN1cml0eVwiLFxyXG4gICAgY2FyZEZvb3RlcjogXCJcIixcclxuICB9LFxyXG4gIHN1Y2Nlc3M6IHtcclxuICAgIGNhcmRUaXRsZTogXCJQYXNzd29yZCBSZXNldCBTdWNjZXNzZnVsXCIsXHJcbiAgICBidXR0b25UaXRsZTogXCJSZXR1cm4gdG8gTG9naW5cIixcclxuICAgIGNhcmRCb2R5OlxyXG4gICAgICBcIllvdXIgcGFzc3dvcmQgaGFzIGJlZW4gcmVzZXQgc3VjY2Vzc2Z1bGx5LiBQbGVhc2UgbG9naW4gd2l0aCB5b3VyIG5ldyBwYXNzd29yZFwiLFxyXG4gICAgY2FyZEZvb3RlcjogXCJcIixcclxuICAgIGxpbms6XCIvbG9naW5cIlxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBBdXRoUmVzZXRQYXNzd29yZENhcmQgPSAoeyBvblZhbGlkSW5wdXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGFnZSwgc2V0U3RhZ2VdID0gdXNlU3RhdGUoXCJlbWFpbFwiKTtcclxuICBjb25zdCB7IGNhcmRUaXRsZSwgYnV0dG9uVGl0bGUsIGNhcmRCb2R5LCBjYXJkRm9vdGVyIH0gPSBTVEFHRV9DT05URU5UW3N0YWdlXTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRm9ybUZpZWxkcyA9IChzdGFnZSkgPT4ge1xyXG4gICAgc3dpdGNoIChzdGFnZSkge1xyXG4gICAgICBjYXNlIFwiZW1haWxcIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEF1dGhGb3JtRmllbGRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgIG9uVmFsaWRJbnB1dD17b25WYWxpZElucHV0fVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlIFwiY29kZVwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8UGluSW5wdXRcclxuICAgICAgICAgICAgbGVuZ3RoPXs2fVxyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJcIlxyXG4gICAgICAgICAgICB0eXBlPVwibnVtZXJpY1wiXHJcbiAgICAgICAgICAgIGlucHV0TW9kZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIGlucHV0U3R5bGU9e3sgYm9yZGVyQ29sb3I6IFwicmVkXCIgfX0gLy8gQ2hhbmdlIHRoZSBib3JkZXIgY29sb3JcclxuICAgICAgICAgICAgaW5wdXRGb2N1c1N0eWxlPXt7IGJvcmRlckNvbG9yOiBcImJsdWVcIiB9fSAvLyBDaGFuZ2UgdGhlIGJvcmRlciBjb2xvciB3aGVuIGZvY3VzZWRcclxuICAgICAgICAgICAgb25Db21wbGV0ZT17b25WYWxpZElucHV0fVxyXG4gICAgICAgICAgICBhdXRvU2VsZWN0PXt0cnVlfVxyXG4gICAgICAgICAgICByZWdleENyaXRlcmlhPXsvXlsgQS1aYS16MC05X0AuLyMmKy1dKiQvfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlIFwicGFzc3dvcmRcIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEF1dGhGb3JtRmllbGRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgb25WYWxpZElucHV0PXtvblZhbGlkSW5wdXR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEF1dGhGb3JtRmllbGRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBvblZhbGlkSW5wdXQ9e29uVmFsaWRJbnB1dH1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHN0YWdlID09PSBcImVtYWlsXCIpIHtcclxuICAgICAgICBpZihvblZhbGlkSW5wdXQpXHJcbiAgICAgIHNldFN0YWdlKFwiY29kZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhZ2UgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgIHNldFN0YWdlKFwicGFzc3dvcmRcIik7XHJcbiAgICB9IGVsc2UgaWYgKHN0YWdlID09PSBcInBhc3N3b3JkXCIpIHtcclxuICAgICAgc2V0U3RhZ2UoXCJzdWNjZXNzXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNjAlXSBoLVs2MCVdIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00IGJvcmRlci1yZWQtNTAwIGJvcmRlci0yXCI+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQgdGV4dC1jZW50ZXIgdGV4dC1bNDBweF0gdGV4dC1ibGFjayBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMTIgaC0xMiByb3VuZGVkLWZ1bGwgYmctemluYy00MDAgXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmb250LW1lZGl1bVwiPldlbGNvbWUgYmFjazwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNiB0ZXh0LWNlbnRlciB0ZXh0LVsyMHB4XSB0ZXh0LWJhc2UgbXQtMTAgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSBmb250LWJvbGRcIj57Y2FyZFRpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gZm9udC1zYW5zIGxlYWRpbmctWzI0cHhdIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgIHtjYXJkQm9keX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7cmVuZGVyRm9ybUZpZWxkcyhzdGFnZSl9XHJcbiAgICAgICAgPEF1dGhCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgdGV4dD17YnV0dG9uVGl0bGV9XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e1wiYmctemluYy0zMDBcIn1cclxuICAgICAgICAgIHRleHRDb2xvcj17XCJ0ZXh0LXdoaXRlXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gW3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmVdIGZvbnQtbWVkaXVtICB0ZXh0LWdyYXkgdGV4dC1yaWdodCBtdC0xMCBjdXJzb3ItcG9pbnRlciAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6dGV4dC1ibHVlLTUwMFwiPlxyXG4gICAgICAgIHtjYXJkRm9vdGVyfVxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoUmVzZXRQYXNzd29yZENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXV0aEZvcm1GaWVsZCIsIkF1dGhCdXR0b24iLCJQaW5JbnB1dCIsIlNUQUdFX0NPTlRFTlQiLCJlbWFpbCIsImNhcmRUaXRsZSIsImJ1dHRvblRpdGxlIiwiY2FyZEJvZHkiLCJjYXJkRm9vdGVyIiwibGluayIsImNvZGUiLCJwYXNzd29yZCIsInN1Y2Nlc3MiLCJBdXRoUmVzZXRQYXNzd29yZENhcmQiLCJvblZhbGlkSW5wdXQiLCJzdGFnZSIsInNldFN0YWdlIiwicmVuZGVyRm9ybUZpZWxkcyIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJsYWJlbCIsInJlcXVpcmVkIiwibGVuZ3RoIiwiaW5pdGlhbFZhbHVlIiwiaW5wdXRNb2RlIiwic3R5bGUiLCJwYWRkaW5nIiwiaW5wdXRTdHlsZSIsImJvcmRlckNvbG9yIiwiaW5wdXRGb2N1c1N0eWxlIiwib25Db21wbGV0ZSIsImF1dG9TZWxlY3QiLCJyZWdleENyaXRlcmlhIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJvbkNsaWNrIiwidGV4dCIsImJhY2tncm91bmRDb2xvciIsInRleHRDb2xvciIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthResetPasswordCard.jsx\n"));

/***/ })

});