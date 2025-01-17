var _excluded = ["size", "children", "max", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { cx, getValidChildren, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { Avatar } from "./avatar";
export var AvatarGroup = _ref => {
  var {
      size,
      children,
      max,
      className
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var validChildren = getValidChildren(children);

  /**
   * get the avatars within the max
   */
  var childrenWithinMax = max ? validChildren.slice(0, max) : validChildren;

  /**
   * get the remaining avatar count
   */
  var excess = max != null && validChildren.length - max;

  /**
   * Reversing the children is a great way to avoid using zIndex
   * to overlap the avatars
   */
  var reversedChildren = childrenWithinMax.reverse();
  var clones = reversedChildren.map((child, index) => {
    var isFirstAvatar = index === 0;
    return /*#__PURE__*/React.cloneElement(child, {
      size,
      className: cx(child.props.className, isFirstAvatar ? "mr-0" : "-mr-3"),
      bordered: true
    });
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    className: cx("avatar-group", className)
  }, rest), excess > 0 && /*#__PURE__*/React.createElement(Avatar, {
    size: size,
    name: "+" + excess,
    className: "-ml-3",
    isFullName: true,
    bordered: true
  }), clones);
};
if (__DEV__) {
  AvatarGroup.displayName = "AvatarGroup";
}
//# sourceMappingURL=avatar-group.js.map