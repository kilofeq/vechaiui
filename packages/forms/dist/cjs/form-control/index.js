"use strict";

exports.__esModule = true;
exports.useFormControl = exports.FormControl = void 0;
var _autoId = require("@reach/auto-id");
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _excluded = ["children", "className", "required", "disabled", "invalid", "readOnly", "id"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var useFormControl = function useFormControl(props) {
  var context = useFormControlContext();
  if (!context) {
    return props;
  }
  var keys = Object.keys(context);
  return keys.reduce(function (acc, prop) {
    /** Giving precedence to `props` over `context` */
    acc[prop] = props[prop];
    if (context) {
      if (props[prop] == null) {
        acc[prop] = context[prop];
      }
    }
    return acc;
  }, {});
};
exports.useFormControl = useFormControl;
var FormControlContext = /*#__PURE__*/React.createContext(undefined);
var useFormControlContext = function useFormControlContext() {
  return React.useContext(FormControlContext);
};
var FormControl = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
    className = props.className,
    required = props.required,
    disabled = props.disabled,
    invalid = props.invalid,
    readOnly = props.readOnly,
    idProp = props.id,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var classes = (0, _utils.cx)("form-control", className);
  var id = idProp || "field-" + (0, _autoId.useId)();
  var labelId = id + "-label";
  var errorId = id + "-error";
  var helpTextId = id + "-helptext";
  var context = {
    required: required,
    disabled: disabled,
    invalid: invalid,
    readOnly: readOnly,
    id: id,
    labelId: labelId,
    errorId: errorId,
    helpTextId: helpTextId
  };
  return /*#__PURE__*/React.createElement(FormControlContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    ref: ref,
    className: classes
  }, rest), children));
});
exports.FormControl = FormControl;
if (_utils.__DEV__) {
  FormControl.displayName = "FormGroup";
}
//# sourceMappingURL=index.js.map