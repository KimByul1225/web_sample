import { atom } from "recoil";

interface IConfirmModal {
    isShow: boolean;
    modalProps: {
        title?: string;
        message?: string;
        message2?: string | null;
        cancelText?: string;
        confirmText?: string;
        handleClose?: (...arg: any[]) => any;
        handleConfirm?: (...arg: any[]) => any;
    }
}


export const confirmState = atom<IConfirmModal>({
    key: "confirmState",
    default: {
        isShow: false,
        modalProps: {
            message: "no message",
            message2: "no message",
            confirmText: "no Text",
            cancelText: "No",
            handleConfirm: () => {
                console.log("Yes!");
            },
            handleClose: () => {
                console.log("No!");
            }
        }
    }
})


export const alertState = atom<any>({
    key: "alertState",
    default: {

    }
})