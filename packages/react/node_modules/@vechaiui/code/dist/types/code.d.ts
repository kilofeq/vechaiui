import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
interface ICodeProps extends DefaultProps {
}
export interface CodeProps extends React.HTMLAttributes<HTMLElement>, ICodeProps {
}
export declare const Code: React.ForwardRefExoticComponent<CodeProps & React.RefAttributes<HTMLElement>>;
export {};
