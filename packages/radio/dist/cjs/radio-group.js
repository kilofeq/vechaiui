"use strict";

exports.__esModule = true;
exports.RadioGroup = void 0;
var _autoId = require("@reach/auto-id");
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _excluded = ["onChange", "name", "color", "size", "defaultValue", "inline", "value", "children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var RadioGroup = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var onChange = props.onChange,
    name = props.name,
    color = props.color,
    size = props.size,
    defaultValue = props.defaultValue,
    inline = props.inline,
    valueProp = props.value,
    children = props.children,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var _useRef = (0, React.useRef)(valueProp != null),
    isControlled = _useRef.current;
  var _useState = (0, React.useState)(defaultValue || null),
    value = _useState[0],
    setValue = _useState[1];
  var _value = isControlled ? valueProp : value;
  var rootRef = (0, React.useRef)(null);
  var _onChange = function _onChange(event) {
    if (!isControlled) {
      setValue(event.target.value);
    }
    if (onChange) {
      onChange(event, event.target.value);
    }
  };

  // If no name is passed, we'll generate a random, unique name
  var fallbackName = "radio-" + (0, _autoId.useId)();
  var _name = name || fallbackName;
  var validChildren = (0, _utils.getValidChildren)(children);
  var clones = validChildren.map(function (child, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: (0, _utils.cx)(inline ? "inline-block" : "block")
    }, /*#__PURE__*/(0, React.cloneElement)(child, {
      size: child.props.size || size,
      color: child.props.color || color,
      name: _name,
      onChange: _onChange,
      checked: child.props.value === _value
    }));
  });

  // Calling focus() on the radiogroup should focus on the selected option or first enabled option
  (0, React.useImperativeHandle)(ref, function () {
    return {
      focus: function focus() {
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
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: rootRef,
    role: "radiogroup"
  }, rest), clones);
});
exports.RadioGroup = RadioGroup;
if (_utils.__DEV__) {
  RadioGroup.displayName = "RadioGroup";
}
//# sourceMappingURL=radio-group.js.map