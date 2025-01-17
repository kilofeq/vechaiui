"use strict";

exports.__esModule = true;
exports.InputRightAddon = exports.InputLeftAddon = void 0;
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _excluded = ["placement", "size", "className"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var _placement = {
  left: "form-input-addon-left",
  right: "form-input-addon-right"
};
var sizes = {
  xs: "form-input-addon-xs",
  sm: "form-input-addon-sm",
  md: "form-input-addon-md",
  lg: "form-input-addon-lg",
  xl: "form-input-addon-xl"
};
var InputAddon = function InputAddon(_ref) {
  var _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? "left" : _ref$placement,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var classes = (0, _utils.cx)("form-input-addon", sizes[size], _placement[placement], className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, props));
};
if (_utils.__DEV__) {
  InputAddon.displayName = "InputAddon";
}
var InputLeftAddon = function InputLeftAddon(props) {
  return /*#__PURE__*/React.createElement(InputAddon, _extends({
    placement: "left"
  }, props));
};
exports.InputLeftAddon = InputLeftAddon;
if (_utils.__DEV__) {
  InputLeftAddon.displayName = "InputLeftAddon";
}
var InputRightAddon = function InputRightAddon(props) {
  return /*#__PURE__*/React.createElement(InputAddon, _extends({
    placement: "right"
  }, props));
};
exports.InputRightAddon = InputRightAddon;
if (_utils.__DEV__) {
  InputRightAddon.displayName = "InputRightAddon";
}
//# sourceMappingURL=index.js.map