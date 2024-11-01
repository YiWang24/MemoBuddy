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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pin-input */ \"(app-pages-browser)/./node_modules/react-pin-input/dist/bundle.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pin_input__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst STAGE_CONTENT = {\n    email: {\n        cardTitle: \"Reset Password\",\n        buttonTitle: \"Send Verification Code\",\n        cardBody: \"No worries, We’ll send you reset instructions\",\n        cardFooter: \"Already have an account?\",\n        link: \"/login\"\n    },\n    code: {\n        cardTitle: \"Check Your Email\",\n        buttonTitle: \"Verify Code\",\n        cardBody: \"We sent a reset link to contact@gmail.com enter 4 digit code that mentioned in the email\",\n        cardFooter: \"Haven’t got the email yet? Resend Code\"\n    },\n    password: {\n        cardTitle: \"Set a New Password\",\n        buttonTitle: \"Confirm\",\n        cardBody: \"Create a new password. Ensure it differs from previous ones for security\",\n        cardFooter: \"\"\n    },\n    success: {\n        cardTitle: \"Password Reset Successful\",\n        buttonTitle: \"Return to Login\",\n        cardBody: \"Your password has been reset successfully. Please login with your new password\",\n        cardFooter: \"\",\n        link: \"/login\"\n    }\n};\nconst AuthResetPasswordCard = (param)=>{\n    let { onValidInput } = param;\n    _s();\n    const [stage, setStage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"email\");\n    const { cardTitle, buttonTitle, cardBody, cardFooter } = STAGE_CONTENT[stage];\n    const renderFormFields = (stage)=>{\n        switch(stage){\n            case \"email\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                    type: \"email\",\n                    placeholder: \"Email\",\n                    name: \"email\",\n                    label: \"Email Address\",\n                    onValidInput: onValidInput,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, undefined);\n            case \"code\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_pin_input__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    length: 6,\n                    initialValue: \"\",\n                    type: \"numeric\",\n                    inputMode: \"number\",\n                    style: {\n                        padding: \"10px\"\n                    },\n                    inputStyle: {\n                        borderColor: \"red\"\n                    },\n                    inputFocusStyle: {\n                        borderColor: \"blue\"\n                    },\n                    onComplete: onValidInput,\n                    autoSelect: true,\n                    regexCriteria: /^[ A-Za-z0-9_@./#&+-]*$/\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined);\n            case \"password\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            type: \"password\",\n                            placeholder: \"Password\",\n                            name: \"password\",\n                            label: \"Password\",\n                            onValidInput: onValidInput,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            type: \"password\",\n                            placeholder: \"Confirm Password\",\n                            name: \"confirmPassword\",\n                            label: \"Confirm Password\",\n                            onValidInput: onValidInput,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true);\n        }\n    };\n    const handleButtonClick = ()=>{\n        if (stage === \"email\") {\n            if (onValidInput) {}\n            setStage(\"code\");\n        } else if (stage === \"code\") {\n            setStage(\"password\");\n        } else if (stage === \"password\") {\n            setStage(\"success\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[60%] h-[60%] flex flex-col items-center gap-4 border-red-500 border-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"relative flex flex-col items-center justify-center gap-4 text-center text-[40px] text-black \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-12 h-12 rounded-full bg-zinc-400 \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative font-medium\",\n                        children: \"Welcome back\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center gap-6 text-center text-[20px] text-base mt-10 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[24px] font-bold\",\n                        children: cardTitle\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[16px] font-sans leading-[24px] text-gray-500\",\n                        children: cardBody\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined),\n                    renderFormFields(stage),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                        onClick: handleButtonClick,\n                        text: buttonTitle,\n                        backgroundColor: \"bg-zinc-300\",\n                        textColor: \"text-white\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"text-[16px] [text-decoration:underline] font-medium  text-gray text-right mt-10 cursor-pointer  transition duration-300 ease-in-out hover:text-blue-500\",\n                children: cardFooter\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthResetPasswordCard, \"/TPUyURFfva5gjzJoOib6rvGhGc=\");\n_c = AuthResetPasswordCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthResetPasswordCard);\nvar _c;\n$RefreshReg$(_c, \"AuthResetPasswordCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aFJlc2V0UGFzc3dvcmRDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFDc0I7QUFDdkI7QUFDdkMsTUFBTUssZ0JBQWdCO0lBQ3BCQyxPQUFPO1FBQ0xDLFdBQVc7UUFDWEMsYUFBYTtRQUNiQyxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsTUFBSztJQUNQO0lBQ0FDLE1BQU07UUFDSkwsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQ0U7UUFDRkMsWUFBWTtJQUNkO0lBQ0FHLFVBQVU7UUFDUk4sV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQ0U7UUFDRkMsWUFBWTtJQUNkO0lBQ0FJLFNBQVM7UUFDUFAsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQ0U7UUFDRkMsWUFBWTtRQUNaQyxNQUFLO0lBQ1A7QUFDRjtBQUVBLE1BQU1JLHdCQUF3QjtRQUFDLEVBQUVDLFlBQVksRUFBRTs7SUFDN0MsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLEVBQUVNLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRSxHQUFHTCxhQUFhLENBQUNZLE1BQU07SUFFN0UsTUFBTUUsbUJBQW1CLENBQUNGO1FBQ3hCLE9BQVFBO1lBQ04sS0FBSztnQkFDSCxxQkFDRSw4REFBQ2YsMkRBQWFBO29CQUNaa0IsTUFBSztvQkFDTEMsYUFBWTtvQkFDWkMsTUFBSztvQkFDTEMsT0FBTTtvQkFDTlAsY0FBY0E7b0JBQ2RRLFFBQVE7Ozs7OztZQUdkLEtBQUs7Z0JBQ0gscUJBQ0UsOERBQUNwQix3REFBUUE7b0JBQ1BxQixRQUFRO29CQUNSQyxjQUFhO29CQUNiTixNQUFLO29CQUNMTyxXQUFVO29CQUNWQyxPQUFPO3dCQUFFQyxTQUFTO29CQUFPO29CQUN6QkMsWUFBWTt3QkFBRUMsYUFBYTtvQkFBTTtvQkFDakNDLGlCQUFpQjt3QkFBRUQsYUFBYTtvQkFBTztvQkFDdkNFLFlBQVlqQjtvQkFDWmtCLFlBQVk7b0JBQ1pDLGVBQWU7Ozs7OztZQUdyQixLQUFLO2dCQUNILHFCQUNFOztzQ0FDRSw4REFBQ2pDLDJEQUFhQTs0QkFDWmtCLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLE1BQUs7NEJBQ0xDLE9BQU07NEJBQ05QLGNBQWNBOzRCQUNkUSxRQUFROzs7Ozs7c0NBRVYsOERBQUN0QiwyREFBYUE7NEJBQ1prQixNQUFLOzRCQUNMQyxhQUFZOzRCQUNaQyxNQUFLOzRCQUNMQyxPQUFNOzRCQUNOUCxjQUFjQTs0QkFDZFEsUUFBUTs7Ozs7Ozs7UUFJbEI7SUFDRjtJQUNBLE1BQU1ZLG9CQUFvQjtRQUN4QixJQUFJbkIsVUFBVSxTQUFTO1lBQ25CLElBQUdELGNBQWEsQ0FFaEI7WUFDRkUsU0FBUztRQUNYLE9BQU8sSUFBSUQsVUFBVSxRQUFRO1lBQzNCQyxTQUFTO1FBQ1gsT0FBTyxJQUFJRCxVQUFVLFlBQVk7WUFDL0JDLFNBQVM7UUFDWDtJQUNGO0lBQ0EscUJBQ0UsOERBQUNtQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU9ELFdBQVU7O2tDQUNoQiw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQXVCOzs7Ozs7Ozs7Ozs7MEJBRXhDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUF5Qi9COzs7Ozs7a0NBQ3hDLDhEQUFDOEI7d0JBQUlDLFdBQVU7a0NBQ1o3Qjs7Ozs7O29CQUVGVSxpQkFBaUJGO2tDQUNsQiw4REFBQ2Qsd0RBQVVBO3dCQUNUcUMsU0FBU0o7d0JBQ1RLLE1BQU1qQzt3QkFDTmtDLGlCQUFpQjt3QkFDakJDLFdBQVc7Ozs7Ozs7Ozs7OzswQkFHZiw4REFBQ0M7Z0JBQU9OLFdBQVU7MEJBQ2Y1Qjs7Ozs7Ozs7Ozs7O0FBSVQ7R0EzRk1LO0tBQUFBO0FBNkZOLCtEQUFlQSxxQkFBcUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9BdXRoUmVzZXRQYXNzd29yZENhcmQuanN4PzllMzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRoRm9ybUZpZWxkLCBBdXRoQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9hdXRoXCI7XHJcbmltcG9ydCBQaW5JbnB1dCBmcm9tIFwicmVhY3QtcGluLWlucHV0XCI7XHJcbmNvbnN0IFNUQUdFX0NPTlRFTlQgPSB7XHJcbiAgZW1haWw6IHtcclxuICAgIGNhcmRUaXRsZTogXCJSZXNldCBQYXNzd29yZFwiLFxyXG4gICAgYnV0dG9uVGl0bGU6IFwiU2VuZCBWZXJpZmljYXRpb24gQ29kZVwiLFxyXG4gICAgY2FyZEJvZHk6IFwiTm8gd29ycmllcywgV2XigJlsbCBzZW5kIHlvdSByZXNldCBpbnN0cnVjdGlvbnNcIixcclxuICAgIGNhcmRGb290ZXI6IFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XCIsXHJcbiAgICBsaW5rOlwiL2xvZ2luXCJcclxuICB9LFxyXG4gIGNvZGU6IHtcclxuICAgIGNhcmRUaXRsZTogXCJDaGVjayBZb3VyIEVtYWlsXCIsXHJcbiAgICBidXR0b25UaXRsZTogXCJWZXJpZnkgQ29kZVwiLFxyXG4gICAgY2FyZEJvZHk6XHJcbiAgICAgIFwiV2Ugc2VudCBhIHJlc2V0IGxpbmsgdG8gY29udGFjdEBnbWFpbC5jb20gZW50ZXIgNCBkaWdpdCBjb2RlIHRoYXQgbWVudGlvbmVkIGluIHRoZSBlbWFpbFwiLFxyXG4gICAgY2FyZEZvb3RlcjogXCJIYXZlbuKAmXQgZ290IHRoZSBlbWFpbCB5ZXQ/IFJlc2VuZCBDb2RlXCIsXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgY2FyZFRpdGxlOiBcIlNldCBhIE5ldyBQYXNzd29yZFwiLFxyXG4gICAgYnV0dG9uVGl0bGU6IFwiQ29uZmlybVwiLFxyXG4gICAgY2FyZEJvZHk6XHJcbiAgICAgIFwiQ3JlYXRlIGEgbmV3IHBhc3N3b3JkLiBFbnN1cmUgaXQgZGlmZmVycyBmcm9tIHByZXZpb3VzIG9uZXMgZm9yIHNlY3VyaXR5XCIsXHJcbiAgICBjYXJkRm9vdGVyOiBcIlwiLFxyXG4gIH0sXHJcbiAgc3VjY2Vzczoge1xyXG4gICAgY2FyZFRpdGxlOiBcIlBhc3N3b3JkIFJlc2V0IFN1Y2Nlc3NmdWxcIixcclxuICAgIGJ1dHRvblRpdGxlOiBcIlJldHVybiB0byBMb2dpblwiLFxyXG4gICAgY2FyZEJvZHk6XHJcbiAgICAgIFwiWW91ciBwYXNzd29yZCBoYXMgYmVlbiByZXNldCBzdWNjZXNzZnVsbHkuIFBsZWFzZSBsb2dpbiB3aXRoIHlvdXIgbmV3IHBhc3N3b3JkXCIsXHJcbiAgICBjYXJkRm9vdGVyOiBcIlwiLFxyXG4gICAgbGluazpcIi9sb2dpblwiXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IEF1dGhSZXNldFBhc3N3b3JkQ2FyZCA9ICh7IG9uVmFsaWRJbnB1dCB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YWdlLCBzZXRTdGFnZV0gPSB1c2VTdGF0ZShcImVtYWlsXCIpO1xyXG4gIGNvbnN0IHsgY2FyZFRpdGxlLCBidXR0b25UaXRsZSwgY2FyZEJvZHksIGNhcmRGb290ZXIgfSA9IFNUQUdFX0NPTlRFTlRbc3RhZ2VdO1xyXG5cclxuICBjb25zdCByZW5kZXJGb3JtRmllbGRzID0gKHN0YWdlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHN0YWdlKSB7XHJcbiAgICAgIGNhc2UgXCJlbWFpbFwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8QXV0aEZvcm1GaWVsZFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgb25WYWxpZElucHV0PXtvblZhbGlkSW5wdXR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgXCJjb2RlXCI6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxQaW5JbnB1dFxyXG4gICAgICAgICAgICBsZW5ndGg9ezZ9XHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1lcmljXCJcclxuICAgICAgICAgICAgaW5wdXRNb2RlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgaW5wdXRTdHlsZT17eyBib3JkZXJDb2xvcjogXCJyZWRcIiB9fSAvLyBDaGFuZ2UgdGhlIGJvcmRlciBjb2xvclxyXG4gICAgICAgICAgICBpbnB1dEZvY3VzU3R5bGU9e3sgYm9yZGVyQ29sb3I6IFwiYmx1ZVwiIH19IC8vIENoYW5nZSB0aGUgYm9yZGVyIGNvbG9yIHdoZW4gZm9jdXNlZFxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlPXtvblZhbGlkSW5wdXR9XHJcbiAgICAgICAgICAgIGF1dG9TZWxlY3Q9e3RydWV9XHJcbiAgICAgICAgICAgIHJlZ2V4Q3JpdGVyaWE9ey9eWyBBLVphLXowLTlfQC4vIyYrLV0qJC99XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgXCJwYXNzd29yZFwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QXV0aEZvcm1GaWVsZFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBvblZhbGlkSW5wdXQ9e29uVmFsaWRJbnB1dH1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QXV0aEZvcm1GaWVsZFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkNvbmZpcm0gUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG9uVmFsaWRJbnB1dD17b25WYWxpZElucHV0fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoc3RhZ2UgPT09IFwiZW1haWxcIikge1xyXG4gICAgICAgIGlmKG9uVmFsaWRJbnB1dCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgc2V0U3RhZ2UoXCJjb2RlXCIpO1xyXG4gICAgfSBlbHNlIGlmIChzdGFnZSA9PT0gXCJjb2RlXCIpIHtcclxuICAgICAgc2V0U3RhZ2UoXCJwYXNzd29yZFwiKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhZ2UgPT09IFwicGFzc3dvcmRcIikge1xyXG4gICAgICBzZXRTdGFnZShcInN1Y2Nlc3NcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs2MCVdIGgtWzYwJV0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTQgYm9yZGVyLXJlZC01MDAgYm9yZGVyLTJcIj5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNCB0ZXh0LWNlbnRlciB0ZXh0LVs0MHB4XSB0ZXh0LWJsYWNrIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0xMiBoLTEyIHJvdW5kZWQtZnVsbCBiZy16aW5jLTQwMCBcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZvbnQtbWVkaXVtXCI+V2VsY29tZSBiYWNrPC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC02IHRleHQtY2VudGVyIHRleHQtWzIwcHhdIHRleHQtYmFzZSBtdC0xMCBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIGZvbnQtYm9sZFwiPntjYXJkVGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxNnB4XSBmb250LXNhbnMgbGVhZGluZy1bMjRweF0gdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAge2NhcmRCb2R5fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtyZW5kZXJGb3JtRmllbGRzKHN0YWdlKX1cclxuICAgICAgICA8QXV0aEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICB0ZXh0PXtidXR0b25UaXRsZX1cclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17XCJiZy16aW5jLTMwMFwifVxyXG4gICAgICAgICAgdGV4dENvbG9yPXtcInRleHQtd2hpdGVcIn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJ0ZXh0LVsxNnB4XSBbdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZV0gZm9udC1tZWRpdW0gIHRleHQtZ3JheSB0ZXh0LXJpZ2h0IG10LTEwIGN1cnNvci1wb2ludGVyICB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LWJsdWUtNTAwXCI+XHJcbiAgICAgICAge2NhcmRGb290ZXJ9XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhSZXNldFBhc3N3b3JkQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBdXRoRm9ybUZpZWxkIiwiQXV0aEJ1dHRvbiIsIlBpbklucHV0IiwiU1RBR0VfQ09OVEVOVCIsImVtYWlsIiwiY2FyZFRpdGxlIiwiYnV0dG9uVGl0bGUiLCJjYXJkQm9keSIsImNhcmRGb290ZXIiLCJsaW5rIiwiY29kZSIsInBhc3N3b3JkIiwic3VjY2VzcyIsIkF1dGhSZXNldFBhc3N3b3JkQ2FyZCIsIm9uVmFsaWRJbnB1dCIsInN0YWdlIiwic2V0U3RhZ2UiLCJyZW5kZXJGb3JtRmllbGRzIiwidHlwZSIsInBsYWNlaG9sZGVyIiwibmFtZSIsImxhYmVsIiwicmVxdWlyZWQiLCJsZW5ndGgiLCJpbml0aWFsVmFsdWUiLCJpbnB1dE1vZGUiLCJzdHlsZSIsInBhZGRpbmciLCJpbnB1dFN0eWxlIiwiYm9yZGVyQ29sb3IiLCJpbnB1dEZvY3VzU3R5bGUiLCJvbkNvbXBsZXRlIiwiYXV0b1NlbGVjdCIsInJlZ2V4Q3JpdGVyaWEiLCJoYW5kbGVCdXR0b25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm9uQ2xpY2siLCJ0ZXh0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthResetPasswordCard.jsx\n"));

/***/ })

});