"use strict";

exports.__esModule = true;
exports.InputRightElement = exports.InputLeftElement = void 0;
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _excluded = ["size", "children", "placement", "disabledPointerEvents", "className"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var inputSizes = {
  xl: "form-input-element-xl",
  lg: "form-input-element-lg",
  md: "form-input-element-md",
  sm: "form-input-element-sm",
  xs: "form-input-element-xs"
};
var InputElement = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _placementProp;
  var size = _ref.size,
    children = _ref.children,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? "left" : _ref$placement,
    _ref$disabledPointerE = _ref.disabledPointerEvents,
    disabledPointerEvents = _ref$disabledPointerE === void 0 ? false : _ref$disabledPointerE,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var sizeClass = inputSizes[size];
  var placementProp = (_placementProp = {}, _placementProp[placement] = "0", _placementProp);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: (0, _utils.cx)("form-input-element", sizeClass, disabledPointerEvents && "pointer-events-none", className),
    style: placementProp
  }, props), children);
});
if (_utils.__DEV__) {
  InputElement.displayName = "InputElement";
}
var InputLeftElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(InputElement, _extends({
    ref: ref,
    placement: "left"
  }, props));
});
exports.InputLeftElement = InputLeftElement;
if (_utils.__DEV__) {
  InputLeftElement.displayName = "InputLeftElement";
}
var InputRightElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(InputElement, _extends({
    ref: ref,
    placement: "right"
  }, props));
});
exports.InputRightElement = InputRightElement;
if (_utils.__DEV__) {
  InputRightElement.displayName = "InputRightElement";
}
//# sourceMappingURL=index.js.map