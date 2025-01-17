var _excluded = ["placement", "size", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
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
var InputAddon = _ref => {
  var {
      placement = "left",
      size = "md",
      className
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var classes = cx("form-input-addon", sizes[size], _placement[placement], className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, props));
};
if (__DEV__) {
  InputAddon.displayName = "InputAddon";
}
export var InputLeftAddon = props => /*#__PURE__*/React.createElement(InputAddon, _extends({
  placement: "left"
}, props));
if (__DEV__) {
  InputLeftAddon.displayName = "InputLeftAddon";
}
export var InputRightAddon = props => /*#__PURE__*/React.createElement(InputAddon, _extends({
  placement: "right"
}, props));
if (__DEV__) {
  InputRightAddon.displayName = "InputRightAddon";
}
//# sourceMappingURL=index.js.map