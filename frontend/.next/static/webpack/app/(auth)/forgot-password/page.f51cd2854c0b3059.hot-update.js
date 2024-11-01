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

/***/ "(app-pages-browser)/./src/app/(auth)/forgot-password/page.jsx":
/*!*************************************************!*\
  !*** ./src/app/(auth)/forgot-password/page.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction page() {\n    _s();\n    const [stage, setStage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"email\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        code: \"\",\n        password: \"\",\n        confirmPassword: \"\"\n    });\n    const handleValidInput = (id, value)=>{\n        console.log(id, value);\n        setFormData((prev)=>{\n            if (value === null) {\n                return {\n                    ...prev,\n                    [id]: \"\"\n                };\n            } else {\n                return {\n                    ...prev,\n                    [id]: value\n                };\n            }\n        });\n        console.log(formData);\n    };\n    const handleSubmit = async ()=>{\n        if (stage === \"email\") {\n            if (!formData.email) {\n                message.error(\"Please fill correct email address\");\n            } else {\n                _api__WEBPACK_IMPORTED_MODULE_3__.authApi.requestPasswordReset(formData);\n                setStage(\"code\");\n            }\n        } else if (stage === \"code\") {\n            if (!formData.code) {\n                message.error(\"Please fill correct code\");\n            } else {\n                setStage(\"password\");\n            }\n        } else if (stage === \"password\") {\n            if (!formData.password || !formData.confirmPassword) {\n                message.error(\"Please fill correct password\");\n            } else if (formData.password !== formData.confirmPassword) {\n                message.error(\"Passwords do not match\");\n            } else {\n                message.success(\"Password reset successful\");\n                setStage(\"success\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex flex-col items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthResetPasswordCard, {\n            stage: stage,\n            onInputChange: handleValidInput,\n            onSubmit: handleSubmit\n        }, void 0, false, {\n            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\forgot-password\\\\page.jsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\forgot-password\\\\page.jsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"Fb2tuFFjmh879+N0Wti1sC+CWpo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGF1dGgpL2ZvcmdvdC1wYXNzd29yZC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN3QztBQUNrQjtBQUMxQjtBQUVqQixTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUN2Q1EsT0FBTztRQUNQQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsaUJBQWlCO0lBQ25CO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNDLElBQUlDO1FBQzVCQyxRQUFRQyxHQUFHLENBQUNILElBQUlDO1FBQ2hCUCxZQUFZLENBQUNVO1lBQ1gsSUFBSUgsVUFBVSxNQUFNO2dCQUNsQixPQUFPO29CQUFFLEdBQUdHLElBQUk7b0JBQUUsQ0FBQ0osR0FBRyxFQUFFO2dCQUFHO1lBQzdCLE9BQU87Z0JBQ0wsT0FBTztvQkFBRSxHQUFHSSxJQUFJO29CQUFFLENBQUNKLEdBQUcsRUFBRUM7Z0JBQU07WUFDaEM7UUFDRjtRQUNBQyxRQUFRQyxHQUFHLENBQUNWO0lBQ2Q7SUFFQSxNQUFNWSxlQUFlO1FBQ25CLElBQUlkLFVBQVUsU0FBUztZQUNyQixJQUFJLENBQUNFLFNBQVNFLEtBQUssRUFBRTtnQkFDbkJXLFFBQVFDLEtBQUssQ0FBQztZQUNoQixPQUFPO2dCQUNMbEIseUNBQU9BLENBQUNtQixvQkFBb0IsQ0FBQ2Y7Z0JBQzdCRCxTQUFTO1lBQ1g7UUFDRixPQUFPLElBQUlELFVBQVUsUUFBUTtZQUMzQixJQUFJLENBQUNFLFNBQVNHLElBQUksRUFBRTtnQkFDbEJVLFFBQVFDLEtBQUssQ0FBQztZQUNoQixPQUFPO2dCQUNMZixTQUFTO1lBQ1g7UUFDRixPQUFPLElBQUlELFVBQVUsWUFBWTtZQUMvQixJQUFJLENBQUNFLFNBQVNJLFFBQVEsSUFBSSxDQUFDSixTQUFTSyxlQUFlLEVBQUU7Z0JBQ25EUSxRQUFRQyxLQUFLLENBQUM7WUFDaEIsT0FBTyxJQUFJZCxTQUFTSSxRQUFRLEtBQUtKLFNBQVNLLGVBQWUsRUFBRTtnQkFDekRRLFFBQVFDLEtBQUssQ0FBQztZQUNoQixPQUFPO2dCQUNMRCxRQUFRRyxPQUFPLENBQUM7Z0JBQ2hCakIsU0FBUztZQUNYO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDa0I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ3ZCLG1FQUFxQkE7WUFDcEJHLE9BQU9BO1lBQ1BxQixlQUFlYjtZQUNmYyxVQUFVUjs7Ozs7Ozs7Ozs7QUFJbEI7R0F4RHdCZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhhdXRoKS9mb3Jnb3QtcGFzc3dvcmQvcGFnZS5qc3g/YjlkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhSZXNldFBhc3N3b3JkQ2FyZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvYXV0aFwiO1xyXG5pbXBvcnQgeyBhdXRoQXBpIH0gZnJvbSBcIkAvYXBpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlKCkge1xyXG4gIGNvbnN0IFtzdGFnZSwgc2V0U3RhZ2VdID0gdXNlU3RhdGUoXCJlbWFpbFwiKTtcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgY29kZTogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVWYWxpZElucHV0ID0gKGlkLCB2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaWQsIHZhbHVlKTtcclxuICAgIHNldEZvcm1EYXRhKChwcmV2KSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnByZXYsIFtpZF06IFwiXCIgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBbaWRdOiB2YWx1ZSB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoc3RhZ2UgPT09IFwiZW1haWxcIikge1xyXG4gICAgICBpZiAoIWZvcm1EYXRhLmVtYWlsKSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihcIlBsZWFzZSBmaWxsIGNvcnJlY3QgZW1haWwgYWRkcmVzc1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhdXRoQXBpLnJlcXVlc3RQYXNzd29yZFJlc2V0KGZvcm1EYXRhKTtcclxuICAgICAgICBzZXRTdGFnZShcImNvZGVcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoc3RhZ2UgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgIGlmICghZm9ybURhdGEuY29kZSkge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQbGVhc2UgZmlsbCBjb3JyZWN0IGNvZGVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U3RhZ2UoXCJwYXNzd29yZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChzdGFnZSA9PT0gXCJwYXNzd29yZFwiKSB7XHJcbiAgICAgIGlmICghZm9ybURhdGEucGFzc3dvcmQgfHwgIWZvcm1EYXRhLmNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQbGVhc2UgZmlsbCBjb3JyZWN0IHBhc3N3b3JkXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGZvcm1EYXRhLnBhc3N3b3JkICE9PSBmb3JtRGF0YS5jb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQYXNzd29yZCByZXNldCBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgIHNldFN0YWdlKFwic3VjY2Vzc1wiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8QXV0aFJlc2V0UGFzc3dvcmRDYXJkXHJcbiAgICAgICAgc3RhZ2U9e3N0YWdlfVxyXG4gICAgICAgIG9uSW5wdXRDaGFuZ2U9e2hhbmRsZVZhbGlkSW5wdXR9XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBdXRoUmVzZXRQYXNzd29yZENhcmQiLCJhdXRoQXBpIiwicGFnZSIsInN0YWdlIiwic2V0U3RhZ2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZW1haWwiLCJjb2RlIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJoYW5kbGVWYWxpZElucHV0IiwiaWQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2IiwiaGFuZGxlU3VibWl0IiwibWVzc2FnZSIsImVycm9yIiwicmVxdWVzdFBhc3N3b3JkUmVzZXQiLCJzdWNjZXNzIiwiZGl2IiwiY2xhc3NOYW1lIiwib25JbnB1dENoYW5nZSIsIm9uU3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(auth)/forgot-password/page.jsx\n"));

/***/ })

});