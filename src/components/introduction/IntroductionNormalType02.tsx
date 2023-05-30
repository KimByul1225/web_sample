import React from 'react';
import styled from 'styled-components';

import Container from '../layout/Container';
import Row from '../layout/Row';
import SubBanner from '../commons/SubBanner';


import IconProcess01 from "@/resources/icons/introducation/icon_process_01.png";
import IconProcess02 from "@/resources/icons/introducation/icon_process_02.png";
import IconProcess03 from "@/resources/icons/introducation/icon_process_03.png";
import IconProcess04 from "@/resources/icons/introducation/icon_process_04.png";
import IconProcess05 from "@/resources/icons/introducation/icon_process_05.png";
import SliderPaginationComboSection from './SliderPaginationComboSection';

const IntroductionNormalType02 = () => {
    return (
        <>
            <SubBanner
                title="소개페이지 일반형태 Type02"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <Row>
                    <BarTypeTitle>
                        Lorem ipsum dolor sit
                    </BarTypeTitle>
                    <TextBox>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                    </TextBox>
                    <ul>
                        <ProcessBox>
                            <i/>
                            <div>
                                <h3>Lorem ipsum dolor</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </ProcessBox>
                        <ProcessBox>
                            <i/>
                            <div>
                                <h3>Lorem ipsum dolor2</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </ProcessBox>
                        <ProcessBox>
                            <i/>
                            <div>
                                <h3>Lorem ipsum dolor3</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </ProcessBox>
                        <ProcessBox>
                            <i/>
                            <div>
                                <h3>Lorem ipsum dolor4</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </ProcessBox>
                        <ProcessBox>
                            <i/>
                            <div>
                                <h3>Lorem ipsum dolor5</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </ProcessBox>
                    </ul>
                </Row>
            </Container>
            <AccentContainer>
                <Row>
                    <SliderPaginationComboSection/>
                </Row>
            </AccentContainer>

        </>
    );
};

export default IntroductionNormalType02;


const BarTypeTitle = styled.h2`
    border-left: 5px solid #ff4d15;
    border-left: 5px solid var(--col_acc);
    color: #ff4d15;
    color: var(--col_acc);
    font-size: 28px;
    font-weight: 500;
    height: 40px;
    line-height: 40px;
    margin-bottom: 20px;
    padding-left: 20px;
    @media screen and (max-width: 768px){
        font-size: 18px;
        height: 30px;
        line-height: 30px;
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
        margin: 10px 0 30px 0;

        p {
            font-size: 14px;
        }
    }
`

const ProcessBox = styled.li`
    display: flex;
    justify-content: flex-start;
    i{
        height: 130px;
        width: 130px;
        position: relative;
        display: block;
    }
    :first-child i{
        background: url(${IconProcess01}) center no-repeat;
        background-size: 130px;
    }
    :nth-child(2) i{
        background: url(${IconProcess02}) center no-repeat;
        background-size: 130px;
    }
    :nth-child(3) i{
        background: url(${IconProcess03}) center no-repeat;
        background-size: 130px;
    }
    :nth-child(4) i{
        background: url(${IconProcess04}) center no-repeat;
        background-size: 130px;
    }
    :nth-child(5) i{
        background: url(${IconProcess05}) center no-repeat;
        background-size: 130px;
    }
    i::after{
        background-color: #bdbdbd;
        bottom: -40px;
        content: "";
        height: 40px;
        left: 50%;
        position: absolute;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 1px;
    }
    :nth-child(5) i::after{
        display: none;
    }
    div{
        min-height: 170px;
        padding-left: 60px;
        padding-top: 30px;
        width: calc(100% - 130px);
    }
    h3{
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 5px;
    }
    p{
        color: #828282;
        font-size: 18px;
        font-weight: 500;
    }

    @media screen and (max-width: 1200px){
        div{
            padding-left: 40px;
            padding-top: 20px;
        }
    }
    @media screen and (max-width: 768px){
        i{
            height: 80px;
            width: 80px;
            background-size: 80px;
        }
        :first-child i, :nth-child(2) i, :nth-child(2) i, :nth-child(3) i,  :nth-child(4) i, :nth-child(5) i{
            background-size: 80px;
        }
        i::after{
            bottom: -25px;
            height: 25px;
            width: 0.5px;
        }
        :nth-child(5) i::after{
            display: block;
        }
        div{
            min-height: auto;
            padding: 25px 0 0;
            text-align: center;
            width: 100%;
        }
        h3{
            font-size: 18px;
        }
        p{
            font-size: 14px;
        }
        align-items: center;
        flex-direction: column;
        margin-bottom: 30px;
    }

`

const AccentContainer = styled.div`
    background-color: #f9f9f9;
    padding: 100px 0;
    @media screen and (max-width: 1200px){
        padding: 80px 0;
    }
`