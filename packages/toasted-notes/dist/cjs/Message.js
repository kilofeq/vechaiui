"use strict";

exports.__esModule = true;
exports.Message = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactSpring = require("react-spring");
var _alert = _interopRequireDefault(require("@reach/alert"));
var _Alert = _interopRequireDefault(require("./Alert"));
var _useTimeout = require("./useTimeout");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var getStyle = function getStyle(position) {
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
var Message = function Message(_ref) {
  var id = _ref.id,
    message = _ref.message,
    position = _ref.position,
    onRequestRemove = _ref.onRequestRemove,
    _ref$requestClose = _ref.requestClose,
    requestClose = _ref$requestClose === void 0 ? false : _ref$requestClose,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 30000 : _ref$duration;
  var container = React.useRef(null);
  var _React$useState = React.useState(duration),
    timeout = _React$useState[0],
    setTimeout = _React$useState[1];
  var _React$useState2 = React.useState(true),
    localShow = _React$useState2[0],
    setLocalShow = _React$useState2[1];
  var isFromTop = position === "top-left" || position === "top-right" || position === "top";
  (0, _useTimeout.useTimeout)(close, timeout);
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
    enter: function enter() {
      return function (next) {
        return next({
          opacity: 1,
          height: container.current.getBoundingClientRect().height,
          transform: "translateY(0) scale(1)"
        });
      };
    },
    leave: {
      opacity: 0,
      height: 0,
      transform: "translateY(0 scale(0.9)"
    },
    onRest: onRest
  };
  var transition = (0, _reactSpring.useTransition)(localShow, animation);
  var style = React.useMemo(function () {
    return getStyle(position);
  }, [position]);
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
  React.useEffect(function () {
    if (requestClose) {
      setLocalShow(false);
    }
  }, [requestClose]);
  function renderMessage() {
    if (typeof message === "string" || /*#__PURE__*/React.isValidElement(message)) {
      return /*#__PURE__*/React.createElement(_Alert["default"], {
        id: id,
        title: message,
        onClose: close
      });
    }
    if (typeof message === "function") {
      return message({
        id: id,
        onClose: close
      });
    }
    return null;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, transition(function (props, item) {
    return item && /*#__PURE__*/React.createElement(_reactSpring.animated.div, {
      className: "Toaster__message",
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      style: _extends({
        opacity: props.opacity,
        height: props.height
      }, style)
    }, /*#__PURE__*/React.createElement(_reactSpring.animated.div, {
      style: {
        transform: props.transform,
        pointerEvents: "auto"
      },
      ref: container,
      className: "Toaster__message-wrapper"
    }, /*#__PURE__*/React.createElement(_alert["default"], null, renderMessage())));
  }));
};
exports.Message = Message;
//# sourceMappingURL=Message.js.map