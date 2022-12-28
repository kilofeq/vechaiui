import { createMemoClass } from "@vechaiui/theme";
import { cx } from "@vechaiui/utils";
export var useInputClass = createMemoClass(props => {
  var variantClasses = {
    outline: "form-field-outline",
    solid: "form-field-solid"
  };
  var sizes = {
    xs: "form-field-xs",
    sm: "form-field-sm",
    md: "form-field-md",
    lg: "form-field-lg",
    xl: "form-field-xl"
  };
  var classes = cx("form-field", sizes[props.size], variantClasses[props.variant], props.disabled && "form-field-disabled");
  return classes;
});
//# sourceMappingURL=styles.js.map