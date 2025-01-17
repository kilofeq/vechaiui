"use strict";

exports.__esModule = true;
exports.useNotification = void 0;
var _button = require("@vechaiui/button");
var _icon = require("@vechaiui/icon");
var _toast = require("@vechaiui/toast");
var _utils = require("@vechaiui/utils");
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var statuses = {
  info: {
    icon: _icon.InfoIcon,
    cx: "notification-icon-info",
    label: "info"
  },
  success: {
    icon: _icon.CheckCircleIcon,
    cx: "notification-icon-success",
    label: "check-circle"
  },
  error: {
    icon: _icon.XCricleIcon,
    cx: "notification-icon-error",
    label: "x-circle"
  },
  warning: {
    icon: _icon.ExclamationIcon,
    cx: "notification-icon-warning",
    label: "exclamationIcon"
  }
};
var Notification = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var title = props.title,
    description = props.description,
    className = props.className,
    _props$status = props.status,
    status = _props$status === void 0 ? "" : _props$status,
    onClose = props.onClose,
    customIcon = props.icon,
    customCloseIcon = props.closeIcon,
    _props$closeable = props.closeable,
    closeable = _props$closeable === void 0 ? true : _props$closeable,
    onUndo = props.onUndo,
    _props$undoText = props.undoText,
    undoText = _props$undoText === void 0 ? "Undo" : _props$undoText;
  var _ref = statuses[status] || {},
    icon = _ref.icon,
    cx = _ref.cx,
    label = _ref.label;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: (0, _utils.cx)("notification", className)
  }, (icon && cx || customIcon) && /*#__PURE__*/React.createElement("span", {
    className: (0, _utils.cx)("notification-icon", cx)
  }, customIcon ? customIcon : /*#__PURE__*/React.createElement(_icon.Icon, {
    label: label,
    as: customIcon || icon,
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "notification-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "notification-content-title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "notification-content-description"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "notification-action"
  }, onUndo && /*#__PURE__*/React.createElement(_button.Button, {
    variant: "link",
    color: "primary",
    className: "notification-action-undo",
    onClick: function onClick() {
      onUndo();
    }
  }, undoText), closeable && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "notification-action-close-button"
  }, customCloseIcon ? customCloseIcon : /*#__PURE__*/React.createElement(_icon.Icon, {
    as: _icon.XIcon,
    label: "x",
    className: "text-current align-text-bottom h-3.5 w-3.5"
  }))));
});
if (_utils.__DEV__) {
  Notification.displayName = "Notification";
}
var useNotification = (0, _toast.createToast)(Notification);
exports.useNotification = useNotification;
//# sourceMappingURL=notification.js.map