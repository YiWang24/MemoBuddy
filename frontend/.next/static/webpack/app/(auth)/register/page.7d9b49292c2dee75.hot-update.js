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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst AuthForm = (param)=>{\n    let { formTitle, onSubmit } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [isPasswordVisible, setIsPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const togglePasswordVisibility = ()=>{\n        setIsPasswordVisible(!isPasswordVisible);\n    };\n    const validateForm = ()=>{\n        const newFormErrors = {};\n        if (!formData.email) {\n            newFormErrors.email = \"Email is required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n            newFormErrors.email = \"Email is invalid\";\n        }\n        if (!formData.password) {\n            newFormErrors.password = \"password is required\";\n        } else if (formData.password.length < 6) {\n            newFormErrors.password = \"password must be at least 6 characters\";\n        }\n        setFormErrors(newFormErrors);\n        if (Object.keys(newFormErrors).length > 0) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Please fill in the required fields\");\n        }\n        return Object.keys(newFormErrors).length === 0;\n    };\n    const handleInputChange = (id, value)=>{\n        setFormData((prev)=>({\n                ...prev,\n                [id]: value\n            }));\n    };\n    const handleButtonClick = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            onSubmit(formData);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-4 items-center justify-center w-[80%] h-full\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-black text-2xl  tracking-[0] leading-[normal] whitespace-nowrap mb-4\",\n                children: formTitle\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                id: \"email\",\n                label: \"Email Address\",\n                type: \"email\",\n                placeholder: \"email@example.com\",\n                value: formData.email,\n                onChange: (value)=>handleInputChange(\"email\", value),\n                required: true\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {}, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                    onClick: handleButtonClick,\n                    text: formTitle,\n                    backgroundColor: \"bg-zinc-300\",\n                    textColor: \"text-white\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthForm, \"WnNx75PGVxWZ0RIxOo++ob8YcPY=\");\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQytCO0FBQ1M7QUFDVztBQUNIO0FBQ2hELE1BQU1PLFdBQVc7UUFBQyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRTs7SUFDdkMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO1FBQUVVLE9BQU87UUFBSUMsVUFBVTtJQUFHO0lBQ25FLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sQ0FBQ2MsbUJBQW1CQyxxQkFBcUIsR0FBR2YsK0NBQVFBLENBQUM7SUFDM0QsTUFBTWdCLDJCQUEyQjtRQUMvQkQscUJBQXFCLENBQUNEO0lBQ3hCO0lBRUEsTUFBTUcsZUFBZTtRQUNuQixNQUFNQyxnQkFBZ0IsQ0FBQztRQUN2QixJQUFJLENBQUNWLFNBQVNFLEtBQUssRUFBRTtZQUNuQlEsY0FBY1IsS0FBSyxHQUFHO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGVBQWVTLElBQUksQ0FBQ1gsU0FBU0UsS0FBSyxHQUFHO1lBQy9DUSxjQUFjUixLQUFLLEdBQUc7UUFDeEI7UUFDQSxJQUFJLENBQUNGLFNBQVNHLFFBQVEsRUFBRTtZQUN0Qk8sY0FBY1AsUUFBUSxHQUFHO1FBQzNCLE9BQU8sSUFBSUgsU0FBU0csUUFBUSxDQUFDUyxNQUFNLEdBQUcsR0FBRztZQUN2Q0YsY0FBY1AsUUFBUSxHQUFHO1FBQzNCO1FBQ0FFLGNBQWNLO1FBQ2QsSUFBSUcsT0FBT0MsSUFBSSxDQUFDSixlQUFlRSxNQUFNLEdBQUcsR0FBRztZQUN6Q3RCLDJFQUFPQSxDQUFDeUIsS0FBSyxDQUFDO1FBQ2hCO1FBQ0EsT0FBT0YsT0FBT0MsSUFBSSxDQUFDSixlQUFlRSxNQUFNLEtBQUs7SUFDL0M7SUFDQSxNQUFNSSxvQkFBb0IsQ0FBQ0MsSUFBR0M7UUFDNUJqQixZQUFZLENBQUNrQixPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0YsR0FBRyxFQUFFQztZQUFNO0lBQ2hEO0lBRUEsTUFBTUUsb0JBQW9CLENBQUNDO1FBQ3pCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUliLGdCQUFnQjtZQUNsQlYsU0FBU0M7UUFDWDtJQUNGO0lBRUEscUJBQ0UsOERBQUN1QjtRQUNDQyxXQUFVO1FBQ1Z6QixVQUFVQTs7MEJBRVYsOERBQUMwQjtnQkFBSUQsV0FBVTswQkFDWjFCOzs7Ozs7MEJBZ0RILDhEQUFDSixpREFBYUE7Z0JBQ1p1QixJQUFHO2dCQUNIUyxPQUFNO2dCQUNOQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaVixPQUFPbEIsU0FBU0UsS0FBSztnQkFDckIyQixVQUFVLENBQUNYLFFBQVFGLGtCQUFrQixTQUFRRTtnQkFDN0NZLFFBQVE7Ozs7OzswQkFFUiw4REFBQ3BDLGlEQUFhQTs7Ozs7MEJBSWhCLDhEQUFDK0I7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUMvQiw4Q0FBVUE7b0JBQ1RzQyxTQUFTWDtvQkFDVFksTUFBTWxDO29CQUNObUMsaUJBQWlCO29CQUNqQkMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckI7R0FsSE1yQztLQUFBQTtBQW9ITiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hdXRoL0F1dGhGb3JtLmpzeD84ZTkwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhCdXR0b24sQXV0aEZvcm1GaWVsZCB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IEJpSGlkZSwgQmlTaG93IH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XHJcbmNvbnN0IEF1dGhGb3JtID0gKHsgZm9ybVRpdGxlLCBvblN1Ym1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7IGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KTtcclxuICBjb25zdCBbZm9ybUVycm9ycywgc2V0Rm9ybUVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2lzUGFzc3dvcmRWaXNpYmxlLCBzZXRJc1Bhc3N3b3JkVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNQYXNzd29yZFZpc2libGUoIWlzUGFzc3dvcmRWaXNpYmxlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB2YWxpZGF0ZUZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdGb3JtRXJyb3JzID0ge307XHJcbiAgICBpZiAoIWZvcm1EYXRhLmVtYWlsKSB7XHJcbiAgICAgIG5ld0Zvcm1FcnJvcnMuZW1haWwgPSBcIkVtYWlsIGlzIHJlcXVpcmVkXCI7XHJcbiAgICB9IGVsc2UgaWYgKCEvXFxTK0BcXFMrXFwuXFxTKy8udGVzdChmb3JtRGF0YS5lbWFpbCkpIHtcclxuICAgICAgbmV3Rm9ybUVycm9ycy5lbWFpbCA9IFwiRW1haWwgaXMgaW52YWxpZFwiO1xyXG4gICAgfVxyXG4gICAgaWYgKCFmb3JtRGF0YS5wYXNzd29yZCkge1xyXG4gICAgICBuZXdGb3JtRXJyb3JzLnBhc3N3b3JkID0gXCJwYXNzd29yZCBpcyByZXF1aXJlZFwiO1xyXG4gICAgfSBlbHNlIGlmIChmb3JtRGF0YS5wYXNzd29yZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgIG5ld0Zvcm1FcnJvcnMucGFzc3dvcmQgPSBcInBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCI7XHJcbiAgICB9XHJcbiAgICBzZXRGb3JtRXJyb3JzKG5ld0Zvcm1FcnJvcnMpO1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKG5ld0Zvcm1FcnJvcnMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihcIlBsZWFzZSBmaWxsIGluIHRoZSByZXF1aXJlZCBmaWVsZHNcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobmV3Rm9ybUVycm9ycykubGVuZ3RoID09PSAwO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoaWQsdmFsdWUpID0+IHtcclxuICAgIHNldEZvcm1EYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbaWRdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgIG9uU3VibWl0KGZvcm1EYXRhKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm1cclxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1bODAlXSBoLWZ1bGxcIlxyXG4gICAgICBvblN1Ym1pdD17b25TdWJtaXR9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmxhY2sgdGV4dC0yeGwgIHRyYWNraW5nLVswXSBsZWFkaW5nLVtub3JtYWxdIHdoaXRlc3BhY2Utbm93cmFwIG1iLTRcIj5cclxuICAgICAgICB7Zm9ybVRpdGxlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCBnYXAtMiB3LWZ1bGxcIj5cclxuICAgICAgICA8bGFiZWxcclxuICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgICBmb250LW5vcm1hbCB0ZXh0LVsjNjY2NjY2XSB0ZXh0LWJhc2UgdHJhY2tpbmctWzBdIGxlYWRpbmctW25vcm1hbF0gcC0wIHBsLTBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEVtYWlsIEFkZHJlc3NcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsQGV4YW1wbGUuY29tXCJcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWwgfHwgXCJcIn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgcC0zIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Zvcm1FcnJvcnMuZW1haWwgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbSBtdC0xXCI+e2Zvcm1FcnJvcnMuZW1haWx9PC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgaW5saW5lLWZsZXggIGZvbnQtbm9ybWFsIHRleHQtWyM2NjY2NjZdIHRleHQtYmFzZSB0cmFja2luZy1bMF0gbGVhZGluZy1bbm9ybWFsXSBwLTAgcGwtMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4+UGFzc3dvcmQ8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNQYXNzd29yZFZpc2libGUgPyA8QmlTaG93IC8+IDogPEJpSGlkZSAvPn17XCIgXCJ9XHJcbiAgICAgICAgICAgIHtpc1Bhc3N3b3JkVmlzaWJsZSA/IFwiU2hvd1wiIDogXCJIaWRlXCJ9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCIqKioqKioqKlwiXHJcbiAgICAgICAgICB0eXBlPXtpc1Bhc3N3b3JkVmlzaWJsZSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkIHx8IFwiXCJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHAtMyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIHtmb3JtRXJyb3JzLnBhc3N3b3JkICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtc20gbXQtMVwiPntmb3JtRXJyb3JzLnBhc3N3b3JkfTwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPEF1dGhGb3JtRmllbGRcclxuICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbEBleGFtcGxlLmNvbVwiXHJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpPT5oYW5kbGVJbnB1dENoYW5nZShcImVtYWlsXCIsdmFsdWUpfVxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QXV0aEZvcm1GaWVsZFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgIDxBdXRoQnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja31cclxuICAgICAgICAgIHRleHQ9e2Zvcm1UaXRsZX1cclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17XCJiZy16aW5jLTMwMFwifVxyXG4gICAgICAgICAgdGV4dENvbG9yPXtcInRleHQtd2hpdGVcIn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XHJcbiJdLCJuYW1lcyI6WyJtZXNzYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkF1dGhCdXR0b24iLCJBdXRoRm9ybUZpZWxkIiwiQmlIaWRlIiwiQmlTaG93IiwiQXV0aEZvcm0iLCJmb3JtVGl0bGUiLCJvblN1Ym1pdCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwiZm9ybUVycm9ycyIsInNldEZvcm1FcnJvcnMiLCJpc1Bhc3N3b3JkVmlzaWJsZSIsInNldElzUGFzc3dvcmRWaXNpYmxlIiwidG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5IiwidmFsaWRhdGVGb3JtIiwibmV3Rm9ybUVycm9ycyIsInRlc3QiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwiZXJyb3IiLCJoYW5kbGVJbnB1dENoYW5nZSIsImlkIiwidmFsdWUiLCJwcmV2IiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiY2xhc3NOYW1lIiwiZGl2IiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwib25DbGljayIsInRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0Q29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthForm.jsx\n"));

/***/ })

});