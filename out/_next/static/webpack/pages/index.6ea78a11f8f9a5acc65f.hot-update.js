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
  description: "Tahmin ettiğ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdmF0YXIiLCJBdmF0YXIxIiwibmFtZSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiY2Fyb3VzZWxQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwianN4IiwiQnV0dG9uR3JvdXAiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImRvdExpc3RDbGFzcyIsImRyYWdnYWJsZSIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsIml0ZW1DbGFzcyIsImtleUJvYXJkQ29udHJvbCIsIm1pbmltdW1Ub3VjaERyYWciLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJyZW5kZXJEb3RzT3V0c2lkZSIsInNob3dEb3RzIiwic2xpZGVyQ2xhc3MiLCJUZXN0aW1vbmlhbENhcmQiLCJfdGhpcyIsInN4IiwidmFyaWFudCIsIkNvbnRhaW5lciIsImNzcyIsInRleHRBbGlnbiIsIlNlY3Rpb25IZWFkZXIiLCJzbG9nYW4iLCJCb3giLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJDYXJvdXNlbCIsIl9leHRlbmRzIiwibWFwIiwiaXRlbSIsInJldmlld0NhcmQiLCJrZXkiLCJSYXRpbmciLCJyYXRpbmciLCJIZWFkaW5nIiwiYXMiLCJUZXh0IiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJoZWFkaW5nIiwiX2MiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwicHgiLCJ3aWR0aCIsIm1heFdpZHRoIiwibXIiLCJtbCIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicCIsImJnIiwibSIsIm1iIiwidWwiLCJwbCIsImxpc3RTdHlsZSIsInN2ZyIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJmbGV4U2hyaW5rIiwiaW1nIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDcUU7QUFDZjtBQUNmO0FBQ1c7QUFDTjtBQUVTO0FBQ0E7QUFDQTtBQUNBO0FBRXJELElBQU1BLElBQUksR0FBRyxDQUNYO0VBQ0VDLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEtBQUssRUFBRSx5Q0FBeUM7RUFDaERDLFdBQVcsRUFDVCxzSUFBc0k7RUFDeElDLE1BQU0sRUFBRUMscUVBQU87RUFDZkMsSUFBSSxFQUFFLGFBQWE7RUFDbkJDLFdBQVcsRUFBRSxhQUFhO0VBQzFCQyxNQUFNLEVBQUU7QUFDVixDQUFDLEVBQ0Q7RUFDRVAsRUFBRSxFQUFFLENBQUM7RUFDTEMsS0FBSyxFQUFFLDhCQUE4QjtFQUNyQ0MsV0FBVyxFQUNULGNBQWM7RUFDaEJDLE1BQU0sRUFBRUsscUVBQU87RUFDZkgsSUFBSSxFQUFFLGFBQWE7RUFDbkJDLFdBQVcsRUFBRSxhQUFhO0VBQzFCQyxNQUFNLEVBQUU7QUFDVixDQUFDLEVBQ0Q7RUFDRVAsRUFBRSxFQUFFLENBQUM7RUFDTEMsS0FBSyxFQUFFLDJCQUEyQjtFQUNsQ0MsV0FBVyxFQUNULHlKQUF5SjtFQUMzSkMsTUFBTSxF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RUFBRTtFQUNkO0FBQ0YsQ0FBQztBQUFDLElBQUFoQyxFQUFBO0FBQUFpQyxZQUFBLENBQUFqQyxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZlYTc4YTExZjhmOWE1YWNjNjVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEhlYWRpbmcsIFRleHQsIEJveCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJ2NvbXBvbmVudHMvcmF0aW5nJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuXHJcbmltcG9ydCBBdmF0YXIxIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIxLnBuZyc7XHJcbmltcG9ydCBBdmF0YXIyIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIyLnBuZyc7XHJcbmltcG9ydCBBdmF0YXIzIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIzLnBuZyc7XHJcbmltcG9ydCBBdmF0YXI0IGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXI0LnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICdNb2Rlcm4gR8O2csO8bsO8bSAmIFRyZW5kbGVyZGUgQmlyIFRhc2FyxLFtJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlZpdmV2ZW4nZGFuIGFsZMSxxJ/EsW0gaGl6bWV0bGVyZGVuIMOnb2sgbWVtbnVudW0uIFPDvHJla2xpIGdlbGnFn2VuIHZlIHllbmlsZW5lbiBiaXIgc2lzdGVtLiDEsGh0aXlhw6dsYXLEsW3EsXphIHnDtm5lbGlrIMOnw7Z6w7xtbGVyIHN1bnV5b3JsYXIuXCIsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjEsXHJcbiAgICBuYW1lOiAnTWlyYXkgRHVtYW4nLFxyXG4gICAgZGVzaWduYXRpb246ICdAbWlyYXlkdW1hbicsXHJcbiAgICByZXZpZXc6IDQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiAnU8O8cGVyIEjEsXpsxLEgJiBLb2xheSBLdWxsYW7EsW0nLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVGFobWluIGV0dGnEn1wiLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIyLFxyXG4gICAgbmFtZTogJ0FobWV0IE9mbGF6JyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQGFobWV0b2ZsYXonLFxyXG4gICAgcmV2aWV3OiA1LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogJ1NvbiBEZXJlY2UgS3VsbGFuY8SxIERvc3R1JyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLicsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjMsXHJcbiAgICBuYW1lOiAnU8O8bGV5bWFuIENhbmFuJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQHPDvGxleW1hbmNhbmFuJyxcclxuICAgIHJldmlldzogNSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgdGl0bGU6ICfEsGh0aXlhw6dhbGFyxLFtxLF6YSBZw7ZuZWxpayDDh8O2esO8bWxlcicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXI0LFxyXG4gICAgbmFtZTogJ011aGFtbWVkIEfDvGxheScsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BtdWhhbW1lZGd1bGF5JyxcclxuICAgIHJldmlldzogNCxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICBkZXNrdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxNjE5IH0sXHJcbiAgICBpdGVtczogNCxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDQsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICBsYXB0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxNjE5LCBtaW46IDEwMjQgfSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMywgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIHRhYmxldDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNjQwIH0sXHJcbiAgICBpdGVtczogMixcclxuICAgIHNsaWRlc1RvU2xpZGU6IDIsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICBtb2JpbGU6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAxLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBjYXJvdXNlbFBhcmFtcyA9IHtcclxuICBhZGRpdGlvbmFsVHJhbnNmcm9tOjAsXHJcbiAgYXJyb3dzOmZhbHNlLFxyXG4gIGF1dG9QbGF5U3BlZWQ6MzAwMCxcclxuICBjZW50ZXJNb2RlOmZhbHNlLFxyXG4gIGNsYXNzTmFtZTpcIlwiLFxyXG4gIGNvbnRhaW5lckNsYXNzOlwiY2Fyb3VzZWwtY29udGFpbmVyXCIsXHJcbiAgY3VzdG9tQnV0dG9uR3JvdXA6PEJ1dHRvbkdyb3VwIC8+LFxyXG4gIGRvdExpc3RDbGFzczpcIlwiLFxyXG4gIGRyYWdnYWJsZTogdHJ1ZSxcclxuICBmb2N1c09uU2VsZWN0OmZhbHNlLFxyXG4gIGluZmluaXRlOnRydWUsXHJcbiAgaXRlbUNsYXNzOlwiXCIsXHJcbiAga2V5Qm9hcmRDb250cm9sOiB0cnVlLFxyXG4gIG1pbmltdW1Ub3VjaERyYWc6ODAsXHJcbiAgcmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlOiB0cnVlLFxyXG4gIHJlbmRlckRvdHNPdXRzaWRlOmZhbHNlLFxyXG4gIHJlc3BvbnNpdmU6cmVzcG9uc2l2ZSxcclxuICBzaG93RG90czpmYWxzZSxcclxuICBzbGlkZXJDbGFzczpcIlwiLFxyXG4gIHNsaWRlc1RvU2xpZGU6MSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWxDYXJkKCkge1xyXG4gIHJldHVybiAoXHJcbiAgIDxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxcIiBzeD17e3ZhcmlhbnQ6J3NlY3Rpb24udGVzdGltb25pYWwnfX0+XHJcbiAgICAgIDxDb250YWluZXIgY3NzPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwiUmVmZXJhbnNsYXLEsW3EsXpcIlxyXG4gICAgICAgICAgdGl0bGU9XCJNw7zFn3RlcmkgTWVtbnVuaXlldGl5bGUgS2FyxZ/EsWxhxZ/EsW5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJvdXNlbFdyYXBwZXJ9PlxyXG4gICAgICAgIDxDYXJvdXNlbCB7Li4uY2Fyb3VzZWxQYXJhbXN9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMucmV2aWV3Q2FyZH0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgIDxSYXRpbmcgcmF0aW5nPXtpdGVtLnJldmlld30gLz5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzeD17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmF2YXRhcn0gYWx0PVwiQ2xpZW50IEltYWdlXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHN4PXtzdHlsZXMuaGVhZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmRlc2lnbmF0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2lnbmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICA8L0JveD5cclxuICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJvdXNlbFdyYXBwZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxyXG4gICAgbXQ6ICctMzBweCcsXHJcbiAgICBweDogJzE1cHgnLFxyXG4gICAgJy5jYXJvdXNlbC1jb250YWluZXInOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG1heFdpZHRoOiBbXHJcbiAgICAgICAgJzEwMCUnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnNzUwcHgnLFxyXG4gICAgICAgICcxMDAwcHgnLFxyXG4gICAgICAgICcxMTgwcHgnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJ2NhbGMoNTAlICsgODY1cHgpJyxcclxuICAgICAgXSxcclxuICAgICAgbXI6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICctMjIwcHgnXSxcclxuICAgICAgbWw6ICdhdXRvJyxcclxuICAgICAgJy5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtJzoge1xyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSg0biknOiB7XHJcbiAgICAgICAgb3BhY2l0eTogJzAuNScsXHJcbiAgICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MjBweCknOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmV2aWV3Q2FyZDoge1xyXG4gICAgYm94U2hhZG93OiAnMHB4IDBweCAxcHggcmdiYSgzOCwgNzgsIDExOCwgMC4zNSknLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcclxuICAgIGJvcmRlclJhZGl1czogJzZweCcsXHJcbiAgICBwOiBbXHJcbiAgICAgICczMHB4IDIwcHggMzVweCcsXHJcbiAgICAgICczMHB4IDI1cHggMzVweCcsXHJcbiAgICAgICczMHB4IDIwcHggMzVweCcsXHJcbiAgICAgICczNXB4IDMwcHggNDBweCA0MHB4JyxcclxuICAgICAgJzMwcHggMzBweCAzNXB4JyxcclxuICAgICAgJzM1cHggMzBweCA0MHB4IDQwcHgnLFxyXG4gICAgXSxcclxuICAgIGJnOiAnd2hpdGUnLFxyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICBtOiBbXHJcbiAgICAgICcyOHB4IDVweCAzMHB4IDVweCcsXHJcbiAgICAgICcyOHB4IDIwcHggMzBweCAyMHB4JyxcclxuICAgICAgJzI4cHggMTVweCAzMHB4IDE1cHgnLFxyXG4gICAgICAnMjhweCAxNXB4IDMwcHggMTVweCcsXHJcbiAgICAgICczMHB4IDIwcHggNDBweCcsXHJcbiAgICBdLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJveFNoYWRvdzogJzBweCA2cHggMzBweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpJyxcclxuICAgIH0sXHJcbiAgICAnLnJhdGluZyc6IHtcclxuICAgICAgbWI6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgdWw6IHtcclxuICAgICAgICBwbDogMCxcclxuICAgICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgICBtYjogMCxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMnB4JyxcclxuICAgICAgICAnJjpsYXN0LW9mLXR5cGUnOiB7XHJcbiAgICAgICAgICBtYXJnaW5SaWdodDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICAnLnN0YXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICBtcjogJzFweCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuc3Rhci1vJzoge1xyXG4gICAgICAgIGNvbG9yOiAnI2RkZCcsXHJcbiAgICAgICAgbXI6ICcxcHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcuY2FyZC1mb290ZXInOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIG1hcmdpblRvcDogWzUsIG51bGwsIG51bGwsICczM3B4J10sXHJcbiAgICAgICcuaW1hZ2UnOiB7XHJcbiAgICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgICBtcjogWzMsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBpbWc6IHtcclxuICAgICAgICAgIHdpZHRoOiAnNTVweCcsXHJcbiAgICAgICAgICBoZWlnaHQ6ICc1NXB4JyxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6IFsxLCAyXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIG1iOiBbMywgbnVsbCwgbnVsbCwgJzIycHgnXSxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjYsXHJcbiAgfSxcclxuICBkZXNjcmlwdGlvbjoge1xyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCAyXSxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBtYjogJzNweCcsXHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgbGluZUhlaWdodDogMS4zLFxyXG4gIH0sXHJcbiAgZGVzaWduYXRpb246IHtcclxuICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgIGZvbnRTaXplOiAxLFxyXG4gICAgbGluZUhlaWdodDogMS40LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=