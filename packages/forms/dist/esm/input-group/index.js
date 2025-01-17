var _excluded = ["children", "className", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { cx, getValidChildren, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { Input } from "../input/input";
import { InputLeftElement, InputRightElement } from "../input-element";
import { InputLeftAddon, InputRightAddon } from "../input-addon";
var inputSizes = {
  xl: "12",
  lg: "10",
  md: "8",
  sm: "7",
  xs: "6"
};
var plSizes = {
  12: "pl-12",
  10: "pl-10",
  8: "pl-8",
  7: "pl-7",
  6: "pl-6"
};
var prSizes = {
  12: "pr-12",
  10: "pr-10",
  8: "pr-8",
  7: "pr-7",
  6: "pr-6"
};
export var InputGroup = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      children,
      className,
      size = "md"
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var height = inputSizes[size];
  var pl;
  var pr;
  var rl;
  var rr;
  var validChildren = getValidChildren(children);
  validChildren.forEach(child => {
    if (child.type === InputLeftElement) {
      pl = plSizes[height];
    }
    if (child.type === InputRightElement) {
      pr = prSizes[height];
    }
    if (child.type === InputLeftAddon) {
      rl = "rounded-l-none";
    }
    if (child.type === InputRightAddon) {
      rr = "rounded-r-none";
    }
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    role: "group",
    className: cx("form-input-group", className)
  }, rest), validChildren.map(child => {
    if (child.type === Input) {
      return /*#__PURE__*/React.cloneElement(child, {
        size,
        className: cx(pl, pr, rl, rr, child.props.className)
      });
    }
    return /*#__PURE__*/React.cloneElement(child, {
      size
    });
  }));
});
if (__DEV__) {
  InputGroup.displayName = "InputGroup";
}
//# sourceMappingURL=index.js.map