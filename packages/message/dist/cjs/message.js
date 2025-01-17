"use strict";

exports.__esModule = true;
exports.useMessage = void 0;
var _icon = require("@vechaiui/icon");
var _toast = require("@vechaiui/toast");
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var statuses = {
  info: {
    icon: _icon.InfoIcon,
    cx: "message-icon-info",
    label: "info"
  },
  success: {
    icon: _icon.CheckCircleIcon,
    cx: "message-icon-success",
    label: "check-circle"
  },
  error: {
    icon: _icon.XCricleIcon,
    cx: "message-icon-error",
    label: "x-circle"
  },
  warning: {
    icon: _icon.ExclamationIcon,
    cx: "message-icon-warning",
    label: "exclamationIcon"
  }
};
var Message = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var message = _ref.message,
    className = _ref.className,
    customIcon = _ref.icon,
    _ref$status = _ref.status,
    status = _ref$status === void 0 ? "" : _ref$status;
  var _ref2 = statuses[status] || {},
    icon = _ref2.icon,
    cx = _ref2.cx,
    label = _ref2.label;
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _utils.cx)("message", className),
    ref: ref
  }, (icon && cx || customIcon) && (customIcon ? customIcon : /*#__PURE__*/React.createElement(_icon.Icon, {
    as: icon,
    label: label,
    className: (0, _utils.cx)("message-icon w-5 h-5", cx)
  })), /*#__PURE__*/React.createElement("span", null, message));
});
if (_utils.__DEV__) {
  Message.displayName = "Message";
}
var useMessage = (0, _toast.createToast)(Message);
exports.useMessage = useMessage;
//# sourceMappingURL=message.js.map