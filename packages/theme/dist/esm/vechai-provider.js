function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { walkObject, omit, toRGB, deepmerge } from "@vechaiui/utils";
import * as React from "react";
import { createContext, useContext, useMemo } from "react";
import set from "lodash.set";
import { Global } from "@emotion/react";
import { defaultTheme } from "./default-theme";
import { toCSSVar } from "./create-theme-vars";
import { isBrowser } from "./utils";
export var VechaiContext = /*#__PURE__*/createContext(undefined);
VechaiContext.displayName = "VechaiContext";
export function VechaiProvider(_ref) {
  var {
    theme = defaultTheme,
    colorScheme = "light",
    density = "comfortable",
    cssVarsRoot = ":host, :root",
    children
  } = _ref;
  var computedTheme = useMemo(() => {
    var omittedTheme = omit(theme, ["colorSchemes", "density"]);
    var {
      colors,
      type
    } = theme.colorSchemes[colorScheme] || {};
    if (isBrowser) {
      if (type === "dark") document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark");
    }
    walkObject(colors, (value, path) => {
      if (typeof value !== "string") return;
      var rgb = toRGB(value);
      if (rgb) set(colors, path, rgb.join(","));
    });
    var normalizedTheme = _extends({}, omittedTheme, {
      density: theme.density[density],
      colors
    });
    return toCSSVar(normalizedTheme);
  }, [theme, colorScheme, density]);
  var value = useMemo(() => ({
    theme: computedTheme
  }), [computedTheme]);
  return /*#__PURE__*/React.createElement(VechaiContext.Provider, {
    value: value
  }, /*#__PURE__*/React.createElement(Global, {
    styles: () => ({
      [cssVarsRoot]: computedTheme.__cssVars
    })
  }), children);
}
export function useVechai() {
  var theme = useContext(VechaiContext);
  if (!theme) {
    throw Error("useVechai: `theme` is undefined. Seems you forgot to wrap your app in `<VechaiProvider />`");
  }
  return theme;
}
export function extendTheme(themeOverride) {
  return deepmerge(defaultTheme, themeOverride, {
    clone: true
  });
}
//# sourceMappingURL=vechai-provider.js.map