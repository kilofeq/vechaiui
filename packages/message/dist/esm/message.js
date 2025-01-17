import { Icon, InfoIcon, XCricleIcon, CheckCircleIcon, ExclamationIcon } from "@vechaiui/icon";
import { createToast } from "@vechaiui/toast";
import { cx as clsx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";
var statuses = {
  info: {
    icon: InfoIcon,
    cx: "message-icon-info",
    label: "info"
  },
  success: {
    icon: CheckCircleIcon,
    cx: "message-icon-success",
    label: "check-circle"
  },
  error: {
    icon: XCricleIcon,
    cx: "message-icon-error",
    label: "x-circle"
  },
  warning: {
    icon: ExclamationIcon,
    cx: "message-icon-warning",
    label: "exclamationIcon"
  }
};
var Message = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
    message,
    className,
    icon: customIcon,
    status = ""
  } = _ref;
  var {
    icon,
    cx,
    label
  } = statuses[status] || {};
  return /*#__PURE__*/React.createElement("div", {
    className: clsx("message", className),
    ref: ref
  }, (icon && cx || customIcon) && (customIcon ? customIcon : /*#__PURE__*/React.createElement(Icon, {
    as: icon,
    label: label,
    className: clsx("message-icon w-5 h-5", cx)
  })), /*#__PURE__*/React.createElement("span", null, message));
});
if (__DEV__) {
  Message.displayName = "Message";
}
export var useMessage = createToast(Message);
//# sourceMappingURL=message.js.map