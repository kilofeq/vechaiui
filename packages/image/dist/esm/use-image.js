import { useCallback, useEffect, useRef, useState } from "react";
/**
 * React hook that loads an image in the browser,
 * and let's us know the `status` so we can show image
 * fallback if it is still `pending`
 *
 * @returns the status of the image loading progress
 *
 * @example
 *
 * ```jsx
 * function App(){
 *   const status = useImage({ src: "image.png" })
 *   return status === "loaded" ? <img src="image.png" /> : <Placeholder />
 * }
 * ```
 */
export function useImage(props) {
  var {
    src,
    srcSet,
    onLoad,
    onError,
    crossOrigin,
    sizes,
    ignoreFallback
  } = props;
  var [status, setStatus] = useState("pending");
  useEffect(() => {
    setStatus(src ? "loading" : "pending");
  }, [src]);
  var imageRef = useRef();
  var load = useCallback(() => {
    if (!src) return;
    flush();
    var img = new Image();
    img.src = src;
    if (crossOrigin) {
      img.crossOrigin = crossOrigin;
    }
    if (srcSet) {
      img.srcset = srcSet;
    }
    if (sizes) {
      img.sizes = sizes;
    }
    img.onload = event => {
      flush();
      setStatus("loaded");
      onLoad == null ? void 0 : onLoad(event);
    };
    img.onerror = error => {
      flush();
      setStatus("failed");
      onError == null ? void 0 : onError(error);
    };
    imageRef.current = img;
  }, [src, crossOrigin, srcSet, sizes, onLoad, onError]);
  var flush = () => {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = null;
    }
  };
  useEffect(() => {
    /**
     * If user opts out of the fallback/placeholder
     * logic, let's bail out.
     */
    if (ignoreFallback) return undefined;
    if (status === "loading") {
      load();
    }
    return () => {
      flush();
    };
  }, [status, load, ignoreFallback]);

  /**
   * If user opts out of the fallback/placeholder
   * logic, let's just return 'loaded'
   */
  return ignoreFallback ? "loaded" : status;
}
//# sourceMappingURL=use-image.js.map