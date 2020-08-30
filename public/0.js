(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/Pages/Users/Index.svelte":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Users/Index.svelte ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './Shared/Icon.svelte'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './Shared/Layout.svelte'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './Shared/SearchFilter.svelte'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources/js/Pages/Users/Index.svelte generated by Svelte v3.24.1 */







function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
} // (19:4) <SearchFilter class="w-full max-w-md mr-4" bind:filters>


function create_default_slot_6(ctx) {
  var label0;
  var t1;
  var select0;
  var option0;
  var option0_value_value;
  var option1;
  var option2;
  var t4;
  var label1;
  var t6;
  var select1;
  var option3;
  var option3_value_value;
  var option4;
  var option5;
  var mounted;
  var dispose;
  return {
    c: function c() {
      label0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
      label0.textContent = "Role:";
      t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
      select0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("select");
      option0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
      option1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
      option1.textContent = "User";
      option2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
      option2.textContent = "Owner";
      t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
      label1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
      label1.textContent = "Trashed:";
      t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
      select1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("select");
      option3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
      option4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
      option4.textContent = "With Trashed";
      option5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
      option5.textContent = "Only Trashed";
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label0, "for", "role");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label0, "class", "block text-gray-700");
      option0.__value = option0_value_value = null;
      option0.value = option0.__value;
      option1.__value = "user";
      option1.value = option1.__value;
      option2.__value = "owner";
      option2.value = option2.__value;
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(select0, "id", "role");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(select0, "class", "mt-1 w-full form-select");
      if (
      /*filters*/
      ctx[1].role === void 0) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(function () {
        return (
          /*select0_change_handler*/
          ctx[2].call(select0)
        );
      });
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label1, "for", "trashed");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label1, "class", "mt-4 block text-gray-700");
      option3.__value = option3_value_value = null;
      option3.value = option3.__value;
      option4.__value = "with";
      option4.value = option4.__value;
      option5.__value = "only";
      option5.value = option5.__value;
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(select1, "id", "trashed");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(select1, "class", "mt-1 w-full form-select");
      if (
      /*filters*/
      ctx[1].trashed === void 0) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(function () {
        return (
          /*select1_change_handler*/
          ctx[3].call(select1)
        );
      });
    },
    m: function m(target, anchor) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, label0, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, select0, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(select0, option0);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(select0, option1);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(select0, option2);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select0,
      /*filters*/
      ctx[1].role);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t4, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, label1, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t6, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, select1, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(select1, option3);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(select1, option4);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(select1, option5);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select1,
      /*filters*/
      ctx[1].trashed);

      if (!mounted) {
        dispose = [Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(select0, "change",
        /*select0_change_handler*/
        ctx[2]), Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(select1, "change",
        /*select1_change_handler*/
        ctx[3])];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*filters*/
      2) {
        Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select0,
        /*filters*/
        ctx[1].role);
      }

      if (dirty &
      /*filters*/
      2) {
        Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select1,
        /*filters*/
        ctx[1].trashed);
      }
    },
    d: function d(detaching) {
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(label0);
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(select0);
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t4);
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(label1);
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t6);
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(select1);
      mounted = false;
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
    }
  };
} // (33:4) <InertiaLink class="btn-indigo" href={route('users.create')}>


function create_default_slot_5(ctx) {
  var span0;
  var t1;
  var span1;
  return {
    c: function c() {
      span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
      span0.textContent = "Create";
      t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
      span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
      span1.textContent = "User";
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "class", "hidden md:inline");
    },
    m: function m(target, anchor) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span0, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, span1, anchor);
    },
    d: function d(detaching) {
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span0);
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(span1);
    }
  };
} // (51:14) {#if user.photo}


function create_if_block_2(ctx) {
  var img;
  var img_src_value;
  return {
    c: function c() {
      img = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "class", "block w-5 h-5 rounded-full mr-2 -my-2");
      if (img.src !== (img_src_value =
      /*user*/
      ctx[6].photo)) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "src", img_src_value);
    },
    m: function m(target, anchor) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, img, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*users*/
      1 && img.src !== (img_src_value =
      /*user*/
      ctx[6].photo)) {
        Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "src", img_src_value);
      }
    },
    d: function d(detaching) {
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(img);
    }
  };
} // (55:14) {#if user.deleted_at}


function create_if_block_1(ctx) {
  var icon;
  var current;
  icon = new !(function webpackMissingModule() { var e = new Error("Cannot find module './Shared/Icon.svelte'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    props: {
      name: "trash",
      "class": "flex-shrink-0 w-3 h-3 fill-gray-400 ml-2"
    }
  });
  return {
    c: function c() {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(icon.$$.fragment);
    },
    m: function m(target, anchor) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(icon, target, anchor);
      current = true;
    },
    i: function i(local) {
      if (current) return;
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(icon.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(icon.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(icon, detaching);
    }
  };
} // (48:12) <InertiaLink               class="px-6 py-4 flex items-center focus:text-indigo-500"               href={route('users.edit', user.id)}>


function create_default_slot_4(ctx) {
  var t0;
  var t1_value =
  /*user*/
  ctx[6].name + "";
  var t1;
  var t2;
  var if_block1_anchor;
  var current;
  var if_block0 =
  /*user*/
  ctx[6].photo && create_if_block_2(ctx);
  var if_block1 =
  /*user*/
  ctx[6].deleted_at && create_if_block_1(ctx);
  return {
    c: function c() {
      if (if_block0) if_block0.c();
      t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
      t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t1_value);
      t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
      if (if_block1) if_block1.c();
      if_block1_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
    },
    m: function m(target, anchor) {
      if (if_block0) if_block0.m(target, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t2, anchor);
      if (if_block1) if_block1.m(target, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block1_anchor, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      if (
      /*user*/
      ctx[6].photo) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_2(ctx);
          if_block0.c();
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if ((!current || dirty &
      /*users*/
      1) && t1_value !== (t1_value =
      /*user*/
      ctx[6].name + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t1, t1_value);

      if (
      /*user*/
      ctx[6].deleted_at) {
        if (if_block1) {
          if (dirty &
          /*users*/
          1) {
            Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx);
          if_block1.c();
          Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
        Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
      }
    },
    i: function i(local) {
      if (current) return;
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block1);
      current = true;
    },
    o: function o(local) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block1);
      current = false;
    },
    d: function d(detaching) {
      if (if_block0) if_block0.d(detaching);
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t2);
      if (if_block1) if_block1.d(detaching);
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block1_anchor);
    }
  };
} // (61:12) <InertiaLink               class="px-6 py-4 flex items-center"               href={route('users.edit', user.id)}               tabindex="-1">


function create_default_slot_3(ctx) {
  var t_value =
  /*user*/
  ctx[6].email + "";
  var t;
  return {
    c: function c() {
      t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
    },
    m: function m(target, anchor) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*users*/
      1 && t_value !== (t_value =
      /*user*/
      ctx[6].email + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
    },
    d: function d(detaching) {
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t);
    }
  };
} // (69:12) <InertiaLink               class="px-6 py-4 flex items-center"               href={route('users.edit', user.id)}               tabindex="-1">


function create_default_slot_2(ctx) {
  var t_value = (
  /*user*/
  ctx[6].owner ? "Owner" : "User") + "";
  var t;
  return {
    c: function c() {
      t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
    },
    m: function m(target, anchor) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*users*/
      1 && t_value !== (t_value = (
      /*user*/
      ctx[6].owner ? "Owner" : "User") + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
    },
    d: function d(detaching) {
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t);
    }
  };
} // (77:12) <InertiaLink               class="px-4 flex items-center"               href={route('users.edit', user.id)}               tabindex="-1">


function create_default_slot_1(ctx) {
  var icon;
  var current;
  icon = new !(function webpackMissingModule() { var e = new Error("Cannot find module './Shared/Icon.svelte'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    props: {
      name: "cheveron-right",
      "class": "block w-6 h-6 fill-gray-400"
    }
  });
  return {
    c: function c() {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(icon.$$.fragment);
    },
    m: function m(target, anchor) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(icon, target, anchor);
      current = true;
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
    i: function i(local) {
      if (current) return;
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(icon.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(icon.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(icon, detaching);
    }
  };
} // (45:6) {#each users as user (user.id)}


function create_each_block(key_1, ctx) {
  var tr;
  var td0;
  var inertialink0;
  var t0;
  var td1;
  var inertialink1;
  var t1;
  var td2;
  var inertialink2;
  var t2;
  var td3;
  var inertialink3;
  var current;
  inertialink0 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"]({
    props: {
      "class": "px-6 py-4 flex items-center focus:text-indigo-500",
      href: !(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("users.edit",
      /*user*/
      ctx[6].id),
      $$slots: {
        "default": [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  inertialink1 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"]({
    props: {
      "class": "px-6 py-4 flex items-center",
      href: !(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("users.edit",
      /*user*/
      ctx[6].id),
      tabindex: "-1",
      $$slots: {
        "default": [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  inertialink2 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"]({
    props: {
      "class": "px-6 py-4 flex items-center",
      href: !(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("users.edit",
      /*user*/
      ctx[6].id),
      tabindex: "-1",
      $$slots: {
        "default": [create_default_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  inertialink3 = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"]({
    props: {
      "class": "px-4 flex items-center",
      href: !(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("users.edit",
      /*user*/
      ctx[6].id),
      tabindex: "-1",
      $$slots: {
        "default": [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    key: key_1,
    first: null,
    c: function c() {
      tr = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("tr");
      td0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("td");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(inertialink0.$$.fragment);
      t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
      td1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("td");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(inertialink1.$$.fragment);
      t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
      td2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("td");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(inertialink2.$$.fragment);
      t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
      td3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("td");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(inertialink3.$$.fragment);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td0, "class", "border-t");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td1, "class", "border-t");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td2, "class", "border-t");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(td3, "class", "border-t w-px");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(tr, "class", "hover:bg-gray-100 focus-within:bg-gray-100");
      this.first = tr;
    },
    m: function m(target, anchor) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, tr, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, td0);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(inertialink0, td0, null);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, t0);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, td1);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(inertialink1, td1, null);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, t1);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, td2);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(inertialink2, td2, null);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, t2);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(tr, td3);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(inertialink3, td3, null);
      current = true;
    },
    p: function p(ctx, dirty) {
      var inertialink0_changes = {};
      if (dirty &
      /*users*/
      1) inertialink0_changes.href = !(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("users.edit",
      /*user*/
      ctx[6].id);

      if (dirty &
      /*$$scope, users*/
      513) {
        inertialink0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      inertialink0.$set(inertialink0_changes);
      var inertialink1_changes = {};
      if (dirty &
      /*users*/
      1) inertialink1_changes.href = !(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("users.edit",
      /*user*/
      ctx[6].id);

      if (dirty &
      /*$$scope, users*/
      513) {
        inertialink1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      inertialink1.$set(inertialink1_changes);
      var inertialink2_changes = {};
      if (dirty &
      /*users*/
      1) inertialink2_changes.href = !(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("users.edit",
      /*user*/
      ctx[6].id);

      if (dirty &
      /*$$scope, users*/
      513) {
        inertialink2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      inertialink2.$set(inertialink2_changes);
      var inertialink3_changes = {};
      if (dirty &
      /*users*/
      1) inertialink3_changes.href = !(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("users.edit",
      /*user*/
      ctx[6].id);

      if (dirty &
      /*$$scope*/
      512) {
        inertialink3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      inertialink3.$set(inertialink3_changes);
    },
    i: function i(local) {
      if (current) return;
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(inertialink0.$$.fragment, local);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(inertialink1.$$.fragment, local);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(inertialink2.$$.fragment, local);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(inertialink3.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(inertialink0.$$.fragment, local);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(inertialink1.$$.fragment, local);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(inertialink2.$$.fragment, local);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(inertialink3.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(tr);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(inertialink0);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(inertialink1);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(inertialink2);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(inertialink3);
    }
  };
} // (87:6) {#if users.length === 0}


function create_if_block(ctx) {
  var tr;
  return {
    c: function c() {
      tr = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("tr");
      tr.innerHTML = "<td class=\"border-t px-6 py-4\" colspan=\"4\">No users found.</td>";
    },
    m: function m(target, anchor) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, tr, anchor);
    },
    d: function d(detaching) {
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(tr);
    }
  };
} // (16:0) <Layout title="Users">


function create_default_slot(ctx) {
  var h1;
  var t1;
  var div0;
  var searchfilter;
  var updating_filters;
  var t2;
  var inertialink;
  var t3;
  var div1;
  var table;
  var tr;
  var t9;
  var each_blocks = [];
  var each_1_lookup = new Map();
  var t10;
  var current;

  function searchfilter_filters_binding(value) {
    /*searchfilter_filters_binding*/
    ctx[4].call(null, value);
  }

  var searchfilter_props = {
    "class": "w-full max-w-md mr-4",
    $$slots: {
      "default": [create_default_slot_6]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*filters*/
  ctx[1] !== void 0) {
    searchfilter_props.filters =
    /*filters*/
    ctx[1];
  }

  searchfilter = new !(function webpackMissingModule() { var e = new Error("Cannot find module './Shared/SearchFilter.svelte'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    props: searchfilter_props
  });
  svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"].push(function () {
    return Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["bind"])(searchfilter, "filters", searchfilter_filters_binding);
  });
  inertialink = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"]({
    props: {
      "class": "btn-indigo",
      href: !(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("users.create"),
      $$slots: {
        "default": [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  var each_value =
  /*users*/
  ctx[0];

  var get_key = function get_key(ctx) {
    return (
      /*user*/
      ctx[6].id
    );
  };

  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  var if_block =
  /*users*/
  ctx[0].length === 0 && create_if_block(ctx);
  return {
    c: function c() {
      h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
      h1.textContent = "Users";
      t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
      div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(searchfilter.$$.fragment);
      t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(inertialink.$$.fragment);
      t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
      div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
      table = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("table");
      tr = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("tr");
      tr.innerHTML = "<th class=\"px-6 pt-6 pb-4\">Name</th> \n        <th class=\"px-6 pt-6 pb-4\">Email</th> \n        <th class=\"px-6 pt-6 pb-4\" colspan=\"2\">Role</th>";
      t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
      if (if_block) if_block.c();
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(h1, "class", "mb-8 font-bold text-3xl");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "mb-6 flex justify-between items-center");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(tr, "class", "text-left font-bold");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(table, "class", "w-full whitespace-no-wrap");
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "bg-white rounded shadow overflow-x-auto");
    },
    m: function m(target, anchor) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h1, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div0, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(searchfilter, div0, null);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t2);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(inertialink, div0, null);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t3, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div1, anchor);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, table);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(table, tr);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(table, t9);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(table, null);
      }

      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(table, t10);
      if (if_block) if_block.m(table, null);
      current = true;
    },
    p: function p(ctx, dirty) {
      var searchfilter_changes = {};

      if (dirty &
      /*$$scope, filters*/
      514) {
        searchfilter_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_filters && dirty &
      /*filters*/
      2) {
        updating_filters = true;
        searchfilter_changes.filters =
        /*filters*/
        ctx[1];
        Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_flush_callback"])(function () {
          return updating_filters = false;
        });
      }

      searchfilter.$set(searchfilter_changes);
      var inertialink_changes = {};

      if (dirty &
      /*$$scope*/
      512) {
        inertialink_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      inertialink.$set(inertialink_changes);

      if (dirty &
      /*route, users*/
      1) {
        var _each_value =
        /*users*/
        ctx[0];
        Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
        each_blocks = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["update_keyed_each"])(each_blocks, dirty, get_key, 1, ctx, _each_value, each_1_lookup, table, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["outro_and_destroy_block"], create_each_block, t10, get_each_context);
        Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
      }

      if (
      /*users*/
      ctx[0].length === 0) {
        if (if_block) {} else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(table, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: function i(local) {
      if (current) return;
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(searchfilter.$$.fragment, local);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(inertialink.$$.fragment, local);

      for (var _i3 = 0; _i3 < each_value.length; _i3 += 1) {
        Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[_i3]);
      }

      current = true;
    },
    o: function o(local) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(searchfilter.$$.fragment, local);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(inertialink.$$.fragment, local);

      for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
        Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(each_blocks[_i4]);
      }

      current = false;
    },
    d: function d(detaching) {
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h1);
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div0);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(searchfilter);
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(inertialink);
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t3);
      if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div1);

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        each_blocks[_i5].d();
      }

      if (if_block) if_block.d();
    }
  };
}

function create_fragment(ctx) {
  var layout;
  var current;
  layout = new !(function webpackMissingModule() { var e = new Error("Cannot find module './Shared/Layout.svelte'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    props: {
      title: "Users",
      $$slots: {
        "default": [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(layout.$$.fragment);
    },
    m: function m(target, anchor) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(layout, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var layout_changes = {};

      if (dirty &
      /*$$scope, users, filters*/
      515) {
        layout_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      layout.$set(layout_changes);
    },
    i: function i(local) {
      if (current) return;
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(layout.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(layout.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(layout, detaching);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var $page;
  Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["component_subscribe"])($$self, _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_1__["page"], function ($$value) {
    return $$invalidate(5, $page = $$value);
  });
  var _$$props$users = $$props.users,
      users = _$$props$users === void 0 ? [] : _$$props$users;
  var filters = {
    role: $page.filters.role,
    trashed: $page.filters.trashed
  };

  function select0_change_handler() {
    filters.role = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_value"])(this);
    $$invalidate(1, filters);
  }

  function select1_change_handler() {
    filters.trashed = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_value"])(this);
    $$invalidate(1, filters);
  }

  function searchfilter_filters_binding(value) {
    filters = value;
    $$invalidate(1, filters);
  }

  $$self.$$set = function ($$props) {
    if ("users" in $$props) $$invalidate(0, users = $$props.users);
  };

  return [users, filters, select0_change_handler, select1_change_handler, searchfilter_filters_binding];
}

var Index = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Index, _SvelteComponent);

  var _super = _createSuper(Index);

  function Index(options) {
    var _this;

    _classCallCheck(this, Index);

    _this = _super.call(this);
    Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {
      users: 0
    });
    return _this;
  }

  return Index;
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

}]);