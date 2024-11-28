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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction page() {\n    _s();\n    const [stage, setStage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"email\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        code: \"\",\n        password: \"\",\n        confirmPassword: \"\"\n    });\n    const handleValidInput = (id, value)=>{\n        setFormData((prev)=>{\n            if (value === null) {\n                return {\n                    ...prev,\n                    [id]: \"\"\n                };\n            } else {\n                return {\n                    ...prev,\n                    [id]: value\n                };\n            }\n        });\n    };\n    const validateFormData = ()=>{\n        if (stage === \"email\" && !formData.email) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill in a valid email address\");\n            return false;\n        }\n        if (stage === \"code\" && !formData.code) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill in the correct code\");\n            return false;\n        }\n        if (stage === \"password\") {\n            if (!formData.password || !formData.confirmPassword) {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill in the password fields\");\n                return false;\n            }\n            if (formData.password !== formData.confirmPassword) {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Passwords do not match\");\n                return false;\n            }\n        }\n        return true;\n    };\n    const handleEmailSubmit = async ()=>{\n        if (stage !== \"code\") {\n            setStage(\"code\");\n        }\n        await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.requestPasswordReset(formData.email);\n        _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Password reset email sent\");\n    };\n    const handleCodeSubmit = async ()=>{\n        try {\n            const response = await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.verifyPasswordReset({\n                resetCode: formData.code,\n                email: formData.email\n            });\n            if (response.status === 200) {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Code verified successfully\");\n                setStage(\"password\");\n            } else {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Code verification failed\");\n            }\n        } catch (error) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Code verification error\");\n        }\n    };\n    const handlePasswordSubmit = async ()=>{\n        try {\n            const response = await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.resetPassword({\n                email: formData.email,\n                resetCode: formData.code,\n                password: formData.password\n            });\n            if (response.status === 200) {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Password reset successful\");\n                setStage(\"success\");\n            } else {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Password reset failed\");\n            }\n        } catch (error) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Error resetting password\");\n        }\n    };\n    const handleSubmit = async ()=>{\n        if (!validateFormData()) return;\n        switch(stage){\n            case \"email\":\n                await handleEmailSubmit();\n                break;\n            case \"code\":\n                await handleCodeSubmit();\n                break;\n            case \"password\":\n                await handlePasswordSubmit();\n                break;\n            default:\n                break;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex flex-col items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthResetPasswordCard, {\n            stage: stage,\n            email: formData.email,\n            onInputChange: handleValidInput,\n            onSubmit: handleSubmit,\n            onResendCode: handleEmailSubmit\n        }, void 0, false, {\n            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\2024Fall\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\forgot-password\\\\page.jsx\",\n            lineNumber: 110,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\2024Fall\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\forgot-password\\\\page.jsx\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"Fb2tuFFjmh879+N0Wti1sC+CWpo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGF1dGgpL2ZvcmdvdC1wYXNzd29yZC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDTztBQUMxQjtBQUNEO0FBRWhCLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO1FBQ3ZDVSxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxpQkFBaUI7SUFDbkI7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0MsSUFBSUM7UUFDNUJQLFlBQVksQ0FBQ1E7WUFDWCxJQUFJRCxVQUFVLE1BQU07Z0JBQ2xCLE9BQU87b0JBQUUsR0FBR0MsSUFBSTtvQkFBRSxDQUFDRixHQUFHLEVBQUU7Z0JBQUc7WUFDN0IsT0FBTztnQkFDTCxPQUFPO29CQUFFLEdBQUdFLElBQUk7b0JBQUUsQ0FBQ0YsR0FBRyxFQUFFQztnQkFBTTtZQUNoQztRQUNGO0lBQ0Y7SUFFQSxNQUFNRSxtQkFBbUI7UUFDdkIsSUFBSVosVUFBVSxXQUFXLENBQUNFLFNBQVNFLEtBQUssRUFBRTtZQUN4Q04sMkVBQU9BLENBQUNlLEtBQUssQ0FBQztZQUNkLE9BQU87UUFDVDtRQUNBLElBQUliLFVBQVUsVUFBVSxDQUFDRSxTQUFTRyxJQUFJLEVBQUU7WUFDdENQLDJFQUFPQSxDQUFDZSxLQUFLLENBQUM7WUFDZCxPQUFPO1FBQ1Q7UUFDQSxJQUFJYixVQUFVLFlBQVk7WUFDeEIsSUFBSSxDQUFDRSxTQUFTSSxRQUFRLElBQUksQ0FBQ0osU0FBU0ssZUFBZSxFQUFFO2dCQUNuRFQsMkVBQU9BLENBQUNlLEtBQUssQ0FBQztnQkFDZCxPQUFPO1lBQ1Q7WUFDQSxJQUFJWCxTQUFTSSxRQUFRLEtBQUtKLFNBQVNLLGVBQWUsRUFBRTtnQkFDbERULDJFQUFPQSxDQUFDZSxLQUFLLENBQUM7Z0JBQ2QsT0FBTztZQUNUO1FBQ0Y7UUFDQSxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxvQkFBb0I7UUFDeEIsSUFBSWQsVUFBVSxRQUFRO1lBQ3BCQyxTQUFTO1FBQ1g7UUFDQSxNQUFNSix5Q0FBT0EsQ0FBQ2tCLG9CQUFvQixDQUFDYixTQUFTRSxLQUFLO1FBQ2pETiwyRUFBT0EsQ0FBQ2tCLE9BQU8sQ0FBQztJQUNsQjtJQUVBLE1BQU1DLG1CQUFtQjtRQUN2QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNckIseUNBQU9BLENBQUNzQixtQkFBbUIsQ0FBQztnQkFDakRDLFdBQVdsQixTQUFTRyxJQUFJO2dCQUN4QkQsT0FBT0YsU0FBU0UsS0FBSztZQUN2QjtZQUNBLElBQUljLFNBQVNHLE1BQU0sS0FBSyxLQUFLO2dCQUMzQnZCLDJFQUFPQSxDQUFDa0IsT0FBTyxDQUFDO2dCQUNoQmYsU0FBUztZQUNYLE9BQU87Z0JBQ0xILDJFQUFPQSxDQUFDZSxLQUFLLENBQUM7WUFDaEI7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZGYsMkVBQU9BLENBQUNlLEtBQUssQ0FBQztRQUNoQjtJQUNGO0lBRUEsTUFBTVMsdUJBQXVCO1FBQzNCLElBQUk7WUFDRixNQUFNSixXQUFXLE1BQU1yQix5Q0FBT0EsQ0FBQzBCLGFBQWEsQ0FBQztnQkFDM0NuQixPQUFPRixTQUFTRSxLQUFLO2dCQUNyQmdCLFdBQVdsQixTQUFTRyxJQUFJO2dCQUN4QkMsVUFBVUosU0FBU0ksUUFBUTtZQUM3QjtZQUNBLElBQUlZLFNBQVNHLE1BQU0sS0FBSyxLQUFLO2dCQUMzQnZCLDJFQUFPQSxDQUFDa0IsT0FBTyxDQUFDO2dCQUNoQmYsU0FBUztZQUNYLE9BQU87Z0JBQ0xILDJFQUFPQSxDQUFDZSxLQUFLLENBQUM7WUFDaEI7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZGYsMkVBQU9BLENBQUNlLEtBQUssQ0FBQztRQUNoQjtJQUNGO0lBRUEsTUFBTVcsZUFBZTtRQUNuQixJQUFJLENBQUNaLG9CQUFvQjtRQUV6QixPQUFRWjtZQUNOLEtBQUs7Z0JBQ0gsTUFBTWM7Z0JBQ047WUFDRixLQUFLO2dCQUNILE1BQU1HO2dCQUNOO1lBQ0YsS0FBSztnQkFDSCxNQUFNSztnQkFDTjtZQUNGO2dCQUNFO1FBQ0o7SUFDRjtJQUNBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDOUIsbUVBQXFCQTtZQUNwQkksT0FBT0E7WUFDUEksT0FBT0YsU0FBU0UsS0FBSztZQUNyQnVCLGVBQWVuQjtZQUNmb0IsVUFBVUo7WUFDVkssY0FBY2Y7Ozs7Ozs7Ozs7O0FBSXRCO0dBaEh3QmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oYXV0aCkvZm9yZ290LXBhc3N3b3JkL3BhZ2UuanN4P2I5ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhSZXNldFBhc3N3b3JkQ2FyZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvYXV0aFwiO1xyXG5pbXBvcnQgeyBhdXRoQXBpIH0gZnJvbSBcIkAvYXBpXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZSgpIHtcclxuICBjb25zdCBbc3RhZ2UsIHNldFN0YWdlXSA9IHVzZVN0YXRlKFwiZW1haWxcIik7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIGNvZGU6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVmFsaWRJbnB1dCA9IChpZCwgdmFsdWUpID0+IHtcclxuICAgIHNldEZvcm1EYXRhKChwcmV2KSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnByZXYsIFtpZF06IFwiXCIgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBbaWRdOiB2YWx1ZSB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB2YWxpZGF0ZUZvcm1EYXRhID0gKCkgPT4ge1xyXG4gICAgaWYgKHN0YWdlID09PSBcImVtYWlsXCIgJiYgIWZvcm1EYXRhLmVtYWlsKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQbGVhc2UgZmlsbCBpbiBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChzdGFnZSA9PT0gXCJjb2RlXCIgJiYgIWZvcm1EYXRhLmNvZGUpIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihcIlBsZWFzZSBmaWxsIGluIHRoZSBjb3JyZWN0IGNvZGVcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChzdGFnZSA9PT0gXCJwYXNzd29yZFwiKSB7XHJcbiAgICAgIGlmICghZm9ybURhdGEucGFzc3dvcmQgfHwgIWZvcm1EYXRhLmNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQbGVhc2UgZmlsbCBpbiB0aGUgcGFzc3dvcmQgZmllbGRzXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZm9ybURhdGEucGFzc3dvcmQgIT09IGZvcm1EYXRhLmNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRW1haWxTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoc3RhZ2UgIT09IFwiY29kZVwiKSB7XHJcbiAgICAgIHNldFN0YWdlKFwiY29kZVwiKTtcclxuICAgIH1cclxuICAgIGF3YWl0IGF1dGhBcGkucmVxdWVzdFBhc3N3b3JkUmVzZXQoZm9ybURhdGEuZW1haWwpO1xyXG4gICAgbWVzc2FnZS5zdWNjZXNzKFwiUGFzc3dvcmQgcmVzZXQgZW1haWwgc2VudFwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDb2RlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhdXRoQXBpLnZlcmlmeVBhc3N3b3JkUmVzZXQoe1xyXG4gICAgICAgIHJlc2V0Q29kZTogZm9ybURhdGEuY29kZSxcclxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJDb2RlIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICBzZXRTdGFnZShcInBhc3N3b3JkXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJDb2RlIHZlcmlmaWNhdGlvbiBmYWlsZWRcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJDb2RlIHZlcmlmaWNhdGlvbiBlcnJvclwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQYXNzd29yZFN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXV0aEFwaS5yZXNldFBhc3N3b3JkKHtcclxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXHJcbiAgICAgICAgcmVzZXRDb2RlOiBmb3JtRGF0YS5jb2RlLFxyXG4gICAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5wYXNzd29yZCxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlBhc3N3b3JkIHJlc2V0IHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgc2V0U3RhZ2UoXCJzdWNjZXNzXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQYXNzd29yZCByZXNldCBmYWlsZWRcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJFcnJvciByZXNldHRpbmcgcGFzc3dvcmRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCF2YWxpZGF0ZUZvcm1EYXRhKCkpIHJldHVybjtcclxuXHJcbiAgICBzd2l0Y2ggKHN0YWdlKSB7XHJcbiAgICAgIGNhc2UgXCJlbWFpbFwiOlxyXG4gICAgICAgIGF3YWl0IGhhbmRsZUVtYWlsU3VibWl0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJjb2RlXCI6XHJcbiAgICAgICAgYXdhaXQgaGFuZGxlQ29kZVN1Ym1pdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwicGFzc3dvcmRcIjpcclxuICAgICAgICBhd2FpdCBoYW5kbGVQYXNzd29yZFN1Ym1pdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxBdXRoUmVzZXRQYXNzd29yZENhcmRcclxuICAgICAgICBzdGFnZT17c3RhZ2V9XHJcbiAgICAgICAgZW1haWw9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgIG9uSW5wdXRDaGFuZ2U9e2hhbmRsZVZhbGlkSW5wdXR9XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICBvblJlc2VuZENvZGU9e2hhbmRsZUVtYWlsU3VibWl0fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkF1dGhSZXNldFBhc3N3b3JkQ2FyZCIsImF1dGhBcGkiLCJtZXNzYWdlIiwicGFnZSIsInN0YWdlIiwic2V0U3RhZ2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZW1haWwiLCJjb2RlIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJoYW5kbGVWYWxpZElucHV0IiwiaWQiLCJ2YWx1ZSIsInByZXYiLCJ2YWxpZGF0ZUZvcm1EYXRhIiwiZXJyb3IiLCJoYW5kbGVFbWFpbFN1Ym1pdCIsInJlcXVlc3RQYXNzd29yZFJlc2V0Iiwic3VjY2VzcyIsImhhbmRsZUNvZGVTdWJtaXQiLCJyZXNwb25zZSIsInZlcmlmeVBhc3N3b3JkUmVzZXQiLCJyZXNldENvZGUiLCJzdGF0dXMiLCJoYW5kbGVQYXNzd29yZFN1Ym1pdCIsInJlc2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbklucHV0Q2hhbmdlIiwib25TdWJtaXQiLCJvblJlc2VuZENvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(auth)/forgot-password/page.jsx\n"));

/***/ })

});