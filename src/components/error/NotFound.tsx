import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import errorBackGround from "@/resources/images/commons/error_bg.png";
import iconArrow from "@/resources/icons/commons/icon_error_arrow.png";

const NotFound = () => {
    return (
        <ErrorRow>
            <ErrorContainer>
                <BackgroundBox/>
                <TextBox>
                    <h3>죄송합니다</h3>
                    <h4>원하시는 페이지를 찾을 수 없습니다.</h4>
                    <p>찾으려는 페이지의 주소 변경 혹은 삭제로 인해 페이지를 찾을 수 없습니다.</p>
                    <p>입력하신 주소가 정확한지 다시 한 번 확인해 주시기 바랍니다.</p>
                    <Link  to="/">
                        홈으로 이동
                    </Link>
                </TextBox>

            </ErrorContainer>
        </ErrorRow>
    );
};

export default NotFound;

const ErrorRow = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
    min-height: 100vh;
    min-width: 100vw;
    @media screen and (max-width: 1200px){
        max-width: 100%;
        min-height: auto;
        padding: 80px 20px;
    }
    @media screen and (max-width: 768px){
        padding: 50px 20px;
    }
`

const ErrorContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 864px;
    @media screen and (max-width: 1200px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
` 
const BackgroundBox = styled.div`
    background: #fff url(${errorBackGround}) center no-repeat;
    background-size: contain;
    height: 267px;
    width: 267px;
    @media screen and (max-width: 768px){
        height: 200px;
        width: 200px;
    }
`
const TextBox = styled.div`
    h3{
        font-size: 38px;
        font-weight: 600;
    }
    h4{
        font-size: 30px;
        font-weight: 500;
        margin-bottom: 60px;
    }
    p{
        font-size: 18px;
        font-weight: 400;
    }
    a{
        background: #fff url(${iconArrow}) center left 20px no-repeat;

        background-size: 24px;
        border: 1px solid #e1e1e1;
        border-radius: 5px;
        color: #000;
        display: inline-block;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: -1px;
        margin-top: 60px;
        padding: 10.5px 20px 10.5px 50px;

    }

    
    @media screen and (max-width: 1200px){
        margin-top: 80px;
        text-align: center;
        h3{

        }
        h4{

        }
        p{

        }
        a{
            
        }
    }

    @media screen and (max-width: 768px){
        h3{
            font-size: 30px;
        }
        h4{
            font-size: 20px;
        }
        p{
            font-size: 16px;
        }
        a{
            background-size: 20px;
            font-size: 14px;
        }
    }


`