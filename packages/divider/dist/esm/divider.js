var _excluded = ["orientation", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
export var Divider = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
      orientation = "horizontal",
      className
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var classes = cx("divider", orientation === "vertical" ? "divider-vertical" : "divider-horizontal", className);
  return /*#__PURE__*/React.createElement("hr", _extends({
    ref: ref,
    "aria-orientation": orientation,
    className: classes
  }, props));
});
if (__DEV__) {
  Divider.displayName = "Divider";
}
//# sourceMappingURL=divider.js.map