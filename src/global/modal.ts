import { atom } from "recoil";
interface IConfirmModal {
    isShow: boolean;
    modalProps: {
        title?: string;
        message?: string;
        message2?: string | null;
        cancelButtonName?: string;
        confirmButtonName?: string;
        handleClose?: (...arg: any[]) => any;
        handleConfirm?: (...arg: any[]) => any;
    }
}
interface IAlertModal {
    isShow: boolean;
    modalProps: {
        title?: string;
        message?: string;
        message2?: string | null;
        buttonName?: string;
        handleButton?: (...arg: any[]) => any;
    }
}

export const confirmState = atom<IConfirmModal>({
    key: "confirmState",
    default: {
        isShow: false,
        modalProps: {
            message: "no message",
            message2: "no message",
            cancelButtonName: "no Text",
            confirmButtonName: "No",
            handleConfirm: () => {
            },
            handleClose: () => {
            }
        }
    }
})


export const alertState = atom<IAlertModal>({
    key: "alertState",
    default: {
        isShow: false,
        modalProps: {
            message: "no message",
            message2: "no message",
            buttonName: "No",
            handleButton: () => {
            }
        }
    }
})