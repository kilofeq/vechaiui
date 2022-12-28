import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
interface IKbdProps extends DefaultProps {
}
export interface KbdProps extends React.HTMLAttributes<HTMLElement>, IKbdProps {
}
export declare const Kbd: React.ForwardRefExoticComponent<KbdProps & React.RefAttributes<HTMLElement>>;
export {};
