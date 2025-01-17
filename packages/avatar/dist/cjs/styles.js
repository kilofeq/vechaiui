"use strict";

exports.__esModule = true;
exports.useAvatarNameClass = exports.useAvatarClass = void 0;
var _utils = require("@vechaiui/utils");
var _theme = require("@vechaiui/theme");
var useAvatarNameClass = (0, _theme.createMemoClass)(function (props) {
  var sizes = {
    "2xs": "avatar-name-2xs",
    xs: "avatar-name-xs",
    sm: "avatar-name-sm",
    md: "avatar-name-md",
    lg: "avatar-name-lg",
    xl: "avatar-name-xl",
    "2xl": "avatar-name-2xl",
    "3xl": "avatar-name-3xl"
  };
  var className = (0, _utils.cx)("avatar-name", sizes[props.size]);
  return className;
});
exports.useAvatarNameClass = useAvatarNameClass;
var useAvatarClass = (0, _theme.createMemoClass)(function (props) {
  var sizes = {
    "2xs": "avatar-2xs",
    xs: "avatar-xs",
    sm: "avatar-sm",
    md: "avatar-md",
    lg: "avatar-lg",
    xl: "avatar-xl",
    "2xl": "avatar-2xl",
    "3xl": "avatar-3xl"
  };
  var classes = (0, _utils.cx)("avatar", props.bordered && "avatar-bordered", sizes[props.size]);
  return classes;
});
exports.useAvatarClass = useAvatarClass;
//# sourceMappingURL=styles.js.map