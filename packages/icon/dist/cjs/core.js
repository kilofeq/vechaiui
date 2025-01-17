"use strict";

exports.__esModule = true;
exports.XIcon = exports.XCricleIcon = exports.SelectorIcon = exports.QuestionCircleIcon = exports.InfoIcon = exports.ExclamationIcon = exports.ChevronUpIcon = exports.CheckCircleIcon = void 0;
var React = _interopRequireWildcard(require("react"));
var _excluded = ["color"],
  _excluded2 = ["color"],
  _excluded3 = ["color"],
  _excluded4 = ["color"],
  _excluded5 = ["color"],
  _excluded6 = ["color"],
  _excluded7 = ["color"],
  _excluded8 = ["color"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var QuestionCircleIcon = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
});
exports.QuestionCircleIcon = QuestionCircleIcon;
var InfoIcon = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var _ref2$color = _ref2.color,
    color = _ref2$color === void 0 ? "currentColor" : _ref2$color,
    rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
});
exports.InfoIcon = InfoIcon;
var CheckCircleIcon = /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
  var _ref3$color = _ref3.color,
    color = _ref3$color === void 0 ? "currentColor" : _ref3$color,
    rest = _objectWithoutPropertiesLoose(_ref3, _excluded3);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
});
exports.CheckCircleIcon = CheckCircleIcon;
var XCricleIcon = /*#__PURE__*/React.forwardRef(function (_ref4, ref) {
  var _ref4$color = _ref4.color,
    color = _ref4$color === void 0 ? "currentColor" : _ref4$color,
    rest = _objectWithoutPropertiesLoose(_ref4, _excluded4);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
});
exports.XCricleIcon = XCricleIcon;
var XIcon = /*#__PURE__*/React.forwardRef(function (_ref5, ref) {
  var _ref5$color = _ref5.color,
    color = _ref5$color === void 0 ? "currentColor" : _ref5$color,
    rest = _objectWithoutPropertiesLoose(_ref5, _excluded5);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  }));
});
exports.XIcon = XIcon;
var ExclamationIcon = /*#__PURE__*/React.forwardRef(function (_ref6, ref) {
  var _ref6$color = _ref6.color,
    color = _ref6$color === void 0 ? "currentColor" : _ref6$color,
    rest = _objectWithoutPropertiesLoose(_ref6, _excluded6);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  }));
});
exports.ExclamationIcon = ExclamationIcon;
var SelectorIcon = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
  var _ref7$color = _ref7.color,
    color = _ref7$color === void 0 ? "currentColor" : _ref7$color,
    rest = _objectWithoutPropertiesLoose(_ref7, _excluded7);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 9l4-4 4 4m0 6l-4 4-4-4"
  }));
});
exports.SelectorIcon = SelectorIcon;
var ChevronUpIcon = /*#__PURE__*/React.forwardRef(function (_ref8, ref) {
  var _ref8$color = _ref8.color,
    color = _ref8$color === void 0 ? "currentColor" : _ref8$color,
    rest = _objectWithoutPropertiesLoose(_ref8, _excluded8);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 15l7-7 7 7"
  }));
});
exports.ChevronUpIcon = ChevronUpIcon;
//# sourceMappingURL=core.js.map