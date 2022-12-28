import { createMemoClass } from "@vechaiui/theme";
import { cx } from "@vechaiui/utils";
export var useCheckboxLabelClass = createMemoClass(props => {
  var sizes = {
    sm: "form-checkbox-label-sm",
    md: "form-checkbox-label-md",
    lg: "form-checkbox-label-lg",
    xl: "form-checkbox-label-xl"
  };
  var classes = cx("form-checkbox-label", sizes[props.size]);
  return classes;
});
export var useCheckboxClass = createMemoClass(props => {
  var sizes = {
    sm: "form-checkbox-sm",
    md: "form-checkbox-md",
    lg: "form-checkbox-lg",
    xl: "form-checkbox-xl"
  };
  var classes = cx("form-checkbox", props.disabled && "form-checkbox-disabled", sizes[props.size]);
  return classes;
});
//# sourceMappingURL=styles.js.map