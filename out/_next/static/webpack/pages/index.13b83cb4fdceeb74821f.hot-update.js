webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/testimonial.js":
/*!*************************************!*\
  !*** ./src/sections/testimonial.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestimonialCard; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/rating */ "./src/components/rating.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/testimonial/avatar1.png */ "./src/assets/testimonial/avatar1.png");
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/testimonial/avatar2.png */ "./src/assets/testimonial/avatar2.png");
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/testimonial/avatar3.png */ "./src/assets/testimonial/avatar3.png");
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/testimonial/avatar4.png */ "./src/assets/testimonial/avatar4.png");
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "C:\\Users\\berke\\Desktop\\freelancedemo\\nextjs_company_page\\src\\sections\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/** @jsx jsx */









var data = [{
  id: 1,
  title: 'Modern Görünüm & Trendlerde Bir Tasarım',
  description: "Viveven'dan aldığım hizmetlerden çok memnunum. Sürekli gelişen ve yenilenen bir sistem. İhtiyaçlarımıza yönelik çözümler sunuyorlar.",
  avatar: assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: 'Miray Duman',
  designation: '@mirayduman',
  review: 4
}, {
  id: 2,
  title: 'Süper Hızlı & Kolay Kullanım',
  description: "",
  avatar: assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  name: 'Ahmet Oflaz',
  designation: '@ahmetoflaz',
  review: 5
}, {
  id: 3,
  title: 'Son Derece Kullancı Dostu',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  name: 'Süleyman Canan',
  designation: '@süleymancanan',
  review: 5
}, {
  id: 4,
  title: 'İhtiyaçalarımıza Yönelik Çözümler',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  name: 'Muhammed Gülay',
  designation: '@muhammedgulay',
  review: 4
}];
var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1619
    },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },

  laptop: {
    breakpoint: {
      max: 1619,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },

  tablet: {
    breakpoint: {
      max: 1024,
      min: 640
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },

  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

var carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }),
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1
};
function TestimonialCard() {
  var _this = this;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    id: "testimonial",
    sx: {
      variant: 'section.testimonial'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 4
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    css: {
      textAlign: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slogan: "Referanslar\u0131m\u0131z",
    title: "M\xFC\u015Fteri Memnuniyetiyle Kar\u015F\u0131la\u015F\u0131n",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.carouselWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, carouselParams, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }), data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.reviewCard,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rating: item.review,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      as: "h3",
      sx: styles.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, item.description), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 19
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: item.avatar,
      alt: "Client Image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "reviewer-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 19
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      as: "h4",
      sx: styles.heading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }
    }, item.name), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.designation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 21
      }
    }, item.designation))));
  }))));
}
_c = TestimonialCard;
var styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: ['100%', null, null, '750px', '1000px', '1180px', null, 'calc(50% + 865px)'],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s'
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1
        }
      }
    }
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: ['30px 20px 35px', '30px 25px 35px', '30px 20px 35px', '35px 30px 40px 40px', '30px 30px 35px', '35px 30px 40px 40px'],
    bg: 'white',
    textAlign: 'left',
    m: ['28px 5px 30px 5px', '28px 20px 30px 20px', '28px 15px 30px 15px', '28px 15px 30px 15px', '30px 20px 40px'],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)'
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex'
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0
        }
      },
      '.star': {
        color: 'primary',
        mr: '1px'
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px'
      }
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover'
        }
      }
    }
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2]
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4
  }
};
var _c;
$RefreshReg$(_c, "TestimonialCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdmF0YXIiLCJBdmF0YXIxIiwibmFtZSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiY2Fyb3VzZWxQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwianN4IiwiQnV0dG9uR3JvdXAiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImRvdExpc3RDbGFzcyIsImRyYWdnYWJsZSIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsIml0ZW1DbGFzcyIsImtleUJvYXJkQ29udHJvbCIsIm1pbmltdW1Ub3VjaERyYWciLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJyZW5kZXJEb3RzT3V0c2lkZSIsInNob3dEb3RzIiwic2xpZGVyQ2xhc3MiLCJUZXN0aW1vbmlhbENhcmQiLCJfdGhpcyIsInN4IiwidmFyaWFudCIsIkNvbnRhaW5lciIsImNzcyIsInRleHRBbGlnbiIsIlNlY3Rpb25IZWFkZXIiLCJzbG9nYW4iLCJCb3giLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJDYXJvdXNlbCIsIl9leHRlbmRzIiwibWFwIiwiaXRlbSIsInJldmlld0NhcmQiLCJrZXkiLCJSYXRpbmciLCJyYXRpbmciLCJIZWFkaW5nIiwiYXMiLCJUZXh0IiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJoZWFkaW5nIiwiX2MiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwicHgiLCJ3aWR0aCIsIm1heFdpZHRoIiwibXIiLCJtbCIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicCIsImJnIiwibSIsIm1iIiwidWwiLCJwbCIsImxpc3RTdHlsZSIsInN2ZyIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJmbGV4U2hyaW5rIiwiaW1nIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDcUU7QUFDZjtBQUNmO0FBQ1c7QUFDTjtBQUVTO0FBQ0E7QUFDQTtBQUNBO0FBRXJELElBQU1BLElBQUksR0FBRyxDQUNYO0VBQ0VDLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEtBQUssRUFBRSx5Q0FBeUM7RUFDaERDLFdBQVcsRUFDVCxzSUFBc0k7RUFDeElDLE1BQU0sRUFBRUMscUVBQU87RUFDZkMsSUFBSSxFQUFFLGFBQWE7RUFDbkJDLFdBQVcsRUFBRSxhQUFhO0VBQzFCQyxNQUFNLEVBQUU7QUFDVixDQUFDLEVBQ0Q7RUFDRVAsRUFBRSxFQUFFLENBQUM7RUFDTEMsS0FBSyxFQUFFLDhCQUE4QjtFQUNyQ0MsV0FBVyxFQUNULEVBQUU7RUFDSkMsTUFBTSxFQUFFSyxxRUFBTztFQUNmSCxJQUFJLEVBQUUsYUFBYTtFQUNuQkMsV0FBVyxFQUFFLGFBQWE7RUFDMUJDLE1BQU0sRUFBRTtBQUNWLENBQUMsRUFDRDtFQUNFUCxFQUFFLEVBQUUsQ0FBQztFQUNMQyxLQUFLLEVBQUUsMkJBQTJCO0VBQ2xDQyxXQUFXLEVBQ1QseUpBQXlKO0VBQzNKQyxNQUFNLEVB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QUFFO0VBQ2Q7QUFDRixDQUFDO0FBQUMsSUFBQWhDLEVBQUE7QUFBQWlDLFlBQUEsQ0FBQWpDLEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTNiODNjYjRmZGNlZWI3NDgyMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgSGVhZGluZywgVGV4dCwgQm94LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSAnY29tcG9uZW50cy9yYXRpbmcnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnY29tcG9uZW50cy9idXR0b24tZ3JvdXAnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xyXG5cclxuaW1wb3J0IEF2YXRhcjEgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjEucG5nJztcclxuaW1wb3J0IEF2YXRhcjIgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjIucG5nJztcclxuaW1wb3J0IEF2YXRhcjMgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjMucG5nJztcclxuaW1wb3J0IEF2YXRhcjQgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjQucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogJ01vZGVybiBHw7Zyw7xuw7xtICYgVHJlbmRsZXJkZSBCaXIgVGFzYXLEsW0nLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVml2ZXZlbidkYW4gYWxkxLHEn8SxbSBoaXptZXRsZXJkZW4gw6dvayBtZW1udW51bS4gU8O8cmVrbGkgZ2VsacWfZW4gdmUgeWVuaWxlbmVuIGJpciBzaXN0ZW0uIMSwaHRpeWHDp2xhcsSxbcSxemEgecO2bmVsaWsgw6fDtnrDvG1sZXIgc3VudXlvcmxhci5cIixcclxuICAgIGF2YXRhcjogQXZhdGFyMSxcclxuICAgIG5hbWU6ICdNaXJheSBEdW1hbicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BtaXJheWR1bWFuJyxcclxuICAgIHJldmlldzogNCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6ICdTw7xwZXIgSMSxemzEsSAmIEtvbGF5IEt1bGxhbsSxbScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJcIixcclxuICAgIGF2YXRhcjogQXZhdGFyMixcclxuICAgIG5hbWU6ICdBaG1ldCBPZmxheicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BhaG1ldG9mbGF6JyxcclxuICAgIHJldmlldzogNSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6ICdTb24gRGVyZWNlIEt1bGxhbmPEsSBEb3N0dScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIzLFxyXG4gICAgbmFtZTogJ1PDvGxleW1hbiBDYW5hbicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0Bzw7xsZXltYW5jYW5hbicsXHJcbiAgICByZXZpZXc6IDUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdGxlOiAnxLBodGl5YcOnYWxhcsSxbcSxemEgWcO2bmVsaWsgw4fDtnrDvG1sZXInLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuJyxcclxuICAgIGF2YXRhcjogQXZhdGFyNCxcclxuICAgIG5hbWU6ICdNdWhhbW1lZCBHw7xsYXknLFxyXG4gICAgZGVzaWduYXRpb246ICdAbXVoYW1tZWRndWxheScsXHJcbiAgICByZXZpZXc6IDQsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgZGVza3RvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTYxOSB9LFxyXG4gICAgaXRlbXM6IDQsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiA0LCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbGFwdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTYxOSwgbWluOiAxMDI0IH0sXHJcbiAgICBpdGVtczogMyxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDMsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICB0YWJsZXQ6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDY0MCB9LFxyXG4gICAgaXRlbXM6IDIsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAyLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogNjM5LCBtaW46IDAgfSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgY2Fyb3VzZWxQYXJhbXMgPSB7XHJcbiAgYWRkaXRpb25hbFRyYW5zZnJvbTowLFxyXG4gIGFycm93czpmYWxzZSxcclxuICBhdXRvUGxheVNwZWVkOjMwMDAsXHJcbiAgY2VudGVyTW9kZTpmYWxzZSxcclxuICBjbGFzc05hbWU6XCJcIixcclxuICBjb250YWluZXJDbGFzczpcImNhcm91c2VsLWNvbnRhaW5lclwiLFxyXG4gIGN1c3RvbUJ1dHRvbkdyb3VwOjxCdXR0b25Hcm91cCAvPixcclxuICBkb3RMaXN0Q2xhc3M6XCJcIixcclxuICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgZm9jdXNPblNlbGVjdDpmYWxzZSxcclxuICBpbmZpbml0ZTp0cnVlLFxyXG4gIGl0ZW1DbGFzczpcIlwiLFxyXG4gIGtleUJvYXJkQ29udHJvbDogdHJ1ZSxcclxuICBtaW5pbXVtVG91Y2hEcmFnOjgwLFxyXG4gIHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZTogdHJ1ZSxcclxuICByZW5kZXJEb3RzT3V0c2lkZTpmYWxzZSxcclxuICByZXNwb25zaXZlOnJlc3BvbnNpdmUsXHJcbiAgc2hvd0RvdHM6ZmFsc2UsXHJcbiAgc2xpZGVyQ2xhc3M6XCJcIixcclxuICBzbGlkZXNUb1NsaWRlOjEsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFsQ2FyZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICA8c2VjdGlvbiBpZD1cInRlc3RpbW9uaWFsXCIgc3g9e3t2YXJpYW50OidzZWN0aW9uLnRlc3RpbW9uaWFsJ319PlxyXG4gICAgICA8Q29udGFpbmVyIGNzcz17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIlJlZmVyYW5zbGFyxLFtxLF6XCJcclxuICAgICAgICAgIHRpdGxlPVwiTcO8xZ90ZXJpIE1lbW51bml5ZXRpeWxlIEthcsWfxLFsYcWfxLFuXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuY2Fyb3VzZWxXcmFwcGVyfT5cclxuICAgICAgICA8Q2Fyb3VzZWwgey4uLmNhcm91c2VsUGFyYW1zfT5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnJldmlld0NhcmR9IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICA8UmF0aW5nIHJhdGluZz17aXRlbS5yZXZpZXd9IC8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgc3g9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5hdmF0YXJ9IGFsdD1cIkNsaWVudCBJbWFnZVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3ZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzeD17c3R5bGVzLmhlYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5kZXNpZ25hdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNpZ25hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgPC9Cb3g+XHJcbiAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2Fyb3VzZWxXcmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcclxuICAgIG10OiAnLTMwcHgnLFxyXG4gICAgcHg6ICcxNXB4JyxcclxuICAgICcuY2Fyb3VzZWwtY29udGFpbmVyJzoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBtYXhXaWR0aDogW1xyXG4gICAgICAgICcxMDAlJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzc1MHB4JyxcclxuICAgICAgICAnMTAwMHB4JyxcclxuICAgICAgICAnMTE4MHB4JyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICdjYWxjKDUwJSArIDg2NXB4KScsXHJcbiAgICAgIF0sXHJcbiAgICAgIG1yOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnLTIyMHB4J10sXHJcbiAgICAgIG1sOiAnYXV0bycsXHJcbiAgICAgICcucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSc6IHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgfSxcclxuICAgICAgJy5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNG4pJzoge1xyXG4gICAgICAgIG9wYWNpdHk6ICcwLjUnLFxyXG4gICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjIwcHgpJzoge1xyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJldmlld0NhcmQ6IHtcclxuICAgIGJveFNoYWRvdzogJzBweCAwcHggMXB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMzUpJyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgcDogW1xyXG4gICAgICAnMzBweCAyMHB4IDM1cHgnLFxyXG4gICAgICAnMzBweCAyNXB4IDM1cHgnLFxyXG4gICAgICAnMzBweCAyMHB4IDM1cHgnLFxyXG4gICAgICAnMzVweCAzMHB4IDQwcHggNDBweCcsXHJcbiAgICAgICczMHB4IDMwcHggMzVweCcsXHJcbiAgICAgICczNXB4IDMwcHggNDBweCA0MHB4JyxcclxuICAgIF0sXHJcbiAgICBiZzogJ3doaXRlJyxcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgbTogW1xyXG4gICAgICAnMjhweCA1cHggMzBweCA1cHgnLFxyXG4gICAgICAnMjhweCAyMHB4IDMwcHggMjBweCcsXHJcbiAgICAgICcyOHB4IDE1cHggMzBweCAxNXB4JyxcclxuICAgICAgJzI4cHggMTVweCAzMHB4IDE1cHgnLFxyXG4gICAgICAnMzBweCAyMHB4IDQwcHgnLFxyXG4gICAgXSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6ICcwcHggNnB4IDMwcHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKScsXHJcbiAgICB9LFxyXG4gICAgJy5yYXRpbmcnOiB7XHJcbiAgICAgIG1iOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIHVsOiB7XHJcbiAgICAgICAgcGw6IDAsXHJcbiAgICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgICAgbWI6IDAsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICB9LFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgJyY6bGFzdC1vZi10eXBlJzoge1xyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgJy5zdGFyJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgbXI6ICcxcHgnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLnN0YXItbyc6IHtcclxuICAgICAgICBjb2xvcjogJyNkZGQnLFxyXG4gICAgICAgIG1yOiAnMXB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnLmNhcmQtZm9vdGVyJzoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW5Ub3A6IFs1LCBudWxsLCBudWxsLCAnMzNweCddLFxyXG4gICAgICAnLmltYWdlJzoge1xyXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgICAgbXI6IFszLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgaW1nOiB7XHJcbiAgICAgICAgICB3aWR0aDogJzU1cHgnLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnNTVweCcsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBtYjogWzMsIG51bGwsIG51bGwsICcyMnB4J10sXHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgbGluZUhlaWdodDogMS42LFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgMl0sXHJcbiAgfSxcclxuICBoZWFkaW5nOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgbWI6ICczcHgnLFxyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMyxcclxuICB9LFxyXG4gIGRlc2lnbmF0aW9uOiB7XHJcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICBmb250U2l6ZTogMSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9