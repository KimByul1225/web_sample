import React from 'react';

interface IConfirmModal {
    title?: string;
    message?: string;
    cancelText?: string;
    confirmText?: string;
    handleClose?: (...arg: any[]) => any;
    handleConfirm?: (...arg: any[]) => any;
}

const ConfirmModal = ({
    title = "no title",
    message = "no message",
    cancelText = "취소",
    confirmText = "확인",
    handleClose,
    handleConfirm
}: IConfirmModal) => {



    const closeHandler = () => {
        if (handleClose) {
        handleClose();
        }
        //hideModal();
        console.log("hideModal");
    };
    
    const confirmHandler = async () => {
        if (handleConfirm) {
        await handleConfirm();
        }
        console.log("hideModal");
    };

    return (
        <div>

            컨펌창!!!

            <div>
                <button onClick={closeHandler}>
                    {cancelText}
                </button>
                <button onClick={confirmHandler}>
                    {confirmText}
                </button>
            </div>
            
        </div>
    );
};

export default ConfirmModal;