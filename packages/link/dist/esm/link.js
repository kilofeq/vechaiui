var _excluded = ["disabled", "external", "onClick", "className", "as"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
export var Link = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      disabled,
      external,
      onClick,
      className,
      as: Comp = "a"
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var externalProps = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : null;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    ref: ref,
    tabIndex: disabled ? -1 : undefined,
    "aria-disabled": disabled,
    onClick: disabled ? event => event.preventDefault() : onClick,
    className: cx("link", disabled && "link-disabled", className)
  }, externalProps, rest));
});
if (__DEV__) {
  Link.displayName = "Link";
}
//# sourceMappingURL=link.js.map