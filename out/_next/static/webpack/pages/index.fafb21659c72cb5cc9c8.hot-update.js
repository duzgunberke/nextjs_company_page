webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/key-feature.js":
/*!*************************************!*\
  !*** ./src/sections/key-feature.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card-column.js */ "./src/components/feature-card-column.js");
/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/key-feature/performance.svg */ "./src/assets/key-feature/performance.svg");
/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/key-feature/partnership.svg */ "./src/assets/key-feature/partnership.svg");
/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/key-feature/subscription.svg */ "./src/assets/key-feature/subscription.svg");
/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/key-feature/support.svg */ "./src/assets/key-feature/support.svg");
/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\berke\\Desktop\\freelancedemo\\nextjs_company_page\\src\\sections\\key-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */








var data = [{
  id: 1,
  imgSrc: assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'Fast Performance',
  title: 'Fast Performance',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 2,
  imgSrc: assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'Partnership deal',
  title: 'Partnership deal',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 3,
  imgSrc: assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Pro Subscription',
  title: 'Pro Subscription',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 4,
  imgSrc: assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'Customer Support',
  title: 'Customer Support',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}];
function KeyFeature() {
  var _this = this;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.keyFeature'
    },
    id: "feature",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "\u0130\u015Flev nedir",
    title: "Meet the feature of our product",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      src: item.imgSrc,
      alt: item.altText,
      title: item.title,
      text: item.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    });
  }))));
}
_c = KeyFeature;
var styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']
  }
};
var _c;
$RefreshReg$(_c, "KeyFeature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2tleS1mZWF0dXJlLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsImltZ1NyYyIsIlBlcmZvcm1hbmNlIiwiYWx0VGV4dCIsInRpdGxlIiwidGV4dCIsIlBhcnRuZXJzaGlwIiwiU3Vic2NyaXB0aW9uIiwiU3VwcG9ydCIsIktleUZlYXR1cmUiLCJfdGhpcyIsImpzeCIsInN4IiwidmFyaWFudCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiQ29udGFpbmVyIiwiU2VjdGlvbkhlYWRlciIsInNsb2dhbiIsIkdyaWQiLCJzdHlsZXMiLCJncmlkIiwibWFwIiwiaXRlbSIsIkZlYXR1cmVDYXJkQ29sdW1uIiwia2V5Iiwic3JjIiwiYWx0IiwiX2MiLCJ3aWR0aCIsIm14IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMrQjtBQUNZO0FBQ2M7QUFDUztBQUNMO0FBQ0E7QUFDRTtBQUNWO0FBRXJELElBQU1BLElBQUksR0FBRyxDQUNYO0VBQ0VDLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLE1BQU0sRUFBRUMseUVBQVc7RUFDbkJDLE9BQU8sRUFBRSxrQkFBa0I7RUFDM0JDLEtBQUssRUFBRSxrQkFBa0I7RUFDekJDLElBQUksRUFDRjtBQUNKLENBQUMsRUFDRDtFQUNFTCxFQUFFLEVBQUUsQ0FBQztFQUNMQyxNQUFNLEVBQUVLLHlFQUFXO0VBQ25CSCxPQUFPLEVBQUUsa0JBQWtCO0VBQzNCQyxLQUFLLEVBQUUsa0JBQWtCO0VBQ3pCQyxJQUFJLEVBQ0Y7QUFDSixDQUFDLEVBQ0Q7RUFDRUwsRUFBRSxFQUFFLENBQUM7RUFDTEMsTUFBTSxFQUFFTSwwRUFBWTtFQUNwQkosT0FBTyxFQUFFLGtCQUFrQjtFQUMzQkMsS0FBSyxFQUFFLGtCQUFrQjtFQUN6QkMsSUFBSSxFQUNGO0FBQ0osQ0FBQyxFQUNEO0VBQ0VMLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLE1BQU0sRUFBRU8scUVBQU87RUFDZkwsT0FBTyxFQUFFLGtCQUFrQjtFQUMzQkMsS0FBSyxFQUFFLGtCQUFrQjtFQUN6QkMsSUFBSSxFQUNGO0FBQ0osQ0FBQyxDQUNGO0FBRWMsU0FBU0ksVUFBVUEsQ0FBQSxFQUFHO0VBQUEsSUFBQUMsS0FBQTtFQUNuQyxPQUNDQyxvREFBQTtJQUFTQyxFQUFFLEVBQUU7TUFBQ0MsT0FBTyxFQUFDO0lBQW9CLENBQUU7SUFBQ2IsRUFBRSxFQUFDLFNBQVM7SUFBQWMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3hEUixvREFBQSxDQUFDUyxrREFBUztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDUlIsb0RBQUEsQ0FBQ1Usa0VBQWE7SUFDZEMsTUFBTSxFQUFDLHVCQUFhO0lBQ3BCbEIsS0FBSyxFQUFDLGlDQUFpQztJQUFBVSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsRUFDckMsRUFDRlIsb0RBQUEsQ0FBQ1ksNkNBQUk7SUFBQ1gsRUFBRSxFQUFFWSxNQUFNLENBQUNDLElBQUs7SUFBQVgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ25CcEIsSUFBSSxDQUFDMkIsR0FBRyxDQUFDLFVBQUNDLElBQUk7SUFBQSxPQUNiaEIsb0RBQUEsQ0FBQ2lCLHlFQUFpQjtNQUNoQkMsR0FBRyxFQUFFRixJQUFJLENBQUMzQixFQUFHO01BQ2I4QixHQUFHLEVBQUVILElBQUksQ0FBQzFCLE1BQU87TUFDakI4QixHQUFHLEVBQUVKLElBQUksQ0FBQ3hCLE9BQVE7TUFDbEJDLEtBQUssRUFBRXVCLElBQUksQ0FBQ3ZCLEtBQU07TUFDbEJDLElBQUksRUFBRXNCLElBQUksQ0FBQ3RCLElBQUs7TUFBQVMsTUFBQSxFQUFBSixLQUFBO01BQUFLLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsRUFDaEI7RUFBQSxDQUNILENBQUMsQ0FDRyxDQUNHLENBQ0g7QUFFYjtBQUFDYSxFQUFBLEdBdEJ1QnZCLFVBQVU7QUF3QmxDLElBQU1lLE1BQU0sR0FBRztFQUNiQyxJQUFJLEVBQUU7SUFDSlEsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUM7SUFDOUJDLEVBQUUsRUFBRSxNQUFNO0lBQ1ZDLE9BQU8sRUFBRSxDQUNQLFFBQVEsRUFDUixJQUFJLEVBQ0osV0FBVyxFQUNYLFdBQVcsRUFDWCxNQUFNLEVBQ04sV0FBVyxFQUNYLFdBQVcsQ0FDWjtJQUNEQyxtQkFBbUIsRUFBRSxDQUNuQixlQUFlLEVBQ2YsSUFBSSxFQUNKLGVBQWUsRUFDZixJQUFJLEVBQ0osZUFBZTtFQUVuQjtBQUNGLENBQUM7QUFBQyxJQUFBSixFQUFBO0FBQUFLLFlBQUEsQ0FBQUwsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYWZiMjE2NTljNzJjYjVjYzljOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IEZlYXR1cmVDYXJkQ29sdW1uIGZyb20gJ2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLWNvbHVtbi5qcyc7XHJcbmltcG9ydCBQZXJmb3JtYW5jZSBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvcGVyZm9ybWFuY2Uuc3ZnJztcclxuaW1wb3J0IFBhcnRuZXJzaGlwIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9wYXJ0bmVyc2hpcC5zdmcnO1xyXG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9zdWJzY3JpcHRpb24uc3ZnJztcclxuaW1wb3J0IFN1cHBvcnQgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3N1cHBvcnQuc3ZnJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWdTcmM6IFBlcmZvcm1hbmNlLFxyXG4gICAgYWx0VGV4dDogJ0Zhc3QgUGVyZm9ybWFuY2UnLFxyXG4gICAgdGl0bGU6ICdGYXN0IFBlcmZvcm1hbmNlJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaW1nU3JjOiBQYXJ0bmVyc2hpcCxcclxuICAgIGFsdFRleHQ6ICdQYXJ0bmVyc2hpcCBkZWFsJyxcclxuICAgIHRpdGxlOiAnUGFydG5lcnNoaXAgZGVhbCcsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGltZ1NyYzogU3Vic2NyaXB0aW9uLFxyXG4gICAgYWx0VGV4dDogJ1BybyBTdWJzY3JpcHRpb24nLFxyXG4gICAgdGl0bGU6ICdQcm8gU3Vic2NyaXB0aW9uJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaW1nU3JjOiBTdXBwb3J0LFxyXG4gICAgYWx0VGV4dDogJ0N1c3RvbWVyIFN1cHBvcnQnLFxyXG4gICAgdGl0bGU6ICdDdXN0b21lciBTdXBwb3J0JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS2V5RmVhdHVyZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICA8c2VjdGlvbiBzeD17e3ZhcmlhbnQ6J3NlY3Rpb24ua2V5RmVhdHVyZSd9fSBpZD1cImZlYXR1cmVcIj5cclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxTZWN0aW9uSGVhZGVyIFxyXG4gICAgICBzbG9nYW49XCLEsMWfbGV2IG5lZGlyXCJcclxuICAgICAgdGl0bGU9XCJNZWV0IHRoZSBmZWF0dXJlIG9mIG91ciBwcm9kdWN0XCJcclxuICAgICAgLz5cclxuICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICA8RmVhdHVyZUNhcmRDb2x1bW4gXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgc3JjPXtpdGVtLmltZ1NyY31cclxuICAgICAgICAgICAgYWx0PXtpdGVtLmFsdFRleHR9XHJcbiAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBncmlkOiB7XHJcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgZ3JpZEdhcDogW1xyXG4gICAgICAnMzVweCAwJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzQwcHggNDBweCcsXHJcbiAgICAgICc1MHB4IDYwcHgnLFxyXG4gICAgICAnMzBweCcsXHJcbiAgICAgICc1MHB4IDQwcHgnLFxyXG4gICAgICAnNTVweCA5MHB4JyxcclxuICAgIF0sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDQsMWZyKScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=