webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/Cards/SocialMedia.jsx":
/*!***************************************!*\
  !*** ./modules/Cards/SocialMedia.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var modules_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/Icons */ \"./modules/Icons/index.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Project/Personal-Portfolio-Starter/modules/Cards/SocialMedia.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar SocialMediaComponent = function SocialMediaComponent() {\n  _s();\n\n  var _user$defaultPortfoli;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state;\n  }),\n      user = _useSelector.user;\n\n  var values = (_user$defaultPortfoli = user.defaultPortfolioData[\"socialMedia\"]) === null || _user$defaultPortfoli === void 0 ? void 0 : _user$defaultPortfoli.content;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"grid grid-cols-2 items-center gap-2  p-10 text-left w-full md:w-4/5 mx-auto sm:w-full xxs:w-full xs:w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"p-2\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"./images/socialMedia.png\",\n        className: \"w-6 h-6 rounded-sm\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"text-7xl\",\n        children: \"Social Media\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"px-10 py-5\",\n      children: values && values.length > 0 && values.map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: item === null || item === void 0 ? void 0 : item.link,\n          target: \"_blank\",\n          className: \"m-2 flex justify-start items-center gap-1\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(modules_Icons__WEBPACK_IMPORTED_MODULE_1__[\"RenderIconComponent\"], {\n            name: item === null || item === void 0 ? void 0 : item.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 8\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: item === null || item === void 0 ? void 0 : item.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 8\n          }, _this)]\n        }, item === null || item === void 0 ? void 0 : item.name, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 7\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(SocialMediaComponent, \"HA6wZhGeXNR9tzJ3aDGGsGCdOyI=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n\n_c = SocialMediaComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialMediaComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"SocialMediaComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9DYXJkcy9Tb2NpYWxNZWRpYS5qc3g/ZmU4OSJdLCJuYW1lcyI6WyJTb2NpYWxNZWRpYUNvbXBvbmVudCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidmFsdWVzIiwiZGVmYXVsdFBvcnRmb2xpb0RhdGEiLCJjb250ZW50IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImxpbmsiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUFBOztBQUFBOztBQUFBLHFCQUNqQkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBWDtBQUFBLEdBQUQsQ0FETTtBQUFBLE1BQzFCQyxJQUQwQixnQkFDMUJBLElBRDBCOztBQUVsQyxNQUFNQyxNQUFNLDRCQUFHRCxJQUFJLENBQUNFLG9CQUFMLENBQTBCLGFBQTFCLENBQUgsMERBQUcsc0JBQTBDQyxPQUF6RDtBQUVBLHNCQUNDO0FBQUssYUFBUyxFQUFDLDRHQUFmO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUNDO0FBQUssV0FBRyxFQUFDLDBCQUFUO0FBQW9DLGlCQUFTLEVBQUM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUM7QUFBRyxpQkFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUtDO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSxnQkFDRUYsTUFBTSxJQUNOQSxNQUFNLENBQUNHLE1BQVAsR0FBZ0IsQ0FEaEIsSUFFQUgsTUFBTSxDQUFDSSxHQUFQLENBQVcsVUFBQ0MsSUFBRDtBQUFBLDRCQUNWO0FBQ0MsY0FBSSxFQUFFQSxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRUMsSUFEYjtBQUdDLGdCQUFNLEVBQUMsUUFIUjtBQUlDLG1CQUFTLEVBQUMsMkNBSlg7QUFBQSxrQ0FNQyxxRUFBQyxpRUFBRDtBQUFxQixnQkFBSSxFQUFFRCxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRUU7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORCxlQU9DO0FBQUEsc0JBQUlGLElBQUosYUFBSUEsSUFBSix1QkFBSUEsSUFBSSxDQUFFRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEQ7QUFBQSxXQUVNRixJQUZOLGFBRU1BLElBRk4sdUJBRU1BLElBQUksQ0FBRUUsSUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBWDtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXVCQSxDQTNCRDs7R0FBTVgsb0I7VUFDWUMsdUQ7OztLQURaRCxvQjtBQTZCU0EsbUZBQWYiLCJmaWxlIjoiLi9tb2R1bGVzL0NhcmRzL1NvY2lhbE1lZGlhLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlckljb25Db21wb25lbnQgfSBmcm9tIFwibW9kdWxlcy9JY29uc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgU29jaWFsTWVkaWFDb21wb25lbnQgPSAoKSA9PiB7XG5cdGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSk7XG5cdGNvbnN0IHZhbHVlcyA9IHVzZXIuZGVmYXVsdFBvcnRmb2xpb0RhdGFbXCJzb2NpYWxNZWRpYVwiXT8uY29udGVudDtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBpdGVtcy1jZW50ZXIgZ2FwLTIgIHAtMTAgdGV4dC1sZWZ0IHctZnVsbCBtZDp3LTQvNSBteC1hdXRvIHNtOnctZnVsbCB4eHM6dy1mdWxsIHhzOnctZnVsbFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cblx0XHRcdFx0PGltZyBzcmM9XCIuL2ltYWdlcy9zb2NpYWxNZWRpYS5wbmdcIiBjbGFzc05hbWU9XCJ3LTYgaC02IHJvdW5kZWQtc21cIiAvPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LTd4bFwiPlNvY2lhbCBNZWRpYTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweC0xMCBweS01XCI+XG5cdFx0XHRcdHt2YWx1ZXMgJiZcblx0XHRcdFx0XHR2YWx1ZXMubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRcdHZhbHVlcy5tYXAoKGl0ZW0pID0+IChcblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdGhyZWY9e2l0ZW0/Lmxpbmt9XG5cdFx0XHRcdFx0XHRcdGtleT17aXRlbT8ubmFtZX1cblx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibS0yIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgZ2FwLTFcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8UmVuZGVySWNvbkNvbXBvbmVudCBuYW1lPXtpdGVtPy5uYW1lfSAvPlxuXHRcdFx0XHRcdFx0XHQ8cD57aXRlbT8ubmFtZX08L3A+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbE1lZGlhQ29tcG9uZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/Cards/SocialMedia.jsx\n");

/***/ })

})