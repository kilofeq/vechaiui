var _excluded = ["onChange", "name", "color", "size", "defaultValue", "inline", "value", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useId } from "@reach/auto-id";
import { cx, getValidChildren, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { cloneElement, useRef, useState } from "react";
export var CheckboxGroup = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      onChange,
      name,
      color,
      size,
      defaultValue,
      inline,
      value: valueProp,
      children
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var [values, setValues] = useState(defaultValue || []);
  var {
    current: isControlled
  } = useRef(valueProp != null);
  var _values = isControlled ? valueProp : values;
  var _onChange = event => {
    var {
      checked,
      value
    } = event.target;
    var newValues;
    if (checked) {
      newValues = [...(_values || []), value];
    } else {
      newValues = (_values || []).filter(val => val !== value);
    }
    !isControlled && setValues(newValues);
    onChange && onChange(newValues);
  };

  // If no name is passed, we'll generate a random, unique name
  var fallbackName = "checkbox-" + useId();
  var _name = name || fallbackName;
  var validChildren = getValidChildren(children);
  var clones = validChildren.map((child, index) => {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: cx(inline ? "inline-block" : "block", child.props.className)
    }, /*#__PURE__*/cloneElement(child, {
      size: size,
      color: child.props.color || color,
      name: _name + "-" + index,
      onChange: _onChange,
      checked: (_values || []).includes(child.props.value)
    }));
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    ref: ref
  }, rest), clones);
});
if (__DEV__) {
  CheckboxGroup.displayName = "CheckboxGroup";
}
//# sourceMappingURL=checkbox-group.js.map