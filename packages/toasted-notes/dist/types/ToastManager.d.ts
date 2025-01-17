import * as React from "react";
import { PositionsType, MessageType, MessageOptions, MessageProp } from "./Message";
interface Props {
    notify: (fn: Function, closeAll: Function, close: Function) => void;
}
export interface MessageOptionalOptions {
    type?: MessageType;
    duration?: number | null;
    position?: PositionsType;
}
interface ToastArgs extends MessageOptions {
    message: MessageProp;
}
type State = {
    top: Array<ToastArgs>;
    "top-left": Array<ToastArgs>;
    "top-right": Array<ToastArgs>;
    "bottom-left": Array<ToastArgs>;
    bottom: Array<ToastArgs>;
    "bottom-right": Array<ToastArgs>;
};
export default class ToastManager extends React.Component<Props, State> {
    static idCounter: number;
    state: State;
    constructor(props: Props);
    notify: (message: MessageProp, options: MessageOptionalOptions) => {
        id: number;
        position: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right";
    };
    closeAll: () => void;
    createToastState: (message: MessageProp, options: MessageOptionalOptions) => {
        id: number;
        message: MessageProp;
        position: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right";
        showing: boolean;
        duration: number | null;
        onRequestRemove: () => void;
        type: MessageType | undefined;
    };
    closeToast: (id: string, position: PositionsType) => void;
    removeToast: (id: string, position: PositionsType) => void;
    getStyle: (position: PositionsType) => React.CSSProperties;
    render(): JSX.Element[];
}
export {};
