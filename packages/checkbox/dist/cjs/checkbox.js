"use strict";

exports.__esModule = true;
exports.Checkbox = void 0;
var _forms = require("@vechaiui/forms");
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _excluded = ["id", "name", "value", "aria-label", "aria-labelledby", "aria-describedby", "color", "defaultChecked", "checked", "size", "onChange", "indeterminate", "children", "className"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Checkbox = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    indeterminate = props.indeterminate,
    children = props.children,
    className = props.className,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var _useFormControl = (0, _forms.useFormControl)(props),
    disabled = _useFormControl.disabled,
    invalid = _useFormControl.invalid,
    readOnly = _useFormControl.readOnly;
  var checkboxClasses = (0, _styles.useCheckboxClass)({
    size: size,
    disabled: disabled
  });
  var checkboxLabelClasses = (0, _styles.useCheckboxLabelClass)({
    size: size
  });
  var ownRef = (0, React.useRef)();
  var _ref = (0, _utils.useForkRef)(ownRef, ref);
  (0, React.useEffect)(function () {
    // @ts-ignore
    if (ownRef.current) {
      // @ts-ignore
      ownRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate, _ref]);
  return /*#__PURE__*/React.createElement("label", {
    className: (0, _utils.cx)("inline-flex align-top items-center cursor-base", disabled && "cursor-not-allowed")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedby,
    id: id,
    ref: _ref,
    name: name,
    value: value,
    onChange: readOnly ? undefined : onChange,
    defaultChecked: readOnly ? undefined : defaultChecked,
    checked: readOnly ? Boolean(checked) : defaultChecked ? undefined : checked,
    disabled: disabled,
    "aria-disabled": disabled,
    readOnly: readOnly,
    "aria-readonly": readOnly,
    "aria-invalid": invalid,
    "aria-checked": indeterminate ? "mixed" : checked,
    "data-color": color ? color : undefined,
    className: (0, _utils.cx)(checkboxClasses, readOnly || disabled ? "opacity-80" : "opacity-100", className)
  }, rest)), children && /*#__PURE__*/React.createElement("span", {
    className: (0, _utils.cx)(checkboxLabelClasses, readOnly || disabled ? "opacity-40" : "opacity-100")
  }, children));
});
exports.Checkbox = Checkbox;
if (_utils.__DEV__) {
  Checkbox.displayName = "Checkbox";
}
//# sourceMappingURL=checkbox.js.map