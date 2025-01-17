"use strict";

exports.__esModule = true;
exports.useDotClass = void 0;
var _utils = require("@vechaiui/utils");
var _theme = require("@vechaiui/theme");
var variants = {
  solid: "dot-solid",
  outline: "dot-outline"
};
var sizes = {
  "3xs": "dot-3xs",
  "2xs": "dot-2xs",
  xs: "dot-xs",
  sm: "dot-sm",
  md: "dot-md",
  lg: "dot-lg",
  xl: "dot-xl",
  "2xl": "dot-2xl",
  "3xl": "dot-3xl"
};
var useDotClass = (0, _theme.createMemoClass)(function (props) {
  return (0, _utils.cx)("dot", props.bordered && "dot-bordered", sizes[props.size], variants[props.variant]);
});
exports.useDotClass = useDotClass;
//# sourceMappingURL=styles.js.map