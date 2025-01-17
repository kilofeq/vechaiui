"use strict";

exports.__esModule = true;
exports.BreadcrumbSeparator = exports.BreadcrumbLink = exports.BreadcrumbItem = exports.Breadcrumb = void 0;
var _link = require("@vechaiui/link");
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _excluded = ["className"],
  _excluded2 = ["currentPage"],
  _excluded3 = ["currentPage", "separator", "lastChild", "addSeparator", "children", "className"],
  _excluded4 = ["children", "addSeparator", "separator", "className"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var BreadcrumbSeparator = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    role: "presentation",
    className: (0, _utils.cx)("breadcrumb-separator", className)
  }, props));
});
exports.BreadcrumbSeparator = BreadcrumbSeparator;
if (_utils.__DEV__) {
  BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
}
var BreadcrumbLink = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var currentPage = _ref2.currentPage,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  var Comp = currentPage ? "span" : _link.Link;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    ref: ref,
    "aria-current": currentPage ? "page" : undefined
  }, props));
});
exports.BreadcrumbLink = BreadcrumbLink;
if (_utils.__DEV__) {
  BreadcrumbLink.displayName = "BreadcrumbLink";
}
var BreadcrumbItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var currentPage = props.currentPage,
    separator = props.separator,
    lastChild = props.lastChild,
    addSeparator = props.addSeparator,
    children = props.children,
    className = props.className,
    rest = _objectWithoutPropertiesLoose(props, _excluded3);
  var validChildren = (0, _utils.getValidChildren)(children);
  var clones = validChildren.map(function (child) {
    if (child.type === BreadcrumbLink) {
      return /*#__PURE__*/(0, React.cloneElement)(child, {
        currentPage: currentPage
      });
    }
    if (child.type === BreadcrumbSeparator) {
      return /*#__PURE__*/(0, React.cloneElement)(child, {
        children: child.props.children || separator
      });
    }
    return child;
  });
  return /*#__PURE__*/React.createElement("li", _extends({
    ref: ref,
    className: (0, _utils.cx)("breadcrumb-item", className)
  }, rest), clones, !lastChild && addSeparator && /*#__PURE__*/React.createElement(BreadcrumbSeparator, {
    children: separator
  }));
});
exports.BreadcrumbItem = BreadcrumbItem;
var Breadcrumb = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
    _props$addSeparator = props.addSeparator,
    addSeparator = _props$addSeparator === void 0 ? true : _props$addSeparator,
    _props$separator = props.separator,
    separator = _props$separator === void 0 ? "/" : _props$separator,
    className = props.className,
    rest = _objectWithoutPropertiesLoose(props, _excluded4);
  var validChildren = (0, _utils.getValidChildren)(children);
  var clones = validChildren.map(function (child, index) {
    return /*#__PURE__*/(0, React.cloneElement)(child, {
      addSeparator: addSeparator,
      separator: separator,
      lastChild: validChildren.length === index + 1
    });
  });
  return /*#__PURE__*/React.createElement("nav", _extends({
    ref: ref,
    "aria-label": "breadcrumb",
    className: (0, _utils.cx)("breadcrumb", className)
  }, rest), /*#__PURE__*/React.createElement("ol", null, clones));
});
exports.Breadcrumb = Breadcrumb;
if (_utils.__DEV__) {
  Breadcrumb.displayName = "Breadcrumb";
}
//# sourceMappingURL=breadcrumb.js.map