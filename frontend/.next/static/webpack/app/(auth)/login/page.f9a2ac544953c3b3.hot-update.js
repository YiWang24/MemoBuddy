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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst AuthForm = (param)=>{\n    let { formTitle, onSubmit } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [isPasswordVisible, setIsPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const togglePasswordVisibility = ()=>{\n        setIsPasswordVisible(!isPasswordVisible);\n    };\n    const validateForm = ()=>{\n        const newFormErrors = {};\n        if (!formData.email) {\n            newFormErrors.email = \"Email is required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n            newFormErrors.email = \"Email is invalid\";\n        }\n        if (!formData.password) {\n            newFormErrors.password = \"password is required\";\n        } else if (formData.password.length < 6) {\n            newFormErrors.password = \"password must be at least 6 characters\";\n        }\n        setFormErrors(newFormErrors);\n        if (Object.keys(newFormErrors).length > 0) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Please fill in the required fields\");\n        }\n        return Object.keys(newFormErrors).length === 0;\n    };\n    const handleInputChange = (id, value)=>{\n        setFormData((prev)=>({\n                ...prev,\n                [id]: value\n            }));\n    };\n    const handleButtonClick = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            onSubmit(formData);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-4 items-center justify-center w-[80%] h-full\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-black text-2xl  tracking-[0] leading-[normal] whitespace-nowrap mb-4\",\n                children: formTitle\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                id: \"email\",\n                label: \"Email Address\",\n                type: \"email\",\n                placeholder: \"email@example.com\",\n                value: formData.email,\n                onChange: (value)=>handleInputChange(\"email\", value),\n                required: true\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                id: \"password\",\n                label: \"Password\",\n                type: isPasswordVisible ? \"text\" : \"password\",\n                placeholder: \"********\",\n                value: formData.password\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                    onClick: handleButtonClick,\n                    text: formTitle,\n                    backgroundColor: \"bg-zinc-300\",\n                    textColor: \"text-white\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthForm, \"WnNx75PGVxWZ0RIxOo++ob8YcPY=\");\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQytCO0FBQ1M7QUFDVztBQUNIO0FBQ2hELE1BQU1PLFdBQVc7UUFBQyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRTs7SUFDdkMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO1FBQUVVLE9BQU87UUFBSUMsVUFBVTtJQUFHO0lBQ25FLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sQ0FBQ2MsbUJBQW1CQyxxQkFBcUIsR0FBR2YsK0NBQVFBLENBQUM7SUFDM0QsTUFBTWdCLDJCQUEyQjtRQUMvQkQscUJBQXFCLENBQUNEO0lBQ3hCO0lBRUEsTUFBTUcsZUFBZTtRQUNuQixNQUFNQyxnQkFBZ0IsQ0FBQztRQUN2QixJQUFJLENBQUNWLFNBQVNFLEtBQUssRUFBRTtZQUNuQlEsY0FBY1IsS0FBSyxHQUFHO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGVBQWVTLElBQUksQ0FBQ1gsU0FBU0UsS0FBSyxHQUFHO1lBQy9DUSxjQUFjUixLQUFLLEdBQUc7UUFDeEI7UUFDQSxJQUFJLENBQUNGLFNBQVNHLFFBQVEsRUFBRTtZQUN0Qk8sY0FBY1AsUUFBUSxHQUFHO1FBQzNCLE9BQU8sSUFBSUgsU0FBU0csUUFBUSxDQUFDUyxNQUFNLEdBQUcsR0FBRztZQUN2Q0YsY0FBY1AsUUFBUSxHQUFHO1FBQzNCO1FBQ0FFLGNBQWNLO1FBQ2QsSUFBSUcsT0FBT0MsSUFBSSxDQUFDSixlQUFlRSxNQUFNLEdBQUcsR0FBRztZQUN6Q3RCLDJFQUFPQSxDQUFDeUIsS0FBSyxDQUFDO1FBQ2hCO1FBQ0EsT0FBT0YsT0FBT0MsSUFBSSxDQUFDSixlQUFlRSxNQUFNLEtBQUs7SUFDL0M7SUFDQSxNQUFNSSxvQkFBb0IsQ0FBQ0MsSUFBR0M7UUFDNUJqQixZQUFZLENBQUNrQixPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0YsR0FBRyxFQUFFQztZQUFNO0lBQ2hEO0lBRUEsTUFBTUUsb0JBQW9CLENBQUNDO1FBQ3pCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUliLGdCQUFnQjtZQUNsQlYsU0FBU0M7UUFDWDtJQUNGO0lBRUEscUJBQ0UsOERBQUN1QjtRQUNDQyxXQUFVO1FBQ1Z6QixVQUFVQTs7MEJBRVYsOERBQUMwQjtnQkFBSUQsV0FBVTswQkFDWjFCOzs7Ozs7MEJBZ0RILDhEQUFDSixpREFBYUE7Z0JBQ1p1QixJQUFHO2dCQUNIUyxPQUFNO2dCQUNOQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaVixPQUFPbEIsU0FBU0UsS0FBSztnQkFDckIyQixVQUFVLENBQUNYLFFBQVFGLGtCQUFrQixTQUFRRTtnQkFDN0NZLFFBQVE7Ozs7OzswQkFFUiw4REFBQ3BDLGlEQUFhQTtnQkFDZHVCLElBQUc7Z0JBQ0hTLE9BQU07Z0JBQ05DLE1BQU1yQixvQkFBb0IsU0FBUztnQkFDbkNzQixhQUFZO2dCQUNaVixPQUFPbEIsU0FBU0csUUFBUTs7Ozs7OzBCQUkxQiw4REFBQ3NCO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDL0IsOENBQVVBO29CQUNUc0MsU0FBU1g7b0JBQ1RZLE1BQU1sQztvQkFDTm1DLGlCQUFpQjtvQkFDakJDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCO0dBdkhNckM7S0FBQUE7QUF5SE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9BdXRoRm9ybS5qc3g/OGU5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRoQnV0dG9uLEF1dGhGb3JtRmllbGQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBCaUhpZGUsIEJpU2hvdyB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xyXG5jb25zdCBBdXRoRm9ybSA9ICh7IGZvcm1UaXRsZSwgb25TdWJtaXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoeyBlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2Zvcm1FcnJvcnMsIHNldEZvcm1FcnJvcnNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtpc1Bhc3N3b3JkVmlzaWJsZSwgc2V0SXNQYXNzd29yZFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgIHNldElzUGFzc3dvcmRWaXNpYmxlKCFpc1Bhc3N3b3JkVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Rm9ybUVycm9ycyA9IHt9O1xyXG4gICAgaWYgKCFmb3JtRGF0YS5lbWFpbCkge1xyXG4gICAgICBuZXdGb3JtRXJyb3JzLmVtYWlsID0gXCJFbWFpbCBpcyByZXF1aXJlZFwiO1xyXG4gICAgfSBlbHNlIGlmICghL1xcUytAXFxTK1xcLlxcUysvLnRlc3QoZm9ybURhdGEuZW1haWwpKSB7XHJcbiAgICAgIG5ld0Zvcm1FcnJvcnMuZW1haWwgPSBcIkVtYWlsIGlzIGludmFsaWRcIjtcclxuICAgIH1cclxuICAgIGlmICghZm9ybURhdGEucGFzc3dvcmQpIHtcclxuICAgICAgbmV3Rm9ybUVycm9ycy5wYXNzd29yZCA9IFwicGFzc3dvcmQgaXMgcmVxdWlyZWRcIjtcclxuICAgIH0gZWxzZSBpZiAoZm9ybURhdGEucGFzc3dvcmQubGVuZ3RoIDwgNikge1xyXG4gICAgICBuZXdGb3JtRXJyb3JzLnBhc3N3b3JkID0gXCJwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyc1wiO1xyXG4gICAgfVxyXG4gICAgc2V0Rm9ybUVycm9ycyhuZXdGb3JtRXJyb3JzKTtcclxuICAgIGlmIChPYmplY3Qua2V5cyhuZXdGb3JtRXJyb3JzKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQbGVhc2UgZmlsbCBpbiB0aGUgcmVxdWlyZWQgZmllbGRzXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld0Zvcm1FcnJvcnMpLmxlbmd0aCA9PT0gMDtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGlkLHZhbHVlKSA9PiB7XHJcbiAgICBzZXRGb3JtRGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgW2lkXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh2YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICBvblN1Ym1pdChmb3JtRGF0YSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtXHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctWzgwJV0gaC1mdWxsXCJcclxuICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsYWNrIHRleHQtMnhsICB0cmFja2luZy1bMF0gbGVhZGluZy1bbm9ybWFsXSB3aGl0ZXNwYWNlLW5vd3JhcCBtYi00XCI+XHJcbiAgICAgICAge2Zvcm1UaXRsZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgZ2FwLTIgdy1mdWxsXCI+XHJcbiAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsICAgZm9udC1ub3JtYWwgdGV4dC1bIzY2NjY2Nl0gdGV4dC1iYXNlIHRyYWNraW5nLVswXSBsZWFkaW5nLVtub3JtYWxdIHAtMCBwbC0wXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBFbWFpbCBBZGRyZXNzXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbEBleGFtcGxlLmNvbVwiXHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsIHx8IFwiXCJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHAtMyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIHtmb3JtRXJyb3JzLmVtYWlsICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtc20gbXQtMVwiPntmb3JtRXJyb3JzLmVtYWlsfTwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGlubGluZS1mbGV4ICBmb250LW5vcm1hbCB0ZXh0LVsjNjY2NjY2XSB0ZXh0LWJhc2UgdHJhY2tpbmctWzBdIGxlYWRpbmctW25vcm1hbF0gcC0wIHBsLTBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuPlBhc3N3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzUGFzc3dvcmRWaXNpYmxlID8gPEJpU2hvdyAvPiA6IDxCaUhpZGUgLz59e1wiIFwifVxyXG4gICAgICAgICAgICB7aXNQYXNzd29yZFZpc2libGUgPyBcIlNob3dcIiA6IFwiSGlkZVwifVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKioqKioqKipcIlxyXG4gICAgICAgICAgdHlwZT17aXNQYXNzd29yZFZpc2libGUgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZCB8fCBcIlwifVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBwLTMgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7Zm9ybUVycm9ycy5wYXNzd29yZCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtIG10LTFcIj57Zm9ybUVycm9ycy5wYXNzd29yZH08L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDxBdXRoRm9ybUZpZWxkXHJcbiAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxAZXhhbXBsZS5jb21cIlxyXG4gICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cclxuICAgICAgICBvbkNoYW5nZT17KHZhbHVlKT0+aGFuZGxlSW5wdXRDaGFuZ2UoXCJlbWFpbFwiLHZhbHVlKX1cclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEF1dGhGb3JtRmllbGRcclxuICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICB0eXBlPXtpc1Bhc3N3b3JkVmlzaWJsZSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiKioqKioqKipcIlxyXG4gICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cclxuICAgICAgICBcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICA8QXV0aEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICB0ZXh0PXtmb3JtVGl0bGV9XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e1wiYmctemluYy0zMDBcIn1cclxuICAgICAgICAgIHRleHRDb2xvcj17XCJ0ZXh0LXdoaXRlXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xyXG4iXSwibmFtZXMiOlsibWVzc2FnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJBdXRoQnV0dG9uIiwiQXV0aEZvcm1GaWVsZCIsIkJpSGlkZSIsIkJpU2hvdyIsIkF1dGhGb3JtIiwiZm9ybVRpdGxlIiwib25TdWJtaXQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1FcnJvcnMiLCJzZXRGb3JtRXJyb3JzIiwiaXNQYXNzd29yZFZpc2libGUiLCJzZXRJc1Bhc3N3b3JkVmlzaWJsZSIsInRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSIsInZhbGlkYXRlRm9ybSIsIm5ld0Zvcm1FcnJvcnMiLCJ0ZXN0IiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsImVycm9yIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJpZCIsInZhbHVlIiwicHJldiIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImNsYXNzTmFtZSIsImRpdiIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsIm9uQ2xpY2siLCJ0ZXh0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthForm.jsx\n"));

/***/ })

});