import { MessageOptionalOptions } from "./ToastManager";
import { MessageProp, PositionsType } from "./Message";
declare class Toaster {
    createNotification?: Function;
    removeAll?: Function;
    closeToast?: Function;
    constructor();
    closeAll: () => void;
    bindNotify: (fn: Function, removeAll: Function, closeToast: Function) => void;
    notify: (message: MessageProp, options?: MessageOptionalOptions) => any;
    close: (id: number, position: PositionsType) => void;
}
export default Toaster;
