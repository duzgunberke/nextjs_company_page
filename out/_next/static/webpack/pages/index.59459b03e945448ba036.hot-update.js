webpackHotUpdate_N_E("pages/index",{

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ({
  // example colors with dark mode
  colors: {
    text: '#343D48',
    // body color and primary color
    text_secondary: '#02073E',
    // secondary body color
    heading: '#0F2137',
    // primary heading color
    heading_secondary: '#0F2137',
    // heading color
    background: '#FFFFFF',
    // body background color
    background_secondary: '#F9FBFD',
    // secondary background color
    border_color: '#E5ECF4',
    // border color
    yellow: '#FFA740',
    // border color
    primary: '#EA3A60',
    // primary button and link color
    secondary: '#2563FF',
    // secondary color - can be used for hover states
    muted: '#E4E4E4',
    // muted color
    accent: '#609',
    // a contrast color for emphasizing UI

    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111'
      }
    }
  },
  breakpoints: ['480px', '640px', '768px', '1024px', '1220px', '1366px', '1620px'],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif"
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ['100%', null, null, '780px', '1020px', '1200px', null, '1310px'],
      px: [4, 6]
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    main: {}
  },
  section: {
    keyFeature: {
      pt: [8, null, 9, null, null, 10],
      pb: ['90px', null, 9, null, null, 10, null, '165px']
    },
    feature: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    news: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    coreFeature: {
      pb: [8, null, 9, null, null, 10, null, '170px'],
      overflow: 'hidden'
    },
    testimonial: {
      pt: [8, null, 8, '70px', null, 8, null, '145px'],
      pb: ['90px', null, 9, null, null, 10, null, '190px'],
      overflow: 'hidden'
    },
    services: {
      pb: ['90px', null, 9, null, null, 10, null, '150px']
    },
    products: {
      pt: [8, null, 9, null, null, 10, null, '180px'],
      pb: ['90px', null, 9, null, null, 10, null, '180px']
    }
  },
  sectionHeader: {
    width: ['100%', null, '540px'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: ['-3px', null, -1],
    marginBottom: ['50px', null, '60px', null, null, '65px', null, '80px'],
    mx: 'auto',
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading',
      lineHeight: [1.3, null, null, 1.25],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px'
    },
    subTitle: {
      fontSize: [0, '13px', null, '14px'],
      color: 'primary',
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: 2,
      lineHeight: 1.5
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4],
      letterSpacing: '-.55px',
      color: 'heading'
    },
    heroPrimary: {
      color: 'heading',
      fontSize: ['32px', '36px', '42px', '40px', '42px', '52px', '58px', '66px'],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 5]
    },
    heroSecondary: {
      fontSize: [2, null, '17px', null, null, '19px', 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: 'body',
      mb: 5,
      px: [0, null, 5, 6, null, 8, 9],
      color: 'heading'
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: [3, null, 4],
      lineHeight: 1.25,
      mb: 1
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137'
    },
    muted: {
      lineHeight: '26px',
      color: 'muted'
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px'
    }
  },
  links: {
    "default": {
      cursor: 'pointer'
    },
    bold: {
      fontWeight: 'bold'
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal'
    },
    blog: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      transition: 'color 0.25s',
      '&:hover': {
        color: 'primary'
      }
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none'
    },
    logo: {
      display: 'flex'
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none']
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      borderRadius: '45px',
      fontSize: ['14px', null, null, 2],
      letterSpacings: '-0.15px',
      padding: ['12px 20px', null, '15px 30px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0
      }
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px'
      }
    },
    whiteButton: {
      variant: 'buttons.defaultBtn',
      color: 'heading_secondary',
      bg: 'white',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px'
      }
    },
    secondary: {
      variant: 'buttons.defaultBtn',
      border: '2px solid',
      borderColor: 'primary',
      color: 'primary',
      bg: 'transparent',
      padding: ['10px 15px', null, '15px 30px'],
      '&:hover': {
        color: 'white',
        bg: 'primary'
      }
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      color: 'white',
      svg: {
        fontSize: [4, 6],
        mr: 2
      }
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5
    },
    featureCard: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 3
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    input: {
      borderRadius: 8,
      borderColor: 'border_color',
      height: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: function boxShadow(t) {
          return "0 0 0 2px ".concat(t.colors.primary);
        },
        outline: 'none'
      }
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px'
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSmoothing: 'antialiased',
      // Modal Global Style
      '.modal-video-close-btn': {
        cursor: 'pointer'
      },
      '.modal-video-movie-wrap': {
        margin: 6,
        width: 'auto'
      }
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRleHQiLCJ0ZXh0X3NlY29uZGFyeSIsImhlYWRpbmciLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kX3NlY29uZGFyeSIsImJvcmRlcl9jb2xvciIsInllbGxvdyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsIm1vZGVzIiwiZGFyayIsImJyZWFrcG9pbnRzIiwiZm9udHMiLCJib2R5IiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsImxheW91dCIsImNvbnRhaW5lciIsIm1heFdpZHRoIiwicHgiLCJoZWFkZXIiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsInBvc2l0aW9uIiwid2lkdGgiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1haW4iLCJzZWN0aW9uIiwia2V5RmVhdHVyZSIsInB0IiwicGIiLCJmZWF0dXJlIiwibmV3cyIsImNvcmVGZWF0dXJlIiwib3ZlcmZsb3ciLCJ0ZXN0aW1vbmlhbCIsInNlcnZpY2VzIiwicHJvZHVjdHMiLCJzZWN0aW9uSGVhZGVyIiwiZmxleERpcmVjdGlvbiIsIm10IiwibWFyZ2luQm90dG9tIiwibXgiLCJ0aXRsZSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInRleHRBbGlnbiIsImxldHRlclNwYWNpbmciLCJzdWJUaXRsZSIsInRleHRUcmFuc2Zvcm0iLCJtYiIsImZvbnRGYW1pbHkiLCJoZXJvUHJpbWFyeSIsImhlcm9TZWNvbmRhcnkiLCJ2YXJpYW50IiwibGVhZCIsImxpbmtzIiwiY3Vyc29yIiwibmF2IiwiYmxvZyIsInRleHREZWNvcmF0aW9uIiwidHJhbnNpdGlvbiIsImZvb3RlciIsImxvZ28iLCJpbWFnZXMiLCJhdmF0YXIiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJidXR0b25zIiwibWVudSIsImRlZmF1bHRCdG4iLCJwYWRkaW5nIiwib3V0bGluZSIsImJnIiwiYm94U2hhZG93Iiwid2hpdGVCdXR0b24iLCJib3JkZXIiLCJib3JkZXJDb2xvciIsInRleHRCdXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdmciLCJtciIsImNhcmRzIiwib2ZmZXIiLCJmbGV4IiwibWluSGVpZ2h0IiwibSIsImZlYXR1cmVDYXJkIiwicCIsImZvcm1zIiwibGFiZWwiLCJpbnB1dCIsInQiLCJjb25jYXQiLCJiYWRnZXMiLCJzdHlsZXMiLCJyb290IiwiZm9udFNtb290aGluZyIsIm1hcmdpbiIsImhyIiwiYm9yZGVyQm90dG9tIiwidWwiLCJsaXN0U3R5bGUiLCJzck9ubHkiLCJjbGlwIiwiY2xpcFBhdGgiLCJ3aGl0ZVNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSw4Q0FBZTtFQUNiO0VBQ0FBLE1BQU0sRUFBRTtJQUNOQyxJQUFJLEVBQUUsU0FBUztJQUFFO0lBQ2pCQyxjQUFjLEVBQUUsU0FBUztJQUFFO0lBQzNCQyxPQUFPLEVBQUUsU0FBUztJQUFFO0lBQ3BCQyxpQkFBaUIsRUFBRSxTQUFTO0lBQUU7SUFDOUJDLFVBQVUsRUFBRSxTQUFTO0lBQUU7SUFDdkJDLG9CQUFvQixFQUFFLFNBQVM7SUFBRTtJQUNqQ0MsWUFBWSxFQUFFLFNBQVM7SUFBRTtJQUN6QkMsTUFBTSxFQUFFLFNBQVM7SUFBRTtJQUNuQkMsT0FBTyxFQUFFLFNBQVM7SUFBRTtJQUNwQkMsU0FBUyxFQUFFLFNBQVM7SUFBRTtJQUN0QkMsS0FBSyxFQUFFLFNBQVM7SUFBRTtJQUNsQkMsTUFBTSxFQUFFLE1BQU07SUFBRTs7SUFFaEI7SUFDQUMsS0FBSyxFQUFFO01BQ0xDLElBQUksRUFBRTtRQUNKYixJQUFJLEVBQUUsTUFBTTtRQUNaSSxVQUFVLEVBQUUsTUFBTTtRQUNsQkksT0FBTyxFQUFFLE1BQU07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cUJBQXFCO01BQy9CQyxLQUFLLEVBQUUsZ0JBQWdCO01BQ3ZCcUYsVUFBVSxFQUFFO0lBQ2Q7RUFDRjtBQUNGLENBQUMsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41OTQ1OWIwM2U5NDU0NDhiYTAzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8vIGV4YW1wbGUgY29sb3JzIHdpdGggZGFyayBtb2RlXHJcbiAgY29sb3JzOiB7XHJcbiAgICB0ZXh0OiAnIzM0M0Q0OCcsIC8vIGJvZHkgY29sb3IgYW5kIHByaW1hcnkgY29sb3JcclxuICAgIHRleHRfc2Vjb25kYXJ5OiAnIzAyMDczRScsIC8vIHNlY29uZGFyeSBib2R5IGNvbG9yXHJcbiAgICBoZWFkaW5nOiAnIzBGMjEzNycsIC8vIHByaW1hcnkgaGVhZGluZyBjb2xvclxyXG4gICAgaGVhZGluZ19zZWNvbmRhcnk6ICcjMEYyMTM3JywgLy8gaGVhZGluZyBjb2xvclxyXG4gICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLCAvLyBib2R5IGJhY2tncm91bmQgY29sb3JcclxuICAgIGJhY2tncm91bmRfc2Vjb25kYXJ5OiAnI0Y5RkJGRCcsIC8vIHNlY29uZGFyeSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBib3JkZXJfY29sb3I6ICcjRTVFQ0Y0JywgLy8gYm9yZGVyIGNvbG9yXHJcbiAgICB5ZWxsb3c6ICcjRkZBNzQwJywgLy8gYm9yZGVyIGNvbG9yXHJcbiAgICBwcmltYXJ5OiAnI0VBM0E2MCcsIC8vIHByaW1hcnkgYnV0dG9uIGFuZCBsaW5rIGNvbG9yXHJcbiAgICBzZWNvbmRhcnk6ICcjMjU2M0ZGJywgLy8gc2Vjb25kYXJ5IGNvbG9yIC0gY2FuIGJlIHVzZWQgZm9yIGhvdmVyIHN0YXRlc1xyXG4gICAgbXV0ZWQ6ICcjRTRFNEU0JywgLy8gbXV0ZWQgY29sb3JcclxuICAgIGFjY2VudDogJyM2MDknLCAvLyBhIGNvbnRyYXN0IGNvbG9yIGZvciBlbXBoYXNpemluZyBVSVxyXG5cclxuICAgIC8vIGhpZ2hsaWdodFx0YSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBoaWdobGlnaHRpbmcgdGV4dFxyXG4gICAgbW9kZXM6IHtcclxuICAgICAgZGFyazoge1xyXG4gICAgICAgIHRleHQ6ICcjZmZmJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXHJcbiAgICAgICAgcHJpbWFyeTogJyMwY2YnLFxyXG4gICAgICAgIHNlY29uZGFyeTogJyMwOWMnLFxyXG4gICAgICAgIG11dGVkOiAnIzExMScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IFtcclxuICAgICc0ODBweCcsXHJcbiAgICAnNjQwcHgnLFxyXG4gICAgJzc2OHB4JyxcclxuICAgICcxMDI0cHgnLFxyXG4gICAgJzEyMjBweCcsXHJcbiAgICAnMTM2NnB4JyxcclxuICAgICcxNjIwcHgnLFxyXG4gIF0sXHJcbiAgZm9udHM6IHtcclxuICAgIGJvZHk6IFwiJ0RNIFNhbnMnLCBzYW5zLXNlcmlmXCIsXHJcbiAgICBoZWFkaW5nOiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiLFxyXG4gIH0sXHJcbiAgZm9udFNpemVzOiBbMTIsIDE1LCAxNiwgMTgsIDIwLCAyMiwgMjQsIDI4LCAzMiwgMzYsIDQyLCA0OCwgNTIsIDY0XSxcclxuICBmb250V2VpZ2h0czoge1xyXG4gICAgYm9keTogJ25vcm1hbCcsXHJcbiAgICBoZWFkaW5nOiA1MDAsXHJcbiAgICBib2xkOiA3MDAsXHJcbiAgfSxcclxuICBsaW5lSGVpZ2h0czoge1xyXG4gICAgYm9keTogMS44LFxyXG4gICAgaGVhZGluZzogMS41LFxyXG4gIH0sXHJcbiAgbGV0dGVyU3BhY2luZ3M6IHtcclxuICAgIGJvZHk6ICdub3JtYWwnLFxyXG4gICAgY2FwczogJzAuMmVtJyxcclxuICAgIGhlYWRpbmc6ICctMC41cHgnLFxyXG4gIH0sXHJcbiAgc3BhY2U6IFswLCA1LCAxMCwgMTUsIDIwLCAyNSwgMzAsIDUwLCA4MCwgMTAwLCAxMjAsIDE1MF0sXHJcbiAgLy8gdmFyaWFudHMgY2FuIHVzZSBjdXN0b20sIHVzZXItZGVmaW5lZCBuYW1lc1xyXG4gIGxheW91dDoge1xyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgIG1heFdpZHRoOiBbXHJcbiAgICAgICAgJzEwMCUnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnNzgwcHgnLFxyXG4gICAgICAgICcxMDIwcHgnLFxyXG4gICAgICAgICcxMjAwcHgnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzEzMTBweCcsXHJcbiAgICAgIF0sXHJcbiAgICAgIHB4OiBbNCwgNl0sXHJcbiAgICB9LFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgIGNvbG9yOiAnIzAyMDczRScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICBweTogMyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG4gICAgdG9vbGJhcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgfSxcclxuICAgIG1haW46IHt9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbjoge1xyXG4gICAga2V5RmVhdHVyZToge1xyXG4gICAgICBwdDogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICAgICAgcGI6IFsnOTBweCcsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTY1cHgnXSxcclxuICAgIH0sXHJcbiAgICBmZWF0dXJlOiB7XHJcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNzBweCddLFxyXG4gICAgfSxcclxuICAgIG5ld3M6IHtcclxuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE3MHB4J10sXHJcbiAgICB9LFxyXG4gICAgY29yZUZlYXR1cmU6IHtcclxuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE3MHB4J10sXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIH0sXHJcbiAgICB0ZXN0aW1vbmlhbDoge1xyXG4gICAgICBwdDogWzgsIG51bGwsIDgsICc3MHB4JywgbnVsbCwgOCwgbnVsbCwgJzE0NXB4J10sXHJcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE5MHB4J10sXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIH0sXHJcbiAgICBzZXJ2aWNlczoge1xyXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNTBweCddLFxyXG4gICAgfSxcclxuICAgIHByb2R1Y3RzOiB7XHJcbiAgICAgIHB0OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxODBweCddLFxyXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxODBweCddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25IZWFkZXI6IHtcclxuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCAnNTQwcHgnXSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtdDogWyctM3B4JywgbnVsbCwgLTFdLFxyXG4gICAgbWFyZ2luQm90dG9tOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc2NXB4JywgbnVsbCwgJzgwcHgnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCBudWxsLCBudWxsLCAnMzJweCcsIG51bGwsICczNnB4J10sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIDEuMjVdLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0uNXB4JyxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFswLCAnMTNweCcsIG51bGwsICcxNHB4J10sXHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IFsnMS41cHgnLCBudWxsLCAnMnB4J10sXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbWI6IDIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcclxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiBbNF0sXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjU1cHgnLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICAgIGhlcm9QcmltYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiBbXHJcbiAgICAgICAgJzMycHgnLFxyXG4gICAgICAgICczNnB4JyxcclxuICAgICAgICAnNDJweCcsXHJcbiAgICAgICAgJzQwcHgnLFxyXG4gICAgICAgICc0MnB4JyxcclxuICAgICAgICAnNTJweCcsXHJcbiAgICAgICAgJzU4cHgnLFxyXG4gICAgICAgICc2NnB4JyxcclxuICAgICAgXSxcclxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS4yXSxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgfSxcclxuICAgIGhlcm9TZWNvbmRhcnk6IHtcclxuICAgICAgZm9udFNpemU6IFsyLCBudWxsLCAnMTdweCcsIG51bGwsIG51bGwsICcxOXB4JywgNF0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjksIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIG1iOiA1LFxyXG4gICAgICBweDogWzAsIG51bGwsIDUsIDYsIG51bGwsIDgsIDldLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIC8vIGV4dGVuZHMgdGhlIHRleHQuaGVhZGluZyBzdHlsZXNcclxuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0XSxcclxuICAgICAgbGluZUhlaWdodDogMS4yNSxcclxuICAgICAgbWI6IDEsXHJcbiAgICB9LFxyXG4gICAgbGVhZDoge1xyXG4gICAgICBmb250U2l6ZTogNDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcclxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4JyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICB9LFxyXG4gICAgbXV0ZWQ6IHtcclxuICAgICAgbGluZUhlaWdodDogJzI2cHgnLFxyXG4gICAgICBjb2xvcjogJ211dGVkJyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBjb2xvcjogJyMwMEE5OUQnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlua3M6IHtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB9LFxyXG4gICAgYm9sZDoge1xyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9LFxyXG4gICAgbmF2OiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcclxuICAgICAgcHg6IDI1LFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIH0sXHJcbiAgICBibG9nOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHB4OiAwLFxyXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4yNXMnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBweDogMCxcclxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZXM6IHtcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICB3aWR0aDogNDgsXHJcbiAgICAgIGhlaWdodDogNDgsXHJcbiAgICAgIGJvcmRlclJhZGl1czogOTk5OTksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgLy8gdmFyaWFudHMgZm9yIGJ1dHRvbnNcclxuICBidXR0b25zOiB7XHJcbiAgICBtZW51OiB7XHJcbiAgICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gICAgfSwgLy8gZGVmYXVsdCB2YXJpYW50IGZvciBNZW51QnV0dG9uXHJcbiAgICAvLyB5b3UgY2FuIHJlZmVyZW5jZSBvdGhlciB2YWx1ZXMgZGVmaW5lZCBpbiB0aGUgdGhlbWVcclxuICAgIGRlZmF1bHRCdG46IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNDVweCcsXHJcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgbGV0dGVyU3BhY2luZ3M6ICctMC4xNXB4JyxcclxuICAgICAgcGFkZGluZzogWycxMnB4IDIwcHgnLCBudWxsLCAnMTVweCAzMHB4J10sXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgYmc6ICdwcmltYXJ5JyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgyMzMsIDc2LCA4NCwgMC41NykgMHB4IDlweCAyMHB4IC01cHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHdoaXRlQnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgYmc6ICd3aGl0ZScsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC41KSAwcHggMTJweCAyNHB4IC0xMHB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBwYWRkaW5nOiBbJzEwcHggMTVweCcsIG51bGwsICcxNXB4IDMwcHgnXSxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgYmc6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0ZXh0QnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFs0LCA2XSxcclxuICAgICAgICBtcjogMixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkczoge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBwYWRkaW5nOiAyLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICB9LFxyXG4gICAgb2ZmZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZmxleDogWycxIDEgY2FsYyg1MCUgLSAxNnB4KScsICcxIDEgMjAlJ10sXHJcbiAgICAgIG1pbkhlaWdodDogMTMwLFxyXG4gICAgICBtOiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXHJcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRURFRkY2JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgfSxcclxuICAgIGZlYXR1cmVDYXJkOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgcDogMyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb3Jtczoge1xyXG4gICAgbGFiZWw6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnYm9yZGVyX2NvbG9yJyxcclxuICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICBib3hTaGFkb3c6ICh0KSA9PiBgMCAwIDAgMnB4ICR7dC5jb2xvcnMucHJpbWFyeX1gLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYmFkZ2VzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGJnOiAnIzI4QTVGRicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXHJcbiAgICAgIHA6ICczcHggMTFweCcsXHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcclxuICAgIH0sXHJcbiAgICBvdXRsaW5lOiB7XHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzdHlsZXM6IHtcclxuICAgIC8vIFRvIGFkZCBiYXNlLCB0b3AtbGV2ZWwgc3R5bGVzIHRvIHRoZSA8Ym9keT4gZWxlbWVudCwgdXNlIHRoZW1lLnN0eWxlcy5yb290LlxyXG4gICAgcm9vdDoge1xyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBmb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxyXG4gICAgICAvLyBNb2RhbCBHbG9iYWwgU3R5bGVcclxuICAgICAgJy5tb2RhbC12aWRlby1jbG9zZS1idG4nOiB7XHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgICcubW9kYWwtdmlkZW8tbW92aWUtd3JhcCc6IHtcclxuICAgICAgICBtYXJnaW46IDYsXHJcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAvLyBEaXZpZGVyIHN0eWxlc1xyXG4gICAgaHI6IHtcclxuICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxyXG4gICAgICBib3JkZXJDb2xvcjogJyNEOUUwRTcnLFxyXG4gICAgfSxcclxuICAgIC8vIGFsc28geW91IGNhbiB1c2Ugb3RoZXIgSFRNTCBlbGVtZW50cyBzdHlsZSBoZXJlXHJcbiAgICB1bDoge1xyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBzck9ubHk6IHtcclxuICAgICAgYm9yZGVyOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcFBhdGg6ICdpbnNldCg1MCUpICFpbXBvcnRhbnQnLFxyXG4gICAgICBoZWlnaHQ6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuICFpbXBvcnRhbnQnLFxyXG4gICAgICBwYWRkaW5nOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgd2lkdGg6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAgIWltcG9ydGFudCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=