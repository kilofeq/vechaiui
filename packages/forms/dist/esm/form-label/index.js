var _excluded = ["children", "className", "htmlFor", "id"],
  _excluded2 = ["className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { useFormControl } from "../form-control";
export var FormLabel = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      children,
      className,
      htmlFor,
      id
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var formControl = useFormControl(rest);
  var classes = cx("form-label", formControl.disabled && "form-label-disabled", className);
  return /*#__PURE__*/React.createElement("label", _extends({
    ref: ref,
    className: classes,
    htmlFor: htmlFor || formControl.id,
    id: id || formControl.labelId
  }, rest), children, formControl.required && /*#__PURE__*/React.createElement(RequiredIndicator, null));
});
if (__DEV__) {
  FormLabel.displayName = "FormLabel";
}
export var RequiredIndicator = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      className
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded2);
  var classes = cx("form-required-indicator", className);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: classes,
    "aria-hidden": "true",
    children: "*"
  }, rest));
});
if (__DEV__) {
  RequiredIndicator.displayName = "RequiredIndicator";
}
//# sourceMappingURL=index.js.map