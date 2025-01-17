var _excluded = ["icon", "children", "aria-label", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { Button } from "./button";
export var IconButton = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      icon,
      children,
      "aria-label": ariaLabel,
      className
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var classes = cx("btn-icon", className);

  /**
   * Passing the icon as prop or children should work
   */
  var element = icon || children;
  var _children = /*#__PURE__*/React.isValidElement(element) ? /*#__PURE__*/React.cloneElement(element, {}) : null;
  return /*#__PURE__*/React.createElement(Button, _extends({
    className: classes,
    ref: ref,
    "aria-label": ariaLabel
  }, rest), _children);
});
if (__DEV__) {
  IconButton.displayName = "IconButton";
}
//# sourceMappingURL=icon-button.js.map