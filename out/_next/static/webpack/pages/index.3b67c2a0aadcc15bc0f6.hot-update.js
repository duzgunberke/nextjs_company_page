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
  text: "Get your blood tests delivered at home collect a sample from the your "
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
    slogan: "\u0130\u015F Ak\u0131\u015F\u0131 Nas\u0131l \u0130lerliyor",
    title: "S\xFCre\xE7 Y\xF6netimimize G\xF6z At\u0131n",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwidGV4dCIsIldvcmtGbG93IiwiX3RoaXMiLCJqc3giLCJzeCIsInN0eWxlcyIsIndvcmtmbG93IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJDb250YWluZXIiLCJTZWN0aW9uSGVhZGVyIiwic2xvZ2FuIiwiaXNXaGl0ZSIsIkdyaWQiLCJncmlkIiwibWFwIiwiaXRlbSIsIkJveCIsImNhcmQiLCJrZXkiLCJpY29uQm94IiwiY29uY2F0Iiwid3JhcHBlciIsIkhlYWRpbmciLCJUZXh0Iiwic3ViVGl0bGUiLCJfYyIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsIlBhdHRlcm5CRyIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsInBvc2l0aW9uIiwicHkiLCJtYiIsInB0IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInRleHRBbGlnbiIsIndpZHRoIiwibXgiLCJweCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiQXJyb3dPZGQiLCJBcnJvd0V2ZW4iLCJmbGV4U2hyaW5rIiwiYm9yZGVyUmFkaXVzIiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJtdCIsImxpbmVIZWlnaHQiLCJwciIsIm9wYWNpdHkiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMrQjtBQUNnQztBQUNUO0FBRVQ7QUFDRjtBQUNFO0FBRTdDLElBQU1BLElBQUksR0FBRyxDQUNYO0VB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QUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbkM7RUFDRjtBQUNGLENBQUM7QUFBQyxJQUFBbEMsRUFBQTtBQUFBb0MsWUFBQSxDQUFBcEMsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYjY3YzJhMGFhZGNjMTViYzBmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlclwiO1xyXG5cclxuaW1wb3J0IFBhdHRlcm5CRyBmcm9tIFwiYXNzZXRzL3BhdHRlcm5CRy5wbmdcIjtcclxuaW1wb3J0IEFycm93T2RkIGZyb20gXCJhc3NldHMvYXJyb3dPZGQuc3ZnXCI7XHJcbmltcG9ydCBBcnJvd0V2ZW4gZnJvbSBcImFzc2V0cy9hcnJvd0V2ZW4uc3ZnXCI7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6IFwiSGFyY2FtYSBMaW1pdGxlcmluaXppIEJlbGlybGV5aW5cIixcclxuICAgIHRleHQ6XHJcbiAgICAgIFwiR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogXCJQcm9qZW5pemkgUGxhbmxhecSxblwiLFxyXG4gICAgdGV4dDpcclxuICAgICAgXCJHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiBcIlRlc2xpbWF0xLEgT25heWxhecSxblwiLFxyXG4gICAgdGV4dDpcclxuICAgICAgXCJHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdGxlOiBcIsOWZGVtZSDFnmFydGxhcsSxbsSxIEJlbGlybGV5aW5cIixcclxuICAgIHRleHQ6XHJcbiAgICAgIFwiR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLlwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrRmxvdygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy53b3JrZmxvd30+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIsSwxZ8gQWvEscWfxLEgTmFzxLFsIMSwbGVybGl5b3JcIlxyXG4gICAgICAgICAgdGl0bGU9XCJTw7xyZcOnIFnDtm5ldGltaW1pemUgR8O2eiBBdMSxblwiXHJcbiAgICAgICAgICBpc1doaXRlPXt0cnVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmljb25Cb3h9PntgMCR7aXRlbS5pZH1gfTwvQm94PlxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e2l0ZW0udGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57aXRlbS50ZXh0fTwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICB3b3JrZmxvdzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInByaW1hcnlcIixcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciBjZW50ZXJcIixcclxuICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBtYjogLTEsXHJcbiAgICBwdDogMCxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgXCIzNXB4IDBcIixcclxuICAgICAgbnVsbCxcclxuICAgICAgXCI0NXB4IDMwcHhcIixcclxuICAgICAgbnVsbCxcclxuICAgICAgXCI1MHB4IDI1cHhcIixcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgXCI1MHB4IDY1cHhcIixcclxuICAgIF0sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgIFwicmVwZWF0KDEsMWZyKVwiLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBcInJlcGVhdCgyLDFmcilcIixcclxuICAgICAgbnVsbCxcclxuICAgICAgXCJyZXBlYXQoNCwxZnIpXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHRleHRBbGlnbjogW1wiY2VudGVyXCIsIG51bGwsIFwibGVmdFwiXSxcclxuICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiODAlXCIsIFwiMTAwJVwiXSxcclxuICAgIG14OiBbXCJhdXRvXCJdLFxyXG4gICAgcHg6IFs0LCBudWxsLCBudWxsLCAwXSxcclxuICAgIFwiJjo6YmVmb3JlXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3MiwgbnVsbCwgOTBdLFxyXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciBjZW50ZXJcIixcclxuICAgICAgd2lkdGg6IDIxNSxcclxuICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMjBweClcIjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiJjpudGgtb2YtdHlwZSgybi0xKTo6YmVmb3JlXCI6IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QXJyb3dPZGR9KWAsXHJcbiAgICB9LFxyXG4gICAgXCImOm50aC1vZi10eXBlKDJuKTo6YmVmb3JlXCI6IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QXJyb3dFdmVufSlgLFxyXG4gICAgICB0b3A6IDE3LFxyXG4gICAgfSxcclxuICAgIFwiJjpsYXN0LWNoaWxkOjpiZWZvcmVcIjoge1xyXG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgaWNvbkJveDoge1xyXG4gICAgd2lkdGg6IFtcIjUwcHhcIiwgbnVsbCwgXCI2MHB4XCIsIG51bGwsIG51bGwsIFwiNzBweFwiXSxcclxuICAgIGhlaWdodDogW1wiNTBweFwiLCBudWxsLCBcIjYwcHhcIiwgbnVsbCwgbnVsbCwgXCI3MHB4XCJdLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIGJvcmRlclJhZGl1czogWzE1LCBudWxsLCAyMywgbnVsbCwgbnVsbCwgMzBdLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBtYjogWzUsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgbXg6IFtcImF1dG9cIiwgbnVsbCwgMF0sXHJcbiAgICBmb250U2l6ZTogWzYsIG51bGwsIDcsIG51bGwsIG51bGwsIFwiMzBweFwiXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgY29sb3I6IFwiIzIzNDU4MlwiLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgbXQ6IFwiLTVweFwiLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0LCBudWxsLCBudWxsLCA1XSxcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgbGluZUhlaWdodDogWzEuNCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS41NV0sXHJcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIG1iOiBbMiwgM10sXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAxLjksIDJdLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBvcGFjaXR5OiAwLjc1LFxyXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9