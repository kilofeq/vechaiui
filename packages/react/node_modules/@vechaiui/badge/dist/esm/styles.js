import { createMemoClass } from "@vechaiui/theme";
import { cx } from "@vechaiui/utils";
var variantClasses = {
  solid: "badge-solid",
  outline: "badge-outline",
  light: "badge-light"
};
var sizes = {
  sm: "badge-sm",
  md: "badge-md"
};
export var useBadgeClass = createMemoClass(props => {
  return cx("badge", props.hasShadow && "badge-shadow", sizes[props.size], variantClasses[props.variant]);
});
//# sourceMappingURL=styles.js.map