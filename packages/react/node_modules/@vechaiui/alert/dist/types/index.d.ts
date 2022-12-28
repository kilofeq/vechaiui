import * as React from "react";
import { AlertProps, AlertCloseButton, AlertCloseButtonProps } from "./alert";
interface Alert extends React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>> {
    CloseButton: typeof AlertCloseButton;
}
declare const Alert: Alert;
export type { AlertProps, AlertCloseButtonProps };
export { Alert, AlertCloseButton };
