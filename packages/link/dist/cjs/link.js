"use strict";

exports.__esModule = true;
exports.Link = void 0;
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _excluded = ["disabled", "external", "onClick", "className", "as"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Link = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var disabled = props.disabled,
    external = props.external,
    onClick = props.onClick,
    className = props.className,
    _props$as = props.as,
    Comp = _props$as === void 0 ? "a" : _props$as,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var externalProps = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : null;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    ref: ref,
    tabIndex: disabled ? -1 : undefined,
    "aria-disabled": disabled,
    onClick: disabled ? function (event) {
      return event.preventDefault();
    } : onClick,
    className: (0, _utils.cx)("link", disabled && "link-disabled", className)
  }, externalProps, rest));
});
exports.Link = Link;
if (_utils.__DEV__) {
  Link.displayName = "Link";
}
//# sourceMappingURL=link.js.map