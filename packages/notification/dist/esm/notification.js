import { Button } from "@vechaiui/button";
import { Icon, InfoIcon, XIcon, XCricleIcon, CheckCircleIcon, ExclamationIcon } from "@vechaiui/icon";
import { createToast } from "@vechaiui/toast";
import { cx as clsx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
var statuses = {
  info: {
    icon: InfoIcon,
    cx: "notification-icon-info",
    label: "info"
  },
  success: {
    icon: CheckCircleIcon,
    cx: "notification-icon-success",
    label: "check-circle"
  },
  error: {
    icon: XCricleIcon,
    cx: "notification-icon-error",
    label: "x-circle"
  },
  warning: {
    icon: ExclamationIcon,
    cx: "notification-icon-warning",
    label: "exclamationIcon"
  }
};
var Notification = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
    title,
    description,
    className,
    status = "",
    onClose,
    icon: customIcon,
    closeIcon: customCloseIcon,
    closeable = true,
    onUndo,
    undoText = "Undo"
  } = props;
  var {
    icon,
    cx,
    label
  } = statuses[status] || {};
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: clsx("notification", className)
  }, (icon && cx || customIcon) && /*#__PURE__*/React.createElement("span", {
    className: clsx("notification-icon", cx)
  }, customIcon ? customIcon : /*#__PURE__*/React.createElement(Icon, {
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
  }, onUndo && /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    color: "primary",
    className: "notification-action-undo",
    onClick: () => {
      onUndo();
    }
  }, undoText), closeable && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "notification-action-close-button"
  }, customCloseIcon ? customCloseIcon : /*#__PURE__*/React.createElement(Icon, {
    as: XIcon,
    label: "x",
    className: "text-current align-text-bottom h-3.5 w-3.5"
  }))));
});
if (__DEV__) {
  Notification.displayName = "Notification";
}
export var useNotification = createToast(Notification);
//# sourceMappingURL=notification.js.map