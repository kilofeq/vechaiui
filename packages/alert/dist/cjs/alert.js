"use strict";

exports.__esModule = true;
exports.AlertCloseButton = exports.Alert = void 0;
var _utils = require("@vechaiui/utils");
var _icon = require("@vechaiui/icon");
var React = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _excluded = ["color", "variant", "className"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AlertContext = /*#__PURE__*/React.createContext({});
var useAlertContext = function useAlertContext() {
  var context = React.useContext(AlertContext);
  if (context === undefined) {
    throw new Error("useAlertContext must be used within a AlertContextProvider");
  }
  return context;
};
var AlertCloseButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className;
  var _useAlertContext = useAlertContext(),
    color = _useAlertContext.color;
  var classes = (0, _styles.useAlertCloseButton)();
  return /*#__PURE__*/React.createElement("button", {
    ref: ref,
    "data-color": color ? color : undefined,
    className: (0, _utils.cx)(classes, className)
  }, /*#__PURE__*/React.createElement(_icon.Icon, {
    as: _icon.XIcon,
    label: "x",
    className: "inline-block w-4 h-4 text-current align-text-bottom fill-current"
  }));
});
exports.AlertCloseButton = AlertCloseButton;
if (_utils.__DEV__) {
  AlertCloseButton.displayName = "AlertCloseButton";
}
var Alert = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$color = props.color,
    color = _props$color === void 0 ? "primary" : _props$color,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? "subtle" : _props$variant,
    className = props.className,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var classes = (0, _styles.useAlertClass)({
    variant: variant
  });
  var context = {
    color: color
  };
  return /*#__PURE__*/React.createElement(AlertContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    ref: ref,
    "data-color": color ? color : undefined,
    className: (0, _utils.cx)(classes, className)
  }, rest)));
});
exports.Alert = Alert;
if (_utils.__DEV__) {
  Alert.displayName = "Alert";
}
//# sourceMappingURL=alert.js.map