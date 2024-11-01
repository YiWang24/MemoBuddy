"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_ROUTES: function() { return /* binding */ API_ROUTES; },\n/* harmony export */   SOCIAL_MEDIA: function() { return /* binding */ SOCIAL_MEDIA; },\n/* harmony export */   STAGE_CONTENT: function() { return /* binding */ STAGE_CONTENT; }\n/* harmony export */ });\n/* harmony import */ var _assets_icons_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/index */ \"(app-pages-browser)/./src/assets/icons/index.js\");\n\nconst SOCIAL_MEDIA = [\n    {\n        src: _assets_icons_index__WEBPACK_IMPORTED_MODULE_0__.google,\n        alt: \"google Logo\"\n    },\n    {\n        src: _assets_icons_index__WEBPACK_IMPORTED_MODULE_0__.email,\n        alt: \"email Logo\"\n    }\n];\nconst API_ROUTES = {\n    AUTH: {\n        LOGIN: \"/auth/login\",\n        REGISTER: \"/auth/register\",\n        LOGOUT: \"/auth/logout\",\n        PASSWORD: {\n            RESET_REQUEST: \"/auth/request-password-reset\",\n            RESET: \"/auth/reset-password\"\n        },\n        CHECKCURRENTUSER: \"/auth/currentUser\"\n    },\n    CONTACT: \"/contact\",\n    DIARY: {\n        LIST: \"/diary\",\n        CREATE: \"/diary\",\n        GET: (id)=>\"/diary/\".concat(id),\n        UPDATE: (id)=>\"/diary/\".concat(id),\n        DELETE: (id)=>\"/diary/\".concat(id),\n        ACTIONS: {\n            LOCK: (id)=>\"/diary/\".concat(id, \"/lock\"),\n            UNLOCK: (id)=>\"/diary/\".concat(id, \"/unlock\")\n        }\n    },\n    WEATHER: {\n        GET: (lat, lon)=>\"/weather/\".concat(lat, \"/\").concat(lon)\n    }\n};\nconst STAGE_CONTENT = {\n    email: {\n        cardTitle: \"Reset Password\",\n        buttonTitle: \"Send Verification Code\",\n        cardBody: \"No worries, We’ll send you reset instructions\",\n        cardFooter: \"Already have an account?\",\n        link: \"/login\"\n    },\n    code: {\n        cardTitle: \"Check Your Email\",\n        buttonTitle: \"Verify Code\",\n        cardBody: \"We sent a reset link to contact@gmail.com enter 4 digit code that mentioned in the email\",\n        cardFooter: \"Haven’t got the email yet? Resend Code\"\n    },\n    password: {\n        cardTitle: \"Set a New Password\",\n        buttonTitle: \"Confirm\",\n        cardBody: \"Create a new password. Ensure it differs from previous ones for security\",\n        cardFooter: \"\"\n    },\n    success: {\n        cardTitle: \"Password Reset Successful\",\n        buttonTitle: \"Return to Login\",\n        cardBody: \"Your password has been reset successfully. Please login with your new password\",\n        cardFooter: \"\",\n        link: \"/login\"\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzRDtBQUMvQyxNQUFNRSxlQUFlO0lBQzFCO1FBQUVDLEtBQUtILHVEQUFNQTtRQUFFSSxLQUFLO0lBQWM7SUFDbEM7UUFBRUQsS0FBS0Ysc0RBQUtBO1FBQUVHLEtBQUs7SUFBYTtDQUNqQyxDQUFDO0FBRUssTUFBTUMsYUFBYTtJQUN4QkMsTUFBTTtRQUNKQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsUUFBUTtRQUNSQyxVQUFVO1lBQ1JDLGVBQWU7WUFDZkMsT0FBTztRQUNUO1FBQ0FDLGtCQUFrQjtJQUNwQjtJQUNBQyxTQUFTO0lBQ1RDLE9BQU87UUFDTEMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLEtBQUssQ0FBQ0MsS0FBTyxVQUFhLE9BQUhBO1FBQ3ZCQyxRQUFRLENBQUNELEtBQU8sVUFBYSxPQUFIQTtRQUMxQkUsUUFBUSxDQUFDRixLQUFPLFVBQWEsT0FBSEE7UUFDMUJHLFNBQVM7WUFDUEMsTUFBTSxDQUFDSixLQUFPLFVBQWEsT0FBSEEsSUFBRztZQUMzQkssUUFBUSxDQUFDTCxLQUFPLFVBQWEsT0FBSEEsSUFBRztRQUMvQjtJQUNGO0lBQ0FNLFNBQVM7UUFDUFAsS0FBSyxDQUFDUSxLQUFLQyxNQUFRLFlBQW1CQSxPQUFQRCxLQUFJLEtBQU8sT0FBSkM7SUFDeEM7QUFDRixFQUFFO0FBRUssTUFBTUMsZ0JBQWdCO0lBQzNCM0IsT0FBTztRQUNMNEIsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxNQUFNO0lBQ1I7SUFDQUMsTUFBTTtRQUNKTCxXQUFXO1FBQ1hDLGFBQWE7UUFDYkMsVUFDRTtRQUNGQyxZQUFZO0lBQ2Q7SUFDQUcsVUFBVTtRQUNSTixXQUFXO1FBQ1hDLGFBQWE7UUFDYkMsVUFDRTtRQUNGQyxZQUFZO0lBQ2Q7SUFDQUksU0FBUztRQUNQUCxXQUFXO1FBQ1hDLGFBQWE7UUFDYkMsVUFDRTtRQUNGQyxZQUFZO1FBQ1pDLE1BQU07SUFDUjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9pbmRleC5qcz8xOGI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdvb2dsZSwgZW1haWwgfSBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL2luZGV4XCI7XHJcbmV4cG9ydCBjb25zdCBTT0NJQUxfTUVESUEgPSBbXHJcbiAgeyBzcmM6IGdvb2dsZSwgYWx0OiBcImdvb2dsZSBMb2dvXCIgfSxcclxuICB7IHNyYzogZW1haWwsIGFsdDogXCJlbWFpbCBMb2dvXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBBUElfUk9VVEVTID0ge1xyXG4gIEFVVEg6IHtcclxuICAgIExPR0lOOiBcIi9hdXRoL2xvZ2luXCIsXHJcbiAgICBSRUdJU1RFUjogXCIvYXV0aC9yZWdpc3RlclwiLFxyXG4gICAgTE9HT1VUOiBcIi9hdXRoL2xvZ291dFwiLFxyXG4gICAgUEFTU1dPUkQ6IHtcclxuICAgICAgUkVTRVRfUkVRVUVTVDogXCIvYXV0aC9yZXF1ZXN0LXBhc3N3b3JkLXJlc2V0XCIsXHJcbiAgICAgIFJFU0VUOiBcIi9hdXRoL3Jlc2V0LXBhc3N3b3JkXCIsXHJcbiAgICB9LFxyXG4gICAgQ0hFQ0tDVVJSRU5UVVNFUjogXCIvYXV0aC9jdXJyZW50VXNlclwiLFxyXG4gIH0sXHJcbiAgQ09OVEFDVDogXCIvY29udGFjdFwiLFxyXG4gIERJQVJZOiB7XHJcbiAgICBMSVNUOiBcIi9kaWFyeVwiLFxyXG4gICAgQ1JFQVRFOiBcIi9kaWFyeVwiLFxyXG4gICAgR0VUOiAoaWQpID0+IGAvZGlhcnkvJHtpZH1gLFxyXG4gICAgVVBEQVRFOiAoaWQpID0+IGAvZGlhcnkvJHtpZH1gLFxyXG4gICAgREVMRVRFOiAoaWQpID0+IGAvZGlhcnkvJHtpZH1gLFxyXG4gICAgQUNUSU9OUzoge1xyXG4gICAgICBMT0NLOiAoaWQpID0+IGAvZGlhcnkvJHtpZH0vbG9ja2AsXHJcbiAgICAgIFVOTE9DSzogKGlkKSA9PiBgL2RpYXJ5LyR7aWR9L3VubG9ja2AsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgV0VBVEhFUjoge1xyXG4gICAgR0VUOiAobGF0LCBsb24pID0+IGAvd2VhdGhlci8ke2xhdH0vJHtsb259YCxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNUQUdFX0NPTlRFTlQgPSB7XHJcbiAgZW1haWw6IHtcclxuICAgIGNhcmRUaXRsZTogXCJSZXNldCBQYXNzd29yZFwiLFxyXG4gICAgYnV0dG9uVGl0bGU6IFwiU2VuZCBWZXJpZmljYXRpb24gQ29kZVwiLFxyXG4gICAgY2FyZEJvZHk6IFwiTm8gd29ycmllcywgV2XigJlsbCBzZW5kIHlvdSByZXNldCBpbnN0cnVjdGlvbnNcIixcclxuICAgIGNhcmRGb290ZXI6IFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XCIsXHJcbiAgICBsaW5rOiBcIi9sb2dpblwiLFxyXG4gIH0sXHJcbiAgY29kZToge1xyXG4gICAgY2FyZFRpdGxlOiBcIkNoZWNrIFlvdXIgRW1haWxcIixcclxuICAgIGJ1dHRvblRpdGxlOiBcIlZlcmlmeSBDb2RlXCIsXHJcbiAgICBjYXJkQm9keTpcclxuICAgICAgXCJXZSBzZW50IGEgcmVzZXQgbGluayB0byBjb250YWN0QGdtYWlsLmNvbSBlbnRlciA0IGRpZ2l0IGNvZGUgdGhhdCBtZW50aW9uZWQgaW4gdGhlIGVtYWlsXCIsXHJcbiAgICBjYXJkRm9vdGVyOiBcIkhhdmVu4oCZdCBnb3QgdGhlIGVtYWlsIHlldD8gUmVzZW5kIENvZGVcIixcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICBjYXJkVGl0bGU6IFwiU2V0IGEgTmV3IFBhc3N3b3JkXCIsXHJcbiAgICBidXR0b25UaXRsZTogXCJDb25maXJtXCIsXHJcbiAgICBjYXJkQm9keTpcclxuICAgICAgXCJDcmVhdGUgYSBuZXcgcGFzc3dvcmQuIEVuc3VyZSBpdCBkaWZmZXJzIGZyb20gcHJldmlvdXMgb25lcyBmb3Igc2VjdXJpdHlcIixcclxuICAgIGNhcmRGb290ZXI6IFwiXCIsXHJcbiAgfSxcclxuICBzdWNjZXNzOiB7XHJcbiAgICBjYXJkVGl0bGU6IFwiUGFzc3dvcmQgUmVzZXQgU3VjY2Vzc2Z1bFwiLFxyXG4gICAgYnV0dG9uVGl0bGU6IFwiUmV0dXJuIHRvIExvZ2luXCIsXHJcbiAgICBjYXJkQm9keTpcclxuICAgICAgXCJZb3VyIHBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0IHN1Y2Nlc3NmdWxseS4gUGxlYXNlIGxvZ2luIHdpdGggeW91ciBuZXcgcGFzc3dvcmRcIixcclxuICAgIGNhcmRGb290ZXI6IFwiXCIsXHJcbiAgICBsaW5rOiBcIi9sb2dpblwiLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJnb29nbGUiLCJlbWFpbCIsIlNPQ0lBTF9NRURJQSIsInNyYyIsImFsdCIsIkFQSV9ST1VURVMiLCJBVVRIIiwiTE9HSU4iLCJSRUdJU1RFUiIsIkxPR09VVCIsIlBBU1NXT1JEIiwiUkVTRVRfUkVRVUVTVCIsIlJFU0VUIiwiQ0hFQ0tDVVJSRU5UVVNFUiIsIkNPTlRBQ1QiLCJESUFSWSIsIkxJU1QiLCJDUkVBVEUiLCJHRVQiLCJpZCIsIlVQREFURSIsIkRFTEVURSIsIkFDVElPTlMiLCJMT0NLIiwiVU5MT0NLIiwiV0VBVEhFUiIsImxhdCIsImxvbiIsIlNUQUdFX0NPTlRFTlQiLCJjYXJkVGl0bGUiLCJidXR0b25UaXRsZSIsImNhcmRCb2R5IiwiY2FyZEZvb3RlciIsImxpbmsiLCJjb2RlIiwicGFzc3dvcmQiLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/constants/index.js\n"));

/***/ })

});