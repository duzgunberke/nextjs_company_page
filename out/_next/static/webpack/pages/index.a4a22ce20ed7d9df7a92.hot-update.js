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
  text: "Projeniz için gereken harcama limitlerini belirleyin ve projenizi başlatma adımların."
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwidGV4dCIsIldvcmtGbG93IiwiX3RoaXMiLCJqc3giLCJzeCIsInN0eWxlcyIsIndvcmtmbG93IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJDb250YWluZXIiLCJTZWN0aW9uSGVhZGVyIiwic2xvZ2FuIiwiaXNXaGl0ZSIsIkdyaWQiLCJncmlkIiwibWFwIiwiaXRlbSIsIkJveCIsImNhcmQiLCJrZXkiLCJpY29uQm94IiwiY29uY2F0Iiwid3JhcHBlciIsIkhlYWRpbmciLCJUZXh0Iiwic3ViVGl0bGUiLCJfYyIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsIlBhdHRlcm5CRyIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsInBvc2l0aW9uIiwicHkiLCJtYiIsInB0IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInRleHRBbGlnbiIsIndpZHRoIiwibXgiLCJweCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiQXJyb3dPZGQiLCJBcnJvd0V2ZW4iLCJmbGV4U2hyaW5rIiwiYm9yZGVyUmFkaXVzIiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJtdCIsImxpbmVIZWlnaHQiLCJwciIsIm9wYWNpdHkiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMrQjtBQUNnQztBQUNUO0FBRVQ7QUFDRjtBQUNFO0FBRTdDLElBQU1BLElBQUksR0FBRyxDQUNYO0VB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QUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbkM7RUFDRjtBQUNGLENBQUM7QUFBQyxJQUFBbEMsRUFBQTtBQUFBb0MsWUFBQSxDQUFBcEMsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNGEyMmNlMjBlZDdkOWRmN2E5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlclwiO1xyXG5cclxuaW1wb3J0IFBhdHRlcm5CRyBmcm9tIFwiYXNzZXRzL3BhdHRlcm5CRy5wbmdcIjtcclxuaW1wb3J0IEFycm93T2RkIGZyb20gXCJhc3NldHMvYXJyb3dPZGQuc3ZnXCI7XHJcbmltcG9ydCBBcnJvd0V2ZW4gZnJvbSBcImFzc2V0cy9hcnJvd0V2ZW4uc3ZnXCI7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6IFwiSGFyY2FtYSBMaW1pdGxlcmluaXppIEJlbGlybGV5aW5cIixcclxuICAgIHRleHQ6XHJcbiAgICAgIFwiUHJvamVuaXogacOnaW4gZ2VyZWtlbiBoYXJjYW1hIGxpbWl0bGVyaW5pIGJlbGlybGV5aW4gdmUgcHJvamVuaXppIGJhxZ9sYXRtYSBhZMSxbWxhcsSxbi5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6IFwiUHJvamVuaXppIFBsYW5sYXnEsW5cIixcclxuICAgIHRleHQ6XHJcbiAgICAgIFwiR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogXCJUZXNsaW1hdMSxIE9uYXlsYXnEsW5cIixcclxuICAgIHRleHQ6XHJcbiAgICAgIFwiR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogXCLDlmRlbWUgxZ5hcnRsYXLEsW7EsSBCZWxpcmxleWluXCIsXHJcbiAgICB0ZXh0OlxyXG4gICAgICBcIkdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy5cIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya0Zsb3coKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMud29ya2Zsb3d9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICBzbG9nYW49XCLEsMWfIEFrxLHFn8SxIE5hc8SxbCDEsGxlcmxpeW9yXCJcclxuICAgICAgICAgIHRpdGxlPVwiU8O8cmXDpyBZw7ZuZXRpbWltaXplIEfDtnogQXTEsW5cIlxyXG4gICAgICAgICAgaXNXaGl0ZT17dHJ1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pY29uQm94fT57YDAke2l0ZW0uaWR9YH08L0JveD5cclxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PntpdGVtLnRpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e2l0ZW0udGV4dH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgd29ya2Zsb3c6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJwcmltYXJ5XCIsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgY2VudGVyXCIsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgbWI6IC0xLFxyXG4gICAgcHQ6IDAsXHJcbiAgICBncmlkR2FwOiBbXHJcbiAgICAgIFwiMzVweCAwXCIsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIFwiNDVweCAzMHB4XCIsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIFwiNTBweCAyNXB4XCIsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIFwiNTBweCA2NXB4XCIsXHJcbiAgICBdLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICBcInJlcGVhdCgxLDFmcilcIixcclxuICAgICAgbnVsbCxcclxuICAgICAgXCJyZXBlYXQoMiwxZnIpXCIsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIFwicmVwZWF0KDQsMWZyKVwiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB0ZXh0QWxpZ246IFtcImNlbnRlclwiLCBudWxsLCBcImxlZnRcIl0sXHJcbiAgICB3aWR0aDogW1wiMTAwJVwiLCBcIjgwJVwiLCBcIjEwMCVcIl0sXHJcbiAgICBteDogW1wiYXV0b1wiXSxcclxuICAgIHB4OiBbNCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBcIiY6OmJlZm9yZVwiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNzIsIG51bGwsIDkwXSxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgY2VudGVyXCIsXHJcbiAgICAgIHdpZHRoOiAyMTUsXHJcbiAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjIwcHgpXCI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiY6bnRoLW9mLXR5cGUoMm4tMSk6OmJlZm9yZVwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93T2RkfSlgLFxyXG4gICAgfSxcclxuICAgIFwiJjpudGgtb2YtdHlwZSgybik6OmJlZm9yZVwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93RXZlbn0pYCxcclxuICAgICAgdG9wOiAxNyxcclxuICAgIH0sXHJcbiAgICBcIiY6bGFzdC1jaGlsZDo6YmVmb3JlXCI6IHtcclxuICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGljb25Cb3g6IHtcclxuICAgIHdpZHRoOiBbXCI1MHB4XCIsIG51bGwsIFwiNjBweFwiLCBudWxsLCBudWxsLCBcIjcwcHhcIl0sXHJcbiAgICBoZWlnaHQ6IFtcIjUwcHhcIiwgbnVsbCwgXCI2MHB4XCIsIG51bGwsIG51bGwsIFwiNzBweFwiXSxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBib3JkZXJSYWRpdXM6IFsxNSwgbnVsbCwgMjMsIG51bGwsIG51bGwsIDMwXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcclxuICAgIG14OiBbXCJhdXRvXCIsIG51bGwsIDBdLFxyXG4gICAgZm9udFNpemU6IFs2LCBudWxsLCA3LCBudWxsLCBudWxsLCBcIjMwcHhcIl0sXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiBcIiMyMzQ1ODJcIixcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIG10OiBcIi01cHhcIixcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgNCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNTVdLFxyXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBtYjogWzIsIDNdLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgb3BhY2l0eTogMC43NSxcclxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA1XSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==