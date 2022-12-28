import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
interface IFormErrorMessageProps extends DefaultProps {
    children?: React.ReactNode;
}
export interface FormErrorMessageProps extends React.HTMLAttributes<HTMLDivElement>, IFormErrorMessageProps {
}
export declare const FormErrorMessage: React.ForwardRefExoticComponent<FormErrorMessageProps & React.RefAttributes<HTMLParagraphElement>>;
export {};
