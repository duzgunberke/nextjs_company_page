webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/list.js":
/*!********************************!*\
  !*** ./src/components/list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");

var _jsxFileName = "C:\\Users\\berke\\Desktop\\nextjs_landing_page\\src\\components\\list.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function List(_ref) {
  var _this = this;

  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      parentStyle = _ref.parentStyle,
      childStyle = _ref.childStyle;
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "ul",
    sx: _objectSpread({
      listStyleType: 'none',
      margin: 0,
      padding: 0
    }, parentStyle),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, items.map(function (item) {
    return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      className: item.isAvailable ? 'open' : 'closed',
      as: "li",
      sx: _objectSpread({}, childStyle),
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      sx: sty,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 15
      }
    }));
  }));
}
_c = List;
var styles = {
  listIcon: {
    width: ['25px', '35px'],
    height: 'auto',
    color: 'primary',
    padding: 0,
    fontSize: [3, 5],
    ml: '-1px',
    flexShrink: 0,
    justifyContent: 'flex-start',
    mt: '2px'
  }
};

var _c;

$RefreshReg$(_c, "List");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdC5qcyJdLCJuYW1lcyI6WyJMaXN0IiwiaXRlbXMiLCJwYXJlbnRTdHlsZSIsImNoaWxkU3R5bGUiLCJsaXN0U3R5bGVUeXBlIiwibWFyZ2luIiwicGFkZGluZyIsIm1hcCIsIml0ZW0iLCJpc0F2YWlsYWJsZSIsImkiLCJzdHkiLCJzdHlsZXMiLCJsaXN0SWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJmb250U2l6ZSIsIm1sIiwiZmxleFNocmluayIsImp1c3RpZnlDb250ZW50IiwibXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULE9BQXVEO0FBQUE7O0FBQUEsd0JBQXZDQyxLQUF1QztBQUFBLE1BQXZDQSxLQUF1QywyQkFBL0IsRUFBK0I7QUFBQSxNQUEzQkMsV0FBMkIsUUFBM0JBLFdBQTJCO0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBQ3BFLFNBQ0UsTUFBQyw0Q0FBRDtBQUNDLE1BQUUsRUFBQyxJQURKO0FBRUMsTUFBRTtBQUNBQyxtQkFBYSxFQUFDLE1BRGQ7QUFFQUMsWUFBTSxFQUFDLENBRlA7QUFHQUMsYUFBTyxFQUFDO0FBSFIsT0FJR0osV0FKSCxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTS0QsS0FBSyxDQUFDTSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLFdBQ1QsTUFBQyw2Q0FBRDtBQUNBLGVBQVMsRUFBRUEsSUFBSSxDQUFDQyxXQUFMLEdBQWlCLE1BQWpCLEdBQXdCLFFBRG5DO0FBRUEsUUFBRSxFQUFDLElBRkg7QUFHQSxRQUFFLG9CQUFNTixVQUFOLENBSEY7QUFJQSxTQUFHLEVBQUVPLENBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1JLE1BQUMsbURBQUQ7QUFBWSxRQUFFLEVBQUVDLEdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFOSixDQURTO0FBQUEsR0FBVixDQVRMLENBREY7QUF3QkQ7S0F6QnVCWCxJO0FBMkJ4QixJQUFNWSxNQUFNLEdBQUc7QUFDYkMsVUFBUSxFQUFFO0FBQ1JDLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULENBREM7QUFFUkMsVUFBTSxFQUFFLE1BRkE7QUFHUkMsU0FBSyxFQUFFLFNBSEM7QUFJUlYsV0FBTyxFQUFFLENBSkQ7QUFLUlcsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FMRjtBQU1SQyxNQUFFLEVBQUUsTUFOSTtBQU9SQyxjQUFVLEVBQUUsQ0FQSjtBQVFSQyxrQkFBYyxFQUFFLFlBUlI7QUFTUkMsTUFBRSxFQUFFO0FBVEk7QUFERyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY4MzYwMjg5NzdhYjBkNTViNGVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmxleCwgQm94LCBJY29uQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KHsgaXRlbXMgPSBbXSwgcGFyZW50U3R5bGUsIGNoaWxkU3R5bGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgYXM9XCJ1bFwiXG4gICAgIHN4PXt7XG4gICAgICAgbGlzdFN0eWxlVHlwZTonbm9uZScsXG4gICAgICAgbWFyZ2luOjAsXG4gICAgICAgcGFkZGluZzowLFxuICAgICAgIC4uLnBhcmVudFN0eWxlXG4gICAgIH19XG4gICAgID5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4oXG4gICAgICAgICAgPEZsZXhcbiAgICAgICAgICBjbGFzc05hbWU9e2l0ZW0uaXNBdmFpbGFibGU/J29wZW4nOidjbG9zZWQnfVxuICAgICAgICAgIGFzPVwibGlcIlxuICAgICAgICAgIHN4PXt7Li4uY2hpbGRTdHlsZX19XG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24gc3g9e3N0eX0+XG5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgKSl9XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgbGlzdEljb246IHtcbiAgICB3aWR0aDogWycyNXB4JywgJzM1cHgnXSxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgZm9udFNpemU6IFszLCA1XSxcbiAgICBtbDogJy0xcHgnLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICBtdDogJzJweCcsXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==