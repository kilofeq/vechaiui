import * as React from "react";
import { AvatarProps } from "./avatar";
import { AvatarGroup, AvatarGroupProps } from "./avatar-group";
interface Avatar extends React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>> {
    Group: typeof AvatarGroup;
}
declare const Avatar: Avatar;
export type { AvatarProps };
export type { AvatarGroupProps };
export { Avatar, AvatarGroup };
