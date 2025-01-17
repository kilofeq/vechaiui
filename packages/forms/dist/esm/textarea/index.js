var _excluded = ["size", "variant", "color", "as", "aria-label", "aria-describedby", "className", "id"],
  _excluded2 = ["readOnly", "disabled", "invalid", "required"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { useInputClass } from "../input/styles";
import { useFormControl } from "../form-control";
export var Textarea = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      size = "md",
      variant = "outline",
      color = "primary",
      as: Comp = "textarea",
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedby,
      className,
      id
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var _useFormControl = useFormControl(props),
    {
      readOnly,
      disabled,
      invalid,
      required
    } = _useFormControl,
    formControl = _objectWithoutPropertiesLoose(_useFormControl, _excluded2);
  var classes = useInputClass({
    size,
    disabled,
    variant
  });
  return /*#__PURE__*/React.createElement(Comp, _extends({
    ref: ref,
    readOnly: readOnly,
    "aria-readonly": readOnly,
    disabled: disabled,
    "aria-disabled": disabled,
    "aria-label": ariaLabel,
    "aria-invalid": invalid,
    required: required,
    "aria-required": required,
    "aria-describedby": ariaDescribedby,
    "data-color": color ? color : undefined,
    className: cx("form-textarea", classes, className),
    id: id || formControl.id
  }, rest));
});
if (__DEV__) {
  Textarea.displayName = "Textarea";
}
//# sourceMappingURL=index.js.map