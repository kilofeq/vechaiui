var _excluded = ["className", "placeholder", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { Input } from "../input/input";
export var Select = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      className,
      placeholder,
      children
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  return /*#__PURE__*/React.createElement(Input, _extends({
    ref: ref,
    as: "select",
    type: "",
    className: cx("form-select", className)
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), children);
});
if (__DEV__) {
  Select.displayName = "Select";
}
//# sourceMappingURL=index.js.map