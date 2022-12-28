import * as React from "react";
import { TagProps, TagCloseButton, TagCloseButtonProps, TagLabel, TagLabelProps } from "./tag";
interface Tag extends React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLDivElement>> {
    CloseButton: typeof TagCloseButton;
    Label: typeof TagLabel;
}
declare const Tag: Tag;
export type { TagProps, TagLabelProps, TagCloseButtonProps };
export { Tag, TagLabel, TagCloseButton };
