import React from 'react';
import styled, {css} from 'styled-components';
import Row from '../layout/Row';
import LogoImage from "@/resources/images/commons/logo.png"
import Kakaomap from './Kakaomap';

interface ISubwayIcon{
    lineNumber: number;
}

/**
 * @description 기업소개 탭 하위 오시는길 컴포넌트
 */

const ContactUs = () => {
    return (
        <ContactUsContainer>
            <Row>
                <MapBox>
                    <Kakaomap/>
                </MapBox>
            </Row>
            <InfomationWrap>
                <InfomationLeft>
                    <div>
                        <Logo>
                            <span className="ir_so">
                                로고입니다.
                            </span>
                        </Logo>
                        <h4>주소</h4>
                        <p>(1722-1) 안양시 동안구 동편로 20번길 43</p>
                        <h4>전화번호</h4>
                        <p>010 - 3092 - 1356</p>
                        <h4>이메일</h4>
                        <p>kimbyul1225@gmail.com</p>
                    </div>
                </InfomationLeft>
                <InfomationRight>
                    <div>
                        <h4>대중교통 이용방법</h4>
                        <h5>지하철 이용</h5>
                        <p>
                            <SubwayIcon
                                lineNumber={1}
                            >
                                1
                            </SubwayIcon>
                            <SubwayIcon
                                lineNumber={2}
                            >
                                2
                            </SubwayIcon>
                            <SubwayIcon
                                lineNumber={3}
                            >
                                3
                            </SubwayIcon>
                            <SubwayIcon
                                lineNumber={4}
                            >
                                4
                            </SubwayIcon>
                            아이콘은 4호선까지만 만들었어요.
                        </p>
                        <h5>버스 이용</h5>
                        <p>인덕원역 정류장 하차 (100, 101, 102, 1001, 1002)</p>
                    </div>
                </InfomationRight>

            </InfomationWrap>
            <DecoBackGroundWrap>
                <div/>
                <div/>
            </DecoBackGroundWrap>
        </ContactUsContainer>
    );
};

export default ContactUs;

const ContactUsContainer = styled.div`
    padding-top: 120px;
    @media screen and (max-width: 1200px){
        padding: 80px 0;
    }   
    @media screen and (max-width: 768px){
        padding: 50px 0;
    }
`
const MapBox = styled.div`
    height: 650px;
    width: 100%;
    @media screen and (max-width: 1200px){
        height: 480px;
    }   
    @media screen and (max-width: 768px){
        height: 62vw;
    }
`
const Logo = styled.h2`
    background: url(${LogoImage}) center no-repeat;
    background-size: contain;
    height: 50px;
    margin-bottom: 50px;
    width: 190px;
    @media screen and (max-width: 1200px){
        margin-bottom: 10px;
    }   
    @media screen and (max-width: 768px){
        width: 130px;
        height: 35px;
    }

`

const InfomationWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -230px;
    @media screen and (max-width: 1200px){
        display: block;
        margin-top: 50px;
    }   
    @media screen and (max-width: 768px){
        margin-top: 30px;
    }
`
const InfomationLeft = styled.div`
    background-color: #f3f3f3;
    display: flex;
    height: 770px;
    justify-content: flex-end;
    padding-top: 325px;
    width: 50%;
    div{
        padding-left: 60px;
        width: 600px;
    }
    h4{
        color: #313131;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 20px;
    }
    p{
        color: #828282;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 25px;
    }

    @media screen and (max-width: 1200px){
        background-color: #fff;
        display: block;
        height: auto;
        padding-top: 0;
        width: 100%;
        div{
            padding-left: 0;
            width: 100%;
        }
        h4, p{
            padding-left: 20px;
        }
    }   
    @media screen and (max-width: 768px){
        h4{
            font-size: 16px;
            margin-bottom: 10px;
        }
        p{
            align-items: center;
            display: flex;
            font-size: 14px;
        }
    }
`
const InfomationRight = styled.div`
    background-color: #fff;
    display: flex;
    height: 770px;
    justify-content: flex-start;
    padding-top: 420px;
    width: 50%;
    div{
        padding-left: 60px;
        width: 600px;
    }
    h4{
        color: #313131;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 20px;
    }
    h5{
        color: #4f4f4f;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 20px;
    }
    p{
            color: #828282;
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 30px;
    }
    @media screen and (max-width: 1200px){
        display: block;
        height: auto;
        padding-top: 0;
        width: 100%;
        div{
            margin-top: 50px;
            padding-left: 0;
            width: 100%;
        }
        h4{
            padding-left: 20px;
        }
        h5{
            padding-left: 20px;
        }
        p{
            padding-left: 20px;
        }
    }   
    @media screen and (max-width: 768px){
        h4{
            font-size: 16px;
            margin-bottom: 10px;
        }
        h5{
            font-size: 16px;
        }
        p{
            align-items: center;
            display: flex;
            font-size: 14px;
        }
    }
`

// 일단은 4호선까지만 만들어놓음.
const SubwayIcon = styled.span<ISubwayIcon>`
    border-radius: 15px;
    color: #fff;
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 30px;
    margin-right: 20px;

    ${(props) => props.lineNumber === 1 && css`
        background-color: #0d0ded;
    `}
    ${(props) => props.lineNumber === 2 && css`
        background-color: #27ae60;
    `}
    ${(props) => props.lineNumber === 3 && css`
        background-color: #ff4d15;
    `}
    ${(props) => props.lineNumber === 4 && css`
        background-color: #2d9cdb;
    `}
`

const DecoBackGroundWrap = styled.div`
    display: flex;
    justify-content: space-between;
    div{
        height: 180px;
        width: 50%;
    }
    div:first-child{
        background-color: #fff;
    }
    div:last-child{
        background-color: #f3f3f3;
    }
    @media screen and (max-width: 1200px){
        display: none;
    }
    
`