webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/team-card.js":
/*!*************************************!*\
  !*** ./src/components/team-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "C:\\Users\\berke\\Desktop\\nextjs_landing_page\\src\\components\\team-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function TeamCard(_ref) {
  var _this = this;

  var src = _ref.src,
      altText = _ref.altText,
      title = _ref.title,
      designation = _ref.designation,
      social = _ref.social;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    alt: altText,
    sx: styles.memberThumb,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.infoWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    className: "info__name",
    sx: styles.infoWrapper.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "info__designation",
    sx: styles.infoWrapper.designation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, designation)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.socialShare,
    className: "social__share",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, social.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    });
  })));
}
_c = TeamCard;
var styles = {
  card: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    py: [0, null, 4, 5, 6],
    px: [2, null, 6, 7],
    transition: "ease-in-out 0.4s",
    borderRadius: "8px",
    position: "relative",
    "&:hover": {
      boxShadow: ["none", null, "0 4px 10px rgba(39, 83, 123, 0.12)"],
      ".info__name": {
        color: "primary"
      },
      ".info__designation": {
        color: "primary"
      },
      ".social__share": {
        opacity: 1,
        a: {
          my: 0,
          py: [0, null, 1]
        }
      }
    }
  },
  memberThumb: {
    width: ["70px", "80px", "100px", null, null, "130px"],
    height: ["70px", "80px", "100px", null, null, "130px"],
    flexShrink: 0,
    border: "2px solid",
    borderColor: "primary",
    borderRadius: "50%"
  },
  infoWrapper: {
    width: "100%",
    textAlign: "center",
    mt: [3, null, 4],
    name: {
      fontSize: [1, 2, 3, null, null, 4],
      fontWeight: "bold",
      lineHeight: [1.25, 1.35],
      transition: "color 0.25s",
      mb: 1
    },
    designation: {
      fontSize: ["14px", null, null, 2],
      fontWeight: "body",
      lineHeight: "heading",
      color: "text",
      transition: "color 0.25s"
    }
  },
  socialShare: {
    position: ["relative", null, "absolute"],
    right: [0, null, 6, null, 4, 6],
    bottom: [0, null, "18px", 5],
    width: ["100%", null, "auto"],
    display: "flex",
    flexDirection: ["row", null, "column"],
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.25s",
    opacity: [1, null, 0],
    pt: 2,
    a: {
      fontSize: [0, 1, null, 2],
      color: ["text", null, "primary"],
      lineHeight: "1em",
      my: [0, null, "-2px"],
      px: 1,
      transition: "all 0.25s",
      "&:hover": {
        color: ["primary", null, "text"]
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "TeamCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIl0sIm5hbWVzIjpbIlRlYW1DYXJkIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzb2NpYWwiLCJzdHlsZXMiLCJjYXJkIiwibWVtYmVyVGh1bWIiLCJpbmZvV3JhcHBlciIsIm5hbWUiLCJzb2NpYWxTaGFyZSIsIm1hcCIsIml0ZW0iLCJpZCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsInB5IiwicHgiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJib3hTaGFkb3ciLCJjb2xvciIsIm9wYWNpdHkiLCJhIiwibXkiLCJ3aWR0aCIsImhlaWdodCIsImZsZXhTaHJpbmsiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsInRleHRBbGlnbiIsIm10IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsIm1iIiwicmlnaHQiLCJib3R0b20iLCJqdXN0aWZ5Q29udGVudCIsInB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxPQUFnRTtBQUFBOztBQUFBLE1BQTVDQyxHQUE0QyxRQUE1Q0EsR0FBNEM7QUFBQSxNQUF2Q0MsT0FBdUMsUUFBdkNBLE9BQXVDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXZCQyxXQUF1QixRQUF2QkEsV0FBdUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDN0UsU0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVOLEdBQVo7QUFBaUIsT0FBRyxFQUFFQyxPQUF0QjtBQUErQixNQUFFLEVBQUVJLE1BQU0s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QUhYO0FBSURWLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsTUFBVixDQUpIO0FBS0RSLFFBQUUsRUFBRSxDQUxIO0FBTURDLGdCQUFVLEVBQUUsV0FOWDtBQU9ELGlCQUFXO0FBQ1RJLGFBQUssRUFBRSxDQUFDLFNBQUQsRUFBWSxJQUFaLEVBQWtCLE1BQWxCO0FBREU7QUFQVjtBQVpRO0FBdkRBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjVmMmI2NzQzZjA5ZmUyNjIxMWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgeyBUZXh0LCBIZWFkaW5nLCBJbWFnZSwgQm94LCBMaW5rIH0gZnJvbSBcInRoZW1lLXVpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1DYXJkKHsgc3JjLCBhbHRUZXh0LCB0aXRsZSwgZGVzaWduYXRpb24sIHNvY2lhbCB9KSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLmNhcmR9PlxuICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9e2FsdFRleHR9IHN4PXtzdHlsZXMubWVtYmVyVGh1bWJ9IC8+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMuaW5mb1dyYXBwZXJ9PlxuICAgICAgICA8SGVhZGluZyBjbGFzc05hbWU9XCJpbmZvX19uYW1lXCIgc3g9e3N0eWxlcy5pbmZvV3JhcHBlci5uYW1lfT5cbiAgICAgICAge3RpdGxlfVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cImluZm9fX2Rlc2lnbmF0aW9uXCIgc3g9e3N0eWxlcy5pbmZvV3JhcHBlci5kZXNpZ25hdGlvbn0+XG4gICAgICAgICAge2Rlc2lnbmF0aW9ufVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5zb2NpYWxTaGFyZX0gY2xhc3NOYW1lPVwic29jaWFsX19zaGFyZVwiPlxuICAgICAgICB7c29jaWFsLm1hcCgoaXRlbSk9PihcbiAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uaWR9PjwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjYXJkOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIHB5OiBbMCwgbnVsbCwgNCwgNSwgNl0sXG4gICAgcHg6IFsyLCBudWxsLCA2LCA3XSxcbiAgICB0cmFuc2l0aW9uOiBcImVhc2UtaW4tb3V0IDAuNHNcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm94U2hhZG93OiBbXCJub25lXCIsIG51bGwsIFwiMCA0cHggMTBweCByZ2JhKDM5LCA4MywgMTIzLCAwLjEyKVwiXSxcbiAgICAgIFwiLmluZm9fX25hbWVcIjoge1xuICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICB9LFxuICAgICAgXCIuaW5mb19fZGVzaWduYXRpb25cIjoge1xuICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICB9LFxuICAgICAgXCIuc29jaWFsX19zaGFyZVwiOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGE6IHtcbiAgICAgICAgICBteTogMCxcbiAgICAgICAgICBweTogWzAsIG51bGwsIDFdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIG1lbWJlclRodW1iOiB7XG4gICAgd2lkdGg6IFtcIjcwcHhcIiwgXCI4MHB4XCIsIFwiMTAwcHhcIiwgbnVsbCwgbnVsbCwgXCIxMzBweFwiXSxcbiAgICBoZWlnaHQ6IFtcIjcwcHhcIiwgXCI4MHB4XCIsIFwiMTAwcHhcIiwgbnVsbCwgbnVsbCwgXCIxMzBweFwiXSxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIGJvcmRlcjogXCIycHggc29saWRcIixcbiAgICBib3JkZXJDb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICB9LFxuICBpbmZvV3JhcHBlcjoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbXQ6IFszLCBudWxsLCA0XSxcbiAgICBuYW1lOiB7XG4gICAgICBmb250U2l6ZTogWzEsIDIsIDMsIG51bGwsIG51bGwsIDRdLFxuICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4yNSwgMS4zNV0sXG4gICAgICB0cmFuc2l0aW9uOiBcImNvbG9yIDAuMjVzXCIsXG4gICAgICBtYjogMSxcbiAgICB9LFxuICAgIGRlc2lnbmF0aW9uOiB7XG4gICAgICBmb250U2l6ZTogW1wiMTRweFwiLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIGZvbnRXZWlnaHQ6IFwiYm9keVwiLFxuICAgICAgbGluZUhlaWdodDogXCJoZWFkaW5nXCIsXG4gICAgICBjb2xvcjogXCJ0ZXh0XCIsXG4gICAgICB0cmFuc2l0aW9uOiBcImNvbG9yIDAuMjVzXCIsXG4gICAgfSxcbiAgfSxcbiAgc29jaWFsU2hhcmU6IHtcbiAgICBwb3NpdGlvbjogW1wicmVsYXRpdmVcIiwgbnVsbCwgXCJhYnNvbHV0ZVwiXSxcbiAgICByaWdodDogWzAsIG51bGwsIDYsIG51bGwsIDQsIDZdLFxuICAgIGJvdHRvbTogWzAsIG51bGwsIFwiMThweFwiLCA1XSxcbiAgICB3aWR0aDogW1wiMTAwJVwiLCBudWxsLCBcImF1dG9cIl0sXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogW1wicm93XCIsIG51bGwsIFwiY29sdW1uXCJdLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC4yNXNcIixcbiAgICBvcGFjaXR5OiBbMSwgbnVsbCwgMF0sXG4gICAgcHQ6IDIsXG4gICAgYToge1xuICAgICAgZm9udFNpemU6IFswLCAxLCBudWxsLCAyXSxcbiAgICAgIGNvbG9yOiBbXCJ0ZXh0XCIsIG51bGwsIFwicHJpbWFyeVwiXSxcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMWVtXCIsXG4gICAgICBteTogWzAsIG51bGwsIFwiLTJweFwiXSxcbiAgICAgIHB4OiAxLFxuICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4yNXNcIixcbiAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgIGNvbG9yOiBbXCJwcmltYXJ5XCIsIG51bGwsIFwidGV4dFwiXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9