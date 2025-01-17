"use strict";

exports.__esModule = true;
exports.AvatarGroup = void 0;
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _avatar = require("./avatar");
var _excluded = ["size", "children", "max", "className"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AvatarGroup = function AvatarGroup(_ref) {
  var size = _ref.size,
    children = _ref.children,
    max = _ref.max,
    className = _ref.className,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var validChildren = (0, _utils.getValidChildren)(children);

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
  var clones = reversedChildren.map(function (child, index) {
    var isFirstAvatar = index === 0;
    return /*#__PURE__*/React.cloneElement(child, {
      size: size,
      className: (0, _utils.cx)(child.props.className, isFirstAvatar ? "mr-0" : "-mr-3"),
      bordered: true
    });
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    className: (0, _utils.cx)("avatar-group", className)
  }, rest), excess > 0 && /*#__PURE__*/React.createElement(_avatar.Avatar, {
    size: size,
    name: "+" + excess,
    className: "-ml-3",
    isFullName: true,
    bordered: true
  }), clones);
};
exports.AvatarGroup = AvatarGroup;
if (_utils.__DEV__) {
  AvatarGroup.displayName = "AvatarGroup";
}
//# sourceMappingURL=avatar-group.js.map