var _excluded = ["className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
export var Code = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
      className
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React.createElement("code", _extends({
    ref: ref,
    className: cx("code", className)
  }, rest));
});
if (__DEV__) {
  Code.displayName = "Code";
}
//# sourceMappingURL=code.js.map