import React from 'react';
import styled from 'styled-components';
import iconClose from "@/resources/icons/commons/icon_modal_close.png"

const MemberModal = () => {
    return (
        <ModalBackground>
            <ModalWrap>
                <ModalHeadLine>
                    <h3>구성원 소개 예시</h3>
                    <button>
                        <span className="ir_so">
                            닫기 버튼
                        </span>
                    </button>
                </ModalHeadLine>
                <ModalScrollWrap>
                    <ModalContents>
                        <MemberImage/>
                        <TextBox>
                            <h4>
                                ddd <span/> ddd
                            </h4>
                            <p>
                                dsfsdfdsf
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
const MemberImage = styled.div`
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