"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Product_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Product.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Product.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
var baseUrl = window.location.origin;
var csrf_token = document.getElementById("csrf-token").value;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      products: '',
      harga: '',
      nama: '',
      id: ''
    };
  },
  mounted: function mounted() {
    this.getProduct();
  },
  methods: {
    getProduct: function getProduct() {
      var _this = this;

      fetch(baseUrl + "/api/product/get").then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this.products = data;
      });
    },
    addProduct: function addProduct() {
      var _this2 = this;

      if (this.nama !== '' && this.harga !== '') {
        var requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            nama: this.nama,
            harga: this.harga,
            _token: csrf_token
          })
        };
        fetch(baseUrl + "/api/product/add", requestOptions).then(function (response) {
          return response.json();
        }).then(function (data) {
          return _this2.products.push(data);
        });
        this.clearProduct();
      }
    },
    deleteProduct: function deleteProduct(event) {
      var id = event.target.getAttribute('data-id');
      fetch(baseUrl + "/api/product/delete/" + id).then(function (response) {
        return response.json();
      });
      this.getProduct();
    },
    editProduct: function editProduct(event) {
      this.id = event.target.getAttribute('data-id');
      this.nama = event.target.getAttribute('data-nama');
      this.harga = event.target.getAttribute('data-harga');
    },
    clearProduct: function clearProduct() {
      this.nama = '';
      this.harga = '';
    },
    updateProduct: function updateProduct() {
      if (this.nama && this.harga && this.id) {
        var requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            nama: this.nama,
            harga: this.harga,
            _token: csrf_token
          })
        };
        fetch(baseUrl + "/api/product/edit/" + this.id, requestOptions).then(function (response) {
          return response.json();
        });
        this.getProduct();
        this.clearProduct();
        alert('update successfully');
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/Product.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/Product.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product_vue_vue_type_template_id_b8645414___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=b8645414& */ "./resources/js/pages/Product.vue?vue&type=template&id=b8645414&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/pages/Product.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_b8645414___WEBPACK_IMPORTED_MODULE_0__.render,
  _Product_vue_vue_type_template_id_b8645414___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Product.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Product.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/Product.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Product.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Product.vue?vue&type=template&id=b8645414&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Product.vue?vue&type=template&id=b8645414& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_b8645414___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_b8645414___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_b8645414___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=template&id=b8645414& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Product.vue?vue&type=template&id=b8645414&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Product.vue?vue&type=template&id=b8645414&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Product.vue?vue&type=template&id=b8645414& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row mt-5 shadow-lg p-3 mb-5 bg-body rounded" },
    [
      _c("div", { staticClass: "col-lg-12 mt-3 mb-3" }, [
        _c("h1", [_vm._v("INI PRODUCT")]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "name" } },
                [_vm._v("Name")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.nama,
                    expression: "nama",
                  },
                ],
                staticClass: "form-control",
                attrs: { type: "name", id: "name", placeholder: "Nama produk" },
                domProps: { value: _vm.nama },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.nama = $event.target.value
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                { staticClass: "form-label", attrs: { for: "price" } },
                [_vm._v("harga")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.harga,
                    expression: "harga",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  type: "price",
                  id: "price",
                  placeholder: "Harga produk",
                },
                domProps: { value: _vm.harga },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.harga = $event.target.value
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-info mb-3",
                attrs: { type: "button" },
                on: { click: _vm.addProduct },
              },
              [_vm._v("Add")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success mb-3",
                attrs: { type: "button" },
                on: { click: _vm.updateProduct },
              },
              [_vm._v("Update")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-light mb-3",
                attrs: { type: "button" },
                on: { click: _vm.clearProduct },
              },
              [_vm._v("Clear")]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("table", { staticClass: "table" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.products, function (product, ids) {
              return _c("tr", [
                _c("th", { attrs: { scope: "row" } }, [
                  _vm._v(_vm._s(ids + 1)),
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(product.nama))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(product.harga))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(product.created_at))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(product.updated_at))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary mb-3",
                      attrs: {
                        type: "button",
                        "data-id": product.id,
                        "data-nama": product.nama,
                        "data-harga": product.harga,
                      },
                      on: { click: _vm.editProduct },
                    },
                    [_vm._v("edit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger mb-3",
                      attrs: { type: "button", "data-id": product.id },
                      on: { click: _vm.deleteProduct },
                    },
                    [_vm._v("delete")]
                  ),
                ]),
              ])
            }),
            0
          ),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nama Product")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Harga Product")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Updated at")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Created at")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);