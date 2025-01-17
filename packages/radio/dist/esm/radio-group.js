var _excluded = ["onChange", "name", "color", "size", "defaultValue", "inline", "value", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useId } from "@reach/auto-id";
import { cx, getValidChildren, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { cloneElement, useImperativeHandle, useRef, useState } from "react";
export var RadioGroup = /*#__PURE__*/React.forwardRef((props, ref) => {
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
  var {
    current: isControlled
  } = useRef(valueProp != null);
  var [value, setValue] = useState(defaultValue || null);
  var _value = isControlled ? valueProp : value;
  var rootRef = useRef(null);
  var _onChange = event => {
    if (!isControlled) {
      setValue(event.target.value);
    }
    if (onChange) {
      onChange(event, event.target.value);
    }
  };

  // If no name is passed, we'll generate a random, unique name
  var fallbackName = "radio-" + useId();
  var _name = name || fallbackName;
  var validChildren = getValidChildren(children);
  var clones = validChildren.map((child, index) => {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: cx(inline ? "inline-block" : "block")
    }, /*#__PURE__*/cloneElement(child, {
      size: child.props.size || size,
      color: child.props.color || color,
      name: _name,
      onChange: _onChange,
      checked: child.props.value === _value
    }));
  });

  // Calling focus() on the radiogroup should focus on the selected option or first enabled option
  useImperativeHandle(ref, () => ({
    focus: () => {
      var _rootRef$current;
      var input = ((_rootRef$current = rootRef.current) == null ? void 0 : _rootRef$current.querySelector("input:not(:disabled):checked")) || null;
      if (!input) {
        var _rootRef$current2;
        input = ((_rootRef$current2 = rootRef.current) == null ? void 0 : _rootRef$current2.querySelector("input:not(:disabled)")) || null;
      }
      if (input) {
        input.focus();
      }
    }
  }), []);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: rootRef,
    role: "radiogroup"
  }, rest), clones);
});
if (__DEV__) {
  RadioGroup.displayName = "RadioGroup";
}
//# sourceMappingURL=radio-group.js.map