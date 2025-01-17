var _excluded = ["color", "variant", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { cx, __DEV__ } from "@vechaiui/utils";
import { Icon, XIcon } from "@vechaiui/icon";
import * as React from "react";
import { useAlertClass, useAlertCloseButton } from "./styles";
var AlertContext = /*#__PURE__*/React.createContext({});
var useAlertContext = () => {
  var context = React.useContext(AlertContext);
  if (context === undefined) {
    throw new Error("useAlertContext must be used within a AlertContextProvider");
  }
  return context;
};
export var AlertCloseButton = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
    className
  } = _ref;
  var {
    color
  } = useAlertContext();
  var classes = useAlertCloseButton();
  return /*#__PURE__*/React.createElement("button", {
    ref: ref,
    "data-color": color ? color : undefined,
    className: cx(classes, className)
  }, /*#__PURE__*/React.createElement(Icon, {
    as: XIcon,
    label: "x",
    className: "inline-block w-4 h-4 text-current align-text-bottom fill-current"
  }));
});
if (__DEV__) {
  AlertCloseButton.displayName = "AlertCloseButton";
}
export var Alert = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      color = "primary",
      variant = "subtle",
      className
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var classes = useAlertClass({
    variant
  });
  var context = {
    color
  };
  return /*#__PURE__*/React.createElement(AlertContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    ref: ref,
    "data-color": color ? color : undefined,
    className: cx(classes, className)
  }, rest)));
});
if (__DEV__) {
  Alert.displayName = "Alert";
}
//# sourceMappingURL=alert.js.map