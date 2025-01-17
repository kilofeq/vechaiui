var _excluded = ["className"],
  _excluded2 = ["currentPage"],
  _excluded3 = ["currentPage", "separator", "lastChild", "addSeparator", "children", "className"],
  _excluded4 = ["children", "addSeparator", "separator", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Link } from "@vechaiui/link";
import { cx, getValidChildren, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { cloneElement } from "react";
var BreadcrumbSeparator = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
      className
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    role: "presentation",
    className: cx("breadcrumb-separator", className)
  }, props));
});
if (__DEV__) {
  BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
}
var BreadcrumbLink = /*#__PURE__*/React.forwardRef((_ref2, ref) => {
  var {
      currentPage
    } = _ref2,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  var Comp = currentPage ? "span" : Link;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    ref: ref,
    "aria-current": currentPage ? "page" : undefined
  }, props));
});
if (__DEV__) {
  BreadcrumbLink.displayName = "BreadcrumbLink";
}
var BreadcrumbItem = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      currentPage,
      separator,
      lastChild,
      addSeparator,
      children,
      className
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded3);
  var validChildren = getValidChildren(children);
  var clones = validChildren.map(child => {
    if (child.type === BreadcrumbLink) {
      return /*#__PURE__*/cloneElement(child, {
        currentPage
      });
    }
    if (child.type === BreadcrumbSeparator) {
      return /*#__PURE__*/cloneElement(child, {
        children: child.props.children || separator
      });
    }
    return child;
  });
  return /*#__PURE__*/React.createElement("li", _extends({
    ref: ref,
    className: cx("breadcrumb-item", className)
  }, rest), clones, !lastChild && addSeparator && /*#__PURE__*/React.createElement(BreadcrumbSeparator, {
    children: separator
  }));
});
var Breadcrumb = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      children,
      addSeparator = true,
      separator = "/",
      className
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded4);
  var validChildren = getValidChildren(children);
  var clones = validChildren.map((child, index) => {
    return /*#__PURE__*/cloneElement(child, {
      addSeparator,
      separator,
      lastChild: validChildren.length === index + 1
    });
  });
  return /*#__PURE__*/React.createElement("nav", _extends({
    ref: ref,
    "aria-label": "breadcrumb",
    className: cx("breadcrumb", className)
  }, rest), /*#__PURE__*/React.createElement("ol", null, clones));
});
if (__DEV__) {
  Breadcrumb.displayName = "Breadcrumb";
}
export { Breadcrumb, BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator };
//# sourceMappingURL=breadcrumb.js.map