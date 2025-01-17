"use strict";

exports.__esModule = true;
exports.Switch = void 0;
var _forms = require("@vechaiui/forms");
var _utils = require("@vechaiui/utils");
var _visuallyHidden = _interopRequireDefault(require("@vechaiui/visually-hidden"));
var React = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _excluded = ["id", "name", "value", "aria-label", "aria-labelledby", "color", "defaultChecked", "checked", "size", "onChange", "children", "className"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Switch = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var id = props.id,
    name = props.name,
    value = props.value,
    ariaLabel = props["aria-label"],
    ariaLabelledBy = props["aria-labelledby"],
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
  var switchClasses = (0, _styles.useSwitchClass)({
    size: size,
    disabled: disabled,
    checked: checked
  });
  var switchBoxClasses = (0, _styles.useSwitchBoxClass)({
    size: size,
    checked: checked
  });
  return /*#__PURE__*/React.createElement("label", _extends({
    className: "form-switch-label"
  }, rest), /*#__PURE__*/React.createElement(_visuallyHidden["default"], {
    as: "input",
    type: "checkbox",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    id: id,
    ref: ref,
    name: name,
    value: value,
    "aria-invalid": invalid,
    defaultChecked: defaultChecked,
    onChange: onChange,
    checked: checked,
    "data-disabled": disabled,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("div", {
    className: (0, _utils.cx)(switchClasses, className),
    "data-disabled": disabled,
    "data-color": color ? color : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: (0, _utils.cx)(switchBoxClasses)
  })));
});
exports.Switch = Switch;
if (_utils.__DEV__) {
  Switch.displayName = "Switch";
}
//# sourceMappingURL=switch.js.map