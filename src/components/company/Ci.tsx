import React from 'react';
import styled from 'styled-components';
import Container from '../layout/Container';
import Row from '../layout/Row';
import Logo from "@/resources/images/commons/logo.png"
import LogoBlack from "@/resources/images/commons/logo_black.png"
import SymbolSample from "@/resources/images/commons/logo_symbol.png"

/**
 * @description 기업소개 탭 하위 CI소개 컴포넌트
 */

const Ci = () => {
    return (
        <Container>
            <Row>
                <CiTitle>
                    Lorem ipsum dolor sit <b>"Lorem ipsum"</b>
                </CiTitle>

                <CiItroBox>
                    <figure/>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </p>
                    </div>
                </CiItroBox>
                <CiSubTitle>
                    Ci 다운로드 영역
                </CiSubTitle>
                <CiDetailBox>
                    <h4>영문 Ci</h4>
                    <CiImageBox>
                        <div></div>
                        <div></div>
                    </CiImageBox>
                </CiDetailBox>
                <ButtonWrap>
                    <button>Ai파일 다운로드</button>
                    <button>PNG파일 다운로드</button>
                </ButtonWrap>
            </Row>
        </Container>
    );
};

export default Ci;

const CiTitle = styled.h2`
    color: #4f4f4f;
    font-size: 28px;
    font-weight: 500;
    text-align: center;
    b{
        color: #ff4d15;
        color: var(--col_acc);
    }
    @media screen and (max-width: 768px){
        font-size: 18px;
    }
`

const CiItroBox= styled.div`
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    margin: 40px 0 120px;
    figure{
        background: url(${SymbolSample}) center no-repeat;
        background-size: 110px;
        border: 1px solid #e0e0e0;
        height: 320px;
        width: 505px;
    }
    div{
        display: flex;
        flex-direction: column;
        height: 320px;
        justify-content: space-around;
        padding: 0 0 0 40px;
        width: calc(100% - 505px);
    }
    p{
        color: #4f4f4f;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
    }
    @media screen and (max-width: 1200px){
        display: block;
        margin: 40px 0 80px;
        figure{
            width: 100%;
        }
        div{
            display: block;
            height: auto;
            padding: 0;
            width: 100%;
        }
        p{
            margin-top: 30px;
        }
    }
    @media screen and (max-width: 768px){
        margin: 30px 0 50px;
        p{
            font-size: 14px;
            line-height: 22px;
        }
    }
`
const CiSubTitle = styled.h3`
    border-left: 5px solid #ff4d15;
    border-left: 5px solid var(--col_acc);
    color: #ff4d15;
    color: var(--col_acc);
    font-size: 28px;
    font-weight: 500;
    height: 40px;
    line-height: 40px;
    margin-bottom: 40px;
    padding-left: 20px;
    @media screen and (max-width: 768px){
        font-size: 18px;
        height: 30px;
        line-height: 30px;
    }
`
const CiDetailBox = styled.div`
    h4{
        color: #4f4f4f;
        font-size: 22px;
        font-weight: 400;
        margin-bottom: 15px;
    }

    @media screen and (max-width: 768px){
        h4{
            font-size: 18px;
        }
    }
    
`


const CiImageBox = styled.div`
    display: flex;
    justify-content: space-between;

    div{
        height: 200px;
        width: 48.333%;
        border: 1px solid #e0e0e0;
        background: #fff url(${Logo}) center no-repeat;
        background-size: 300px 80px;
    }
    div:last-child{
        background: #000 url(${LogoBlack}) center no-repeat;
        background-size: 300px 80px;
    }
    

    @media screen and (max-width: 1200px){
        display: block;
        div{
            width: 100%;
        }
        div:last-child{
            margin-top: 40px;
        }
        
    }
    @media screen and (max-width: 768px){
        div{
            height: 150px;
            background-size: 200px 50px;
        }
        div:last-child{
            margin-top: 20px;
            background-size: 200px 50px;
        }
        
    }
`

const ButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    button{
        background-color: #fff;
        border: 1px solid #ff4d15;
        border: 1px solid var(--col_acc);
        border-radius: 5px;
        color: #ff4d15;
        color: var(--col_acc);
        font-size: 18px;
        font-weight: 500;
        height: 60px;
        transition: all .3s ease;
        width: 230px;
    }
    button:hover{
        background-color: #ff4d15;
        background-color: var(--col_acc);
        color: #fff;
        transition: all .3s ease;
    }
    button:first-child{
        margin-right: 10px;
    }
    @media screen and (max-width: 768px){
        display: block;
        margin-top: 50px;
        button{
            font-size: 14px;
            height: 45px;
            line-height: 45px;
            margin-right: 0;
            width: 100%;
        }
        button:first-child{
            margin-bottom: 10px;
            margin-right: 0;
        }

    }
`



const CiTitle2 = styled.h2`
    
    @media screen and (max-width: 1200px){
        
    }
    @media screen and (max-width: 768px){
        
    }
`