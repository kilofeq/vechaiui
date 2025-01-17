var _excluded = ["disabled", "className", "iconClassName"],
  _excluded2 = ["className"],
  _excluded3 = ["variant", "size", "color", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Icon, XIcon } from "@vechaiui/icon";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { useTagClass } from "./styles";
// FIXME
export var TagCloseButton = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
      disabled,
      className,
      iconClassName
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React.createElement("button", _extends({
    ref: ref,
    className: cx("tag-close-button", className),
    disabled: disabled,
    "aria-disabled": disabled
  }, props), /*#__PURE__*/React.createElement(Icon, {
    as: XIcon,
    label: "x",
    className: cx("w-3.5 h-3.5", iconClassName)
  }));
});
if (__DEV__) {
  TagCloseButton.displayName = "TagCloseButton";
}
export var TagLabel = _ref2 => {
  var {
      className
    } = _ref2,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cx(className)
  }, props));
};
if (__DEV__) {
  TagLabel.displayName = "TagLabel";
}
export var Tag = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      variant = "outline",
      size = "md",
      color = "",
      className
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded3);
  var classes = useTagClass({
    variant,
    size
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    "data-color": color ? color : undefined,
    className: cx(classes, className)
  }, rest));
});
if (__DEV__) {
  Tag.displayName = "Tag";
}
//# sourceMappingURL=tag.js.map