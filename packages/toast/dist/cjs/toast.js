"use strict";

exports.__esModule = true;
exports.createToast = createToast;
var _toastedNotes = require("@vechaiui/toasted-notes");
var React = _interopRequireWildcard(require("react"));
var _excluded = ["position", "duration", "render"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function createToast(Comp) {
  return function () {
    var notify = (0, React.useCallback)(function (_ref) {
      var _ref$position = _ref.position,
        position = _ref$position === void 0 ? "bottom" : _ref$position,
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 5000 : _ref$duration,
        render = _ref.render,
        rest = _objectWithoutPropertiesLoose(_ref, _excluded);
      var options = {
        position: position,
        duration: duration
      };
      if (render) {
        return _toastedNotes.toaster.notify(function (_ref2) {
          var onClose = _ref2.onClose,
            id = _ref2.id;
          return render(_extends({
            onClose: onClose,
            id: id
          }, rest));
        }, options);
      }
      _toastedNotes.toaster.notify(function (_ref3) {
        var onClose = _ref3.onClose,
          id = _ref3.id;
        return /*#__PURE__*/React.createElement(Comp, _extends({
          onClose: onClose,
          id: id
        }, rest));
      }, options);
    }, []);
    return notify;
  };
}
//# sourceMappingURL=toast.js.map