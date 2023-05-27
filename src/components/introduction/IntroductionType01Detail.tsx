import React from 'react';
import styled from 'styled-components';
import SubBanner from '../commons/SubBanner';
import Container from '../layout/Container';
import Row from '../layout/Row';
import ImageSample from "@/resources/images/introduction/sample_04.png";
import IconDownLoad from "@/resources/icons/introducation/icon_down.png"

const IntroductionType01Detail = () => {
    return (
        <>
            <SubBanner
                title="소개페이지 Type01 상세"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <Row>
                    <DeatilTitle>
                        dddd
                    </DeatilTitle>
                    <HeadLine>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </HeadLine>

                    <ContentsWrap>
                        <li>
                            <TextBox>
                                <h5>Lorem ipsum 01</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            </TextBox>
                        </li>
                        <li>
                            <TextBox>
                                <h5>Lorem ipsum 02</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            </TextBox>
                        </li>
                        <li>
                            <TextBox>
                                <h5>Lorem ipsum 03</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            </TextBox>
                        </li>
                    </ContentsWrap>
                </Row>
            </Container>

            <AccentContainer>
                <Row>
                    <ImgTextComboWrap>
                        <figure/>
                        <ComboBoxText>
                            <h4>Lorem ipsum</h4>
                            <span>
                                <p>Lorem ipsum dolor sit amet, consectetur </p>
                                <p>ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                            </span>
                            <BtnWrap>
                                <button>다운로드</button>
                            </BtnWrap>
                        </ComboBoxText>
                    </ImgTextComboWrap>
                    
                </Row>
            </AccentContainer>
        </>
    );
};

export default IntroductionType01Detail;

const DeatilTitle = styled.h3`
    font-size: 36px; font-weight: 400; color: #4F4F4F; padding-bottom: 100px; text-align: center; position: relative;
    ::after{
        content: ''; position: absolute; bottom: 30px; left: 50%; transform: translate(-1px, -50%) rotate(45deg); width: 1px; height: 25px; display: block; border-right: 2px solid #828282;
    }
    
    @media screen and (max-width: 768px) {
        font-size: 22px; padding-bottom: 80px;
        ::after{
            bottom: 15px;
        }
    }

`
const HeadLine = styled.div`
    text-align: center;
    h4{
        font-size: 22px; font-weight: 500; color: #313131;
    }
    p{
        font-size: 18px; font-weight: 400; margin-top: 20px; color: #828282; word-break: keep-all;
    }
    @media screen and (max-width: 768px) {
        h4{
            font-size: 16px;
        }
        p{
            font-size: 14px;
        }
    }
`
const ContentsWrap = styled.ul`
    display: flex; justify-content: space-between; margin-top: 120px;
    li{
        width: 31%; border: 1px solid #E0E0E0; padding: 30px 20px 40px 20px;
    }
    @media screen and (max-width: 1200px) {
        flex-direction: column; margin-top: 80px;
        li{
            width: 100%; margin-bottom: 40px;
        }
        li:last-child{
            margin-bottom: 0;
        }
    }
    @media screen and (max-width: 768px) {
        margin-top: 50px;
        li{
            margin-bottom: 30px;
        }
    
    }
`
const TextBox = styled.div`
    h5{
        font-size: 22px; font-weight: 500; position: relative; padding-top: 18px; margin-bottom: 20px; line-height: 28px; height: 74px; word-break: keep-all;
    }
    h5::before{
        content: ''; position: absolute; top: 0; left: 0; width: 8px; height: 8px; border-radius: 2px; background-color: var(--col_acc);
    }
    p{
        font-size: 16px; font-weight: 400; color: #4F4F4F; line-height: 1.8; word-break: keep-all;
    }
    @media screen and (max-width: 1200px) {
        h5{
            height: auto;
        }
    
    }
    @media screen and (max-width: 768px) {
        h5{
            font-size: 18px;
        }
        p{
            font-size: 14px;
        }
    }
`

const AccentContainer = styled.div`
    background-color: #F2F2F2; padding: 50px 0; margin-bottom: 120px;

    @media screen and (max-width: 1200px) {
        margin-bottom: 80px;
    }
    @media screen and (max-width: 768px) {
        padding: 30px 0; margin-bottom: 50px;
    }
`

const ImgTextComboWrap = styled.div`
    display: flex; justify-content: space-between; margin-bottom: 0;
    figure{
        width: 55%; height: 400px; background: url(${ImageSample}) center no-repeat; background-size: cover;
    }
    @media screen and (max-width: 1200px){
        justify-content: normal; flex-direction: column;
        figure{
            width: 100%;

        }
    }
    @media screen and (max-width: 768px){
        figure{
            width: 100%; height: 260px;
        }
    }
`

const ComboBoxText = styled.div`
    width: 45%; height: auto;  padding-left: 60px; display: flex; flex-direction: column; justify-content: center;
    
    h4{
        font-size: 28px; font-weight: 700; color: #313131; letter-spacing: -0.05em; word-break: keep-all; line-height: 48px; padding-top: 18px; padding-bottom: 40px; position: relative; border-bottom: 1px solid #E0E0E0; 
    }
    h4::before{
        content: ''; display: block; position: absolute; top: 0; left: 0; width: 8px; height: 8px; border-radius: 2px; background-color: var(--col_acc);
    }
    span{
        display: block; font-size: 16px; border: none; margin: 60px 0 40px 0;
    }
    p{
        color: #4F4F4F; font-size: 16px; font-weight: 400; word-break: keep-all; line-height: 27px;
    }

    @media screen and (max-width: 1200px) {
        width: 100%; padding-left: 0; height: auto; margin-top: 40px;
        span{
            padding-top: 0; margin: 20px 0;
        }
    }
    @media screen and (max-width: 768px) {
        h4{
            font-size: 18px; line-height: 30px; padding-bottom: 10px;
        }
        p{
            font-size: 14px; line-height: 24px;
        }
    }
`

const BtnWrap = styled.div`
    margin-top: 0; 
    button{
        width: auto; height: auto; background-color: transparent; border: none; font-size: 18px; font-weight: 500; padding-left: 30px; background: url(${IconDownLoad}) center left no-repeat; background-size: 24px; line-height: 24px; text-align: left; border-radius: 0; color: var(--col_acc); 
    }
    @media screen and (max-width: 1200px){
        margin-top: 40px;
    }
`




