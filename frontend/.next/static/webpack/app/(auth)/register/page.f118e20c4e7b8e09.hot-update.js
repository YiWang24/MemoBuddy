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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst AuthForm = (param)=>{\n    let { formTitle, onSubmit } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const handleValidInput = (id, value)=>{\n        setFormData((prev)=>({\n                ...prev,\n                [id]: value\n            }));\n    };\n    const handleButtonClick = (e)=>{\n        e.preventDefault();\n        const isFormValid = Object.values(formData).every((value)=>value !== null);\n        if (!isFormValid) {\n            onSubmit(formData);\n        }\n        e;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-4 items-center justify-center w-[80%] h-full\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-black text-2xl  tracking-[0] leading-[normal] whitespace-nowrap mb-4\",\n                children: formTitle\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                id: \"email\",\n                label: \"Email Address\",\n                type: \"email\",\n                placeholder: \"email@example.com\",\n                value: formData.email,\n                onValidInput: handleValidInput,\n                required: true\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                id: \"password\",\n                label: \"Password\",\n                type: \"password\",\n                placeholder: \"********\",\n                value: formData.password,\n                onValidInput: handleValidInput,\n                required: true\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                    onClick: handleButtonClick,\n                    text: formTitle,\n                    backgroundColor: \"bg-zinc-300\",\n                    textColor: \"text-white\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthForm, \"S/PMgPc7smM3/aThXBDA0mkgvj4=\");\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDd0M7QUFDWTtBQUVwRCxNQUFNSSxXQUFXO1FBQUMsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUFFUSxPQUFPO1FBQUlDLFVBQVU7SUFBRztJQUVuRSxNQUFNQyxtQkFBbUIsQ0FBQ0MsSUFBSUM7UUFDNUJMLFlBQVksQ0FBQ00sT0FBVTtnQkFBRSxHQUFHQSxJQUFJO2dCQUFFLENBQUNGLEdBQUcsRUFBRUM7WUFBTTtJQUVoRDtJQUVBLE1BQU1FLG9CQUFvQixDQUFDQztRQUN6QkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxjQUFjQyxPQUFPQyxNQUFNLENBQUNiLFVBQVVjLEtBQUssQ0FBQyxDQUFDUixRQUFVQSxVQUFVO1FBQ3ZFLElBQUksQ0FBQ0ssYUFBYTtZQUNsQlosU0FBU0M7UUFDVDtRQUNBUztJQUNGO0lBRUEscUJBQ0UsOERBQUNNO1FBQ0NDLFdBQVU7UUFDVmpCLFVBQVVBOzswQkFFViw4REFBQ2tCO2dCQUFJRCxXQUFVOzBCQUNabEI7Ozs7OzswQkFFSCw4REFBQ0YsaURBQWFBO2dCQUNaUyxJQUFHO2dCQUNIYSxPQUFNO2dCQUNOQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaZCxPQUFPTixTQUFTRSxLQUFLO2dCQUNyQm1CLGNBQWNqQjtnQkFDZGtCLFFBQVE7Ozs7OzswQkFFViw4REFBQzFCLGlEQUFhQTtnQkFDWlMsSUFBRztnQkFDSGEsT0FBTTtnQkFDTkMsTUFBSztnQkFDTEMsYUFBWTtnQkFDWmQsT0FBT04sU0FBU0csUUFBUTtnQkFDeEJrQixjQUFjakI7Z0JBQ2RrQixRQUFROzs7Ozs7MEJBR1YsOERBQUNMO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDckIsOENBQVVBO29CQUNUNEIsU0FBU2Y7b0JBQ1RnQixNQUFNMUI7b0JBQ04yQixpQkFBaUI7b0JBQ2pCQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQjtHQXRETTdCO0tBQUFBO0FBd0ROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm0uanN4PzhlOTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRoQnV0dG9uLCBBdXRoRm9ybUZpZWxkIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmNvbnN0IEF1dGhGb3JtID0gKHsgZm9ybVRpdGxlLCBvblN1Ym1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7IGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KTtcclxuIFxyXG4gIGNvbnN0IGhhbmRsZVZhbGlkSW5wdXQgPSAoaWQsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRGb3JtRGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgW2lkXTogdmFsdWUgfSkpO1xyXG4gICAgXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaXNGb3JtVmFsaWQgPSBPYmplY3QudmFsdWVzKGZvcm1EYXRhKS5ldmVyeSgodmFsdWUpID0+IHZhbHVlICE9PSBudWxsKTtcclxuICAgIGlmICghaXNGb3JtVmFsaWQpIHtcclxuICAgIG9uU3VibWl0KGZvcm1EYXRhKTtcclxuICAgIH1cclxuICAgIGVcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm1cclxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1bODAlXSBoLWZ1bGxcIlxyXG4gICAgICBvblN1Ym1pdD17b25TdWJtaXR9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmxhY2sgdGV4dC0yeGwgIHRyYWNraW5nLVswXSBsZWFkaW5nLVtub3JtYWxdIHdoaXRlc3BhY2Utbm93cmFwIG1iLTRcIj5cclxuICAgICAgICB7Zm9ybVRpdGxlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEF1dGhGb3JtRmllbGRcclxuICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbEBleGFtcGxlLmNvbVwiXHJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgIG9uVmFsaWRJbnB1dD17aGFuZGxlVmFsaWRJbnB1dH1cclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAvPlxyXG4gICAgICA8QXV0aEZvcm1GaWVsZFxyXG4gICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCIqKioqKioqKlwiXHJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfVxyXG4gICAgICAgIG9uVmFsaWRJbnB1dD17aGFuZGxlVmFsaWRJbnB1dH1cclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICA8QXV0aEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICB0ZXh0PXtmb3JtVGl0bGV9XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e1wiYmctemluYy0zMDBcIn1cclxuICAgICAgICAgIHRleHRDb2xvcj17XCJ0ZXh0LXdoaXRlXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkF1dGhCdXR0b24iLCJBdXRoRm9ybUZpZWxkIiwiQXV0aEZvcm0iLCJmb3JtVGl0bGUiLCJvblN1Ym1pdCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlVmFsaWRJbnB1dCIsImlkIiwidmFsdWUiLCJwcmV2IiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJpc0Zvcm1WYWxpZCIsIk9iamVjdCIsInZhbHVlcyIsImV2ZXJ5IiwiZm9ybSIsImNsYXNzTmFtZSIsImRpdiIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25WYWxpZElucHV0IiwicmVxdWlyZWQiLCJvbkNsaWNrIiwidGV4dCIsImJhY2tncm91bmRDb2xvciIsInRleHRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthForm.jsx\n"));

/***/ })

});