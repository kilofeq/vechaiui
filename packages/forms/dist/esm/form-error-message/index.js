var _excluded = ["className", "id"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { useFormControl } from "../form-control";
export var FormErrorMessage = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      className,
      id
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var classes = cx("form-error-message", className);
  var formControl = useFormControl({});
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: classes,
    id: id || formControl.errorId
  }, rest));
});
if (__DEV__) {
  FormErrorMessage.displayName = "FormErrorMessage";
}
//# sourceMappingURL=index.js.map