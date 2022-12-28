"use strict";

exports.__esModule = true;
exports.lightScheme = exports.defaultTheme = exports.darkScheme = void 0;
var _colors = require("./colors");
var _density = require("./density");
// light theme
var lightScheme = {
  id: "light",
  type: "light",
  colors: {
    bg: {
      base: _colors.colors.white,
      fill: _colors.colors.gray["100"]
    },
    text: {
      foreground: _colors.colors.gray["900"],
      muted: _colors.colors.gray["700"]
    },
    primary: _colors.colors.teal,
    neutral: _colors.colors.gray
  }
};

// dark theme
exports.lightScheme = lightScheme;
var darkScheme = {
  id: "light",
  type: "dark",
  colors: {
    bg: {
      base: _colors.colors.gray["800"],
      fill: _colors.colors.gray["900"]
    },
    text: {
      foreground: _colors.colors.gray["100"],
      muted: _colors.colors.gray["300"]
    },
    primary: _colors.colors.teal,
    neutral: _colors.colors.gray
  }
};
exports.darkScheme = darkScheme;
var defaultTheme = {
  cursor: "default",
  rounded: "0.375rem",
  // md
  colorSchemes: {
    light: lightScheme,
    dark: darkScheme
  },
  density: {
    compact: _density.compactDensity,
    comfortable: _density.comfortableDensity,
    unset: {}
  },
  config: {}
};
exports.defaultTheme = defaultTheme;
//# sourceMappingURL=default-theme.js.map