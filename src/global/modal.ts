import { atom } from "recoil";

export const confirmState = atom<any>({
    key: "confirmState",
    default: {
        isShow: false,

        modalProps: {
            message: "no message",
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