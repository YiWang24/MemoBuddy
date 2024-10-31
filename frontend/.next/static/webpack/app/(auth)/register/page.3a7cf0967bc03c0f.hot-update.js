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

/***/ "(app-pages-browser)/./src/components/auth/AuthForm.jsx":
/*!******************************************!*\
  !*** ./src/components/auth/AuthForm.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AuthButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthButton */ \"(app-pages-browser)/./src/components/auth/AuthButton.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst AuthForm = (param)=>{\n    let { formTitle, onSubmit } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [isPasswordVisible, setIsPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const togglePasswordVisibility = ()=>{\n        setIsPasswordVisible(!isPasswordVisible);\n    };\n    const validateForm = ()=>{\n        const newFormErrors = {};\n        if (!formData.email) {\n            newFormErrors.email = \"Email is required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n            newFormErrors.email = \"Email is invalid\";\n        }\n        if (!formData.password) {\n            newFormErrors.password = \"password is required\";\n        } else if (formData.password.length < 6) {\n            newFormErrors.password = \"password must be at least 6 characters\";\n        }\n        setFormErrors(newFormErrors);\n        if (Object.keys(newFormErrors).length > 0) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Please fill in the required fields\");\n        }\n        return Object.keys(newFormErrors).length === 0;\n    };\n    const handleInputChange = (e)=>{\n        const { id, value } = e.target;\n        setFormData((prev)=>({\n                ...prev,\n                [id]: value\n            }));\n        if (formErrors[id]) {\n            setFormErrors((prev)=>({\n                    ...prev,\n                    [id]: null\n                }));\n        }\n    };\n    const handleButtonClick = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            onSubmit(formData);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-4 items-center justify-center w-[80%] h-full\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-black text-2xl  tracking-[0] leading-[normal] whitespace-nowrap mb-4\",\n                children: formTitle\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onClick: handleButtonClick,\n                    text: formTitle,\n                    backgroundColor: \"bg-zinc-300\",\n                    textColor: \"text-white\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthForm, \"WnNx75PGVxWZ0RIxOo++ob8YcPY=\");\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQytCO0FBQ1M7QUFDRjtBQUNVO0FBQ2hELE1BQU1NLFdBQVc7UUFBQyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRTs7SUFDdkMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO1FBQUVTLE9BQU87UUFBSUMsVUFBVTtJQUFHO0lBQ25FLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sQ0FBQ2EsbUJBQW1CQyxxQkFBcUIsR0FBR2QsK0NBQVFBLENBQUM7SUFDM0QsTUFBTWUsMkJBQTJCO1FBQy9CRCxxQkFBcUIsQ0FBQ0Q7SUFDeEI7SUFFQSxNQUFNRyxlQUFlO1FBQ25CLE1BQU1DLGdCQUFnQixDQUFDO1FBQ3ZCLElBQUksQ0FBQ1YsU0FBU0UsS0FBSyxFQUFFO1lBQ25CUSxjQUFjUixLQUFLLEdBQUc7UUFDeEIsT0FBTyxJQUFJLENBQUMsZUFBZVMsSUFBSSxDQUFDWCxTQUFTRSxLQUFLLEdBQUc7WUFDL0NRLGNBQWNSLEtBQUssR0FBRztRQUN4QjtRQUNBLElBQUksQ0FBQ0YsU0FBU0csUUFBUSxFQUFFO1lBQ3RCTyxjQUFjUCxRQUFRLEdBQUc7UUFDM0IsT0FBTyxJQUFJSCxTQUFTRyxRQUFRLENBQUNTLE1BQU0sR0FBRyxHQUFHO1lBQ3ZDRixjQUFjUCxRQUFRLEdBQUc7UUFDM0I7UUFDQUUsY0FBY0s7UUFDZCxJQUFJRyxPQUFPQyxJQUFJLENBQUNKLGVBQWVFLE1BQU0sR0FBRyxHQUFHO1lBQ3pDckIsMkVBQU9BLENBQUN3QixLQUFLLENBQUM7UUFDaEI7UUFDQSxPQUFPRixPQUFPQyxJQUFJLENBQUNKLGVBQWVFLE1BQU0sS0FBSztJQUMvQztJQUNBLE1BQU1JLG9CQUFvQixDQUFDQztRQUN6QixNQUFNLEVBQUVDLEVBQUUsRUFBRUMsS0FBSyxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDOUJuQixZQUFZLENBQUNvQixPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0gsR0FBRyxFQUFFQztZQUFNO1FBQzlDLElBQUlmLFVBQVUsQ0FBQ2MsR0FBRyxFQUFFO1lBQ2xCYixjQUFjLENBQUNnQixPQUFVO29CQUFFLEdBQUdBLElBQUk7b0JBQUUsQ0FBQ0gsR0FBRyxFQUFFO2dCQUFLO1FBQ2pEO0lBQ0Y7SUFFQSxNQUFNSSxvQkFBb0IsQ0FBQ0w7UUFDekJBLEVBQUVNLGNBQWM7UUFDaEIsSUFBSWQsZ0JBQWdCO1lBQ2xCVixTQUFTQztRQUNYO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3dCO1FBQ0NDLFdBQVU7UUFDVjFCLFVBQVVBOzswQkFFViw4REFBQzJCO2dCQUFJRCxXQUFVOzBCQUNaM0I7Ozs7OzswQkFpREgsOERBQUM0QjtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQy9CLG1EQUFVQTtvQkFDVGlDLFNBQVNMO29CQUNUTSxNQUFNOUI7b0JBQ04rQixpQkFBaUI7b0JBQ2pCQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQjtHQTFHTWpDO0tBQUFBO0FBNEdOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm0uanN4PzhlOTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF1dGhCdXR0b24gZnJvbSBcIi4vQXV0aEJ1dHRvblwiO1xyXG5pbXBvcnQgeyBCaUhpZGUsIEJpU2hvdyB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xyXG5jb25zdCBBdXRoRm9ybSA9ICh7IGZvcm1UaXRsZSwgb25TdWJtaXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoeyBlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2Zvcm1FcnJvcnMsIHNldEZvcm1FcnJvcnNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtpc1Bhc3N3b3JkVmlzaWJsZSwgc2V0SXNQYXNzd29yZFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgIHNldElzUGFzc3dvcmRWaXNpYmxlKCFpc1Bhc3N3b3JkVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Rm9ybUVycm9ycyA9IHt9O1xyXG4gICAgaWYgKCFmb3JtRGF0YS5lbWFpbCkge1xyXG4gICAgICBuZXdGb3JtRXJyb3JzLmVtYWlsID0gXCJFbWFpbCBpcyByZXF1aXJlZFwiO1xyXG4gICAgfSBlbHNlIGlmICghL1xcUytAXFxTK1xcLlxcUysvLnRlc3QoZm9ybURhdGEuZW1haWwpKSB7XHJcbiAgICAgIG5ld0Zvcm1FcnJvcnMuZW1haWwgPSBcIkVtYWlsIGlzIGludmFsaWRcIjtcclxuICAgIH1cclxuICAgIGlmICghZm9ybURhdGEucGFzc3dvcmQpIHtcclxuICAgICAgbmV3Rm9ybUVycm9ycy5wYXNzd29yZCA9IFwicGFzc3dvcmQgaXMgcmVxdWlyZWRcIjtcclxuICAgIH0gZWxzZSBpZiAoZm9ybURhdGEucGFzc3dvcmQubGVuZ3RoIDwgNikge1xyXG4gICAgICBuZXdGb3JtRXJyb3JzLnBhc3N3b3JkID0gXCJwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyc1wiO1xyXG4gICAgfVxyXG4gICAgc2V0Rm9ybUVycm9ycyhuZXdGb3JtRXJyb3JzKTtcclxuICAgIGlmIChPYmplY3Qua2V5cyhuZXdGb3JtRXJyb3JzKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQbGVhc2UgZmlsbCBpbiB0aGUgcmVxdWlyZWQgZmllbGRzXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld0Zvcm1FcnJvcnMpLmxlbmd0aCA9PT0gMDtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgaWQsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldEZvcm1EYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbaWRdOiB2YWx1ZSB9KSk7XHJcbiAgICBpZiAoZm9ybUVycm9yc1tpZF0pIHtcclxuICAgICAgc2V0Rm9ybUVycm9ycygocHJldikgPT4gKHsgLi4ucHJldiwgW2lkXTogbnVsbCB9KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgIG9uU3VibWl0KGZvcm1EYXRhKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm1cclxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1bODAlXSBoLWZ1bGxcIlxyXG4gICAgICBvblN1Ym1pdD17b25TdWJtaXR9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmxhY2sgdGV4dC0yeGwgIHRyYWNraW5nLVswXSBsZWFkaW5nLVtub3JtYWxdIHdoaXRlc3BhY2Utbm93cmFwIG1iLTRcIj5cclxuICAgICAgICB7Zm9ybVRpdGxlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCBnYXAtMiB3LWZ1bGxcIj5cclxuICAgICAgICA8bGFiZWxcclxuICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgICBmb250LW5vcm1hbCB0ZXh0LVsjNjY2NjY2XSB0ZXh0LWJhc2UgdHJhY2tpbmctWzBdIGxlYWRpbmctW25vcm1hbF0gcC0wIHBsLTBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEVtYWlsIEFkZHJlc3NcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsQGV4YW1wbGUuY29tXCJcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWwgfHwgXCJcIn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgcC0zIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Zvcm1FcnJvcnMuZW1haWwgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbSBtdC0xXCI+e2Zvcm1FcnJvcnMuZW1haWx9PC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgaW5saW5lLWZsZXggIGZvbnQtbm9ybWFsIHRleHQtWyM2NjY2NjZdIHRleHQtYmFzZSB0cmFja2luZy1bMF0gbGVhZGluZy1bbm9ybWFsXSBwLTAgcGwtMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4+UGFzc3dvcmQ8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNQYXNzd29yZFZpc2libGUgPyA8QmlTaG93IC8+IDogPEJpSGlkZSAvPn17XCIgXCJ9XHJcbiAgICAgICAgICAgIHtpc1Bhc3N3b3JkVmlzaWJsZSA/IFwiU2hvd1wiIDogXCJIaWRlXCJ9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCIqKioqKioqKlwiXHJcbiAgICAgICAgICB0eXBlPXtpc1Bhc3N3b3JkVmlzaWJsZSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkIHx8IFwiXCJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHAtMyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIHtmb3JtRXJyb3JzLnBhc3N3b3JkICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtc20gbXQtMVwiPntmb3JtRXJyb3JzLnBhc3N3b3JkfTwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgPEF1dGhCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgdGV4dD17Zm9ybVRpdGxlfVxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtcImJnLXppbmMtMzAwXCJ9XHJcbiAgICAgICAgICB0ZXh0Q29sb3I9e1widGV4dC13aGl0ZVwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcclxuIl0sIm5hbWVzIjpbIm1lc3NhZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiQXV0aEJ1dHRvbiIsIkJpSGlkZSIsIkJpU2hvdyIsIkF1dGhGb3JtIiwiZm9ybVRpdGxlIiwib25TdWJtaXQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1FcnJvcnMiLCJzZXRGb3JtRXJyb3JzIiwiaXNQYXNzd29yZFZpc2libGUiLCJzZXRJc1Bhc3N3b3JkVmlzaWJsZSIsInRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSIsInZhbGlkYXRlRm9ybSIsIm5ld0Zvcm1FcnJvcnMiLCJ0ZXN0IiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsImVycm9yIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwiaWQiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJoYW5kbGVCdXR0b25DbGljayIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImNsYXNzTmFtZSIsImRpdiIsIm9uQ2xpY2siLCJ0ZXh0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthForm.jsx\n"));

/***/ })

});