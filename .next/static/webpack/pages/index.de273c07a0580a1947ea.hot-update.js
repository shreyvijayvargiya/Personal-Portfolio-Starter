webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/Cards/Projects.jsx":
/*!************************************!*\
  !*** ./modules/Cards/Projects.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Project/Personal-Portfolio-Starter/modules/Cards/Projects.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar ProjectsComponent = function ProjectsComponent() {\n  _s();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state;\n  }),\n      user = _useSelector.user;\n\n  var values = user.defaultPortfolioData[\"projects\"].content;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"grid grid-cols-2 items-center gap-2 p-10 text-left md:w-4/5 mx-auto sm:w-full xxs:w-full xs:w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"p-2\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"./images/projects.png\",\n        className: \"w-20 h-20 rounded-sm\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"text-5xl\",\n        children: \"Projects\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"list-disc px-10 py-5 border border-gray-800 rounded-md dark:border-gray-800\",\n      children: values && values.length > 0 && values.map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          className: \"m-2\",\n          children: [item === null || item === void 0 ? void 0 : item.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: item === null || item === void 0 ? void 0 : item.link,\n            className: \"text-indigo-600 mx-2\",\n            target: \"_blank\",\n            children: \"Link\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 8\n          }, _this)]\n        }, item.name, true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 7\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(ProjectsComponent, \"HA6wZhGeXNR9tzJ3aDGGsGCdOyI=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c = ProjectsComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectsComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9DYXJkcy9Qcm9qZWN0cy5qc3g/NGIwOSJdLCJuYW1lcyI6WyJQcm9qZWN0c0NvbXBvbmVudCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidmFsdWVzIiwiZGVmYXVsdFBvcnRmb2xpb0RhdGEiLCJjb250ZW50IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBOztBQUFBLHFCQUNkQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFYO0FBQUEsR0FBRCxDQURHO0FBQUEsTUFDdkJDLElBRHVCLGdCQUN2QkEsSUFEdUI7O0FBRS9CLE1BQU1DLE1BQU0sR0FBR0QsSUFBSSxDQUFDRSxvQkFBTCxDQUEwQixVQUExQixFQUFzQ0MsT0FBckQ7QUFFQSxzQkFDQztBQUFLLGFBQVMsRUFBQyxvR0FBZjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDQztBQUFLLFdBQUcsRUFBQyx1QkFBVDtBQUFpQyxpQkFBUyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDO0FBQUcsaUJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFLQztBQUFJLGVBQVMsRUFBQyw2RUFBZDtBQUFBLGdCQUNFRixNQUFNLElBQ05BLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixDQURoQixJQUVBSCxNQUFNLENBQUNJLEdBQVAsQ0FBVyxVQUFDQyxJQUFEO0FBQUEsNEJBQ1Y7QUFBSSxtQkFBUyxFQUFDLEtBQWQ7QUFBQSxxQkFDRUEsSUFERixhQUNFQSxJQURGLHVCQUNFQSxJQUFJLENBQUVDLElBRFIsZUFFQztBQUNDLGdCQUFJLEVBQUVELElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFRSxJQURiO0FBRUMscUJBQVMsRUFBQyxzQkFGWDtBQUdDLGtCQUFNLEVBQUMsUUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRDtBQUFBLFdBQXlCRixJQUFJLENBQUNDLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFYO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBd0JBLENBNUJEOztHQUFNVixpQjtVQUNZQyx1RDs7O0tBRFpELGlCO0FBNkJTQSxnRkFBZiIsImZpbGUiOiIuL21vZHVsZXMvQ2FyZHMvUHJvamVjdHMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgUHJvamVjdHNDb21wb25lbnQgPSAoKSA9PiB7XG5cdGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSk7XG5cdGNvbnN0IHZhbHVlcyA9IHVzZXIuZGVmYXVsdFBvcnRmb2xpb0RhdGFbXCJwcm9qZWN0c1wiXS5jb250ZW50O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGl0ZW1zLWNlbnRlciBnYXAtMiBwLTEwIHRleHQtbGVmdCBtZDp3LTQvNSBteC1hdXRvIHNtOnctZnVsbCB4eHM6dy1mdWxsIHhzOnctZnVsbFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cblx0XHRcdFx0PGltZyBzcmM9XCIuL2ltYWdlcy9wcm9qZWN0cy5wbmdcIiBjbGFzc05hbWU9XCJ3LTIwIGgtMjAgcm91bmRlZC1zbVwiIC8+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtNXhsXCI+UHJvamVjdHM8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxvbCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgcHgtMTAgcHktNSBib3JkZXIgYm9yZGVyLWdyYXktODAwIHJvdW5kZWQtbWQgZGFyazpib3JkZXItZ3JheS04MDBcIj5cblx0XHRcdFx0e3ZhbHVlcyAmJlxuXHRcdFx0XHRcdHZhbHVlcy5sZW5ndGggPiAwICYmXG5cdFx0XHRcdFx0dmFsdWVzLm1hcCgoaXRlbSkgPT4gKFxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm0tMlwiIGtleT17aXRlbS5uYW1lfT5cblx0XHRcdFx0XHRcdFx0e2l0ZW0/Lm5hbWV9XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17aXRlbT8ubGlua31cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby02MDAgbXgtMlwiXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdExpbmtcblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpKX1cblx0XHRcdDwvb2w+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNDb21wb25lbnQ7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/Cards/Projects.jsx\n");

/***/ })

})