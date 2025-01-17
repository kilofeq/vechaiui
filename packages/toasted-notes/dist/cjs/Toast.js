"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _client = require("react-dom/client");
var React = _interopRequireWildcard(require("react"));
var _ToastManager = _interopRequireDefault(require("./ToastManager"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
var PORTAL_ID = "react-toast";
var Toaster = function Toaster() {
  var _this = this;
  this.createNotification = void 0;
  this.removeAll = void 0;
  this.closeToast = void 0;
  this.closeAll = function () {
    if (_this.removeAll) {
      _this.removeAll();
    }
  };
  this.bindNotify = function (fn, removeAll, closeToast) {
    _this.createNotification = fn;
    _this.removeAll = removeAll;
    _this.closeToast = closeToast;
  };
  this.notify = function (message, options) {
    if (options === void 0) {
      options = {};
    }
    if (_this.createNotification) {
      return _this.createNotification(message, options);
    }
  };
  this.close = function (id, position) {
    if (_this.closeToast) {
      _this.closeToast(id, position);
    }
  };
  if (!isBrowser) {
    return;
  }
  var portalElement;
  var existingPortalElement = document.getElementById(PORTAL_ID);
  if (existingPortalElement) {
    portalElement = existingPortalElement;
  } else {
    var el = document.createElement("div");
    el.id = PORTAL_ID;
    el.className = "Toaster";
    if (document.body != null) {
      document.body.appendChild(el);
    }
    portalElement = el;
  }
  var root = (0, _client.createRoot)(portalElement);
  root.render( /*#__PURE__*/React.createElement(_ToastManager["default"], {
    notify: this.bindNotify
  }));
};
var _default = Toaster;
exports["default"] = _default;
//# sourceMappingURL=Toast.js.map