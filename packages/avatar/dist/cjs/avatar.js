"use strict";

exports.__esModule = true;
exports.Avatar = void 0;
var _image = require("@vechaiui/image");
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _excluded = ["name", "isFullName", "className", "size"],
  _excluded2 = ["className"],
  _excluded3 = ["size", "bordered", "name", "isFullName", "src", "children", "className", "style", "onError"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var getInitials = function getInitials(name) {
  var _name$split = name.split(" "),
    firstName = _name$split[0],
    lastName = _name$split[1];
  if (firstName && lastName) {
    return "" + firstName.charAt(0) + lastName.charAt(0);
  } else {
    return firstName.charAt(0);
  }
};
var AvatarName = function AvatarName(_ref) {
  var name = _ref.name,
    isFullName = _ref.isFullName,
    className = _ref.className,
    size = _ref.size,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var avatarNameClasses = (0, _styles.useAvatarNameClass)({
    size: size
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: (0, _utils.cx)(avatarNameClasses, className),
    "aria-label": name
  }, props), name ? isFullName ? name : getInitials(name) : null);
};
if (_utils.__DEV__) {
  AvatarName.displayName = "AvatarName";
}
var DefaultAvatar = function DefaultAvatar(_ref2) {
  var className = _ref2.className,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: (0, _utils.cx)("w-full h-full", className)
  }, props), /*#__PURE__*/React.createElement("svg", {
    fill: "#fff",
    viewBox: "0 0 128 128",
    role: "img"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
  }))));
};
if (_utils.__DEV__) {
  DefaultAvatar.displayName = "DefaultAvatar";
}
var sizes = {
  "2xs": 4,
  xs: 5,
  sm: 6,
  md: 7,
  lg: 8,
  xl: 10,
  "2xl": 12,
  "3xl": 16,
  full: "full"
};
var baseSizes = {
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem"
};
var Avatar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    bordered = props.bordered,
    name = props.name,
    isFullName = props.isFullName,
    src = props.src,
    children = props.children,
    className = props.className,
    style = props.style,
    onError = props.onError,
    rest = _objectWithoutPropertiesLoose(props, _excluded3);
  var classes = (0, _styles.useAvatarClass)({
    size: size,
    bordered: bordered
  });
  var status = (0, _image.useImage)({
    src: src,
    onError: onError
  });
  var hasLoaded = status === "loaded";
  var sizeKey = sizes[size];
  var _size = baseSizes[sizeKey];
  var fontSize = "calc(" + _size + " / 2.5)";
  var renderChildren = function renderChildren() {
    if (src && hasLoaded) {
      return /*#__PURE__*/React.createElement("img", {
        className: "object-cover w-full h-full rounded-full",
        src: src,
        alt: name
      });
    }
    if (src && !hasLoaded) {
      if (name) {
        return /*#__PURE__*/React.createElement(AvatarName, {
          size: size,
          name: name,
          isFullName: isFullName
        });
      } else {
        return /*#__PURE__*/React.createElement(DefaultAvatar, {
          "aria-label": name
        });
      }
    }
    if (!src && name) {
      return /*#__PURE__*/React.createElement(AvatarName, {
        size: size,
        name: name,
        isFullName: isFullName
      });
    }
    return /*#__PURE__*/React.createElement(DefaultAvatar, {
      "aria-label": name
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: (0, _utils.cx)(classes, className),
    style: _extends({
      fontSize: fontSize,
      lineHeight: _size
    }, style)
  }, rest), renderChildren(), children);
});
exports.Avatar = Avatar;
if (_utils.__DEV__) {
  Avatar.displayName = "Avatar";
}
//# sourceMappingURL=avatar.js.map