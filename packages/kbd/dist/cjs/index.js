"use strict";

exports.__esModule = true;
var _kbd = require("./kbd");
Object.keys(_kbd).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _kbd[key]) return;
  exports[key] = _kbd[key];
});
//# sourceMappingURL=index.js.map