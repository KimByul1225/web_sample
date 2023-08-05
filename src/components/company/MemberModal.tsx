import React from 'react';
import styled from 'styled-components';
import iconClose from "@/resources/icons/commons/icon_modal_close.png"
import NoImg from "@/resources/images/commons/no_image.png"

interface IMember{
    name: string;
    jobTitle: string;
    introduction: string;
    image: string;
}

interface IMemberImage {
    memberImg: string;
}

/**
 * @description 구성원 클릭시 나타나는 모달창 컴포넌트
 */

const MemberModal = ({modalProps, showHide, closeHandler}: {modalProps: IMember, showHide: boolean, closeHandler: () => void}) => {
    
    return (
        
        <ModalBackground>
            <ModalWrap>
                <ModalHeadLine>
                    <h3>구성원 소개 예시</h3>
                    <button
                        onClick={closeHandler}
                    >
                        <span className="ir_so">
                            닫기 버튼
                        </span>
                    </button>
                </ModalHeadLine>
                <ModalScrollWrap>
                    <ModalContents>
                        <MemberImage
                            memberImg = {modalProps.image}
                        />
                        <TextBox>
                            <h4>
                                {modalProps.name || "홍길동"} <span/> {modalProps.jobTitle || "사원"}
                            </h4>
                            <p>
                                {modalProps.introduction || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"}
                            </p>
                        </TextBox>
                    </ModalContents>
                </ModalScrollWrap>

            </ModalWrap>
        </ModalBackground>
    );
};

export default MemberModal;

const ModalBackground = styled.div`
    align-items: center;
    background-color: rgba(0,0,0,.5);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1001;

`

const ModalWrap = styled.div`
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    padding: 20px;
    width: 520px;
`
const ModalHeadLine = styled.div`
    border-bottom: 1px solid #bdbdbd;
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    h3{
        font-size: 24px;
        font-weight: 500;
    }
    button{
        background: url(${iconClose}) center no-repeat;
        background-size: contain;
        display: block;
        height: 30px;
        width: 30px;
    }
    @media screen and (max-width: 768px){
        h3{
            font-size: 18px;
        }
    }
`
const ModalScrollWrap = styled.div`
    max-height: 500px;
    overflow: auto;
`
const ModalContents = styled.div`
    padding-top: 40px;
`
const MemberImage = styled.div<IMemberImage>`
    background: url(${(props) => props.memberImg || NoImg}) center no-repeat;
    background-size: cover;
    border: none;
    height: 280px;
    margin: 0 auto;
    width: 200px;
`
const TextBox = styled.div`
    margin-top: 10px;
    text-align: center;

    h4{
        color: #313131;
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 20px;
        span{
            background-color: #000;
            display: inline-block;
            height: 12px;
            width: 2px;
        }
    }
    p{
        color: #828282;
        font-size: 16px;
        font-weight: 400;
        white-space: pre-wrap;
        word-break: break-all;
    }
`