"use strict";

exports.__esModule = true;
exports.useTagClass = void 0;
var _utils = require("@vechaiui/utils");
var _theme = require("@vechaiui/theme");
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
var useTagClass = (0, _theme.createMemoClass)(function (props) {
  return (0, _utils.cx)("tag", sizes[props.size], variants[props.variant]);
});
exports.useTagClass = useTagClass;
//# sourceMappingURL=styles.js.map