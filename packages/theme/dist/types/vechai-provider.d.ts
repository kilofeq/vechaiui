import { WithCSSVar, Dict } from "@vechaiui/utils";
import * as React from "react";
import { VechaiTheme, VechaiThemeOverride } from "./types";
interface DictVechaiTheme extends Dict {
}
export declare const VechaiContext: React.Context<{
    theme: WithCSSVar<DictVechaiTheme>;
} | undefined>;
export interface VechaiProviderProps {
    children: React.ReactNode;
    theme?: VechaiTheme;
    density?: "compact" | "comfortable" | "unset";
    colorScheme?: string;
    cssVarsRoot?: string;
}
export declare function VechaiProvider({ theme, colorScheme, density, cssVarsRoot, children, }: VechaiProviderProps): JSX.Element;
export declare function useVechai<T extends object = Dict>(): WithCSSVar<T>;
export declare function extendTheme(themeOverride: VechaiThemeOverride): VechaiTheme;
export {};
