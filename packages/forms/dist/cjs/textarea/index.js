"use strict";

exports.__esModule = true;
exports.Textarea = void 0;
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _styles = require("../input/styles");
var _formControl = require("../form-control");
var _excluded = ["size", "variant", "color", "as", "aria-label", "aria-describedby", "className", "id"],
  _excluded2 = ["readOnly", "disabled", "invalid", "required"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Textarea = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? "outline" : _props$variant,
    _props$color = props.color,
    color = _props$color === void 0 ? "primary" : _props$color,
    _props$as = props.as,
    Comp = _props$as === void 0 ? "textarea" : _props$as,
    ariaLabel = props["aria-label"],
    ariaDescribedby = props["aria-describedby"],
    className = props.className,
    id = props.id,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var _useFormControl = (0, _formControl.useFormControl)(props),
    readOnly = _useFormControl.readOnly,
    disabled = _useFormControl.disabled,
    invalid = _useFormControl.invalid,
    required = _useFormControl.required,
    formControl = _objectWithoutPropertiesLoose(_useFormControl, _excluded2);
  var classes = (0, _styles.useInputClass)({
    size: size,
    disabled: disabled,
    variant: variant
  });
  return /*#__PURE__*/React.createElement(Comp, _extends({
    ref: ref,
    readOnly: readOnly,
    "aria-readonly": readOnly,
    disabled: disabled,
    "aria-disabled": disabled,
    "aria-label": ariaLabel,
    "aria-invalid": invalid,
    required: required,
    "aria-required": required,
    "aria-describedby": ariaDescribedby,
    "data-color": color ? color : undefined,
    className: (0, _utils.cx)("form-textarea", classes, className),
    id: id || formControl.id
  }, rest));
});
exports.Textarea = Textarea;
if (_utils.__DEV__) {
  Textarea.displayName = "Textarea";
}
//# sourceMappingURL=index.js.map