"use strict";

exports.__esModule = true;
exports.useAlertCloseButton = exports.useAlertClass = void 0;
var _utils = require("@vechaiui/utils");
var _theme = require("@vechaiui/theme");
var variantClasses = {
  subtle: "alert-subtle",
  solid: "alert-solid",
  "left-accent": "alert-left-accent"
};
var useAlertCloseButton = (0, _theme.createMemoClass)(function () {
  return (0, _utils.cx)("alert-close-button");
});
exports.useAlertCloseButton = useAlertCloseButton;
var useAlertClass = (0, _theme.createMemoClass)(function (props) {
  return (0, _utils.cx)("alert", variantClasses[props.variant]);
});
exports.useAlertClass = useAlertClass;
//# sourceMappingURL=styles.js.map