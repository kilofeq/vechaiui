"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Alert = function Alert(_ref) {
  var id = _ref.id,
    title = _ref.title,
    onClose = _ref.onClose;
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: "Toaster__alert"
  }, typeof title === "string" ? /*#__PURE__*/React.createElement("div", {
    className: "Toaster__alert_text"
  }, title) : title, onClose && /*#__PURE__*/React.createElement(Close, {
    onClose: onClose
  }));
};
var Close = function Close(_ref2) {
  var onClose = _ref2.onClose;
  return /*#__PURE__*/React.createElement("button", {
    className: "Toaster__alert_close",
    type: "button",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"));
};
var _default = Alert;
exports["default"] = _default;
//# sourceMappingURL=Alert.js.map