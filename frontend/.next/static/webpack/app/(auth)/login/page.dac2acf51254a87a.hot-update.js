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

/***/ "(app-pages-browser)/./src/components/auth/AuthForm.jsx":
/*!******************************************!*\
  !*** ./src/components/auth/AuthForm.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst AuthForm = (param)=>{\n    let { formTitle, onSubmit } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [isPasswordVisible, setIsPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const togglePasswordVisibility = ()=>{\n        setIsPasswordVisible(!isPasswordVisible);\n    };\n    const validateForm = ()=>{\n        const newFormErrors = {};\n        if (!formData.email) {\n            newFormErrors.email = \"Email is required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n            newFormErrors.email = \"Email is invalid\";\n        }\n        if (!formData.password) {\n            newFormErrors.password = \"password is required\";\n        } else if (formData.password.length < 6) {\n            newFormErrors.password = \"password must be at least 6 characters\";\n        }\n        setFormErrors(newFormErrors);\n        if (Object.keys(newFormErrors).length > 0) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Please fill in the required fields\");\n        }\n        return Object.keys(newFormErrors).length === 0;\n    };\n    const handleInputChange = (e)=>{\n        setFormData((prev)=>({\n                ...prev,\n                [id]: value\n            }));\n    };\n    const handleButtonClick = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            onSubmit(formData);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-4 items-center justify-center w-[80%] h-full\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-black text-2xl  tracking-[0] leading-[normal] whitespace-nowrap mb-4\",\n                children: formTitle\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                id: \"email\",\n                label: \"Email Address\",\n                type: \"email\",\n                placeholder: \"email@example.com\",\n                value: formData.email,\n                onChange: (value1)=>handleInputChange(\"email\", value1),\n                required: true\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                    onClick: handleButtonClick,\n                    text: formTitle,\n                    backgroundColor: \"bg-zinc-300\",\n                    textColor: \"text-white\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthForm, \"WnNx75PGVxWZ0RIxOo++ob8YcPY=\");\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQytCO0FBQ1M7QUFDVztBQUNIO0FBQ2hELE1BQU1PLFdBQVc7UUFBQyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRTs7SUFDdkMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO1FBQUVVLE9BQU87UUFBSUMsVUFBVTtJQUFHO0lBQ25FLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sQ0FBQ2MsbUJBQW1CQyxxQkFBcUIsR0FBR2YsK0NBQVFBLENBQUM7SUFDM0QsTUFBTWdCLDJCQUEyQjtRQUMvQkQscUJBQXFCLENBQUNEO0lBQ3hCO0lBRUEsTUFBTUcsZUFBZTtRQUNuQixNQUFNQyxnQkFBZ0IsQ0FBQztRQUN2QixJQUFJLENBQUNWLFNBQVNFLEtBQUssRUFBRTtZQUNuQlEsY0FBY1IsS0FBSyxHQUFHO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGVBQWVTLElBQUksQ0FBQ1gsU0FBU0UsS0FBSyxHQUFHO1lBQy9DUSxjQUFjUixLQUFLLEdBQUc7UUFDeEI7UUFDQSxJQUFJLENBQUNGLFNBQVNHLFFBQVEsRUFBRTtZQUN0Qk8sY0FBY1AsUUFBUSxHQUFHO1FBQzNCLE9BQU8sSUFBSUgsU0FBU0csUUFBUSxDQUFDUyxNQUFNLEdBQUcsR0FBRztZQUN2Q0YsY0FBY1AsUUFBUSxHQUFHO1FBQzNCO1FBQ0FFLGNBQWNLO1FBQ2QsSUFBSUcsT0FBT0MsSUFBSSxDQUFDSixlQUFlRSxNQUFNLEdBQUcsR0FBRztZQUN6Q3RCLDJFQUFPQSxDQUFDeUIsS0FBSyxDQUFDO1FBQ2hCO1FBQ0EsT0FBT0YsT0FBT0MsSUFBSSxDQUFDSixlQUFlRSxNQUFNLEtBQUs7SUFDL0M7SUFDQSxNQUFNSSxvQkFBb0IsQ0FBQ0M7UUFDekJoQixZQUFZLENBQUNpQixPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0MsR0FBRyxFQUFFQztZQUFNO0lBQ2hEO0lBRUEsTUFBTUMsb0JBQW9CLENBQUNKO1FBQ3pCQSxFQUFFSyxjQUFjO1FBQ2hCLElBQUliLGdCQUFnQjtZQUNsQlYsU0FBU0M7UUFDWDtJQUNGO0lBRUEscUJBQ0UsOERBQUN1QjtRQUNDQyxXQUFVO1FBQ1Z6QixVQUFVQTs7MEJBRVYsOERBQUMwQjtnQkFBSUQsV0FBVTswQkFDWjFCOzs7Ozs7MEJBZ0RILDhEQUFDSixpREFBYUE7Z0JBQ1p5QixJQUFHO2dCQUNITyxPQUFNO2dCQUNOQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaUixPQUFPcEIsU0FBU0UsS0FBSztnQkFDckIyQixVQUFVLENBQUNULFNBQVFKLGtCQUFrQixTQUFRSTtnQkFDN0NVLFFBQVE7Ozs7OzswQkFHViw4REFBQ0w7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUMvQiw4Q0FBVUE7b0JBQ1RzQyxTQUFTVjtvQkFDVFcsTUFBTWxDO29CQUNObUMsaUJBQWlCO29CQUNqQkMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckI7R0EvR01yQztLQUFBQTtBQWlITiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hdXRoL0F1dGhGb3JtLmpzeD84ZTkwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhCdXR0b24sQXV0aEZvcm1GaWVsZCB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IEJpSGlkZSwgQmlTaG93IH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XHJcbmNvbnN0IEF1dGhGb3JtID0gKHsgZm9ybVRpdGxlLCBvblN1Ym1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7IGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KTtcclxuICBjb25zdCBbZm9ybUVycm9ycywgc2V0Rm9ybUVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2lzUGFzc3dvcmRWaXNpYmxlLCBzZXRJc1Bhc3N3b3JkVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNQYXNzd29yZFZpc2libGUoIWlzUGFzc3dvcmRWaXNpYmxlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB2YWxpZGF0ZUZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdGb3JtRXJyb3JzID0ge307XHJcbiAgICBpZiAoIWZvcm1EYXRhLmVtYWlsKSB7XHJcbiAgICAgIG5ld0Zvcm1FcnJvcnMuZW1haWwgPSBcIkVtYWlsIGlzIHJlcXVpcmVkXCI7XHJcbiAgICB9IGVsc2UgaWYgKCEvXFxTK0BcXFMrXFwuXFxTKy8udGVzdChmb3JtRGF0YS5lbWFpbCkpIHtcclxuICAgICAgbmV3Rm9ybUVycm9ycy5lbWFpbCA9IFwiRW1haWwgaXMgaW52YWxpZFwiO1xyXG4gICAgfVxyXG4gICAgaWYgKCFmb3JtRGF0YS5wYXNzd29yZCkge1xyXG4gICAgICBuZXdGb3JtRXJyb3JzLnBhc3N3b3JkID0gXCJwYXNzd29yZCBpcyByZXF1aXJlZFwiO1xyXG4gICAgfSBlbHNlIGlmIChmb3JtRGF0YS5wYXNzd29yZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgIG5ld0Zvcm1FcnJvcnMucGFzc3dvcmQgPSBcInBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCI7XHJcbiAgICB9XHJcbiAgICBzZXRGb3JtRXJyb3JzKG5ld0Zvcm1FcnJvcnMpO1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKG5ld0Zvcm1FcnJvcnMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihcIlBsZWFzZSBmaWxsIGluIHRoZSByZXF1aXJlZCBmaWVsZHNcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobmV3Rm9ybUVycm9ycykubGVuZ3RoID09PSAwO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Rm9ybURhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIFtpZF06IHZhbHVlIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgb25TdWJtaXQoZm9ybURhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybVxyXG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LVs4MCVdIGgtZnVsbFwiXHJcbiAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ibGFjayB0ZXh0LTJ4bCAgdHJhY2tpbmctWzBdIGxlYWRpbmctW25vcm1hbF0gd2hpdGVzcGFjZS1ub3dyYXAgbWItNFwiPlxyXG4gICAgICAgIHtmb3JtVGl0bGV9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IGdhcC0yIHctZnVsbFwiPlxyXG4gICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCAgIGZvbnQtbm9ybWFsIHRleHQtWyM2NjY2NjZdIHRleHQtYmFzZSB0cmFja2luZy1bMF0gbGVhZGluZy1bbm9ybWFsXSBwLTAgcGwtMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRW1haWwgQWRkcmVzc1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxAZXhhbXBsZS5jb21cIlxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbCB8fCBcIlwifVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBwLTMgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7Zm9ybUVycm9ycy5lbWFpbCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtIG10LTFcIj57Zm9ybUVycm9ycy5lbWFpbH08L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8bGFiZWxcclxuICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBpbmxpbmUtZmxleCAgZm9udC1ub3JtYWwgdGV4dC1bIzY2NjY2Nl0gdGV4dC1iYXNlIHRyYWNraW5nLVswXSBsZWFkaW5nLVtub3JtYWxdIHAtMCBwbC0wXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3Bhbj5QYXNzd29yZDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZFZpc2liaWxpdHl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc1Bhc3N3b3JkVmlzaWJsZSA/IDxCaVNob3cgLz4gOiA8QmlIaWRlIC8+fXtcIiBcIn1cclxuICAgICAgICAgICAge2lzUGFzc3dvcmRWaXNpYmxlID8gXCJTaG93XCIgOiBcIkhpZGVcIn1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIioqKioqKioqXCJcclxuICAgICAgICAgIHR5cGU9e2lzUGFzc3dvcmRWaXNpYmxlID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmQgfHwgXCJcIn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgcC0zIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Zvcm1FcnJvcnMucGFzc3dvcmQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbSBtdC0xXCI+e2Zvcm1FcnJvcnMucGFzc3dvcmR9PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8QXV0aEZvcm1GaWVsZFxyXG4gICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsQGV4YW1wbGUuY29tXCJcclxuICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XHJcbiAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSk9PmhhbmRsZUlucHV0Q2hhbmdlKFwiZW1haWxcIix2YWx1ZSl9XHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICA8QXV0aEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICB0ZXh0PXtmb3JtVGl0bGV9XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e1wiYmctemluYy0zMDBcIn1cclxuICAgICAgICAgIHRleHRDb2xvcj17XCJ0ZXh0LXdoaXRlXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xyXG4iXSwibmFtZXMiOlsibWVzc2FnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJBdXRoQnV0dG9uIiwiQXV0aEZvcm1GaWVsZCIsIkJpSGlkZSIsIkJpU2hvdyIsIkF1dGhGb3JtIiwiZm9ybVRpdGxlIiwib25TdWJtaXQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1FcnJvcnMiLCJzZXRGb3JtRXJyb3JzIiwiaXNQYXNzd29yZFZpc2libGUiLCJzZXRJc1Bhc3N3b3JkVmlzaWJsZSIsInRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSIsInZhbGlkYXRlRm9ybSIsIm5ld0Zvcm1FcnJvcnMiLCJ0ZXN0IiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsImVycm9yIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwicHJldiIsImlkIiwidmFsdWUiLCJoYW5kbGVCdXR0b25DbGljayIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImNsYXNzTmFtZSIsImRpdiIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsIm9uQ2xpY2siLCJ0ZXh0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthForm.jsx\n"));

/***/ })

});