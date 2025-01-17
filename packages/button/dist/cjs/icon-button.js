"use strict";

exports.__esModule = true;
exports.IconButton = void 0;
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _button = require("./button");
var _excluded = ["icon", "children", "aria-label", "className"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var IconButton = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var icon = props.icon,
    children = props.children,
    ariaLabel = props["aria-label"],
    className = props.className,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var classes = (0, _utils.cx)("btn-icon", className);

  /**
   * Passing the icon as prop or children should work
   */
  var element = icon || children;
  var _children = /*#__PURE__*/React.isValidElement(element) ? /*#__PURE__*/React.cloneElement(element, {}) : null;
  return /*#__PURE__*/React.createElement(_button.Button, _extends({
    className: classes,
    ref: ref,
    "aria-label": ariaLabel
  }, rest), _children);
});
exports.IconButton = IconButton;
if (_utils.__DEV__) {
  IconButton.displayName = "IconButton";
}
//# sourceMappingURL=icon-button.js.map