import { createRoot } from 'react-dom/client';
import * as React from "react";
import ToastManager from "./ToastManager";
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
var PORTAL_ID = "react-toast";
class Toaster {
  constructor() {
    var _this = this;
    this.createNotification = void 0;
    this.removeAll = void 0;
    this.closeToast = void 0;
    this.closeAll = () => {
      if (this.removeAll) {
        this.removeAll();
      }
    };
    this.bindNotify = (fn, removeAll, closeToast) => {
      this.createNotification = fn;
      this.removeAll = removeAll;
      this.closeToast = closeToast;
    };
    this.notify = function (message, options) {
      if (options === void 0) {
        options = {};
      }
      if (_this.createNotification) {
        return _this.createNotification(message, options);
      }
    };
    this.close = (id, position) => {
      if (this.closeToast) {
        this.closeToast(id, position);
      }
    };
    if (!isBrowser) {
      return;
    }
    var portalElement;
    var existingPortalElement = document.getElementById(PORTAL_ID);
    if (existingPortalElement) {
      portalElement = existingPortalElement;
    } else {
      var el = document.createElement("div");
      el.id = PORTAL_ID;
      el.className = "Toaster";
      if (document.body != null) {
        document.body.appendChild(el);
      }
      portalElement = el;
    }
    var root = createRoot(portalElement);
    root.render( /*#__PURE__*/React.createElement(ToastManager, {
      notify: this.bindNotify
    }));
  }
}
export default Toaster;
//# sourceMappingURL=Toast.js.map