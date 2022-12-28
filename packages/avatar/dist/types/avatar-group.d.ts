import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
import { AvatarProps } from "./avatar";
interface IAvatarGroupProps extends DefaultProps {
    /**
     * The children of the avatar group.
     */
    children: React.ReactNode;
    /**
     * The maximum number of visible avatars
     */
    max?: number;
    size?: AvatarProps["size"];
}
export interface AvatarGroupProps extends IAvatarGroupProps, Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
}
export declare const AvatarGroup: React.FC<AvatarGroupProps>;
export {};
