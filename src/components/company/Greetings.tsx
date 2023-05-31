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

                        </MainGreetingBox>
                    </Row>
                <BottomRoundDecoBox>
                    <div/>
                </BottomRoundDecoBox>
            </MainGreetingWrap>
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
        height: 455px;
        justify-content: space-around;
        figure{
            height: 100%;
            width: 235px;
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
    
`