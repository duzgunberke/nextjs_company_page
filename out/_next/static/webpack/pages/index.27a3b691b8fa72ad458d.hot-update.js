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
  description: "Tahmin ettiğimden çok daha iyi bir hizmet. İhtiyaçlarınıza yönelik hızlı çözümler sunuyorlar.",
  avatar: assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  name: 'Ahmet Oflaz',
  designation: '@ahmetoflaz',
  review: 5
}, {
  id: 3,
  title: 'Son Derece Kullancı Dostu',
  description: "Uygulamamızın kolay anlaşılır bir arayüzü var. Şirketimizin ihtiyacına yönelik çözümler sunuyorlar.",
  avatar: assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  name: 'Süleyman Canan',
  designation: '@süleymancanan',
  review: 5
}, {
  id: 4,
  title: 'İhtiyaçalarımıza Yönelik Çözümler',
  description: "İsteklerimizi",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdmF0YXIiLCJBdmF0YXIxIiwibmFtZSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiY2Fyb3VzZWxQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwianN4IiwiQnV0dG9uR3JvdXAiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImRvdExpc3RDbGFzcyIsImRyYWdnYWJsZSIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsIml0ZW1DbGFzcyIsImtleUJvYXJkQ29udHJvbCIsIm1pbmltdW1Ub3VjaERyYWciLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJyZW5kZXJEb3RzT3V0c2lkZSIsInNob3dEb3RzIiwic2xpZGVyQ2xhc3MiLCJUZXN0aW1vbmlhbENhcmQiLCJfdGhpcyIsInN4IiwidmFyaWFudCIsIkNvbnRhaW5lciIsImNzcyIsInRleHRBbGlnbiIsIlNlY3Rpb25IZWFkZXIiLCJzbG9nYW4iLCJCb3giLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJDYXJvdXNlbCIsIl9leHRlbmRzIiwibWFwIiwiaXRlbSIsInJldmlld0NhcmQiLCJrZXkiLCJSYXRpbmciLCJyYXRpbmciLCJIZWFkaW5nIiwiYXMiLCJUZXh0IiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJoZWFkaW5nIiwiX2MiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwicHgiLCJ3aWR0aCIsIm1heFdpZHRoIiwibXIiLCJtbCIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicCIsImJnIiwibSIsIm1iIiwidWwiLCJwbCIsImxpc3RTdHlsZSIsInN2ZyIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJmbGV4U2hyaW5rIiwiaW1nIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDcUU7QUFDZjtBQUNmO0FBQ1c7QUFDTjtBQUVTO0FBQ0E7QUFDQTtBQUNBO0FBRXJELElBQU1BLElBQUksR0FBRyxDQUNYO0VBQ0VDLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEtBQUssRUFBRSx5Q0FBeUM7RUFDaERDLFdBQVcsRUFDVCxzSUFBc0k7RUFDeElDLE1BQU0sRUFBRUMscUVBQU87RUFDZkMsSUFBSSxFQUFFLGFBQWE7RUFDbkJDLFdBQVcsRUFBRSxhQUFhO0VBQzFCQyxNQUFNLEVBQUU7QUFDVixDQUFDLEVBQ0Q7RUFDRVAsRUFBRSxFQUFFLENBQUM7RUFDTEMsS0FBSyxFQUFFLDhCQUE4QjtFQUNyQ0MsV0FBVyxFQUNULCtGQUErRjtFQUNqR0MsTUFBTSxFQUFFSyxxRUFBTztFQUNmSCxJQUFJLEVBQUUsYUFBYTtFQUNuQkMsV0FBVyxFQUFFLGFBQWE7RUFDMUJDLE1BQU0sRUFBRTtBQUNWLENBQUMsRUFDRDtFQUNFUCxFQUFFLEVBQUUsQ0FBQztFQUNMQyxLQUFLLEVBQUUsMkJBQTJCO0VBQ2xDQyxXQUFXLEVBQ1QscUdBQXFHO0VBQ3ZHQyxNQUFN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RUFBRTtFQUNkO0FBQ0YsQ0FBQztBQUFDLElBQUFoQyxFQUFBO0FBQUFpQyxZQUFBLENBQUFqQyxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI3YTNiNjkxYjhmYTcyYWQ0NThkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEhlYWRpbmcsIFRleHQsIEJveCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJ2NvbXBvbmVudHMvcmF0aW5nJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuXHJcbmltcG9ydCBBdmF0YXIxIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIxLnBuZyc7XHJcbmltcG9ydCBBdmF0YXIyIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIyLnBuZyc7XHJcbmltcG9ydCBBdmF0YXIzIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIzLnBuZyc7XHJcbmltcG9ydCBBdmF0YXI0IGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXI0LnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICdNb2Rlcm4gR8O2csO8bsO8bSAmIFRyZW5kbGVyZGUgQmlyIFRhc2FyxLFtJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlZpdmV2ZW4nZGFuIGFsZMSxxJ/EsW0gaGl6bWV0bGVyZGVuIMOnb2sgbWVtbnVudW0uIFPDvHJla2xpIGdlbGnFn2VuIHZlIHllbmlsZW5lbiBiaXIgc2lzdGVtLiDEsGh0aXlhw6dsYXLEsW3EsXphIHnDtm5lbGlrIMOnw7Z6w7xtbGVyIHN1bnV5b3JsYXIuXCIsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjEsXHJcbiAgICBuYW1lOiAnTWlyYXkgRHVtYW4nLFxyXG4gICAgZGVzaWduYXRpb246ICdAbWlyYXlkdW1hbicsXHJcbiAgICByZXZpZXc6IDQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiAnU8O8cGVyIEjEsXpsxLEgJiBLb2xheSBLdWxsYW7EsW0nLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVGFobWluIGV0dGnEn2ltZGVuIMOnb2sgZGFoYSBpeWkgYmlyIGhpem1ldC4gxLBodGl5YcOnbGFyxLFuxLF6YSB5w7ZuZWxpayBoxLF6bMSxIMOnw7Z6w7xtbGVyIHN1bnV5b3JsYXIuXCIsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjIsXHJcbiAgICBuYW1lOiAnQWhtZXQgT2ZsYXonLFxyXG4gICAgZGVzaWduYXRpb246ICdAYWhtZXRvZmxheicsXHJcbiAgICByZXZpZXc6IDUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiAnU29uIERlcmVjZSBLdWxsYW5jxLEgRG9zdHUnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVXlndWxhbWFtxLF6xLFuIGtvbGF5IGFubGHFn8SxbMSxciBiaXIgYXJhecO8esO8IHZhci4gxZ5pcmtldGltaXppbiBpaHRpeWFjxLFuYSB5w7ZuZWxpayDDp8O2esO8bWxlciBzdW51eW9ybGFyLlwiLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIzLFxyXG4gICAgbmFtZTogJ1PDvGxleW1hbiBDYW5hbicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0Bzw7xsZXltYW5jYW5hbicsXHJcbiAgICByZXZpZXc6IDUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdGxlOiAnxLBodGl5YcOnYWxhcsSxbcSxemEgWcO2bmVsaWsgw4fDtnrDvG1sZXInLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwixLBzdGVrbGVyaW1pemlcIixcclxuICAgIGF2YXRhcjogQXZhdGFyNCxcclxuICAgIG5hbWU6ICdNdWhhbW1lZCBHw7xsYXknLFxyXG4gICAgZGVzaWduYXRpb246ICdAbXVoYW1tZWRndWxheScsXHJcbiAgICByZXZpZXc6IDQsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgZGVza3RvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTYxOSB9LFxyXG4gICAgaXRlbXM6IDQsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiA0LCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbGFwdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTYxOSwgbWluOiAxMDI0IH0sXHJcbiAgICBpdGVtczogMyxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDMsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICB0YWJsZXQ6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDY0MCB9LFxyXG4gICAgaXRlbXM6IDIsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAyLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogNjM5LCBtaW46IDAgfSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgY2Fyb3VzZWxQYXJhbXMgPSB7XHJcbiAgYWRkaXRpb25hbFRyYW5zZnJvbTowLFxyXG4gIGFycm93czpmYWxzZSxcclxuICBhdXRvUGxheVNwZWVkOjMwMDAsXHJcbiAgY2VudGVyTW9kZTpmYWxzZSxcclxuICBjbGFzc05hbWU6XCJcIixcclxuICBjb250YWluZXJDbGFzczpcImNhcm91c2VsLWNvbnRhaW5lclwiLFxyXG4gIGN1c3RvbUJ1dHRvbkdyb3VwOjxCdXR0b25Hcm91cCAvPixcclxuICBkb3RMaXN0Q2xhc3M6XCJcIixcclxuICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgZm9jdXNPblNlbGVjdDpmYWxzZSxcclxuICBpbmZpbml0ZTp0cnVlLFxyXG4gIGl0ZW1DbGFzczpcIlwiLFxyXG4gIGtleUJvYXJkQ29udHJvbDogdHJ1ZSxcclxuICBtaW5pbXVtVG91Y2hEcmFnOjgwLFxyXG4gIHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZTogdHJ1ZSxcclxuICByZW5kZXJEb3RzT3V0c2lkZTpmYWxzZSxcclxuICByZXNwb25zaXZlOnJlc3BvbnNpdmUsXHJcbiAgc2hvd0RvdHM6ZmFsc2UsXHJcbiAgc2xpZGVyQ2xhc3M6XCJcIixcclxuICBzbGlkZXNUb1NsaWRlOjEsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFsQ2FyZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICA8c2VjdGlvbiBpZD1cInRlc3RpbW9uaWFsXCIgc3g9e3t2YXJpYW50OidzZWN0aW9uLnRlc3RpbW9uaWFsJ319PlxyXG4gICAgICA8Q29udGFpbmVyIGNzcz17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIlJlZmVyYW5zbGFyxLFtxLF6XCJcclxuICAgICAgICAgIHRpdGxlPVwiTcO8xZ90ZXJpIE1lbW51bml5ZXRpeWxlIEthcsWfxLFsYcWfxLFuXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuY2Fyb3VzZWxXcmFwcGVyfT5cclxuICAgICAgICA8Q2Fyb3VzZWwgey4uLmNhcm91c2VsUGFyYW1zfT5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSk9PihcclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnJldmlld0NhcmR9IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICA8UmF0aW5nIHJhdGluZz17aXRlbS5yZXZpZXd9IC8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgc3g9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5hdmF0YXJ9IGFsdD1cIkNsaWVudCBJbWFnZVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3ZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzeD17c3R5bGVzLmhlYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5kZXNpZ25hdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNpZ25hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgPC9Cb3g+XHJcbiAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2Fyb3VzZWxXcmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcclxuICAgIG10OiAnLTMwcHgnLFxyXG4gICAgcHg6ICcxNXB4JyxcclxuICAgICcuY2Fyb3VzZWwtY29udGFpbmVyJzoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBtYXhXaWR0aDogW1xyXG4gICAgICAgICcxMDAlJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzc1MHB4JyxcclxuICAgICAgICAnMTAwMHB4JyxcclxuICAgICAgICAnMTE4MHB4JyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICdjYWxjKDUwJSArIDg2NXB4KScsXHJcbiAgICAgIF0sXHJcbiAgICAgIG1yOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnLTIyMHB4J10sXHJcbiAgICAgIG1sOiAnYXV0bycsXHJcbiAgICAgICcucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSc6IHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgfSxcclxuICAgICAgJy5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNG4pJzoge1xyXG4gICAgICAgIG9wYWNpdHk6ICcwLjUnLFxyXG4gICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjIwcHgpJzoge1xyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJldmlld0NhcmQ6IHtcclxuICAgIGJveFNoYWRvdzogJzBweCAwcHggMXB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMzUpJyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgcDogW1xyXG4gICAgICAnMzBweCAyMHB4IDM1cHgnLFxyXG4gICAgICAnMzBweCAyNXB4IDM1cHgnLFxyXG4gICAgICAnMzBweCAyMHB4IDM1cHgnLFxyXG4gICAgICAnMzVweCAzMHB4IDQwcHggNDBweCcsXHJcbiAgICAgICczMHB4IDMwcHggMzVweCcsXHJcbiAgICAgICczNXB4IDMwcHggNDBweCA0MHB4JyxcclxuICAgIF0sXHJcbiAgICBiZzogJ3doaXRlJyxcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgbTogW1xyXG4gICAgICAnMjhweCA1cHggMzBweCA1cHgnLFxyXG4gICAgICAnMjhweCAyMHB4IDMwcHggMjBweCcsXHJcbiAgICAgICcyOHB4IDE1cHggMzBweCAxNXB4JyxcclxuICAgICAgJzI4cHggMTVweCAzMHB4IDE1cHgnLFxyXG4gICAgICAnMzBweCAyMHB4IDQwcHgnLFxyXG4gICAgXSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6ICcwcHggNnB4IDMwcHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKScsXHJcbiAgICB9LFxyXG4gICAgJy5yYXRpbmcnOiB7XHJcbiAgICAgIG1iOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIHVsOiB7XHJcbiAgICAgICAgcGw6IDAsXHJcbiAgICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgICAgbWI6IDAsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICB9LFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgJyY6bGFzdC1vZi10eXBlJzoge1xyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgJy5zdGFyJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgbXI6ICcxcHgnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLnN0YXItbyc6IHtcclxuICAgICAgICBjb2xvcjogJyNkZGQnLFxyXG4gICAgICAgIG1yOiAnMXB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnLmNhcmQtZm9vdGVyJzoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW5Ub3A6IFs1LCBudWxsLCBudWxsLCAnMzNweCddLFxyXG4gICAgICAnLmltYWdlJzoge1xyXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgICAgbXI6IFszLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgaW1nOiB7XHJcbiAgICAgICAgICB3aWR0aDogJzU1cHgnLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnNTVweCcsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBtYjogWzMsIG51bGwsIG51bGwsICcyMnB4J10sXHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgbGluZUhlaWdodDogMS42LFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgMl0sXHJcbiAgfSxcclxuICBoZWFkaW5nOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgbWI6ICczcHgnLFxyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMyxcclxuICB9LFxyXG4gIGRlc2lnbmF0aW9uOiB7XHJcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICBmb250U2l6ZTogMSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9