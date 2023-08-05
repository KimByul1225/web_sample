import { confirmState } from '@/global/modal';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import styled from 'styled-components';
import closeIcon from "@/resources/icons/commons/icon_modal_close.png"

/**
 * @description 컨펌모달창 컴포넌트
 */

const ConfirmModal = ( ) => {
    const confirmModal = useRecoilValue(confirmState);
    const resetConfirmModal= useResetRecoilState(confirmState);
    const  { modalProps, isShow } = confirmModal;
    const closeHandler = () => {
        if (modalProps.handleClose) {
            modalProps.handleClose();
        }
        resetConfirmModal();
    };
    const confirmHandler = async () => {
        if (modalProps.handleConfirm) {
            await modalProps.handleConfirm();
        }
        resetConfirmModal();
    };

    // 컨펌창 사용 예시
    // const setConfirmModal = useSetRecoilState(confirmState);
    // const confirmModalHandler = () => {
    //     setConfirmModal({
    //         isShow : true,
    //         modalProps: {
    //             message: "메세지 작성",
    //             message2: "두번째줄!!!",
    //             confirmButtonName: "확인",
    //             cancelButtonName: "취소",
    //             handleConfirm: () => {},
    //             handleClose: () => {}
    //         }
    //     })
    // }


    return (
        <>
            {
                isShow &&
                <ModalBackground>
                    <ConfirmWrap>
                        <HeadLine>
                            <h3>확인</h3>
                            <CloseButton onClick={closeHandler}>
                                <span className="ir_so">
                                    닫기버튼
                                </span>
                            </CloseButton>
                        </HeadLine>
                        <TextBox>
                            <h4>{modalProps.message}</h4>
                            {
                                modalProps.message2 && <p>{modalProps.message2}</p>
                            }
                        </TextBox>
                        <ButtonBox>
                            <button onClick={closeHandler}>
                                {modalProps.cancelButtonName}
                            </button>

                            <button onClick={confirmHandler}>
                                {modalProps.confirmButtonName}
                            </button>
                        </ButtonBox>
                    </ConfirmWrap>
                </ModalBackground>
            }
        </>
    );
};

export default ConfirmModal;


const ModalBackground = styled.div`
    position: fixed;
    z-index: 1002;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`
const ConfirmWrap = styled.div`
    width: 520px;
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;
    border: 1px solid #BDBDBD;
    @media screen and (max-width: 768px){
        width: 320px;
    }
    
`

const HeadLine = styled.div`
    padding-bottom: 10px;
    border-bottom: 1px solid #BDBDBD;
    position: relative;
    h3{
        font-size: 24px;
        line-height: 30px;
    }
    @media screen and (max-width: 768px){
        h3{
            font-size: 18px;    
        }
    }

`

const CloseButton = styled.button`
    width: 30px;
    height: 30px;
    background: url(${closeIcon}) center no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    right: 0;
`

const TextBox = styled.div`
    min-height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    h4{
        font-size: 20px;
        font-weight: 500;
    }
    p{
        color: #828282;
        font-size: 16px;
    }
    @media screen and (max-width: 768px){
        min-height: 130px;
        h4{
            font-size: 16px;
        }
        p{
            font-size: 14px;
        }
    }
`

const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
    button{
        width: 235px;
        height: 55px;
        line-height: 55px;
        text-align: center;
        font-size: 18px;
        border-radius: 5px;
        background-color: var(--col_acc);
        border: 1px solid var(--col_acc);
        color: #fff;
        box-sizing: border-box;
    }
    button:first-child{
        color: var(--col_acc);
        background-color: #fff;
        transition: all .3s ease;
    }
    @media screen and (max-width: 768px){
        button{
            width: 135px;
            height: 40px;
            line-height: 40px;
            font-size: 14px;
        }
    }
`