import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SliderSection from './SliderSection';
import Container from '../layout/Container';
import Row from '../layout/Row';

import BackGroundSample from "@/resources/images/company/sample_01.png";
import BrochureSample from "@/resources/images/company/sample_03.png";
import DecoTitle from '../commons/DecoTitle';

interface IProgressChart{
    percentage? : number;
}

const Company = () => {
    return (
        <>
            <SliderSection/>
            <Container>
                <Row>
                    <SpaceBetween>
                        <BackGroundBox/>
                        <TextBox>
                            <DecoTitle
                                text="Lorem ipsum"
                                underline
                            />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                            <ProgressChartBox>
                                <h4>바차트 예시</h4>
                                <h5>80.5 %</h5>
                                <ProgressChart
                                    percentage={80.5}
                                >
                                    <div></div>
                                </ProgressChart>
                                <span>*Lorem ipsum dolor sit amet (2022년 기준)</span>
                            </ProgressChartBox>
                        </TextBox>
                    </SpaceBetween>
                    <ReverseSpaceBetween>
                        <BackGroundBox/>
                        <TextBox>
                            <DecoTitle
                                text="Lorem ipsum"
                                underline
                            />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                            <ButtonWrap>
                                <Link to="/">
                                    버튼예시
                                </Link>
                            </ButtonWrap>
                        </TextBox>
                    </ReverseSpaceBetween>
                    <SpaceBetween>
                        <BackGroundBox/>
                        <TextBox>
                            <DecoTitle
                                text="Lorem ipsum"
                                underline
                            />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet</p>
                        </TextBox>
                    </SpaceBetween>
                </Row>
            </Container>
            <AccentContainer>
                <Row>
                    <ReverseSpaceBetween>
                        <BrochureBox/>
                        <TextBox>
                            <DecoTitle
                                text="Brochure 다운로드 영역"
                                underline
                            />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                            <ButtonWrap>
                                <button>
                                    한글 버전
                                </button>
                                <button>
                                    English Ver.
                                </button>
                            </ButtonWrap>
                        </TextBox>
                    </ReverseSpaceBetween>
                </Row>
            </AccentContainer>

        </>
    );
};

export default Company;



const SpaceBetween = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 80px;
    & > div:last-child {
        padding-left: 60px;
    }
    @media screen and (max-width: 1200px){
        flex-direction: column;
        justify-content: normal;
        margin-bottom: 100px;
        & > div:last-child {
            padding-left: 0;
        }
    }
    @media screen and (max-width: 768px){
        
    }
`
const ReverseSpaceBetween = styled(SpaceBetween)`
    flex-direction: row-reverse;
    & > div:last-child {
        padding-left: 0;
        padding-right: 60px;
    }
    @media screen and (max-width: 1200px){
        flex-direction: column;
        justify-content: normal;
        margin-bottom: 50px;
        & > div:last-child {
            padding-right: 0;
        }
    }
`

const BackGroundBox = styled.div`
    background: url(${BackGroundSample}) center no-repeat;
    background-size: cover;
    height: 450px;
    width: 55%;
    @media screen and (max-width: 1200px){
        height: 575px;
        width: 100%;
    }
    @media screen and (max-width: 768px){
        height: 260px;
        width: 100%;
    }
`

const BrochureBox = styled(BackGroundBox)`
    background: url(${BrochureSample}) center no-repeat;
    background-size: cover;

`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 450px;
    justify-content: space-between;
    width: 45%;
    h3{
        border-bottom: 1px solid #e0e0e0;
        color: #313131;
        font-size: 28px;
        font-weight: 700;
        letter-spacing: -.05em;
        line-height: 48px;
        padding-bottom: 60px;
        padding-top: 18px;
        position: relative;
        word-break: keep-all;
    }
    p{
        color: #4f4f4f;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        word-break: keep-all;
    }

    @media screen and (max-width: 1200px){
        height: auto;
        margin-top: 50px;
        width: 100%;
    }

    @media screen and (max-width: 768px){
        width: 100%;

        h3{
            font-size: 18px;
            line-height: 30px;
            padding-bottom: 10px;
        }
        p{
            font-size: 14px;
        }
    }
`

const ProgressChartBox = styled.div`
    h4{
        color: #313131;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 15px;
    }
    h5{
        color: #ff4d15;
        color: var(--col_acc);
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 20px;
        text-align: right;
    }
    span{
        display: block;
        color: #828282;
        font-size: 16px;
        font-weight: 400;
        margin: 15px 0 5px;
        text-align: right;
    }
    
    @media screen and (max-width: 1200px){
        margin-top: 20px;
    }
    @media screen and (max-width: 768px){
        h4{
            font-size: 14px;
        }
        h5{
            font-size: 14px;
        }
        span{
            font-size: 12px;
        }
    }
`

const ProgressChart = styled.div<IProgressChart>`
    background-color: #d9d9d9;
    border-radius: 7px;
    height: 5px;
    width: 100%;
    div{
        width: ${props => props.percentage || 50}%;
        background-color: #ff4d15;
        background-color: var(--col_acc);
        border-radius: 7px;
        height: 5px;
    }
`

const ButtonWrap = styled.div`
    margin-top: 30px;
    a, button{
        background-color: #fff;
        border: 1px solid #ff4d15;
        border: 1px solid var(--col_acc);
        border-radius: 5px;
        color: #ff4d15;
        color: var(--col_acc);
        display: inline-block;
        font-size: 18px;
        font-weight: 500;
        height: 60px;
        line-height: 60px;
        text-align: center;
        transition: all .3s ease;
        width: 230px;
    }
    button{
        margin-right: 10px;
    }
    a:hover, button:hover{
        background-color: #ff4d15;
        background-color: var(--col_acc);
        color: #fff;
        transition: all .3s ease;
    }

    @media screen and (max-width: 1200px){
        a, button{
            font-size: 16px;
            height: 50px;
            line-height: 50px;
            width: 205px;
        }
        a:hover, button:hover{
            background-color: #fff;
            color: #ff4d15;
            color: var(--col_acc);
        }
        
    }
    @media screen and (max-width: 768px){
        a, button{
            font-size: 14px;
            height: 45px;
            line-height: 45px;
            width: 100%;
        }
        button{
            margin-bottom: 10px;
            margin-right: 0;
        }
    }
`

const AccentContainer = styled.div`
    background-color: #f9f9f9;
    padding: 120px 0;
    
    @media screen and (max-width: 1200px){
        padding: 80px 0;
    }
    @media screen and (max-width: 768px){
        padding: 50px 0;
    }
`