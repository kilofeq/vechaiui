import * as React from "react";
var Alert = _ref => {
  var {
    id,
    title,
    onClose
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: "Toaster__alert"
  }, typeof title === "string" ? /*#__PURE__*/React.createElement("div", {
    className: "Toaster__alert_text"
  }, title) : title, onClose && /*#__PURE__*/React.createElement(Close, {
    onClose: onClose
  }));
};
var Close = _ref2 => {
  var {
    onClose
  } = _ref2;
  return /*#__PURE__*/React.createElement("button", {
    className: "Toaster__alert_close",
    type: "button",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"));
};
export default Alert;
//# sourceMappingURL=Alert.js.map