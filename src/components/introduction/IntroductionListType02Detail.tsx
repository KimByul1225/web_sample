import React from 'react';
import SubBanner from '../commons/SubBanner';
import { useParams } from 'react-router-dom';
import Container from '../layout/Container';
import Row from '../layout/Row';
import DecoTitle from '../commons/DecoTitle';
import styled from 'styled-components';
import SliderSection from './SliderSection';

/**
 * @description 소개페이지 리스트형태 Type02 상세페이지
 */

const IntroductionListType02Detail = () => {
    const params = useParams();
    const {detailId} = params; 
    return (
        <>
            <SubBanner
                title="소개페이지 리스트형태 Type02 상세"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <Container>
                <Row>
                    <DecoTitle
                        text={`${detailId}번 글 (제목위치)`}
                        underline
                    />
                    <TextBox>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </TextBox>
                    <TextBox>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        </p>
                    </TextBox>
                </Row>
            </Container>
            <AccentContainer>
                <Row>
                    <DecoTitle
                        text="Lorem ipsum "
                    />
                    <ListWrap>
                        <li>
                            <h3>1</h3>
                            <h4>Lorem ipsum dolor</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        </li>
                        <li>
                            <h3>2</h3>
                            <h4>Lorem ipsum dolor</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        </li>
                        <li>
                            <h3>3</h3>
                            <h4>Lorem ipsum dolor</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        </li>
                        <li>
                            <h3>4</h3>
                            <h4>Lorem ipsum dolor</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        </li>
                    </ListWrap>
                </Row>
            </AccentContainer>
            <SliderSection/>
        </>
    );
};

export default IntroductionListType02Detail;

const TextBox = styled.div`
    margin: 20px 0 0 0;
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
const AccentContainer = styled.div`
    background-color: #F9F9F9;
    padding: 120px 0 80px 0;
    @media screen and (max-width: 1200px){
        padding: 80px 0 50px 0;
    }
    @media screen and (max-width: 768px){
        padding: 50px 0;
    }
`
const ListWrap = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li{
        background-color: #fff;
        width: 48.333%;
        border-radius: 60px 0px;
        padding: 30px;
        border: 1px solid #F2F2F2;
        margin-bottom: 40px;
    }
    h3{
        font-size: 100px;
        font-family: 'Montserrat';
        font-weight: 500;
        color: #828282;
        line-height: 122px;
        height: 122px;
        padding-bottom: 20px;
        position: relative;
    }
    h3::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 2px;
        background-color: #828282;
        border-radius: 2px;
    }
    h4{
        font-size: 22px;
        font-weight: 500;
        color: #313131;
        margin-top: 20px;
    }
    p{
        font-size: 18px;
        font-weight: 400;
        color: #828282;
        margin-top: 20px;
        line-height: 30px;
    }

    @media screen and (max-width: 768px){
        justify-content: center;
        li {
            width: 100%;
            margin-bottom: 20px;
        }
        h3{
            font-size: 80px;
        }
        h4{
            font-size: 18px;
        }
        p{
            font-size: 14px;
            line-height: 1.6;
        }
    }
`