import React from 'react';
import styled from "styled-components";
import Container from "../layout/Container";

import checkBoxIcon from "@/resources/icons/company/icon_checkbox_checked.png";

interface IChecked{
    check1: boolean,
    check2: boolean
}

const Agreement = ({checkHandler, checkValue, nextButton}: {checkHandler: (e: React.ChangeEvent<HTMLInputElement>) => void, checkValue: IChecked, nextButton: () => void}) => {
    return (
        <Container>
            <AgreementWrap>
                <AgreementTitle>
                    <h3>
                        약관동의
                    </h3>
                </AgreementTitle>
                <AgreementBox>
                    <BoxHeader>
                        <h4>이용약관</h4>
                        <CheckBoxWrap>
                            <label htmlFor="check1">동의</label>
                            <input 
                                type="checkbox" 
                                id="check1" 
                                name="check1" 
                                className="ir_so"
                                onChange={checkHandler}
                            
                            />
                            <label htmlFor="check1"></label>
                        </CheckBoxWrap>
                    </BoxHeader>
                    <ScrollBox>
                        <div>
                            <h5>
                                제1조. Lorem ipsum 
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            </p>
                            <h5>
                                제2조. Lorem ipsum 
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            </p>
                            <h5>
                                제3조. Lorem ipsum 
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l
                            </p>
                            <h5>
                                제4조. Lorem ipsum 
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </ScrollBox>
                </AgreementBox>
                <AgreementBox>
                    <BoxHeader>
                        <h4>개인정보 처리방침</h4>
                        <CheckBoxWrap>
                            <label htmlFor="check2">동의</label>
                            <input 
                                type="checkbox"
                                id="check2" 
                                name="check2" 
                                className="ir_so"
                                onChange={checkHandler}
                                
                            />
                            <label htmlFor="check2"></label>
                        </CheckBoxWrap>
                    </BoxHeader>
                    <ScrollBox>
                        <div>
                            <h5>
                                제1조. Lorem ipsum 
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            </p>
                            <h5>
                                제2조. Lorem ipsum 
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            </p>
                            <h5>
                                제3조. Lorem ipsum 
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l
                            </p>
                            <h5>
                                제4조. Lorem ipsum 
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </ScrollBox>
                </AgreementBox>
            </AgreementWrap>
            <Notice>
                이용약관과 개인정보 수집 및 이용에 대한 안내 모두 동의해주세요.
            </Notice>
            <ButtonWrap>
                <button
                    onClick={nextButton}
                >
                    다음
                </button>
            </ButtonWrap>
        </Container>
    )
}

export default Agreement


const AgreementWrap = styled.div`
    margin: 0 auto;
    max-width: 620px;
    @media screen and (max-width: 768px){
        max-width: 90%;
    }
`
const AgreementTitle = styled.div`
    margin-bottom: 55px;
    h3{
        font-size: 32px;
        font-weight: 700;
        color: #313131;
        text-align: center;
        padding: 5px 0;
    }
    @media screen and (max-width: 768px){
        margin-bottom: 50px;
        h3{
            font-size: 22px;
            margin-bottom: 50px;
        }
    }
`
const AgreementBox = styled.div`
    margin-bottom: 30px;
    border: 1px solid #E0E0E0;
`
const BoxHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 0 20px;
    background-color: #EBECEF;
    h4{
        font-size: 24px;
        color: #4F4F4F;
    }
    @media screen and (max-width: 768px){
        h4{
            font-size: 18px;
        }
    }
`
const CheckBoxWrap = styled.div`
    display: flex;
    align-items: center;
    label{
        font-size: 16px;
        color: #828282;
        margin-right: 10px;
    }
    label:last-child{
        display: inline-block;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        background: #d2d2d2 url(${checkBoxIcon}) center no-repeat;
        background-size: 16px 16px;
        cursor: pointer;
    }
    input[type=checkbox]:checked+label{
        display: inline-block;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        background: var(--col_acc) url(${checkBoxIcon}) center no-repeat;
        background-size: 16px 16px;
        border: 1px solid var(--col_acc);
    }
    @media screen and (max-width: 768px){
        label{
            font-size: 12px;
        }
    }
`

const ScrollBox = styled.div`
    height: 290px;
    overflow: auto;
    div{
        padding: 20px;
    }
    h5 {
        font-size: 14px;
        font-weight: 500;
        color: #4F4F4F;
        margin-top: 40px;
        margin-bottom: 5px;
        
    }
    h5:first-child{
        margin-top: 0;
    }
    p {
        font-size: 14px;
        font-weight: 400;
        color: #4F4F4F;
        line-height: 24px;
    }
    @media screen and (max-width: 768px){
        p {
            font-size: 12px;
        }
    }
`
const Notice = styled.p`
    font-size: 16px;
    margin-top: 55px;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 12px;
        margin-top: 50px;
    }
`

const ButtonWrap = styled.div`
    margin-top: 55px;
    text-align: center;
    button{
        width: 375px;
        height: 60px;
        text-align: center;
        background-color: #fff;
        border-radius: 5px;
        color: var(--col_acc);
        font-size: 18px;
        font-weight: 700;
        box-sizing: border-box;
        border: 1px solid var(--col_acc);
        transition: all .3s ease;
    }
    button:hover{
        background-color: var(--col_acc);
        border: 1px solid var(--col_acc);
        color: #fff;
        transition: all .3s ease;
    }
    @media screen and (max-width: 1200px){
        button{
            background-color: var(--col_acc);
            color: #fff;
        }
    }
    @media screen and (max-width: 768px){
        margin-top: 50px;
        button{
            width: 90%;
            height: 50px;
            font-size: 16px;
        }
    }
`