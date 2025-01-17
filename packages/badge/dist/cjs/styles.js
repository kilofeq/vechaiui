"use strict";

exports.__esModule = true;
exports.useBadgeClass = void 0;
var _theme = require("@vechaiui/theme");
var _utils = require("@vechaiui/utils");
var variantClasses = {
  solid: "badge-solid",
  outline: "badge-outline",
  light: "badge-light"
};
var sizes = {
  sm: "badge-sm",
  md: "badge-md"
};
var useBadgeClass = (0, _theme.createMemoClass)(function (props) {
  return (0, _utils.cx)("badge", props.hasShadow && "badge-shadow", sizes[props.size], variantClasses[props.variant]);
});
exports.useBadgeClass = useBadgeClass;
//# sourceMappingURL=styles.js.map