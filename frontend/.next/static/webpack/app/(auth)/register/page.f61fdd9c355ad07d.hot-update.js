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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst AuthForm = (param)=>{\n    let { formTitle, onSubmit } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [isPasswordVisible, setIsPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const validateForm = ()=>{\n        const newFormErrors = {};\n        if (!formData.email) {\n            newFormErrors.email = \"Email is required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n            newFormErrors.email = \"Email is invalid\";\n        }\n        if (!formData.password) {\n            newFormErrors.password = \"password is required\";\n        } else if (formData.password.length < 6) {\n            newFormErrors.password = \"password must be at least 6 characters\";\n        }\n        setFormErrors(newFormErrors);\n        if (Object.keys(newFormErrors).length > 0) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Please fill in the required fields\");\n        }\n        return Object.keys(newFormErrors).length === 0;\n    };\n    const handleInputChange = (id, value)=>{\n        setFormData((prev)=>({\n                ...prev,\n                [id]: value\n            }));\n    };\n    const handleButtonClick = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            onSubmit(formData);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-4 items-center justify-center w-[80%] h-full\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-black text-2xl  tracking-[0] leading-[normal] whitespace-nowrap mb-4\",\n                children: formTitle\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                id: \"email\",\n                label: \"Email Address\",\n                type: \"email\",\n                placeholder: \"email@example.com\",\n                value: formData.email,\n                onChange: (value)=>handleInputChange(\"email\", value),\n                required: true\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                id: \"password\",\n                label: \"Password\",\n                type: \"password\",\n                placeholder: \"********\",\n                value: formData.password,\n                onChange: (value)=>handleInputChange(\"password\", value),\n                required: true\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                    onClick: handleButtonClick,\n                    text: formTitle,\n                    backgroundColor: \"bg-zinc-300\",\n                    textColor: \"text-white\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthForm, \"QwF/+cMZNgdn3OCU2d1+/f/DdbI=\");\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQytCO0FBQ1M7QUFDVztBQUNIO0FBQ2hELE1BQU1PLFdBQVc7UUFBQyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRTs7SUFDdkMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO1FBQUVVLE9BQU87UUFBSUMsVUFBVTtJQUFHO0lBRW5FLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR2IsK0NBQVFBLENBQUM7SUFHM0QsTUFBTWMsZUFBZTtRQUNuQixNQUFNQyxnQkFBZ0IsQ0FBQztRQUN2QixJQUFJLENBQUNQLFNBQVNFLEtBQUssRUFBRTtZQUNuQkssY0FBY0wsS0FBSyxHQUFHO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGVBQWVNLElBQUksQ0FBQ1IsU0FBU0UsS0FBSyxHQUFHO1lBQy9DSyxjQUFjTCxLQUFLLEdBQUc7UUFDeEI7UUFDQSxJQUFJLENBQUNGLFNBQVNHLFFBQVEsRUFBRTtZQUN0QkksY0FBY0osUUFBUSxHQUFHO1FBQzNCLE9BQU8sSUFBSUgsU0FBU0csUUFBUSxDQUFDTSxNQUFNLEdBQUcsR0FBRztZQUN2Q0YsY0FBY0osUUFBUSxHQUFHO1FBQzNCO1FBQ0FPLGNBQWNIO1FBQ2QsSUFBSUksT0FBT0MsSUFBSSxDQUFDTCxlQUFlRSxNQUFNLEdBQUcsR0FBRztZQUN6Q25CLDJFQUFPQSxDQUFDdUIsS0FBSyxDQUFDO1FBQ2hCO1FBQ0EsT0FBT0YsT0FBT0MsSUFBSSxDQUFDTCxlQUFlRSxNQUFNLEtBQUs7SUFDL0M7SUFDQSxNQUFNSyxvQkFBb0IsQ0FBQ0MsSUFBR0M7UUFDNUJmLFlBQVksQ0FBQ2dCLE9BQVU7Z0JBQUUsR0FBR0EsSUFBSTtnQkFBRSxDQUFDRixHQUFHLEVBQUVDO1lBQU07SUFDaEQ7SUFFQSxNQUFNRSxvQkFBb0IsQ0FBQ0M7UUFDekJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSWQsZ0JBQWdCO1lBQ2xCUCxTQUFTQztRQUNYO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3FCO1FBQ0NDLFdBQVU7UUFDVnZCLFVBQVVBOzswQkFFViw4REFBQ3dCO2dCQUFJRCxXQUFVOzBCQUNaeEI7Ozs7OzswQkFFSCw4REFBQ0osaURBQWFBO2dCQUNacUIsSUFBRztnQkFDSFMsT0FBTTtnQkFDTkMsTUFBSztnQkFDTEMsYUFBWTtnQkFDWlYsT0FBT2hCLFNBQVNFLEtBQUs7Z0JBQ3JCeUIsVUFBVSxDQUFDWCxRQUFRRixrQkFBa0IsU0FBUUU7Z0JBQzdDWSxRQUFROzs7Ozs7MEJBRVIsOERBQUNsQyxpREFBYUE7Z0JBQ2RxQixJQUFHO2dCQUNIUyxPQUFNO2dCQUNOQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaVixPQUFPaEIsU0FBU0csUUFBUTtnQkFDeEJ3QixVQUFVLENBQUNYLFFBQVFGLGtCQUFrQixZQUFZRTtnQkFDakRZLFFBQVE7Ozs7OzswQkFHViw4REFBQ0w7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUM3Qiw4Q0FBVUE7b0JBQ1RvQyxTQUFTWDtvQkFDVFksTUFBTWhDO29CQUNOaUMsaUJBQWlCO29CQUNqQkMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckI7R0F4RU1uQztLQUFBQTtBQTBFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hdXRoL0F1dGhGb3JtLmpzeD84ZTkwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhCdXR0b24sQXV0aEZvcm1GaWVsZCB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IEJpSGlkZSwgQmlTaG93IH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XHJcbmNvbnN0IEF1dGhGb3JtID0gKHsgZm9ybVRpdGxlLCBvblN1Ym1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7IGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KTtcclxuXHJcbiAgY29uc3QgW2lzUGFzc3dvcmRWaXNpYmxlLCBzZXRJc1Bhc3N3b3JkVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICBjb25zdCB2YWxpZGF0ZUZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdGb3JtRXJyb3JzID0ge307XHJcbiAgICBpZiAoIWZvcm1EYXRhLmVtYWlsKSB7XHJcbiAgICAgIG5ld0Zvcm1FcnJvcnMuZW1haWwgPSBcIkVtYWlsIGlzIHJlcXVpcmVkXCI7XHJcbiAgICB9IGVsc2UgaWYgKCEvXFxTK0BcXFMrXFwuXFxTKy8udGVzdChmb3JtRGF0YS5lbWFpbCkpIHtcclxuICAgICAgbmV3Rm9ybUVycm9ycy5lbWFpbCA9IFwiRW1haWwgaXMgaW52YWxpZFwiO1xyXG4gICAgfVxyXG4gICAgaWYgKCFmb3JtRGF0YS5wYXNzd29yZCkge1xyXG4gICAgICBuZXdGb3JtRXJyb3JzLnBhc3N3b3JkID0gXCJwYXNzd29yZCBpcyByZXF1aXJlZFwiO1xyXG4gICAgfSBlbHNlIGlmIChmb3JtRGF0YS5wYXNzd29yZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgIG5ld0Zvcm1FcnJvcnMucGFzc3dvcmQgPSBcInBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCI7XHJcbiAgICB9XHJcbiAgICBzZXRGb3JtRXJyb3JzKG5ld0Zvcm1FcnJvcnMpO1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKG5ld0Zvcm1FcnJvcnMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihcIlBsZWFzZSBmaWxsIGluIHRoZSByZXF1aXJlZCBmaWVsZHNcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobmV3Rm9ybUVycm9ycykubGVuZ3RoID09PSAwO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoaWQsdmFsdWUpID0+IHtcclxuICAgIHNldEZvcm1EYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbaWRdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgIG9uU3VibWl0KGZvcm1EYXRhKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm1cclxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1bODAlXSBoLWZ1bGxcIlxyXG4gICAgICBvblN1Ym1pdD17b25TdWJtaXR9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmxhY2sgdGV4dC0yeGwgIHRyYWNraW5nLVswXSBsZWFkaW5nLVtub3JtYWxdIHdoaXRlc3BhY2Utbm93cmFwIG1iLTRcIj5cclxuICAgICAgICB7Zm9ybVRpdGxlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEF1dGhGb3JtRmllbGRcclxuICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbEBleGFtcGxlLmNvbVwiXHJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpPT5oYW5kbGVJbnB1dENoYW5nZShcImVtYWlsXCIsdmFsdWUpfVxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QXV0aEZvcm1GaWVsZFxyXG4gICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCIqKioqKioqKlwiXHJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpPT5oYW5kbGVJbnB1dENoYW5nZShcInBhc3N3b3JkXCIsIHZhbHVlKX1cclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgIDxBdXRoQnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja31cclxuICAgICAgICAgIHRleHQ9e2Zvcm1UaXRsZX1cclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17XCJiZy16aW5jLTMwMFwifVxyXG4gICAgICAgICAgdGV4dENvbG9yPXtcInRleHQtd2hpdGVcIn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XHJcbiJdLCJuYW1lcyI6WyJtZXNzYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkF1dGhCdXR0b24iLCJBdXRoRm9ybUZpZWxkIiwiQmlIaWRlIiwiQmlTaG93IiwiQXV0aEZvcm0iLCJmb3JtVGl0bGUiLCJvblN1Ym1pdCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwiaXNQYXNzd29yZFZpc2libGUiLCJzZXRJc1Bhc3N3b3JkVmlzaWJsZSIsInZhbGlkYXRlRm9ybSIsIm5ld0Zvcm1FcnJvcnMiLCJ0ZXN0IiwibGVuZ3RoIiwic2V0Rm9ybUVycm9ycyIsIk9iamVjdCIsImtleXMiLCJlcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaWQiLCJ2YWx1ZSIsInByZXYiLCJoYW5kbGVCdXR0b25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJjbGFzc05hbWUiLCJkaXYiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJvbkNsaWNrIiwidGV4dCIsImJhY2tncm91bmRDb2xvciIsInRleHRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthForm.jsx\n"));

/***/ })

});