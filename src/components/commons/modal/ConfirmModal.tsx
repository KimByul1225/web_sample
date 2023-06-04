import { confirmState } from '@/global/modal';
import React from 'react';
import { useRecoilState } from 'recoil';

interface IConfirmModal {
    title?: string;
    message?: string;
    cancelText?: string;
    confirmText?: string;
    handleClose?: (...arg: any[]) => any;
    handleConfirm?: (...arg: any[]) => any;
}

const ConfirmModal = ( ) => {
    const [confirmModal, setConfirmModal] = useRecoilState(confirmState);
    const  { modalProps, isShow } = confirmModal;

    const closeHandler = () => {
        if (modalProps.handleClose) {
        modalProps.handleClose();
        }
        setConfirmModal({
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
        })
    };
    
    const confirmHandler = async () => {
        if (modalProps.handleConfirm) {
        await modalProps.handleConfirm();
        }
        setConfirmModal({
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
        })
    };

    return (
        <>
            {
                isShow &&
                <div>
                    컨펌창
                    <hr />
                    <div>{modalProps.message}</div>
                    <button onClick={closeHandler}>
                        {modalProps.cancelText}
                    </button>
                    <button onClick={confirmHandler}>
                        {modalProps.confirmText}
                    </button>
                </div>
            }
            
        </>
    );
};

export default ConfirmModal;