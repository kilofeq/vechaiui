import { cx } from "@vechaiui/utils";
import { createMemoClass } from "@vechaiui/theme";
var variantClasses = {
  subtle: "alert-subtle",
  solid: "alert-solid",
  "left-accent": "alert-left-accent"
};
export var useAlertCloseButton = createMemoClass(() => {
  return cx("alert-close-button");
});
export var useAlertClass = createMemoClass(props => {
  return cx("alert", variantClasses[props.variant]);
});
//# sourceMappingURL=styles.js.map