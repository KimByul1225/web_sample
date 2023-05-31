import React from 'react';
import styled from 'styled-components';
import Container from '../layout/Container';
import Row from '../layout/Row';
import GreetingImageSample from "@/resources/images/company/sample_04.png";

const Greetings = () => {
    return (
        <Container>
            <MainGreetingWrap>
                <RoundDecoBox>
                    <div/>
                </RoundDecoBox>
                    <Row>
                        <MainGreetingBox>
                            <figure/>
                            <MainTextBox>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                    <p>Lorem ipsum dolor</p>
                                    <p>Lorem ipsum dolor</p>
                                    <span>Lorem ipsum CEO<b>Byul Kim</b></span>
                                </div>
                            </MainTextBox>
                        </MainGreetingBox>
                    </Row>
                <BottomRoundDecoBox>
                    <div/>
                </BottomRoundDecoBox>
            </MainGreetingWrap>
            <Row>
                <MessageWrap>
                    <div>
                        <p>이 영역에는 중요도가 위 Section보다 떨어지는 일반 Message가 들어갑니다.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    </div>
                    <div>
                        <p>이 영역에는 중요도가 위 Section보다 떨어지는 일반 Message가 들어갑니다.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                    </div>
                    <div>
                        <p>이 영역에는 중요도가 위 Section보다 떨어지는 일반 Message가 들어갑니다.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    </div>
                    <div>
                        <p>2023. 01. 01</p>
                        <p>감사합니다.</p>
                    </div>
                </MessageWrap>
            </Row>
        </Container>
    );
};

export default Greetings;

const MainGreetingWrap = styled.div`
    background-color: #f9f9f9;
`
const RoundDecoBox = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    div{
        background-color: #ff4d15;
        background-color: var(--col_acc);
        border-radius: 0 50px 0 0;
        height: 47px;
        width: 670px;
    }
    @media screen and (max-width: 1200px){
        div{
            height: 35px;
            width: 33.5%;
        }
    }
    @media screen and (max-width: 768px){
        div{
            height: 20px;
            width: 18%;
        }
    }

`
const BottomRoundDecoBox = styled(RoundDecoBox)`
    display: flex;
    justify-content: flex-end;
    div{
        background-color: #000;
        border-radius: 0 0 0 100px;
    }
`
const MainGreetingBox = styled.div`
    display: flex;
    height: 410px;
    justify-content: space-between;
    figure{
        height: 450px;
        position: relative;
        width: 480px;
    }
    figure::after{
        background: url(${GreetingImageSample}) center no-repeat;
        background-size: contain;
        content: "";
        display: block;
        height: 450px;
        left: 0;
        position: absolute;
        top: -40px;
        width: 480px;
    }
    @media screen and (max-width: 1200px){
        height: 400px;
        justify-content: space-around;
        figure{
            height: 100%;
            width: 40%;
        }
        figure::after{
            background-position: bottom;
            height: 100%;
            position: relative;
            top: 0;
            width: 100%;
        }
    }
    @media screen and (max-width: 768px){
        height: 305px;
        figure{
            display: none;
        }
        figure::after{
            display: none;
        }
    }

`
const MainTextBox = styled.div`
    align-items: center;
    display: flex;
    height: 410px;
    padding-left: 180px;
    width: calc(100% - 480px);
    div {
        padding-top: 60px;
        position: relative;
    }
    div::before{
        background-color: #ff4d15;
        background-color: var(--col_acc);
        border-radius: 5px 0;
        content: "";
        display: block;
        height: 20px;
        left: 0;
        position: absolute;
        top: 0;
        width: 20px;
    }
    p{
        color: #313131;
        font-size: 32px;
        font-weight: 500;
        letter-spacing: -.05em;
        line-height: 54px;
    }
    span{
        display: block;
        color: #828282;
        font-size: 26px;
        font-weight: 500;
        margin-top: 40px;
    }
    b{
        display: inline-block;
        margin-left: 20px;
        font-weight: 700;
    }

    @media screen and (max-width: 1200px){
        width: 60%;
        height: 100%;
        justify-content: center;
        padding-left: 0;
        p {
            font-size: 24px;
            line-height: 41px;
        }
        span{
            font-size: 20px;
        }
        b{
            font-size: 24px;
        }
    }
    @media screen and (max-width: 768px){
        justify-content: center;
        width: 100%;
        p {
            font-size: 16px;
            line-height: 27px;
        }
        span{
            font-size: 12px;
        }
        b{
            font-size: 14px;
        }
    }
`

const MessageWrap = styled.div`
    margin-top: 80px;
    :last-child{
        margin-bottom: 0;
    }
    div{
        margin-bottom: 40px;
    }
    p{
        color: #4f4f4f;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
    }
    @media screen and (max-width: 768px){
        margin-top: 50px;
        div{
            margin-bottom: 30px;
        }
        p{
            font-size: 14px;
        }
    }

    
`