var _excluded = ["color", "variant", "className", "size", "hasShadow"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { useBadgeClass } from "./styles";
export var Badge = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      color,
      variant = "light",
      className,
      size = "md",
      hasShadow = false
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var classes = useBadgeClass({
    variant,
    hasShadow,
    size
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: cx(classes, className),
    "data-color": color ? color : undefined
  }, rest));
});
if (__DEV__) {
  Badge.displayName = "Badge";
}
//# sourceMappingURL=badge.js.map