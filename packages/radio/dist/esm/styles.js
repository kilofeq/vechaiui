import { createMemoClass } from "@vechaiui/theme";
import { cx } from "@vechaiui/utils";
export var useRadioLabelClass = createMemoClass(props => {
  var sizes = {
    sm: "form-radio-label-sm",
    md: "form-radio-label-md",
    lg: "form-radio-label-lg",
    xl: "form-radio-label-xl"
  };
  var classes = cx("form-radio-label", sizes[props.size]);
  return classes;
});
export var useRadioClass = createMemoClass(props => {
  var sizes = {
    sm: "form-radio-sm",
    md: "form-radio-md",
    lg: "form-radio-lg",
    xl: "form-radio-xl"
  };
  var classes = cx("form-radio", sizes[props.size], props.disabled && "form-radio-disabled");
  return classes;
});
//# sourceMappingURL=styles.js.map