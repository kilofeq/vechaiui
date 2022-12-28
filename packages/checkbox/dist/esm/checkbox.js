var _excluded = ["id", "name", "value", "aria-label", "aria-labelledby", "aria-describedby", "color", "defaultChecked", "checked", "size", "onChange", "indeterminate", "children", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useFormControl } from "@vechaiui/forms";
import { cx, useForkRef, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { useEffect, useRef } from "react";
import { useCheckboxClass, useCheckboxLabelClass } from "./styles";
export var Checkbox = /*#__PURE__*/React.forwardRef((props, ref) => {
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
      indeterminate,
      children,
      className
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var {
    disabled,
    invalid,
    readOnly
  } = useFormControl(props);
  var checkboxClasses = useCheckboxClass({
    size,
    disabled
  });
  var checkboxLabelClasses = useCheckboxLabelClass({
    size
  });
  var ownRef = useRef();
  var _ref = useForkRef(ownRef, ref);
  useEffect(() => {
    // @ts-ignore
    if (ownRef.current) {
      // @ts-ignore
      ownRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate, _ref]);
  return /*#__PURE__*/React.createElement("label", {
    className: cx("inline-flex align-top items-center cursor-base", disabled && "cursor-not-allowed")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedby,
    id: id,
    ref: _ref,
    name: name,
    value: value,
    onChange: readOnly ? undefined : onChange,
    defaultChecked: readOnly ? undefined : defaultChecked,
    checked: readOnly ? Boolean(checked) : defaultChecked ? undefined : checked,
    disabled: disabled,
    "aria-disabled": disabled,
    readOnly: readOnly,
    "aria-readonly": readOnly,
    "aria-invalid": invalid,
    "aria-checked": indeterminate ? "mixed" : checked,
    "data-color": color ? color : undefined,
    className: cx(checkboxClasses, readOnly || disabled ? "opacity-80" : "opacity-100", className)
  }, rest)), children && /*#__PURE__*/React.createElement("span", {
    className: cx(checkboxLabelClasses, readOnly || disabled ? "opacity-40" : "opacity-100")
  }, children));
});
if (__DEV__) {
  Checkbox.displayName = "Checkbox";
}
//# sourceMappingURL=checkbox.js.map