import styled from 'styled-components';
import closeIcon from "@/resources/icons/commons/icon_modal_close.png"
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { alertState } from '@/global/modal';

const AlertModal = () => {
    const alertModal = useRecoilValue(alertState);
    const resetAlertModal= useResetRecoilState(alertState);
    const  { modalProps, isShow } = alertModal;
    const closeHandler = () => {
        if (modalProps.handleButton) {
            modalProps.handleButton();
        }
        resetAlertModal();
    };


    // 얼럿창 사용 예시
    // const setAlertModal = useSetRecoilState(alertState);
    // const alertModalHandler = () => {
    //     setAlertModal({
    //         isShow : true,
    //         modalProps: {
    //             message: "메세지 작성",
    //             message2: "두번째줄!!!",
    //             buttonName: "확인",
    //             handleButton: () => {}
    //         }
    //     })
    // };
    
    return (
        <>
            {
                isShow &&
                <ModalBackground>
                    <AlertmWrap>
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
                                {modalProps.buttonName}
                            </button>
                        </ButtonBox>
                    </AlertmWrap>
                </ModalBackground>
            }
        </>
    );
};

export default AlertModal;

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
const AlertmWrap = styled.div`
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
    text-align: center;
    button{
            background-color: #ff4d15;
            background-color: var(--col_acc);
            border: 1px solid #ff4d15;
            border: 1px solid var(--col_acc);
            border-radius: 5px;
            box-sizing: border-box;
            color: #fff;
            font-size: 18px;
            height: 55px;
            line-height: 55px;
            text-align: center;
            width: 300px;
        }

    @media screen and (max-width: 768px){
        button{
            font-size: 14px;
            height: 40px;
            line-height: 40px;
            width: 150px;
        }
    }
`