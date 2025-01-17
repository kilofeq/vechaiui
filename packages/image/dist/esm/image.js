var _excluded = ["htmlWidth", "htmlHeight", "alt"],
  _excluded2 = ["fallbackSrc", "fallback", "src", "loading", "ignoreFallback", "crossOrigin", "as"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { omit, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
import { useImage } from "./use-image";
export var NativeImage = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      htmlWidth,
      htmlHeight,
      alt
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  return /*#__PURE__*/React.createElement("img", _extends({
    width: htmlWidth,
    height: htmlHeight,
    ref: ref,
    alt: alt
  }, rest));
});
if (__DEV__) {
  NativeImage.displayName = "NativeImage";
}
export var Image = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      fallbackSrc,
      fallback,
      src,
      loading,
      ignoreFallback,
      crossOrigin,
      as: Comp = NativeImage
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded2);

  /**
   * Defer to native `img` tag if `loading` prop is passed
   * @see https://github.com/chakra-ui/chakra-ui/issues/1027
   */
  var shouldIgnore = loading != null || ignoreFallback;
  var status = useImage(_extends({}, props, {
    ignoreFallback: shouldIgnore
  }));
  var shared = _extends({
    ref
  }, shouldIgnore ? rest : omit(rest, ["onError", "onLoad"]));
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
if (__DEV__) {
  Image.displayName = "Image";
}
//# sourceMappingURL=image.js.map