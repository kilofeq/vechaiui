import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
interface UseFormControlProps {
    /** If `true`, this prop is passed to its children. */
    required?: boolean;
    /** If `true`, this prop is passed to its children. */
    disabled?: boolean;
    /** If `true`, this prop is passed to its children. */
    invalid?: boolean;
    /** If `true`, this prop is passed to its children. */
    readOnly?: boolean;
    /** The `id` to use for the form control. */
    id?: string;
}
interface UseFormControlData extends UseFormControlProps {
    labelId?: string;
    errorId?: string;
    helpTextId?: string;
}
interface IFormControlProps extends DefaultProps, UseFormControlProps {
    children?: React.ReactNode;
}
export interface FormControlProps extends React.HTMLAttributes<HTMLDivElement>, IFormControlProps {
}
export declare const useFormControl: (props: UseFormControlProps) => UseFormControlData;
export declare const FormControl: React.ForwardRefExoticComponent<FormControlProps & React.RefAttributes<HTMLDivElement>>;
export {};
