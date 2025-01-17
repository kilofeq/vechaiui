"use strict";

exports.__esModule = true;
exports.NativeImage = exports.Image = void 0;
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
var _useImage = require("./use-image");
var _excluded = ["htmlWidth", "htmlHeight", "alt"],
  _excluded2 = ["fallbackSrc", "fallback", "src", "loading", "ignoreFallback", "crossOrigin", "as"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var NativeImage = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var htmlWidth = props.htmlWidth,
    htmlHeight = props.htmlHeight,
    alt = props.alt,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  return /*#__PURE__*/React.createElement("img", _extends({
    width: htmlWidth,
    height: htmlHeight,
    ref: ref,
    alt: alt
  }, rest));
});
exports.NativeImage = NativeImage;
if (_utils.__DEV__) {
  NativeImage.displayName = "NativeImage";
}
var Image = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var fallbackSrc = props.fallbackSrc,
    fallback = props.fallback,
    src = props.src,
    loading = props.loading,
    ignoreFallback = props.ignoreFallback,
    crossOrigin = props.crossOrigin,
    _props$as = props.as,
    Comp = _props$as === void 0 ? NativeImage : _props$as,
    rest = _objectWithoutPropertiesLoose(props, _excluded2);

  /**
   * Defer to native `img` tag if `loading` prop is passed
   * @see https://github.com/chakra-ui/chakra-ui/issues/1027
   */
  var shouldIgnore = loading != null || ignoreFallback;
  var status = (0, _useImage.useImage)(_extends({}, props, {
    ignoreFallback: shouldIgnore
  }));
  var shared = _extends({
    ref: ref
  }, shouldIgnore ? rest : (0, _utils.omit)(rest, ["onError", "onLoad"]));
  if (status !== "loaded") {
    /**
     * If user passed a custom fallback component,
     * let's render it here.
     */
    if (fallback) return fallback;
    return /*#__PURE__*/React.createElement(Comp, _extends({
      src: fallbackSrc
    }, shared));
  }
  return /*#__PURE__*/React.createElement(Comp, _extends({
    src: src,
    crossOrigin: crossOrigin,
    loading: loading
  }, shared));
});
exports.Image = Image;
if (_utils.__DEV__) {
  Image.displayName = "Image";
}
//# sourceMappingURL=image.js.map