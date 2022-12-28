"use strict";

exports.__esModule = true;
exports.useCheckboxLabelClass = exports.useCheckboxClass = void 0;
var _theme = require("@vechaiui/theme");
var _utils = require("@vechaiui/utils");
var useCheckboxLabelClass = (0, _theme.createMemoClass)(function (props) {
  var sizes = {
    sm: "form-checkbox-label-sm",
    md: "form-checkbox-label-md",
    lg: "form-checkbox-label-lg",
    xl: "form-checkbox-label-xl"
  };
  var classes = (0, _utils.cx)("form-checkbox-label", sizes[props.size]);
  return classes;
});
exports.useCheckboxLabelClass = useCheckboxLabelClass;
var useCheckboxClass = (0, _theme.createMemoClass)(function (props) {
  var sizes = {
    sm: "form-checkbox-sm",
    md: "form-checkbox-md",
    lg: "form-checkbox-lg",
    xl: "form-checkbox-xl"
  };
  var classes = (0, _utils.cx)("form-checkbox", props.disabled && "form-checkbox-disabled", sizes[props.size]);
  return classes;
});
exports.useCheckboxClass = useCheckboxClass;
//# sourceMappingURL=styles.js.map