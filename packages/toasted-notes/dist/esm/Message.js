function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
import { useTransition, animated } from "react-spring";
import ReachAlert from "@reach/alert";
import Alert from "./Alert";
import { useTimeout } from "./useTimeout";
var getStyle = position => {
  var style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };
  if (position.includes("right")) {
    style.alignItems = "flex-end";
  } else if (position.includes("left")) {
    style.alignItems = "flex-start";
  }
  return style;
};
export var Message = _ref => {
  var {
    id,
    message,
    position,
    onRequestRemove,
    requestClose = false,
    duration = 30000
  } = _ref;
  var container = React.useRef(null);
  var [timeout, setTimeout] = React.useState(duration);
  var [localShow, setLocalShow] = React.useState(true);
  var isFromTop = position === "top-left" || position === "top-right" || position === "top";
  useTimeout(close, timeout);
  var animation = {
    config: {
      mass: 1,
      tension: 185,
      friction: 26
    },
    from: {
      opacity: 1,
      height: 0,
      transform: "translateY(" + (isFromTop ? "-100%" : 0) + ") scale(1)"
    },
    enter: () => next => next({
      opacity: 1,
      height: container.current.getBoundingClientRect().height,
      transform: "translateY(0) scale(1)"
    }),
    leave: {
      opacity: 0,
      height: 0,
      transform: "translateY(0 scale(0.9)"
    },
    onRest
  };
  var transition = useTransition(localShow, animation);
  var style = React.useMemo(() => getStyle(position), [position]);
  function onMouseEnter() {
    setTimeout(null);
  }
  function onMouseLeave() {
    setTimeout(duration);
  }
  function onRest() {
    if (!localShow) {
      onRequestRemove();
    }
  }
  function close() {
    setLocalShow(false);
  }
  React.useEffect(() => {
    if (requestClose) {
      setLocalShow(false);
    }
  }, [requestClose]);
  function renderMessage() {
    if (typeof message === "string" || /*#__PURE__*/React.isValidElement(message)) {
      return /*#__PURE__*/React.createElement(Alert, {
        id: id,
        title: message,
        onClose: close
      });
    }
    if (typeof message === "function") {
      return message({
        id,
        onClose: close
      });
    }
    return null;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, transition((props, item) => item && /*#__PURE__*/React.createElement(animated.div, {
    className: "Toaster__message",
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    style: _extends({
      opacity: props.opacity,
      height: props.height
    }, style)
  }, /*#__PURE__*/React.createElement(animated.div, {
    style: {
      transform: props.transform,
      pointerEvents: "auto"
    },
    ref: container,
    className: "Toaster__message-wrapper"
  }, /*#__PURE__*/React.createElement(ReachAlert, null, renderMessage())))));
};
//# sourceMappingURL=Message.js.map