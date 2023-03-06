webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/workflow.js":
/*!**********************************!*\
  !*** ./src/sections/workflow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkFlow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/arrowOdd.svg */ "./src/assets/arrowOdd.svg");
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/arrowEven.svg */ "./src/assets/arrowEven.svg");
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\berke\\Desktop\\freelancedemo\\nextjs_company_page\\src\\sections\\workflow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */






var data = [{
  id: 1,
  title: "Harcama Limitlerinizi Belirleyin",
  text: "Get your blood tests delivered at home collect a sample from the your blood tests."
}, {
  id: 2,
  title: "Projenizi Planlayın",
  text: "Get your blood tests delivered at home collect a sample from the your blood tests."
}, {
  id: 3,
  title: "Teslimatı Onaylayın",
  text: "Get your blood tests delivered at home collect a sample from the your blood tests."
}, {
  id: 4,
  title: "Ödeme Şartlarını Belirleyin",
  text: "Get your blood tests delivered at home collect a sample from the your blood tests."
}];
function WorkFlow() {
  var _this = this;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: styles.workflow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "\u0130\u015F Ak\u0131\u015F\u0131 ",
    title: "Meet the featue of our product",
    isWhite: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.card,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.iconBox,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }, "0".concat(item.id)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.wrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      sx: styles.wrapper.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      sx: styles.wrapper.subTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, item.text)));
  }))));
}
_c = WorkFlow;
var styles = {
  workflow: {
    backgroundColor: "primary",
    backgroundImage: "url(".concat(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default.a, ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 10]
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: ["35px 0", null, "45px 30px", null, "50px 25px", null, null, "50px 65px"],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)", null, "repeat(4,1fr)"]
  },
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    textAlign: ["center", null, "left"],
    width: ["100%", "80%", "100%"],
    mx: ["auto"],
    px: [4, null, null, 0],
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      width: 215,
      height: 60,
      "@media screen and (max-width:1220px)": {
        display: "none"
      }
    },
    "&:nth-of-type(2n-1)::before": {
      backgroundImage: "url(".concat(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default.a, ")")
    },
    "&:nth-of-type(2n)::before": {
      backgroundImage: "url(".concat(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default.a, ")"),
      top: 17
    },
    "&:last-child::before": {
      display: "none"
    }
  },
  iconBox: {
    width: ["50px", null, "60px", null, null, "70px"],
    height: ["50px", null, "60px", null, null, "70px"],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    mb: [5, null, null, null, null, 6],
    mx: ["auto", null, 0],
    fontSize: [6, null, 7, null, null, "30px"],
    fontWeight: 700,
    justifyContent: "center",
    color: "#234582"
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: "white",
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "white",
      opacity: 0.75,
      pr: [0, null, null, null, null, 5]
    }
  }
};
var _c;
$RefreshReg$(_c, "WorkFlow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwidGV4dCIsIldvcmtGbG93IiwiX3RoaXMiLCJqc3giLCJzeCIsInN0eWxlcyIsIndvcmtmbG93IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJDb250YWluZXIiLCJTZWN0aW9uSGVhZGVyIiwic2xvZ2FuIiwiaXNXaGl0ZSIsIkdyaWQiLCJncmlkIiwibWFwIiwiaXRlbSIsIkJveCIsImNhcmQiLCJrZXkiLCJpY29uQm94IiwiY29uY2F0Iiwid3JhcHBlciIsIkhlYWRpbmciLCJUZXh0Iiwic3ViVGl0bGUiLCJfYyIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsIlBhdHRlcm5CRyIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsInBvc2l0aW9uIiwicHkiLCJtYiIsInB0IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInRleHRBbGlnbiIsIndpZHRoIiwibXgiLCJweCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiQXJyb3dPZGQiLCJBcnJvd0V2ZW4iLCJmbGV4U2hyaW5rIiwiYm9yZGVyUmFkaXVzIiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJtdCIsImxpbmVIZWlnaHQiLCJwciIsIm9wYWNpdHkiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMrQjtBQUNnQztBQUNUO0FBRVQ7QUFDRjtBQUNFO0FBRTdDLElBQU1BLElBQUksR0FBRyxDQUNYO0VB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SSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNuQztFQUNGO0FBQ0YsQ0FBQztBQUFDLElBQUFsQyxFQUFBO0FBQUFvQyxZQUFBLENBQUFwQyxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVjZDI5OTk4OTQzYjRjODhhMDRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyXCI7XHJcblxyXG5pbXBvcnQgUGF0dGVybkJHIGZyb20gXCJhc3NldHMvcGF0dGVybkJHLnBuZ1wiO1xyXG5pbXBvcnQgQXJyb3dPZGQgZnJvbSBcImFzc2V0cy9hcnJvd09kZC5zdmdcIjtcclxuaW1wb3J0IEFycm93RXZlbiBmcm9tIFwiYXNzZXRzL2Fycm93RXZlbi5zdmdcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogXCJIYXJjYW1hIExpbWl0bGVyaW5pemkgQmVsaXJsZXlpblwiLFxyXG4gICAgdGV4dDpcclxuICAgICAgXCJHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiBcIlByb2plbml6aSBQbGFubGF5xLFuXCIsXHJcbiAgICB0ZXh0OlxyXG4gICAgICBcIkdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6IFwiVGVzbGltYXTEsSBPbmF5bGF5xLFuXCIsXHJcbiAgICB0ZXh0OlxyXG4gICAgICBcIkdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgdGl0bGU6IFwiw5ZkZW1lIMWeYXJ0bGFyxLFuxLEgQmVsaXJsZXlpblwiLFxyXG4gICAgdGV4dDpcclxuICAgICAgXCJHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtGbG93KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17c3R5bGVzLndvcmtmbG93fT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwixLDFnyBBa8SxxZ/EsSBcIlxyXG4gICAgICAgICAgdGl0bGU9XCJNZWV0IHRoZSBmZWF0dWUgb2Ygb3VyIHByb2R1Y3RcIlxyXG4gICAgICAgICAgaXNXaGl0ZT17dHJ1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pY29uQm94fT57YDAke2l0ZW0uaWR9YH08L0JveD5cclxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PntpdGVtLnRpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e2l0ZW0udGV4dH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgd29ya2Zsb3c6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJwcmltYXJ5XCIsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgY2VudGVyXCIsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgbWI6IC0xLFxyXG4gICAgcHQ6IDAsXHJcbiAgICBncmlkR2FwOiBbXHJcbiAgICAgIFwiMzVweCAwXCIsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIFwiNDVweCAzMHB4XCIsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIFwiNTBweCAyNXB4XCIsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIFwiNTBweCA2NXB4XCIsXHJcbiAgICBdLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICBcInJlcGVhdCgxLDFmcilcIixcclxuICAgICAgbnVsbCxcclxuICAgICAgXCJyZXBlYXQoMiwxZnIpXCIsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIFwicmVwZWF0KDQsMWZyKVwiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB0ZXh0QWxpZ246IFtcImNlbnRlclwiLCBudWxsLCBcImxlZnRcIl0sXHJcbiAgICB3aWR0aDogW1wiMTAwJVwiLCBcIjgwJVwiLCBcIjEwMCVcIl0sXHJcbiAgICBteDogW1wiYXV0b1wiXSxcclxuICAgIHB4OiBbNCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBcIiY6OmJlZm9yZVwiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNzIsIG51bGwsIDkwXSxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgY2VudGVyXCIsXHJcbiAgICAgIHdpZHRoOiAyMTUsXHJcbiAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjIwcHgpXCI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiY6bnRoLW9mLXR5cGUoMm4tMSk6OmJlZm9yZVwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93T2RkfSlgLFxyXG4gICAgfSxcclxuICAgIFwiJjpudGgtb2YtdHlwZSgybik6OmJlZm9yZVwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93RXZlbn0pYCxcclxuICAgICAgdG9wOiAxNyxcclxuICAgIH0sXHJcbiAgICBcIiY6bGFzdC1jaGlsZDo6YmVmb3JlXCI6IHtcclxuICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGljb25Cb3g6IHtcclxuICAgIHdpZHRoOiBbXCI1MHB4XCIsIG51bGwsIFwiNjBweFwiLCBudWxsLCBudWxsLCBcIjcwcHhcIl0sXHJcbiAgICBoZWlnaHQ6IFtcIjUwcHhcIiwgbnVsbCwgXCI2MHB4XCIsIG51bGwsIG51bGwsIFwiNzBweFwiXSxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBib3JkZXJSYWRpdXM6IFsxNSwgbnVsbCwgMjMsIG51bGwsIG51bGwsIDMwXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcclxuICAgIG14OiBbXCJhdXRvXCIsIG51bGwsIDBdLFxyXG4gICAgZm9udFNpemU6IFs2LCBudWxsLCA3LCBudWxsLCBudWxsLCBcIjMwcHhcIl0sXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiBcIiMyMzQ1ODJcIixcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIG10OiBcIi01cHhcIixcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgNCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNTVdLFxyXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBtYjogWzIsIDNdLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgb3BhY2l0eTogMC43NSxcclxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA1XSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==