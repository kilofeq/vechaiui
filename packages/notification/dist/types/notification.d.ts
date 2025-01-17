import { useToastOptions } from "@vechaiui/toast";
type OmittedTypes = "message";
export interface NotificationProps extends Omit<useToastOptions, OmittedTypes> {
}
export declare const useNotification: () => ({ position, duration, render, ...rest }: useToastOptions) => any;
export {};
