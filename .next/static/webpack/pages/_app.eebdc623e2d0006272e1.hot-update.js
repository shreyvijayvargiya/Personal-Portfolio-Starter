webpackHotUpdate_N_E("pages/_app",{

/***/ "./modules/Cards/WorkExperience.jsx":
/*!******************************************!*\
  !*** ./modules/Cards/WorkExperience.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Project/Personal-Portfolio-Starter/modules/Cards/WorkExperience.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar WorkExperienceComponent = function WorkExperienceComponent() {\n  _s();\n\n  var _user$defaultPortfoli;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state;\n  }),\n      user = _useSelector.user;\n\n  var values = (_user$defaultPortfoli = user.defaultPortfolioData[\"workExperience\"]) === null || _user$defaultPortfoli === void 0 ? void 0 : _user$defaultPortfoli.content;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"grid grid-cols-2 items-center gap-2 p-10 text-left md:w-4/5 mx-auto sm:w-full xxs:w-full xs:w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"p-2\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"./images/workExperience.png\",\n        className: \"w-20 h-20 rounded-sm\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"text-5xl\",\n        children: \"Work Experience\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"px-5 py-5\",\n      children: values && values.length > 0 && (values === null || values === void 0 ? void 0 : values.map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"border border-gray-800 dark:border-gray-600 dark:text-white rounded-md my-4 hover:bg-gray-100 dark:hover:bg-gray-800\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"flex justify-between items-center p-2 border-b border-gray-700\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: item.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: \"text-xs italic text-gray-500\",\n              children: item.date\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 9\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 8\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"p-4\",\n            children: item.content\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 8\n          }, _this)]\n        }, item.name, true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 7\n        }, _this);\n      }))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(WorkExperienceComponent, \"HA6wZhGeXNR9tzJ3aDGGsGCdOyI=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c = WorkExperienceComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkExperienceComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"WorkExperienceComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9DYXJkcy9Xb3JrRXhwZXJpZW5jZS5qc3g/ODVjOSJdLCJuYW1lcyI6WyJXb3JrRXhwZXJpZW5jZUNvbXBvbmVudCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidmFsdWVzIiwiZGVmYXVsdFBvcnRmb2xpb0RhdGEiLCJjb250ZW50IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUFBOztBQUFBOztBQUFBLHFCQUVwQkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBWDtBQUFBLEdBQUQsQ0FGUztBQUFBLE1BRTdCQyxJQUY2QixnQkFFN0JBLElBRjZCOztBQUdyQyxNQUFNQyxNQUFNLDRCQUFHRCxJQUFJLENBQUNFLG9CQUFMLENBQTBCLGdCQUExQixDQUFILDBEQUFHLHNCQUE2Q0MsT0FBNUQ7QUFDQSxzQkFDQztBQUFLLGFBQVMsRUFBQyxvR0FBZjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDQztBQUFLLFdBQUcsRUFBQyw2QkFBVDtBQUF1QyxpQkFBUyxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDO0FBQUcsaUJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFLQztBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsZ0JBQ0VGLE1BQU0sSUFDTkEsTUFBTSxDQUFDRyxNQUFQLEdBQWdCLENBRGhCLEtBRUFILE1BRkEsYUFFQUEsTUFGQSx1QkFFQUEsTUFBTSxDQUFFSSxHQUFSLENBQVksVUFBQ0MsSUFBRDtBQUFBLDRCQUNYO0FBRUMsbUJBQVMsRUFBQyxzSEFGWDtBQUFBLGtDQUlDO0FBQUsscUJBQVMsRUFBQyxnRUFBZjtBQUFBLG9DQUNDO0FBQUEsd0JBQUlBLElBQUksQ0FBQ0M7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBRUM7QUFBRyx1QkFBUyxFQUFDLDhCQUFiO0FBQUEsd0JBQTZDRCxJQUFJLENBQUNFO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpELGVBUUM7QUFBRyxxQkFBUyxFQUFDLEtBQWI7QUFBQSxzQkFBb0JGLElBQUksQ0FBQ0g7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRDtBQUFBLFdBQ01HLElBQUksQ0FBQ0MsSUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBWixDQUZBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBd0JBLENBNUJEOztHQUFNVix1QjtVQUVZQyx1RDs7O0tBRlpELHVCO0FBNkJTQSxzRkFBZiIsImZpbGUiOiIuL21vZHVsZXMvQ2FyZHMvV29ya0V4cGVyaWVuY2UuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCBXb3JrRXhwZXJpZW5jZUNvbXBvbmVudCA9ICgpID0+IHtcblx0XG5cdGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSk7XG5cdGNvbnN0IHZhbHVlcyA9IHVzZXIuZGVmYXVsdFBvcnRmb2xpb0RhdGFbXCJ3b3JrRXhwZXJpZW5jZVwiXT8uY29udGVudDtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgaXRlbXMtY2VudGVyIGdhcC0yIHAtMTAgdGV4dC1sZWZ0IG1kOnctNC81IG14LWF1dG8gc206dy1mdWxsIHh4czp3LWZ1bGwgeHM6dy1mdWxsXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxuXHRcdFx0XHQ8aW1nIHNyYz1cIi4vaW1hZ2VzL3dvcmtFeHBlcmllbmNlLnBuZ1wiIGNsYXNzTmFtZT1cInctMjAgaC0yMCByb3VuZGVkLXNtXCIgLz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC01eGxcIj5Xb3JrIEV4cGVyaWVuY2U8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHgtNSBweS01XCI+XG5cdFx0XHRcdHt2YWx1ZXMgJiZcblx0XHRcdFx0XHR2YWx1ZXMubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRcdHZhbHVlcz8ubWFwKChpdGVtKSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdGtleT17aXRlbS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6dGV4dC13aGl0ZSByb3VuZGVkLW1kIG15LTQgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpob3ZlcjpiZy1ncmF5LTgwMFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMiBib3JkZXItYiBib3JkZXItZ3JheS03MDBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD57aXRlbS5uYW1lfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGl0YWxpYyB0ZXh0LWdyYXktNTAwXCI+e2l0ZW0uZGF0ZX08L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwLTRcIj57aXRlbS5jb250ZW50fTwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgV29ya0V4cGVyaWVuY2VDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./modules/Cards/WorkExperience.jsx\n");

/***/ })

})