(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", , "CorePluginsAdmin"], factory);
	else if(typeof exports === 'object')
		exports["SitesManager"] = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else
		root["SitesManager"] = factory(root["CoreHome"], root["Vue"], root["CorePluginsAdmin"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__19dc__, __WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_a5a2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "plugins/SitesManager/vue/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "19dc":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19dc__;

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "a5a2":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a5a2__;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SiteTypesStore", function() { return /* reexport */ src_SiteTypesStore_SiteTypesStore; });
__webpack_require__.d(__webpack_exports__, "SiteFields", function() { return /* reexport */ SiteFields; });
__webpack_require__.d(__webpack_exports__, "CurrencyStore", function() { return /* reexport */ src_CurrencyStore_CurrencyStore; });
__webpack_require__.d(__webpack_exports__, "TimezoneStore", function() { return /* reexport */ src_TimezoneStore_TimezoneStore; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./plugins/SitesManager/vue/src/SiteTypesStore/SiteTypesStore.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */


var _window = window,
    $ = _window.$;

var SiteTypesStore_SiteTypesStore = /*#__PURE__*/function () {
  function SiteTypesStore() {
    var _this = this;

    _classCallCheck(this, SiteTypesStore);

    _defineProperty(this, "state", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
      typesById: {}
    }));

    _defineProperty(this, "typesById", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["readonly"])(_this.state).typesById;
    }));

    _defineProperty(this, "types", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return Object.values(_this.typesById.value);
    }));

    _defineProperty(this, "response", void 0);

    this.fetchAvailableTypes();
  }

  _createClass(SiteTypesStore, [{
    key: "fetchAvailableTypes",
    value: function fetchAvailableTypes() {
      var _this2 = this;

      if (this.response) {
        return Promise.resolve(this.response);
      }

      this.response = external_CoreHome_["AjaxHelper"].fetch({
        method: 'API.getAvailableMeasurableTypes',
        filter_limit: '-1'
      }).then(function (types) {
        types.forEach(function (type) {
          _this2.state.typesById[type.id] = type;
        });
        return _this2.types.value;
      });
      return this.response;
    }
  }, {
    key: "getEditSiteIdParameter",
    value: function getEditSiteIdParameter() {
      var editsiteid = external_CoreHome_["MatomoUrl"].hashParsed.value.editsiteid;

      if (editsiteid && $.isNumeric(editsiteid)) {
        return editsiteid;
      }

      return undefined;
    }
  }, {
    key: "removeEditSiteIdParameterFromHash",
    value: function removeEditSiteIdParameterFromHash() {
      var params = Object.assign({}, external_CoreHome_["MatomoUrl"].hashParsed.value);
      delete params.editsiteid;
      external_CoreHome_["MatomoUrl"].updateHash(params);
    }
  }]);

  return SiteTypesStore;
}();

/* harmony default export */ var src_SiteTypesStore_SiteTypesStore = (Object(external_CoreHome_["lazyInitSingleton"])(SiteTypesStore_SiteTypesStore));
// CONCATENATED MODULE: ./plugins/SitesManager/vue/src/SiteTypesStore/SiteTypesStore.adapter.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */



function sitesManagerTypeModelAdapter() {
  return {
    get typesById() {
      return Object(external_CoreHome_["clone"])(src_SiteTypesStore_SiteTypesStore.typesById.value);
    },

    fetchTypeById: function fetchTypeById(typeId) {
      var _this = this;

      return src_SiteTypesStore_SiteTypesStore.fetchAvailableTypes().then(function () {
        return Object(external_CoreHome_["cloneThenApply"])(_this.typesById[typeId]);
      });
    },
    fetchAvailableTypes: function fetchAvailableTypes() {
      return src_SiteTypesStore_SiteTypesStore.fetchAvailableTypes().then(function (types) {
        return Object(external_CoreHome_["cloneThenApply"])(types);
      });
    },
    hasMultipleTypes: function hasMultipleTypes() {
      return src_SiteTypesStore_SiteTypesStore.fetchAvailableTypes().then(function (types) {
        return types && Object.keys(types).length > 1;
      });
    },
    removeEditSiteIdParameterFromHash: src_SiteTypesStore_SiteTypesStore.removeEditSiteIdParameterFromHash.bind(src_SiteTypesStore_SiteTypesStore),
    getEditSiteIdParameter: src_SiteTypesStore_SiteTypesStore.getEditSiteIdParameter.bind(src_SiteTypesStore_SiteTypesStore)
  };
}

window.angular.module('piwikApp.service').factory('sitesManagerTypeModel', sitesManagerTypeModelAdapter);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/SitesManager/vue/src/SiteFields/SiteFields.vue?vue&type=template&id=0cf86fbc

var _hoisted_1 = ["idsite", "type"];
var _hoisted_2 = {
  class: "card-content"
};
var _hoisted_3 = {
  key: 0,
  class: "row"
};
var _hoisted_4 = {
  class: "col m3"
};
var _hoisted_5 = {
  class: "title"
};
var _hoisted_6 = {
  class: "title"
};
var _hoisted_7 = ["target", "title", "href"];
var _hoisted_8 = {
  class: "col m4"
};
var _hoisted_9 = {
  class: "title"
};
var _hoisted_10 = {
  class: "title"
};
var _hoisted_11 = {
  class: "title"
};
var _hoisted_12 = {
  class: "title"
};
var _hoisted_13 = {
  class: "col m4"
};
var _hoisted_14 = {
  class: "title"
};

var _hoisted_15 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(": ");

var _hoisted_16 = ["href"];
var _hoisted_17 = {
  key: 0
};
var _hoisted_18 = {
  class: "title"
};
var _hoisted_19 = {
  key: 1
};
var _hoisted_20 = {
  class: "title"
};
var _hoisted_21 = {
  key: 2
};
var _hoisted_22 = {
  class: "title"
};
var _hoisted_23 = {
  class: "col m1 text-right"
};
var _hoisted_24 = ["title"];

var _hoisted_25 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-edit"
}, null, -1);

var _hoisted_26 = [_hoisted_25];
var _hoisted_27 = ["title"];

var _hoisted_28 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-delete"
}, null, -1);

var _hoisted_29 = [_hoisted_28];
var _hoisted_30 = {
  key: 1
};
var _hoisted_31 = {
  class: "form-group row"
};
var _hoisted_32 = {
  class: "col s12 m6 input-field"
};
var _hoisted_33 = ["placeholder"];

var _hoisted_34 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "col s12 m6"
}, null, -1);

var _hoisted_35 = {
  id: "timezoneHelpText",
  class: "inline-help-node"
};
var _hoisted_36 = {
  key: 0
};

var _hoisted_37 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var _hoisted_38 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var _hoisted_39 = {
  class: "editingSiteFooter"
};
var _hoisted_40 = ["value"];
var _hoisted_41 = {
  class: "ui-confirm"
};
var _hoisted_42 = ["value"];
var _hoisted_43 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$theSite$excluded,
      _ctx$theSite$excluded2,
      _ctx$theSite$excluded3,
      _this = this;

  var _component_ActivityIndicator = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ActivityIndicator");

  var _component_GroupedSettings = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("GroupedSettings");

  var _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");

  var _component_MatomoDialog = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("MatomoDialog");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["site card hoverable", {
      'editingSite': !!_ctx.editMode
    }]),
    idsite: _ctx.theSite.idsite,
    type: _ctx.theSite.type
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [!_ctx.editMode ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h4", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.theSite.name), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Id')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.theSite.idsite), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('SitesManager_Type')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.currentType.name), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.availableTypes.length > 1]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    target: _ctx.isInternalSetupUrl ? '_self' : '_blank',
    title: _ctx.translate('SitesManager_ShowTrackingTag'),
    href: _ctx.setupUrl
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('SitesManager_ShowTrackingTag')), 9, _hoisted_7)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.theSite.idsite && _ctx.howToSetupUrl]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('SitesManager_Timezone')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.theSite.timezone_name), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('SitesManager_Currency')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.theSite.currency_name), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Goals_Ecommerce')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Yes')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.theSite.ecommerce === 1 || _ctx.theSite.ecommerce === '1']]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_12, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Actions_SubmenuSitesearch')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Yes')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.theSite.sitesearch === 1 || _ctx.theSite.sitesearch === '1']])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_13, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_14, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('SitesManager_Urls')), 1), _hoisted_15, (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.theSite.alias_urls, function (url, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
      key: url
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
      target: "_blank",
      rel: "noreferrer noopener",
      href: url
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(url) + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(index === _ctx.theSite.alias_urls.length - 1 ? '' : ', '), 9, _hoisted_16)]);
  }), 128))]), (_ctx$theSite$excluded = _ctx.theSite.excluded_ips) !== null && _ctx$theSite$excluded !== void 0 && _ctx$theSite$excluded.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", _hoisted_17, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('SitesManager_ExcludedIps')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.theSite.excluded_ips.split(/\s*,\s*/g).join(', ')), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_ctx$theSite$excluded2 = _ctx.theSite.excluded_parameters) !== null && _ctx$theSite$excluded2 !== void 0 && _ctx$theSite$excluded2.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", _hoisted_19, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_20, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('SitesManager_ExcludedParameters')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.theSite.excluded_parameters.split(/\s*,\s*/g).join(', ')), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_ctx$theSite$excluded3 = _ctx.theSite.excluded_user_agents) !== null && _ctx$theSite$excluded3 !== void 0 && _ctx$theSite$excluded3.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", _hoisted_21, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_22, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('SitesManager_ExcludedUserAgents')) + ":", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.theSite.excluded_user_agents.split(/\s*,\s*/g).join(', ')), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_23, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
    class: "table-action",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.editSite();
    }),
    title: _ctx.translate('General_Edit')
  }, _hoisted_26, 8, _hoisted_24)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
    class: "table-action",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _this.showRemoveDialog = true;
    }),
    title: _ctx.translate('General_Delete')
  }, _hoisted_29, 8, _hoisted_27), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.theSite.idsite]])])])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.editMode ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_30, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_31, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_32, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.theSite.name = $event;
    }),
    maxlength: "90",
    placeholder: _ctx.translate('General_Name')
  }, null, 8, _hoisted_33), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.theSite.name]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')), 1)]), _hoisted_34]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ActivityIndicator, {
    loading: _ctx.isLoading
  }, null, 8, ["loading"]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.measurableSettings, function (settingsPerPlugin) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      key: settingsPerPlugin.pluginName
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_GroupedSettings, {
      "group-name": settingsPerPlugin.pluginName,
      settings: settingsPerPlugin.settings,
      "all-setting-values": _ctx.settingValues,
      onChange: function onChange($event) {
        return _ctx.settingValues["".concat(settingsPerPlugin.pluginName, ".").concat($event.name)] = $event.value;
      }
    }, null, 8, ["group-name", "settings", "all-setting-values", "onChange"])]);
  }), 128)), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "select",
    name: "currency",
    modelValue: _ctx.theSite.currency,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.theSite.currency = $event;
    }),
    title: _ctx.translate('SitesManager_Currency'),
    "inline-help": _ctx.translate('SitesManager_CurrencySymbolWillBeUsedForGoals'),
    options: _ctx.currencies
  }, null, 8, ["modelValue", "title", "inline-help", "options"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
    uicontrol: "select",
    name: "timezone",
    modelValue: _ctx.theSite.timezone,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return _ctx.theSite.timezone = $event;
    }),
    title: _ctx.translate('SitesManager_Timezone'),
    "inline-help": '#timezoneHelpText',
    options: _ctx.timezones
  }, null, 8, ["modelValue", "title", "options"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_35, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [!_ctx.timezoneSupportEnabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_36, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('SitesManager_AdvancedTimezoneSupportNotFound')) + " ", 1), _hoisted_37])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.utcTimeIs) + " ", 1), _hoisted_38, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('SitesManager_ChangingYourTimezoneWillOnlyAffectDataForward')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_39, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "submit",
    class: "btn",
    value: _ctx.translate('General_Save'),
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return _ctx.saveSite();
    })
  }, null, 8, _hoisted_40), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.isLoading]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
    class: "btn btn-link",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return _ctx.cancelEditSite(_ctx.site);
    })
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Cancel', '', '')), 1)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_MatomoDialog, {
    modelValue: _ctx.showRemoveDialog,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return _ctx.showRemoveDialog = $event;
    }),
    onYes: _cache[8] || (_cache[8] = function ($event) {
      return _ctx.deleteSite();
    })
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_41, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.removeDialogTitle), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('SitesManager_DeleteSiteExplanation')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        type: "button",
        value: _ctx.translate('General_Yes'),
        role: "yes"
      }, null, 8, _hoisted_42), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        type: "button",
        value: _ctx.translate('General_No'),
        role: "no"
      }, null, 8, _hoisted_43)])];
    }),
    _: 1
  }, 8, ["modelValue"])], 10, _hoisted_1);
}
// CONCATENATED MODULE: ./plugins/SitesManager/vue/src/SiteFields/SiteFields.vue?vue&type=template&id=0cf86fbc

// EXTERNAL MODULE: external "CorePluginsAdmin"
var external_CorePluginsAdmin_ = __webpack_require__("a5a2");

// CONCATENATED MODULE: ./plugins/SitesManager/vue/src/TimezoneStore/TimezoneStore.ts
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function TimezoneStore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TimezoneStore_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TimezoneStore_createClass(Constructor, protoProps, staticProps) { if (protoProps) TimezoneStore_defineProperties(Constructor.prototype, protoProps); if (staticProps) TimezoneStore_defineProperties(Constructor, staticProps); return Constructor; }

function TimezoneStore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */



var TimezoneStore_TimezoneStore = /*#__PURE__*/function () {
  function TimezoneStore() {
    var _this = this;

    TimezoneStore_classCallCheck(this, TimezoneStore);

    TimezoneStore_defineProperty(this, "privateState", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
      timezones: []
    }));

    TimezoneStore_defineProperty(this, "timezones", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["readonly"])(_this.privateState).timezones;
    }));

    this.fetchTimezones();
  }

  TimezoneStore_createClass(TimezoneStore, [{
    key: "fetchTimezones",
    value: function fetchTimezones() {
      var _this2 = this;

      external_CoreHome_["AjaxHelper"].fetch({
        method: 'SitesManager.getTimezonesList'
      }).then(function (grouped) {
        var flattened = [];
        Object.entries(grouped).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              group = _ref2[0],
              timezonesGroup = _ref2[1];

          Object.entries(timezonesGroup).forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                label = _ref4[0],
                code = _ref4[1];

            flattened.push({
              group: group,
              label: label,
              code: code
            });
          });
        });
        _this2.privateState.timezones = flattened;
      });
    }
  }]);

  return TimezoneStore;
}();

/* harmony default export */ var src_TimezoneStore_TimezoneStore = (Object(external_CoreHome_["lazyInitSingleton"])(TimezoneStore_TimezoneStore));
// CONCATENATED MODULE: ./plugins/SitesManager/vue/src/CurrencyStore/CurrencyStore.ts
function CurrencyStore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CurrencyStore_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CurrencyStore_createClass(Constructor, protoProps, staticProps) { if (protoProps) CurrencyStore_defineProperties(Constructor.prototype, protoProps); if (staticProps) CurrencyStore_defineProperties(Constructor, staticProps); return Constructor; }

function CurrencyStore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */



var CurrencyStore_CurrencyStore = /*#__PURE__*/function () {
  function CurrencyStore() {
    var _this = this;

    CurrencyStore_classCallCheck(this, CurrencyStore);

    CurrencyStore_defineProperty(this, "privateState", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
      currencies: {}
    }));

    CurrencyStore_defineProperty(this, "currencies", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["readonly"])(_this.privateState).currencies;
    }));

    this.fetchCurrencies();
  }

  CurrencyStore_createClass(CurrencyStore, [{
    key: "fetchCurrencies",
    value: function fetchCurrencies() {
      var _this2 = this;

      external_CoreHome_["AjaxHelper"].fetch({
        method: 'SitesManager.getCurrencyList'
      }).then(function (currencies) {
        _this2.privateState.currencies = currencies;
      });
    }
  }]);

  return CurrencyStore;
}();

/* harmony default export */ var src_CurrencyStore_CurrencyStore = (Object(external_CoreHome_["lazyInitSingleton"])(CurrencyStore_CurrencyStore));
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/SitesManager/vue/src/SiteFields/SiteFields.vue?vue&type=script&lang=ts
function SiteFieldsvue_type_script_lang_ts_slicedToArray(arr, i) { return SiteFieldsvue_type_script_lang_ts_arrayWithHoles(arr) || SiteFieldsvue_type_script_lang_ts_iterableToArrayLimit(arr, i) || SiteFieldsvue_type_script_lang_ts_unsupportedIterableToArray(arr, i) || SiteFieldsvue_type_script_lang_ts_nonIterableRest(); }

function SiteFieldsvue_type_script_lang_ts_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SiteFieldsvue_type_script_lang_ts_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SiteFieldsvue_type_script_lang_ts_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SiteFieldsvue_type_script_lang_ts_arrayLikeToArray(o, minLen); }

function SiteFieldsvue_type_script_lang_ts_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SiteFieldsvue_type_script_lang_ts_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SiteFieldsvue_type_script_lang_ts_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var timezoneOptions = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
  return src_TimezoneStore_TimezoneStore.timezones.value.map(function (_ref) {
    var group = _ref.group,
        label = _ref.label,
        code = _ref.code;
    return {
      group: group,
      key: label,
      value: code
    };
  });
});

function isSiteNew(site) {
  return typeof site.idsite === 'undefined';
}

/* harmony default export */ var SiteFieldsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    site: {
      type: Object,
      required: true
    },
    timezoneSupportEnabled: {
      type: Boolean
    },
    utcTime: {
      type: Date,
      required: true
    },
    globalSettings: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      isLoading: false,
      editMode: false,
      theSite: Object.assign({}, this.site),
      measurableSettings: [],
      settingValues: {},
      showRemoveDialog: false
    };
  },
  components: {
    MatomoDialog: external_CoreHome_["MatomoDialog"],
    Field: external_CorePluginsAdmin_["Field"],
    GroupedSettings: external_CorePluginsAdmin_["GroupedSettings"],
    ActivityIndicator: external_CoreHome_["ActivityIndicator"]
  },
  emits: ['delete', 'cancelEditSite', 'save'],
  created: function created() {
    this.onSiteChanged();
  },
  watch: {
    site: function site() {
      this.onSiteChanged();
    },
    measurableSettings: function measurableSettings(settings) {
      if (!settings.length) {
        return;
      }

      var settingValues = {};
      settings.forEach(function (settingsForPlugin) {
        settingsForPlugin.settings.forEach(function (setting) {
          settingValues["".concat(settingsForPlugin.pluginName, ".").concat(setting.name)] = setting.value;
        });
      });
      this.settingValues = settingValues;
    }
  },
  methods: {
    onSiteChanged: function onSiteChanged() {
      var site = this.site;
      this.theSite = Object.assign({}, site);
      var isNew = isSiteNew(site);

      if (isNew) {
        var globalSettings = this.globalSettings;
        this.theSite.timezone = globalSettings.defaultTimezone;
        this.theSite.currency = globalSettings.defaultCurrency;
      }

      var forcedEditSiteId = src_SiteTypesStore_SiteTypesStore.getEditSiteIdParameter();

      if (isNew || forcedEditSiteId && "".concat(site.idsite) === forcedEditSiteId) {
        this.editSite();
      }
    },
    editSite: function editSite() {
      var _this = this;

      this.editMode = true;
      this.measurableSettings = [];

      if (isSiteNew(this.theSite)) {
        if (!this.currentType) {
          return;
        }

        this.measurableSettings = this.currentType.settings || [];
        return;
      }

      this.isLoading = true;
      external_CoreHome_["AjaxHelper"].fetch({
        method: 'SitesManager.getSiteSettings',
        idSite: this.theSite.idsite
      }).then(function (settings) {
        _this.measurableSettings = settings;
      }).finally(function () {
        _this.isLoading = false;
      });
    },
    saveSite: function saveSite() {
      var _this2 = this;

      var values = {
        siteName: this.theSite.name,
        timezone: this.theSite.timezone,
        currency: this.theSite.currency,
        type: this.theSite.type,
        settingValues: {}
      };
      var isNew = isSiteNew(this.theSite);
      var apiMethod = 'SitesManager.addSite';

      if (!isNew) {
        apiMethod = 'SitesManager.updateSite';
        values.idSite = this.theSite.idsite;
      } // process measurable settings


      Object.entries(this.settingValues).forEach(function (_ref2) {
        var _ref3 = SiteFieldsvue_type_script_lang_ts_slicedToArray(_ref2, 2),
            fullName = _ref3[0],
            fieldValue = _ref3[1];

        var _fullName$split = fullName.split('.'),
            _fullName$split2 = SiteFieldsvue_type_script_lang_ts_slicedToArray(_fullName$split, 2),
            pluginName = _fullName$split2[0],
            name = _fullName$split2[1];

        var settingValues = values.settingValues;

        if (!settingValues[pluginName]) {
          settingValues[pluginName] = [];
        }

        var value = fieldValue;

        if (fieldValue === false) {
          value = '0';
        } else if (fieldValue === true) {
          value = '1';
        } else if (Array.isArray(fieldValue)) {
          value = fieldValue.filter(function (x) {
            return !!x;
          });
        }

        settingValues[pluginName].push({
          name: name,
          value: value
        });
      });
      external_CoreHome_["AjaxHelper"].post({
        method: apiMethod
      }, values).then(function (response) {
        _this2.editMode = false;

        if (!_this2.theSite.idsite && response && response.value) {
          _this2.theSite.idsite = response.value;
        }

        var notificationId = external_CoreHome_["NotificationsStore"].show({
          message: isNew ? Object(external_CoreHome_["translate"])('SitesManager_WebsiteCreated') : Object(external_CoreHome_["translate"])('SitesManager_WebsiteUpdated'),
          context: 'success',
          id: 'websitecreated',
          type: 'transient'
        });
        external_CoreHome_["NotificationsStore"].scrollToNotification(notificationId);
        src_SiteTypesStore_SiteTypesStore.removeEditSiteIdParameterFromHash();

        _this2.$emit('save', {
          site: _this2.theSite,
          settingValues: values.settingValues
        });
      });
    },
    cancelEditSite: function cancelEditSite(site) {
      this.editMode = false;
      src_SiteTypesStore_SiteTypesStore.removeEditSiteIdParameterFromHash();
      this.$emit('cancelEditSite', site);
    },
    deleteSite: function deleteSite() {
      var _this3 = this;

      external_CoreHome_["AjaxHelper"].fetch({
        idSite: this.theSite.idsite,
        module: 'API',
        format: 'json',
        method: 'SitesManager.deleteSite'
      }).then(function () {
        _this3.$emit('delete', _this3.theSite);
      });
    }
  },
  computed: {
    availableTypes: function availableTypes() {
      return src_SiteTypesStore_SiteTypesStore.types.value;
    },
    setupUrl: function setupUrl() {
      var site = this.theSite;
      var suffix = '';
      var connector = '';

      if (this.isInternalSetupUrl) {
        suffix = external_CoreHome_["MatomoUrl"].stringify({
          idSite: site.idsite,
          period: external_CoreHome_["MatomoUrl"].parsed.value.period,
          date: external_CoreHome_["MatomoUrl"].parsed.value.date,
          updated: 'false'
        });
        connector = this.howToSetupUrl.indexOf('?') === -1 ? '?' : '&';
      }

      return "".concat(this.howToSetupUrl).concat(connector).concat(suffix);
    },
    utcTimeIs: function utcTimeIs() {
      var utcTime = this.utcTime;

      var formatTimePart = function formatTimePart(n) {
        return n.toString().padStart(2, '0');
      };

      var hours = formatTimePart(utcTime.getHours());
      var minutes = formatTimePart(utcTime.getMinutes());
      var seconds = formatTimePart(utcTime.getSeconds());
      var date = "".concat(Object(external_CoreHome_["format"])(this.utcTime), " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
      return Object(external_CoreHome_["translate"])('SitesManager_UTCTimeIs', date);
    },
    timezones: function timezones() {
      return timezoneOptions.value;
    },
    currencies: function currencies() {
      return src_CurrencyStore_CurrencyStore.currencies.value;
    },
    currentType: function currentType() {
      var site = this.site;
      var type = src_SiteTypesStore_SiteTypesStore.typesById.value[site.type];

      if (!type) {
        return {
          name: site.type
        };
      }

      return type;
    },
    howToSetupUrl: function howToSetupUrl() {
      var type = this.currentType;

      if (!type) {
        return undefined;
      }

      return type.howToSetupUrl;
    },
    isInternalSetupUrl: function isInternalSetupUrl() {
      var howToSetupUrl = this.howToSetupUrl;

      if (!howToSetupUrl) {
        return false;
      }

      return "".concat(howToSetupUrl).substring(0, 1) === '?';
    },
    removeDialogTitle: function removeDialogTitle() {
      return Object(external_CoreHome_["translate"])('SitesManager_DeleteConfirm', "\"".concat(this.theSite.name, "\" (idSite = ").concat(this.theSite.idsite, ")"));
    }
  }
}));
// CONCATENATED MODULE: ./plugins/SitesManager/vue/src/SiteFields/SiteFields.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/SitesManager/vue/src/SiteFields/SiteFields.vue



SiteFieldsvue_type_script_lang_ts.render = render

/* harmony default export */ var SiteFields = (SiteFieldsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/SitesManager/vue/src/SiteFields/SiteFields.adapter.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */


/* harmony default export */ var SiteFields_adapter = (Object(external_CoreHome_["createAngularJsAdapter"])({
  component: SiteFields,
  scope: {
    site: {
      angularJsBind: '<'
    },
    timezoneSupportEnabled: {
      angularJsBind: '<'
    },
    utcTime: {
      angularJsBind: '<'
    },
    globalSettings: {
      angularJsBind: '<'
    }
  },
  directiveName: 'matomoSiteFields',
  $inject: ['$timeout'],
  events: {
    cancelEditSite: function cancelEditSite(site, vm, scope) {
      scope.$parent.cancelEditSite(site);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete: function _delete(site, vm, scope) {
      var redirectParams = scope.redirectParams; // if the current idSite in the URL is the site we're deleting, then we have to make to
      // change it. otherwise, if a user goes to another page, the invalid idSite may cause
      // a fatal error.

      if (external_CoreHome_["MatomoUrl"].urlParsed.value.idSite === site.idsite) {
        var sites = scope.adminSites.sites;
        var otherSite = sites.find(function (s) {
          return s.idsite !== site.idsite;
        });

        if (otherSite) {
          redirectParams = Object.assign(Object.assign({}, redirectParams), {}, {
            idSite: otherSite.idsite
          });
        }
      }

      external_CoreHome_["MatomoUrl"].updateUrl(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].urlParsed.value), {}, {
        redirectParams: redirectParams
      }), external_CoreHome_["MatomoUrl"].hashParsed.value);
    },
    save: function save(_ref, vm, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    scope, element, attrs, controller, $timeout) {
      var site = _ref.site,
          settingValues = _ref.settingValues;
      var texttareaArrayParams = ['excluded_ips', 'excluded_parameters', 'excluded_user_agents', 'sitesearch_keyword_parameters', 'sitesearch_category_parameters'];
      var newSite = Object.assign({}, site);
      Object.values(settingValues).forEach(function (settings) {
        settings.forEach(function (setting) {
          if (setting.name === 'urls') {
            newSite.alias_urls = setting.value;
          } else if (texttareaArrayParams.indexOf(setting.name) !== -1) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            newSite[setting.name] = setting.value.join(', ');
          } else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            newSite[setting.name] = setting.value;
          }
        });
      });
      window.$.extend(scope.site, newSite);
      $timeout();
      vm.site = newSite;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/SitesManager/vue/src/index.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */






// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=SitesManager.umd.js.map