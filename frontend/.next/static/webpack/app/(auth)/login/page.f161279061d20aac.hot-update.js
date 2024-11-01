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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pin-input */ \"(app-pages-browser)/./node_modules/react-pin-input/dist/bundle.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pin_input__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst STAGE_CONTENT = {\n    email: {\n        cardTitle: \"Reset Password\",\n        buttonTitle: \"Send Verification Code\",\n        cardBody: \"No worries, We’ll send you reset instructions\",\n        cardFooter: \"Already have an account?\",\n        link: \"/login\"\n    },\n    code: {\n        cardTitle: \"Check Your Email\",\n        buttonTitle: \"Verify Code\",\n        cardBody: \"We sent a reset link to contact@gmail.com enter 4 digit code that mentioned in the email\",\n        cardFooter: \"Haven’t got the email yet? Resend Code\"\n    },\n    password: {\n        cardTitle: \"Set a New Password\",\n        buttonTitle: \"Confirm\",\n        cardBody: \"Create a new password. Ensure it differs from previous ones for security\",\n        cardFooter: \"\"\n    },\n    success: {\n        cardTitle: \"Password Reset Successful\",\n        buttonTitle: \"Return to Login\",\n        cardBody: \"Your password has been reset successfully. Please login with your new password\",\n        cardFooter: \"\",\n        link: \"/login\"\n    }\n};\nconst AuthResetPasswordCard = (param)=>{\n    let { onValidInput } = param;\n    _s();\n    const [stage, setStage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"email\");\n    const { cardTitle, buttonTitle, cardBody, cardFooter } = STAGE_CONTENT[stage];\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        code: \"\",\n        password: \"\",\n        confirmPassword: \"\"\n    });\n    const renderFormFields = (stage)=>{\n        switch(stage){\n            case \"email\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                    id: \"email\",\n                    type: \"email\",\n                    placeholder: \"Email\",\n                    name: \"email\",\n                    label: \"Email Address\",\n                    onValidInput: handleValidInput,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined);\n            case \"code\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_pin_input__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    length: 6,\n                    initialValue: \"\",\n                    type: \"numeric\",\n                    inputMode: \"number\",\n                    style: {\n                        padding: \"10px\"\n                    },\n                    inputStyle: {\n                        borderColor: \"red\"\n                    },\n                    inputFocusStyle: {\n                        borderColor: \"blue\"\n                    },\n                    onComplete: (e)=>console.log(e),\n                    autoSelect: true,\n                    regexCriteria: /^[ A-Za-z0-9_@./#&+-]*$/\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, undefined);\n            case \"password\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            id: \"password\",\n                            type: \"password\",\n                            placeholder: \"Password\",\n                            name: \"password\",\n                            label: \"Password\",\n                            onValidInput: handleValidInput,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            id: \"confirmPassword\",\n                            type: \"password\",\n                            placeholder: \"Confirm Password\",\n                            name: \"confirmPassword\",\n                            label: \"Confirm Password\",\n                            onValidInput: handleValidInput,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true);\n        }\n    };\n    const handleButtonClick = ()=>{\n        if (stage === \"email\") {\n            if (onValidInput) {}\n            setStage(\"code\");\n        } else if (stage === \"code\") {\n            setStage(\"password\");\n        } else if (stage === \"password\") {\n            setStage(\"success\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[60%] h-[60%] flex flex-col items-center gap-4 border-red-500 border-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"relative flex flex-col items-center justify-center gap-4 text-center text-[40px] text-black \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-12 h-12 rounded-full bg-zinc-400 \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative font-medium\",\n                        children: \"Welcome back\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center gap-6 text-center text-[20px] text-base mt-10 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[24px] font-bold\",\n                        children: cardTitle\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[16px] font-sans leading-[24px] text-gray-500\",\n                        children: cardBody\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    renderFormFields(stage),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                        onClick: handleButtonClick,\n                        text: buttonTitle,\n                        backgroundColor: \"bg-zinc-300\",\n                        textColor: \"text-white\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"text-[16px] [text-decoration:underline] font-medium  text-gray text-right mt-10 cursor-pointer  transition duration-300 ease-in-out hover:text-blue-500\",\n                children: cardFooter\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthResetPasswordCard, \"Fb2tuFFjmh879+N0Wti1sC+CWpo=\");\n_c = AuthResetPasswordCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthResetPasswordCard);\nvar _c;\n$RefreshReg$(_c, \"AuthResetPasswordCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aFJlc2V0UGFzc3dvcmRDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFDc0I7QUFDdkI7QUFDdkMsTUFBTUssZ0JBQWdCO0lBQ3BCQyxPQUFPO1FBQ0xDLFdBQVc7UUFDWEMsYUFBYTtRQUNiQyxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsTUFBTTtJQUNSO0lBQ0FDLE1BQU07UUFDSkwsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQ0U7UUFDRkMsWUFBWTtJQUNkO0lBQ0FHLFVBQVU7UUFDUk4sV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQ0U7UUFDRkMsWUFBWTtJQUNkO0lBQ0FJLFNBQVM7UUFDUFAsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQ0U7UUFDRkMsWUFBWTtRQUNaQyxNQUFNO0lBQ1I7QUFDRjtBQUVBLE1BQU1JLHdCQUF3QjtRQUFDLEVBQUVDLFlBQVksRUFBRTs7SUFDN0MsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLEVBQUVNLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRSxHQUFHTCxhQUFhLENBQUNZLE1BQU07SUFDN0UsTUFBTSxDQUFDRSxVQUFVQyxZQUFZLEdBQUduQiwrQ0FBUUEsQ0FBQztRQUN2Q0ssT0FBTztRQUNQTSxNQUFNO1FBQ05DLFVBQVU7UUFDVlEsaUJBQWlCO0lBQ25CO0lBQ0EsTUFBTUMsbUJBQW1CLENBQUNMO1FBQ3hCLE9BQVFBO1lBQ04sS0FBSztnQkFDSCxxQkFDRSw4REFBQ2YsMkRBQWFBO29CQUNacUIsSUFBRztvQkFDSEMsTUFBSztvQkFDTEMsYUFBWTtvQkFDWkMsTUFBSztvQkFDTEMsT0FBTTtvQkFDTlgsY0FBY1k7b0JBQ2RDLFFBQVE7Ozs7OztZQUdkLEtBQUs7Z0JBQ0gscUJBQ0UsOERBQUN6Qix3REFBUUE7b0JBQ1AwQixRQUFRO29CQUNSQyxjQUFhO29CQUNiUCxNQUFLO29CQUNMUSxXQUFVO29CQUNWQyxPQUFPO3dCQUFFQyxTQUFTO29CQUFPO29CQUN6QkMsWUFBWTt3QkFBRUMsYUFBYTtvQkFBTTtvQkFDakNDLGlCQUFpQjt3QkFBRUQsYUFBYTtvQkFBTztvQkFDdkNFLFlBQVksQ0FBQ0MsSUFBTUMsUUFBUUMsR0FBRyxDQUFDRjtvQkFDL0JHLFlBQVk7b0JBQ1pDLGVBQWU7Ozs7OztZQUdyQixLQUFLO2dCQUNILHFCQUNFOztzQ0FDRSw4REFBQ3pDLDJEQUFhQTs0QkFDWnFCLElBQUc7NEJBQ0hDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLE1BQUs7NEJBQ0xDLE9BQU07NEJBQ05YLGNBQWNZOzRCQUNkQyxRQUFROzs7Ozs7c0NBRVYsOERBQUMzQiwyREFBYUE7NEJBQ1pxQixJQUFHOzRCQUNIQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaQyxNQUFLOzRCQUNMQyxPQUFNOzRCQUNOWCxjQUFjWTs0QkFDZEMsUUFBUTs7Ozs7Ozs7UUFJbEI7SUFDRjtJQUdBLE1BQU1lLG9CQUFvQjtRQUN4QixJQUFJM0IsVUFBVSxTQUFTO1lBQ3JCLElBQUlELGNBQWMsQ0FDbEI7WUFDQUUsU0FBUztRQUNYLE9BQU8sSUFBSUQsVUFBVSxRQUFRO1lBQzNCQyxTQUFTO1FBQ1gsT0FBTyxJQUFJRCxVQUFVLFlBQVk7WUFDL0JDLFNBQVM7UUFDWDtJQUNGO0lBQ0EscUJBQ0UsOERBQUMyQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU9ELFdBQVU7O2tDQUNoQiw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQXVCOzs7Ozs7Ozs7Ozs7MEJBRXhDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUF5QnZDOzs7Ozs7a0NBQ3hDLDhEQUFDc0M7d0JBQUlDLFdBQVU7a0NBQ1pyQzs7Ozs7O29CQUVGYSxpQkFBaUJMO2tDQUNsQiw4REFBQ2Qsd0RBQVVBO3dCQUNUNkMsU0FBU0o7d0JBQ1RLLE1BQU16Qzt3QkFDTjBDLGlCQUFpQjt3QkFDakJDLFdBQVc7Ozs7Ozs7Ozs7OzswQkFHZiw4REFBQ0M7Z0JBQU9OLFdBQVU7MEJBQ2ZwQzs7Ozs7Ozs7Ozs7O0FBSVQ7R0FwR01LO0tBQUFBO0FBc0dOLCtEQUFlQSxxQkFBcUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9BdXRoUmVzZXRQYXNzd29yZENhcmQuanN4PzllMzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRoRm9ybUZpZWxkLCBBdXRoQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9hdXRoXCI7XHJcbmltcG9ydCBQaW5JbnB1dCBmcm9tIFwicmVhY3QtcGluLWlucHV0XCI7XHJcbmNvbnN0IFNUQUdFX0NPTlRFTlQgPSB7XHJcbiAgZW1haWw6IHtcclxuICAgIGNhcmRUaXRsZTogXCJSZXNldCBQYXNzd29yZFwiLFxyXG4gICAgYnV0dG9uVGl0bGU6IFwiU2VuZCBWZXJpZmljYXRpb24gQ29kZVwiLFxyXG4gICAgY2FyZEJvZHk6IFwiTm8gd29ycmllcywgV2XigJlsbCBzZW5kIHlvdSByZXNldCBpbnN0cnVjdGlvbnNcIixcclxuICAgIGNhcmRGb290ZXI6IFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XCIsXHJcbiAgICBsaW5rOiBcIi9sb2dpblwiLFxyXG4gIH0sXHJcbiAgY29kZToge1xyXG4gICAgY2FyZFRpdGxlOiBcIkNoZWNrIFlvdXIgRW1haWxcIixcclxuICAgIGJ1dHRvblRpdGxlOiBcIlZlcmlmeSBDb2RlXCIsXHJcbiAgICBjYXJkQm9keTpcclxuICAgICAgXCJXZSBzZW50IGEgcmVzZXQgbGluayB0byBjb250YWN0QGdtYWlsLmNvbSBlbnRlciA0IGRpZ2l0IGNvZGUgdGhhdCBtZW50aW9uZWQgaW4gdGhlIGVtYWlsXCIsXHJcbiAgICBjYXJkRm9vdGVyOiBcIkhhdmVu4oCZdCBnb3QgdGhlIGVtYWlsIHlldD8gUmVzZW5kIENvZGVcIixcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICBjYXJkVGl0bGU6IFwiU2V0IGEgTmV3IFBhc3N3b3JkXCIsXHJcbiAgICBidXR0b25UaXRsZTogXCJDb25maXJtXCIsXHJcbiAgICBjYXJkQm9keTpcclxuICAgICAgXCJDcmVhdGUgYSBuZXcgcGFzc3dvcmQuIEVuc3VyZSBpdCBkaWZmZXJzIGZyb20gcHJldmlvdXMgb25lcyBmb3Igc2VjdXJpdHlcIixcclxuICAgIGNhcmRGb290ZXI6IFwiXCIsXHJcbiAgfSxcclxuICBzdWNjZXNzOiB7XHJcbiAgICBjYXJkVGl0bGU6IFwiUGFzc3dvcmQgUmVzZXQgU3VjY2Vzc2Z1bFwiLFxyXG4gICAgYnV0dG9uVGl0bGU6IFwiUmV0dXJuIHRvIExvZ2luXCIsXHJcbiAgICBjYXJkQm9keTpcclxuICAgICAgXCJZb3VyIHBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0IHN1Y2Nlc3NmdWxseS4gUGxlYXNlIGxvZ2luIHdpdGggeW91ciBuZXcgcGFzc3dvcmRcIixcclxuICAgIGNhcmRGb290ZXI6IFwiXCIsXHJcbiAgICBsaW5rOiBcIi9sb2dpblwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBBdXRoUmVzZXRQYXNzd29yZENhcmQgPSAoeyBvblZhbGlkSW5wdXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGFnZSwgc2V0U3RhZ2VdID0gdXNlU3RhdGUoXCJlbWFpbFwiKTtcclxuICBjb25zdCB7IGNhcmRUaXRsZSwgYnV0dG9uVGl0bGUsIGNhcmRCb2R5LCBjYXJkRm9vdGVyIH0gPSBTVEFHRV9DT05URU5UW3N0YWdlXTtcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgY29kZTogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHJlbmRlckZvcm1GaWVsZHMgPSAoc3RhZ2UpID0+IHtcclxuICAgIHN3aXRjaCAoc3RhZ2UpIHtcclxuICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxBdXRoRm9ybUZpZWxkXHJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgb25WYWxpZElucHV0PXtoYW5kbGVWYWxpZElucHV0fVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlIFwiY29kZVwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8UGluSW5wdXRcclxuICAgICAgICAgICAgbGVuZ3RoPXs2fVxyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJcIlxyXG4gICAgICAgICAgICB0eXBlPVwibnVtZXJpY1wiXHJcbiAgICAgICAgICAgIGlucHV0TW9kZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIGlucHV0U3R5bGU9e3sgYm9yZGVyQ29sb3I6IFwicmVkXCIgfX0gLy8gQ2hhbmdlIHRoZSBib3JkZXIgY29sb3JcclxuICAgICAgICAgICAgaW5wdXRGb2N1c1N0eWxlPXt7IGJvcmRlckNvbG9yOiBcImJsdWVcIiB9fSAvLyBDaGFuZ2UgdGhlIGJvcmRlciBjb2xvciB3aGVuIGZvY3VzZWRcclxuICAgICAgICAgICAgb25Db21wbGV0ZT17KGUpID0+IGNvbnNvbGUubG9nKGUpfVxyXG4gICAgICAgICAgICBhdXRvU2VsZWN0PXt0cnVlfVxyXG4gICAgICAgICAgICByZWdleENyaXRlcmlhPXsvXlsgQS1aYS16MC05X0AuLyMmKy1dKiQvfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlIFwicGFzc3dvcmRcIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEF1dGhGb3JtRmllbGRcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgb25WYWxpZElucHV0PXtoYW5kbGVWYWxpZElucHV0fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxBdXRoRm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkNvbmZpcm0gUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG9uVmFsaWRJbnB1dD17aGFuZGxlVmFsaWRJbnB1dH1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuIFxyXG4gIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHN0YWdlID09PSBcImVtYWlsXCIpIHtcclxuICAgICAgaWYgKG9uVmFsaWRJbnB1dCkge1xyXG4gICAgICB9XHJcbiAgICAgIHNldFN0YWdlKFwiY29kZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhZ2UgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgIHNldFN0YWdlKFwicGFzc3dvcmRcIik7XHJcbiAgICB9IGVsc2UgaWYgKHN0YWdlID09PSBcInBhc3N3b3JkXCIpIHtcclxuICAgICAgc2V0U3RhZ2UoXCJzdWNjZXNzXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNjAlXSBoLVs2MCVdIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00IGJvcmRlci1yZWQtNTAwIGJvcmRlci0yXCI+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQgdGV4dC1jZW50ZXIgdGV4dC1bNDBweF0gdGV4dC1ibGFjayBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMTIgaC0xMiByb3VuZGVkLWZ1bGwgYmctemluYy00MDAgXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmb250LW1lZGl1bVwiPldlbGNvbWUgYmFjazwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNiB0ZXh0LWNlbnRlciB0ZXh0LVsyMHB4XSB0ZXh0LWJhc2UgbXQtMTAgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSBmb250LWJvbGRcIj57Y2FyZFRpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gZm9udC1zYW5zIGxlYWRpbmctWzI0cHhdIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgIHtjYXJkQm9keX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7cmVuZGVyRm9ybUZpZWxkcyhzdGFnZSl9XHJcbiAgICAgICAgPEF1dGhCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgdGV4dD17YnV0dG9uVGl0bGV9XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e1wiYmctemluYy0zMDBcIn1cclxuICAgICAgICAgIHRleHRDb2xvcj17XCJ0ZXh0LXdoaXRlXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gW3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmVdIGZvbnQtbWVkaXVtICB0ZXh0LWdyYXkgdGV4dC1yaWdodCBtdC0xMCBjdXJzb3ItcG9pbnRlciAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6dGV4dC1ibHVlLTUwMFwiPlxyXG4gICAgICAgIHtjYXJkRm9vdGVyfVxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoUmVzZXRQYXNzd29yZENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXV0aEZvcm1GaWVsZCIsIkF1dGhCdXR0b24iLCJQaW5JbnB1dCIsIlNUQUdFX0NPTlRFTlQiLCJlbWFpbCIsImNhcmRUaXRsZSIsImJ1dHRvblRpdGxlIiwiY2FyZEJvZHkiLCJjYXJkRm9vdGVyIiwibGluayIsImNvZGUiLCJwYXNzd29yZCIsInN1Y2Nlc3MiLCJBdXRoUmVzZXRQYXNzd29yZENhcmQiLCJvblZhbGlkSW5wdXQiLCJzdGFnZSIsInNldFN0YWdlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImNvbmZpcm1QYXNzd29yZCIsInJlbmRlckZvcm1GaWVsZHMiLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJsYWJlbCIsImhhbmRsZVZhbGlkSW5wdXQiLCJyZXF1aXJlZCIsImxlbmd0aCIsImluaXRpYWxWYWx1ZSIsImlucHV0TW9kZSIsInN0eWxlIiwicGFkZGluZyIsImlucHV0U3R5bGUiLCJib3JkZXJDb2xvciIsImlucHV0Rm9jdXNTdHlsZSIsIm9uQ29tcGxldGUiLCJlIiwiY29uc29sZSIsImxvZyIsImF1dG9TZWxlY3QiLCJyZWdleENyaXRlcmlhIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJvbkNsaWNrIiwidGV4dCIsImJhY2tncm91bmRDb2xvciIsInRleHRDb2xvciIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthResetPasswordCard.jsx\n"));

/***/ })

});