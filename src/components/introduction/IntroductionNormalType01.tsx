import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';
import Row from '../layout/Row';
import SubBanner from '../commons/SubBanner';
import DecoTitle from '../commons/DecoTitle';
import Icon01 from "@/resources/icons/introducation/icon_deco01.png";
import Icon02 from "@/resources/icons/introducation/icon_deco02.png";
import Icon03 from "@/resources/icons/introducation/icon_deco03.png";
import Icon01hover from "@/resources/icons/introducation/icon_deco01_hover.png";
import Icon02hover from "@/resources/icons/introducation/icon_deco02_hover.png";
import Icon03hover from "@/resources/icons/introducation/icon_deco03_hover.png";
import DecoSubTitle from '../commons/DecoSubTitle';
import BackGroundSample from "@/resources/images/introduction/sample_04.png"

const IntroductionNormalType01 = () => {
    return (
        <>
            <SubBanner
                title="소개페이지 일반형태 Type01"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <Row>
                    <DetailTitle>Lorem ipsum dolor sit amet</DetailTitle>
                    <>
                        <DecoTitle
                            text="Lorem ipsum"
                            underline
                        />
                        <TextBox>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </TextBox>
                    </>
                    <>
                        <DecoTitle
                            text="Lorem ipsum"
                        />
                        <BoxWrap>
                            <Box
                                to="/"
                            >
                                <i></i>
                                <h3>Lorem ipsum dolor sit</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </Box>
                            <Box
                                to="/"
                            >
                                <i></i>
                                <h3>Lorem ipsum dolor sit</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </Box>
                            <Box
                                to="/"
                            >
                                <i></i>
                                <h3>Lorem ipsum dolor sit</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </Box>
                        </BoxWrap>
                    </>
                    <>
                        <DecoTitle
                            text="Lorem ipsum"
                        />
                        <SpaceBetween>
                            <HalfBox>
                                <DecoSubTitle
                                    title="정방향 형태"
                                    underline
                                />
                                <TextBox>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    </p>
                                </TextBox>
                            </HalfBox>
                            <HalfBox>
                                <BackGroundBox/>
                            </HalfBox>
                        </SpaceBetween>
                        <ReverseSpaceBetween>
                            <HalfBox>
                                <DecoSubTitle
                                    title="reverse형태"
                                    underline
                                />
                                <TextBox>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    </p>
                                </TextBox>
                            </HalfBox>
                            <HalfBox>
                                <BackGroundBox/>
                            </HalfBox>
                        </ReverseSpaceBetween>
                        <SpaceBetween>
                            <HalfBox>
                                <DecoSubTitle
                                    title="정방향 형태"
                                    underline
                                />
                                <TextBox>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    </p>
                                </TextBox>
                            </HalfBox>
                            <HalfBox>
                                <BackGroundBox/>
                            </HalfBox>
                        </SpaceBetween>

                    </>
                    
                </Row>


            </Container>
        </>
    );
};

export default IntroductionNormalType01;


const DetailTitle = styled.h3`
    font-size: 36px; font-weight: 400; color: #4F4F4F; padding-bottom: 50px; text-align: center; position: relative;
    @media screen and (max-width: 768px) {
        font-size: 22px; padding-bottom: 30px;
    }
`
const TextBox = styled.div`
    margin: 20px 0 50px 0;
    p{
        font-size: 18px;
        font-weight: 400;
        color: #4F4F4F;
    }
    @media screen and (max-width: 768px){
        p {
            font-size: 14px;
        }
    }
`
const BoxWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1200px){
        
    }
    @media screen and (max-width: 768px){
        display: flex;
        -webkit-box-align: center;
        -webkit-box-pack: justify;
        flex-direction: column;
        align-items: center;
    }
`
const Box = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 32%;
    height: 360px;
    border: 1px solid #EAEAEA;
    padding: 35px 25px;
    background-color: #fff;
    transition: all .3s ease;
    margin-bottom: 60px;
    i{
        width: 100px;
        height: 100px;
        margin-bottom: 15px;
        background: url(${Icon01}) center no-repeat;
        background-size: contain;
    }
    :nth-child(2) i{
        background: url(${Icon02}) center no-repeat;
    }
    :nth-child(3) i{
        background: url(${Icon03}) center no-repeat;
    }
    h3{
        text-align: center;
        font-size: 22px;
        font-weight: 600;
        color: #333;
        margin-bottom: 5px;
        line-height: 37px;
    }
    p{
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: #717171;
        line-height: 27px;
        word-break: keep-all;
    }
    :hover{
        background-color: #FF4D15;
        border: 1px solid #FF4D15;
        i{
            background: url(${Icon01hover}) center no-repeat;
        }
        :nth-child(2) i{
            background: url(${Icon02hover}) center no-repeat;
        }
        :nth-child(3) i{
            background: url(${Icon03hover}) center no-repeat;
        }
        h3{
            color: #fff;
        }
        p{
            color: #fff;
        }
    }
    @media screen and (max-width: 1200px){
        height: auto;
        
    }
    @media screen and (max-width: 768px){
        width: 100%;
        margin-bottom: 20px;
        :last-child{
            margin-bottom: 50px;
        }
        h3{
            font-size: 18px;
        }
        p{
            font-size: 14px;
        }
    }
`
const SpaceBetween = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 80px;
    @media screen and (max-width: 1200px){
        margin-bottom: 30px;
    }
    @media screen and (max-width: 768px){
        flex-direction: column;
        margin-bottom: 70px;
    }
`
const ReverseSpaceBetween = styled(SpaceBetween)`
    flex-direction: row-reverse;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

const HalfBox = styled.div`
    width: 48%;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`
const BackGroundBox = styled.div`
    width: 100%;
    height: 350px;
    background: url(${BackGroundSample}) center no-repeat;
    background-size: contain;
    @media screen and (max-width: 768px){
        height: 57vw;
    }
`