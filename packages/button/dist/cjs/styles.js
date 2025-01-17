"use strict";

exports.__esModule = true;
exports.useButtonClass = void 0;
var _theme = require("@vechaiui/theme");
var _utils = require("@vechaiui/utils");
var useButtonClass = (0, _theme.createMemoClass)(function (props) {
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
  var classes = (0, _utils.cx)("btn", sizes[props.size], variantClasses[props.variant], props.disabled && "btn-disabled");
  return classes;
});
exports.useButtonClass = useButtonClass;
//# sourceMappingURL=styles.js.map