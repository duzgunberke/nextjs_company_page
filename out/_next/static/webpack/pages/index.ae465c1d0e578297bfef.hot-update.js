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
    sx: sty,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIl0sIm5hbWVzIjpbIlRlYW1DYXJkIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzb2NpYWwiLCJzdHlsZXMiLCJjYXJkIiwibWVtYmVyVGh1bWIiLCJpbmZvV3JhcHBlciIsInN0eSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsInB5IiwicHgiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJib3hTaGFkb3ciLCJjb2xvciIsIm9wYWNpdHkiLCJhIiwibXkiLCJ3aWR0aCIsImhlaWdodCIsImZsZXhTaHJpbmsiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsInRleHRBbGlnbiIsIm10IiwibmFtZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJtYiIsInNvY2lhbFNoYXJlIiwicmlnaHQiLCJib3R0b20iLCJqdXN0aWZ5Q29udGVudCIsInB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxPQUFnRTtBQUFBLE1BQTVDQyxHQUE0QyxRQUE1Q0EsR0FBNEM7QUFBQSxNQUF2Q0MsT0FBdUMsUUFBdkNBLE9BQXVDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXZCQyxXQUF1QixRQUF2QkEsV0FBdUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDN0UsU0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVOLEdBQVo7QUFBaUIsT0FBRyxFQUFFQyxPQUF0QjtBQUErQixNQUFFLEVBQUVJLE1BQU0sQ0FBQ0UsV0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVGLE1BQU0sQ0FBQ0csV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGdEQUFEO0FBQVMsYUFBUyxFQUFDLFlBQW5CO0FBQWdDLE1BQUUsRUFBRUMsR0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsQ0FERjtBQVVEO0tBWHVCVixRO0FBYXhCLElBQU1NLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSkksV0FBTyxFQUFFLE1BREw7QUFFSkMsY0FBVSxFQUFFLFFBRlI7QUFHSkMsaUJBQWEsRUFBRSxRQUhYO0FBSUpDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FKQTtBQUtKQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsRUFBYSxDQUFiLENBTEE7QUFNSkMsY0FBVSxFQUFFLGtCQU5SO0FBT0pDLGdCQUFZLEVBQUUsS0FQVjtBQVFKQyxZQUFRLEVBQUUsVUFSTjtBQVNKLGVBQVc7QUFDVEMsZUFBUyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxvQ0FBZixDQURGO0FBRVQscUJBQWU7QUFDYkMsYUFBSyxFQUFFO0FBRE0sT0FGTjtBQUtULDRCQUFzQjtBQUNwQkEsYUFBSyxFQUFFO0FBRGEsT0FMYjtBQVFULHdCQUFrQjtBQUNoQkMsZUFBTyxFQUFFLENBRE87QUFFaEJDLFNBQUMsRUFBRTtBQUNEQyxZQUFFLEVBQUUsQ0FESDtBQUVEVCxZQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVY7QUFGSDtBQUZhO0FBUlQ7QUFUUCxHQURPO0FBNEJiTixhQUFXLEVBQUU7QUFDWGdCLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE9BQWpCLEVBQTBCLElBQTFCLEVBQWdDLElBQWhDLEVBQXNDLE9BQXRDLENBREk7QUFFWEMsVUFBTSxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsT0FBakIsRUFBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsRUFBc0MsT0FBdEMsQ0FGRztBQUdYQyxjQUFVLEVBQUUsQ0FIRDtBQUlYQyxVQUFNLEVBQUUsV0FKRztBQUtYQyxlQUFXLEVBQUUsU0FMRjtBQU1YWCxnQkFBWSxFQUFFO0FBTkgsR0E1QkE7QUFvQ2JSLGFBQVcsRUFBRTtBQUNYZSxTQUFLLEVBQUUsTUFESTtBQUVYSyxhQUFTLEVBQUUsUUFGQTtBQUdYQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FITztBQUlYQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixDQUF0QixDQUROO0FBRUpDLGdCQUFVLEVBQUUsTUFGUjtBQUdKQyxnQkFBVSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FIUjtBQUlKbEIsZ0JBQVUsRUFBRSxhQUpSO0FBS0ptQixRQUFFLEVBQUU7QUFMQSxLQUpLO0FBV1gvQixlQUFXLEVBQUU7QUFDWDRCLGNBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixDQUFyQixDQURDO0FBRVhDLGdCQUFVLEVBQUUsTUFGRDtBQUdYQyxnQkFBVSxFQUFFLFNBSEQ7QUFJWGQsV0FBSyxFQUFFLE1BSkk7QUFLWEosZ0JBQVUsRUFBRTtBQUxEO0FBWEYsR0FwQ0E7QUF1RGJvQixhQUFXLEVBQUU7QUFDWGxCLFlBQVEsRUFBRSxDQUFDLFVBQUQsRUFBYSxJQUFiLEVBQW1CLFVBQW5CLENBREM7QUFFWG1CLFNBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLElBQWIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FGSTtBQUdYQyxVQUFNLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLE1BQVYsRUFBa0IsQ0FBbEIsQ0FIRztBQUlYZCxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLE1BQWYsQ0FKSTtBQUtYYixXQUFPLEVBQUUsTUFMRTtBQU1YRSxpQkFBYSxFQUFFLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxRQUFkLENBTko7QUFPWEQsY0FBVSxFQUFFLFFBUEQ7QUFRWDJCLGtCQUFjLEVBQUUsUUFSTDtBQVNYdkIsY0FBVSxFQUFFLFdBVEQ7QUFVWEssV0FBTyxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBVkU7QUFXWG1CLE1BQUUsRUFBRSxDQVhPO0FBWVhsQixLQUFDLEVBQUU7QUFDRFUsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxJQUFQLEVBQWEsQ0FBYixDQURUO0FBRURaLFdBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsU0FBZixDQUZOO0FBR0RjLGdCQUFVLEVBQUUsS0FIWDtBQUlEWCxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLE1BQVYsQ0FKSDtBQUtEUixRQUFFLEVBQUUsQ0FMSDtBQU1EQyxnQkFBVSxFQUFFLFdBTlg7QUFPRCxpQkFBVztBQUNUSSxhQUFLLEVBQUUsQ0FBQyxTQUFELEVBQVksSUFBWixFQUFrQixNQUFsQjtBQURFO0FBUFY7QUFaUTtBQXZEQSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFlNDY1YzFkMGU1NzgyOTdiZmVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IHsgVGV4dCwgSGVhZGluZywgSW1hZ2UsIEJveCwgTGluayB9IGZyb20gXCJ0aGVtZS11aVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtQ2FyZCh7IHNyYywgYWx0VGV4dCwgdGl0bGUsIGRlc2lnbmF0aW9uLCBzb2NpYWwgfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxJbWFnZSBzcmM9e3NyY30gYWx0PXthbHRUZXh0fSBzeD17c3R5bGVzLm1lbWJlclRodW1ifSAvPlxuICAgICAgPEJveCBzeD17c3R5bGVzLmluZm9XcmFwcGVyfT5cbiAgICAgICAgPEhlYWRpbmcgY2xhc3NOYW1lPVwiaW5mb19fbmFtZVwiIHN4PXtzdHl9PlxuXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgcHk6IFswLCBudWxsLCA0LCA1LCA2XSxcbiAgICBweDogWzIsIG51bGwsIDYsIDddLFxuICAgIHRyYW5zaXRpb246IFwiZWFzZS1pbi1vdXQgMC40c1wiLFxuICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBib3hTaGFkb3c6IFtcIm5vbmVcIiwgbnVsbCwgXCIwIDRweCAxMHB4IHJnYmEoMzksIDgzLCAxMjMsIDAuMTIpXCJdLFxuICAgICAgXCIuaW5mb19fbmFtZVwiOiB7XG4gICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgIH0sXG4gICAgICBcIi5pbmZvX19kZXNpZ25hdGlvblwiOiB7XG4gICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgIH0sXG4gICAgICBcIi5zb2NpYWxfX3NoYXJlXCI6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgYToge1xuICAgICAgICAgIG15OiAwLFxuICAgICAgICAgIHB5OiBbMCwgbnVsbCwgMV0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgbWVtYmVyVGh1bWI6IHtcbiAgICB3aWR0aDogW1wiNzBweFwiLCBcIjgwcHhcIiwgXCIxMDBweFwiLCBudWxsLCBudWxsLCBcIjEzMHB4XCJdLFxuICAgIGhlaWdodDogW1wiNzBweFwiLCBcIjgwcHhcIiwgXCIxMDBweFwiLCBudWxsLCBudWxsLCBcIjEzMHB4XCJdLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgYm9yZGVyOiBcIjJweCBzb2xpZFwiLFxuICAgIGJvcmRlckNvbG9yOiBcInByaW1hcnlcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gIH0sXG4gIGluZm9XcmFwcGVyOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBtdDogWzMsIG51bGwsIDRdLFxuICAgIG5hbWU6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgMiwgMywgbnVsbCwgbnVsbCwgNF0sXG4gICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjI1LCAxLjM1XSxcbiAgICAgIHRyYW5zaXRpb246IFwiY29sb3IgMC4yNXNcIixcbiAgICAgIG1iOiAxLFxuICAgIH0sXG4gICAgZGVzaWduYXRpb246IHtcbiAgICAgIGZvbnRTaXplOiBbXCIxNHB4XCIsIG51bGwsIG51bGwsIDJdLFxuICAgICAgZm9udFdlaWdodDogXCJib2R5XCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcImhlYWRpbmdcIixcbiAgICAgIGNvbG9yOiBcInRleHRcIixcbiAgICAgIHRyYW5zaXRpb246IFwiY29sb3IgMC4yNXNcIixcbiAgICB9LFxuICB9LFxuICBzb2NpYWxTaGFyZToge1xuICAgIHBvc2l0aW9uOiBbXCJyZWxhdGl2ZVwiLCBudWxsLCBcImFic29sdXRlXCJdLFxuICAgIHJpZ2h0OiBbMCwgbnVsbCwgNiwgbnVsbCwgNCwgNl0sXG4gICAgYm90dG9tOiBbMCwgbnVsbCwgXCIxOHB4XCIsIDVdLFxuICAgIHdpZHRoOiBbXCIxMDAlXCIsIG51bGwsIFwiYXV0b1wiXSxcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBbXCJyb3dcIiwgbnVsbCwgXCJjb2x1bW5cIl0sXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjI1c1wiLFxuICAgIG9wYWNpdHk6IFsxLCBudWxsLCAwXSxcbiAgICBwdDogMixcbiAgICBhOiB7XG4gICAgICBmb250U2l6ZTogWzAsIDEsIG51bGwsIDJdLFxuICAgICAgY29sb3I6IFtcInRleHRcIiwgbnVsbCwgXCJwcmltYXJ5XCJdLFxuICAgICAgbGluZUhlaWdodDogXCIxZW1cIixcbiAgICAgIG15OiBbMCwgbnVsbCwgXCItMnB4XCJdLFxuICAgICAgcHg6IDEsXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjI1c1wiLFxuICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgY29sb3I6IFtcInByaW1hcnlcIiwgbnVsbCwgXCJ0ZXh0XCJdLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=