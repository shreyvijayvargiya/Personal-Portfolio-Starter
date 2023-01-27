webpackHotUpdate_N_E("pages/_app",{

/***/ "./modules/Cards/Skill.jsx":
/*!*********************************!*\
  !*** ./modules/Cards/Skill.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Project/Personal-Portfolio-Starter/modules/Cards/Skill.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar SkillsComponent = function SkillsComponent() {\n  _s();\n\n  var _user$defaultPortfoli;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state;\n  }),\n      user = _useSelector.user;\n\n  var values = (_user$defaultPortfoli = user.defaultPortfolioData[\"skills\"]) === null || _user$defaultPortfoli === void 0 ? void 0 : _user$defaultPortfoli.content;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"grid grid-cols-2 items-center gap-2  p-10 text-left md:w-4/5 mx-auto sm:w-full xxs:w-full xs:w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"p-2\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"./images/skills.png\",\n        className: \"w-20 h-20 rounded-sm\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"text-5xl\",\n        children: \"Skills\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n      className: \"list-disc px-10 py-5 border border-gray-800 rounded-md\",\n      children: values && values.length > 0 && (values === null || values === void 0 ? void 0 : values.map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: item\n        }, item, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 28\n        }, _this);\n      }))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(SkillsComponent, \"HA6wZhGeXNR9tzJ3aDGGsGCdOyI=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c = SkillsComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SkillsComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"SkillsComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9DYXJkcy9Ta2lsbC5qc3g/ZmNkNyJdLCJuYW1lcyI6WyJTa2lsbHNDb21wb25lbnQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInZhbHVlcyIsImRlZmF1bHRQb3J0Zm9saW9EYXRhIiwiY29udGVudCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUE7O0FBQUEscUJBQ1pDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQVg7QUFBQSxHQUFELENBREM7QUFBQSxNQUNyQkMsSUFEcUIsZ0JBQ3JCQSxJQURxQjs7QUFFN0IsTUFBTUMsTUFBTSw0QkFBR0QsSUFBSSxDQUFDRSxvQkFBTCxDQUEwQixRQUExQixDQUFILDBEQUFHLHNCQUFxQ0MsT0FBcEQ7QUFFQSxzQkFDQztBQUFLLGFBQVMsRUFBQyxxR0FBZjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDQztBQUFLLFdBQUcsRUFBQyxxQkFBVDtBQUErQixpQkFBUyxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDO0FBQUcsaUJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFLQztBQUFJLGVBQVMsRUFBQyx3REFBZDtBQUFBLGdCQUNFRixNQUFNLElBQ05BLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixDQURoQixLQUVBSCxNQUZBLGFBRUFBLE1BRkEsdUJBRUFBLE1BQU0sQ0FBRUksR0FBUixDQUFZLFVBQUNDLElBQUQ7QUFBQSw0QkFBVTtBQUFBLG9CQUFnQkE7QUFBaEIsV0FBU0EsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFWO0FBQUEsT0FBWixDQUZBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBYUEsQ0FqQkQ7O0dBQU1ULGU7VUFDWUMsdUQ7OztLQURaRCxlO0FBbUJTQSw4RUFBZiIsImZpbGUiOiIuL21vZHVsZXMvQ2FyZHMvU2tpbGwuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgU2tpbGxzQ29tcG9uZW50ID0gKCkgPT4ge1xuXHRjb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUpO1xuXHRjb25zdCB2YWx1ZXMgPSB1c2VyLmRlZmF1bHRQb3J0Zm9saW9EYXRhW1wic2tpbGxzXCJdPy5jb250ZW50O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGl0ZW1zLWNlbnRlciBnYXAtMiAgcC0xMCB0ZXh0LWxlZnQgbWQ6dy00LzUgbXgtYXV0byBzbTp3LWZ1bGwgeHhzOnctZnVsbCB4czp3LWZ1bGxcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XG5cdFx0XHRcdDxpbWcgc3JjPVwiLi9pbWFnZXMvc2tpbGxzLnBuZ1wiIGNsYXNzTmFtZT1cInctMjAgaC0yMCByb3VuZGVkLXNtXCIgLz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC01eGxcIj5Ta2lsbHM8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxvbCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgcHgtMTAgcHktNSBib3JkZXIgYm9yZGVyLWdyYXktODAwIHJvdW5kZWQtbWRcIj5cblx0XHRcdFx0e3ZhbHVlcyAmJlxuXHRcdFx0XHRcdHZhbHVlcy5sZW5ndGggPiAwICYmXG5cdFx0XHRcdFx0dmFsdWVzPy5tYXAoKGl0ZW0pID0+IDxsaSBrZXk9e2l0ZW19PntpdGVtfTwvbGk+KX1cblx0XHRcdDwvb2w+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTa2lsbHNDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./modules/Cards/Skill.jsx\n");

/***/ })

})