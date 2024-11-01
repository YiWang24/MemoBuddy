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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pin-input */ \"(app-pages-browser)/./node_modules/react-pin-input/dist/bundle.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pin_input__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst STAGE_CONTENT = {\n    email: {\n        cardTitle: \"Reset Password\",\n        buttonTitle: \"Send Verification Code\",\n        cardBody: \"No worries, We’ll send you reset instructions\",\n        cardFooter: \"Already have an account?\",\n        link: \"/login\"\n    },\n    code: {\n        cardTitle: \"Check Your Email\",\n        buttonTitle: \"Verify Code\",\n        cardBody: \"We sent a reset link to contact@gmail.com enter 4 digit code that mentioned in the email\",\n        cardFooter: \"Haven’t got the email yet? Resend Code\"\n    },\n    password: {\n        cardTitle: \"Set a New Password\",\n        buttonTitle: \"Confirm\",\n        cardBody: \"Create a new password. Ensure it differs from previous ones for security\",\n        cardFooter: \"\"\n    },\n    success: {\n        cardTitle: \"Password Reset Successful\",\n        buttonTitle: \"Return to Login\",\n        cardBody: \"Your password has been reset successfully. Please login with your new password\",\n        cardFooter: \"\",\n        link: \"/login\"\n    }\n};\nconst AuthResetPasswordCard = (param)=>{\n    let { onValidInput } = param;\n    _s();\n    const [stage, setStage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"email\");\n    const { cardTitle, buttonTitle, cardBody, cardFooter } = STAGE_CONTENT[stage];\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        code: \"\",\n        password: \"\",\n        confirmPassword: \"\"\n    });\n    const handleValidInput = (id, value)=>{\n        setFormData((prev)=>{\n            if (value === null) {\n                return {\n                    ...prev,\n                    [id]: \"\"\n                };\n            } else {\n                return {\n                    ...prev,\n                    [id]: value\n                };\n            }\n        });\n        console.log(form);\n    };\n    const renderFormFields = (stage)=>{\n        switch(stage){\n            case \"email\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                    id: \"email\",\n                    type: \"email\",\n                    placeholder: \"Email\",\n                    name: \"email\",\n                    label: \"Email Address\",\n                    onValidInput: handleValidInput,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, undefined);\n            case \"code\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_pin_input__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    length: 6,\n                    initialValue: \"\",\n                    type: \"numeric\",\n                    inputMode: \"number\",\n                    style: {\n                        padding: \"10px\"\n                    },\n                    inputStyle: {\n                        borderColor: \"red\"\n                    },\n                    inputFocusStyle: {\n                        borderColor: \"blue\"\n                    },\n                    onComplete: (e)=>console.log(e),\n                    autoSelect: true,\n                    regexCriteria: /^[ A-Za-z0-9_@./#&+-]*$/\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, undefined);\n            case \"password\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            id: \"password\",\n                            type: \"password\",\n                            placeholder: \"Password\",\n                            name: \"password\",\n                            label: \"Password\",\n                            onValidInput: handleValidInput,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            id: \"confirmPassword\",\n                            type: \"password\",\n                            placeholder: \"Confirm Password\",\n                            name: \"confirmPassword\",\n                            label: \"Confirm Password\",\n                            onValidInput: handleValidInput,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true);\n        }\n    };\n    const handleButtonClick = ()=>{\n        if (stage === \"email\") {\n            setStage(\"code\");\n        } else if (stage === \"code\") {\n            setStage(\"password\");\n        } else if (stage === \"password\") {\n            setStage(\"success\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[60%] h-[60%] flex flex-col items-center gap-4 border-red-500 border-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"relative flex flex-col items-center justify-center gap-4 text-center text-[40px] text-black \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-12 h-12 rounded-full bg-zinc-400 \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative font-medium\",\n                        children: \"Welcome back\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center gap-6 text-center text-[20px] text-base mt-10 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[24px] font-bold\",\n                        children: cardTitle\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[16px] font-sans leading-[24px] text-gray-500\",\n                        children: cardBody\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, undefined),\n                    renderFormFields(stage),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                        onClick: handleButtonClick,\n                        text: buttonTitle,\n                        backgroundColor: \"bg-zinc-300\",\n                        textColor: \"text-white\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"text-[16px] [text-decoration:underline] font-medium  text-gray text-right mt-10 cursor-pointer  transition duration-300 ease-in-out hover:text-blue-500\",\n                children: cardFooter\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n        lineNumber: 122,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthResetPasswordCard, \"Fb2tuFFjmh879+N0Wti1sC+CWpo=\");\n_c = AuthResetPasswordCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthResetPasswordCard);\nvar _c;\n$RefreshReg$(_c, \"AuthResetPasswordCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aFJlc2V0UGFzc3dvcmRDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFDc0I7QUFDdkI7QUFDdkMsTUFBTUssZ0JBQWdCO0lBQ3BCQyxPQUFPO1FBQ0xDLFdBQVc7UUFDWEMsYUFBYTtRQUNiQyxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsTUFBTTtJQUNSO0lBQ0FDLE1BQU07UUFDSkwsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQ0U7UUFDRkMsWUFBWTtJQUNkO0lBQ0FHLFVBQVU7UUFDUk4sV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQ0U7UUFDRkMsWUFBWTtJQUNkO0lBQ0FJLFNBQVM7UUFDUFAsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQ0U7UUFDRkMsWUFBWTtRQUNaQyxNQUFNO0lBQ1I7QUFDRjtBQUVBLE1BQU1JLHdCQUF3QjtRQUFDLEVBQUVDLFlBQVksRUFBRTs7SUFDN0MsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLEVBQUVNLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRSxHQUFHTCxhQUFhLENBQUNZLE1BQU07SUFDN0UsTUFBTSxDQUFDRSxVQUFVQyxZQUFZLEdBQUduQiwrQ0FBUUEsQ0FBQztRQUN2Q0ssT0FBTztRQUNQTSxNQUFNO1FBQ05DLFVBQVU7UUFDVlEsaUJBQWlCO0lBQ25CO0lBQ0EsTUFBTUMsbUJBQW1CLENBQUNDLElBQUlDO1FBQzVCSixZQUFZLENBQUNLO1lBQ1gsSUFBSUQsVUFBVSxNQUFNO2dCQUNsQixPQUFPO29CQUFFLEdBQUdDLElBQUk7b0JBQUUsQ0FBQ0YsR0FBRyxFQUFFO2dCQUFHO1lBQzdCLE9BQU87Z0JBQ0wsT0FBTztvQkFBRSxHQUFHRSxJQUFJO29CQUFFLENBQUNGLEdBQUcsRUFBRUM7Z0JBQU07WUFDaEM7UUFDRjtRQUNBRSxRQUFRQyxHQUFHLENBQUNDO0lBQ2Q7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ1o7UUFDeEIsT0FBUUE7WUFDTixLQUFLO2dCQUNILHFCQUNFLDhEQUFDZiwyREFBYUE7b0JBQ1pxQixJQUFHO29CQUNITyxNQUFLO29CQUNMQyxhQUFZO29CQUNaQyxNQUFLO29CQUNMQyxPQUFNO29CQUNOakIsY0FBY007b0JBQ2RZLFFBQVE7Ozs7OztZQUdkLEtBQUs7Z0JBQ0gscUJBQ0UsOERBQUM5Qix3REFBUUE7b0JBQ1ArQixRQUFRO29CQUNSQyxjQUFhO29CQUNiTixNQUFLO29CQUNMTyxXQUFVO29CQUNWQyxPQUFPO3dCQUFFQyxTQUFTO29CQUFPO29CQUN6QkMsWUFBWTt3QkFBRUMsYUFBYTtvQkFBTTtvQkFDakNDLGlCQUFpQjt3QkFBRUQsYUFBYTtvQkFBTztvQkFDdkNFLFlBQVksQ0FBQ0MsSUFBTWxCLFFBQVFDLEdBQUcsQ0FBQ2lCO29CQUMvQkMsWUFBWTtvQkFDWkMsZUFBZTs7Ozs7O1lBR3JCLEtBQUs7Z0JBQ0gscUJBQ0U7O3NDQUNFLDhEQUFDNUMsMkRBQWFBOzRCQUNacUIsSUFBRzs0QkFDSE8sTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsTUFBSzs0QkFDTEMsT0FBTTs0QkFDTmpCLGNBQWNNOzRCQUNkWSxRQUFROzs7Ozs7c0NBRVYsOERBQUNoQywyREFBYUE7NEJBQ1pxQixJQUFHOzRCQUNITyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaQyxNQUFLOzRCQUNMQyxPQUFNOzRCQUNOakIsY0FBY007NEJBQ2RZLFFBQVE7Ozs7Ozs7O1FBSWxCO0lBQ0Y7SUFFQSxNQUFNYSxvQkFBb0I7UUFDeEIsSUFBSTlCLFVBQVUsU0FBUztZQUNyQkMsU0FBUztRQUNYLE9BQU8sSUFBSUQsVUFBVSxRQUFRO1lBQzNCQyxTQUFTO1FBQ1gsT0FBTyxJQUFJRCxVQUFVLFlBQVk7WUFDL0JDLFNBQVM7UUFDWDtJQUNGO0lBQ0EscUJBQ0UsOERBQUM4QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU9ELFdBQVU7O2tDQUNoQiw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQXVCOzs7Ozs7Ozs7Ozs7MEJBRXhDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUF5QjFDOzs7Ozs7a0NBQ3hDLDhEQUFDeUM7d0JBQUlDLFdBQVU7a0NBQ1p4Qzs7Ozs7O29CQUVGb0IsaUJBQWlCWjtrQ0FDbEIsOERBQUNkLHdEQUFVQTt3QkFDVGdELFNBQVNKO3dCQUNUSyxNQUFNNUM7d0JBQ042QyxpQkFBaUI7d0JBQ2pCQyxXQUFXOzs7Ozs7Ozs7Ozs7MEJBR2YsOERBQUNDO2dCQUFPTixXQUFVOzBCQUNmdkM7Ozs7Ozs7Ozs7OztBQUlUO0dBNUdNSztLQUFBQTtBQThHTiwrREFBZUEscUJBQXFCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aFJlc2V0UGFzc3dvcmRDYXJkLmpzeD85ZTMxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aEZvcm1GaWVsZCwgQXV0aEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvYXV0aFwiO1xyXG5pbXBvcnQgUGluSW5wdXQgZnJvbSBcInJlYWN0LXBpbi1pbnB1dFwiO1xyXG5jb25zdCBTVEFHRV9DT05URU5UID0ge1xyXG4gIGVtYWlsOiB7XHJcbiAgICBjYXJkVGl0bGU6IFwiUmVzZXQgUGFzc3dvcmRcIixcclxuICAgIGJ1dHRvblRpdGxlOiBcIlNlbmQgVmVyaWZpY2F0aW9uIENvZGVcIixcclxuICAgIGNhcmRCb2R5OiBcIk5vIHdvcnJpZXMsIFdl4oCZbGwgc2VuZCB5b3UgcmVzZXQgaW5zdHJ1Y3Rpb25zXCIsXHJcbiAgICBjYXJkRm9vdGVyOiBcIkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1wiLFxyXG4gICAgbGluazogXCIvbG9naW5cIixcclxuICB9LFxyXG4gIGNvZGU6IHtcclxuICAgIGNhcmRUaXRsZTogXCJDaGVjayBZb3VyIEVtYWlsXCIsXHJcbiAgICBidXR0b25UaXRsZTogXCJWZXJpZnkgQ29kZVwiLFxyXG4gICAgY2FyZEJvZHk6XHJcbiAgICAgIFwiV2Ugc2VudCBhIHJlc2V0IGxpbmsgdG8gY29udGFjdEBnbWFpbC5jb20gZW50ZXIgNCBkaWdpdCBjb2RlIHRoYXQgbWVudGlvbmVkIGluIHRoZSBlbWFpbFwiLFxyXG4gICAgY2FyZEZvb3RlcjogXCJIYXZlbuKAmXQgZ290IHRoZSBlbWFpbCB5ZXQ/IFJlc2VuZCBDb2RlXCIsXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgY2FyZFRpdGxlOiBcIlNldCBhIE5ldyBQYXNzd29yZFwiLFxyXG4gICAgYnV0dG9uVGl0bGU6IFwiQ29uZmlybVwiLFxyXG4gICAgY2FyZEJvZHk6XHJcbiAgICAgIFwiQ3JlYXRlIGEgbmV3IHBhc3N3b3JkLiBFbnN1cmUgaXQgZGlmZmVycyBmcm9tIHByZXZpb3VzIG9uZXMgZm9yIHNlY3VyaXR5XCIsXHJcbiAgICBjYXJkRm9vdGVyOiBcIlwiLFxyXG4gIH0sXHJcbiAgc3VjY2Vzczoge1xyXG4gICAgY2FyZFRpdGxlOiBcIlBhc3N3b3JkIFJlc2V0IFN1Y2Nlc3NmdWxcIixcclxuICAgIGJ1dHRvblRpdGxlOiBcIlJldHVybiB0byBMb2dpblwiLFxyXG4gICAgY2FyZEJvZHk6XHJcbiAgICAgIFwiWW91ciBwYXNzd29yZCBoYXMgYmVlbiByZXNldCBzdWNjZXNzZnVsbHkuIFBsZWFzZSBsb2dpbiB3aXRoIHlvdXIgbmV3IHBhc3N3b3JkXCIsXHJcbiAgICBjYXJkRm9vdGVyOiBcIlwiLFxyXG4gICAgbGluazogXCIvbG9naW5cIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgQXV0aFJlc2V0UGFzc3dvcmRDYXJkID0gKHsgb25WYWxpZElucHV0IH0pID0+IHtcclxuICBjb25zdCBbc3RhZ2UsIHNldFN0YWdlXSA9IHVzZVN0YXRlKFwiZW1haWxcIik7XHJcbiAgY29uc3QgeyBjYXJkVGl0bGUsIGJ1dHRvblRpdGxlLCBjYXJkQm9keSwgY2FyZEZvb3RlciB9ID0gU1RBR0VfQ09OVEVOVFtzdGFnZV07XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIGNvZGU6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBoYW5kbGVWYWxpZElucHV0ID0gKGlkLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0Rm9ybURhdGEoKHByZXYpID0+IHtcclxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgW2lkXTogXCJcIiB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnByZXYsIFtpZF06IHZhbHVlIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coZm9ybSlcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJGb3JtRmllbGRzID0gKHN0YWdlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHN0YWdlKSB7XHJcbiAgICAgIGNhc2UgXCJlbWFpbFwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8QXV0aEZvcm1GaWVsZFxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgIG9uVmFsaWRJbnB1dD17aGFuZGxlVmFsaWRJbnB1dH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSBcImNvZGVcIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFBpbklucHV0XHJcbiAgICAgICAgICAgIGxlbmd0aD17Nn1cclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgdHlwZT1cIm51bWVyaWNcIlxyXG4gICAgICAgICAgICBpbnB1dE1vZGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBpbnB1dFN0eWxlPXt7IGJvcmRlckNvbG9yOiBcInJlZFwiIH19IC8vIENoYW5nZSB0aGUgYm9yZGVyIGNvbG9yXHJcbiAgICAgICAgICAgIGlucHV0Rm9jdXNTdHlsZT17eyBib3JkZXJDb2xvcjogXCJibHVlXCIgfX0gLy8gQ2hhbmdlIHRoZSBib3JkZXIgY29sb3Igd2hlbiBmb2N1c2VkXHJcbiAgICAgICAgICAgIG9uQ29tcGxldGU9eyhlKSA9PiBjb25zb2xlLmxvZyhlKX1cclxuICAgICAgICAgICAgYXV0b1NlbGVjdD17dHJ1ZX1cclxuICAgICAgICAgICAgcmVnZXhDcml0ZXJpYT17L15bIEEtWmEtejAtOV9ALi8jJistXSokL31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSBcInBhc3N3b3JkXCI6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBdXRoRm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG9uVmFsaWRJbnB1dD17aGFuZGxlVmFsaWRJbnB1dH1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QXV0aEZvcm1GaWVsZFxyXG4gICAgICAgICAgICAgIGlkPVwiY29uZmlybVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBvblZhbGlkSW5wdXQ9e2hhbmRsZVZhbGlkSW5wdXR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoc3RhZ2UgPT09IFwiZW1haWxcIikge1xyXG4gICAgICBzZXRTdGFnZShcImNvZGVcIik7XHJcbiAgICB9IGVsc2UgaWYgKHN0YWdlID09PSBcImNvZGVcIikge1xyXG4gICAgICBzZXRTdGFnZShcInBhc3N3b3JkXCIpO1xyXG4gICAgfSBlbHNlIGlmIChzdGFnZSA9PT0gXCJwYXNzd29yZFwiKSB7XHJcbiAgICAgIHNldFN0YWdlKFwic3VjY2Vzc1wiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzYwJV0gaC1bNjAlXSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNCBib3JkZXItcmVkLTUwMCBib3JkZXItMlwiPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IHRleHQtY2VudGVyIHRleHQtWzQwcHhdIHRleHQtYmxhY2sgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGJnLXppbmMtNDAwIFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZm9udC1tZWRpdW1cIj5XZWxjb21lIGJhY2s8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTYgdGV4dC1jZW50ZXIgdGV4dC1bMjBweF0gdGV4dC1iYXNlIG10LTEwIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gZm9udC1ib2xkXCI+e2NhcmRUaXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzE2cHhdIGZvbnQtc2FucyBsZWFkaW5nLVsyNHB4XSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICB7Y2FyZEJvZHl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3JlbmRlckZvcm1GaWVsZHMoc3RhZ2UpfVxyXG4gICAgICAgIDxBdXRoQnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja31cclxuICAgICAgICAgIHRleHQ9e2J1dHRvblRpdGxlfVxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtcImJnLXppbmMtMzAwXCJ9XHJcbiAgICAgICAgICB0ZXh0Q29sb3I9e1widGV4dC13aGl0ZVwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInRleHQtWzE2cHhdIFt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lXSBmb250LW1lZGl1bSAgdGV4dC1ncmF5IHRleHQtcmlnaHQgbXQtMTAgY3Vyc29yLXBvaW50ZXIgIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOnRleHQtYmx1ZS01MDBcIj5cclxuICAgICAgICB7Y2FyZEZvb3Rlcn1cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aFJlc2V0UGFzc3dvcmRDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkF1dGhGb3JtRmllbGQiLCJBdXRoQnV0dG9uIiwiUGluSW5wdXQiLCJTVEFHRV9DT05URU5UIiwiZW1haWwiLCJjYXJkVGl0bGUiLCJidXR0b25UaXRsZSIsImNhcmRCb2R5IiwiY2FyZEZvb3RlciIsImxpbmsiLCJjb2RlIiwicGFzc3dvcmQiLCJzdWNjZXNzIiwiQXV0aFJlc2V0UGFzc3dvcmRDYXJkIiwib25WYWxpZElucHV0Iiwic3RhZ2UiLCJzZXRTdGFnZSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJjb25maXJtUGFzc3dvcmQiLCJoYW5kbGVWYWxpZElucHV0IiwiaWQiLCJ2YWx1ZSIsInByZXYiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsInJlbmRlckZvcm1GaWVsZHMiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwibGFiZWwiLCJyZXF1aXJlZCIsImxlbmd0aCIsImluaXRpYWxWYWx1ZSIsImlucHV0TW9kZSIsInN0eWxlIiwicGFkZGluZyIsImlucHV0U3R5bGUiLCJib3JkZXJDb2xvciIsImlucHV0Rm9jdXNTdHlsZSIsIm9uQ29tcGxldGUiLCJlIiwiYXV0b1NlbGVjdCIsInJlZ2V4Q3JpdGVyaWEiLCJoYW5kbGVCdXR0b25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm9uQ2xpY2siLCJ0ZXh0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthResetPasswordCard.jsx\n"));

/***/ })

});