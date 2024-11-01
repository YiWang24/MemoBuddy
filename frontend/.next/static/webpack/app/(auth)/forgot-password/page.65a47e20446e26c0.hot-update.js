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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pin-input */ \"(app-pages-browser)/./node_modules/react-pin-input/dist/bundle.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pin_input__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst STAGE_CONTENT = {\n    email: {\n        cardTitle: \"Reset Password\",\n        buttonTitle: \"Send Verification Code\",\n        cardBody: \"No worries, We’ll send you reset instructions\",\n        cardFooter: \"Already have an account?\",\n        link: \"/login\"\n    },\n    code: {\n        cardTitle: \"Check Your Email\",\n        buttonTitle: \"Verify Code\",\n        cardBody: \"We sent a reset link to contact@gmail.com enter 4 digit code that mentioned in the email\",\n        cardFooter: \"Haven’t got the email yet? Resend Code\"\n    },\n    password: {\n        cardTitle: \"Set a New Password\",\n        buttonTitle: \"Confirm\",\n        cardBody: \"Create a new password. Ensure it differs from previous ones for security\",\n        cardFooter: \"\"\n    },\n    success: {\n        cardTitle: \"Password Reset Successful\",\n        buttonTitle: \"Return to Login\",\n        cardBody: \"Your password has been reset successfully. Please login with your new password\",\n        cardFooter: \"\",\n        link: \"/login\"\n    }\n};\nconst AuthResetPasswordCard = (param)=>{\n    let { stage, formData, onInputChange, onSubmit } = param;\n    const { cardTitle, buttonTitle, cardBody, cardFooter } = STAGE_CONTENT[stage];\n    const renderFormFields = (stage)=>{\n        switch(stage){\n            case \"email\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                    id: \"email\",\n                    type: \"email\",\n                    placeholder: \"Email\",\n                    name: \"email\",\n                    label: \"Email Address\",\n                    onValidInput: onInputChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, undefined);\n            case \"code\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_pin_input__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    length: 6,\n                    initialValue: \"\",\n                    type: \"numeric\",\n                    inputMode: \"number\",\n                    style: {\n                        padding: \"10px\"\n                    },\n                    inputStyle: {\n                        borderColor: \"red\"\n                    },\n                    inputFocusStyle: {\n                        borderColor: \"blue\"\n                    },\n                    onComplete: (value)=>onInputChange(\"code\", value),\n                    autoSelect: true,\n                    regexCriteria: /^[ A-Za-z0-9_@./#&+-]*$/\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, undefined);\n            case \"password\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            id: \"password\",\n                            type: \"password\",\n                            placeholder: \"Password\",\n                            name: \"password\",\n                            label: \"Password\",\n                            onValidInput: handleValidInput,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            id: \"confirmPassword\",\n                            type: \"password\",\n                            placeholder: \"Confirm Password\",\n                            name: \"confirmPassword\",\n                            label: \"Confirm Password\",\n                            onValidInput: handleValidInput,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true);\n        }\n    };\n    const handleButtonClick = ()=>{\n        if (stage === \"email\") {\n            if (formData.email === \"\") {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill correct email address\");\n            } else {\n                setStage(\"code\");\n            }\n        } else if (stage === \"code\") {\n            if (formData.code === \"\") {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill correct code\");\n            } else {\n                setStage(\"password\");\n            }\n        } else if (stage === \"password\") {\n            if (formData.password === \"\" || formData.confirmPassword === \"\") {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill correct password\");\n            } else if (formData.password !== formData.confirmPassword) {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Password does not match\");\n            } else {\n                onSubmit(formData);\n                setStage(\"success\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[60%] h-[60%] flex flex-col items-center gap-4 border-red-500 border-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"relative flex flex-col items-center justify-center gap-4 text-center text-[40px] text-black \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-12 h-12 rounded-full bg-zinc-400 \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative font-medium\",\n                        children: \"Welcome back\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center gap-6 text-center text-[20px] text-base mt-10 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[24px] font-bold\",\n                        children: cardTitle\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[16px] font-sans leading-[24px] text-gray-500\",\n                        children: cardBody\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, undefined),\n                    renderFormFields(stage),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                        onClick: handleButtonClick,\n                        text: buttonTitle,\n                        backgroundColor: \"bg-zinc-300\",\n                        textColor: \"text-white\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"text-[16px] [text-decoration:underline] font-medium  text-gray text-right mt-10 cursor-pointer  transition duration-300 ease-in-out hover:text-blue-500\",\n                children: cardFooter\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AuthResetPasswordCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthResetPasswordCard);\nvar _c;\n$RefreshReg$(_c, \"AuthResetPasswordCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aFJlc2V0UGFzc3dvcmRDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFDc0I7QUFDdkI7QUFDUjtBQUMvQixNQUFNTSxnQkFBZ0I7SUFDcEJDLE9BQU87UUFDTEMsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxNQUFNO0lBQ1I7SUFDQUMsTUFBTTtRQUNKTCxXQUFXO1FBQ1hDLGFBQWE7UUFDYkMsVUFDRTtRQUNGQyxZQUFZO0lBQ2Q7SUFDQUcsVUFBVTtRQUNSTixXQUFXO1FBQ1hDLGFBQWE7UUFDYkMsVUFDRTtRQUNGQyxZQUFZO0lBQ2Q7SUFDQUksU0FBUztRQUNQUCxXQUFXO1FBQ1hDLGFBQWE7UUFDYkMsVUFDRTtRQUNGQyxZQUFZO1FBQ1pDLE1BQU07SUFDUjtBQUNGO0FBRUEsTUFBTUksd0JBQXdCO1FBQUMsRUFBRUMsS0FBSyxFQUFDQyxRQUFRLEVBQUNDLGFBQWEsRUFBQ0MsUUFBUSxFQUFFO0lBRXRFLE1BQU0sRUFBRVosU0FBUyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFLEdBQUdMLGFBQWEsQ0FBQ1csTUFBTTtJQUk3RSxNQUFNSSxtQkFBbUIsQ0FBQ0o7UUFDeEIsT0FBUUE7WUFDTixLQUFLO2dCQUNILHFCQUNFLDhEQUFDZiwyREFBYUE7b0JBQ1pvQixJQUFHO29CQUNIQyxNQUFLO29CQUNMQyxhQUFZO29CQUNaQyxNQUFLO29CQUNMQyxPQUFNO29CQUNOQyxjQUFjUjtvQkFDZFMsUUFBUTs7Ozs7O1lBR2QsS0FBSztnQkFDSCxxQkFDRSw4REFBQ3hCLHdEQUFRQTtvQkFDUHlCLFFBQVE7b0JBQ1JDLGNBQWE7b0JBQ2JQLE1BQUs7b0JBQ0xRLFdBQVU7b0JBQ1ZDLE9BQU87d0JBQUVDLFNBQVM7b0JBQU87b0JBQ3pCQyxZQUFZO3dCQUFFQyxhQUFhO29CQUFNO29CQUNqQ0MsaUJBQWlCO3dCQUFFRCxhQUFhO29CQUFPO29CQUN2Q0UsWUFBWSxDQUFDQyxRQUFVbkIsY0FBYyxRQUFRbUI7b0JBQzdDQyxZQUFZO29CQUNaQyxlQUFlOzs7Ozs7WUFHckIsS0FBSztnQkFDSCxxQkFDRTs7c0NBQ0UsOERBQUN0QywyREFBYUE7NEJBQ1pvQixJQUFHOzRCQUNIQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaQyxNQUFLOzRCQUNMQyxPQUFNOzRCQUNOQyxjQUFjYzs0QkFDZGIsUUFBUTs7Ozs7O3NDQUVWLDhEQUFDMUIsMkRBQWFBOzRCQUNab0IsSUFBRzs0QkFDSEMsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsTUFBSzs0QkFDTEMsT0FBTTs0QkFDTkMsY0FBY2M7NEJBQ2RiLFFBQVE7Ozs7Ozs7O1FBSWxCO0lBQ0Y7SUFFQSxNQUFNYyxvQkFBb0I7UUFDeEIsSUFBSXpCLFVBQVUsU0FBUztZQUNyQixJQUFJQyxTQUFTWCxLQUFLLEtBQUssSUFBSTtnQkFDekJGLDJFQUFPQSxDQUFDc0MsS0FBSyxDQUFDO1lBQ2hCLE9BQU87Z0JBQ0xDLFNBQVM7WUFDWDtRQUNGLE9BQU8sSUFBSTNCLFVBQVUsUUFBUTtZQUMzQixJQUFJQyxTQUFTTCxJQUFJLEtBQUssSUFBSTtnQkFDeEJSLDJFQUFPQSxDQUFDc0MsS0FBSyxDQUFDO1lBQ2hCLE9BQU87Z0JBQ0xDLFNBQVM7WUFDWDtRQUNGLE9BQU8sSUFBSTNCLFVBQVUsWUFBWTtZQUMvQixJQUFJQyxTQUFTSixRQUFRLEtBQUssTUFBTUksU0FBUzJCLGVBQWUsS0FBSyxJQUFJO2dCQUMvRHhDLDJFQUFPQSxDQUFDc0MsS0FBSyxDQUFDO1lBQ2hCLE9BQU8sSUFBSXpCLFNBQVNKLFFBQVEsS0FBS0ksU0FBUzJCLGVBQWUsRUFBRTtnQkFDekR4QywyRUFBT0EsQ0FBQ3NDLEtBQUssQ0FBQztZQUNoQixPQUFPO2dCQUNMdkIsU0FBU0Y7Z0JBQ1QwQixTQUFTO1lBQ1g7UUFDRjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBT0QsV0FBVTs7a0NBQ2hCLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBdUI7Ozs7Ozs7Ozs7OzswQkFFeEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQXlCdkM7Ozs7OztrQ0FDeEMsOERBQUNzQzt3QkFBSUMsV0FBVTtrQ0FDWnJDOzs7Ozs7b0JBRUZXLGlCQUFpQko7a0NBQ2xCLDhEQUFDZCx3REFBVUE7d0JBQ1Q4QyxTQUFTUDt3QkFDVFEsTUFBTXpDO3dCQUNOMEMsaUJBQWlCO3dCQUNqQkMsV0FBVzs7Ozs7Ozs7Ozs7OzBCQUdmLDhEQUFDQztnQkFBT04sV0FBVTswQkFDZnBDOzs7Ozs7Ozs7Ozs7QUFJVDtLQTdHTUs7QUErR04sK0RBQWVBLHFCQUFxQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hdXRoL0F1dGhSZXNldFBhc3N3b3JkQ2FyZC5qc3g/OWUzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhGb3JtRmllbGQsIEF1dGhCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL2F1dGhcIjtcclxuaW1wb3J0IFBpbklucHV0IGZyb20gXCJyZWFjdC1waW4taW5wdXRcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmNvbnN0IFNUQUdFX0NPTlRFTlQgPSB7XHJcbiAgZW1haWw6IHtcclxuICAgIGNhcmRUaXRsZTogXCJSZXNldCBQYXNzd29yZFwiLFxyXG4gICAgYnV0dG9uVGl0bGU6IFwiU2VuZCBWZXJpZmljYXRpb24gQ29kZVwiLFxyXG4gICAgY2FyZEJvZHk6IFwiTm8gd29ycmllcywgV2XigJlsbCBzZW5kIHlvdSByZXNldCBpbnN0cnVjdGlvbnNcIixcclxuICAgIGNhcmRGb290ZXI6IFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XCIsXHJcbiAgICBsaW5rOiBcIi9sb2dpblwiLFxyXG4gIH0sXHJcbiAgY29kZToge1xyXG4gICAgY2FyZFRpdGxlOiBcIkNoZWNrIFlvdXIgRW1haWxcIixcclxuICAgIGJ1dHRvblRpdGxlOiBcIlZlcmlmeSBDb2RlXCIsXHJcbiAgICBjYXJkQm9keTpcclxuICAgICAgXCJXZSBzZW50IGEgcmVzZXQgbGluayB0byBjb250YWN0QGdtYWlsLmNvbSBlbnRlciA0IGRpZ2l0IGNvZGUgdGhhdCBtZW50aW9uZWQgaW4gdGhlIGVtYWlsXCIsXHJcbiAgICBjYXJkRm9vdGVyOiBcIkhhdmVu4oCZdCBnb3QgdGhlIGVtYWlsIHlldD8gUmVzZW5kIENvZGVcIixcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICBjYXJkVGl0bGU6IFwiU2V0IGEgTmV3IFBhc3N3b3JkXCIsXHJcbiAgICBidXR0b25UaXRsZTogXCJDb25maXJtXCIsXHJcbiAgICBjYXJkQm9keTpcclxuICAgICAgXCJDcmVhdGUgYSBuZXcgcGFzc3dvcmQuIEVuc3VyZSBpdCBkaWZmZXJzIGZyb20gcHJldmlvdXMgb25lcyBmb3Igc2VjdXJpdHlcIixcclxuICAgIGNhcmRGb290ZXI6IFwiXCIsXHJcbiAgfSxcclxuICBzdWNjZXNzOiB7XHJcbiAgICBjYXJkVGl0bGU6IFwiUGFzc3dvcmQgUmVzZXQgU3VjY2Vzc2Z1bFwiLFxyXG4gICAgYnV0dG9uVGl0bGU6IFwiUmV0dXJuIHRvIExvZ2luXCIsXHJcbiAgICBjYXJkQm9keTpcclxuICAgICAgXCJZb3VyIHBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0IHN1Y2Nlc3NmdWxseS4gUGxlYXNlIGxvZ2luIHdpdGggeW91ciBuZXcgcGFzc3dvcmRcIixcclxuICAgIGNhcmRGb290ZXI6IFwiXCIsXHJcbiAgICBsaW5rOiBcIi9sb2dpblwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBBdXRoUmVzZXRQYXNzd29yZENhcmQgPSAoeyBzdGFnZSxmb3JtRGF0YSxvbklucHV0Q2hhbmdlLG9uU3VibWl0IH0pID0+IHtcclxuIFxyXG4gIGNvbnN0IHsgY2FyZFRpdGxlLCBidXR0b25UaXRsZSwgY2FyZEJvZHksIGNhcmRGb290ZXIgfSA9IFNUQUdFX0NPTlRFTlRbc3RhZ2VdO1xyXG4gIFxyXG4gIFxyXG5cclxuICBjb25zdCByZW5kZXJGb3JtRmllbGRzID0gKHN0YWdlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHN0YWdlKSB7XHJcbiAgICAgIGNhc2UgXCJlbWFpbFwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8QXV0aEZvcm1GaWVsZFxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgIG9uVmFsaWRJbnB1dD17b25JbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSBcImNvZGVcIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFBpbklucHV0XHJcbiAgICAgICAgICAgIGxlbmd0aD17Nn1cclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgdHlwZT1cIm51bWVyaWNcIlxyXG4gICAgICAgICAgICBpbnB1dE1vZGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICBpbnB1dFN0eWxlPXt7IGJvcmRlckNvbG9yOiBcInJlZFwiIH19IC8vIENoYW5nZSB0aGUgYm9yZGVyIGNvbG9yXHJcbiAgICAgICAgICAgIGlucHV0Rm9jdXNTdHlsZT17eyBib3JkZXJDb2xvcjogXCJibHVlXCIgfX0gLy8gQ2hhbmdlIHRoZSBib3JkZXIgY29sb3Igd2hlbiBmb2N1c2VkXHJcbiAgICAgICAgICAgIG9uQ29tcGxldGU9eyh2YWx1ZSkgPT4gb25JbnB1dENoYW5nZShcImNvZGVcIiwgdmFsdWUpfVxyXG4gICAgICAgICAgICBhdXRvU2VsZWN0PXt0cnVlfVxyXG4gICAgICAgICAgICByZWdleENyaXRlcmlhPXsvXlsgQS1aYS16MC05X0AuLyMmKy1dKiQvfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlIFwicGFzc3dvcmRcIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEF1dGhGb3JtRmllbGRcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgb25WYWxpZElucHV0PXtoYW5kbGVWYWxpZElucHV0fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxBdXRoRm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgaWQ9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkNvbmZpcm0gUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG9uVmFsaWRJbnB1dD17aGFuZGxlVmFsaWRJbnB1dH1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIGlmIChzdGFnZSA9PT0gXCJlbWFpbFwiKSB7XHJcbiAgICAgIGlmIChmb3JtRGF0YS5lbWFpbCA9PT0gXCJcIikge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQbGVhc2UgZmlsbCBjb3JyZWN0IGVtYWlsIGFkZHJlc3NcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U3RhZ2UoXCJjb2RlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHN0YWdlID09PSBcImNvZGVcIikge1xyXG4gICAgICBpZiAoZm9ybURhdGEuY29kZSA9PT0gXCJcIikge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQbGVhc2UgZmlsbCBjb3JyZWN0IGNvZGVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U3RhZ2UoXCJwYXNzd29yZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChzdGFnZSA9PT0gXCJwYXNzd29yZFwiKSB7XHJcbiAgICAgIGlmIChmb3JtRGF0YS5wYXNzd29yZCA9PT0gXCJcIiB8fCBmb3JtRGF0YS5jb25maXJtUGFzc3dvcmQgPT09IFwiXCIpIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKFwiUGxlYXNlIGZpbGwgY29ycmVjdCBwYXNzd29yZFwiKTtcclxuICAgICAgfSBlbHNlIGlmIChmb3JtRGF0YS5wYXNzd29yZCAhPT0gZm9ybURhdGEuY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihcIlBhc3N3b3JkIGRvZXMgbm90IG1hdGNoXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9uU3VibWl0KGZvcm1EYXRhKTtcclxuICAgICAgICBzZXRTdGFnZShcInN1Y2Nlc3NcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzYwJV0gaC1bNjAlXSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNCBib3JkZXItcmVkLTUwMCBib3JkZXItMlwiPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IHRleHQtY2VudGVyIHRleHQtWzQwcHhdIHRleHQtYmxhY2sgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGJnLXppbmMtNDAwIFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZm9udC1tZWRpdW1cIj5XZWxjb21lIGJhY2s8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTYgdGV4dC1jZW50ZXIgdGV4dC1bMjBweF0gdGV4dC1iYXNlIG10LTEwIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gZm9udC1ib2xkXCI+e2NhcmRUaXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzE2cHhdIGZvbnQtc2FucyBsZWFkaW5nLVsyNHB4XSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICB7Y2FyZEJvZHl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3JlbmRlckZvcm1GaWVsZHMoc3RhZ2UpfVxyXG4gICAgICAgIDxBdXRoQnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja31cclxuICAgICAgICAgIHRleHQ9e2J1dHRvblRpdGxlfVxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtcImJnLXppbmMtMzAwXCJ9XHJcbiAgICAgICAgICB0ZXh0Q29sb3I9e1widGV4dC13aGl0ZVwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInRleHQtWzE2cHhdIFt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lXSBmb250LW1lZGl1bSAgdGV4dC1ncmF5IHRleHQtcmlnaHQgbXQtMTAgY3Vyc29yLXBvaW50ZXIgIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOnRleHQtYmx1ZS01MDBcIj5cclxuICAgICAgICB7Y2FyZEZvb3Rlcn1cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aFJlc2V0UGFzc3dvcmRDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkF1dGhGb3JtRmllbGQiLCJBdXRoQnV0dG9uIiwiUGluSW5wdXQiLCJtZXNzYWdlIiwiU1RBR0VfQ09OVEVOVCIsImVtYWlsIiwiY2FyZFRpdGxlIiwiYnV0dG9uVGl0bGUiLCJjYXJkQm9keSIsImNhcmRGb290ZXIiLCJsaW5rIiwiY29kZSIsInBhc3N3b3JkIiwic3VjY2VzcyIsIkF1dGhSZXNldFBhc3N3b3JkQ2FyZCIsInN0YWdlIiwiZm9ybURhdGEiLCJvbklucHV0Q2hhbmdlIiwib25TdWJtaXQiLCJyZW5kZXJGb3JtRmllbGRzIiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwibGFiZWwiLCJvblZhbGlkSW5wdXQiLCJyZXF1aXJlZCIsImxlbmd0aCIsImluaXRpYWxWYWx1ZSIsImlucHV0TW9kZSIsInN0eWxlIiwicGFkZGluZyIsImlucHV0U3R5bGUiLCJib3JkZXJDb2xvciIsImlucHV0Rm9jdXNTdHlsZSIsIm9uQ29tcGxldGUiLCJ2YWx1ZSIsImF1dG9TZWxlY3QiLCJyZWdleENyaXRlcmlhIiwiaGFuZGxlVmFsaWRJbnB1dCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZXJyb3IiLCJzZXRTdGFnZSIsImNvbmZpcm1QYXNzd29yZCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm9uQ2xpY2siLCJ0ZXh0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthResetPasswordCard.jsx\n"));

/***/ })

});