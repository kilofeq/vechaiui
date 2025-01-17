"use strict";

exports.__esModule = true;
exports.useInputClass = void 0;
var _theme = require("@vechaiui/theme");
var _utils = require("@vechaiui/utils");
var useInputClass = (0, _theme.createMemoClass)(function (props) {
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
  var classes = (0, _utils.cx)("form-field", sizes[props.size], variantClasses[props.variant], props.disabled && "form-field-disabled");
  return classes;
});
exports.useInputClass = useInputClass;
//# sourceMappingURL=styles.js.map