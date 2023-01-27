webpackHotUpdate_N_E("pages/_app",{

/***/ "./modules/Cards/WorkExperience.jsx":
/*!******************************************!*\
  !*** ./modules/Cards/WorkExperience.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Project/Personal-Portfolio-Starter/modules/Cards/WorkExperience.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar WorkExperienceComponent = function WorkExperienceComponent() {\n  _s();\n\n  var _user$defaultPortfoli;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state;\n  }),\n      user = _useSelector.user;\n\n  var values = (_user$defaultPortfoli = user.defaultPortfolioData[\"workExperience\"]) === null || _user$defaultPortfoli === void 0 ? void 0 : _user$defaultPortfoli.content;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"p-10 text-left w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex justify-start items-center gap-2 pb-2 border-b border-gray-800\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"./images/workExperience.png\",\n        className: \"w-6 h-6 rounded-sm\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"text-7xl\",\n        children: \"Work Experience\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"px-10 py-5\",\n      children: values && values.length > 0 && (values === null || values === void 0 ? void 0 : values.map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"border border-gray-800 dark:border-gray-600 dark:text-white rounded-md my-4 hover:bg-gray-100 dark:hover:bg-gray-800\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"flex justify-between items-center p-2 border-b border-gray-700\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: item.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: \"text-xs italic text-gray-500\",\n              children: item.date\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 9\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 8\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"p-4\",\n            children: item.content\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 8\n          }, _this)]\n        }, item.name, true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 7\n        }, _this);\n      }))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(WorkExperienceComponent, \"HA6wZhGeXNR9tzJ3aDGGsGCdOyI=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c = WorkExperienceComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkExperienceComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"WorkExperienceComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9DYXJkcy9Xb3JrRXhwZXJpZW5jZS5qc3g/ODVjOSJdLCJuYW1lcyI6WyJXb3JrRXhwZXJpZW5jZUNvbXBvbmVudCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidmFsdWVzIiwiZGVmYXVsdFBvcnRmb2xpb0RhdGEiLCJjb250ZW50IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUFBOztBQUFBOztBQUFBLHFCQUVwQkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBWDtBQUFBLEdBQUQsQ0FGUztBQUFBLE1BRTdCQyxJQUY2QixnQkFFN0JBLElBRjZCOztBQUdyQyxNQUFNQyxNQUFNLDRCQUFHRCxJQUFJLENBQUNFLG9CQUFMLENBQTBCLGdCQUExQixDQUFILDBEQUFHLHNCQUE2Q0MsT0FBNUQ7QUFDQSxzQkFDQztBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFDLHFFQUFmO0FBQUEsOEJBQ0M7QUFBSyxXQUFHLEVBQUMsNkJBQVQ7QUFBdUMsaUJBQVMsRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQztBQUFHLGlCQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBS0M7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLGdCQUNFRixNQUFNLElBQ05BLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixDQURoQixLQUVBSCxNQUZBLGFBRUFBLE1BRkEsdUJBRUFBLE1BQU0sQ0FBRUksR0FBUixDQUFZLFVBQUNDLElBQUQ7QUFBQSw0QkFDWDtBQUVDLG1CQUFTLEVBQUMsc0hBRlg7QUFBQSxrQ0FJQztBQUFLLHFCQUFTLEVBQUMsZ0VBQWY7QUFBQSxvQ0FDQztBQUFBLHdCQUFJQSxJQUFJLENBQUNDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQUcsdUJBQVMsRUFBQyw4QkFBYjtBQUFBLHdCQUE2Q0QsSUFBSSxDQUFDRTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRCxlQVFDO0FBQUcscUJBQVMsRUFBQyxLQUFiO0FBQUEsc0JBQW9CRixJQUFJLENBQUNIO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkQ7QUFBQSxXQUNNRyxJQUFJLENBQUNDLElBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBLE9BQVosQ0FGQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXdCQSxDQTVCRDs7R0FBTVYsdUI7VUFFWUMsdUQ7OztLQUZaRCx1QjtBQTZCU0Esc0ZBQWYiLCJmaWxlIjoiLi9tb2R1bGVzL0NhcmRzL1dvcmtFeHBlcmllbmNlLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgV29ya0V4cGVyaWVuY2VDb21wb25lbnQgPSAoKSA9PiB7XG5cdFxuXHRjb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUpO1xuXHRjb25zdCB2YWx1ZXMgPSB1c2VyLmRlZmF1bHRQb3J0Zm9saW9EYXRhW1wid29ya0V4cGVyaWVuY2VcIl0/LmNvbnRlbnQ7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJwLTEwIHRleHQtbGVmdCB3LWZ1bGxcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBnYXAtMiBwYi0yIGJvcmRlci1iIGJvcmRlci1ncmF5LTgwMFwiPlxuXHRcdFx0XHQ8aW1nIHNyYz1cIi4vaW1hZ2VzL3dvcmtFeHBlcmllbmNlLnBuZ1wiIGNsYXNzTmFtZT1cInctNiBoLTYgcm91bmRlZC1zbVwiIC8+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtN3hsXCI+V29yayBFeHBlcmllbmNlPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB4LTEwIHB5LTVcIj5cblx0XHRcdFx0e3ZhbHVlcyAmJlxuXHRcdFx0XHRcdHZhbHVlcy5sZW5ndGggPiAwICYmXG5cdFx0XHRcdFx0dmFsdWVzPy5tYXAoKGl0ZW0pID0+IChcblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0a2V5PXtpdGVtLm5hbWV9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazp0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgbXktNCBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmhvdmVyOmJnLWdyYXktODAwXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcC0yIGJvcmRlci1iIGJvcmRlci1ncmF5LTcwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwPntpdGVtLm5hbWV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQteHMgaXRhbGljIHRleHQtZ3JheS01MDBcIj57aXRlbS5kYXRlfTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInAtNFwiPntpdGVtLmNvbnRlbnR9PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5leHBvcnQgZGVmYXVsdCBXb3JrRXhwZXJpZW5jZUNvbXBvbmVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/Cards/WorkExperience.jsx\n");

/***/ })

})