webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/core-feature.js":
/*!**************************************!*\
  !*** ./src/sections/core-feature.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoreFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/core-feature.png */ "./src/assets/core-feature.png");
/* harmony import */ var assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/shape-pattern2.png */ "./src/assets/shape-pattern2.png");
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\berke\\Desktop\\freelancedemo\\nextjs_company_page\\src\\sections\\core-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */




var data = {
  subTitle: 'Neler Sunuyoruz',
  title: 'İlgi alanlarınıza uygun eğitimler',
  description: 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
  btnName: 'Get Started',
  btnURL: '#'
};
function CoreFeature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.coreFeature'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    description: data.description,
    btnName: data.btnName,
    btnURL: data.btnURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.shapeBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  })))));
}
_c = CoreFeature;
var styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7]
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6]
    }
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block']
  }
};
var _c;
$RefreshReg$(_c, "CoreFeature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvcmUtZmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3ViVGl0bGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnRuTmFtZSIsImJ0blVSTCIsIkNvcmVGZWF0dXJlIiwianN4Iiwic3giLCJ2YXJpYW50IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJDb250YWluZXIiLCJzdHlsZXMiLCJjb250YWluZXJCb3giLCJCb3giLCJjb250ZW50Qm94IiwiVGV4dEZlYXR1cmUiLCJ0aHVtYm5haWwiLCJJbWFnZSIsInNyYyIsIkZlYXR1cmVUaHVtYiIsImFsdCIsInNoYXBlQm94Iiwic2hhcGVQYXR0ZXJuIiwiX2MiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJwYiIsImZsZXhTaHJpbmsiLCJweCIsInRleHRBbGlnbiIsIndpZHRoIiwibXgiLCJwciIsInBvc2l0aW9uIiwibXIiLCJtbCIsInpJbmRleCIsImhlaWdodCIsImJvdHRvbSIsInJpZ2h0IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NEO0FBQ0o7QUFFQztBQUNFO0FBRXJELElBQU1BLElBQUksR0FBRztFQUNYQyxRQUFRLEVBQUUsaUJBQWlCO0VBQzNCQyxLQUFLLEVBQUUsbUNBQW1DO0VBQzFDQyxXQUFXLEVBQ1QsMklBQTJJO0VBQzdJQyxPQUFPLEVBQUUsYUFBYTtFQUN0QkMsTUFBTSxFQUFFO0FBQ1YsQ0FBQztBQUVjLFNBQVNDLFdBQVdBLENBQUEsRUFBRztFQUNwQyxPQUNDQyxvREFBQTtJQUFTQyxFQUFFLEVBQUU7TUFBQ0MsT0FBTyxFQUFFO0lBQXFCLENBQUU7SUFBQUMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFB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QyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0IsY0FBYyxFQUFFO01BQ2RDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3ZCO0VBQ0YsQ0FBQztFQUNEbEIsU0FBUyxFQUFFO0lBQ1RRLE9BQU8sRUFBRSxhQUFhO0lBQ3RCVyxRQUFRLEVBQUUsVUFBVTtJQUNwQkMsRUFBRSxFQUFFLE1BQU07SUFDVkMsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqQyxPQUFPLEVBQUU7TUFDUEYsUUFBUSxFQUFFLFVBQVU7TUFDcEJHLE1BQU0sRUFBRSxDQUFDO01BQ1RDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNO0lBQ3RCO0VBQ0YsQ0FBQztFQUNEbEIsUUFBUSxFQUFFO0lBQ1JjLFFBQVEsRUFBRSxVQUFVO0lBQ3BCSyxNQUFNLEVBQUUsQ0FBQyxFQUFFO0lBQ1hDLEtBQUssRUFBRSxDQUFDLEdBQUc7SUFDWEgsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNWZCxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsY0FBYztFQUNoRTtBQUNGLENBQUM7QUFBQyxJQUFBRCxFQUFBO0FBQUFtQixZQUFBLENBQUFuQixFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNjNzhlMDJlMjkyYzU3MTliNzg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XHJcblxyXG5pbXBvcnQgRmVhdHVyZVRodW1iIGZyb20gJ2Fzc2V0cy9jb3JlLWZlYXR1cmUucG5nJztcclxuaW1wb3J0IHNoYXBlUGF0dGVybiBmcm9tICdhc3NldHMvc2hhcGUtcGF0dGVybjIucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSB7XHJcbiAgc3ViVGl0bGU6ICdOZWxlciBTdW51eW9ydXonLFxyXG4gIHRpdGxlOiAnxLBsZ2kgYWxhbmxhcsSxbsSxemEgdXlndW4gZcSfaXRpbWxlcicsXHJcbiAgZGVzY3JpcHRpb246XHJcbiAgICAnR2V0IHlvdXIgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzIHRoYXQgc3VwcGxpZXMgYmVzdCBkZXNpZ24gc3lzdGVtIGd1aWRlbGluZXMgZXZlci4nLFxyXG4gIGJ0bk5hbWU6ICdHZXQgU3RhcnRlZCcsXHJcbiAgYnRuVVJMOiAnIycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3JlRmVhdHVyZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICA8c2VjdGlvbiBzeD17e3ZhcmlhbnQ6ICdzZWN0aW9uLmNvcmVGZWF0dXJlJ319PlxyXG4gICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICA8VGV4dEZlYXR1cmUgXHJcbiAgICAgICAgICBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX1cclxuICAgICAgICAgIHRpdGxlPXtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBidG5OYW1lPXtkYXRhLmJ0bk5hbWV9XHJcbiAgICAgICAgICBidG5VUkw9e2RhdGEuYnRuVVJMfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtGZWF0dXJlVGh1bWJ9IGFsdD1cIlRodW1ibmFpbFwiIC8+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnNoYXBlQm94fT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3NoYXBlUGF0dGVybn0gYWx0PVwiU2hhcGVcIi8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29udGFpbmVyQm94OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBmbGV4V3JhcDogWyd3cmFwJywgbnVsbCwgbnVsbCwgJ25vd3JhcCddLFxyXG4gICAgcGI6IFswLCA3LCAwLCBudWxsLCA3XSxcclxuICB9LFxyXG4gIGNvbnRlbnRCb3g6IHtcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBweDogWzAsIG51bGwsICczMHB4JywgMF0sXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgbnVsbCwgMzQwLCA0MDAsIDQzMCwgbnVsbCwgNDg1XSxcclxuICAgIHBiOiBbJzUwcHgnLCAnNjBweCcsIG51bGwsIDBdLFxyXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgJy5kZXNjcmlwdGlvbic6IHtcclxuICAgICAgcHI6IFswLCBudWxsLCA2LCA3LCA2XSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aHVtYm5haWw6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIG1yOiAnYXV0bycsXHJcbiAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgN10sXHJcbiAgICAnPiBpbWcnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB6SW5kZXg6IDEsXHJcbiAgICAgIGhlaWdodDogWzMxMCwgJ2F1dG8nXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzaGFwZUJveDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3R0b206IC02NSxcclxuICAgIHJpZ2h0OiAtMTY1LFxyXG4gICAgekluZGV4OiAtMSxcclxuICAgIGRpc3BsYXk6IFsnbm9uZScsICdpbmxpbmUtYmxvY2snLCAnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9