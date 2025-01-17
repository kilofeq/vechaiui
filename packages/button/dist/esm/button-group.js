var _excluded = ["size", "color", "variant", "attached", "disabled", "children", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { cx, getValidChildren, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
export var ButtonGroup = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      size,
      color,
      variant,
      attached,
      disabled,
      children,
      className
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var validChildren = getValidChildren(children);
  var clones = validChildren.map(child => {
    return /*#__PURE__*/React.cloneElement(child, {
      size: size || child.props.size,
      color: child.props.color || color,
      variant: child.props.variant || variant,
      disabled: child.props.disabled || disabled
    });
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    role: "group",
    className: cx("btn-group", attached && "btn-group-attached", className)
  }, rest), clones);
});
if (__DEV__) {
  ButtonGroup.displayName = "ButtonGroup";
}
//# sourceMappingURL=button-group.js.map