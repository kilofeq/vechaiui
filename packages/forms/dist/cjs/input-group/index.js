"use strict";

exports.__esModule = true;
exports.InputGroup = void 0;
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _input = require("../input/input");
var _inputElement = require("../input-element");
var _inputAddon = require("../input-addon");
var _excluded = ["children", "className", "size"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
var InputGroup = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
    className = props.className,
    _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var height = inputSizes[size];
  var pl;
  var pr;
  var rl;
  var rr;
  var validChildren = (0, _utils.getValidChildren)(children);
  validChildren.forEach(function (child) {
    if (child.type === _inputElement.InputLeftElement) {
      pl = plSizes[height];
    }
    if (child.type === _inputElement.InputRightElement) {
      pr = prSizes[height];
    }
    if (child.type === _inputAddon.InputLeftAddon) {
      rl = "rounded-l-none";
    }
    if (child.type === _inputAddon.InputRightAddon) {
      rr = "rounded-r-none";
    }
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    role: "group",
    className: (0, _utils.cx)("form-input-group", className)
  }, rest), validChildren.map(function (child) {
    if (child.type === _input.Input) {
      return /*#__PURE__*/React.cloneElement(child, {
        size: size,
        className: (0, _utils.cx)(pl, pr, rl, rr, child.props.className)
      });
    }
    return /*#__PURE__*/React.cloneElement(child, {
      size: size
    });
  }));
});
exports.InputGroup = InputGroup;
if (_utils.__DEV__) {
  InputGroup.displayName = "InputGroup";
}
//# sourceMappingURL=index.js.map