"use strict";

exports.__esModule = true;
exports.Badge = void 0;
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _excluded = ["color", "variant", "className", "size", "hasShadow"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Badge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var color = props.color,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? "light" : _props$variant,
    className = props.className,
    _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    _props$hasShadow = props.hasShadow,
    hasShadow = _props$hasShadow === void 0 ? false : _props$hasShadow,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var classes = (0, _styles.useBadgeClass)({
    variant: variant,
    hasShadow: hasShadow,
    size: size
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: (0, _utils.cx)(classes, className),
    "data-color": color ? color : undefined
  }, rest));
});
exports.Badge = Badge;
if (_utils.__DEV__) {
  Badge.displayName = "Badge";
}
//# sourceMappingURL=badge.js.map