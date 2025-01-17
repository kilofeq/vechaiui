import * as React from "react";
export function useTimeout(callback, delay) {
  var savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      var id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}
//# sourceMappingURL=useTimeout.js.map