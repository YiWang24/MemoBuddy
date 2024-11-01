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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pin-input */ \"(app-pages-browser)/./node_modules/react-pin-input/dist/bundle.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pin_input__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst STAGE_CONTENT = {\n    email: {\n        cardTitle: \"Reset Password\",\n        buttonTitle: \"Send Verification Code\",\n        cardBody: \"No worries, We’ll send you reset instructions\",\n        cardFooter: \"Already have an account?\",\n        link: \"/login\"\n    },\n    code: {\n        cardTitle: \"Check Your Email\",\n        buttonTitle: \"Verify Code\",\n        cardBody: \"We sent a reset link to contact@gmail.com enter 4 digit code that mentioned in the email\",\n        cardFooter: \"Haven’t got the email yet? Resend Code\"\n    },\n    password: {\n        cardTitle: \"Set a New Password\",\n        buttonTitle: \"Confirm\",\n        cardBody: \"Create a new password. Ensure it differs from previous ones for security\",\n        cardFooter: \"\"\n    },\n    success: {\n        cardTitle: \"Password Reset Successful\",\n        buttonTitle: \"Return to Login\",\n        cardBody: \"Your password has been reset successfully. Please login with your new password\",\n        cardFooter: \"\",\n        link: \"/login\"\n    }\n};\nconst AuthResetPasswordCard = (param)=>{\n    let { onValidInput } = param;\n    _s();\n    const [stage, setStage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"email\");\n    const { cardTitle, buttonTitle, cardBody, cardFooter } = STAGE_CONTENT[stage];\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        code: \"\",\n        password: \"\",\n        confirmPassword: \"\"\n    });\n    const handleValidInput = (id, value)=>{\n        setFormData((prev)=>{\n            if (value === null) {\n                return {\n                    ...prev,\n                    [id]: \"\"\n                };\n            } else {\n                return {\n                    ...prev,\n                    [id]: value\n                };\n            }\n        });\n        console.log(formData);\n    };\n    const renderFormFields = (stage)=>{\n        switch(stage){\n            case \"email\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                    id: \"email\",\n                    type: \"email\",\n                    placeholder: \"Email\",\n                    name: \"email\",\n                    label: \"Email Address\",\n                    onValidInput: handleValidInput,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, undefined);\n            case \"code\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_pin_input__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    length: 6,\n                    initialValue: \"\",\n                    type: \"numeric\",\n                    inputMode: \"number\",\n                    style: {\n                        padding: \"10px\"\n                    },\n                    inputStyle: {\n                        borderColor: \"red\"\n                    },\n                    inputFocusStyle: {\n                        borderColor: \"blue\"\n                    },\n                    onComplete: (e)=>console.log(e),\n                    autoSelect: true,\n                    regexCriteria: /^[ A-Za-z0-9_@./#&+-]*$/\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, undefined);\n            case \"password\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            id: \"password\",\n                            type: \"password\",\n                            placeholder: \"Password\",\n                            name: \"password\",\n                            label: \"Password\",\n                            onValidInput: handleValidInput,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            id: \"confirmPassword\",\n                            type: \"password\",\n                            placeholder: \"Confirm Password\",\n                            name: \"confirmPassword\",\n                            label: \"Confirm Password\",\n                            onValidInput: handleValidInput,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true);\n        }\n    };\n    const handleButtonClick = ()=>{\n        if (stage === \"email\") {\n            if (formData.email === \"\") {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill correct email address\");\n            }\n            setStage(\"code\");\n        } else if (stage === \"code\") {\n            setStage(\"password\");\n        } else if (stage === \"password\") {\n            setStage(\"success\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[60%] h-[60%] flex flex-col items-center gap-4 border-red-500 border-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"relative flex flex-col items-center justify-center gap-4 text-center text-[40px] text-black \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-12 h-12 rounded-full bg-zinc-400 \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative font-medium\",\n                        children: \"Welcome back\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center gap-6 text-center text-[20px] text-base mt-10 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[24px] font-bold\",\n                        children: cardTitle\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[16px] font-sans leading-[24px] text-gray-500\",\n                        children: cardBody\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, undefined),\n                    renderFormFields(stage),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                        onClick: handleButtonClick,\n                        text: buttonTitle,\n                        backgroundColor: \"bg-zinc-300\",\n                        textColor: \"text-white\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 137,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"text-[16px] [text-decoration:underline] font-medium  text-gray text-right mt-10 cursor-pointer  transition duration-300 ease-in-out hover:text-blue-500\",\n                children: cardFooter\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthResetPasswordCard, \"Fb2tuFFjmh879+N0Wti1sC+CWpo=\");\n_c = AuthResetPasswordCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthResetPasswordCard);\nvar _c;\n$RefreshReg$(_c, \"AuthResetPasswordCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aFJlc2V0UGFzc3dvcmRDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3dDO0FBQ3NCO0FBQ3ZCO0FBQ1I7QUFDL0IsTUFBTU0sZ0JBQWdCO0lBQ3BCQyxPQUFPO1FBQ0xDLFdBQVc7UUFDWEMsYUFBYTtRQUNiQyxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsTUFBTTtJQUNSO0lBQ0FDLE1BQU07UUFDSkwsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQ0U7UUFDRkMsWUFBWTtJQUNkO0lBQ0FHLFVBQVU7UUFDUk4sV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQ0U7UUFDRkMsWUFBWTtJQUNkO0lBQ0FJLFNBQVM7UUFDUFAsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQ0U7UUFDRkMsWUFBWTtRQUNaQyxNQUFNO0lBQ1I7QUFDRjtBQUVBLE1BQU1JLHdCQUF3QjtRQUFDLEVBQUVDLFlBQVksRUFBRTs7SUFDN0MsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLEVBQUVPLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRSxHQUFHTCxhQUFhLENBQUNZLE1BQU07SUFDN0UsTUFBTSxDQUFDRSxVQUFVQyxZQUFZLEdBQUdwQiwrQ0FBUUEsQ0FBQztRQUN2Q00sT0FBTztRQUNQTSxNQUFNO1FBQ05DLFVBQVU7UUFDVlEsaUJBQWlCO0lBQ25CO0lBQ0EsTUFBTUMsbUJBQW1CLENBQUNDLElBQUlDO1FBQzVCSixZQUFZLENBQUNLO1lBQ1gsSUFBSUQsVUFBVSxNQUFNO2dCQUNsQixPQUFPO29CQUFFLEdBQUdDLElBQUk7b0JBQUUsQ0FBQ0YsR0FBRyxFQUFFO2dCQUFHO1lBQzdCLE9BQU87Z0JBQ0wsT0FBTztvQkFBRSxHQUFHRSxJQUFJO29CQUFFLENBQUNGLEdBQUcsRUFBRUM7Z0JBQU07WUFDaEM7UUFDRjtRQUNBRSxRQUFRQyxHQUFHLENBQUNSO0lBQ2Q7SUFFQSxNQUFNUyxtQkFBbUIsQ0FBQ1g7UUFDeEIsT0FBUUE7WUFDTixLQUFLO2dCQUNILHFCQUNFLDhEQUFDaEIsMkRBQWFBO29CQUNac0IsSUFBRztvQkFDSE0sTUFBSztvQkFDTEMsYUFBWTtvQkFDWkMsTUFBSztvQkFDTEMsT0FBTTtvQkFDTmhCLGNBQWNNO29CQUNkVyxRQUFROzs7Ozs7WUFHZCxLQUFLO2dCQUNILHFCQUNFLDhEQUFDOUIsd0RBQVFBO29CQUNQK0IsUUFBUTtvQkFDUkMsY0FBYTtvQkFDYk4sTUFBSztvQkFDTE8sV0FBVTtvQkFDVkMsT0FBTzt3QkFBRUMsU0FBUztvQkFBTztvQkFDekJDLFlBQVk7d0JBQUVDLGFBQWE7b0JBQU07b0JBQ2pDQyxpQkFBaUI7d0JBQUVELGFBQWE7b0JBQU87b0JBQ3ZDRSxZQUFZLENBQUNDLElBQU1qQixRQUFRQyxHQUFHLENBQUNnQjtvQkFDL0JDLFlBQVk7b0JBQ1pDLGVBQWU7Ozs7OztZQUdyQixLQUFLO2dCQUNILHFCQUNFOztzQ0FDRSw4REFBQzVDLDJEQUFhQTs0QkFDWnNCLElBQUc7NEJBQ0hNLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLE1BQUs7NEJBQ0xDLE9BQU07NEJBQ05oQixjQUFjTTs0QkFDZFcsUUFBUTs7Ozs7O3NDQUVWLDhEQUFDaEMsMkRBQWFBOzRCQUNac0IsSUFBRzs0QkFDSE0sTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsTUFBSzs0QkFDTEMsT0FBTTs0QkFDTmhCLGNBQWNNOzRCQUNkVyxRQUFROzs7Ozs7OztRQUlsQjtJQUNGO0lBRUEsTUFBTWEsb0JBQW9CO1FBQ3hCLElBQUk3QixVQUFVLFNBQVM7WUFDckIsSUFBR0UsU0FBU2IsS0FBSyxLQUFLLElBQUc7Z0JBQ3ZCRiwyRUFBT0EsQ0FBQzJDLEtBQUssQ0FBQztZQUNsQjtZQUNFN0IsU0FBUztRQUNYLE9BQU8sSUFBSUQsVUFBVSxRQUFRO1lBQzNCQyxTQUFTO1FBQ1gsT0FBTyxJQUFJRCxVQUFVLFlBQVk7WUFDL0JDLFNBQVM7UUFDWDtJQUNGO0lBQ0EscUJBQ0UsOERBQUM4QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU9ELFdBQVU7O2tDQUNoQiw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQXVCOzs7Ozs7Ozs7Ozs7MEJBRXhDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUF5QjFDOzs7Ozs7a0NBQ3hDLDhEQUFDeUM7d0JBQUlDLFdBQVU7a0NBQ1p4Qzs7Ozs7O29CQUVGbUIsaUJBQWlCWDtrQ0FDbEIsOERBQUNmLHdEQUFVQTt3QkFDVGlELFNBQVNMO3dCQUNUTSxNQUFNNUM7d0JBQ042QyxpQkFBaUI7d0JBQ2pCQyxXQUFXOzs7Ozs7Ozs7Ozs7MEJBR2YsOERBQUNDO2dCQUFPTixXQUFVOzBCQUNmdkM7Ozs7Ozs7Ozs7OztBQUlUO0dBL0dNSztLQUFBQTtBQWlITiwrREFBZUEscUJBQXFCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aFJlc2V0UGFzc3dvcmRDYXJkLmpzeD85ZTMxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aEZvcm1GaWVsZCwgQXV0aEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvYXV0aFwiO1xyXG5pbXBvcnQgUGluSW5wdXQgZnJvbSBcInJlYWN0LXBpbi1pbnB1dFwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuY29uc3QgU1RBR0VfQ09OVEVOVCA9IHtcclxuICBlbWFpbDoge1xyXG4gICAgY2FyZFRpdGxlOiBcIlJlc2V0IFBhc3N3b3JkXCIsXHJcbiAgICBidXR0b25UaXRsZTogXCJTZW5kIFZlcmlmaWNhdGlvbiBDb2RlXCIsXHJcbiAgICBjYXJkQm9keTogXCJObyB3b3JyaWVzLCBXZeKAmWxsIHNlbmQgeW91IHJlc2V0IGluc3RydWN0aW9uc1wiLFxyXG4gICAgY2FyZEZvb3RlcjogXCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cIixcclxuICAgIGxpbms6IFwiL2xvZ2luXCIsXHJcbiAgfSxcclxuICBjb2RlOiB7XHJcbiAgICBjYXJkVGl0bGU6IFwiQ2hlY2sgWW91ciBFbWFpbFwiLFxyXG4gICAgYnV0dG9uVGl0bGU6IFwiVmVyaWZ5IENvZGVcIixcclxuICAgIGNhcmRCb2R5OlxyXG4gICAgICBcIldlIHNlbnQgYSByZXNldCBsaW5rIHRvIGNvbnRhY3RAZ21haWwuY29tIGVudGVyIDQgZGlnaXQgY29kZSB0aGF0IG1lbnRpb25lZCBpbiB0aGUgZW1haWxcIixcclxuICAgIGNhcmRGb290ZXI6IFwiSGF2ZW7igJl0IGdvdCB0aGUgZW1haWwgeWV0PyBSZXNlbmQgQ29kZVwiLFxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIGNhcmRUaXRsZTogXCJTZXQgYSBOZXcgUGFzc3dvcmRcIixcclxuICAgIGJ1dHRvblRpdGxlOiBcIkNvbmZpcm1cIixcclxuICAgIGNhcmRCb2R5OlxyXG4gICAgICBcIkNyZWF0ZSBhIG5ldyBwYXNzd29yZC4gRW5zdXJlIGl0IGRpZmZlcnMgZnJvbSBwcmV2aW91cyBvbmVzIGZvciBzZWN1cml0eVwiLFxyXG4gICAgY2FyZEZvb3RlcjogXCJcIixcclxuICB9LFxyXG4gIHN1Y2Nlc3M6IHtcclxuICAgIGNhcmRUaXRsZTogXCJQYXNzd29yZCBSZXNldCBTdWNjZXNzZnVsXCIsXHJcbiAgICBidXR0b25UaXRsZTogXCJSZXR1cm4gdG8gTG9naW5cIixcclxuICAgIGNhcmRCb2R5OlxyXG4gICAgICBcIllvdXIgcGFzc3dvcmQgaGFzIGJlZW4gcmVzZXQgc3VjY2Vzc2Z1bGx5LiBQbGVhc2UgbG9naW4gd2l0aCB5b3VyIG5ldyBwYXNzd29yZFwiLFxyXG4gICAgY2FyZEZvb3RlcjogXCJcIixcclxuICAgIGxpbms6IFwiL2xvZ2luXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IEF1dGhSZXNldFBhc3N3b3JkQ2FyZCA9ICh7IG9uVmFsaWRJbnB1dCB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YWdlLCBzZXRTdGFnZV0gPSB1c2VTdGF0ZShcImVtYWlsXCIpO1xyXG4gIGNvbnN0IHsgY2FyZFRpdGxlLCBidXR0b25UaXRsZSwgY2FyZEJvZHksIGNhcmRGb290ZXIgfSA9IFNUQUdFX0NPTlRFTlRbc3RhZ2VdO1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBjb2RlOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBjb25maXJtUGFzc3dvcmQ6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgaGFuZGxlVmFsaWRJbnB1dCA9IChpZCwgdmFsdWUpID0+IHtcclxuICAgIHNldEZvcm1EYXRhKChwcmV2KSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnByZXYsIFtpZF06IFwiXCIgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBbaWRdOiB2YWx1ZSB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJGb3JtRmllbGRzID0gKHN0YWdlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHN0YWdlKSB7XHJcbiAgICAgIGNhc2UgXCJlbWFpbFwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8QXV0aEZvcm1GaWVsZFxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgIG9uVmFsaWRJbnB1dD17aGFuZGxlVmFsaWRJbnB1dH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSBcImNvZGVcIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFBpbklucHV0XHJcbiAgICAgICAgICAgIGxlbmd0aD17Nn1cclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgdHlwZT1cIm51bWVyaWNcIlxyXG4gICAgICAgICAgICBpbnB1dE1vZGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBpbnB1dFN0eWxlPXt7IGJvcmRlckNvbG9yOiBcInJlZFwiIH19IC8vIENoYW5nZSB0aGUgYm9yZGVyIGNvbG9yXHJcbiAgICAgICAgICAgIGlucHV0Rm9jdXNTdHlsZT17eyBib3JkZXJDb2xvcjogXCJibHVlXCIgfX0gLy8gQ2hhbmdlIHRoZSBib3JkZXIgY29sb3Igd2hlbiBmb2N1c2VkXHJcbiAgICAgICAgICAgIG9uQ29tcGxldGU9eyhlKSA9PiBjb25zb2xlLmxvZyhlKX1cclxuICAgICAgICAgICAgYXV0b1NlbGVjdD17dHJ1ZX1cclxuICAgICAgICAgICAgcmVnZXhDcml0ZXJpYT17L15bIEEtWmEtejAtOV9ALi8jJistXSokL31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSBcInBhc3N3b3JkXCI6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBdXRoRm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG9uVmFsaWRJbnB1dD17aGFuZGxlVmFsaWRJbnB1dH1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QXV0aEZvcm1GaWVsZFxyXG4gICAgICAgICAgICAgIGlkPVwiY29uZmlybVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBvblZhbGlkSW5wdXQ9e2hhbmRsZVZhbGlkSW5wdXR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoc3RhZ2UgPT09IFwiZW1haWxcIikge1xyXG4gICAgICBpZihmb3JtRGF0YS5lbWFpbCA9PT0gXCJcIil7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihcIlBsZWFzZSBmaWxsIGNvcnJlY3QgZW1haWwgYWRkcmVzc1wiKTtcclxuICAgIH1cclxuICAgICAgc2V0U3RhZ2UoXCJjb2RlXCIpO1xyXG4gICAgfSBlbHNlIGlmIChzdGFnZSA9PT0gXCJjb2RlXCIpIHtcclxuICAgICAgc2V0U3RhZ2UoXCJwYXNzd29yZFwiKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhZ2UgPT09IFwicGFzc3dvcmRcIikge1xyXG4gICAgICBzZXRTdGFnZShcInN1Y2Nlc3NcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs2MCVdIGgtWzYwJV0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTQgYm9yZGVyLXJlZC01MDAgYm9yZGVyLTJcIj5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNCB0ZXh0LWNlbnRlciB0ZXh0LVs0MHB4XSB0ZXh0LWJsYWNrIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0xMiBoLTEyIHJvdW5kZWQtZnVsbCBiZy16aW5jLTQwMCBcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZvbnQtbWVkaXVtXCI+V2VsY29tZSBiYWNrPC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC02IHRleHQtY2VudGVyIHRleHQtWzIwcHhdIHRleHQtYmFzZSBtdC0xMCBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIGZvbnQtYm9sZFwiPntjYXJkVGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxNnB4XSBmb250LXNhbnMgbGVhZGluZy1bMjRweF0gdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAge2NhcmRCb2R5fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtyZW5kZXJGb3JtRmllbGRzKHN0YWdlKX1cclxuICAgICAgICA8QXV0aEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICB0ZXh0PXtidXR0b25UaXRsZX1cclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17XCJiZy16aW5jLTMwMFwifVxyXG4gICAgICAgICAgdGV4dENvbG9yPXtcInRleHQtd2hpdGVcIn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJ0ZXh0LVsxNnB4XSBbdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZV0gZm9udC1tZWRpdW0gIHRleHQtZ3JheSB0ZXh0LXJpZ2h0IG10LTEwIGN1cnNvci1wb2ludGVyICB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LWJsdWUtNTAwXCI+XHJcbiAgICAgICAge2NhcmRGb290ZXJ9XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhSZXNldFBhc3N3b3JkQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBdXRoRm9ybUZpZWxkIiwiQXV0aEJ1dHRvbiIsIlBpbklucHV0IiwibWVzc2FnZSIsIlNUQUdFX0NPTlRFTlQiLCJlbWFpbCIsImNhcmRUaXRsZSIsImJ1dHRvblRpdGxlIiwiY2FyZEJvZHkiLCJjYXJkRm9vdGVyIiwibGluayIsImNvZGUiLCJwYXNzd29yZCIsInN1Y2Nlc3MiLCJBdXRoUmVzZXRQYXNzd29yZENhcmQiLCJvblZhbGlkSW5wdXQiLCJzdGFnZSIsInNldFN0YWdlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImNvbmZpcm1QYXNzd29yZCIsImhhbmRsZVZhbGlkSW5wdXQiLCJpZCIsInZhbHVlIiwicHJldiIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJGb3JtRmllbGRzIiwidHlwZSIsInBsYWNlaG9sZGVyIiwibmFtZSIsImxhYmVsIiwicmVxdWlyZWQiLCJsZW5ndGgiLCJpbml0aWFsVmFsdWUiLCJpbnB1dE1vZGUiLCJzdHlsZSIsInBhZGRpbmciLCJpbnB1dFN0eWxlIiwiYm9yZGVyQ29sb3IiLCJpbnB1dEZvY3VzU3R5bGUiLCJvbkNvbXBsZXRlIiwiZSIsImF1dG9TZWxlY3QiLCJyZWdleENyaXRlcmlhIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm9uQ2xpY2siLCJ0ZXh0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthResetPasswordCard.jsx\n"));

/***/ })

});