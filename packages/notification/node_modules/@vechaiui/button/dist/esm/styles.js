import { createMemoClass } from "@vechaiui/theme";
import { cx } from "@vechaiui/utils";
export var useButtonClass = createMemoClass(props => {
  var variantClasses = {
    outline: "btn-outline",
    solid: "btn-solid",
    ghost: "btn-ghost",
    light: "btn-light",
    link: "btn-link"
  };
  var sizes = {
    xs: "btn-xs",
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
    xl: "btn-xl"
  };
  var classes = cx("btn", sizes[props.size], variantClasses[props.variant], props.disabled && "btn-disabled");
  return classes;
});
//# sourceMappingURL=styles.js.map