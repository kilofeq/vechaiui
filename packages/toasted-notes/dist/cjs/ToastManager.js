"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _Message = require("./Message");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var defaultState = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
};
var ToastManager = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ToastManager, _React$Component);
  function ToastManager(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.state = defaultState;
    _this.notify = function (message, options) {
      var toast = _this.createToastState(message, options);
      var position = toast.position;

      // prepend the toast for toasts positioned at the top of
      // the screen, otherwise append it.
      var isTop = position.includes("top");
      _this.setState(function (prev) {
        var _extends2;
        return _extends({}, prev, (_extends2 = {}, _extends2[position] = isTop ? [toast].concat(prev[position]) : [].concat(prev[position], [toast]), _extends2));
      });
      return {
        id: toast.id,
        position: toast.position
      };
    };
    _this.closeAll = function () {
      Object.keys(_this.state).forEach(function (pos) {
        var p = pos;
        var position = _this.state[p];
        position.forEach(function (toast) {
          _this.closeToast(toast.id, p);
        });
      });
    };
    _this.createToastState = function (message, options) {
      var id = ++ToastManager.idCounter;

      // a bit messy, but object.position returns a number because
      // it's a method argument.
      var position = options.hasOwnProperty("position") && typeof options.position === "string" ? options.position : "top";
      return {
        id: id,
        message: message,
        position: position,
        showing: true,
        duration: typeof options.duration === "undefined" ? 5000 : options.duration,
        onRequestRemove: function onRequestRemove() {
          return _this.removeToast(String(id), position);
        },
        type: options.type
      };
    };
    _this.closeToast = function (id, position) {
      _this.setState(function (prev) {
        var _extends3;
        return _extends({}, prev, (_extends3 = {}, _extends3[position] = prev[position].map(function (toast) {
          if (toast.id !== id) return toast;
          return _extends({}, toast, {
            requestClose: true
          });
        }), _extends3));
      });
    };
    _this.removeToast = function (id, position) {
      _this.setState(function (prev) {
        var _extends4;
        return _extends({}, prev, (_extends4 = {}, _extends4[position] = prev[position].filter(function (toast) {
          return toast.id !== id;
        }), _extends4));
      });
    };
    _this.getStyle = function (position) {
      var style = {
        maxWidth: "560px",
        position: "fixed",
        zIndex: 5500,
        pointerEvents: "none"
      };
      if (position === "top" || position === "bottom") {
        style.margin = "0 auto";
        style.textAlign = "center";
      }
      if (position.includes("top")) {
        style.top = 0;
      }
      if (position.includes("bottom")) {
        style.bottom = 0;
      }
      if (!position.includes("left")) {
        style.right = 0;
      }
      if (!position.includes("right")) {
        style.left = 0;
      }
      return style;
    };
    props.notify(_this.notify, _this.closeAll, _this.closeToast);
    return _this;
  }
  var _proto = ToastManager.prototype;
  _proto.render = function render() {
    var _this2 = this;
    return Object.keys(this.state).map(function (position) {
      var pos = position;
      var toasts = _this2.state[pos];
      return /*#__PURE__*/React.createElement("span", {
        key: position,
        className: "Toaster__manager-" + pos,
        style: _this2.getStyle(pos)
      }, toasts.map(function (toast) {
        return /*#__PURE__*/React.createElement(_Message.Message, _extends({}, toast, {
          position: pos,
          key: toast.id
        }));
      }));
    });
  };
  return ToastManager;
}(React.Component);
exports["default"] = ToastManager;
ToastManager.idCounter = 0;
//# sourceMappingURL=ToastManager.js.map