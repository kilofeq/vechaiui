var _excluded = ["id", "name", "value", "aria-label", "aria-labelledby", "color", "defaultChecked", "checked", "size", "onChange", "children", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useFormControl } from "@vechaiui/forms";
import { cx, __DEV__ } from "@vechaiui/utils";
import VisuallyHidden from "@vechaiui/visually-hidden";
import * as React from "react";
import { useSwitchClass, useSwitchBoxClass } from "./styles";
export var Switch = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      id,
      name,
      value,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      color = "primary",
      defaultChecked,
      checked,
      size = "md",
      onChange,
      className
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var {
    disabled,
    invalid
  } = useFormControl(props);
  var switchClasses = useSwitchClass({
    size,
    disabled,
    checked
  });
  var switchBoxClasses = useSwitchBoxClass({
    size,
    checked
  });
  return /*#__PURE__*/React.createElement("label", _extends({
    className: "form-switch-label"
  }, rest), /*#__PURE__*/React.createElement(VisuallyHidden, {
    as: "input",
    type: "checkbox",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    id: id,
    ref: ref,
    name: name,
    value: value,
    "aria-invalid": invalid,
    defaultChecked: defaultChecked,
    onChange: onChange,
    checked: checked,
    "data-disabled": disabled,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("div", {
    className: cx(switchClasses, className),
    "data-disabled": disabled,
    "data-color": color ? color : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: cx(switchBoxClasses)
  })));
});
if (__DEV__) {
  Switch.displayName = "Switch";
}
//# sourceMappingURL=switch.js.map