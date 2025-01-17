"use strict";

exports.__esModule = true;
exports.RequiredIndicator = exports.FormLabel = void 0;
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _formControl = require("../form-control");
var _excluded = ["children", "className", "htmlFor", "id"],
  _excluded2 = ["className"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FormLabel = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
    className = props.className,
    htmlFor = props.htmlFor,
    id = props.id,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var formControl = (0, _formControl.useFormControl)(rest);
  var classes = (0, _utils.cx)("form-label", formControl.disabled && "form-label-disabled", className);
  return /*#__PURE__*/React.createElement("label", _extends({
    ref: ref,
    className: classes,
    htmlFor: htmlFor || formControl.id,
    id: id || formControl.labelId
  }, rest), children, formControl.required && /*#__PURE__*/React.createElement(RequiredIndicator, null));
});
exports.FormLabel = FormLabel;
if (_utils.__DEV__) {
  FormLabel.displayName = "FormLabel";
}
var RequiredIndicator = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
    rest = _objectWithoutPropertiesLoose(props, _excluded2);
  var classes = (0, _utils.cx)("form-required-indicator", className);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: classes,
    "aria-hidden": "true",
    children: "*"
  }, rest));
});
exports.RequiredIndicator = RequiredIndicator;
if (_utils.__DEV__) {
  RequiredIndicator.displayName = "RequiredIndicator";
}
//# sourceMappingURL=index.js.map