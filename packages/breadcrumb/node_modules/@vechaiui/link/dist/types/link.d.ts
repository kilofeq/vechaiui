import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
interface LinkProps extends DefaultProps {
    disabled?: boolean;
    external?: boolean;
    as?: React.ElementType;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    children?: React.ReactNode;
}
export declare const Link: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<unknown>>;
export type { LinkProps };
