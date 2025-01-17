var _excluded = ["size", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import useSpinClass from "./styles";
export var Spinner = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      size = "sm",
      className
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var classes = useSpinClass({
    size
  });
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    className: cx(classes, className),
    fill: "none",
    viewBox: "0 0 66 66"
  }, rest), /*#__PURE__*/React.createElement("circle", {
    cx: "33",
    cy: "33",
    fill: "none",
    r: "28",
    stroke: "currentColor",
    strokeWidth: "10",
    className: "opacity-30"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "33",
    cy: "33",
    fill: "none",
    r: "28",
    stroke: "currentColor",
    strokeDasharray: "40, 134",
    strokeDashoffset: "325",
    strokeLinecap: "round",
    strokeWidth: "10",
    className: "opacity-70"
  }));
});
if (__DEV__) {
  Spinner.displayName = "Spinner";
}
//# sourceMappingURL=spinner.js.map