"use strict";

exports.__esModule = true;
exports.Radio = void 0;
var _forms = require("@vechaiui/forms");
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _excluded = ["id", "name", "value", "aria-label", "aria-labelledby", "aria-describedby", "color", "defaultChecked", "checked", "size", "onChange", "children", "className"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Radio = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var id = props.id,
    name = props.name,
    value = props.value,
    ariaLabel = props["aria-label"],
    ariaLabelledBy = props["aria-labelledby"],
    ariaDescribedby = props["aria-describedby"],
    _props$color = props.color,
    color = _props$color === void 0 ? "primary" : _props$color,
    defaultChecked = props.defaultChecked,
    checked = props.checked,
    _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    onChange = props.onChange,
    children = props.children,
    className = props.className,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var _useFormControl = (0, _forms.useFormControl)(props),
    disabled = _useFormControl.disabled,
    invalid = _useFormControl.invalid;
  var radioClasses = (0, _styles.useRadioClass)({
    size: size,
    disabled: disabled,
    color: color
  });
  var radioLabelClasses = (0, _styles.useRadioLabelClass)({
    size: size
  });
  return /*#__PURE__*/React.createElement("label", {
    className: (0, _utils.cx)("inline-flex align-top items-center", disabled && "cursor-not-allowed")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedby,
    id: id,
    ref: ref,
    name: name,
    value: value,
    "aria-invalid": invalid,
    defaultChecked: defaultChecked,
    onChange: onChange,
    checked: checked,
    disabled: disabled,
    "aria-disabled": disabled,
    "data-color": color ? color : undefined,
    className: (0, _utils.cx)(radioClasses, disabled ? "opacity-80" : "opacity-100", className)
  }, rest)), children && /*#__PURE__*/React.createElement("span", {
    className: (0, _utils.cx)(radioLabelClasses, disabled ? "opacity-40" : "opacity-100")
  }, children));
});
exports.Radio = Radio;
if (_utils.__DEV__) {
  Radio.displayName = "Radio";
}
//# sourceMappingURL=radio.js.map