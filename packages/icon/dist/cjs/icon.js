"use strict";

exports.__esModule = true;
exports.Icon = void 0;
var _utils = require("@vechaiui/utils");
var _visuallyHidden = _interopRequireDefault(require("@vechaiui/visually-hidden"));
var React = _interopRequireWildcard(require("react"));
var _core = require("./core");
var _excluded = ["as", "inline", "className", "role", "label"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$as = props.as,
    Comp = _props$as === void 0 ? _core.QuestionCircleIcon : _props$as,
    _props$inline = props.inline,
    inline = _props$inline === void 0 ? true : _props$inline,
    className = props.className,
    _props$role = props.role,
    role = _props$role === void 0 ? "presentation" : _props$role,
    label = props.label,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Comp, _extends({
    ref: ref,
    className: (0, _utils.cx)(inline ? "icon-inline" : "icon-block", className),
    role: role,
    "aria-hidden": true,
    focusable: false
  }, rest)), /*#__PURE__*/React.createElement(_visuallyHidden["default"], null, label));
});
exports.Icon = Icon;
if (_utils.__DEV__) {
  Icon.displayName = "Icon";
}
//# sourceMappingURL=icon.js.map