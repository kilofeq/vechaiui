"use strict";

exports.__esModule = true;
exports["default"] = exports.VisuallyHidden = void 0;
var React = _interopRequireWildcard(require("react"));
var _utils = require("@vechaiui/utils");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = ["as", "style"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * VisuallyHidden
 *
 * Provides text for screen readers that is visually hidden.
 * It is the logical opposite of the `aria-hidden` attribute.
 */
var VisuallyHidden = /*#__PURE__*/React.forwardRef(function VisuallyHidden(_ref, ref) {
  var _ref$as = _ref.as,
    Comp = _ref$as === void 0 ? "span" : _ref$as,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Comp, _extends({
    ref: ref,
    style: _extends({
      border: 0,
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
      whiteSpace: "nowrap",
      wordWrap: "normal"
    }, style)
  }, props));
});

/**
 * @see Docs https://reach.tech/visually-hidden#visuallyhidden-props
 */
exports.VisuallyHidden = VisuallyHidden;
if (_utils.__DEV__) {
  VisuallyHidden.displayName = "VisuallyHidden";
  VisuallyHidden.propTypes = {
    as: _propTypes["default"].any,
    children: _propTypes["default"].node
  };
}

////////////////////////////////////////////////////////////////////////////////
// Exports
var _default = VisuallyHidden;
exports["default"] = _default;
//# sourceMappingURL=index.js.map