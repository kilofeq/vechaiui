"use strict";

exports.__esModule = true;
exports.VechaiContext = void 0;
exports.VechaiProvider = VechaiProvider;
exports.extendTheme = extendTheme;
exports.useVechai = useVechai;
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _lodash = _interopRequireDefault(require("lodash.set"));
var _react2 = require("@emotion/react");
var _defaultTheme = require("./default-theme");
var _createThemeVars = require("./create-theme-vars");
var _utils2 = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var VechaiContext = /*#__PURE__*/(0, React.createContext)(undefined);
exports.VechaiContext = VechaiContext;
VechaiContext.displayName = "VechaiContext";
function VechaiProvider(_ref) {
  var _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? _defaultTheme.defaultTheme : _ref$theme,
    _ref$colorScheme = _ref.colorScheme,
    colorScheme = _ref$colorScheme === void 0 ? "light" : _ref$colorScheme,
    _ref$density = _ref.density,
    density = _ref$density === void 0 ? "comfortable" : _ref$density,
    _ref$cssVarsRoot = _ref.cssVarsRoot,
    cssVarsRoot = _ref$cssVarsRoot === void 0 ? ":host, :root" : _ref$cssVarsRoot,
    children = _ref.children;
  var computedTheme = (0, React.useMemo)(function () {
    var omittedTheme = (0, _utils.omit)(theme, ["colorSchemes", "density"]);
    var _ref2 = theme.colorSchemes[colorScheme] || {},
      colors = _ref2.colors,
      type = _ref2.type;
    if (_utils2.isBrowser) {
      if (type === "dark") document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark");
    }
    (0, _utils.walkObject)(colors, function (value, path) {
      if (typeof value !== "string") return;
      var rgb = (0, _utils.toRGB)(value);
      if (rgb) (0, _lodash["default"])(colors, path, rgb.join(","));
    });
    var normalizedTheme = _extends({}, omittedTheme, {
      density: theme.density[density],
      colors: colors
    });
    return (0, _createThemeVars.toCSSVar)(normalizedTheme);
  }, [theme, colorScheme, density]);
  var value = (0, React.useMemo)(function () {
    return {
      theme: computedTheme
    };
  }, [computedTheme]);
  return /*#__PURE__*/React.createElement(VechaiContext.Provider, {
    value: value
  }, /*#__PURE__*/React.createElement(_react2.Global, {
    styles: function styles() {
      var _ref3;
      return _ref3 = {}, _ref3[cssVarsRoot] = computedTheme.__cssVars, _ref3;
    }
  }), children);
}
function useVechai() {
  var theme = (0, React.useContext)(VechaiContext);
  if (!theme) {
    throw Error("useVechai: `theme` is undefined. Seems you forgot to wrap your app in `<VechaiProvider />`");
  }
  return theme;
}
function extendTheme(themeOverride) {
  return (0, _utils.deepmerge)(_defaultTheme.defaultTheme, themeOverride, {
    clone: true
  });
}
//# sourceMappingURL=vechai-provider.js.map