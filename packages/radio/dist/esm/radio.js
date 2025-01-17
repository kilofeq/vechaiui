var _excluded = ["id", "name", "value", "aria-label", "aria-labelledby", "aria-describedby", "color", "defaultChecked", "checked", "size", "onChange", "children", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useFormControl } from "@vechaiui/forms";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { useRadioClass, useRadioLabelClass } from "./styles";
export var Radio = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      id,
      name,
      value,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedby,
      color = "primary",
      defaultChecked,
      checked,
      size = "md",
      onChange,
      children,
      className
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var {
    disabled,
    invalid
  } = useFormControl(props);
  var radioClasses = useRadioClass({
    size,
    disabled,
    color
  });
  var radioLabelClasses = useRadioLabelClass({
    size
  });
  return /*#__PURE__*/React.createElement("label", {
    className: cx("inline-flex align-top items-center", disabled && "cursor-not-allowed")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedby,
    id: id,
    ref: ref,
    name: name,
    value: value,
    "aria-invalid": invalid,
    defaultChecked: defaultChecked,
    onChange: onChange,
    checked: checked,
    disabled: disabled,
    "aria-disabled": disabled,
    "data-color": color ? color : undefined,
    className: cx(radioClasses, disabled ? "opacity-80" : "opacity-100", className)
  }, rest)), children && /*#__PURE__*/React.createElement("span", {
    className: cx(radioLabelClasses, disabled ? "opacity-40" : "opacity-100")
  }, children));
});
if (__DEV__) {
  Radio.displayName = "Radio";
}
//# sourceMappingURL=radio.js.map