"use strict";

exports.__esModule = true;
exports.useSwitchClass = exports.useSwitchBoxClass = void 0;
var _theme = require("@vechaiui/theme");
var _utils = require("@vechaiui/utils");
var useSwitchBoxClass = (0, _theme.createMemoClass)(function (props) {
  var sizes = {
    sm: "form-switch-box-sm",
    md: "form-switch-box-md",
    lg: "form-switch-box-lg",
    xl: "form-switch-box-xl"
  };
  var classes = (0, _utils.cx)("form-switch-box", sizes[props.size]);
  return classes;
});
exports.useSwitchBoxClass = useSwitchBoxClass;
var useSwitchClass = (0, _theme.createMemoClass)(function (props) {
  var sizes = {
    sm: "form-switch-sm",
    md: "form-switch-md",
    lg: "form-switch-lg",
    xl: "form-switch-xl"
  };
  var classes = (0, _utils.cx)("form-switch", sizes[props.size], props.disabled && "form-switch-disabled");
  return classes;
});
exports.useSwitchClass = useSwitchClass;
//# sourceMappingURL=styles.js.map