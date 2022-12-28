import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
import { UseImageProps } from "./use-image";
interface INativeImageProps extends DefaultProps {
    /**
     * The native HTML `width` attribute to the passed to the `img`
     */
    htmlWidth?: string | number;
    /**
     * The native HTML `height` attribute to the passed to the `img`
     */
    htmlHeight?: string | number;
}
interface NativeImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, INativeImageProps {
}
export type { NativeImageProps };
export declare const NativeImage: React.ForwardRefExoticComponent<NativeImageProps & React.RefAttributes<any>>;
interface IImageProps extends Omit<NativeImageProps, "onError"> {
    fallbackSrc?: string;
    fallback?: React.ReactElement;
    loading?: "eager" | "lazy";
    ignoreFallback?: boolean;
    as?: React.ElementType;
}
interface ImageProps extends UseImageProps, IImageProps {
}
export declare const Image: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<unknown>>;
export type { ImageProps };
