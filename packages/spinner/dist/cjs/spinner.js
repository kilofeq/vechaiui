"use strict";

exports.__esModule = true;
exports.Spinner = void 0;
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _styles = _interopRequireDefault(require("./styles"));
var _excluded = ["size", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Spinner = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$size = props.size,
    size = _props$size === void 0 ? "sm" : _props$size,
    className = props.className,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var classes = (0, _styles["default"])({
    size: size
  });
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    className: (0, _utils.cx)(classes, className),
    fill: "none",
    viewBox: "0 0 66 66"
  }, rest), /*#__PURE__*/React.createElement("circle", {
    cx: "33",
    cy: "33",
    fill: "none",
    r: "28",
    stroke: "currentColor",
    strokeWidth: "10",
    className: "opacity-30"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "33",
    cy: "33",
    fill: "none",
    r: "28",
    stroke: "currentColor",
    strokeDasharray: "40, 134",
    strokeDashoffset: "325",
    strokeLinecap: "round",
    strokeWidth: "10",
    className: "opacity-70"
  }));
});
exports.Spinner = Spinner;
if (_utils.__DEV__) {
  Spinner.displayName = "Spinner";
}
//# sourceMappingURL=spinner.js.map