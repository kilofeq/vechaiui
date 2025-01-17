var _excluded = ["position", "duration", "render"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { toaster } from "@vechaiui/toasted-notes";
import * as React from "react";
import { useCallback } from "react";
export function createToast(Comp) {
  return function () {
    var notify = useCallback(_ref => {
      var {
          position = "bottom",
          duration = 5000,
          render
        } = _ref,
        rest = _objectWithoutPropertiesLoose(_ref, _excluded);
      var options = {
        position,
        duration
      };
      if (render) {
        return toaster.notify(_ref2 => {
          var {
            onClose,
            id
          } = _ref2;
          return render(_extends({
            onClose,
            id
          }, rest));
        }, options);
      }
      toaster.notify(_ref3 => {
        var {
          onClose,
          id
        } = _ref3;
        return /*#__PURE__*/React.createElement(Comp, _extends({
          onClose,
          id
        }, rest));
      }, options);
    }, []);
    return notify;
  };
}
//# sourceMappingURL=toast.js.map