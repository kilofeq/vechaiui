var _excluded = ["size", "children", "placement", "disabledPointerEvents", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
var inputSizes = {
  xl: "form-input-element-xl",
  lg: "form-input-element-lg",
  md: "form-input-element-md",
  sm: "form-input-element-sm",
  xs: "form-input-element-xs"
};
var InputElement = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
      size,
      children,
      placement = "left",
      disabledPointerEvents = false,
      className
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var sizeClass = inputSizes[size];
  var placementProp = {
    [placement]: "0"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: cx("form-input-element", sizeClass, disabledPointerEvents && "pointer-events-none", className),
    style: placementProp
  }, props), children);
});
if (__DEV__) {
  InputElement.displayName = "InputElement";
}
export var InputLeftElement = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(InputElement, _extends({
  ref: ref,
  placement: "left"
}, props)));
if (__DEV__) {
  InputLeftElement.displayName = "InputLeftElement";
}
export var InputRightElement = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(InputElement, _extends({
  ref: ref,
  placement: "right"
}, props)));
if (__DEV__) {
  InputRightElement.displayName = "InputRightElement";
}
//# sourceMappingURL=index.js.map