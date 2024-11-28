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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction page() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [stage, setStage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"email\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        code: \"\",\n        password: \"\",\n        confirmPassword: \"\"\n    });\n    const handleValidInput = (id, value)=>{\n        setFormData((prev)=>{\n            if (value === null) {\n                return {\n                    ...prev,\n                    [id]: \"\"\n                };\n            } else {\n                return {\n                    ...prev,\n                    [id]: value\n                };\n            }\n        });\n    };\n    const validateFormData = ()=>{\n        if (stage === \"email\" && !formData.email) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill in a valid email address\");\n            return false;\n        }\n        if (stage === \"code\" && !formData.code) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill in the correct code\");\n            return false;\n        }\n        if (stage === \"password\") {\n            if (!formData.password || !formData.confirmPassword) {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill in the password fields\");\n                return false;\n            }\n            if (formData.password !== formData.confirmPassword) {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Passwords do not match\");\n                return false;\n            }\n        }\n        return true;\n    };\n    const handleEmailSubmit = async ()=>{\n        if (stage !== \"code\") {\n            setStage(\"code\");\n        }\n        setIsLoading(true);\n        try {\n            await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.requestPasswordReset(formData.email);\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Password reset email sent\");\n        } catch (error) {\n        // console.log(\"Error sending password reset email\");\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const handleCodeSubmit = async ()=>{\n        setIsLoading(true);\n        try {\n            const response = await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.verifyPasswordReset({\n                resetCode: formData.code,\n                email: formData.email\n            });\n            if (response.status === 200) {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Code verified successfully\");\n                setStage(\"password\");\n            } else {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Code verification failed\");\n            }\n        } catch (error) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Code verification error\");\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const handlePasswordSubmit = async ()=>{\n        try {\n            const response = await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.resetPassword({\n                email: formData.email,\n                resetCode: formData.code,\n                password: formData.password\n            });\n            if (response.status === 200) {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Password reset successful\");\n                setStage(\"success\");\n            } else {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Password reset failed\");\n            }\n        } catch (error) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Error resetting password\");\n        }\n    };\n    const handleSubmit = async ()=>{\n        if (!validateFormData()) return;\n        switch(stage){\n            case \"email\":\n                await handleEmailSubmit();\n                break;\n            case \"code\":\n                await handleCodeSubmit();\n                break;\n            case \"password\":\n                await handlePasswordSubmit();\n                break;\n            case \"success\":\n            default:\n                break;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex flex-col items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthResetPasswordCard, {\n            stage: stage,\n            isLoading: isLoading,\n            email: formData.email,\n            onInputChange: handleValidInput,\n            onSubmit: handleSubmit,\n            onResendCode: handleEmailSubmit\n        }, void 0, false, {\n            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\2024Fall\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\forgot-password\\\\page.jsx\",\n            lineNumber: 122,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\2024Fall\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\forgot-password\\\\page.jsx\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"bYqXEbcr6kLAYlL7fa5z+FPz+1I=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGF1dGgpL2ZvcmdvdC1wYXNzd29yZC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDTztBQUMxQjtBQUNEO0FBRWhCLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1UsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBQztRQUN2Q1ksT0FBTztRQUNQQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsaUJBQWlCO0lBQ25CO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNDLElBQUlDO1FBQzVCUCxZQUFZLENBQUNRO1lBQ1gsSUFBSUQsVUFBVSxNQUFNO2dCQUNsQixPQUFPO29CQUFFLEdBQUdDLElBQUk7b0JBQUUsQ0FBQ0YsR0FBRyxFQUFFO2dCQUFHO1lBQzdCLE9BQU87Z0JBQ0wsT0FBTztvQkFBRSxHQUFHRSxJQUFJO29CQUFFLENBQUNGLEdBQUcsRUFBRUM7Z0JBQU07WUFDaEM7UUFDRjtJQUNGO0lBRUEsTUFBTUUsbUJBQW1CO1FBQ3ZCLElBQUlaLFVBQVUsV0FBVyxDQUFDRSxTQUFTRSxLQUFLLEVBQUU7WUFDeENSLDJFQUFPQSxDQUFDaUIsS0FBSyxDQUFDO1lBQ2QsT0FBTztRQUNUO1FBQ0EsSUFBSWIsVUFBVSxVQUFVLENBQUNFLFNBQVNHLElBQUksRUFBRTtZQUN0Q1QsMkVBQU9BLENBQUNpQixLQUFLLENBQUM7WUFDZCxPQUFPO1FBQ1Q7UUFDQSxJQUFJYixVQUFVLFlBQVk7WUFDeEIsSUFBSSxDQUFDRSxTQUFTSSxRQUFRLElBQUksQ0FBQ0osU0FBU0ssZUFBZSxFQUFFO2dCQUNuRFgsMkVBQU9BLENBQUNpQixLQUFLLENBQUM7Z0JBQ2QsT0FBTztZQUNUO1lBQ0EsSUFBSVgsU0FBU0ksUUFBUSxLQUFLSixTQUFTSyxlQUFlLEVBQUU7Z0JBQ2xEWCwyRUFBT0EsQ0FBQ2lCLEtBQUssQ0FBQztnQkFDZCxPQUFPO1lBQ1Q7UUFDRjtRQUNBLE9BQU87SUFDVDtJQUVBLE1BQU1DLG9CQUFvQjtRQUN4QixJQUFJZCxVQUFVLFFBQVE7WUFDcEJDLFNBQVM7UUFDWDtRQUNBRixhQUFhO1FBQ2IsSUFBSTtZQUNGLE1BQU1KLHlDQUFPQSxDQUFDb0Isb0JBQW9CLENBQUNiLFNBQVNFLEtBQUs7WUFDakRSLDJFQUFPQSxDQUFDb0IsT0FBTyxDQUFDO1FBQ2xCLEVBQUUsT0FBT0gsT0FBTztRQUNkLHFEQUFxRDtRQUN2RCxTQUFVO1lBQ1JkLGFBQWE7UUFDZjtJQUNGO0lBRUEsTUFBTWtCLG1CQUFtQjtRQUN2QmxCLGFBQWE7UUFDYixJQUFJO1lBQ0YsTUFBTW1CLFdBQVcsTUFBTXZCLHlDQUFPQSxDQUFDd0IsbUJBQW1CLENBQUM7Z0JBQ2pEQyxXQUFXbEIsU0FBU0csSUFBSTtnQkFDeEJELE9BQU9GLFNBQVNFLEtBQUs7WUFDdkI7WUFDQSxJQUFJYyxTQUFTRyxNQUFNLEtBQUssS0FBSztnQkFDM0J6QiwyRUFBT0EsQ0FBQ29CLE9BQU8sQ0FBQztnQkFDaEJmLFNBQVM7WUFDWCxPQUFPO2dCQUNMTCwyRUFBT0EsQ0FBQ2lCLEtBQUssQ0FBQztZQUNoQjtRQUNGLEVBQUUsT0FBT0EsT0FBTztZQUNkakIsMkVBQU9BLENBQUNpQixLQUFLLENBQUM7UUFDaEIsU0FBVTtZQUNSZCxhQUFhO1FBQ2Y7SUFDRjtJQUVBLE1BQU11Qix1QkFBdUI7UUFDM0IsSUFBSTtZQUNGLE1BQU1KLFdBQVcsTUFBTXZCLHlDQUFPQSxDQUFDNEIsYUFBYSxDQUFDO2dCQUMzQ25CLE9BQU9GLFNBQVNFLEtBQUs7Z0JBQ3JCZ0IsV0FBV2xCLFNBQVNHLElBQUk7Z0JBQ3hCQyxVQUFVSixTQUFTSSxRQUFRO1lBQzdCO1lBQ0EsSUFBSVksU0FBU0csTUFBTSxLQUFLLEtBQUs7Z0JBQzNCekIsMkVBQU9BLENBQUNvQixPQUFPLENBQUM7Z0JBQ2hCZixTQUFTO1lBQ1gsT0FBTztnQkFDTEwsMkVBQU9BLENBQUNpQixLQUFLLENBQUM7WUFDaEI7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZGpCLDJFQUFPQSxDQUFDaUIsS0FBSyxDQUFDO1FBQ2hCO0lBQ0Y7SUFFQSxNQUFNVyxlQUFlO1FBQ25CLElBQUksQ0FBQ1osb0JBQW9CO1FBRXpCLE9BQVFaO1lBQ04sS0FBSztnQkFDSCxNQUFNYztnQkFDTjtZQUNGLEtBQUs7Z0JBQ0gsTUFBTUc7Z0JBQ047WUFDRixLQUFLO2dCQUNILE1BQU1LO2dCQUNOO1lBQ0YsS0FBSztZQUNMO2dCQUNFO1FBQ0o7SUFDRjtJQUNBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDaEMsbUVBQXFCQTtZQUNwQk0sT0FBT0E7WUFDUEYsV0FBV0E7WUFDWE0sT0FBT0YsU0FBU0UsS0FBSztZQUNyQnVCLGVBQWVuQjtZQUNmb0IsVUFBVUo7WUFDVkssY0FBY2Y7Ozs7Ozs7Ozs7O0FBSXRCO0dBN0h3QmpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvKGF1dGgpL2ZvcmdvdC1wYXNzd29yZC9wYWdlLmpzeD9iOWQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRoUmVzZXRQYXNzd29yZENhcmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL2F1dGhcIjtcclxuaW1wb3J0IHsgYXV0aEFwaSB9IGZyb20gXCJAL2FwaVwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2UoKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3RhZ2UsIHNldFN0YWdlXSA9IHVzZVN0YXRlKFwiZW1haWxcIik7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIGNvZGU6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVmFsaWRJbnB1dCA9IChpZCwgdmFsdWUpID0+IHtcclxuICAgIHNldEZvcm1EYXRhKChwcmV2KSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnByZXYsIFtpZF06IFwiXCIgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBbaWRdOiB2YWx1ZSB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB2YWxpZGF0ZUZvcm1EYXRhID0gKCkgPT4ge1xyXG4gICAgaWYgKHN0YWdlID09PSBcImVtYWlsXCIgJiYgIWZvcm1EYXRhLmVtYWlsKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQbGVhc2UgZmlsbCBpbiBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChzdGFnZSA9PT0gXCJjb2RlXCIgJiYgIWZvcm1EYXRhLmNvZGUpIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihcIlBsZWFzZSBmaWxsIGluIHRoZSBjb3JyZWN0IGNvZGVcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChzdGFnZSA9PT0gXCJwYXNzd29yZFwiKSB7XHJcbiAgICAgIGlmICghZm9ybURhdGEucGFzc3dvcmQgfHwgIWZvcm1EYXRhLmNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQbGVhc2UgZmlsbCBpbiB0aGUgcGFzc3dvcmQgZmllbGRzXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZm9ybURhdGEucGFzc3dvcmQgIT09IGZvcm1EYXRhLmNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRW1haWxTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoc3RhZ2UgIT09IFwiY29kZVwiKSB7XHJcbiAgICAgIHNldFN0YWdlKFwiY29kZVwiKTtcclxuICAgIH1cclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF1dGhBcGkucmVxdWVzdFBhc3N3b3JkUmVzZXQoZm9ybURhdGEuZW1haWwpO1xyXG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQYXNzd29yZCByZXNldCBlbWFpbCBzZW50XCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJFcnJvciBzZW5kaW5nIHBhc3N3b3JkIHJlc2V0IGVtYWlsXCIpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDb2RlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhdXRoQXBpLnZlcmlmeVBhc3N3b3JkUmVzZXQoe1xyXG4gICAgICAgIHJlc2V0Q29kZTogZm9ybURhdGEuY29kZSxcclxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJDb2RlIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBzZXRTdGFnZShcInBhc3N3b3JkXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJDb2RlIHZlcmlmaWNhdGlvbiBmYWlsZWRcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJDb2RlIHZlcmlmaWNhdGlvbiBlcnJvclwiKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFzc3dvcmRTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF1dGhBcGkucmVzZXRQYXNzd29yZCh7XHJcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmVtYWlsLFxyXG4gICAgICAgIHJlc2V0Q29kZTogZm9ybURhdGEuY29kZSxcclxuICAgICAgICBwYXNzd29yZDogZm9ybURhdGEucGFzc3dvcmQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQYXNzd29yZCByZXNldCBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgIHNldFN0YWdlKFwic3VjY2Vzc1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKFwiUGFzc3dvcmQgcmVzZXQgZmFpbGVkXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiRXJyb3IgcmVzZXR0aW5nIHBhc3N3b3JkXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghdmFsaWRhdGVGb3JtRGF0YSgpKSByZXR1cm47XHJcblxyXG4gICAgc3dpdGNoIChzdGFnZSkge1xyXG4gICAgICBjYXNlIFwiZW1haWxcIjpcclxuICAgICAgICBhd2FpdCBoYW5kbGVFbWFpbFN1Ym1pdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiY29kZVwiOlxyXG4gICAgICAgIGF3YWl0IGhhbmRsZUNvZGVTdWJtaXQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInBhc3N3b3JkXCI6XHJcbiAgICAgICAgYXdhaXQgaGFuZGxlUGFzc3dvcmRTdWJtaXQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8QXV0aFJlc2V0UGFzc3dvcmRDYXJkXHJcbiAgICAgICAgc3RhZ2U9e3N0YWdlfVxyXG4gICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgIGVtYWlsPXtmb3JtRGF0YS5lbWFpbH1cclxuICAgICAgICBvbklucHV0Q2hhbmdlPXtoYW5kbGVWYWxpZElucHV0fVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgb25SZXNlbmRDb2RlPXtoYW5kbGVFbWFpbFN1Ym1pdH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBdXRoUmVzZXRQYXNzd29yZENhcmQiLCJhdXRoQXBpIiwibWVzc2FnZSIsInBhZ2UiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzdGFnZSIsInNldFN0YWdlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVtYWlsIiwiY29kZSIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiaGFuZGxlVmFsaWRJbnB1dCIsImlkIiwidmFsdWUiLCJwcmV2IiwidmFsaWRhdGVGb3JtRGF0YSIsImVycm9yIiwiaGFuZGxlRW1haWxTdWJtaXQiLCJyZXF1ZXN0UGFzc3dvcmRSZXNldCIsInN1Y2Nlc3MiLCJoYW5kbGVDb2RlU3VibWl0IiwicmVzcG9uc2UiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0IiwicmVzZXRDb2RlIiwic3RhdHVzIiwiaGFuZGxlUGFzc3dvcmRTdWJtaXQiLCJyZXNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwib25JbnB1dENoYW5nZSIsIm9uU3VibWl0Iiwib25SZXNlbmRDb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(auth)/forgot-password/page.jsx\n"));

/***/ })

});