"use strict";

exports.__esModule = true;
exports.useRadioLabelClass = exports.useRadioClass = void 0;
var _theme = require("@vechaiui/theme");
var _utils = require("@vechaiui/utils");
var useRadioLabelClass = (0, _theme.createMemoClass)(function (props) {
  var sizes = {
    sm: "form-radio-label-sm",
    md: "form-radio-label-md",
    lg: "form-radio-label-lg",
    xl: "form-radio-label-xl"
  };
  var classes = (0, _utils.cx)("form-radio-label", sizes[props.size]);
  return classes;
});
exports.useRadioLabelClass = useRadioLabelClass;
var useRadioClass = (0, _theme.createMemoClass)(function (props) {
  var sizes = {
    sm: "form-radio-sm",
    md: "form-radio-md",
    lg: "form-radio-lg",
    xl: "form-radio-xl"
  };
  var classes = (0, _utils.cx)("form-radio", sizes[props.size], props.disabled && "form-radio-disabled");
  return classes;
});
exports.useRadioClass = useRadioClass;
//# sourceMappingURL=styles.js.map