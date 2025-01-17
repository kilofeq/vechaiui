var _excluded = ["children", "className", "required", "disabled", "invalid", "readOnly", "id"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useId } from "@reach/auto-id";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
export var useFormControl = props => {
  var context = useFormControlContext();
  if (!context) {
    return props;
  }
  var keys = Object.keys(context);
  return keys.reduce((acc, prop) => {
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
var FormControlContext = /*#__PURE__*/React.createContext(undefined);
var useFormControlContext = () => React.useContext(FormControlContext);
export var FormControl = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      children,
      className,
      required,
      disabled,
      invalid,
      readOnly,
      id: idProp
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var classes = cx("form-control", className);
  var id = idProp || "field-" + useId();
  var labelId = id + "-label";
  var errorId = id + "-error";
  var helpTextId = id + "-helptext";
  var context = {
    required,
    disabled,
    invalid,
    readOnly,
    id,
    labelId,
    errorId,
    helpTextId
  };
  return /*#__PURE__*/React.createElement(FormControlContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    ref: ref,
    className: classes
  }, rest), children));
});
if (__DEV__) {
  FormControl.displayName = "FormGroup";
}
//# sourceMappingURL=index.js.map