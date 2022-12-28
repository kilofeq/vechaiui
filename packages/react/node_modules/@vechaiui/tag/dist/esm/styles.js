import { cx } from "@vechaiui/utils";
import { createMemoClass } from "@vechaiui/theme";
var variants = {
  solid: "tag-solid",
  outline: "tag-outline",
  light: "tag-light"
};
var sizes = {
  sm: "tag-sm",
  md: "tag-md",
  lg: "tag-lg",
  xl: "tag-xl"
};
export var useTagClass = createMemoClass(props => {
  return cx("tag", sizes[props.size], variants[props.variant]);
});
//# sourceMappingURL=styles.js.map