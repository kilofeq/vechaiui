function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
import { Message } from "./Message";
var defaultState = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
};
export default class ToastManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.notify = (message, options) => {
      var toast = this.createToastState(message, options);
      var {
        position
      } = toast;

      // prepend the toast for toasts positioned at the top of
      // the screen, otherwise append it.
      var isTop = position.includes("top");
      this.setState(prev => {
        return _extends({}, prev, {
          [position]: isTop ? [toast, ...prev[position]] : [...prev[position], toast]
        });
      });
      return {
        id: toast.id,
        position: toast.position
      };
    };
    this.closeAll = () => {
      Object.keys(this.state).forEach(pos => {
        var p = pos;
        var position = this.state[p];
        position.forEach(toast => {
          this.closeToast(toast.id, p);
        });
      });
    };
    this.createToastState = (message, options) => {
      var id = ++ToastManager.idCounter;

      // a bit messy, but object.position returns a number because
      // it's a method argument.
      var position = options.hasOwnProperty("position") && typeof options.position === "string" ? options.position : "top";
      return {
        id,
        message,
        position,
        showing: true,
        duration: typeof options.duration === "undefined" ? 5000 : options.duration,
        onRequestRemove: () => this.removeToast(String(id), position),
        type: options.type
      };
    };
    this.closeToast = (id, position) => {
      this.setState(prev => {
        return _extends({}, prev, {
          [position]: prev[position].map(toast => {
            if (toast.id !== id) return toast;
            return _extends({}, toast, {
              requestClose: true
            });
          })
        });
      });
    };
    this.removeToast = (id, position) => {
      this.setState(prev => {
        return _extends({}, prev, {
          [position]: prev[position].filter(toast => toast.id !== id)
        });
      });
    };
    this.getStyle = position => {
      var style = {
        maxWidth: "560px",
        position: "fixed",
        zIndex: 5500,
        pointerEvents: "none"
      };
      if (position === "top" || position === "bottom") {
        style.margin = "0 auto";
        style.textAlign = "center";
      }
      if (position.includes("top")) {
        style.top = 0;
      }
      if (position.includes("bottom")) {
        style.bottom = 0;
      }
      if (!position.includes("left")) {
        style.right = 0;
      }
      if (!position.includes("right")) {
        style.left = 0;
      }
      return style;
    };
    props.notify(this.notify, this.closeAll, this.closeToast);
  }
  render() {
    return Object.keys(this.state).map(position => {
      var pos = position;
      var toasts = this.state[pos];
      return /*#__PURE__*/React.createElement("span", {
        key: position,
        className: "Toaster__manager-" + pos,
        style: this.getStyle(pos)
      }, toasts.map(toast => {
        return /*#__PURE__*/React.createElement(Message, _extends({}, toast, {
          position: pos,
          key: toast.id
        }));
      }));
    });
  }
}
ToastManager.idCounter = 0;
//# sourceMappingURL=ToastManager.js.map