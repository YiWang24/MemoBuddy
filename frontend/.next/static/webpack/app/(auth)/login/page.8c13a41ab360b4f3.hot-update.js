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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pin-input */ \"(app-pages-browser)/./node_modules/react-pin-input/dist/bundle.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pin_input__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst STAGE_CONTENT = {\n    email: {\n        cardTitle: \"Reset Password\",\n        buttonTitle: \"Send Verification Code\",\n        cardBody: \"No worries, We’ll send you reset instructions\",\n        cardFooter: \"Already have an account?\"\n    },\n    code: {\n        cardTitle: \"Check Your Email\",\n        buttonTitle: \"Verify Code\",\n        cardBody: \"We sent a reset link to contact@gmail.com enter 4 digit code that mentioned in the email\",\n        cardFooter: \"Haven’t got the email yet? Resend Code\"\n    },\n    password: {\n        cardTitle: \"Set a New Password\",\n        buttonTitle: \"Confirm\",\n        cardBody: \"Create a new password. Ensure it differs from previous ones for security\",\n        cardFooter: \"\"\n    },\n    success: {\n        cardTitle: \"Password Reset Successful\",\n        buttonTitle: \"Return to Login\",\n        cardBody: \"Your password has been reset successfully. Please login with your new password\",\n        cardFooter: \"\"\n    }\n};\nconst AuthResetPasswordCard = (param)=>{\n    let { onValidInput } = param;\n    _s();\n    const [stage, setStage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"email\");\n    const { cardTitle, buttonTitle, cardBody, cardFooter } = STAGE_CONTENT[stage];\n    const renderFormFields = (stage)=>{\n        switch(stage){\n            case \"email\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                    type: \"email\",\n                    placeholder: \"Email\",\n                    name: \"email\",\n                    label: \"Email Address\",\n                    onValidInput: onValidInput,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, undefined);\n            case \"code\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_pin_input__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    length: 6,\n                    initialValue: \"\",\n                    type: \"numeric\",\n                    inputMode: \"number\",\n                    style: {\n                        padding: \"10px\"\n                    },\n                    inputStyle: {\n                        borderColor: \"red\"\n                    },\n                    inputFocusStyle: {\n                        borderColor: \"blue\"\n                    },\n                    onComplete: onValidInput,\n                    autoSelect: true,\n                    regexCriteria: /^[ A-Za-z0-9_@./#&+-]*$/\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, undefined);\n            case \"password\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            type: \"password\",\n                            placeholder: \"Password\",\n                            name: \"password\",\n                            label: \"Password\",\n                            onValidInput: onValidInput,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            type: \"password\",\n                            placeholder: \"Confirm Password\",\n                            name: \"confirmPassword\",\n                            label: \"Confirm Password\",\n                            onValidInput: onValidInput,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true);\n        }\n    };\n    const handleButtonClick = ()=>{\n        if (stage === \"email\") {\n            setStage(\"code\");\n        } else if (stage === \"code\") {\n            setStage(\"password\");\n        } else if (stage === \"password\") {\n            setStage(\"success\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[60%] h-[60%] flex flex-col items-center gap-4 border-red-500 border-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"relative flex flex-col items-center justify-center gap-4 text-center text-[40px] text-black \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-12 h-12 rounded-full bg-zinc-400 \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative font-medium\",\n                        children: \"Welcome back\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center gap-6 text-center text-[20px] text-base mt-10 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[24px] font-bold\",\n                        children: cardTitle\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[16px] font-sans leading-[24px] text-gray-500\",\n                        children: cardBody\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    renderFormFields(stage),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                        onClick: handleButtonClick,\n                        text: buttonTitle,\n                        backgroundColor: \"bg-zinc-300\",\n                        textColor: \"text-white\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"text-[16px] [text-decoration:underline] font-medium  text-gray text-right mt-10 cursor-pointer  transition duration-300 ease-in-out hover:text-blue-500\",\n                children: cardFooter\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthResetPasswordCard, \"/TPUyURFfva5gjzJoOib6rvGhGc=\");\n_c = AuthResetPasswordCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthResetPasswordCard);\nvar _c;\n$RefreshReg$(_c, \"AuthResetPasswordCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aFJlc2V0UGFzc3dvcmRDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFDc0I7QUFDdkI7QUFDdkMsTUFBTUssZ0JBQWdCO0lBQ3BCQyxPQUFPO1FBQ0xDLFdBQVc7UUFDWEMsYUFBYTtRQUNiQyxVQUFVO1FBQ1ZDLFlBQVk7SUFFZDtJQUNBQyxNQUFNO1FBQ0pKLFdBQVc7UUFDWEMsYUFBYTtRQUNiQyxVQUNFO1FBQ0ZDLFlBQVk7SUFDZDtJQUNBRSxVQUFVO1FBQ1JMLFdBQVc7UUFDWEMsYUFBYTtRQUNiQyxVQUNFO1FBQ0ZDLFlBQVk7SUFDZDtJQUNBRyxTQUFTO1FBQ1BOLFdBQVc7UUFDWEMsYUFBYTtRQUNiQyxVQUNFO1FBQ0ZDLFlBQVk7SUFDZDtBQUNGO0FBRUEsTUFBTUksd0JBQXdCO1FBQUMsRUFBRUMsWUFBWSxFQUFFOztJQUM3QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sRUFBRU0sU0FBUyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFLEdBQUdMLGFBQWEsQ0FBQ1csTUFBTTtJQUU3RSxNQUFNRSxtQkFBbUIsQ0FBQ0Y7UUFDeEIsT0FBUUE7WUFDTixLQUFLO2dCQUNILHFCQUNFLDhEQUFDZCwyREFBYUE7b0JBQ1ppQixNQUFLO29CQUNMQyxhQUFZO29CQUNaQyxNQUFLO29CQUNMQyxPQUFNO29CQUNOUCxjQUFjQTtvQkFDZFEsUUFBUTs7Ozs7O1lBR2QsS0FBSztnQkFDSCxxQkFDRSw4REFBQ25CLHdEQUFRQTtvQkFDUG9CLFFBQVE7b0JBQ1JDLGNBQWE7b0JBQ2JOLE1BQUs7b0JBQ0xPLFdBQVU7b0JBQ1ZDLE9BQU87d0JBQUVDLFNBQVM7b0JBQU87b0JBQ3pCQyxZQUFZO3dCQUFFQyxhQUFhO29CQUFNO29CQUNqQ0MsaUJBQWlCO3dCQUFFRCxhQUFhO29CQUFPO29CQUN2Q0UsWUFBWWpCO29CQUNaa0IsWUFBWTtvQkFDWkMsZUFBZTs7Ozs7O1lBR3JCLEtBQUs7Z0JBQ0gscUJBQ0U7O3NDQUNFLDhEQUFDaEMsMkRBQWFBOzRCQUNaaUIsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsTUFBSzs0QkFDTEMsT0FBTTs0QkFDTlAsY0FBY0E7NEJBQ2RRLFFBQVE7Ozs7OztzQ0FFViw4REFBQ3JCLDJEQUFhQTs0QkFDWmlCLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLE1BQUs7NEJBQ0xDLE9BQU07NEJBQ05QLGNBQWNBOzRCQUNkUSxRQUFROzs7Ozs7OztRQUlsQjtJQUNGO0lBQ0EsTUFBTVksb0JBQW9CO1FBQ3hCLElBQUluQixVQUFVLFNBQVM7WUFDckJDLFNBQVM7UUFDWCxPQUFPLElBQUlELFVBQVUsUUFBUTtZQUMzQkMsU0FBUztRQUNYLE9BQU8sSUFBSUQsVUFBVSxZQUFZO1lBQy9CQyxTQUFTO1FBQ1g7SUFDRjtJQUNBLHFCQUNFLDhEQUFDbUI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFPRCxXQUFVOztrQ0FDaEIsOERBQUNEO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUF1Qjs7Ozs7Ozs7Ozs7OzBCQUV4Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBeUI5Qjs7Ozs7O2tDQUN4Qyw4REFBQzZCO3dCQUFJQyxXQUFVO2tDQUNaNUI7Ozs7OztvQkFFRlMsaUJBQWlCRjtrQ0FDbEIsOERBQUNiLHdEQUFVQTt3QkFDVG9DLFNBQVNKO3dCQUNUSyxNQUFNaEM7d0JBQ05pQyxpQkFBaUI7d0JBQ2pCQyxXQUFXOzs7Ozs7Ozs7Ozs7MEJBR2YsOERBQUNDO2dCQUFPTixXQUFVOzBCQUNmM0I7Ozs7Ozs7Ozs7OztBQUlUO0dBeEZNSTtLQUFBQTtBQTBGTiwrREFBZUEscUJBQXFCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aFJlc2V0UGFzc3dvcmRDYXJkLmpzeD85ZTMxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aEZvcm1GaWVsZCwgQXV0aEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvYXV0aFwiO1xyXG5pbXBvcnQgUGluSW5wdXQgZnJvbSBcInJlYWN0LXBpbi1pbnB1dFwiO1xyXG5jb25zdCBTVEFHRV9DT05URU5UID0ge1xyXG4gIGVtYWlsOiB7XHJcbiAgICBjYXJkVGl0bGU6IFwiUmVzZXQgUGFzc3dvcmRcIixcclxuICAgIGJ1dHRvblRpdGxlOiBcIlNlbmQgVmVyaWZpY2F0aW9uIENvZGVcIixcclxuICAgIGNhcmRCb2R5OiBcIk5vIHdvcnJpZXMsIFdl4oCZbGwgc2VuZCB5b3UgcmVzZXQgaW5zdHJ1Y3Rpb25zXCIsXHJcbiAgICBjYXJkRm9vdGVyOiBcIkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1wiLFxyXG4gICAgXHJcbiAgfSxcclxuICBjb2RlOiB7XHJcbiAgICBjYXJkVGl0bGU6IFwiQ2hlY2sgWW91ciBFbWFpbFwiLFxyXG4gICAgYnV0dG9uVGl0bGU6IFwiVmVyaWZ5IENvZGVcIixcclxuICAgIGNhcmRCb2R5OlxyXG4gICAgICBcIldlIHNlbnQgYSByZXNldCBsaW5rIHRvIGNvbnRhY3RAZ21haWwuY29tIGVudGVyIDQgZGlnaXQgY29kZSB0aGF0IG1lbnRpb25lZCBpbiB0aGUgZW1haWxcIixcclxuICAgIGNhcmRGb290ZXI6IFwiSGF2ZW7igJl0IGdvdCB0aGUgZW1haWwgeWV0PyBSZXNlbmQgQ29kZVwiLFxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIGNhcmRUaXRsZTogXCJTZXQgYSBOZXcgUGFzc3dvcmRcIixcclxuICAgIGJ1dHRvblRpdGxlOiBcIkNvbmZpcm1cIixcclxuICAgIGNhcmRCb2R5OlxyXG4gICAgICBcIkNyZWF0ZSBhIG5ldyBwYXNzd29yZC4gRW5zdXJlIGl0IGRpZmZlcnMgZnJvbSBwcmV2aW91cyBvbmVzIGZvciBzZWN1cml0eVwiLFxyXG4gICAgY2FyZEZvb3RlcjogXCJcIixcclxuICB9LFxyXG4gIHN1Y2Nlc3M6IHtcclxuICAgIGNhcmRUaXRsZTogXCJQYXNzd29yZCBSZXNldCBTdWNjZXNzZnVsXCIsXHJcbiAgICBidXR0b25UaXRsZTogXCJSZXR1cm4gdG8gTG9naW5cIixcclxuICAgIGNhcmRCb2R5OlxyXG4gICAgICBcIllvdXIgcGFzc3dvcmQgaGFzIGJlZW4gcmVzZXQgc3VjY2Vzc2Z1bGx5LiBQbGVhc2UgbG9naW4gd2l0aCB5b3VyIG5ldyBwYXNzd29yZFwiLFxyXG4gICAgY2FyZEZvb3RlcjogXCJcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgQXV0aFJlc2V0UGFzc3dvcmRDYXJkID0gKHsgb25WYWxpZElucHV0IH0pID0+IHtcclxuICBjb25zdCBbc3RhZ2UsIHNldFN0YWdlXSA9IHVzZVN0YXRlKFwiZW1haWxcIik7XHJcbiAgY29uc3QgeyBjYXJkVGl0bGUsIGJ1dHRvblRpdGxlLCBjYXJkQm9keSwgY2FyZEZvb3RlciB9ID0gU1RBR0VfQ09OVEVOVFtzdGFnZV07XHJcblxyXG4gIGNvbnN0IHJlbmRlckZvcm1GaWVsZHMgPSAoc3RhZ2UpID0+IHtcclxuICAgIHN3aXRjaCAoc3RhZ2UpIHtcclxuICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxBdXRoRm9ybUZpZWxkXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICBvblZhbGlkSW5wdXQ9e29uVmFsaWRJbnB1dH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSBcImNvZGVcIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFBpbklucHV0XHJcbiAgICAgICAgICAgIGxlbmd0aD17Nn1cclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgdHlwZT1cIm51bWVyaWNcIlxyXG4gICAgICAgICAgICBpbnB1dE1vZGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBpbnB1dFN0eWxlPXt7IGJvcmRlckNvbG9yOiBcInJlZFwiIH19IC8vIENoYW5nZSB0aGUgYm9yZGVyIGNvbG9yXHJcbiAgICAgICAgICAgIGlucHV0Rm9jdXNTdHlsZT17eyBib3JkZXJDb2xvcjogXCJibHVlXCIgfX0gLy8gQ2hhbmdlIHRoZSBib3JkZXIgY29sb3Igd2hlbiBmb2N1c2VkXHJcbiAgICAgICAgICAgIG9uQ29tcGxldGU9e29uVmFsaWRJbnB1dH1cclxuICAgICAgICAgICAgYXV0b1NlbGVjdD17dHJ1ZX1cclxuICAgICAgICAgICAgcmVnZXhDcml0ZXJpYT17L15bIEEtWmEtejAtOV9ALi8jJistXSokL31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSBcInBhc3N3b3JkXCI6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBdXRoRm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG9uVmFsaWRJbnB1dD17b25WYWxpZElucHV0fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxBdXRoRm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgb25WYWxpZElucHV0PXtvblZhbGlkSW5wdXR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIGlmIChzdGFnZSA9PT0gXCJlbWFpbFwiKSB7XHJcbiAgICAgIHNldFN0YWdlKFwiY29kZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhZ2UgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgIHNldFN0YWdlKFwicGFzc3dvcmRcIik7XHJcbiAgICB9IGVsc2UgaWYgKHN0YWdlID09PSBcInBhc3N3b3JkXCIpIHtcclxuICAgICAgc2V0U3RhZ2UoXCJzdWNjZXNzXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNjAlXSBoLVs2MCVdIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00IGJvcmRlci1yZWQtNTAwIGJvcmRlci0yXCI+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQgdGV4dC1jZW50ZXIgdGV4dC1bNDBweF0gdGV4dC1ibGFjayBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMTIgaC0xMiByb3VuZGVkLWZ1bGwgYmctemluYy00MDAgXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmb250LW1lZGl1bVwiPldlbGNvbWUgYmFjazwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNiB0ZXh0LWNlbnRlciB0ZXh0LVsyMHB4XSB0ZXh0LWJhc2UgbXQtMTAgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSBmb250LWJvbGRcIj57Y2FyZFRpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gZm9udC1zYW5zIGxlYWRpbmctWzI0cHhdIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgIHtjYXJkQm9keX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7cmVuZGVyRm9ybUZpZWxkcyhzdGFnZSl9XHJcbiAgICAgICAgPEF1dGhCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgdGV4dD17YnV0dG9uVGl0bGV9XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e1wiYmctemluYy0zMDBcIn1cclxuICAgICAgICAgIHRleHRDb2xvcj17XCJ0ZXh0LXdoaXRlXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gW3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmVdIGZvbnQtbWVkaXVtICB0ZXh0LWdyYXkgdGV4dC1yaWdodCBtdC0xMCBjdXJzb3ItcG9pbnRlciAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6dGV4dC1ibHVlLTUwMFwiPlxyXG4gICAgICAgIHtjYXJkRm9vdGVyfVxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoUmVzZXRQYXNzd29yZENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXV0aEZvcm1GaWVsZCIsIkF1dGhCdXR0b24iLCJQaW5JbnB1dCIsIlNUQUdFX0NPTlRFTlQiLCJlbWFpbCIsImNhcmRUaXRsZSIsImJ1dHRvblRpdGxlIiwiY2FyZEJvZHkiLCJjYXJkRm9vdGVyIiwiY29kZSIsInBhc3N3b3JkIiwic3VjY2VzcyIsIkF1dGhSZXNldFBhc3N3b3JkQ2FyZCIsIm9uVmFsaWRJbnB1dCIsInN0YWdlIiwic2V0U3RhZ2UiLCJyZW5kZXJGb3JtRmllbGRzIiwidHlwZSIsInBsYWNlaG9sZGVyIiwibmFtZSIsImxhYmVsIiwicmVxdWlyZWQiLCJsZW5ndGgiLCJpbml0aWFsVmFsdWUiLCJpbnB1dE1vZGUiLCJzdHlsZSIsInBhZGRpbmciLCJpbnB1dFN0eWxlIiwiYm9yZGVyQ29sb3IiLCJpbnB1dEZvY3VzU3R5bGUiLCJvbkNvbXBsZXRlIiwiYXV0b1NlbGVjdCIsInJlZ2V4Q3JpdGVyaWEiLCJoYW5kbGVCdXR0b25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm9uQ2xpY2siLCJ0ZXh0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthResetPasswordCard.jsx\n"));

/***/ })

});