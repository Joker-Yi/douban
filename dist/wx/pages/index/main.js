require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(8);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_17dc3823_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(12);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(9)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-17dc3823"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_17dc3823_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17dc3823", Component.options)
  } else {
    hotAPI.reload("data-v-17dc3823", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      // 影院热映
      onMovie: [],
      // 即将上映
      comminSoon: [],
      // top 250
      top250: []
    };
  },


  methods: {},

  created: function created() {
    var _this = this;

    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a',
      method: "GET",
      header: {
        'content-type': 'JSON'
      },
      success: function success(res) {
        // 解构：
        var data = res.data,
            statusCode = res.statusCode;
        // 判断响应状态

        if (statusCode === 200) {
          // 请求成功,将数据源进行保存
          _this.onMovie = data.subjects;
        } else {
          console.log('出错啦');
        }
      }
    });
    // 即将上映
    wx.request({
      url: 'https://api.douban.com/v2/movie/coming_soon?apikey=0df993c66c0c636e29ecbb5344252a4a',
      method: "GET",
      header: {
        'content-type': 'JSON'
      },
      success: function success(res) {
        // 解构：
        var data = res.data,
            statusCode = res.statusCode;
        // 判断响应状态

        if (statusCode === 200) {
          // 请求成功,将数据源进行保存
          _this.comminSoon = data.subjects;
        } else {
          console.log('出错啦');
        }
      }
    });
    // top250
    wx.request({
      url: 'https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a',
      method: "GET",
      header: {
        'content-type': 'JSON'
      },
      success: function success(res) {
        // 解构：
        var data = res.data,
            statusCode = res.statusCode;
        // 判断响应状态

        if (statusCode === 200) {
          // 请求成功,将数据源进行保存
          _this.top250 = data.subjects;
        } else {
          console.log('出错啦');
        }
      }
    });
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "h-left"
  }, [_c('h1', [_vm._v("豆瓣\n          "), _c('icon', {
    attrs: {
      "type": "search",
      "size": "18",
      "color": "#42bd56"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "h-right"
  }, [_c('button', {
    staticClass: "openApp"
  }, [_vm._v("打开豆瓣APP")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('h2', [_vm._v("影院热映")]), _vm._v(" "), _c('navigator', {
    staticClass: "more",
    attrs: {
      "url": "#"
    }
  }, [_vm._v("更多")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scroll"
  }, [_c('scroll-view', {
    staticClass: "scroll-wrap",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "scroll-x": ""
    }
  }, _vm._l((_vm.onMovie), function(item, index) {
    return _c('view', {
      key: index,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "movieImg"
    }, [_c('image', {
      attrs: {
        "src": item.images.small
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "msg"
    }, [_c('div', {
      staticClass: "moviename"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
      staticClass: "score"
    }, [_vm._v("评分:")])])])
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('h2', [_vm._v("即将上映")]), _vm._v(" "), _c('navigator', {
    staticClass: "more",
    attrs: {
      "url": "#"
    }
  }, [_vm._v("更多")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scroll"
  }, [_c('scroll-view', {
    staticClass: "scroll-wrap",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "scroll-x": ""
    }
  }, _vm._l((_vm.comminSoon), function(item, index) {
    return _c('view', {
      key: index,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "movieImg"
    }, [_c('image', {
      attrs: {
        "src": item.images.small
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "msg"
    }, [_c('div', {
      staticClass: "moviename"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
      staticClass: "score"
    }, [_vm._v("评分:")])])])
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('h2', [_vm._v("TOP250")]), _vm._v(" "), _c('navigator', {
    staticClass: "more",
    attrs: {
      "url": "#"
    }
  }, [_vm._v("更多")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scroll"
  }, [_c('scroll-view', {
    staticClass: "scroll-wrap",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "scroll-x": ""
    }
  }, _vm._l((_vm.top250), function(item, index) {
    return _c('view', {
      key: index,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "movieImg"
    }, [_c('image', {
      attrs: {
        "src": item.images.small
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "msg"
    }, [_c('div', {
      staticClass: "moviename"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
      staticClass: "score"
    }, [_vm._v("评分:")])])])
  }))], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-17dc3823", esExports)
  }
}

/***/ })
],[7]);