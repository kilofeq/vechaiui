"use strict";

exports.__esModule = true;
exports.TagLabel = exports.TagCloseButton = exports.Tag = void 0;
var _icon = require("@vechaiui/icon");
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _excluded = ["disabled", "className", "iconClassName"],
  _excluded2 = ["className"],
  _excluded3 = ["variant", "size", "color", "className"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// FIXME
var TagCloseButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var disabled = _ref.disabled,
    className = _ref.className,
    iconClassName = _ref.iconClassName,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React.createElement("button", _extends({
    ref: ref,
    className: (0, _utils.cx)("tag-close-button", className),
    disabled: disabled,
    "aria-disabled": disabled
  }, props), /*#__PURE__*/React.createElement(_icon.Icon, {
    as: _icon.XIcon,
    label: "x",
    className: (0, _utils.cx)("w-3.5 h-3.5", iconClassName)
  }));
});
exports.TagCloseButton = TagCloseButton;
if (_utils.__DEV__) {
  TagCloseButton.displayName = "TagCloseButton";
}
var TagLabel = function TagLabel(_ref2) {
  var className = _ref2.className,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: (0, _utils.cx)(className)
  }, props));
};
exports.TagLabel = TagLabel;
if (_utils.__DEV__) {
  TagLabel.displayName = "TagLabel";
}
var Tag = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? "outline" : _props$variant,
    _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    _props$color = props.color,
    color = _props$color === void 0 ? "" : _props$color,
    className = props.className,
    rest = _objectWithoutPropertiesLoose(props, _excluded3);
  var classes = (0, _styles.useTagClass)({
    variant: variant,
    size: size
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    "data-color": color ? color : undefined,
    className: (0, _utils.cx)(classes, className)
  }, rest));
});
exports.Tag = Tag;
if (_utils.__DEV__) {
  Tag.displayName = "Tag";
}
//# sourceMappingURL=tag.js.map