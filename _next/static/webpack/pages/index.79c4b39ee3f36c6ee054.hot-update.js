webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/button-group.js":
/*!****************************************!*\
  !*** ./src/components/button-group.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
var _jsxFileName = "C:\\Users\\berke\\Desktop\\nextjs_landing_page\\src\\components\\button-group.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function ButtonGroup(_ref) {
  var next = _ref.next,
      previous = _ref.previous;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: {
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.button,
    className: "button__group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    onClick: previous,
    "aria-label": "Previous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowRoundBack"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 15
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    onClick: ne,
    "aria-label": "Previous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowRoundBack"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  })))));
}
_c = ButtonGroup;
var styles = {
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    mb: -4,
    button: {
      bg: 'transparent',
      border: '0px solid',
      fontSize: 40,
      cursor: 'pointer',
      px: '2px',
      color: '#BBC7D7',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'text'
      },
      '&:focus': {
        outline: 0
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "ButtonGroup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbkdyb3VwIiwibmV4dCIsInByZXZpb3VzIiwid2lkdGgiLCJzdHlsZXMiLCJidXR0b24iLCJuZSIsImJ1dHRvbkdyb3VwIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWIiLCJiZyIsImJvcmRlciIsImZvbnRTaXplIiwiY3Vyc29yIiwicHgiLCJjb2xvciIsInRyYW5zaXRpb24iLCJvdXRsaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsT0FBeUM7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3RELFNBQ0UscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUU7QUFBQ0MsV0FBSyxFQUFDO0FBQVAsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0kscURBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQWhCO0FBQXdCLGFBQVMsRUFBQyxlQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxXQUFPLEVBQUVILFFBQWpCO0FBQTJCLGtCQUFXLFVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQVEsV0FBTyxFQUFFSSxFQUFqQjtBQUFxQixrQkFBVyxVQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FERixDQURKLENBREY7QUFjRDtLQWZ1Qk4sVztBQWlCeEIsSUFBTUksTUFBTSxHQUFHO0FBQ2JHLGFBQVcsRUFBRTtBQUNYQyxXQUFPLEVBQUUsTUFERTtBQUVYQyxrQkFBYyxFQUFFLFFBRkw7QUFHWEMsTUFBRSxFQUFFLENBQUMsQ0FITTtBQUlYTCxVQUFNLEVBQUU7QUFDTk0sUUFBRSxFQUFFLGFBREU7QUFFTkMsWUFBTSxFQUFFLFdBRkY7QUFHTkMsY0FBUSxFQUFFLEVBSEo7QUFJTkMsWUFBTSxFQUFFLFNBSkY7QUFLTkMsUUFBRSxFQUFFLEtBTEU7QUFNTkMsV0FBSyxFQUFFLFNBTkQ7QUFPTkMsZ0JBQVUsRUFBRSxXQVBOO0FBUU4saUJBQVc7QUFDVEQsYUFBSyxFQUFFO0FBREUsT0FSTDtBQVdOLGlCQUFXO0FBQ1RFLGVBQU8sRUFBRTtBQURBO0FBWEw7QUFKRztBQURBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzljNGIzOWVlM2YzNmM2ZWUwNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgRmxleCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IElvSW9zQXJyb3dSb3VuZEJhY2ssIElvSW9zQXJyb3dSb3VuZEZvcndhcmQgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkdyb3VwKHsgbmV4dCwgcHJldmlvdXMgfSkge1xuICByZXR1cm4gKFxuICAgIDxGbGV4IHN4PXt7d2lkdGg6JzEwMCUnfX0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmJ1dHRvbn0gY2xhc3NOYW1lPVwiYnV0dG9uX19ncm91cFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2aW91c30gYXJpYS1sYWJlbD1cIlByZXZpb3VzXCI+XG4gICAgICAgICAgICAgIDxJb0lvc0Fycm93Um91bmRCYWNrLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZX0gYXJpYS1sYWJlbD1cIlByZXZpb3VzXCI+XG4gICAgICAgICAgICAgIDxJb0lvc0Fycm93Um91bmRCYWNrLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0ZsZXg+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgYnV0dG9uR3JvdXA6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1iOiAtNCxcbiAgICBidXR0b246IHtcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYm9yZGVyOiAnMHB4IHNvbGlkJyxcbiAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgcHg6ICcycHgnLFxuICAgICAgY29sb3I6ICcjQkJDN0Q3JyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==