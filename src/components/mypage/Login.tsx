import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
    return (
        <LoginContainer>
            <LoginWrap>
                <div>
                    <LoginTitle>로그인</LoginTitle>
                    <TextWrap>
                        <p>해당 웹사이트는 레퍼런스 정리를 위한 페이지 입니다.</p>
                        <p>로그인을 위해서는 Api연동이 필요합니다.</p>
                    </TextWrap>
                    <form>
                        <InputWrap>
                            <label htmlFor="loginId" className="ir_so">아이디</label>
                            <input type="text" id="loginId" name="id" placeholder="Api연동이 필요합니다."/>
                        </InputWrap>
                        <InputWrap>
                            <label htmlFor="loginPw" className="ir_so">비밀번호</label>
                            <input type="password" id="loginPw" name="pw" placeholder="Api연동이 필요합니다."/>
                        </InputWrap>
                        <LoginButtonWrap>
                            <button>로그인</button>
                        </LoginButtonWrap>
                        <RegisterButtonWrap>
                            <Link to="/mypage/register">회원가입</Link>
                        </RegisterButtonWrap>
                        <EtcButtonWrap>
                            <Link to="/mypage/findid">
                                아이디 찾기
                            </Link>
                            <Link to="/mypage/resetpwd">
                                비밀번호 재발급
                            </Link>
                        </EtcButtonWrap>
                    </form>
                </div>
            </LoginWrap>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    padding: 100px 0 100px 0;
    background-color: #F1F1F1;
    min-height: calc(100vh - 300px);
    @media screen and (max-width: 768px){
        padding: 100px 0 50px 0;
        min-height: auto;
    }
`

const LoginWrap = styled.div`
    margin: 0 auto;
    max-width: 620px;
    border: 1px solid #E0E0E0;
    padding: 60px 120px;
    background-color: #fff;
    border-radius: 20px;
    @media screen and (max-width: 768px){
        max-width: 90%;
        border: none;
        padding: 20px;
    }
`
const LoginTitle = styled.div`
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 22px;
    }
`
const TextWrap = styled.div`
    margin: 5px 0 60px 0;
    p{
        font-size: 16px;
        font-weight: 400;
        color: #828282;
        text-align: center;
    }
    @media screen and (max-width: 768px){
        margin: 5px 0 50px 0;
        p{
            font-size: 12px;
        }
    }
`
const InputWrap = styled.div`
    margin-bottom: 10px;
    input{
        width: 100%;
        height: 50px;
        border: 1px solid #E0E0E0;
        border-radius: 5px;
        padding-left: 20px;
        font-size: 16px;
        color: #828282;
    }
    input::placeholder{
        color: #BDBDBD;
    }
    @media screen and (max-width: 768px){
        input{
            height: 40px;
            font-size: 14px;
            padding-left: 15px;
        }
        
    }
`
const LoginButtonWrap = styled.div`
    margin-top: 30px;
    button{
        width: 100%;
        height: 60px;
        background-color: #fff;
        border-radius: 5px;
        color: var(--col_acc);
        font-size: 18px;
        font-weight: 700;
        box-sizing: border-box;
        border: 1px solid var(--col_acc);
        transition: all .3s ease;
    }
    button:hover{
        background-color: var(--col_acc);
        border: 1px solid var(--col_acc);
        color: #fff;
        transition: all .3s ease;
    }
    @media screen and (max-width: 1200px){
        button{
            background: var(--col_acc);
            color: #fff;
        }
    }
    @media screen and (max-width: 768px){
        margin-top: 40px;
        button{
            height: 50px;
            font-size: 16px;
            background: var(--col_acc);
            color: #fff;
        }
    }
`
const RegisterButtonWrap = styled.div`
    margin-top: 10px;
    a{
        display: block;
        width: 100%;
        text-align: center;
        height: 60px;
        line-height: 60px;
        background-color: #fff;
        border-radius: 5px;
        color: var(--col_acc);
        border: 1px solid var(--col_acc);
        font-size: 18px;
        font-weight: 700;
        box-sizing: border-box;
        transition: all .3s ease;
    }
    a:hover{
        background-color: var(--col_acc);
        border: 1px solid var(--col_acc);
        color: #fff;
        transition: all .3s ease;
    }
    @media screen and (max-width: 1200px){
        a:hover{
            background-color: #fff;
            color: var(--col_acc);
        }
    }
    @media screen and (max-width: 768px){
        a{
            height: 50px;
            line-height: 50px;
            font-size: 16px;
        }
    }
`
const EtcButtonWrap = styled.div`
    text-align: center;
    margin-top: 45px;
    a{
        font-size: 16px;
        font-weight: 400;
        color: #828282;
        display: inline-block;
        padding: 0 20px;
    }
    a:hover{
        color: var(--col_acc);
        transition: all .3s ease;
    }
    a:first-child {
        position: relative;
    }
    a:first-child::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 1px;
        height: 14px;
        background-color: #BDBDBD;
    }

    @media screen and (max-width: 768px){
        margin-top: 30px;
        a{
            font-size: 14px;
        }
    }

`